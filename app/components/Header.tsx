'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(255,255,255,0.97)',
      borderBottom: '1px solid #dde4e8',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* ロゴ */}
        <a href="/" style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          color: '#222222',
          letterSpacing: '0.05em',
        }}>
          株式会社ティアレス
        </a>

        {/* PCナビ */}
        <nav style={{ display: 'flex', gap: '36px' }} className="pc-nav">
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
                fontSize: '0.875rem',
                color: '#444444',
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#76b2c3')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444444')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ハンバーガーメニュー（スマホ） */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="メニュー"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#222222' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#222222' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#222222' }} />
        </button>
      </div>

      {/* スマホメニュー */}
      {menuOpen && (
        <nav style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #dde4e8',
          padding: '16px 24px',
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
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '0.95rem',
                color: '#222222',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pc-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
