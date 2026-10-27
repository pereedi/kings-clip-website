import Icon from './Icon';

export default function Audience() {
  return (
    <section className="section" id="for-creators">
      <div className="container">
        <div className="section-head--center" style={{ maxWidth: '42rem', marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow">Versatile Architecture</span>
          <h2 className="section-title">
            Made for Every Kind of Creator
          </h2>
          <p className="section-lead" style={{ marginTop: '0.5rem' }}>
            Tailored workspaces that adapt to your exact post-production cadence.
          </p>
        </div>

        {/* 4 Tailored Creator Cards */}
        <div className="audience-grid">
          {/* Card 1: Content Creators */}
          <div className="audience-card group">
            <div>
              <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Icon name="smart_display" size={24} />
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Content Creators
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Cut YouTube vlogs in half the time with automatic silence removal, chapter generation, and automated captioning.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgb(var(--rgb-outline-variant) / 0.1)', paddingTop: 'var(--space-sm)', fontSize: '12px', fontFamily: 'var(--font-sans)', color: 'var(--primary)' }}>
              • YouTube 4K &amp; Shorts Optimized
            </div>
          </div>

          {/* Card 2: Filmmakers & Directors */}
          <div className="audience-card group">
            <div>
              <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Icon name="theaters" size={24} />
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Indie Filmmakers
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Full color grading suites, optical flow slow-motion, ACES color management, and seamless multi-cam synchronizations.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgb(var(--rgb-outline-variant) / 0.1)', paddingTop: 'var(--space-sm)', fontSize: '12px', fontFamily: 'var(--font-sans)', color: 'var(--secondary)' }}>
              • ProRes 4444 XQ &amp; DCI 4K
            </div>
          </div>

          {/* Card 3: Businesses & Brands */}
          <div className="audience-card group">
            <div>
              <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-tertiary) / 0.2)', color: 'var(--tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Icon name="business_center" size={24} />
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Growth Brands
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Produce high-converting commercial advertisements, product promos, and investor recaps with clean brand kit integration.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgb(var(--rgb-outline-variant) / 0.1)', paddingTop: 'var(--space-sm)', fontSize: '12px', fontFamily: 'var(--font-sans)', color: 'var(--tertiary)' }}>
              • Team Asset Vault &amp; Collaboration
            </div>
          </div>

          {/* Card 4: Social Media Teams */}
          <div className="audience-card group">
            <div>
              <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-primary) / 0.2)', color: 'var(--primary-fixed)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Icon name="trending_up" size={24} />
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Social Teams
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                High-velocity batch exports for TikTok, Instagram Reels, and YouTube Shorts with automatic safe-zone overlays.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgb(var(--rgb-outline-variant) / 0.1)', paddingTop: 'var(--space-sm)', fontSize: '12px', fontFamily: 'var(--font-sans)', color: 'var(--primary-fixed)' }}>
              • Multi-Account Direct Publishing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
