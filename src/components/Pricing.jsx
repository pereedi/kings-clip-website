import Icon from './Icon';

export default function Pricing() {
  return (
    <section className="section section--tint-30" id="pricing">
      <div className="container--1200">
        <div className="section-head--center" style={{ maxWidth: '42rem', marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow">Transparent Investment</span>
          <h2 className="section-title">
            Simple Plans for Relentless Creators
          </h2>
          <p className="section-lead" style={{ marginTop: '0.5rem' }}>
            Start for free, upgrade when your production velocity demands it.
          </p>
        </div>

        {/* Pricing Cards (3 Tiers) */}
        <div className="pricing-grid">
          {/* Tier 1: Free */}
          <div className="pricing-card">
            <div>
              <span className="t-label-md" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>Starter Editor</span>
              <div style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <span className="t-headline-xl" style={{ color: 'var(--on-surface)', fontWeight: 700 }}>$0</span>
                <span className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}> / forever</span>
              </div>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-lg)' }}>
                Essential editing tools for creators just beginning their journey.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--on-surface)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> Up to 1080p 60FPS Exports</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> Unlimited timeline tracks</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> 5GB Free Cloud Storage</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> No Watermark on exports</li>
              </ul>
            </div>
            <a className="pricing-btn-secondary" href="#editor-preview">
              Get Started Free
            </a>
          </div>

          {/* Tier 2: Pro (Crown Tier Favorite) */}
          <div className="pricing-card pricing-card-featured">
            <div className="featured-badge">
              <Icon name="star" fill size={14} />
              CREATOR FAVORITE
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="t-label-md" style={{ color: 'var(--primary)', fontWeight: 700 }}>Pro Creator</span>
                <Icon name="military_tech" size={20} style={{ color: 'var(--tertiary)' }} />
              </div>
              <div style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <span className="t-headline-xl" style={{ color: 'var(--on-surface)', fontWeight: 700 }}>$19</span>
                <span className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}> / month</span>
              </div>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-lg)' }}>
                Unleash high-framerate 4K exports and neural AI capabilities.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--on-surface)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--secondary)' }} /> Everything in Starter</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--secondary)' }} /> 4K HDR 60FPS ProRes &amp; AV1</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--secondary)' }} /> Unlimited Auto AI Subtitles</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--secondary)' }} /> AI Depth Matte &amp; Background Removal</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--secondary)' }} /> 250GB Ultra-Fast Cloud Vault</li>
              </ul>
            </div>
            <a className="pricing-btn-primary" href="#editor-preview">
              Upgrade to Pro
            </a>
          </div>

          {/* Tier 3: Studio Team */}
          <div className="pricing-card">
            <div>
              <span className="t-label-md" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>Studio Team</span>
              <div style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <span className="t-headline-xl" style={{ color: 'var(--on-surface)', fontWeight: 700 }}>$49</span>
                <span className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}> / month / seat</span>
              </div>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-lg)' }}>
                Multi-editor collaboration suites for production studios and agencies.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--on-surface)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> Everything in Pro</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> Real-time Multi-editor timeline locking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> 2TB Shared Studio Cloud Drive</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="check" size={18} style={{ color: 'var(--primary)' }} /> Priority Cloud GPU Render Queue</li>
              </ul>
            </div>
            <a className="pricing-btn-secondary" href="#contact">
              Contact Enterprise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
