import { createTransport } from 'nodemailer'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
  auth: process.env.GITHUB_AUTHENTICATION_TOKEN,
})

export const nodemailer = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_AUTHENTICATION_USER,
    pass: process.env.NODEMAILER_AUTHENTICATION_PASSWORD,
  },
})
