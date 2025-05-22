'use client'

import { Anchor, Box, Container, List, Stack, Text, Title } from '@mantine/core'

const Terms: React.FC = () => {
  return (
    <Container py="md">
      <Box>
        <Stack gap="xs">
          <Title ta="center" order={1}>
            📄 Termos de Uso e Política de Privacidade
          </Title>
          <Text fz="xs" fw="bold" ta="center">
            Última atualização: 21/05/2025
          </Text>
        </Stack>
        <List
          type="ordered"
          w="100%"
          size="xl"
          spacing="md"
          fw="bold"
          pr={{ base: 'md', xs: 'sm' }}
        >
          <List.Item>Coleta de dados pessoais</List.Item>
          <Text>
            Ao se inscrever no formulário de recrutamento do clã SkyBR,
            coletamos os seguintes dados pessoais:
          </Text>
          <List withPadding spacing={0} fw="normal">
            <List.Item>Nome completo;</List.Item>
            <List.Item>Número de WhatsApp;</List.Item>
            <List.Item>Endereço de e-mail.</List.Item>
          </List>
          <Text>
            Essas informações são fornecidas voluntariamente por você através do
            formulário de inscrição.
          </Text>
          <List.Item>Finalidade da coleta</List.Item>
          <Text>Os dados coletados serão utilizados exclusivamente para:</Text>
          <List withPadding spacing={0} fw="normal">
            <List.Item>Comunicação entre os membros da guilda;</List.Item>
            <List.Item>
              Organização de eventos e atividades relacionadas ao jogo Perfect
              World;
            </List.Item>
            <List.Item>
              Compartilhamento de informações relevantes sobre a guilda.
            </List.Item>
          </List>
          <List.Item>Armazenamento e segurança dos dados</List.Item>
          <Text>
            Seus dados serão armazenados de forma segura e acessíveis apenas
            pelos administradores da guilda. Implementamos medidas técnicas e
            organizacionais adequadas para proteger suas informações contra
            acesso não autorizado, divulgação ou destruição.
          </Text>
          <List.Item>Compartilhamento de dados</List.Item>
          <Text>
            Não compartilharemos seus dados pessoais com terceiros sem seu
            consentimento prévio, exceto quando exigido por lei ou por
            autoridades competentes.
          </Text>
          <List.Item>Direitos dos titulares dos dados</List.Item>
          <Text>De acordo com a LGPD, você tem o direito de:</Text>
          <List withPadding spacing={0} fw="normal">
            <List.Item>Acessar seus dados pessoais;</List.Item>
            <List.Item>
              Corrigir dados incompletos, inexatos ou desatualizados;
            </List.Item>
            <List.Item>
              Solicitar a anonimização, bloqueio ou eliminação de dados
              desnecessários ou tratados em desconformidade com a lei;
            </List.Item>
            <List.Item>Revogar o consentimento a qualquer momento;</List.Item>
          </List>
          <Text>
            Para exercer esses direitos, entre em contato conosco pelo e-mail:{' '}
            <Anchor>contato@skybr-guild.com.br</Anchor>.
          </Text>
          <List.Item>Retenção dos dados</List.Item>
          <Text>
            Manteremos seus dados pessoais apenas pelo tempo necessário para
            cumprir as finalidades descritas nesta política, salvo se houver
            outra base legal que justifique sua conservação.
          </Text>
          <List.Item>Alterações nesta política</List.Item>
          <Text>
            Podemos atualizar esta política periodicamente. Recomendamos que
            você reveja esta página regularmente para se manter informado sobre
            quaisquer alterações.
          </Text>
        </List>
      </Box>
    </Container>
  )
}
export default Terms
