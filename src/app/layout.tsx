import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../compunent/appFooter';
import Header from '../../compunent/appHeader';
import Background from '../../compunent/appBackgroundcontent';
import { AppProvider } from'../../context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Thông tin của Lib Coop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', background: '#f0f2f5' }}>
        <AppProvider>
          <Header></Header>
          <Background></Background>
          {children}
        </AppProvider>
        <Footer></Footer>

      </body>
    </html>
  )
}
