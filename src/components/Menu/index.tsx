import classNames from 'classnames'
import MenuItem from './MenuItem'
import {
  IMenuItemProps,
  IMenuProps,
  ISubMenuProps,
  SelectFunction,
} from './types'

import React, { createContext, useState } from 'react'
import SubMenu from './SubMenu'

type MenuType = React.FunctionComponent<IMenuProps> & {
  Item: React.FunctionComponent<IMenuItemProps>
  SubMenu: React.FunctionComponent<ISubMenuProps>
}

interface IMenuContext {
  index: string
  mode?: string
  onSelect?: SelectFunction
  defaultOpenkeys?: string[]
}
export const MenuContext = createContext<IMenuContext>({
  index: '0',
})
const Menu: MenuType = props => {
  const {
    mode = 'horizontal',
    className: cls,
    defaultOpenkeys = ['0'],
    defaultIndex = '0',
    onSelect,
    children,
    style,
  } = props

  const classes = classNames('menu', cls, {
    vertical: mode === 'vertical',
  })
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)

  const handleSelect = (index: string) => {
    setCurrentIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const value: IMenuContext = {
    index: currentIndex || '0',
    onSelect: handleSelect,
    mode,
    defaultOpenkeys,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      if (
        (childElement.type && childElement.type.displayName === 'MenuItem') ||
        childElement.type.displayName === 'SubMenu'
      ) {
        return React.cloneElement(childElement, {
          index: `${index}`,
        })
      } else {
        console.warn(
          'Warning: Menu has a child which is not a Menu.Item component',
        )
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={value}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.Item = MenuItem
Menu.SubMenu = SubMenu
export default Menu
