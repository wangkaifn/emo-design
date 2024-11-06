import IconTypeMap, { IconName, IconType } from './icons'
/**
 * Icon 组件的属性。
 */
export interface IconProps<T extends IconType = 'fa'> {
  /**
   * 要显示的图标名称。
   */
  icon?: IconName<T> | string

  /**
   * 图标的大小。
   */
  size?: number

  /**
   * 图标的颜色。
   */
  color?: string

  /**
   * 图标的类型。
   */
  type?: T

  /**
   * 图标的附加属性。
   */
  attr?: { [key: string]: string }

  /**
   * 图标的标题。
   */
  title?: string

  /**
   * 图标的自定义样式。
   */
  style?: React.CSSProperties

  /**
   * 图标是否为自定义。
   */
  custom?: boolean

  /**
   * 图标的自定义类名。
   */
  class?: string

  /**
   * 图标的 URL iconfont 地址。
   */
  url?: string

  /**
   * 图标的前缀。
   */
  prefix?: string

  /**
   * 图标的点击事件处理函数。
   */
  onClick?: (e: React.MouseEvent) => void
}
