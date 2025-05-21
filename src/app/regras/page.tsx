import { Metadata } from 'next'

import Rules from '@/components/pages/rules'

export const metadata: Metadata = {
  title: 'Regras',
  description: 'Regras de Convivência e Compromisso do clã SkyBR',
}

export default function RulesPage() {
  return (
    <main>
      <Rules />
    </main>
  )
}
