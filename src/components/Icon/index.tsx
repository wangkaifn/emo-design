import classNames from 'classnames'
import IconTypeMap, { IconType } from './icons'
import { IconProps } from './type'

const customCache = new Set<string>()
// 判断是否为有效的自定义图标地址
function isValidCustomLinkUrl(url: string) {
  console.log('isValidCustomLinkUrl', url)

  return Boolean(
    typeof url === 'string' && url.length > 0 && !customCache.has(url),
  )
}

function loadUrl(url: string) {
  if (isValidCustomLinkUrl(url)) {
    const link = document.createElement('link')
    link.href = url
    link.rel = 'stylesheet'
    console.log('loadUrl', url)

    customCache.add(url)
    document.head.appendChild(link)
  }
}

export function Icon<T extends IconType = 'fa'>({
  type = 'fa' as T,
  icon,
  custom,
  url,
  class: cls,
  prefix,
  ...rest
}: IconProps<T>) {
  if (custom && url && typeof icon === 'string') {
    loadUrl(url)

    const iconCls = classNames(
      'iconfont',
      prefix ? `${prefix}-${icon}` : `${icon}`,
    )

    const classes = cls ? cls : iconCls

    const iconProps = {
      style: {
        fontSize: rest.size,
        color: rest.color,
        ...rest.style,
      },
      ...rest,
    }
    return <i className={classes} {...iconProps}></i>
  } else if (icon && type) {
    const IconComponent = IconTypeMap[type][
      icon as keyof (typeof IconTypeMap)[T]
    ] as React.ComponentType<any>
    return IconComponent ? (
      <IconComponent type={type} icon={icon} {...rest} />
    ) : null
  } else {
    return null
  }
}

Icon.propTypes = {
  icon: function (props: IconProps, propName: string, componentName: string) {
    let keys = []
    if (props.type && props.icon) {
      keys = Object.keys(IconTypeMap[props.type])

      if (keys.indexOf(props.icon) === -1) {
        return new Error(
          `无效的属性 '${propName}' 提供给组件 '${componentName}'。` +
            `图标 '${props.icon}' 不存在于 '${props.type}' 图标集中。`,
        )
      }
    }
  },

  url: function (props: IconProps, propName: string, componentName: string) {
    if (props.custom && props.url) {
      // 正则表达式检查 URL 是否合法 //at.alicdn.com/t/c/font_4440590_lfenwi7ww6l.css
      // const
      // //at.alicdn.com/t/c/font_4440590_lfenwi7ww6l.css
      const regUrl = /^(https?:)?\/\/[^\s]+/
      if (!regUrl.test(props.url)) {
        return new Error(
          `无效的属性 '${propName}' 提供给组件 '${componentName}'。` +
            `URL地址 '${props.url}' 不合法。`,
        )
      }
    }
  },
}
