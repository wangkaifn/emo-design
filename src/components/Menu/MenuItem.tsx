import classNames from 'classnames'
import { MenuContext } from '.'
import { IMenuItemProps } from './types'

import { useContext } from 'react'

const MenuItem: React.FunctionComponent<IMenuItemProps> = props => {
  const { onSelect, index: currentIndex } = useContext(MenuContext)
  const { children, index, className: cls, style, disabled } = props

  const handleClick = () => {
    if (onSelect && !disabled && index && typeof index === 'string') {
      onSelect(index)
    }
  }
  const classes = classNames('menu-item', cls, {
    disabled: disabled,
    active: index === currentIndex,
  })
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'

export default MenuItem
