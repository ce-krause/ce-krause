import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localeDetection: false,
})

export const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname === '/')
    return NextResponse.redirect(new URL('/home', req.nextUrl.origin))

  return intlMiddleware(req)
}

export const config = { matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] }
