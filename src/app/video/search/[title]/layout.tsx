
export const metadata = {
  title: 'Tìm kiếm',
  description: 'Trang tìm kiếm của Lib Coop',
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
