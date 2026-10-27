import { LOGO } from '../data/media';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-link">
          <img
            alt="Neon_KingsClip_Crown_Logo1.png"
            className="brand-logo"
            src={LOGO}
          />
          <span className="brand-name">KingsClip</span>
        </div>
        <nav className="nav-links">
          <a aria-current="page" className="nav-item active" href="#features">Features</a>
          <a className="nav-item" href="#ai-tools">AI Tools</a>
          <a className="nav-item" href="#templates">Templates</a>
          <a className="nav-item" href="#for-creators">For Creators</a>
          <a className="nav-item" href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="login-btn" href="#login">Log in</a>
          <a className="cta-header-btn" href="#editor-preview">Start Creating Free</a>
        </div>
      </div>
    </header>
  );
}
