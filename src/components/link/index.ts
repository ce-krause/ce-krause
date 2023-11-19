import { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import LinkRoot from './root'
import LinkUnderlined from './underlined'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps

const Link = { LinkRoot, LinkUnderlined }

export default Link
