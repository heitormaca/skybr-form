import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inscrição SkyBR',
  description: 'Formulário de inscrição para o clã SkyBR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
