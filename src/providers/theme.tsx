'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider = (props: ThemeProviderProps) => (
  <NextThemeProvider
    attribute='class'
    storageKey='theme'
    defaultTheme='system'
    enableSystem
    disableTransitionOnChange
    {...props}
  />
)

export default ThemeProvider
