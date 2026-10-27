import { useState } from 'react';
import LazyVideo from './LazyVideo';
import { media } from '../data/media';

const templatesList = [
  {
    id: 1,
    cat: 'cinematic',
    title: 'Cinematic Title Intro',
    subtitle: '3D Camera tracker + Glitch fade',
    tag: 'Cinema',
    tagBg: 'rgba(6, 14, 30, 0.8)',
    tagColor: 'var(--on-surface)',
    media: media.tTitle,
  },
  {
    id: 2,
    cat: 'youtube',
    title: 'Documentary Vlog Pack',
    subtitle: 'Chapters, lower-thirds & charts',
    tag: 'YouTube',
    tagBg: 'rgba(6, 14, 30, 0.8)',
    tagColor: 'var(--on-surface)',
    media: media.tDoc,
  },
  {
    id: 3,
    cat: 'social',
    title: 'Kinetic Reel Accelerator',
    subtitle: 'Dynamic hooks & sound FX included',
    tag: 'Viral 9:16',
    tagBg: 'rgba(239, 53, 255, 0.9)',
    tagColor: 'var(--on-secondary-container)',
    media: media.tReel,
  },
  {
    id: 4,
    cat: 'commercial',
    title: 'Product Commercial Pro',
    subtitle: 'Feature callouts & price cards',
    tag: 'Brand',
    tagBg: 'var(--tertiary-container)',
    tagColor: 'var(--on-tertiary-container)',
    media: media.tProduct,
  },
];

export default function Templates() {
  const [activeCat, setActiveCat] = useState('all');

  const filteredTemplates = templatesList.filter(
    (t) => activeCat === 'all' || t.cat === activeCat
  );

  return (
    <section className="section section--tint-40" id="templates">
      <div className="container">
        <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '42rem' }}>
          <span className="eyebrow">Turnkey Production</span>
          <h2 className="section-title">
            Start with Inspiration. Finish with Your Signature.
          </h2>
          <p className="section-lead" style={{ marginTop: '0.25rem' }}>
            Over 500+ customizable presets engineered by world-class post-production directors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="template-pills-row">
          <button
            type="button"
            className={`template-pill ${activeCat === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCat('all')}
          >
            All Templates
          </button>
          <button
            type="button"
            className={`template-pill ${activeCat === 'social' ? 'active' : ''}`}
            onClick={() => setActiveCat('social')}
          >
            Social Media (9:16)
          </button>
          <button
            type="button"
            className={`template-pill ${activeCat === 'youtube' ? 'active' : ''}`}
            onClick={() => setActiveCat('youtube')}
          >
            YouTube Longform
          </button>
          <button
            type="button"
            className={`template-pill ${activeCat === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveCat('commercial')}
          >
            Commercial &amp; Brand
          </button>
          <button
            type="button"
            className={`template-pill ${activeCat === 'cinematic' ? 'active' : ''}`}
            onClick={() => setActiveCat('cinematic')}
          >
            Cinematic Narrative
          </button>
        </div>

        {/* Templates Grid */}
        <div className="templates-grid">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="template-card group">
              <div className="template-thumb-box">
                <LazyVideo
                  src={template.media.src}
                  poster={template.media.poster}
                  alt={template.media.alt}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    padding: '0.125rem 0.5rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: template.tagBg,
                    color: template.tagColor,
                    fontSize: '10px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {template.tag}
                </span>
              </div>
              <span className="t-label-md" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>
                {template.title}
              </span>
              <span className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginTop: '0.125rem' }}>
                {template.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
