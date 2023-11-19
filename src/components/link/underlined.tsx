import { twMerge } from 'tailwind-merge'
import { LinkProps } from '.'
import { buttonVariants } from '../ui/button'
import LinkRoot from './root'

const LinkUnderlined = ({ ...props }: LinkProps) => (
  <LinkRoot
    target='_blank'
    className={twMerge(
      buttonVariants({
        variant: 'link',
        className:
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus:underline',
      }),
      'p-0'
    )}
    {...props}
  />
)

export default LinkUnderlined
