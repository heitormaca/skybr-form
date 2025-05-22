'use client'

import {
  Box,
  Container,
  Divider,
  List,
  Stack,
  Text,
  Title,
} from '@mantine/core'

const Rules: React.FC = () => {
  return (
    <Container py="md">
      <Box>
        <Stack gap="xs">
          <Title ta="center" order={1}>
            📜 Regras de Convivência e Compromisso
          </Title>
          <Text fz="xs" fw="bold" ta="center">
            Última atualização: 21/05/2025
          </Text>
          <Text>
            A convivência em nosso clã deve ser guiada pelo{' '}
            <Text span fw="bold">
              respeito
            </Text>
            ,{' '}
            <Text span fw="bold">
              maturidade
            </Text>{' '}
            e{' '}
            <Text span fw="bold">
              espírito de equipe
            </Text>
            . Cada membro representa o clã em tudo o que faz. Ao permanecer
            conosco, você concorda e se compromete com as diretrizes abaixo:
          </Text>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            🤝 Convivência e Respeito
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Trate todos com{' '}
              <Text span fw="bold">
                respeito
              </Text>
              , dentro e fora do clã. Suas atitudes refletem na imagem do grupo;
            </List.Item>
            <List.Item>
              Mantenha um tom amistoso e evite{' '}
              <Text span fw="bold">
                discussões desnecessárias
              </Text>
              . Não entre no jogo de quem busca provocar;
            </List.Item>
            <List.Item>
              Evite piadas ofensivas, excesso de palavrões e temas polêmicos
              (política, religião e, se possível, futebol).{' '}
              <Text span fw="bold">
                Estamos aqui para nos divertir
              </Text>
              .
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            🧠 Maturidade e Atitude
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Comportamentos infantis, dramas ou atitudes tóxicas{' '}
              <Text span fw="bold">
                não serão tolerados
              </Text>
              ;
            </List.Item>
            <List.Item>
              Valorizamos a postura madura, colaborativa e leal;
            </List.Item>
            <List.Item>
              Evite usar o chat do clã ou o TS3 para desabafos pessoais
              delicados. Cuide do ambiente coletivo.
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            🛡️ PvP e Relação com o Servidor
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Evite atacar jogadores AFK ou muito abaixo do seu nível;
            </List.Item>
            <List.Item>
              Não atrapalhe quem estiver fazendo missões ou eventos;
            </List.Item>
            <List.Item>
              A rivalidade no PvP é saudável, mas deve ser acompanhada de
              respeito. Após TWs, GvGs ou NWs,{' '}
              <Text span fw="bold">
                mantenha o espírito esportivo
              </Text>
              ;
            </List.Item>
            <List.Item>
              Evite PKs acidentais entre membros. Ajuste seus filtros
              corretamente para evitar problemas.
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            👥 Organização Interna
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Não expulse membros da PT sem motivo claro ou justificativa;
            </List.Item>
            <List.Item>
              O uso do TS3 é{' '}
              <Text span fw="bold">
                obrigatório
              </Text>{' '}
              durante TWs, GvGs e eventos. Se estiver online mas não puder
              falar, permaneça em salas AFK ou informe a Staff.
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            🎁 Drops e Eventos
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Apenas a Staff pode coletar drops de World Boss;
            </List.Item>
            <List.Item>
              Em PTs e DGs, os drops seguem ordem ou sorteio, conforme combinado
              previamente;
            </List.Item>
            <List.Item>
              Comportamento egoísta não tem espaço aqui. Crescemos juntos,{' '}
              <Text span fw="bold">
                ajudamos uns aos outros
              </Text>
              .
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            ⚠️ Condutas Inaceitáveis
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              <Text span fw="bold">
                Assédio
              </Text>
              , ofensas pessoais ou qualquer forma de{' '}
              <Text span fw="bold">
                discriminação
              </Text>{' '}
              são inaceitáveis;
            </List.Item>
            <List.Item>
              Entrar e sair do clã repetidamente sem justificativa será motivo
              para{' '}
              <Text span fw="bold">
                expulsão
              </Text>{' '}
              e{' '}
              <Text span fw="bold">
                banimento
              </Text>
              ;
            </List.Item>
            <List.Item>
              Personagens secundários não podem permanecer no clã se o main
              estiver em outro;
            </List.Item>
            <List.Item>
              Reincidências serão listadas no &quot;mural da vergonha&quot; do
              TS3, com{' '}
              <Text span fw="bold">
                bloqueio definitivo
              </Text>{' '}
              de retorno.
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Stack gap="xs">
          <Title order={3} w="100%">
            📡 Comunicação e TS3
          </Title>
          <List
            withPadding
            spacing={0}
            fw="normal"
            w="100%"
            pr={{ base: 'md', xs: 'sm' }}
          >
            <List.Item>
              Use os canais corretos no TS3 para não atrapalhar outras
              atividades;
            </List.Item>
            <List.Item>
              Seja pontual e participe das{' '}
              <Text span fw="bold">
                calls obrigatórias
              </Text>{' '}
              de eventos;
            </List.Item>
            <List.Item>
              O TS3 é nossa principal ferramenta de organização. Ausência
              frequente ou descaso serão interpretados como desinteresse.
            </List.Item>
          </List>
        </Stack>
        <Divider my="md" />
        <Title order={3} w="100%">
          ✅ Compromisso com o Clã
        </Title>
        <List
          withPadding
          spacing={0}
          fw="normal"
          w="100%"
          pr={{ base: 'md', xs: 'sm' }}
        >
          <List.Item>
            {' '}
            A{' '}
            <Text span fw="bold">
              reputação do clã
            </Text>{' '}
            é responsabilidade de todos;
          </List.Item>
          <List.Item>
            Seja ativo, colaborativo e presente — tanto em eventos quanto no dia
            a dia;
          </List.Item>
          <List.Item>
            Caso o jogador fique{' '}
            <Text span fw="bold">
              inativo
            </Text>{' '}
            por vários dias sem{' '}
            <Text span fw="bold">
              qualquer justificativa
            </Text>
            , será{' '}
            <Text span fw="bold">
              convidado a se retirar
            </Text>{' '}
            para mantermos a organização e o comprometimento do grupo;
          </List.Item>
          <List.Item>
            <Text span fw="bold">
              Lembre-se:
            </Text>{' '}
            o clã é feito de pessoas. Seja o tipo de jogador que você gostaria
            de ter ao seu lado.
          </List.Item>
        </List>
      </Box>
    </Container>
  )
}
export default Rules
