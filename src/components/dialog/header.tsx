import { ReactNode } from 'react'
import { DialogHeader as ShadDialogHeader } from '../ui/dialog'
import { Separator } from '../ui/separator'

type DialogHeaderProps = { children: ReactNode }

const DialogHeader = ({ children }: DialogHeaderProps) => (
  <ShadDialogHeader className='gap-3'>
    <div className='space-y-1.5'>{children}</div>
    <Separator />
  </ShadDialogHeader>
)

export default DialogHeader
