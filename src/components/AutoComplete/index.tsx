import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { IAutoCompleteProps, LabelOptions } from './type'

import { useOnClickOutside } from 'usehooks-ts'
import './style.scss'
const AutoComplete: React.FunctionComponent<IAutoCompleteProps> = props => {
  const {
    className: cls,
    disabled,
    onChange,
    onSelect,
    options,
    autoFocus,
    render,
    filterOptions,
    ...rest
  } = props

  const ref = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [value, setValue] = useState(props?.defaultValue || '')

  const [results, setResults] = useState<LabelOptions[]>([])
  // 索引值
  const [index, setIndex] = useState<number>(-1)
  const classes = classNames('auto-complete', cls, {
    disabled: disabled,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    onChange?.(e)

    if (!value) {
      setResults([])
      setIndex(-1)
      return
    }

    if (typeof filterOptions === 'function') {
      if (options) {
        const result = options.filter(item =>
          filterOptions(value, typeof item === 'string' ? item : item.label),
        )
        setResults(result)
      }
    } else {
      if (
        props.options &&
        props.options[0] &&
        typeof props.options[0] === 'string'
      ) {
        const arr = props.options as string[]
        const result = arr.filter(item => item.includes(value))
        setResults(result)
      } else {
        const arr = props.options as Array<{
          label: string
          value: string
          [key: string]: any
        }>
        const result = arr.filter(item => item.label.includes(value))
        setResults(result)
      }
    }
  }

  const handleSelect = (item: LabelOptions) => {
    setResults([])
    if (typeof item === 'string') {
      setValue(item)
    } else {
      setValue(item.label)
    }
    onSelect?.(item)
  }

  const renderNodes = (item: LabelOptions) => {
    if (typeof render === 'function') {
      return render(item)
    } else {
      return typeof item === 'string' ? item : item.label
    }
  }

  const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key)

    if (e.key === 'ArrowDown') {
      if (index < results.length - 1) {
        setIndex(index + 1)
      }
    }
    if (e.key === 'ArrowUp') {
      if (index > 0) {
        setIndex(index - 1)
      }
    }
    if (e.key === 'Enter') {
      if (index >= 0) {
        handleSelect(results[index])
        setIndex(-1)
      }
    }
  }
  useOnClickOutside(ref, () => {
    setResults([])
    setIndex(-1)
  })

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [props.autoFocus])
  return (
    <div className={classes} ref={ref}>
      <input
        ref={inputRef}
        value={value}
        disabled={disabled}
        type="text"
        {...rest}
        onChange={handleChange}
        onKeyDown={onKeyDownHandle}
      />
      {results.length > 0 && (
        <ul className="auto-complete-lists">
          {results.map((item, i) => (
            <li
              key={i}
              className={classNames(
                'auto-complete-lists-item',
                index === i && 'active',
              )}
              onClick={() => {
                handleSelect(item)
              }}
            >
              {renderNodes(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AutoComplete
