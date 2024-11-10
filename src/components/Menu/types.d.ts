export type MenuMode = 'horizontal' | 'vertical'

export type SelectFunction = (selectedIndex: string) => void
export interface IMenuProps {
  mode?: MenuMode
  defaultIndex?: string
  className?: string
  style?: React.CSSProperties
  className: string
  defaultOpenkeys?: string[]
  onSelect?: SelectFunction
  children: React.ReactNode
}
export interface IMenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ISubMenuProps {
  index?: string
  title: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
