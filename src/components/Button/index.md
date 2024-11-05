# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

### Button

| 参数      | 说明                             | 类型                                     | 默认值    |
| --------- | -------------------------------- | ---------------------------------------- | --------- |
| type      | 设置按钮类型                     | `primary` \| `danger` \| `default` \| `link` | `default` |
| size      | 设置按钮大小                     | `small` \| `default` \| `large`          | `default` |
| disabled  | 按钮失效状态                     | `boolean`                                | `false`   |
| loading   | 设置按钮载入状态                 | `boolean`                                | `false`   |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string`                                 | -         |
| className | 设置按钮的类名                   | `string`                                 | -         |
| style     | 设置按钮的样式                   | `React.CSSProperties`                    | -         |
| children  | 按钮内容                         | `React.ReactNode`                        | -         |

## 示例

```tsx
import { Button } from './components'

function App() {
  return (
    <main className="semi-always-light">
      <div>
        <Button>普通按钮</Button>
        <Button size="small">小按钮</Button>
        <Button size="large">大按钮</Button>
        <Button type="primary" loading>
          主按钮
        </Button>
        <Button type="danger">危险按钮</Button>
        <Button type="default">默认按钮</Button>
        <Button disabled type="link" href="http://">
          禁用链接
        </Button>
        <Button type="link" href="http://">
          链接按钮
        </Button>
        <Button disabled>禁用按钮</Button>
        <Button type="default" loading>
          加载中按钮
        </Button>
      </div>
    </main>
  )
}

export default App
```
