'use client'

import {
  CloseButton,
  Combobox,
  InputBase,
  Group,
  CheckIcon,
  useCombobox,
  Input,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'

import { RegistrationFormPropsValues } from '../registrationForm.schema'
import { selectData } from './selectClass.constants'

import type { UseFormReturnType } from '@mantine/form'

import s from './selectClass.module.css'

export type SelectClassProps = {
  form: UseFormReturnType<RegistrationFormPropsValues>
}

const SelectClass: React.FC<SelectClassProps> = ({ form }) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [value, setValue] = useState<string>(
    form.getInputProps('class_name').defaultValue,
  )

  const selected = selectData.find((g) => g.value === value)!
  const isError = form.getInputProps('class_name').error

  const options = selectData.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <Group gap="xs">
        {item.value === value && <CheckIcon size={12} />}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={item.icon}
            alt={item.label}
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
          {item.label}
        </div>
      </Group>
    </Combobox.Option>
  ))

  return (
    <div>
      <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val)
          form.setFieldValue('class_name', val)
          form.setTouched({ class_name: true })
          combobox.closeDropdown()
        }}
      >
        <Combobox.Target>
          <InputBase
            mod={{ error: !!isError }}
            className={s.input_base}
            withAsterisk
            label="Classe do personagem"
            key={form.key('class_name')}
            component="button"
            type="button"
            pointer
            rightSection={
              value && value.length > 0 ? (
                <CloseButton
                  size="sm"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setValue('')
                    form.setFieldValue('class_name', '')
                  }}
                  aria-label="Limpar valor"
                />
              ) : (
                <Combobox.Chevron
                  style={{ cursor: 'pointer' }}
                  onClick={() => combobox.toggleDropdown()}
                />
              )
            }
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents={value === null ? 'none' : 'all'}
            mb={isError && 'calc(var(--mantine-spacing-xs) / 2)'}
          >
            {value ? (
              <Group gap="xs">
                <Image
                  src={selected.icon}
                  alt={selected.label}
                  width={20}
                  height={20}
                />
                <span>{selected.label}</span>
              </Group>
            ) : (
              <Input.Placeholder>
                Selecione a classe do seu personagem
              </Input.Placeholder>
            )}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      {isError && (
        <Text style={{ fontSize: '12px' }} c="var(--mantine-color-error)">
          {isError}
        </Text>
      )}
    </div>
  )
}

export default SelectClass
