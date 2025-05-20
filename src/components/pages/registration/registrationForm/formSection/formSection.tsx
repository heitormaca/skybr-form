import { Paper, SimpleGrid, Title } from '@mantine/core'

import type { FormSectionProps } from './formSection.types'

const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  columns,
}) => {
  return (
    <div>
      <Title order={2} mb="sm">
        {title}
      </Title>
      <Paper withBorder p="md">
        <SimpleGrid cols={columns}>{children}</SimpleGrid>
      </Paper>
    </div>
  )
}
export default FormSection
