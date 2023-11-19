import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localeDetection: false,
})

export const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname === '/') req.nextUrl.pathname = '/home'

  return intlMiddleware(req)
}

export const config = { matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] }
