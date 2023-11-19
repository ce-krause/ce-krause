'use server'

import { Exception } from '@/classes'
import { nodemailer } from '@/lib/libs'

type MailType = {
  from: string
  subject: string
  text: string
}

const sendMail = async ({ from, subject, text }: MailType) => {
  try {
    return await nodemailer.sendMail({
      to: process.env.NODEMAILER_AUTHENTICATION_USER,
      subject: 'cekrause | Support Request',
      text: `
    From: ${from}
    
    ---
    
    Subject: ${subject}
    
    Message:
    
    ${text}
        `,
    })
  } catch (ex) {
    return Exception.handleException(ex)
  }
}

export default sendMail
