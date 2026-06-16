export default function Philosophy() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="section-inner">
        <div style={{ maxWidth: '720px' }}>
          <p className="section-en">Philosophy</p>
          <h2 className="section-title">大切にしている考え方</h2>
          <blockquote style={{
            borderLeft: '3px solid #76b2c3',
            paddingLeft: '28px',
            marginBottom: '32px',
          }}>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              color: '#222222',
              lineHeight: '2',
            }}>
              信頼構築価値を高め、<br />
              人を生かして事を成す人材を育成する。
            </p>
          </blockquote>
          <p style={{
            fontSize: '1rem',
            color: '#444444',
            lineHeight: '2.2',
          }}>
            自分も相手も大切にし、<br />
            信頼される仕事により、<br />
            明るい日本の未来をつくる。
          </p>
        </div>
      </div>
    </section>
  );
}
