import reactLogo from './assets/react.svg'
import './App.css'
import dockerLogo from './assets/docker.svg'
function App() {


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo react" alt="Docker logo" />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <div className="card">
        <h2>Container</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React and Docker logos to learn more
      </p>
    </div>
  )
}

export default App
