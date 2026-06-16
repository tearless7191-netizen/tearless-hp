export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #5f8da2 0%, #76b2c3 50%, #a8cdd8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 背景装飾 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.15)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '800px',
      }}>
        <p style={{
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '24px',
          textTransform: 'uppercase',
        }}>
          Tearless Inc.
        </p>

        <h1 style={{
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: '700',
          color: '#ffffff',
          lineHeight: '1.5',
          marginBottom: '32px',
          letterSpacing: '0.05em',
        }}>
          AI活用と人材育成で、<br />
          企業と人の可能性をひらく。
        </h1>

        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: '2',
          marginBottom: '48px',
        }}>
          企業の業務改善、採用・育成、<br />
          次世代人材の成長を支援しています。
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#contact" className="btn-primary" style={{
            backgroundColor: '#ffffff',
            color: '#5f8da2',
            borderColor: '#ffffff',
          }}>
            お問い合わせ
          </a>
          <a href="#services" className="btn-outline">
            事業内容を見る
          </a>
        </div>
      </div>

      {/* スクロール矢印 */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.75rem',
        letterSpacing: '0.15em',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '8px' }}>SCROLL</div>
        <div style={{ fontSize: '1.2rem' }}>↓</div>
      </div>
    </section>
  );
}
