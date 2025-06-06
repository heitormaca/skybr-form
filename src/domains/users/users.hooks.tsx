'use client'

import { IconBrandDiscord, IconBrandInstagram } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import {
  ActionIcon,
  Anchor,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'

import { onboardUserCharacterAction } from './users.actions'

import type { CreateUserCharacterDataProps } from './users.types'
import Image from 'next/image'

export const useCreateUserCharacter = () => {
  const clipboard = useClipboard({ timeout: 2000 })

  const mutation = useMutation({
    mutationFn: (data: CreateUserCharacterDataProps) =>
      onboardUserCharacterAction(data),
    onSuccess: () => {
      notifications.show({
        title: 'Sucesso',
        message: 'Cadastro realizado com sucesso',
        color: 'green',
        autoClose: 5000,
      })
      modals.open({
        title: <Title order={3}>✅ Cadastro realizado com sucesso!</Title>,
        children: (
          <Group>
            <Text>
              🌟 Você acaba de dar o primeiro passo rumo à sua jornada na SkyBR!
            </Text>
            <Text>
              A partir de agora analisaremos suas informações. Caso seu perfil
              desperte nosso interesse, um de nossos recrutadores entrará em
              contato via WhatsApp para agendar uma entrevista.
            </Text>
            <Text>
              Enquanto aguarda, una-se à nossa tropa nas redes sociais:
            </Text>
            <Stack>
              <Group
                gap="xs"
                onClick={() => {
                  clipboard.copy('ts3.skybr-guild.com.br:9215')
                  notifications.show({
                    title: 'Copiado',
                    message:
                      'Endereço do Teamspeak copiado para a área de transferência',
                    color: 'green',
                    autoClose: 3000,
                  })
                }}
                style={{ cursor: 'pointer' }}
              >
                <ActionIcon>
                  <Image
                    src="/assets/icons/teamspeak.svg"
                    alt="Ícone do teamspeak"
                    width={24}
                    height={24}
                  />
                </ActionIcon>
                <Text span fw="bold" c="blue">
                  Teamspeak 3
                </Text>
              </Group>
              <Anchor
                component="a"
                href={`${process.env.NEXT_PUBLIC_DISCORD_URL}`}
                target="_blank"
                underline="never"
              >
                <Group gap="xs">
                  <ActionIcon>
                    <IconBrandDiscord />
                  </ActionIcon>
                  <Text span fw="bold">
                    Discord
                  </Text>
                </Group>
              </Anchor>
              <Anchor
                component="a"
                href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
                target="_blank"
                underline="never"
              >
                <Group gap="xs">
                  <ActionIcon>
                    <IconBrandInstagram />
                  </ActionIcon>
                  <Text span fw="bold">
                    Instagram
                  </Text>
                </Group>
              </Anchor>
            </Stack>
          </Group>
        ),
        centered: true,
      })
    },
    onError: (error: unknown) => {
      const err = error as Error
      notifications.show({
        title: 'Erro',
        message: err.message,
        color: 'red',
        autoClose: 5000,
      })

      modals.open({
        title: <Title order={3}>⚠️ Erro!</Title>,
        children: (
          <Stack>
            <Text>{err.message}</Text>
            <Button onClick={() => modals.closeAll()}>Tentar novamente</Button>
          </Stack>
        ),
        centered: true,
      })
    },
  })

  return mutation
}
