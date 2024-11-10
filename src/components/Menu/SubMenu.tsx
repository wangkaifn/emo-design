import classNames from 'classnames'
import { IMenuItemProps, ISubMenuProps } from './types'
import React, { useContext, useState } from 'react'
import { MenuContext } from '.'

const SubMenu: React.FunctionComponent<ISubMenuProps> = props => {
  const { index: currentIndex, defaultOpenkeys, mode } = useContext(MenuContext)

  const { index, title, className: cls, children } = props

  const isOpen = mode === 'vertical' && defaultOpenkeys?.includes(index + '')
  const [open, setOpen] = useState(isOpen)

  const classes = classNames('menu-item submenu-item', cls, {
    open: open,
    active: index === currentIndex || currentIndex?.split('-')[0] === index,
    vertical: mode === 'vertical',
  })

  const clickHandle =
    mode === 'vertical'
      ? {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault()
            setOpen(!open)
          },
        }
      : undefined
  const hoverHandle =
    mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            e.preventDefault()
            setOpen(true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            e.preventDefault()
            setOpen(false)
          },
        }
      : undefined

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      if (childElement.type && childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: props?.index + '-' + `${index}`,
        })
      } else {
        console.warn(
          'Warning: SubMenu has a child which is not a MenuItem component',
        )
      }
    })
  }
  return (
    <li className={classes} {...hoverHandle}>
      <div className="submenu-title" {...clickHandle}>
        {title}
      </div>
      <ul className="submenu">{renderChildren()}</ul>
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
