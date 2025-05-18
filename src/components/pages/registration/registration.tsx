import { Container, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

import RegistrationForm from './registrationForm'

const Registration: React.FC = () => {
  return (
    <Container py="md">
      <Stack align="center">
        <Image
          src="/assets/logotipo.png"
          alt="Logotipo da guild SkyBR"
          width={250}
          height={215}
          priority={true}
        />
        <Title ta="center" order={1}>
          Formulário de recrutamento
        </Title>
        <Text ta="center">
          Somos um clã estruturado e estratégico, com foco em PvE e PvP, sempre
          prezando pelo trabalho em equipe e pelo crescimento conjunto.
        </Text>
        <RegistrationForm />
      </Stack>
    </Container>
  )
}
export default Registration
