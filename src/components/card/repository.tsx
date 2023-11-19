import { Date } from '@/controllers'
import { RepositoryWithoutIDType } from '@/lib/types'
import { ExternalLink } from 'lucide-react'
import Link from '../link'
import Popover from '../popover'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'

type RepositoryType = { languages: string[] } & RepositoryWithoutIDType

type CardRepositoryProps = { children: RepositoryType }

const handleChildren = (children: RepositoryType) => {
  if (children.languages.length === 1)
    return <Badge className='select-none'>{children.languages[0]}</Badge>

  if (children.languages.length > 1)
    return (
      <Popover.PopoverLanguages>{children.languages}</Popover.PopoverLanguages>
    )
}

const CardRepository = ({ children }: CardRepositoryProps) => (
  <Card className='relative flex flex-col w-full h-auto smartphone:h-64'>
    <Link.LinkRoot
      href={children.html_url}
      target='_blank'
      className='absolute top-3 right-3 p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none opacity-70 hover:opacity-100 data-[state=open]:text-muted-foreground transition-opacity'
    >
      <ExternalLink className='w-4 h-4' />
    </Link.LinkRoot>
    <CardHeader className='gap-3'>
      <div className='space-y-1.5'>
        <CardTitle className='text-lg'>{children.name}</CardTitle>
        <CardDescription>{children.full_name}</CardDescription>
      </div>
      <Separator />
    </CardHeader>
    <CardContent className='flex-1'>
      <CardDescription className='italic'>
        {children.description ?? 'Any description was given.'}
      </CardDescription>
    </CardContent>
    <CardFooter className='flex flex-col smartphone:flex-row justify-between gap-1.5 smarphone:gap-0'>
      {handleChildren(children)}
      <span className='text-sm'>
        Updated at {Date.parseDate(children.updated_at)}
      </span>
    </CardFooter>
  </Card>
)

export default CardRepository
