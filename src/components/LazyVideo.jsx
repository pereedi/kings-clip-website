import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Autoplaying, muted, looping, inline video that:
 *  - shows the original design image as `poster` until it can play,
 *  - only attaches its `src` once it is near the viewport (lazy load),
 *  - plays while visible (and `active`), pauses when scrolled away,
 *  - falls back to a static image when the user prefers reduced motion.
 *
 * `videoRef` gives parents access to the <video> element (timecode sync etc.).
 * `paused` lets a parent force-pause (e.g. the hero monitor play button).
 */
export default function LazyVideo({
  src,
  poster,
  alt = '',
  className = '',
  active = true,
  paused = false,
  videoRef,
  onTimeUpdate,
  style,
}) {
  const innerRef = useRef(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced] = useState(prefersReducedMotion);

  const setRefs = (el) => {
    innerRef.current = el;
    if (videoRef) videoRef.current = el;
  };

  // Observe viewport proximity / visibility.
  useEffect(() => {
    const el = innerRef.current;
    if (!el || reduced) return undefined;
    const nearObs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setNear(true),
      { rootMargin: '400px 0px' }
    );
    const visObs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    nearObs.observe(el);
    visObs.observe(el);
    return () => {
      nearObs.disconnect();
      visObs.disconnect();
    };
  }, [reduced]);

  // Play / pause according to visibility + parent state.
  useEffect(() => {
    const el = innerRef.current;
    if (!el || !near) return;
    el.muted = true; // required for autoplay policies
    if (visible && active && !paused) {
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      el.pause();
    }
  }, [near, visible, active, paused]);

  if (reduced) {
    return <img className={className} src={poster} alt={alt} style={style} />;
  }

  return (
    <video
      ref={setRefs}
      className={className}
      style={style}
      poster={poster}
      src={near ? src : undefined}
      muted
      loop
      playsInline
      preload={near ? 'auto' : 'none'}
      aria-label={alt || undefined}
      onTimeUpdate={onTimeUpdate}
      disablePictureInPicture
    />
  );
}
