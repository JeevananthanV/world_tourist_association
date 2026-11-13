import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-footer)',
      color: 'var(--color-footer-text)',
      padding: '64px 0 32px 0'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '32px', marginBottom: '48px' }}>
        <div>
          <h3 style={{ color: 'var(--color-white)', marginBottom: '16px' }}>WTA</h3>
          <p style={{ color: 'var(--color-footer-muted)' }}>
            Advancing a meaningful global tourism economy through innovation, collaboration, and adaptability.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '16px' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/about" style={{ color: 'var(--color-footer-muted)' }}>About Us</Link>
            <Link to="/membership" style={{ color: 'var(--color-footer-muted)' }}>Membership</Link>
            <Link to="/events" style={{ color: 'var(--color-footer-muted)' }}>Events</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '16px' }}>Resources</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/research" style={{ color: 'var(--color-footer-muted)' }}>Research & Data</Link>
            <Link to="/sustainability" style={{ color: 'var(--color-footer-muted)' }}>Sustainability</Link>
            <Link to="/news" style={{ color: 'var(--color-footer-muted)' }}>News & Updates</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '16px' }}>Contact</h4>
          <p style={{ color: 'var(--color-footer-muted)' }}>
            123 Tourism Avenue<br />
            Global City, 10000<br />
            info@worldtourist.org
          </p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.20)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ color: 'var(--color-footer-muted)', fontSize: '14px' }}>&copy; 2026 World Tourist Association. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/privacy" style={{ color: 'var(--color-footer-muted)', fontSize: '14px' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: 'var(--color-footer-muted)', fontSize: '14px' }}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
