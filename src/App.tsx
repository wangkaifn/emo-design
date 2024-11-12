import { Button, Input, Menu, AutoComplete } from './components'
import { Icon } from './components/Icon'

function App() {
  return (
    <main className="semi-always-light">
      {/* */}
      <h1>Button</h1>
      <div>
        <Button>普通btn</Button>
        <Button size="small">small</Button>
        <Button size="large">large</Button>
        <Button type="primary" loading>
          primary Button
        </Button>
        <Button type="danger">danger Button</Button>
        <Button type="default">default Btn </Button>
        <Button disabled type="link" href="http://">
          disabled Link
        </Button>
        <Button type="link" href="http://">
          带有链接的 Btn
        </Button>
        <Button disabled>disabled Btn</Button>

        <Button type="default" loading>
          loading Btn
        </Button>
      </div>
      <h1>ICON</h1>
      <Icon type="ai" icon="AiFillApple" size={90} color="blue" />
      <Icon icon="FaBeer" size={40} color="goldenrod" title="Beer Icon" />
      <Icon type="md" icon="MdAlarm" size={40} color="red" title="Alarm Icon" />
      <Icon
        custom
        url="//at.alicdn.com/t/font_1791095_6urvhbxaj73.css"
        prefix="iconfont"
        icon="qian"
        size={40}
        color="green"
      />

      <h1>menu</h1>
      <Menu
        onSelect={val => {
          console.log('onSelect', val)
        }}
      >
        <Menu.Item>菜单1</Menu.Item>
        <Menu.Item disabled>菜单2</Menu.Item>
        <Menu.Item>菜单3</Menu.Item>
      </Menu>
      <h1>Sub Menus</h1>

      <Menu
        onSelect={val => {
          console.log('onSelect', val)
        }}
        mode="vertical"
        defaultOpenkeys={['1']}
        defaultIndex="1"
      >
        <Menu.Item>菜单1</Menu.Item>
        <Menu.SubMenu title="菜单2">
          <Menu.Item>子菜单1</Menu.Item>
          <Menu.Item>子菜单2</Menu.Item>
          <Menu.Item>子菜单3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item disabled>菜单3</Menu.Item>
        <Menu.Item>菜单4</Menu.Item>
      </Menu>

      <h1>Input 示例</h1>
      <Input type="text" placeholder="请输入内容" />
      <h1>input size</h1>
      <Input size="small" placeholder="samll" />
      <Input size="large" placeholder="large" />
      <Input size="default" placeholder="default" />
      <h1>input addon</h1>
      <Input addonBefore="http://" addonAfter=".com" placeholder="请输入内容" />
      <br />
      <Input addonBefore="http://" placeholder="请输入内容" />
      <Input addonAfter=".com" placeholder="请输入内容" />

      <h1>input suffix prefix </h1>
      <Input
        suffix={<Icon icon="FaSearch" size={20} color="blue" />}
        placeholder="suffix"
      />
      <Input
        allowClear
        prefix={<Icon icon="FaSearch" size={20} color="blue" />}
        placeholder="prefix"
      />
      <Input disabled placeholder="disabled" />

      <Input allowClear placeholder="clearable" />

      <h1>AutoComplete</h1>
      <AutoComplete
        options={[
          'ceshi',
          'ceshi1',
          'ceshi2',
          'ceshi3',
          'ceshi4',
          'ceshi5',
          'abc',
          'abc1',
        ]}
        placeholder="测试 "
      ></AutoComplete>
      <AutoComplete
        options={[
          {
            label: 'ceshi',
            value: 'ceshi',
            id: 1,
          },
          {
            label: 'ceshi1',
            value: 'ceshi1',
            id: 2,
          },
          {
            label: 'ceshi2',
            value: 'ceshi2',
            id: 3,
          },
          {
            label: 'ceshi3',
            value: 'ceshi3',
            id: 4,
          },
          {
            label: 'apple',
            value: 'apple',
            id: 5,
          },
          {
            label: 'banana',
            value: 'banana',
            id: 6,
          },
        ]}
        placeholder="测试 "
        onSelect={val => {
          console.log('onSelect', val)
        }}
      ></AutoComplete>
      <AutoComplete placeholder="disabled" disabled></AutoComplete>
      <AutoComplete
        placeholder="过滤"
        filterOptions={(inputValue, option) => {
          return !option.includes(inputValue)
        }}
        options={[
          {
            label: 'apple',
            value: 'apple',
            id: 5,
          },
          {
            label: 'banana',
            value: 'banana',
            id: 6,
          },
        ]}
      ></AutoComplete>

      <AutoComplete
        placeholder="过滤 + 自定义render"
        filterOptions={(inputValue, option) => {
          return !option.includes(inputValue)
        }}
        autoFocus
        options={[
          'ai',
          'ceshi1',
          'ceshi2',
          'ceshi3',
          'ceshi4',
          'ceshi5',
          'abc',
          'abc1',
        ]}
        render={option => {
          return <h1>{typeof option === 'string' ? option : option.label}</h1>
        }}
      ></AutoComplete>
    </main>
  )
}

export default App
