import FormEmail from './email'

type ToastTranslationType = {
  title: string
  description: string
}

export type ToastsTranslationType = {
  success: ToastTranslationType
  fail: ToastTranslationType
}

export type FormEmailTranslationProps = {
  labels: {
    from: {
      children: string
      error: string
    }
    subject: string
    text: string
  }
  button: string
  toasts: ToastsTranslationType
}

const Form = { FormEmail }

export default Form
