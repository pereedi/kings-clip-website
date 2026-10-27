import { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import LazyVideo from './LazyVideo';
import { media } from '../data/media';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timecode, setTimecode] = useState('00:01:24:18');
  const [playheadPos, setPlayheadPos] = useState(38); // percentage along the timeline
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const total = videoRef.current.duration || 10;
    
    // Calculate realistic timecode: base 1m 24s + cur
    const totalSeconds = 84 + (cur % 15);
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
    const f = Math.floor((cur * 24) % 24).toString().padStart(2, '0');
    setTimecode(`00:${m}:${s}:${f}`);

    // Update playhead position smoothly across the timeline (from 25% to 65% for realism)
    const ratio = (cur % total) / total;
    setPlayheadPos(25 + ratio * 45);
  };

  return (
    <section className="hero-section">
      {/* Ambient Chromatic Glow Background */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <div className="hero-content">
        {/* Eyebrow Badge */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          <span className="hero-eyebrow-text">The Next Generation of Video Editing</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Your Vision. Your Story.{' '}
          <span className="gradient-text">Your Masterpiece.</span>
        </h1>

        {/* Supporting Text */}
        <p className="hero-lead">
          Turn your ideas into stunning videos with powerful editing tools, cinematic effects, and an ultra-fast workflow designed for creators.
        </p>

        {/* CTA Row */}
        <div className="hero-cta-row">
          <a className="btn-hero" href="#editor-preview">
            <Icon name="star" fill size={20} />
            Start Creating Free
          </a>
          <a className="hero-explore-btn" href="#showcase">
            <Icon name="play_circle" size={20} style={{ color: 'var(--primary)' }} />
            Explore the Editor
          </a>
        </div>

        <span className="hero-subtext">
          Your next great video starts here. No credit card required.
        </span>

        {/* ULTRA-REALISTIC DESKTOP WORKSPACE MOCKUP */}
        <div className="editor-mockup" id="editor-preview">
          {/* App Window Header Bar */}
          <div className="mockup-header">
            <div className="mockup-header-left">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="mockup-filename">
                <Icon name="movie" size={15} style={{ color: 'var(--tertiary)' }} />
                Cinematic_Tokyo_Neon_v4.kclip
              </span>
            </div>

            <div className="mockup-header-center">
              <span className="tag-badge" style={{ color: 'var(--primary)' }}>4K 60FPS</span>
              <span className="tag-badge" style={{ color: 'var(--tertiary)' }}>HDR PRO</span>
              <span style={{ display: 'none' }} className="d-md-inline">Rendering Cache: 100%</span>
            </div>

            <div className="mockup-header-right">
              <button type="button" className="tool-icon-btn" title="Workspace Layout">
                <Icon name="dashboard_customize" size={18} />
              </button>
              <button type="button" className="tool-icon-btn" title="Project Settings">
                <Icon name="tune" size={18} />
              </button>
              <button type="button" className="tool-icon-btn" title="Cloud Sync">
                <Icon name="cloud_done" size={18} style={{ color: 'var(--secondary)' }} />
              </button>
            </div>
          </div>

          {/* Upper Editor Section */}
          <div className="mockup-body">
            {/* Left Panel: Media Pool & Assets */}
            <div className="panel-left">
              <div className="panel-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="t-label-md" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>Media Bin</span>
                  <span className="asset-count">14 Assets</span>
                </div>
                <button type="button" style={{ color: 'var(--primary)' }}>
                  <Icon name="add_box" size={20} />
                </button>
              </div>

              {/* Asset Tabs */}
              <div className="asset-tabs">
                <span className="asset-tab-active">Video</span>
                <span className="asset-tab-inactive">Audio</span>
                <span className="asset-tab-inactive">Color LUTs</span>
                <span className="asset-tab-inactive">FX</span>
              </div>

              {/* Asset Thumbnails */}
              <div className="asset-grid">
                <div className="asset-card group">
                  <LazyVideo
                    src={media.binShibuya.src}
                    poster={media.binShibuya.poster}
                    alt={media.binShibuya.alt}
                  />
                  <span className="asset-time">00:42</span>
                </div>
                <div className="asset-card group">
                  <LazyVideo
                    src={media.binAlley.src}
                    poster={media.binAlley.poster}
                    alt={media.binAlley.alt}
                  />
                  <span className="asset-time">01:15</span>
                </div>
                <div className="asset-card group">
                  <LazyVideo
                    src={media.binPortrait.src}
                    poster={media.binPortrait.poster}
                    alt={media.binPortrait.alt}
                  />
                  <span className="asset-time">00:28</span>
                </div>
                <div className="asset-card group">
                  <LazyVideo
                    src={media.binTunnel.src}
                    poster={media.binTunnel.poster}
                    alt={media.binTunnel.alt}
                  />
                  <span className="asset-time">00:54</span>
                </div>
              </div>

              {/* Smart Metadata Box */}
              <div className="clip-inspector">
                <span className="t-label-sm" style={{ color: 'var(--on-surface)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  Clip Inspector
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--on-surface-variant)', lineHeight: '1.625' }}>
                  Source: ProRes 422 HQ<br />
                  Res: 3840 x 2160 (16:9)<br />
                  Bitrate: 185 Mbps • Rec.709
                </p>
              </div>
            </div>

            {/* Central Video Preview Monitor */}
            <div className="panel-center">
              {/* Monitor Header Tools */}
              <div className="monitor-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)' }}>
                    <span className="anim-ping" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--primary)' }}></span>
                    LIVE PREVIEW
                  </span>
                  <span style={{ backgroundColor: 'var(--surface-container)', padding: '0.125rem 0.5rem', borderRadius: 'var(--radius)', fontSize: '11px' }}>
                    Fit 68%
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ padding: '0.125rem 0.5rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--surface-container-high)', color: 'var(--on-surface)', fontSize: '11px' }}>
                    16:9 Cinema Master
                  </span>
                  <span style={{ padding: '0.125rem 0.5rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--surface-container)', color: 'var(--on-surface-variant)', fontSize: '11px' }}>
                    9:16 Vertical
                  </span>
                </div>
              </div>

              {/* Screen Container */}
              <div className="monitor-screen" onClick={togglePlay} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && togglePlay()}>
                <LazyVideo
                  videoRef={videoRef}
                  src={media.monitor.src}
                  poster={media.monitor.poster}
                  alt={media.monitor.alt}
                  onTimeUpdate={handleTimeUpdate}
                />

                {/* Video Floating Overlay Elements */}
                <div className="monitor-rec-tag">
                  REC {timecode}
                </div>

                <div className="monitor-color-tag">
                  <span className="monitor-color-badge">
                    Neural Color Applied
                  </span>
                </div>

                {/* Center Big Play Button Overlay */}
                <div className="monitor-play-overlay">
                  <div className="play-btn-circle">
                    <Icon name={isPlaying ? 'pause' : 'play_arrow'} fill size={32} />
                  </div>
                </div>
              </div>

              {/* Transport & Playback Control Bar */}
              <div className="transport-bar">
                <span className="t-code" style={{ color: 'var(--primary)' }}>
                  {timecode}
                </span>

                <div className="transport-controls">
                  <button type="button" className="transport-btn"><Icon name="skip_previous" size={20} /></button>
                  <button type="button" className="transport-btn"><Icon name="fast_rewind" size={20} /></button>
                  <button
                    type="button"
                    className="transport-play-btn"
                    onClick={togglePlay}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    <Icon name={isPlaying ? 'pause' : 'play_arrow'} fill size={20} />
                  </button>
                  <button type="button" className="transport-btn"><Icon name="fast_forward" size={20} /></button>
                  <button type="button" className="transport-btn"><Icon name="skip_next" size={20} /></button>
                </div>

                <span className="t-code" style={{ color: 'var(--on-surface-variant)' }}>
                  00:03:45:00
                </span>
              </div>
            </div>

            {/* Right Panel: Inspector & Color Grading */}
            <div className="panel-right">
              <div className="panel-header">
                <span className="t-label-md" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>
                  Lumetri Color &amp; FX
                </span>
                <Icon name="palette" size={20} style={{ color: 'var(--primary)' }} />
              </div>

              {/* Color Wheels Representation */}
              <div className="color-wheels-row">
                <div className="color-wheel-box">
                  <div className="color-wheel-circle wheel-1">
                    <div className="wheel-dot" style={{ top: '1rem', left: '1.25rem' }}></div>
                  </div>
                  <span className="wheel-label">Lift / Shadows</span>
                </div>
                <div className="color-wheel-box">
                  <div className="color-wheel-circle wheel-2">
                    <div className="wheel-dot" style={{ bottom: '0.75rem', right: '1rem' }}></div>
                  </div>
                  <span className="wheel-label">Gamma / Mid</span>
                </div>
                <div className="color-wheel-box">
                  <div className="color-wheel-circle wheel-3">
                    <div className="wheel-dot" style={{ top: '0.5rem', right: '1.25rem' }}></div>
                  </div>
                  <span className="wheel-label">Gain / High</span>
                </div>
              </div>

              {/* Sliders */}
              <div className="sliders-group">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--on-surface-variant)', marginBottom: '0.25rem' }}>
                    <span>Temperature</span>
                    <span className="t-code" style={{ color: 'var(--primary)' }}>+14 K</span>
                  </div>
                  <div className="slider-bar-bg">
                    <div className="slider-fill-1"></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--on-surface-variant)', marginBottom: '0.25rem' }}>
                    <span>Tint Vibrancy</span>
                    <span className="t-code" style={{ color: 'var(--secondary)' }}>+28</span>
                  </div>
                  <div className="slider-bar-bg">
                    <div className="slider-fill-2"></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--on-surface-variant)', marginBottom: '0.25rem' }}>
                    <span>Film Contrast</span>
                    <span className="t-code" style={{ color: 'var(--on-surface)' }}>+45</span>
                  </div>
                  <div className="slider-bar-bg">
                    <div className="slider-fill-3"></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--on-surface-variant)', marginBottom: '0.25rem' }}>
                    <span>Neural Grain</span>
                    <span className="t-code" style={{ color: 'var(--tertiary)' }}>35mm Kodachrome</span>
                  </div>
                  <div className="slider-bar-bg">
                    <div className="slider-fill-4"></div>
                  </div>
                </div>
              </div>

              {/* Active Effect Pill */}
              <div className="active-effect-pill">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="auto_fix_high" size={18} style={{ color: 'var(--secondary)' }} />
                  <span className="t-label-sm" style={{ color: 'var(--on-surface)' }}>Tokyo Neon LUT</span>
                </div>
                <span className="t-label-sm" style={{ color: 'var(--primary)', fontWeight: 600 }}>Active</span>
              </div>
            </div>
          </div>

          {/* Multi-Track Editing Timeline Bar */}
          <div className="timeline-bar">
            {/* Timeline Control Toolbar & Ruler */}
            <div className="timeline-toolbar">
              <div className="timeline-tools-left">
                <button type="button" className="timeline-tool-btn" style={{ color: 'var(--primary)' }} title="Selection Tool">
                  <Icon name="arrow_selector_tool" size={16} />
                </button>
                <button type="button" className="timeline-tool-btn" style={{ color: 'var(--on-surface)' }} title="Razor Cut Tool">
                  <Icon name="content_cut" size={16} />
                </button>
                <button type="button" className="timeline-tool-btn" style={{ color: 'var(--on-surface)' }} title="Slip Tool">
                  <Icon name="swap_horiz" size={16} />
                </button>
                <button type="button" className="timeline-tool-btn" style={{ color: 'var(--on-surface)' }} title="Magnet Snapping">
                  <Icon name="qr_code_2" size={16} />
                </button>
              </div>

              {/* Time Ruler Indicators */}
              <div className="timeline-ruler">
                <span>00:00:00</span>
                <span>00:00:30</span>
                <span>00:01:00</span>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>00:01:30</span>
                <span>00:02:00</span>
                <span>00:02:30</span>
                <span>00:03:00</span>
              </div>

              <div className="timeline-zoom">
                <Icon name="zoom_out" size={16} />
                <div style={{ width: '4rem', height: '0.25rem', backgroundColor: 'var(--surface-container)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--primary-container)' }}></div>
                </div>
                <Icon name="zoom_in" size={16} />
              </div>
            </div>

            {/* Timeline Tracks Container with Playhead */}
            <div className="timeline-tracks">
              {/* Glowing Neon Playhead Indicator */}
              <div className="playhead-line" style={{ left: `${playheadPos}%` }}>
                <div className="playhead-head"></div>
              </div>

              {/* Track V2: Overlay & B-Roll */}
              <div className="track-row" style={{ height: '2.25rem' }}>
                <div className="track-label">
                  <span>V2</span>
                  <Icon name="visibility" size={14} />
                </div>
                <div className="track-lane">
                  <div style={{ marginLeft: '25%', width: '22%', height: '1.75rem', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.4)', padding: '0 0.5rem', display: 'flex', alignItems: 'center', fontSize: '11px', color: 'var(--on-surface)' }} className="truncate">
                    Cyberpunk_Overlay_FX.mov
                  </div>
                  <div style={{ marginLeft: '12%', width: '18%', height: '1.75rem', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.4)', padding: '0 0.5rem', display: 'flex', alignItems: 'center', fontSize: '11px', color: 'var(--on-surface)' }} className="truncate">
                    Title_Typography_Glitch.kfx
                  </div>
                </div>
              </div>

              {/* Track V1: Main Video Clips */}
              <div className="track-row" style={{ height: '2.75rem' }}>
                <div className="track-label" style={{ color: 'var(--on-surface)', fontWeight: 600 }}>
                  <span>V1</span>
                  <Icon name="videocam" size={14} style={{ color: 'var(--primary)' }} />
                </div>
                <div className="track-lane" style={{ gap: '0.25rem', padding: '0.25rem' }}>
                  <div style={{ width: '20%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.4)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontSize: '11px', color: 'var(--on-surface)' }} className="truncate">
                    Tokyo_Rain_Opening.mp4
                  </div>
                  <div style={{ width: '28%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', fontSize: '11px', color: 'var(--on-surface)', boxShadow: 'var(--shadow-md)' }}>
                    <span className="truncate">Neon_Drive_SpeedRamp.mp4</span>
                    <Icon name="auto_fix_high" size={14} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div style={{ width: '24%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.4)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontSize: '11px', color: 'var(--on-surface)' }} className="truncate">
                    Portrait_Bokeh_CloseUp.mp4
                  </div>
                  <div style={{ flex: '1 1 0%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-primary-container) / 0.3)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontSize: '11px', color: 'var(--on-surface-variant)' }} className="truncate">
                    Final_Outro_Credits.mp4
                  </div>
                </div>
              </div>

              {/* Track A1: Voice Dialogue Waveform */}
              <div className="track-row" style={{ height: '2.25rem' }}>
                <div className="track-label">
                  <span>A1</span>
                  <Icon name="mic" size={14} style={{ color: 'var(--tertiary)' }} />
                </div>
                <div className="track-lane" style={{ padding: '0.25rem' }}>
                  <div style={{ width: '65%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-tertiary-container) / 0.3)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontSize: '11px', color: 'var(--tertiary-fixed-dim)' }}>
                    <Icon name="graphic_eq" size={14} style={{ marginRight: '0.25rem' }} />
                    Voiceover_StudioMaster_HQ.wav (AI De-Noised)
                  </div>
                </div>
              </div>

              {/* Track A2: Cinematic Soundtrack Waveform */}
              <div className="track-row" style={{ height: '2.25rem' }}>
                <div className="track-label">
                  <span>A2</span>
                  <Icon name="music_note" size={14} style={{ color: 'var(--secondary)' }} />
                </div>
                <div className="track-lane" style={{ padding: '0.25rem' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius)', backgroundColor: 'rgb(var(--rgb-secondary-container) / 0.2)', display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontSize: '11px', color: 'var(--secondary-fixed-dim)' }}>
                    <Icon name="volume_up" size={14} style={{ marginRight: '0.25rem' }} />
                    Synthwave_Odesza_Vibe_Stems_120BPM.flac • Synced Beat Grid
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
