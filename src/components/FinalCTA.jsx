import Icon from './Icon';
import { EMBLEM } from '../data/media';

export default function FinalCTA() {
  return (
    <section className="section" id="final-cta">
      <div className="final-cta-card">
        {/* Ambient Glow Behind CTA */}
        <div className="final-cta-glow"></div>

        {/* Logo Visual */}
        <div className="emblem-box">
          <img
            alt="KingsClip Emblem"
            className="emblem-img"
            src={EMBLEM}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '42rem' }}>
          <h2 className="section-title" style={{ marginBottom: 'var(--space-sm)' }}>
            Your Next Masterpiece Starts Here.
          </h2>
          <p className="section-lead" style={{ marginBottom: 'var(--space-xl)' }}>
            Bring your ideas to life, one frame at a time. Join over 250,000+ creators editing faster with KingsClip today.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-md)' }}>
            <a className="btn-hero" href="#editor-preview">
              <Icon name="star" fill size={20} />
              Start Creating Free
            </a>
            <a className="btn-ghost" style={{ backgroundColor: 'var(--surface-container-high)' }} href="#showcase">
              Explore All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
