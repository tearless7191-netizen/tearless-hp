export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="section-inner">
        <div style={{ maxWidth: '720px' }}>
          <p className="section-en">About Us</p>
          <h2 className="section-title">私たちについて</h2>
          <p style={{
            fontSize: '1rem',
            color: '#444444',
            lineHeight: '2.2',
          }}>
            ティアレスは、<br />
            AI活用・人材育成・学生コミュニティ運営を通じて、<br />
            企業と人の成長を支援しています。
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#444444',
            lineHeight: '2.2',
            marginTop: '24px',
          }}>
            単なるツール導入や研修提供ではなく、<br />
            現場に入り、課題を整理し、<br />
            実行まで伴走することを大切にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
