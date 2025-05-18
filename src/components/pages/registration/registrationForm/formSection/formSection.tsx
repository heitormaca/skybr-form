import { Paper, SimpleGrid, Title } from '@mantine/core'

import type { FormSectionProps } from './formSection.types'

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <div>
      <Title order={2} mb="sm">
        {title}
      </Title>
      <Paper withBorder p="md">
        <SimpleGrid cols={{ xs: 2 }}>{children}</SimpleGrid>
      </Paper>
    </div>
  )
}
export default FormSection
