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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'SkyBR',
    template: '%s • SkyBR',
  },
  description: 'Site oficial do clã SkyBR',
  openGraph: {
    images: [
      {
        url: '/assets/logotipo_seo.png',
        width: 512,
        height: 512,
        alt: 'Logotipo do clã SkyBR',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme="dark"
        />
        <link rel="icon" href="/assets/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <QueryClientProvider>
          <MantineProvider
            theme={theme}
            defaultColorScheme="dark"
            forceColorScheme="dark"
          >
            {children}
            <SpeedInsights />
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
