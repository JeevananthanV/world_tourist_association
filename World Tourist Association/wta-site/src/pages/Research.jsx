import { FileText, Database, Activity, Download } from 'lucide-react';

function Research() {
  return (
    <div>
      {/* Hero */}
      <div className="section-blue-soft" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Research & Insights</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            Data, reports, and tourism intelligence to guide the industry forward.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            
            {/* Publications */}
            <div className="card" id="publications">
              <FileText size={40} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Publications</h2>
              <p style={{ marginBottom: '16px' }}>
                Access our library of reports, including visitor forecasts, tourism trends, sustainability guides, and regional performance analyses.
              </p>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '4px', padding: '16px', backgroundColor: 'var(--color-background)' }}>
                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '8px' }}>Latest Release</h4>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>Asia Pacific Visitor Forecasts 2026-2028</p>
                <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><Download size={14} /> Download</button>
              </div>
            </div>

            {/* WTAmPOWER */}
            <div className="card" id="wtampower">
              <Database size={40} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>WTAmPOWER</h2>
              <p style={{ marginBottom: '16px' }}>
                Our proprietary tourism data and intelligence platform. Dive deep into market analytics, competitor benchmarking, and custom data queries.
              </p>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Data Analytics" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '16px' }} />
              <button className="btn-primary" style={{ width: '100%' }}>Access Platform</button>
            </div>

            {/* Travel Dashboard */}
            <div className="card" id="global-snapshot">
              <Activity size={40} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Global Snapshot</h2>
              <p style={{ marginBottom: '16px' }}>
                A weekly travel and tourism dashboard providing real-time regional information, flight capacities, and sentiment analysis.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', fontSize: '14px' }}>
                <li style={{ paddingBottom: '8px', borderBottom: '1px solid var(--color-border)' }}><strong>Flights:</strong> +5% WoW (Asia Pacific)</li>
                <li style={{ paddingBottom: '8px', borderBottom: '1px solid var(--color-border)' }}><strong>Hotel Occ:</strong> 72% Average</li>
                <li><strong>Search Sentiment:</strong> Highly Positive</li>
              </ul>
              <button className="btn-secondary" style={{ width: '100%' }}>View Dashboard</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
