import {
  Anchor,
  Box,
  Center,
  Container,
  Divider,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Image from 'next/image'

import RegistrationForm from './registrationForm'
import Link from 'next/link'

const Registration: React.FC = () => {
  return (
    <Container py="md">
      <Box>
        <Center>
          <Image
            src="/assets/logotipo.png"
            alt="Logotipo da guild SkyBR"
            width={250}
            height={215}
            priority={true}
          />
        </Center>
        <Stack gap="xs">
          <Title ta="center" order={1}>
            ✨ SkyBR — Tradição, Estratégia e União!
          </Title>
          <Text ta="start" w="100%">
            Se você busca um clã com{' '}
            <Text span fw="bold">
              tradição
            </Text>
            ,{' '}
            <Text span fw="bold">
              competitividade
            </Text>{' '}
            e uma{' '}
            <Text span fw="bold">
              comunidade ativa
            </Text>{' '}
            que vai além do jogo, o{' '}
            <Text span fw="bold">
              SkyBR
            </Text>{' '}
            é o seu lugar.
          </Text>
          <Text ta="start" w="100%">
            Há 18 anos, nascemos no lendário servidor{' '}
            <Text span fw="bold">
              Extreme do PWI Chinês
            </Text>
            , quando o cenário de Perfect World Private ainda dava seus
            primeiros passos. Desde então, trilhamos uma longa jornada:
            migramos, evoluímos, fizemos alianças e enfrentamos desafios em
            diferentes servidores.
          </Text>
          <Text ta="start" w="100%">
            Hoje, retomamos nossas raízes no servidor{' '}
            <Text span fw="bold">
              PW The Classic 1.2.6
            </Text>
            , reunindo antigos companheiros e acolhendo novos talentos para
            continuarmos escrevendo essa história.
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            🛡️ Nosso Foco
          </Title>
          <Text ta="start" w="100%">
            Somos um clã{' '}
            <Text span fw="bold">
              estratégico
            </Text>
            ,{' '}
            <Text span fw="bold">
              estruturado
            </Text>{' '}
            e comprometido com o{' '}
            <Text span fw="bold">
              progresso coletivo
            </Text>
            . Aqui, PvE e PvP caminham lado a lado — com{' '}
            <Text span fw="bold">
              organização
            </Text>
            ,{' '}
            <Text span fw="bold">
              seriedade
            </Text>{' '}
            e, claro,{' '}
            <Text span fw="bold">
              diversão
            </Text>
            .
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs" w="100%">
          <Title order={3} w="100%">
            🎯 O Que Esperamos de Você
          </Title>
          <Text ta="start" w="100%">
            ✅ Presença no TeamSpeak 3 sempre que estiver online
          </Text>
          <Text ta="start" w="100%">
            ✅ Comprometimento com os eventos internos e oficiais
          </Text>
          <Text ta="start" w="100%">
            ✅ Atividade constante no jogo e nas plataformas de comunicação
          </Text>
          <Text ta="start" w="100%">
            ✅ Participação obrigatória nas Guerras Territoriais (TW)
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs" w="100%">
          <Title order={3} w="100%">
            🎁 Reconhecemos os Que Fazem a Diferença
          </Title>
          <Text ta="start" w="100%">
            No SkyBR, esforço e dedicação não passam despercebidos. Por isso,
            criamos um sistema exclusivo de [
            <Anchor
              component={Link}
              href="/rewards"
              target="_blank"
              underline="always"
            >
              rewards
            </Anchor>
            ]: um programa justo e motivador que distribui as moedas{' '}
            <Text span fw="bold">
              TCC
            </Text>{' '}
            (The Classic Coin) obtidas pelo clã entre os membros que mais se
            destacam nos eventos e contribuições. Seu empenho gera conquistas —
            e também recompensas reais dentro do jogo.
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs" w="100%">
          <Title order={3} w="100%">
            🤝 O Que Você Ganha ao Se Juntar a Nós
          </Title>
          <Text ta="start" w="100%">
            🔹 Um clã com história e respeito no cenário PW Private
          </Text>
          <Text ta="start" w="100%">
            🔹 Uma comunidade ativa e engajada no Discord/TS3
          </Text>
          <Text ta="start" w="100%">
            🔹 Eventos internos exclusivos como Boss Day, Dusk Day, desafios e
            torneios
          </Text>
          <Text ta="start" w="100%">
            🔹 Suporte com builds, farm e estratégias
          </Text>
          <Text ta="start" w="100%">
            🔹 Vagas garantidas nas principais frentes de combate: TW, Arena e
            GvG
          </Text>
          <Text ta="start" w="100%">
            🔹 Moedas TCC (The Classic Coin) de acordo com a sua participação
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs" w="100%">
          <Text ta="start" w="100%">
            Se você está pronto para fazer parte de algo maior — com estrutura,
            propósito e companheirismo — o SkyBR está de portas abertas.
          </Text>
          <Text ta="start" w="100%">
            📝 Preencha agora o nosso{' '}
            <Text span fw="bold">
              formulário de inscrição
            </Text>{' '}
            e dê o primeiro passo rumo à sua jornada no clã. Após essa triagem
            inicial, entraremos em contato para uma breve entrevista. Estamos
            ansiosos para conhecer você!
          </Text>
        </Stack>
        <Box mt="xl">
          <RegistrationForm />
        </Box>
      </Box>
    </Container>
  )
}
export default Registration
