import './App.css'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Work in progress!</h1>
    </>
  )
}

export default App
