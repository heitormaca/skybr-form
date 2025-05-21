import { Metadata } from 'next'

import Zero800 from '@/components/pages/0800'

export const metadata: Metadata = {
  title: '0800',
  description: 'O programa de 0800 do clã SkyBR',
}

export default function Zero800Page() {
  return (
    <main>
      <Zero800 />
    </main>
  )
}
