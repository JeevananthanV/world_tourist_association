import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, MessageSquare } from 'lucide-react';

function Membership() {
  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Membership</h1>
            <p style={{ fontSize: '20px', marginBottom: '32px' }}>
              Join the world's most influential tourism network. Connect, learn, and grow your organisation's impact.
            </p>
            <button className="btn-primary" style={{ fontSize: '18px', padding: '12px 32px' }}>Join the Network</button>
          </div>
          <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', height: '350px' }}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team meeting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Member Benefits */}
      <div className="section-light" id="member-benefits">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Member Benefits</h2>
            <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Unlock a world of opportunities across Network, Business, People, Branding, and Insights.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div className="card">
              <CheckCircle color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h3>Networking</h3>
              <p>Connect with governments, airlines, and top travel organisations globally.</p>
            </div>
            <div className="card">
              <CheckCircle color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h3>Business Opportunities</h3>
              <p>Find new partners through our exclusive B2B platforms and trade events.</p>
            </div>
            <div className="card">
              <CheckCircle color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h3>Insights & Research</h3>
              <p>Access premium tourism data, forecasts, and industry reports.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories & Partners */}
      <div className="section-white" id="membership-categories">
        <div className="container">
          <div style={{ display: 'flex', gap: '48px', flexDirection: 'column' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Membership Categories</h2>
              <p style={{ fontSize: '18px', marginBottom: '24px' }}>
                WTA membership is organisation-based. We welcome a diverse range of stakeholders:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px' }}>
                <li><strong>Government:</strong> Ministries of Tourism, Tourism Offices, DMOs.</li>
                <li><strong>Aviation:</strong> Airlines, Airports.</li>
                <li><strong>Hospitality:</strong> Hotels, Resorts, Accommodation Providers.</li>
                <li><strong>Travel:</strong> Tour Operators, Travel Agencies.</li>
                <li><strong>Education:</strong> Universities, Tourism Institutions.</li>
              </ul>
            </div>
            
            <div id="our-partners" style={{ backgroundColor: 'var(--color-background)', padding: '48px', borderRadius: '8px', marginTop: '32px' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)', fontSize: '28px' }}>Our Partners</h3>
              <p style={{ marginBottom: '24px', fontSize: '18px' }}>We work with industry leaders to advance the tourism economy.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px' }}>
                <div style={{ height: '80px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Partner 1</div>
                <div style={{ height: '80px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Partner 2</div>
                <div style={{ height: '80px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Partner 3</div>
                <div style={{ height: '80px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Partner 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Tools */}
      <div className="section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div className="card" id="member-listing" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <Search size={40} color="var(--color-primary)" />
              <div>
                <h3 style={{ fontSize: '24px' }}>Member Listing</h3>
                <p>Browse our global directory of WTA members to find your next business partner.</p>
                <Link to="#" className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }}>View Directory</Link>
              </div>
            </div>
            <div className="card" id="for-wta-members" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <MessageSquare size={40} color="var(--color-primary)" />
              <div>
                <h3 style={{ fontSize: '24px' }}>For WTA Members</h3>
                <p>A dedicated platform for members to share offers, discounts, and business opportunities.</p>
                <Link to="#" className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }}>Access Platform</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquire About Membership */}
      <div className="section-blue-soft" id="enquire-about-membership">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Enquire About Membership</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Interested in joining the World Tourist Association? Fill out our enquiry form and our membership team will get back to you shortly.
          </p>
          <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <input type="text" placeholder="Organization Name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)' }} />
             <input type="email" placeholder="Email Address" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)' }} />
             <textarea placeholder="Message" rows={4} style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)' }} />
             <button type="button" className="btn-primary" style={{ padding: '12px' }}>Submit Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Membership;
