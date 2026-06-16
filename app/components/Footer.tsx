'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222222',
      color: '#ffffff',
      padding: '60px 0 32px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 40px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '60px',
        }}>
          {/* ロゴ・キャッチ */}
          <div>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '12px',
              letterSpacing: '0.05em',
            }}>
              株式会社ティアレス
            </p>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8',
            }}>
              AI活用と人材育成で、<br />企業と人の可能性をひらく。
            </p>
          </div>

          {/* ナビ */}
          <nav style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'AI事業', href: '#services' },
              { label: 'Monju Lab.', href: '#services' },
              { label: '営業人材育成', href: '#services' },
              { label: '会社概要', href: '#about' },
              { label: 'お問い合わせ', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#76b2c3')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '28px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            © 2024 株式会社ティアレス All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
