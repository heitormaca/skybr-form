import Rewards from '@/components/pages/rewards'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rewards',
  description: 'Programa de Rewards do clã SkyBR',
}

export default function RewardsPage() {
  return (
    <main>
      <Rewards />
    </main>
  )
}
