import Icon from './Icon';
import { LOGO } from '../data/media';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ padding: '0 var(--gutter)' }}>
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <img
                alt="Neon_KingsClip_Crown_Logo1.png"
                style={{ height: '1.75rem', width: 'auto', objectFit: 'contain' }}
                src={LOGO}
              />
              <span className="brand-name">KingsClip</span>
            </div>
            <p className="t-body-sm" style={{ color: 'var(--on-surface-variant)', maxWidth: '24rem' }}>
              The premier cinematic timeline and neural AI video suite engineered for elite post-production editors, agencies, and high-velocity digital creators.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', paddingTop: 'var(--space-xs)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: 'var(--space-xs) var(--space-sm)', borderRadius: '9999px', backgroundColor: 'var(--surface-container)', color: 'var(--tertiary)', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500 }}>
                <Icon name="verified" size={14} />
                Studio Grade v4.2
              </span>
            </div>
          </div>

          {/* Product */}
          <div className="footer-col">
            <span className="footer-col-title">Product</span>
            <a className="footer-link" href="#features">Timeline Editor</a>
            <a className="footer-link" href="#ai-tools">Neural Color Grading</a>
            <a className="footer-link" href="#templates">FX Motion Presets</a>
            <a className="footer-link" href="#showcase">Cloud Acceleration</a>
            <a className="footer-link" href="#pricing">Enterprise Licences</a>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <span className="footer-col-title">Resources</span>
            <a className="footer-link" href="#docs">Documentation</a>
            <a className="footer-link" href="#tutorials">Masterclass Tutorials</a>
            <a className="footer-link" href="#luts">LUT Vault</a>
            <a className="footer-link" href="#api">Developer API</a>
            <a className="footer-link" href="#discord">Creator Discord</a>
          </div>

          {/* Company */}
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <a className="footer-link" href="#about">About Us</a>
            <a className="footer-link" href="#careers">Careers</a>
            <a className="footer-link" href="#press">Press Kit</a>
            <a className="footer-link" href="#affiliates">Affiliates</a>
            <a className="footer-link" href="#support">Studio Support</a>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <span className="footer-col-title">Legal</span>
            <a className="footer-link" href="#privacy">Privacy Policy</a>
            <a className="footer-link" href="#terms">Terms of Service</a>
            <a className="footer-link" href="#security">Security &amp; SOC2</a>
            <a className="footer-link" href="#licensing">Commercial Licensing</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>© 2026 KingsClip Technologies Inc. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'var(--secondary)' }}></span>
              Global Render Engine: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
