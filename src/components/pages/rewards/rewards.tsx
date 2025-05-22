import { Box, Container, Stack, Text, Title } from '@mantine/core'

const Rewards: React.FC = () => {
  return (
    <Container py="md">
      <Box>
        <Stack gap="xs">
          <Title ta="center" order={1}>
            🏆 Programa de Rewards
          </Title>
          <Text fz="xs" fw="bold" ta="center">
            Última atualização: 21/05/2025
          </Text>
          <Text>[🛠️ Em construção...]</Text>
        </Stack>
      </Box>
    </Container>
  )
}
export default Rewards
