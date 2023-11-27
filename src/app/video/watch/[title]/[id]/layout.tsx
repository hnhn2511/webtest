
export const metadata = {
  title: 'Watch',
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
