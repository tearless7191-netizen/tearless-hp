export default function Contact() {
  return (
    <section id="contact" className="section" style={{ backgroundColor: '#f5f7f9' }}>
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="section-en">Contact</p>
        <h2 style={{
          fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
          fontWeight: '700',
          color: '#222222',
          marginBottom: '16px',
        }}>
          お問い合わせ
        </h2>
        <div style={{
          width: '40px',
          height: '3px',
          backgroundColor: '#76b2c3',
          margin: '0 auto 48px',
        }} />
        <p style={{
          fontSize: '1rem',
          color: '#444444',
          lineHeight: '2.2',
          marginBottom: '48px',
        }}>
          AI導入、人材育成、Monjuとの連携について、<br />
          お気軽にご相談ください。
        </p>
        <a href="mailto:info@tearless.jp" className="btn-primary">
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
}
