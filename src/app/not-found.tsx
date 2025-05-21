import { Button, Center, Stack, Text, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Center w="100%" h="100dvh">
      <Stack gap="lg">
        <Stack gap={0}>
          <Title ta="center" fz="7rem" lh="7rem" order={1}>
            404
          </Title>
          <Text ta="center">Página não encontrada</Text>
        </Stack>
        <Center>
          <Button
            component={Link}
            href="/"
            w="fit-content"
            leftSection={<IconArrowLeft width={16} />}
          >
            Voltar para o início
          </Button>
        </Center>
      </Stack>
    </Center>
  )
}
