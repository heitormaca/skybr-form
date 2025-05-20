'use client'

import { IconHelpOctagon } from '@tabler/icons-react'
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  MultiSelect,
  Popover,
  Radio,
  SimpleGrid,
  Text,
  TextInput,
} from '@mantine/core'
import Link from 'next/link'
import { IMaskInput } from 'react-imask'

import { multiSelectData } from './registrationForm.constants'
import { useRegistrationForm } from './registrationForm.hook'

import FormSection from './formSection'
import SelectClass from './selectClass'

const RegistrationForm: React.FC = () => {
  const { form, marginBottomOnError, handleSubmit } = useRegistrationForm()

  return (
    <Box component="form" w="100%" onSubmit={form.onSubmit(handleSubmit)}>
      <SimpleGrid cols={1} w="100%" verticalSpacing="md">
        <FormSection title="Informações pessoais">
          <Input.Wrapper
            withAsterisk
            label="Contato do WhatsApp"
            error={form.getInputProps('cellphone').error}
          >
            <Input
              placeholder="Insira seu número do WhatsApp"
              component={IMaskInput}
              mask={'+55 (00) 00000-0000'}
              key={form.key('cellphone')}
              {...form.getInputProps('cellphone')}
            />
          </Input.Wrapper>
          <TextInput
            withAsterisk
            label="Nome completo"
            placeholder="Insira o seu nome completo"
            key={form.key('complete_name')}
            {...form.getInputProps('complete_name')}
          />
        </FormSection>
        <FormSection title="Informações de jogo">
          <TextInput
            withAsterisk
            label="Nome do personagem"
            placeholder="Insira o nick do seu personagem"
            key={form.key('nick_name')}
            {...form.getInputProps('nick_name')}
          />
          <SelectClass form={form} />
        </FormSection>
        <FormSection title="Disponibilidade">
          <MultiSelect
            withAsterisk
            label="Disponibilidade de jogo"
            placeholder="Selecione a sua disponibilidade"
            clearable
            hidePickedOptions
            data={multiSelectData}
            key={form.key('game_availability')}
            {...form.getInputProps('game_availability')}
          />

          <Radio.Group
            withAsterisk
            label={
              <Group align="center" gap={0}>
                <Text>Disponibilidade para o 0800</Text>
                <Popover width={200} position="right" withArrow>
                  <Popover.Target>
                    <ActionIcon size="sm" variant="transparent">
                      <IconHelpOctagon size={16} />
                    </ActionIcon>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text size="sm">
                      <Anchor
                        component={Link}
                        href="/0800"
                        target="_blank"
                        underline="always"
                      >
                        0800
                      </Anchor>{' '}
                      é um procedimento voluntário que permite emprestar seu
                      personagem ao clã para participar de eventos (TWs, GvGs,
                      NW, etc.) quando você não puder estar online.
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>
            }
            styles={{ label: { display: '-webkit-inline-flex' } }}
            key={form.key('0800_availability')}
            {...form.getInputProps('0800_availability')}
          >
            <Group mt="xs" mb={marginBottomOnError('0800_availability')}>
              <Radio value="true" label="Sim" variant="outline" />
              <Radio value="false" label="Não" variant="outline" />
            </Group>
          </Radio.Group>
        </FormSection>
        <Checkbox
          key={form.key('accept_rules')}
          {...form.getInputProps('accept_rules', { type: 'checkbox' })}
          label={
            <Text>
              Declaro que eu li e concordo com as{' '}
              <Anchor
                component={Link}
                href="/regras"
                target="_blank"
                underline="always"
              >
                regras do clã
              </Anchor>
              .
            </Text>
          }
        />
        <Checkbox
          key={form.key('accept_terms')}
          {...form.getInputProps('accept_terms', { type: 'checkbox' })}
          label={
            <Text>
              Declaro que eu li e concordo com os{' '}
              <Anchor
                component={Link}
                href="/termos"
                target="_blank"
                underline="always"
              >
                Termos de Uso e Política de Privacidade
              </Anchor>
              .
            </Text>
          }
        />
        <Group justify="flex-end">
          <Button type="submit">Enviar</Button>
        </Group>
      </SimpleGrid>
    </Box>
  )
}
export default RegistrationForm
