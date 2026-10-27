import Icon from './Icon';

export default function AITools() {
  return (
    <section className="section section--tint-30" style={{ position: 'relative', overflow: 'hidden' }} id="ai-tools">
      <div style={{ position: 'absolute', top: '-8rem', right: '2.5rem', width: '600px', height: '600px', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.1)', filter: 'blur(150px)', pointerEvents: 'none', borderRadius: '9999px' }}></div>
      <div style={{ position: 'absolute', bottom: '-8rem', left: '2.5rem', width: '600px', height: '600px', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.15)', filter: 'blur(150px)', pointerEvents: 'none', borderRadius: '9999px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-head--split">
          <div style={{ maxWidth: '42rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--surface-container-high)', color: 'var(--secondary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, marginBottom: 'var(--space-sm)', boxShadow: 'var(--shadow-sm)' }}>
              <Icon name="psychology" size={16} />
              NEURAL POST-PRODUCTION
            </div>
            <h2 className="section-title">
              A Smarter Way to Create
            </h2>
            <p className="section-lead" style={{ marginTop: '0.5rem' }}>
              Bring your creative workflow together with tools designed to help you move from idea to finished video at lightspeed.
            </p>
          </div>
          <div className="t-label-md" style={{ color: 'var(--on-surface-variant)' }}>
            Trained on over 10M+ award-winning commercial edits.
          </div>
        </div>

        {/* 5 AI Capability Cards Mosaic */}
        <div className="ai-tools-grid">
          {/* Tool 1 */}
          <div className="ai-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                <span style={{ padding: '0.5rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.2)', color: 'var(--primary)' }}>
                  <Icon name="closed_caption" size={24} />
                </span>
                <span className="t-label-sm" style={{ color: 'var(--primary)', padding: '0.125rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--surface-container)' }}>
                  99.4% Accuracy
                </span>
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Automatic Subtitle Generation
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Instant dynamic karaoke captions with automatic emoji pairing and viral social typography templates.
              </p>
            </div>
            <div style={{ padding: 'var(--space-sm)', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-surface-container-lowest) / 0.8)', color: 'var(--on-surface)' }}>
              <span className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Preview:</span>
              <div style={{ marginTop: '0.25rem', fontWeight: 700, textAlign: 'center', padding: '0.5rem 0', backgroundColor: 'rgb(var(--rgb-surface-container) / 0.5)', borderRadius: 'var(--radius)', color: 'var(--primary)' }}>
                “This shot changed <span style={{ color: 'var(--secondary)', textDecoration: 'underline wavy' }}>EVERYTHING</span>”
              </div>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="ai-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                <span style={{ padding: '0.5rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.2)', color: 'var(--secondary)' }}>
                  <Icon name="auto_videocam" size={24} />
                </span>
                <span className="t-label-sm" style={{ color: 'var(--secondary)', padding: '0.125rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--surface-container)' }}>
                  Instant Cuts
                </span>
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Smart Scene Detection
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Analyze multi-hour recordings in seconds. Automatically detect camera angles, silence gaps, and repetitive takes.
              </p>
            </div>
            <div className="t-code" style={{ padding: 'var(--space-sm)', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-surface-container-lowest) / 0.8)', color: 'var(--on-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Detected 28 Cuts in 3.2s</span>
              <Icon name="check" size={18} style={{ color: 'var(--secondary)' }} />
            </div>
          </div>

          {/* Tool 3 */}
          <div className="ai-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                <span style={{ padding: '0.5rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-tertiary) / 0.2)', color: 'var(--tertiary)' }}>
                  <Icon name="layers" size={24} />
                </span>
                <span className="t-label-sm" style={{ color: 'var(--tertiary)', padding: '0.125rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--surface-container)' }}>
                  No Green Screen
                </span>
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                AI Depth Matte &amp; Rotoscoping
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Separate foreground subjects from backgrounds with single-click neural edge estimation. Place text behind people in 1 second.
              </p>
            </div>
            <div style={{ padding: 'var(--space-sm)', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-surface-container-lowest) / 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-sans)', fontSize: '12px' }}>
              <span>Roto Brush 4.0</span>
              <span style={{ color: 'var(--tertiary)', fontWeight: 600 }}>Sub-Pixel Matting</span>
            </div>
          </div>

          {/* Tool 4 */}
          <div className="ai-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                <span style={{ padding: '0.5rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.2)', color: 'var(--primary)' }}>
                  <Icon name="insights" size={24} />
                </span>
                <span className="t-label-sm" style={{ color: 'var(--primary)', padding: '0.125rem 0.5rem', borderRadius: '9999px', backgroundColor: 'var(--surface-container)' }}>
                  Retention Max
                </span>
              </div>
              <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                Pacing &amp; Retention Analytics
              </h3>
              <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-md)' }}>
                Real-time heatmaps that flag dead pauses, lagging visual pacing, and suggest rhythm-tightening cuts for maximum viewer hold.
              </p>
            </div>
            <div className="t-code" style={{ padding: 'var(--space-sm)', borderRadius: 'var(--radius-xl)', backgroundColor: 'rgb(var(--rgb-surface-container-lowest) / 0.8)', color: 'var(--on-surface-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Average Pacing Score</span>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>96 / 100</span>
            </div>
          </div>

          {/* Tool 5 */}
          <div className="ai-card ai-card-large ai-card-span2" style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-lg)' }}>
              <div style={{ maxWidth: '28rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.125rem 0.625rem', borderRadius: '9999px', backgroundColor: 'rgb(var(--rgb-tertiary-container) / 0.3)', color: 'var(--tertiary-fixed)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <Icon name="lock_clock" size={14} />
                  COMING NEXT QUARTER
                </div>
                <h3 className="t-headline-sm" style={{ color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                  Prompt-to-Rough-Cut Engine
                </h3>
                <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)' }}>
                  Type your narrative script or storyboard prompt, and KingsClip pulls your tagged B-roll into an assembled first cut with matched music.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 'var(--space-sm)', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--surface-container-lowest)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-sans)', fontSize: '12px' }}>
                <span style={{ color: 'var(--on-surface-variant)' }}>Input:</span>
                <span className="t-code" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
                  “Fast-paced gym montage with drum beats”
                </span>
                <Icon name="auto_awesome" size={18} style={{ color: 'var(--secondary)', marginLeft: '0.5rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
