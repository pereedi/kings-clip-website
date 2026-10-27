import { useState } from 'react';
import Icon from './Icon';
import LazyVideo from './LazyVideo';
import { media } from '../data/media';

export default function Showcase() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="section section--tint-40" id="showcase">
      <div className="container">
        <div className="section-head--center" style={{ maxWidth: '48rem', marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">Engineered For Velocity</span>
          <h2 className="section-title" style={{ marginBottom: 'var(--space-sm)' }}>
            From Raw Footage to Remarkable Stories
          </h2>
          <p className="section-lead">
            Everything you need to shape your footage, find your rhythm, and bring your ideas to life without slowing down your computer.
          </p>
        </div>

        {/* Stage Switcher Tabs */}
        <div className="showcase-tabs-container">
          <button
            type="button"
            className={`stage-tab-btn ${activeStage === 1 ? 'active' : ''}`}
            onClick={() => setActiveStage(1)}
          >
            <Icon name="content_cut" size={18} />
            1. Edit — Trim &amp; Timeline
          </button>
          <button
            type="button"
            className={`stage-tab-btn ${activeStage === 2 ? 'active' : ''}`}
            onClick={() => setActiveStage(2)}
          >
            <Icon name="auto_fix_high" size={18} />
            2. Enhance — FX &amp; Color
          </button>
          <button
            type="button"
            className={`stage-tab-btn ${activeStage === 3 ? 'active' : ''}`}
            onClick={() => setActiveStage(3)}
          >
            <Icon name="ios_share" size={18} />
            3. Export — Multi-Platform
          </button>
        </div>

        {/* Showcase Content Containers */}
        <div style={{ width: '100%' }}>
          {/* Stage 1 */}
          {activeStage === 1 && (
            <div className="stage-panel-grid">
              <div className="stage-panel-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600 }}>
                  <Icon name="speed" size={18} />
                  ZERO RENDERING LATENCY
                </div>
                <h3 className="t-headline-lg" style={{ color: 'var(--on-surface)' }}>
                  Magnetic Timeline with Real-Time Snapping
                </h3>
                <p className="t-body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
                  Slice, rearrange, and ripple-edit clips instantly without audio desync or track collisions. KingsClip's hybrid timeline adapts dynamically whether you're building a 15-second TikTok or an indie feature film.
                </p>
                <ul className="feature-checklist">
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--primary)' }} /> Optical flow multi-speed ramping</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--primary)' }} /> Waveform-locked beat grid alignment</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--primary)' }} /> Unlimited non-destructive nesting layers</li>
                </ul>
              </div>

              <div className="stage-panel-media">
                <LazyVideo
                  src={media.stageTimeline.src}
                  poster={media.stageTimeline.poster}
                  alt={media.stageTimeline.alt}
                />
                <div className="stage-media-overlay">
                  <div className="stage-tag-badge">
                    Playhead: 00:00:48:12 • Snapped to Beat
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stage 2 */}
          {activeStage === 2 && (
            <div className="stage-panel-grid">
              <div className="stage-panel-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600 }}>
                  <Icon name="flare" size={18} />
                  STUDIO 32-BIT COLOR ENGINE
                </div>
                <h3 className="t-headline-lg" style={{ color: 'var(--on-surface)' }}>
                  AI Color Matching &amp; Hollywood Presets
                </h3>
                <p className="t-body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
                  Transform flat camera profiles into rich, cinematic visuals in one click. Apply custom 3D LUTs, isolate skin tones with neural precision masks, and dynamically adjust atmospheric exposure.
                </p>
                <ul className="feature-checklist">
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--secondary)' }} /> Instant shot-to-shot color harmonization</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--secondary)' }} /> 140+ Curated film stocks &amp; grain profiles</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--secondary)' }} /> Real-time HDR scopes (Vectorscope &amp; Waveform)</li>
                </ul>
              </div>

              <div className="stage-panel-media">
                <LazyVideo
                  src={media.stageColor.src}
                  poster={media.stageColor.poster}
                  alt={media.stageColor.alt}
                />
                <div className="stage-media-overlay">
                  <div className="stage-tag-badge">
                    Active LUT: KingsClip_NeonNoir_3D.cube
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stage 3 */}
          {activeStage === 3 && (
            <div className="stage-panel-grid">
              <div className="stage-panel-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--tertiary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600 }}>
                  <Icon name="cloud_upload" size={18} />
                  INSTANT MULTI-RATIO RENDERING
                </div>
                <h3 className="t-headline-lg" style={{ color: 'var(--on-surface)' }}>
                  Export Once, Deliver to Every Platform
                </h3>
                <p className="t-body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
                  Auto-reframe automatically tracks your focal subject across 16:9 widescreen, 9:16 vertical reels, and 1:1 square feeds. Queue batch renders to local disk or push directly to YouTube and TikTok simultaneously.
                </p>
                <ul className="feature-checklist">
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--tertiary)' }} /> Hardware-accelerated ProRes, H.265, and AV1</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--tertiary)' }} /> Intelligent subject auto-centering for vertical videos</li>
                  <li><Icon name="check_circle" size={18} style={{ color: 'var(--tertiary)' }} /> Cloud rendering offload for low-spec laptops</li>
                </ul>
              </div>

              <div className="stage-panel-media">
                <LazyVideo
                  src={media.stageExport.src}
                  poster={media.stageExport.poster}
                  alt={media.stageExport.alt}
                />
                <div className="stage-media-overlay">
                  <div className="stage-tag-badge">
                    Export Batch Complete • 4K 60fps in 18.4s
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
