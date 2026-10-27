import { useState } from 'react';
import Icon from './Icon';
import LazyVideo from './LazyVideo';
import { media } from '../data/media';

const galleryItems = [
  {
    id: 1,
    title: 'The Nordic Solitude',
    category: 'Travel Cinematic',
    tag: '120 FPS Slow-Mo',
    badge: '4K HDR',
    badgeClass: 'badge-primary',
    duration: '03:14',
    desc: 'Edited with dynamic anamorphic stretch & custom film grain.',
    media: media.gNordic,
    accentHover: 'accent-primary-hover',
  },
  {
    id: 2,
    title: 'Vogue Noir Spring Campaign',
    category: 'Fashion & Editorial',
    tag: 'Optical Flow Ramping',
    badge: 'Commercial',
    badgeClass: 'badge-secondary',
    duration: '00:45',
    desc: 'Speed-ramped to a bass-heavy electronic soundtrack.',
    media: media.gFashion,
    accentHover: 'accent-secondary-hover',
  },
  {
    id: 3,
    title: 'The Minimal Workspace 2025',
    category: 'Creator Tech Vlog',
    tag: 'AI Auto-Captioned',
    badge: '9:16 Crop',
    badgeClass: 'badge-tertiary',
    duration: '01:10',
    desc: 'Multi-ratio reframe with synchronized karaoke titles.',
    media: media.gDesk,
    accentHover: 'accent-tertiary-hover',
  },
  {
    id: 4,
    title: 'Chronos Titanium Teaser',
    category: 'Hardware Macro',
    tag: 'Depth Matte Stacking',
    badge: 'Macro Studio',
    badgeClass: 'badge-highest',
    duration: '00:30',
    desc: 'Ultra-sharp focal transitions with zero chroma bleeding.',
    media: media.gWatch,
    accentHover: 'accent-primary-hover',
  },
  {
    id: 5,
    title: 'Rain Over Shinjuku',
    category: 'Narrative Drama',
    tag: 'Halation & Bloom',
    badge: 'Kodak 500T',
    badgeClass: 'badge-primary',
    duration: '02:18',
    desc: 'Subtle film emulation and organic light halation.',
    media: media.gRain,
    accentHover: 'accent-primary-hover',
  },
  {
    id: 6,
    title: 'Red Rock Downhill 2025',
    category: 'High Energy Sports',
    tag: 'Beat Match FX',
    badge: 'Action Cut',
    badgeClass: 'badge-secondary',
    duration: '01:48',
    desc: 'Fast razor cuts synchronised automatically to audio transients.',
    media: media.gMtb,
    accentHover: 'accent-secondary-hover',
  },
];

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head--split">
          <div>
            <span className="eyebrow" style={{ color: 'var(--secondary)' }}>Made In KingsClip</span>
            <h2 className="section-title">
              Every Frame Has a Story
            </h2>
            <p className="section-lead" style={{ marginTop: '0.25rem' }}>
              See what world-class creators are crafting with our neural rendering engine.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--on-surface)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500 }}>
            <span className="anim-ping" style={{ width: '0.625rem', height: '0.625rem', borderRadius: '9999px', backgroundColor: 'var(--primary)' }}></span>
            Streaming in uncompressed 4K 60FPS
          </div>
        </div>

        {/* Video Grid (6 Real Categories) */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card group"
              onClick={() => setSelectedVideo(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedVideo(item)}
            >
              <div className="gallery-thumb-container">
                <LazyVideo
                  src={item.media.src}
                  poster={item.media.poster}
                  alt={item.media.alt}
                />
                <div className="gallery-card-overlay"></div>

                <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', padding: '0.125rem 0.5rem', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-surface-container-lowest) / 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: 'var(--on-surface)', fontFamily: 'var(--font-sans)', fontSize: '11px' }}>
                  {item.duration}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    padding: '0.125rem 0.5rem',
                    borderRadius: 'var(--radius)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    backgroundColor:
                      item.badgeClass === 'badge-primary'
                        ? 'var(--primary-container)'
                        : item.badgeClass === 'badge-secondary'
                        ? 'var(--secondary-container)'
                        : item.badgeClass === 'badge-tertiary'
                        ? 'var(--tertiary)'
                        : 'var(--surface-container-highest)',
                    color:
                      item.badgeClass === 'badge-primary'
                        ? 'var(--on-primary-container)'
                        : item.badgeClass === 'badge-secondary'
                        ? 'var(--on-secondary-container)'
                        : item.badgeClass === 'badge-tertiary'
                        ? 'var(--on-tertiary)'
                        : 'var(--on-surface)',
                  }}
                >
                  {item.badge}
                </div>

                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={`gallery-play-btn-circle ${item.accentHover}`}>
                    <Icon name="play_arrow" fill size={28} />
                  </div>
                </div>
              </div>

              <div style={{ padding: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-sans)', fontSize: '12px', marginBottom: '0.25rem' }}>
                  <span style={{ color: item.badgeClass === 'badge-secondary' ? 'var(--secondary)' : item.badgeClass === 'badge-tertiary' ? 'var(--tertiary)' : 'var(--primary)', fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <span>{item.tag}</span>
                </div>
                <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)' }}>
                  {item.title}
                </h3>
                <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (for full playback experience with sound) */}
      {selectedVideo && (
        <div className="lightbox-backdrop" onClick={() => setSelectedVideo(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedVideo(null)}
              title="Close"
            >
              <Icon name="close" size={24} />
            </button>
            <div style={{ position: 'relative', aspectRatio: '16 / 9', backgroundColor: '#000' }}>
              <video
                src={selectedVideo.media.src}
                poster={selectedVideo.media.poster}
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ padding: '1.25rem var(--space-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--surface-container)' }}>
              <div>
                <h4 className="t-headline-sm" style={{ color: 'var(--on-surface)' }}>{selectedVideo.title}</h4>
                <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}>{selectedVideo.desc}</p>
              </div>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--surface-container-high)', color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600 }}>
                {selectedVideo.badge}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
