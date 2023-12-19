import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Footer from '../../compunent/appFooter';
import Header from '../../compunent/appHeader';
import Background from '../../compunent/appBackgroundcontent';
import { AppProvider } from '../../context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tân Lang',
  description: 'Trang Tổng Hợp Manga , Anime , Fc2 , Av , Subtitle Từ Khắp Mọi Nơi Trên Internet'
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
