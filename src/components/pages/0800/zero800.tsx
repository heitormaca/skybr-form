'use client'

import { Container, List, ListItem, Stack, Text, Title } from '@mantine/core'

const Zero800: React.FC = () => {
  return (
    <Container py="md">
      <Stack align="center">
        <Title ta="center" order={1}>
          Empréstimo de personagem para o &quot;0800&quot;
        </Title>
        <Text fz="xs" fw="bold">
          Última atualização: 18/05/2025
        </Text>
        <Text>
          Emprestar o personagem para &quot;0800&quot; significa disponibilizar
          voluntariamente seu personagem ao clã, sem qualquer cobrança de{' '}
          <Text span fw="bold">
            recursos
          </Text>{' '}
          ou obtenção de{' '}
          <Text span fw="bold">
            vantagens
          </Text>
          , para participação em eventos de PvP, como TWs, GvGs, NW, entre
          outros.
        </Text>
        <Title order={2}>Regras e procedimentos</Title>
        <List
          type="ordered"
          w="100%"
          size="xl"
          spacing="md"
          fw="bold"
          pr={{ base: 'md', xs: 'sm' }}
        >
          <List.Item>Comunicação prévia com a Staff:</List.Item>
          <Text>
            O dono da conta deve informar antecipadamente sua intenção de
            emprestar o personagem através do formulário de inscrição para o
            clã.
          </Text>
          <ListItem>Bloqueio do personagem:</ListItem>
          <Text>
            O personagem deverá estar com o cadeado ativado por no mínimo{' '}
            <Text span fw="bold">
              4 horas
            </Text>
            . O bloqueio deve impedir alterações indevidas durante o uso por
            terceiros.
          </Text>
          <ListItem>Envio de prints para controle:</ListItem>
          <Text>
            O dono da conta deve enviar{' '}
            <Text span fw="bold">
              prints atualizados
            </Text>{' '}
            dos seguintes itens:
          </Text>
          <List withPadding spacing={0} fw="normal">
            <ListItem>Inventário completo;</ListItem>
            <ListItem>Banco do personagem;</ListItem>
            <ListItem>Armazém de materiais;</ListItem>
            <ListItem>Guarda-roupa (caso utilize roupas fashion).</ListItem>
          </List>
          <ListItem>Alteração de senha temporária:</ListItem>
          <List withPadding spacing={0} fw="normal">
            <ListItem>
              A senha da conta deverá ser alterada para uma{' '}
              <Text span fw="bold">
                senha temporária
              </Text>{' '}
              definida pela Staff;
            </ListItem>
            <ListItem>
              Após o término do evento, o dono da conta deve alterar sua senha
              novamente de acordo com a sua preferência.
            </ListItem>
          </List>
        </List>
        <Title order={2}>Obervações importantes</Title>
        <List
          withPadding
          type="ordered"
          fw="normal"
          w="100%"
          pr={{ base: 'md', xs: 'sm' }}
        >
          <ListItem>
            O empréstimo é{' '}
            <Text span fw="bold">
              voluntário
            </Text>{' '}
            e não obriga o clã a fornecer qualquer tipo de compensação;
          </ListItem>
          <ListItem>
            O clã só será responsabilizado por eventuais perdas ou problemas
            caso o dono da conta tenha seguido rigorosamente todos os
            procedimentos listados acima (incluindo comunicação com a Staff,
            envio de prints, ativação do cadeado e troca de senha);
          </ListItem>
          <ListItem>
            Caso algum dos procedimentos não seja cumprido corretamente, o clã{' '}
            <Text span fw="bold">
              não se responsabilizará
            </Text>{' '}
            por ressarcimentos ou prejuízos;
          </ListItem>
          <ListItem>
            O dono do personagem continua sendo o{' '}
            <Text span fw="bold">
              único responsável
            </Text>{' '}
            pela sua conta;
          </ListItem>
          <ListItem>
            A Staff se compromete a manter a{' '}
            <Text span fw="bold">
              confidencialidade
            </Text>{' '}
            das informações e a respeitar os limites acordados.
          </ListItem>
        </List>
      </Stack>
    </Container>
  )
}
export default Zero800
