import { Calendar as CalendarIcon, MapPin } from 'lucide-react';

function Events() {
  const upcomingEvents = [
    { title: 'WTA Youth Symposium', date: 'Aug 17-18, 2026', location: 'Singapore', category: 'Youth' },
    { title: 'WTA Travel Mart', date: 'Aug 18-20, 2026', location: 'Singapore', category: 'Trade Event' },
    { title: 'Forum on Tourism Trends', date: 'Oct 19-21, 2026', location: 'Online', category: 'Webinar' },
    { title: 'WTA Annual Summit', date: 'May 17-19, 2027', location: 'Tokyo, Japan', category: 'Conference' },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="section-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>WTA Events</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', marginBottom: '32px' }}>
            Bringing the global tourism community together through premier trade marts, symposiums, and insights.
          </p>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" alt="Conference Stage" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
      </div>

      {/* Signature Events */}
      <div className="section-light">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Signature Events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="card" id="travel-mart">
              <h3 style={{ color: 'var(--color-primary)' }}>Travel Mart</h3>
              <p>The premier travel trade show in the Asia Pacific region, bringing tourism businesses and buyers together for unmatched networking and contracting opportunities.</p>
            </div>
            <div className="card" id="annual-summit">
              <h3 style={{ color: 'var(--color-primary)' }}>Annual Summit</h3>
              <p>Our major industry gathering where global leaders discuss the most pressing issues, trends, and strategies shaping the future of travel.</p>
            </div>
            <div className="card" id="youth-symposium">
              <h3 style={{ color: 'var(--color-primary)' }}>Youth Symposium</h3>
              <p>Focused on students and young professionals, creating a sustainable, inclusive, and innovative future for tourism and hospitality.</p>
            </div>
            <div className="card" id="webinars">
              <h3 style={{ color: 'var(--color-primary)' }}>Webinars</h3>
              <p>Monthly online sessions covering industry trends, research insights, and capacity building for our members globally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="section-white">
        <div className="container">
           <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Awards & Recognition</h2>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div className="card" id="gold-awards" style={{ backgroundColor: 'var(--color-background)' }}>
                 <h3 style={{ color: '#d4af37' }}>Gold Awards</h3>
                 <p>Recognising exceptional achievement in a variety of tourism endeavours, acknowledging the very best that the industry has to offer.</p>
              </div>
              <div className="card" id="face-of-the-future" style={{ backgroundColor: 'var(--color-background)' }}>
                 <h3 style={{ color: 'var(--color-primary)' }}>Face of the Future</h3>
                 <p>An annual award presented to an exceptional young individual who has made a significant contribution to the travel and tourism industry.</p>
              </div>
           </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="section-light" id="wta-calendar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px' }}>Event Calendar</h2>
            <button className="btn-secondary">View All Events</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase' }}>{event.category}</span>
                  <h3 style={{ margin: '8px 0', fontSize: '20px' }}>{event.title}</h3>
                  <div style={{ display: 'flex', gap: '24px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarIcon size={16} color="var(--color-primary)" /> {event.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={16} color="var(--color-primary)" /> {event.location}</span>
                  </div>
                </div>
                <button className="btn-primary">Register</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
