const services = [
  {
    en: 'AI Business',
    title: 'AI事業',
    desc: '生成AI活用による業務効率化、営業活動の自動化、社内業務改善を支援します。',
    icon: '🤖',
  },
  {
    en: 'Monju Lab.',
    title: 'Monju Lab.',
    desc: '大学生向けコミュニティ運営を通じて、信頼構築価値を高め、社会で活躍し続ける人材を育成します。',
    icon: '🎓',
  },
  {
    en: 'Sales Training',
    title: '営業人材育成',
    desc: '若手社員・営業担当者向けに、成果につながる営業力や関係構築力を育成します。',
    icon: '💼',
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#f5f7f9' }}>
      <div className="section-inner">
        <p className="section-en">Services</p>
        <h2 className="section-title">事業内容</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                backgroundColor: '#ffffff',
                padding: '48px 36px',
                borderTop: '3px solid #76b2c3',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(118,178,195,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{s.icon}</div>
              <p style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#76b2c3',
                marginBottom: '8px',
                textTransform: 'uppercase',
              }}>
                {s.en}
              </p>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#222222',
                marginBottom: '20px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: '0.925rem',
                color: '#444444',
                lineHeight: '1.9',
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
