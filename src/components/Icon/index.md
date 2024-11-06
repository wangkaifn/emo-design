# Icon 组件

`Icon` 组件用于在应用程序中显示图标。它支持多种图标类型和自定义图标。

## 属性

- `icon` (string): 要显示的图标名称。
- `size` (number): 图标的大小。
- `color` (string): 图标的颜色。
- `type` (string): 图标的类型，默认为 `'fa'`。
- `attr` (object): 图标的附加属性。
- `title` (string): 图标的标题。
- `style` (object): 图标的自定义样式。
- `custom` (boolean): 图标是否为自定义。
- `class` (string): 图标的自定义类名。
- `url` (string): 图标的 URL iconfont 地址。
- `prefix` (string): 图标的前缀。
- `onClick` (function): 图标的点击事件处理函数。

## 示例

```tsx
import { Icon } from './index'

<Icon icon="home" size={24} color="blue" />
<Icon icon="user" type="fa" custom={true} url="//at.alicdn.com/t/c/font_4440590_lfenwi7ww6l.css" />
```

该组件支持 FontAwesome 图标和自定义图标。通过传递 `custom` 和 `url` 属性，可以加载自定义图标。
