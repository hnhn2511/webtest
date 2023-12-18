
export const metadata = {
  title: 'Tìm kiếm',
  description: 'Trang tìm kiếm',
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
