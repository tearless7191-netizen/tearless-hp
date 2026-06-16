export default function Subsidy() {
  return (
    <section style={{
      backgroundColor: '#5f8da2',
      padding: '100px 0',
    }}>
      <div className="section-inner">
        <div style={{ maxWidth: '720px' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.75)',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}>
            Subsidy Support
          </p>
          <h2 style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: '1.4',
          }}>
            助成金・補助金活用支援
          </h2>
          <div style={{
            width: '40px',
            height: '3px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginBottom: '40px',
          }} />
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '2.2',
            marginBottom: '16px',
          }}>
            人材育成やAI導入、業務改善に活用できる<br />
            助成金・補助金の相談に対応しています。
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '2.2',
            marginBottom: '48px',
          }}>
            制度の活用可能性の整理から、研修設計、<br />
            導入支援まで伴走します。<br />
            まずは活用できる可能性があるか、<br />
            お気軽にご相談ください。
          </p>
          <a href="#contact" className="btn-outline">
            助成金について相談する
          </a>
        </div>
      </div>
    </section>
  );
}
