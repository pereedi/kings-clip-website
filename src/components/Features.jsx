import Icon from './Icon';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '42rem' }}>
          <span className="eyebrow">Core Architecture</span>
          <h2 className="section-title" style={{ marginBottom: 'var(--space-sm)' }}>
            Everything You Need to Shape the Cut
          </h2>
          <p className="section-lead">
            Crafted by professional video editors to remove workflow friction and amplify creative instinct.
          </p>
        </div>

        {/* Bento Grid (5 Features) */}
        <div className="bento-grid">
          {/* Large Card 1: Precision Video Editing */}
          <div className="bento-card bento-card-span2 group">
            <div>
              <div
                className="bento-icon-box"
                style={{
                  backgroundColor: 'rgb(var(--rgb-primary-container) / 0.2)',
                  color: 'var(--primary)',
                  boxShadow: '0 0 20px rgba(0, 107, 255, 0.3)',
                }}
              >
                <Icon name="movie_edit" size={28} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                Precision Editing
              </span>
              <h3 className="t-headline-md" style={{ color: 'var(--on-surface)', marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>
                Magnetic Multi-Track Engine
              </h3>
              <p className="t-body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '36rem' }}>
                Experience zero micro-stutters when editing uncompressed 8K RAW streams. Seamless snapping, custom J-K-L hotkey shuttles, and non-destructive compound clips give you absolute timeline mastery.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-lg)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', backgroundColor: 'var(--surface-container-lowest)', padding: 'var(--space-md)', boxShadow: 'var(--shadow-inner)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="anim-pulse" style={{ width: '0.625rem', height: '0.625rem', borderRadius: '9999px', backgroundColor: 'var(--primary)' }}></span>
                <span className="t-code" style={{ color: 'var(--on-surface)' }}>Sub-frame Razor Precision (1/1000s)</span>
              </div>
              <div style={{ width: '100%', height: '2rem', backgroundColor: 'var(--surface-container)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', padding: '0 0.75rem', gap: '0.5rem' }}>
                <div style={{ height: '1rem', backgroundColor: 'var(--primary-container)', borderRadius: 'var(--radius)', width: '25%' }}></div>
                <div style={{ height: '1rem', backgroundColor: 'var(--secondary-container)', borderRadius: 'var(--radius)', width: '33.333%' }}></div>
                <div style={{ height: '1rem', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius)', width: '20%' }}></div>
                <div style={{ height: '1rem', backgroundColor: 'var(--tertiary-container)', borderRadius: 'var(--radius)', flex: '1 1 0%' }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Cinematic Effects & Transitions */}
          <div className="bento-card">
            <div>
              <div
                className="bento-icon-box"
                style={{
                  backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.2)',
                  color: 'var(--secondary)',
                  boxShadow: '0 0 20px rgba(239, 53, 255, 0.3)',
                }}
              >
                <Icon name="blur_on" size={28} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--secondary)', marginBottom: '0.25rem' }}>
                Motion FX
              </span>
              <h3 className="t-headline-md" style={{ color: 'var(--on-surface)', marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>
                Cinematic Optical Transitions
              </h3>
              <p className="t-body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Seamless whip pans, film burns, anamorphic lens flares, and GPU-calculated optical flow zoom blurs that elevate every cut.
              </p>
            </div>
            <div className="bento-card-bottom">
              <span style={{ color: 'var(--on-surface-variant)' }}>Dynamic Motion Blur</span>
              <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>180° Shutter Angle</span>
            </div>
          </div>

          {/* Card 3: Professional Color Grading */}
          <div className="bento-card">
            <div>
              <div
                className="bento-icon-box"
                style={{
                  backgroundColor: 'rgb(var(--rgb-tertiary) / 0.2)',
                  color: 'var(--tertiary)',
                  boxShadow: '0 0 20px rgba(255, 186, 32, 0.3)',
                }}
              >
                <Icon name="palette" size={28} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--tertiary)', marginBottom: '0.25rem' }}>
                True Color
              </span>
              <h3 className="t-headline-md" style={{ color: 'var(--on-surface)', marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>
                High-Dynamic Color Wheels
              </h3>
              <p className="t-body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Master grading panels with custom tone mapping, 3D LUT interpolation, and precision skin-tone vector isolation lines.
              </p>
            </div>
            <div className="bento-card-bottom">
              <span style={{ color: 'var(--on-surface-variant)' }}>Color Space</span>
              <span style={{ color: 'var(--tertiary)', fontWeight: 600 }}>ACEScc / Rec.2020</span>
            </div>
          </div>

          {/* Card 4: Audio That Moves Your Story */}
          <div className="bento-card">
            <div>
              <div
                className="bento-icon-box"
                style={{
                  backgroundColor: 'rgb(var(--rgb-primary-container) / 0.2)',
                  color: 'var(--primary-fixed)',
                  boxShadow: '0 0 20px rgba(0, 107, 255, 0.3)',
                }}
              >
                <Icon name="equalizer" size={28} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                Soundstage
              </span>
              <h3 className="t-headline-md" style={{ color: 'var(--on-surface)', marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>
                Multi-Band Audio Sculpting
              </h3>
              <p className="t-body-md" style={{ color: 'var(--on-surface-variant)' }}>
                One-click AI vocal noise subtraction, automatic dialogue ducking under music tracks, and pristine 32-bit float audio support.
              </p>
            </div>
            <div className="bento-card-bottom">
              <span style={{ color: 'var(--on-surface-variant)' }}>Smart Ducking</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>-18dB Dynamic Auto</span>
            </div>
          </div>

          {/* Card 5: Social-Ready Video Formats */}
          <div className="bento-card">
            <div>
              <div
                className="bento-icon-box"
                style={{
                  backgroundColor: 'rgb(var(--rgb-secondary) / 0.2)',
                  color: 'var(--secondary-fixed-dim)',
                  boxShadow: '0 0 20px rgba(255, 169, 253, 0.3)',
                }}
              >
                <Icon name="aspect_ratio" size={28} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--secondary)', marginBottom: '0.25rem' }}>
                Omni-Channel
              </span>
              <h3 className="t-headline-md" style={{ color: 'var(--on-surface)', marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>
                Adaptive Aspect Ratios
              </h3>
              <p className="t-body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Switch in real time between 16:9 cinema, 9:16 vertical TikToks, and 1:1 Instagram posts while auto-tracking focal points.
              </p>
            </div>
            <div className="bento-card-bottom" style={{ justifyContent: 'space-around', color: 'var(--on-surface-variant)' }}>
              <span style={{ color: 'var(--on-surface)', fontWeight: 600 }}>16:9</span>
              <span>•</span>
              <span style={{ color: 'var(--on-surface)', fontWeight: 600 }}>9:16</span>
              <span>•</span>
              <span style={{ color: 'var(--on-surface)', fontWeight: 600 }}>4:5</span>
              <span>•</span>
              <span style={{ color: 'var(--on-surface)', fontWeight: 600 }}>1:1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
