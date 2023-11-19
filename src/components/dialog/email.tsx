import Button from '../button'
import Form, { FormEmailTranslationProps } from '../form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import DialogHeader from './header'

type DialogEmailProps = {
  translation: {
    trigger: string
    description: string
    formEmail: FormEmailTranslationProps
  }
}

const DialogEmail = ({ translation }: DialogEmailProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button.ButtonRoot
        variant='link'
        className='focus-visible:ring-0 focus-visible:ring-offset-0 focus:underline'
      >
        {translation.trigger}
      </Button.ButtonRoot>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{translation.trigger}</DialogTitle>
        <DialogDescription>{translation.description}</DialogDescription>
      </DialogHeader>
      <Form.FormEmail translation={translation.formEmail} />
    </DialogContent>
  </Dialog>
)

export default DialogEmail
