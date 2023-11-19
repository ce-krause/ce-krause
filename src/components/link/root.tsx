'use client'

import Link from 'next/link'
import { MouseEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import { LinkProps } from '.'

type LinkEvent = MouseEvent<HTMLAnchorElement>

const handleClick = (ev: LinkEvent, onClick?: (ev: LinkEvent) => void) => {
  const target = ev.target as HTMLAnchorElement

  onClick && onClick(ev)

  target.blur()
}

const LinkRoot = ({ onClick, className, ...props }: LinkProps) => (
  <Link
    onClick={(ev) => handleClick(ev, onClick)}
    className={twMerge('select-none', className)}
    {...props}
  />
)

export default LinkRoot
