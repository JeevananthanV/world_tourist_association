import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const navData = [
    {
      title: 'About',
      path: '/about',
      dropdown: [
        'About WTA', 'Executive Board & Board', 'WTA Life Members', 'Secretariat', 'Youth', 'Careers', 'Contact Us'
      ]
    },
    {
      title: 'Membership',
      path: '/membership',
      dropdown: [
        'Member Benefits', 'Membership Categories', 'Our Partners', 'Member Listing', 'Enquire About Membership', 'For WTA Members'
      ]
    },
    {
      title: 'Events',
      path: '/events',
      dropdown: [
        'Travel Mart', 'Youth Symposium', 'Gold Awards', 'Face of the Future', 'Annual Summit', 'Webinars', 'WTA Calendar'
      ]
    },
    {
      title: 'Research',
      path: '/research',
      dropdown: [
        'Publications', 'WTAmPOWER', 'Global Snapshot'
      ]
    },
    {
      title: 'Chapters',
      path: '/chapters',
      dropdown: [
        'WTA Chapters', 'Student Chapters', 'Chapter Calendar'
      ]
    },
    {
      title: 'HCD',
      path: '/hcd',
      dropdown: [
        'Micro-credentials Programme', 'WTA Capacity Building', 'WTA Expert Pool', 'Internships'
      ]
    },
    {
      title: 'Sustainability',
      path: '/sustainability',
      dropdown: [
        'About WTA Sustainability', 'Tourism Destination Resilience', 'Waste Management', 'Financial & Digital Skills for SMEs', 'Resources'
      ]
    },
    {
      title: 'News',
      path: '/news',
      dropdown: [
        'Press Releases', 'Member & Chapter News', 'Student Chapter Updates', 'WTA Blog', 'SDGs Matter', 'WTA Media Kit'
      ]
    }
  ];

  return (
    <header style={{
      backgroundColor: 'var(--color-white)',
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo area */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/favicon.svg" alt="WTA Logo" style={{ width: '40px', height: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.5px', lineHeight: 1 }}>WTA</span>
            <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>World Tourist Association</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', height: '100%' }}>
          {navData.map((item, idx) => (
            <div key={idx} className="nav-item">
              <Link to={item.path} className="nav-link">{item.title}</Link>
              {item.dropdown && (
                <div className="dropdown-menu">
                  {item.dropdown.map((dropItem, dropIdx) => (
                    <Link key={dropIdx} to={`${item.path}#${dropItem.toLowerCase().replace(/ /g, '-')}`} className="dropdown-item">
                      {dropItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/foundation" className="nav-link">WTA Foundation</Link>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 0' }}>
          <Link to="/cart" style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShoppingCart size={20} /> <span style={{ fontSize: '14px' }}>0</span>
          </Link>
          <Link to="/login" className="btn-primary" style={{ padding: '8px 24px', fontSize: '14px' }}>Member Login</Link>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
