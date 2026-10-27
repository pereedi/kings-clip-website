export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head--center" style={{ maxWidth: '42rem', marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow">Frictionless Process</span>
          <h2 className="section-title">
            Three Steps to Pure Cinema
          </h2>
          <p className="section-lead" style={{ marginTop: '0.5rem' }}>
            From SD cards to viral streams in minutes, not days.
          </p>
        </div>

        {/* Visual Connector Row */}
        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div
              className="step-num-box"
              style={{
                backgroundColor: 'var(--primary-container)',
                color: 'var(--on-primary-container)',
                boxShadow: '0 0 24px rgba(0, 107, 255, 0.4)',
              }}
            >
              1
            </div>
            <span className="eyebrow" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
              Import Stage
            </span>
            <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--space-xs)' }}>
              Bring Your Footage
            </h3>
            <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
              Drag and drop 4K or 8K files directly into the browser. KingsClip automatically creates instant lightweight proxy streams in the background.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div
              className="step-num-box"
              style={{
                backgroundColor: 'var(--secondary-container)',
                color: 'var(--on-secondary-container)',
                boxShadow: '0 0 24px rgba(239, 53, 255, 0.4)',
              }}
            >
              2
            </div>
            <span className="eyebrow" style={{ color: 'var(--secondary)', marginBottom: '0.25rem' }}>
              Crafting Stage
            </span>
            <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--space-xs)' }}>
              Make It Yours
            </h3>
            <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
              Shape your narrative rhythm on the magnetic timeline, drop in atmospheric audio stems, and dial in Hollywood LUTs with our precision color wheels.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div
              className="step-num-box"
              style={{
                backgroundColor: 'var(--tertiary-container)',
                color: 'var(--on-tertiary-container)',
                boxShadow: '0 0 24px rgba(255, 186, 32, 0.4)',
              }}
            >
              3
            </div>
            <span className="eyebrow" style={{ color: 'var(--tertiary)', marginBottom: '0.25rem' }}>
              Delivery Stage
            </span>
            <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--space-xs)' }}>
              Share Your Creation
            </h3>
            <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
              Export uncompressed ProRes for the big screen or auto-reframe for TikTok in seconds using distributed GPU cloud rendering clusters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
