'use client'

import { MouseEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '../ui/button'

type ButtonClick = MouseEvent<HTMLButtonElement>

const handleClick = (ev: ButtonClick, onClick?: (ev: ButtonClick) => void) => {
  const target = ev.target as HTMLButtonElement

  onClick && onClick(ev)

  target.blur()
}

const ButtonRoot = ({ onClick, className, ...props }: ButtonProps) => (
  <Button
    onClick={(ev) => handleClick(ev, onClick)}
    className={twMerge('select-none', className)}
    {...props}
  />
)

export default ButtonRoot
