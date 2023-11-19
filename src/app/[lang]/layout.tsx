import { Exception } from '@/classes'
import { Dialog, Footer } from '@/components'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/providers'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import './globals.css'

type RootLayoutProps = {
  children: ReactNode
  params: { lang: string }
}

export const metadata: Metadata = {
  title: {
    default: 'cekrause',
    template: '%s | cekrause',
  },
  description: "A full stack developer's portfolio.",
}

export const geist = {
  sans: GeistSans.className,
  mono: GeistMono.className,
}

const lang = ['en', 'pt']

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const hasLang = lang.some((cur) => cur === params.lang)

  if (!hasLang)
    throw new Exception(
      404,
      'Unknown Language',
      'An unknown language was given.'
    )

  const { dialogSettings, dialogEmail, selectLanguage, formEmail } = {
    dialogSettings: useTranslations('dialog-settings'),
    dialogEmail: useTranslations('dialog-email'),
    selectLanguage: useTranslations('select-language'),
    formEmail: useTranslations('form-email'),
  }

  const translation = {
    dialogs: {
      settings: {
        title: dialogSettings('title'),
        description: dialogSettings('description'),
        labels: {
          theme: dialogSettings('label-theme'),
          language: dialogSettings('label-language'),
        },
      },
      email: {
        trigger: dialogEmail('trigger'),
        description: dialogEmail('description'),
        formEmail: {
          labels: {
            from: {
              children: formEmail('label-from-children'),
              error: formEmail('label-from-error'),
            },
            subject: formEmail('label-subject'),
            text: formEmail('label-text'),
          },
          button: formEmail('button'),
          toasts: {
            success: {
              title: formEmail('toast-success-title'),
              description: formEmail('toast-success-description'),
            },
            fail: {
              title: formEmail('toast-fail-title'),
              description: formEmail('toast-fail-description'),
            },
          },
        },
      },
    },
    selectLanguage: {
      placeholders: {
        english: selectLanguage('placeholder-english'),
        portuguese: selectLanguage('placeholder-portuguese'),
      },
      button: selectLanguage('button'),
    },
  }

  return (
    <html lang={params.lang}>
      <body
        className={twMerge(
          geist.sans,
          'flex h-screen selection:text-background selection:bg-foreground animate-fade-in'
        )}
      >
        <ThemeProvider>
          <span className='absolute top-6 left-6'>
            <Dialog.DialogSettings translation={translation} />
          </span>
          <div className='flex flex-col xs-smartphone:w-[280px] sm-smartphone:w-[320px] smartphone:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto gap-16'>
            <div className='flex flex-col flex-1'>{children}</div>
            <Footer.FooterDefault />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
