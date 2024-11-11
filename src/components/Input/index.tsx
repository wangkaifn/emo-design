import classNames from 'classnames'
import { IInputProps } from './types'
import './style.scss'
import { useRef, useState } from 'react'
import { Icon } from '../Icon'
import { useHover } from 'usehooks-ts'
const Input: React.FunctionComponent<IInputProps> = props => {
  const {
    disabled,
    allowClear,
    prefix,
    suffix,
    addonAfter,
    addonBefore,
    onClear,
    onChange,
    size = 'default',
    className: cls,

    ...rest
  } = props
  const [value, setValue] = useState(props.defaultValue)
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  console.log(isHover)

  const classes = classNames('input', cls, {
    disabled,
    [`input-${size}`]: size,
    'allow-clear': allowClear,
    'input-before': addonBefore,
    'input-after': addonAfter,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }
  const handleClear = () => {
    setValue('')
    onClear && onClear()
  }
  return (
    <div className={classes}>
      {addonBefore && <div className="addon before">{addonBefore}</div>}
      <div className="input-wrapper">
        {prefix && <div className="prefix">{prefix}</div>}
        <input
          disabled={disabled}
          value={value}
          {...rest}
          onChange={handleChange}
        />
        {allowClear && (
          <span ref={hoverRef} className="clear-icon" onClick={handleClear}>
            {value?.trim().length > 0 && (
              <Icon
                type="bs"
                icon="BsXCircleFill"
                color={isHover ? '#d9d9d9' : '#bfbfbf'}
              />
            )}
          </span>
        )}
        {suffix && <div className="suffix">{suffix}</div>}
      </div>
      {addonAfter && <div className="addon after">{addonAfter}</div>}
    </div>
  )
}

export default Input
