import { Button } from './components'

function App() {
  return (
    <main className="semi-always-light">
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
    </main>
  )
}

export default App
