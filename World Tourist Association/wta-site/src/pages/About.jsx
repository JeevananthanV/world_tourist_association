import { Users, Briefcase, Award, GraduationCap } from 'lucide-react';

function About() {
  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>About World Tourist Association</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            A not-for-profit membership association dedicated to advancing the global tourism economy.
          </p>
        </div>
      </div>

      {/* About WTA */}
      <div className="section-white" id="about-wta">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Who We Are</h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            The World Tourist Association connects governments, tourism organisations, airlines, hotels, educational institutions, travel companies, and other tourism stakeholders globally.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)' }}>Our Vision</h3>
              <p>"A meaningful global tourism economy."</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)' }}>Our Mission</h3>
              <p>To share knowledge, enable networking, and protect tourism-economy assets through innovation, collaboration, and adaptability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Board & Board */}
      <div className="section-light" id="executive-board-&-board">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
             <Users size={40} color="var(--color-primary)" />
             <h2 style={{ fontSize: '32px' }}>Executive Board & Board</h2>
          </div>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>
            Guiding the strategic direction of the Association. Our board members bring decades of experience from across the global tourism sector.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
             <div className="card" style={{ padding: '24px' }}>
               <h4>Board Member 1</h4>
               <p style={{ color: 'var(--color-text-secondary)' }}>Chairman</p>
               <p style={{ marginTop: '12px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className="card" style={{ padding: '24px' }}>
               <h4>Board Member 2</h4>
               <p style={{ color: 'var(--color-text-secondary)' }}>Vice Chair</p>
               <p style={{ marginTop: '12px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             </div>
             <div className="card" style={{ padding: '24px' }}>
               <h4>Board Member 3</h4>
               <p style={{ color: 'var(--color-text-secondary)' }}>Director</p>
               <p style={{ marginTop: '12px' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
             </div>
          </div>
        </div>
      </div>

      {/* WTA Life Members */}
      <div className="section-white" id="wta-life-members">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
             <Award size={40} color="var(--color-primary)" />
             <h2 style={{ fontSize: '32px' }}>WTA Life Members</h2>
          </div>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>
            Recognising extraordinary contributions to the industry. These individuals have dedicated their lives to advancing global tourism.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '8px', minWidth: '200px', flex: 1 }}>
                 <strong>Life Member {num}</strong>
                 <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Awarded 202{num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secretariat */}
      <div className="section-light" id="secretariat">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
             <Briefcase size={40} color="var(--color-primary)" />
             <h2 style={{ fontSize: '32px' }}>Secretariat</h2>
          </div>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>
            Our operational team managing memberships, events, and programs worldwide. We ensure the day-to-day success of the WTA.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
             <div className="card">
               <h3 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Global Headquarters</h3>
               <p>123 Tourism Way<br/>Geneva, Switzerland<br/>Phone: +41 22 123 4567</p>
             </div>
             <div className="card">
               <h3 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Regional Offices</h3>
               <p>We maintain regional hubs in Asia Pacific, the Americas, and the Middle East to better serve our global membership base.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Youth */}
      <div className="section-white" id="youth">
        <div className="container">
          <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Youth Programs</h2>
              <p style={{ fontSize: '18px', marginBottom: '16px' }}>
                We are committed to nurturing the next generation of tourism leaders. Our youth symposiums foster innovation and inclusion.
              </p>
              <div style={{ marginTop: '24px', padding: '24px', backgroundColor: 'var(--color-background)', borderRadius: '8px' }}>
                <h4 style={{ marginBottom: '12px' }}>Upcoming Youth Symposium</h4>
                <p>Join us next month for our annual youth gathering focusing on sustainable travel solutions. <a href="#" style={{ color: 'var(--color-primary)' }}>Learn more &rarr;</a></p>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Students" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Careers */}
      <div className="section-light" id="careers">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Careers at WTA</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>
            Join our global team and make a difference in the worldwide tourism economy.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {[
               { title: 'Regional Membership Director', location: 'Singapore', type: 'Full-time' },
               { title: 'Events Coordinator', location: 'London, UK', type: 'Contract' },
               { title: 'Sustainability Researcher', location: 'Remote', type: 'Full-time' }
             ].map((job, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                   <div>
                     <h4 style={{ fontSize: '20px', marginBottom: '8px' }}>{job.title}</h4>
                     <p style={{ color: 'var(--color-text-secondary)' }}>{job.location} &bull; {job.type}</p>
                   </div>
                   <button className="btn-secondary">Apply Now</button>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="section-blue-soft" id="contact-us">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Contact Us</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>Have questions? Reach out to our global Secretariat.</p>
          <a href="mailto:info@worldtourist.org" className="btn-primary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}

export default About;
