export type InputSize = 'small' | 'default' | 'large'
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string
  disabled?: boolean
  /**
   * @description 输入框的尺寸
   */
  size?: InputSize

  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  allowClear?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}
