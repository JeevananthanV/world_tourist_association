import { BookOpen, UserPlus, Briefcase, Award } from 'lucide-react';

function HCD() {
  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', height: '350px' }}>
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="Training Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Human Capital Development</h1>
            <p style={{ fontSize: '20px', marginBottom: '32px' }}>
              Learn, train, develop skills, gain experience, and build your tourism career with WTA.
            </p>
            <button className="btn-primary" style={{ fontSize: '18px', padding: '12px 32px' }}>Explore Programs</button>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="section-light">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>HCD Programs</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="card" id="micro-credentials-programme" style={{ display: 'flex', gap: '16px' }}>
              <Award size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Micro-credentials</h3>
                <p>Short-form professional learning and credential programs designed to upskill you quickly in specific tourism competencies.</p>
              </div>
            </div>

            <div className="card" id="wta-capacity-building" style={{ display: 'flex', gap: '16px' }}>
              <BookOpen size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Capacity Building</h3>
                <p>Comprehensive training and development programs tailored for both individuals and organizations seeking to improve their service.</p>
              </div>
            </div>

            <div className="card" id="wta-expert-pool" style={{ display: 'flex', gap: '16px' }}>
              <UserPlus size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>WTA Expert Pool</h3>
                <p>A network of seasoned professionals and experts who contribute knowledge, training, and industry expertise to our programs.</p>
              </div>
            </div>

            <div className="card" id="internships" style={{ display: 'flex', gap: '16px' }}>
              <Briefcase size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ marginBottom: '8px' }}>Internships</h3>
                <p>Opportunities for students and young professionals to gain practical, hands-on experience working directly with the WTA Secretariat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HCD;
