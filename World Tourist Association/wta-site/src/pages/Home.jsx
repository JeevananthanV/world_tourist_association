import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
      title: "Stay informed with WTA's up-to-date statistical and analytical data and insights.",
      buttonText: "Access Our Latest Publications",
      link: "/research"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
      title: "Join the world's most influential tourism network and grow your impact.",
      buttonText: "Become a Member",
      link: "/membership"
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
      title: "Connect with global leaders and peers at our premier industry events.",
      buttonText: "View Event Calendar",
      link: "/events"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Carousel */}
      <section style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-primary-dark)',
        backgroundImage: `url("${slides[currentSlide].image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-image 0.5s ease-in-out'
      }}>
        {/* Dark Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 47, 86, 0.7)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <button onClick={prevSlide} style={{ background: 'var(--color-primary)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}><ChevronLeft /></button>
          
          <div style={{ backgroundColor: 'var(--color-background)', padding: '48px', borderRadius: '4px', maxWidth: '500px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <h1 style={{ fontSize: '28px', color: 'var(--color-text-primary)', marginBottom: '16px', lineHeight: 1.3 }}>
              {slides[currentSlide].title}
            </h1>
            <Link to={slides[currentSlide].link} className="btn-primary" style={{ padding: '12px 24px' }}>{slides[currentSlide].buttonText}</Link>
          </div>

          <button onClick={nextSlide} style={{ background: 'var(--color-primary)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}><ChevronRight /></button>
        </div>
      </section>

      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-border)', textAlign: 'center' }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" alt="Anniversary Banner" style={{ width: '100%', height: '100px', objectFit: 'cover', display: 'block' }} />
      </section>

      {/* About Community Section */}
      <section className="section-white">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '24px', lineHeight: 1.2 }}>
              World Tourist Association,<br/>
              A Community of <span style={{ color: 'var(--color-accent)' }}>Responsible Travel Businesses.</span>
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
              Every link of the global travel and tourism ecosystem is represented within the WTA network of public and private sector members. We are dedicated to advancing the travel and tourism industry through innovation, collaboration, and global industry network.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/membership" className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '12px' }}>Become a member</Link>
              <Link to="/about" className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '12px' }}>Discover our network</Link>
              <Link to="/chapters" className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '12px' }}>Our community</Link>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[
              { img: '1540575467063-178a50c2df87', title: 'Events & Webinars', link: '/events' },
              { img: '1460925895917-afdab827c52f', title: 'Trends & Reports', link: '/research' },
              { img: '1528605248644-14dd04022da1', title: 'Networking', link: '/membership' },
              { img: '1518531933037-91b2f5f229cc', title: 'Sustainability & Social Responsibility', link: '/sustainability' },
              { img: '1523240795612-9a054b0db644', title: 'Youth Programme', link: '/about#youth' },
              { img: '1552581234-26160f608093', title: 'Training & Capacity Building', link: '/hcd' }
            ].map((item, idx) => (
              <Link to={item.link} key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px', textDecoration: 'none' }}>
                <img src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&q=80&w=400`} alt={item.title} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', textAlign: 'center', lineHeight: 1.2 }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section-white" style={{ paddingTop: 0, paddingBottom: '48px' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '32px' }}>Our Partners</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', alignItems: 'center', flexWrap: 'wrap', opacity: 0.7 }}>
            {/* Placeholder Partner Text representing Logos */}
            <h4 style={{ color: '#FF5A5F' }}>airbnb</h4>
            <h4 style={{ fontWeight: 800 }}>BBC STUDIOS</h4>
            <h4 style={{ color: '#c49f47' }}>AGODA</h4>
            <h4 style={{ color: '#005b9f' }}>Tencent</h4>
            <h4 style={{ color: 'red' }}>CNN</h4>
            <h4 style={{ fontWeight: 800 }}>OAG</h4>
          </div>
        </div>
      </section>

      {/* What's On */}
      <section className="section-blue-soft">
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', color: 'var(--color-accent)', marginBottom: '48px' }}>What's On?</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px' }}>Upcoming Activities</h3>
            <Link to="/events" style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: 500 }}>View All Upcoming Activities &gt;</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '64px' }}>
            {[
              { img: '1540575467063-178a50c2df87', title: 'WTA Youth Symposium at PTM 2026', date: 'August 17-18, 2026', location: 'Singapore' },
              { img: '1505373877841-8d25f7d46678', title: 'WTA Travel Mart 2026', date: 'August 18-20, 2026', location: 'Singapore' },
              { img: '1528605248644-14dd04022da1', title: 'Forum on Tourism Trends and Outlook', date: 'October 19-21, 2026', location: 'Guilin, China' },
              { img: '1497366216548-37526070297c', title: 'WTA Annual Summit 2027', date: 'May 17-19, 2027', location: 'Tokyo, Japan' }
            ].map((event, idx) => (
              <div key={idx} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '140px' }}>
                  <img src={`https://images.unsplash.com/photo-${event.img}?auto=format&fit=crop&q=80&w=400`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={event.title} />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white', padding: '4px 8px', borderRadius: '4px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--color-text-muted)' }}>Aug</span>
                    <span style={{ display: 'block', fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>18</span>
                  </div>
                </div>
                <div style={{ padding: '16px', flex: 1 }}>
                  <h4 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>{event.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{event.location} • {event.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Watch WTA TV</h3>
              <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <img src="https://images.unsplash.com/photo-1516600164266-f3bf227da25f?auto=format&fit=crop&q=80&w=400" alt="Video" style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'red', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Play size={20} fill="white" />
                </div>
              </div>
              <button className="btn-accent" style={{ backgroundColor: 'var(--color-accent)', color: 'white', width: '100%', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>Watch WTA TV</button>
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px' }}>Latest News</h3>
                <Link to="/news" style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: 500 }}>View All WTA News &gt;</Link>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[
                  { img: '1436491865332-7a61a109cc05', title: 'WTA Welcomes New Global Partners to the Network', date: 'August 10, 2026' },
                  { img: '1460925895917-afdab827c52f', title: 'The Numbers Behind Sustainable Tourism Growth', date: 'August 8, 2026' },
                  { img: '1540575467063-178a50c2df87', title: 'WTA Youth Symposium Highlights Adaptability for Future Leaders', date: 'August 5, 2026' }
                ].map((news, idx) => (
                  <div key={idx} style={{ backgroundColor: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={`https://images.unsplash.com/photo-${news.img}?auto=format&fit=crop&q=80&w=400`} alt="News" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                    <div style={{ padding: '12px' }}>
                      <h4 style={{ fontSize: '13px', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>{news.title}</h4>
                      <Link to="/news" style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Read more &gt;</Link>
                      <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', marginTop: '8px' }}>{news.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-white" style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--color-blue-soft))' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Keeping Up with WTA</h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Sign up for our newsletter to get the latest updates.</p>
          </div>
          <div style={{ flex: 2 }}>
            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>First Name</label>
                <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-background)', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>Last Name</label>
                <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-background)', borderRadius: '4px' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>Organization (Required)</label>
                <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-background)', borderRadius: '4px' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>Email (Required)</label>
                <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-background)', borderRadius: '4px' }} />
              </div>
              <div>
                <button type="button" className="btn-accent" style={{ backgroundColor: 'var(--color-accent)', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Thoughts & Insights */}
      <section className="section-white" style={{ paddingTop: '24px' }}>
        <div className="container">
          <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '48px' }}>Thoughts & Insights from the Network</h2>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <Link to="/news" style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: 500 }}>View All Articles &gt;</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '120px', backgroundColor: 'var(--color-primary-dark)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Decorative logo graphic placeholder */}
                  <div style={{ width: '60px', height: '30px', backgroundColor: 'white' }}></div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}><span style={{ fontSize: '12px' }}>WTA BLOG</span></div>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Sustainability, Research</p>
                  <h4 style={{ fontSize: '14px', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>How destinations are preparing for the new wave of eco-tourism.</h4>
                  <Link to="/news" style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Read Article &gt;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Updates */}
      <section className="section-white" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '48px' }}>WTA Member & Chapter Updates</h2>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <Link to="/news" style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: 500 }}>View All Updates &gt;</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { logo: 'JTB', title: 'JTB Outbound Travel Report 2026 Now Available', date: 'August 7, 2026' },
              { logo: 'Sanya', title: 'Six Months since Sanya’s Inbound Surge', date: 'August 5, 2026' },
              { logo: 'Dusit', title: 'Dusit Thani Expands Green Operations', date: 'August 3, 2026' },
              { logo: 'HKPU', title: 'New Scholarship Program Launched', date: 'July 28, 2026' }
            ].map((update, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)' }}>{update.logo}</div>
                </div>
                <h4 style={{ fontSize: '14px', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>{update.title}</h4>
                <Link to="/news" style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>Read News &gt;</Link>
                <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>{update.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
