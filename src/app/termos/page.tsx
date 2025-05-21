import { Metadata } from 'next'

import Terms from '@/components/pages/terms'

export const metadata: Metadata = {
  title: 'Termos',
  description: 'Termos de Uso e Política de Privacidade do clã SkyBR',
}

export default function TermsPage() {
  return (
    <main>
      <Terms />
    </main>
  )
}
