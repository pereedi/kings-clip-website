import { useState, useRef, useEffect, useCallback } from 'react';
import Icon from './Icon';
import LazyVideo from './LazyVideo';
import { media } from '../data/media';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 50%
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = (clientX - rect.left) / rect.width;
    if (pos < 0.05) pos = 0.05;
    if (pos > 0.95) pos = 0.95;
    setSliderPos(pos * 100);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };
    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className="section section--tint-30" id="before-after">
      <div className="container--1200" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-head--center" style={{ maxWidth: '42rem', marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">Color Science</span>
          <h2 className="section-title">
            The Power of Cinematic Color &amp; Polish
          </h2>
          <p className="section-lead" style={{ marginTop: '0.5rem' }}>
            Drag the slider to see how KingsClip transforms lifeless flat log sensor data into deep, award-winning cinematic tones.
          </p>
        </div>

        {/* Draggable Split Comparison Container */}
        <div
          ref={containerRef}
          className="split-compare-box"
          onPointerDown={handlePointerDown}
        >
          {/* After Video (Full width background) */}
          <div className="compare-layer-after">
            <LazyVideo
              src={media.compareAfter.src}
              poster={media.compareAfter.poster}
              alt={media.compareAfter.alt}
            />
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: 'var(--on-secondary-container)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, boxShadow: 'var(--shadow-md)' }}>
              KINGSCLIP LOOK
            </div>
          </div>

          {/* Before Video (Clipped width) */}
          <div
            className="compare-layer-before"
            style={{ width: `${sliderPos}%` }}
          >
            <div style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', height: '100%' }}>
              <LazyVideo
                src={media.compareBefore.src}
                poster={media.compareBefore.poster}
                alt={media.compareBefore.alt}
              />
            </div>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-surface-container-highest) / 0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: 'var(--on-surface)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap' }}>
              RAW S-LOG FOOTAGE
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="compare-divider-handle"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="compare-handle-knob">
              <Icon name="unfold_more" size={20} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-md)', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-sans)', fontSize: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--surface-variant)' }}></span>
            Rec.709 Neutralized
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--secondary)' }}></span>
            KingsClip 3D Film Curve Active
          </span>
        </div>
      </div>
    </section>
  );
}
