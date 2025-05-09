import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { theme } from '@/configs/mantine'
import QueryClientProvider from '@/providers'

import type { Metadata } from 'next'

import '@mantine/core/styles.css'

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
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <QueryClientProvider>
          <MantineProvider theme={theme}>
            {children}
            <SpeedInsights />
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
