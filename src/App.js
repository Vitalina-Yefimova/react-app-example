import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { Text } from './components/Text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        <Counter />
        <Text content="This is a stateless component displaying props!" />
      </header>
    </div>
  )
}

export default App
