import { Map, GraduationCap, Calendar, Users } from 'lucide-react';

function Chapters() {
  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>WTA Chapters</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', marginBottom: '32px' }}>
            A global network acting locally. Connect with regional and student chapters around the world.
          </p>
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Students learning" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
      </div>

      <div className="section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            {/* Regional Chapters */}
            <div className="card" id="wta-chapters">
              <Map size={40} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>WTA Chapters</h2>
              <p style={{ marginBottom: '24px' }}>
                WTA Chapters are established by the local travel industry community to build regional networks, organize local events, and implement WTA's global initiatives at a local level.
              </p>
              <button className="btn-secondary">Find a Regional Chapter</button>
            </div>

            {/* Student Chapters */}
            <div className="card" id="student-chapters">
              <GraduationCap size={40} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Student Chapters</h2>
              <p style={{ marginBottom: '24px' }}>
                Especially for college and university students, these chapters provide essential networking, industry exposure, leadership opportunities, and professional development.
              </p>
              <button className="btn-secondary">Explore Student Chapters</button>
            </div>

          </div>
        </div>
      </div>

      {/* Chapter Calendar */}
      <div className="section-white" id="chapter-calendar">
        <div className="container" style={{ textAlign: 'center' }}>
          <Calendar size={48} color="var(--color-accent)" style={{ margin: '0 auto 24px auto' }} />
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Chapter Event Calendar</h2>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            See what activities are being organized locally by our vast chapter network.
          </p>
          <button className="btn-primary">View Local Events</button>
        </div>
      </div>
    </div>
  );
}

export default Chapters;
