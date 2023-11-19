import { ItemProps } from '.'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type SelectRootProps = {
  children: ItemProps[]
  defaultValue: string
  placeholder: string
  onValueChange?: (value: string) => void
}

function handleChildren(children: ItemProps[]) {
  return children.map(({ value, placeholder }, index) => (
    <SelectItem key={index} value={value as string}>
      {placeholder}
    </SelectItem>
  ))
}

export default function SelectRoot({
  children,
  defaultValue,
  placeholder,
  onValueChange,
}: SelectRootProps) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value) => onValueChange && onValueChange(value)}
    >
      <SelectTrigger>
        <SelectValue defaultValue={defaultValue} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{handleChildren(children)}</SelectGroup>
      </SelectContent>
    </Select>
  )
}
