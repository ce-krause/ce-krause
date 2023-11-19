'use client'

import { Badge } from '../ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type PopoverLanguagesProps = { children: string[] }

const PopoverLanguages = ({ children }: PopoverLanguagesProps) => {
  const languages = children.slice(1)

  return (
    <Popover>
      <PopoverTrigger>
        <Badge className='select-none cursor-pointer'>{children[0]}</Badge>
      </PopoverTrigger>
      <PopoverContent className='w-auto space-x-1.5 space-y-1.5'>
        {languages.map((language, index) => (
          <span key={index}>
            <Badge className='select-none'>{language}</Badge>
          </span>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default PopoverLanguages
