'use client'

import { useTheme } from 'next-themes'
import { ItemProps } from '.'
import SelectRoot from './root'

const handlePlaceholder = (value: string) => {
  const placeholders = {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
  }

  return placeholders[value as keyof typeof placeholders]
}

const children: ItemProps[] = [
  {
    value: 'system',
    placeholder: 'System',
  },
  {
    value: 'light',
    placeholder: 'Light',
  },
  {
    value: 'dark',
    placeholder: 'Dark',
  },
]

const SelectTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <SelectRoot
      defaultValue={theme ?? 'system'}
      placeholder={theme ? handlePlaceholder(theme) : 'System'}
      onValueChange={setTheme}
    >
      {children}
    </SelectRoot>
  )
}

export default SelectTheme
