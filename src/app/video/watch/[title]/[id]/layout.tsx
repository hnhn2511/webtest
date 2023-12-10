
export const metadata = {
  title: 'Phim',
  description: 'Trang watch của Lib Coop',
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
