export type LabelOptions =
  | string
  | {
      label: string
      value: string
      [key: string]: any
    }
export type filterOptions = (
  inputValue: string,
  option: LabelOptions,
) => boolean
export interface IAutoCompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSelect'> {
  className?: string
  autoFocus?: boolean
  options?: LabelOptions[]
  disabled?: boolean
  filterOptions?: filterOptions
  render?: (options: LabelOptions) => React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSelect?: (option: LabelOptions) => void
}
