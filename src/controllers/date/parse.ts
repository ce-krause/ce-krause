'use server'

import parseMonth from './parse-month'

const parseDate = (string: string) => {
  const date = new Date(string)

  return `${parseMonth(date.getMonth())}, ${date.getFullYear()}`
}

export default parseDate
