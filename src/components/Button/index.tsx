import classNames from 'classnames'
import { FunctionComponent } from 'react'

type ButtonType = 'primary' | 'danger' | 'default' | 'link'

type ButtonSize = 'small' | 'default' | 'large'
interface IButtonProps {
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
  type?: ButtonType
  size?: ButtonSize
  href?: string
  children?: React.ReactNode
}
type NativeButtonProps = IButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
type AnchorButtonProps = IButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: FunctionComponent<ButtonProps> = props => {
  const { children, type, size, loading, disabled, className, ...rest } = props

  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === 'link' && disabled,
    loading: loading,
  })
  if (rest.href && type === 'link') {
    return (
      <a {...rest} className={classes} target="_blank">
        {children}
      </a>
    )
  }
  return (
    <button
      {...rest}
      className={classes}
      onClick={() => {
        console.log('Button clicked')
      }}
      disabled={disabled}
    >
      {loading && (
        <span className="pr-1">
          <i className="fas fa-spinner spin" />
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
