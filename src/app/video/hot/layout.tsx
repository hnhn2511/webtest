
export const metadata = {
  title: 'Phổ biến',
  description: 'Trang phổ biến của Lib Coop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
    {children}
   </>
  )
}
