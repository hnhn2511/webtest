
export const metadata = {
  title: 'Manga',
  description: 'Trang xem manga của Lib Coop',
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
