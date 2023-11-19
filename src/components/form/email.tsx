import { NodemailerController } from '@/controllers'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, Check, RotateCw } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'
import { FormEmailTranslationProps, ToastsTranslationType } from '.'
import Button from '../button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { toast } from '../ui/use-toast'

const StringSchema = z.string()
const NotNullableString = StringSchema.trim().min(1)

type SetStateActionType<T> = Dispatch<SetStateAction<T>>
type FormStatusType = undefined | true | false

type MailType = {
  from: string
  subject: string
  text: string
}

type FormStatesActionsType = {
  setSubmitting: SetStateActionType<boolean>
  setStatus: SetStateActionType<FormStatusType>
}

type FormStatesType = {
  isSubmitting: boolean
  status: FormStatusType
}

type FormEmailProps = { translation: FormEmailTranslationProps }

async function handleSubmit<T>(
  values: T,
  setters: FormStatesActionsType,
  toastsTranslation: ToastsTranslationType
) {
  setters.setSubmitting(true)

  setters.setStatus(undefined)

  NodemailerController.sendMail(values as MailType)
    .then((res) => {
      if (res) {
        setters.setStatus(true)

        toast({
          duration: 2500,
          title: toastsTranslation.success.title,
          description: toastsTranslation.success.description,
        })
      } else {
        setters.setStatus(false)

        toast({
          duration: 2500,
          title: toastsTranslation.fail.title,
          description: toastsTranslation.fail.description,
        })
      }
    })
    .finally(() => {
      setters.setSubmitting(false)

      setTimeout(() => setters.setStatus(undefined), 2500)
    })
}

const handleColor = (status: FormStatusType) => {
  if (status) return 'bg-green-300 hover:bg-green-400'
  if (status === false) return 'bg-amber-300 hover:bg-amber-400'
}

const handleChildren = (
  placeholder: string,
  { isSubmitting, status }: FormStatesType
) => (
  <>
    <span
      className={twMerge(
        'absolute opacity-0 transition-opacity',
        !isSubmitting && status === undefined && 'opacity-100'
      )}
    >
      {placeholder}
    </span>
    <RotateCw
      className={twMerge(
        'absolute w-5 h-5 animate-spin opacity-0 transition-opacity',
        isSubmitting && status === undefined && 'opacity-100'
      )}
    />
    <Check
      className={twMerge(
        'absolute w-5 h-5 opacity-0 transition-opacity',
        !isSubmitting && status && 'opacity-100'
      )}
    />
    <AlertCircle
      className={twMerge(
        'absolute w-5 h-5 opacity-0 transition-opacity',
        !isSubmitting && status === false && 'opacity-100'
      )}
    />
  </>
)

const FormEmail = ({ translation }: FormEmailProps) => {
  const FormSchema = z.object({
    from: StringSchema.email({ message: translation.labels.from.error }),
    subject: NotNullableString,
    text: NotNullableString,
  })

  type FormType = z.infer<typeof FormSchema>

  const form = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      from: '',
      subject: '',
      text: '',
    },
  })

  const [isSubmitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatusType>(undefined)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          handleSubmit<FormType>(
            values,
            { setSubmitting, setStatus },
            translation.toasts
          )
        )}
        className='space-y-3'
      >
        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-2'>
            <FormField
              name='from'
              control={form.control}
              render={({ field }) => (
                <FormItem className='space-y-1.5'>
                  <FormLabel>{translation.labels.from.children}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className='focus-visible:ring-offset-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='subject'
              control={form.control}
              render={({ field }) => (
                <FormItem className='space-y-1.5'>
                  <FormLabel>{translation.labels.subject}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className='focus-visible:ring-offset-0'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            name='text'
            control={form.control}
            render={({ field }) => (
              <FormItem className='space-y-1.5'>
                <FormLabel>{translation.labels.text}</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    className='max-h-96 focus-visible:ring-offset-0'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button.ButtonRoot
          type='submit'
          disabled={isSubmitting}
          className={twMerge('w-full transition-colors', handleColor(status))}
        >
          {handleChildren(translation.button, {
            isSubmitting,
            status,
          })}
        </Button.ButtonRoot>
      </form>
    </Form>
  )
}

export default FormEmail
