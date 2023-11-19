'use client'

import { Settings } from 'lucide-react'
import Button from '../button'
import { FormEmailTranslationProps } from '../form'
import Select, { SelectLanguageTranslationProps } from '../select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import DialogEmail from './email'
import DialogHeader from './header'

type DialogSettingsProps = {
  translation: {
    dialogs: {
      settings: {
        title: string
        description: string
        labels: {
          theme: string
          language: string
        }
      }
      email: {
        trigger: string
        description: string
        formEmail: FormEmailTranslationProps
      }
    }
    selectLanguage: SelectLanguageTranslationProps
  }
}

const DialogSettings = ({ translation }: DialogSettingsProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button.ButtonRoot className='focus-visible:ring-0 focus-visible:ring-offset-0'>
        <Settings className='w-5 h-5' />
      </Button.ButtonRoot>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{translation.dialogs.settings.title}</DialogTitle>
        <DialogDescription>
          {translation.dialogs.settings.description}
        </DialogDescription>
      </DialogHeader>
      <div className='grid grid-cols-2 gap-2'>
        <div className='space-y-1.5'>
          <Label>{translation.dialogs.settings.labels.theme}</Label>
          <Select.SelectTheme />
        </div>
        <div className='space-y-1.5'>
          <Label>{translation.dialogs.settings.labels.language}</Label>
          <Select.SelectLanguage translation={translation.selectLanguage} />
        </div>
      </div>
      <DialogFooter className='flex-col sm:flex-col items-end gap-3'>
        <Separator />
        <DialogEmail translation={translation.dialogs.email} />
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export default DialogSettings
