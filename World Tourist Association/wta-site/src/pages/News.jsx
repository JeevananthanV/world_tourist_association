import { FileText, Newspaper, UserCheck, Video } from 'lucide-react';

function News() {
  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>News & Media</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px' }}>
            Stay updated with official announcements, member news, and industry insights.
          </p>
        </div>
      </div>

      <div className="section-light">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '48px' }}>
          
          {/* Main Content Area */}
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Latest Updates</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Press Release */}
              <div className="card" id="press-releases">
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>PRESS RELEASE</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>August 14, 2026</span>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>WTA Announces New Global Tourism Resilience Initiative</h3>
                <p style={{ marginBottom: '16px' }}>The World Tourist Association has officially launched a new funding initiative aimed at helping coastal destinations build climate resilience.</p>
                <a href="#" style={{ fontWeight: 600 }}>Read Full Release &rarr;</a>
              </div>

              {/* Blog Post */}
              <div className="card" id="wta-blog" style={{ display: 'flex', gap: '24px' }}>
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=300" alt="Aviation" style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '12px' }}>BLOG</span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>August 10, 2026</span>
                  </div>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>The Future of Sustainable Aviation Fuels</h3>
                  <p style={{ fontSize: '14px', marginBottom: '12px' }}>An opinion piece on how airlines in the Asia-Pacific region are adopting SAFs.</p>
                  <a href="#" style={{ fontSize: '14px', fontWeight: 600 }}>Read Article &rarr;</a>
                </div>
              </div>

              {/* Member News */}
              <div className="card" id="member-&-chapter-news">
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--color-primary-dark)', fontWeight: 600, fontSize: '12px' }}>MEMBER NEWS</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>August 5, 2026</span>
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Tokyo Tourism Bureau Reports Record Q2 Growth</h3>
                <a href="#" style={{ fontSize: '14px', fontWeight: 600 }}>Read More &rarr;</a>
              </div>

              {/* Student Chapter Updates */}
              <div className="card" id="student-chapter-updates">
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '12px' }}>STUDENT UPDATE</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>August 2, 2026</span>
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>University of Surrey Chapter Hosts Successful Tourism Tech Hackathon</h3>
                <a href="#" style={{ fontSize: '14px', fontWeight: 600 }}>Read More &rarr;</a>
              </div>

              {/* SDGs Matter */}
              <div className="card" id="sdgs-matter" style={{ backgroundColor: 'var(--color-background)' }}>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                   <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '12px' }}>SDGs MATTER</span>
                 </div>
                 <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>How Our Members Are Advancing Goal 14: Life Below Water</h3>
                 <p style={{ marginBottom: '16px' }}>Explore case studies and success stories of marine conservation in tourism destinations.</p>
                 <a href="#" style={{ fontSize: '14px', fontWeight: 600 }}>View Stories &rarr;</a>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="card" style={{ marginBottom: '24px', backgroundColor: 'var(--color-white)' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Media Resources</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}><FileText size={16} /> Press Releases</a></li>
                <li id="wta-media-kit"><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}><UserCheck size={16} /> Media Kit</a></li>
                <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}><Newspaper size={16} /> SDGs Matter</a></li>
                <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}><Video size={16} /> WTA TV</a></li>
              </ul>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--color-blue-soft)', borderColor: 'var(--color-blue-soft)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>For the Press</h3>
              <p style={{ fontSize: '14px', marginBottom: '16px' }}>For press enquiries, interview requests, or media access to our events.</p>
              <button className="btn-primary" style={{ width: '100%', fontSize: '14px', padding: '8px' }}>Contact Media Team</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default News;
