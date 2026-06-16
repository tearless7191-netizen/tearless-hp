import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: '株式会社ティアレス | AI活用と人材育成で企業と人の可能性をひらく',
  description: 'ティアレスは、AI活用・人材育成・学生コミュニティ運営を通じて、企業と人の成長を支援しています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
