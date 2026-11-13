import { Leaf, ShieldAlert, Trash2, TrendingUp, Users } from 'lucide-react';

function Sustainability() {
  return (
    <div>
      {/* Hero */}
      <div className="section-blue-soft" id="about-wta-sustainability" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Sustainability</h1>
            <p style={{ fontSize: '20px', marginBottom: '24px' }}>
              Building a meaningful, responsible, and resilient tourism future through actionable strategies and community support.
            </p>
          </div>
          <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" alt="Eco Tourism" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="section-white">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>Our Focus Areas</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            <div className="card" id="tourism-destination-resilience" style={{ display: 'flex', gap: '16px' }}>
              <ShieldAlert size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Crisis Response & Resilience</h3>
                <p>Helping tourism destinations and businesses respond to disruptions and build long-term resilience against future challenges.</p>
              </div>
            </div>

            <div className="card" id="waste-management" style={{ display: 'flex', gap: '16px' }}>
              <Trash2 size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Waste Management</h3>
                <p>Initiatives to significantly reduce food waste, eliminate single-use plastics, and minimize tourism-related pollution.</p>
              </div>
            </div>

            <div className="card" id="financial-&-digital-skills-for-smes" style={{ display: 'flex', gap: '16px' }}>
              <TrendingUp size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>SME Financial & Digital Skills</h3>
                <p>Empowering small tourism businesses by improving their financial literacy, digital capabilities, and overall business resilience.</p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', gap: '16px' }}>
              <Users size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Capacity Building</h3>
                <p>Supporting local communities, informal workers, and destinations to develop and implement sustainable tourism practices.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="section-light" id="resources">
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-white)', padding: '48px', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <Leaf size={48} color="var(--color-accent)" style={{ margin: '0 auto 24px auto' }} />
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Sustainability Resources</h2>
            <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
              Access our comprehensive guides on wildlife protection, gender equity, sustainable hospitality, and climate action.
            </p>
            <button className="btn-primary">Browse Resource Library</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
