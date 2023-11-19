'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { PlaceholderTranslationsType, SelectLanguageTranslationProps } from '.'
import Button from '../button'
import SelectRoot from './root'

type SelectLanguageProps = { translation: SelectLanguageTranslationProps }

const handlePlaceholder = (
  value: string,
  { english, portuguese }: PlaceholderTranslationsType
) => {
  const placeholders = {
    en: english,
    pt: portuguese,
  }

  return placeholders[value as keyof typeof placeholders]
}

const handleChange = (value: string, pathname: string) => {
  if (
    (value === 'en' && !pathname.includes('/pt')) ||
    pathname.includes(`/${value}`)
  )
    return false

  return pathname.includes('/pt')
    ? pathname.replace('/pt', `/${value}`)
    : `/${value}${pathname === '/' ? '/home' : pathname}`
}

const children = ({ english, portuguese }: PlaceholderTranslationsType) => [
  { value: 'en', placeholder: english },
  { value: 'pt', placeholder: portuguese },
]

const SelectLanguage = ({ translation }: SelectLanguageProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const language = pathname.includes('pt') ? 'pt' : 'en'
  const [refresh, setRefresh] = useState<false | string>('')

  return (
    <div className='space-y-4 text-center'>
      <SelectRoot
        defaultValue={language}
        placeholder={handlePlaceholder(language, {
          english: translation.placeholders.english,
          portuguese: translation.placeholders.portuguese,
        })}
        onValueChange={(value) => setRefresh(handleChange(value, pathname))}
      >
        {children({
          english: translation.placeholders.english,
          portuguese: translation.placeholders.portuguese,
        })}
      </SelectRoot>
      {refresh && (
        <Button.ButtonRoot
          variant='destructive'
          className='w-full'
          onClick={() => router.push(refresh)}
        >
          {translation.button}
        </Button.ButtonRoot>
      )}
    </div>
  )
}

export default SelectLanguage
