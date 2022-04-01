import logo from './logo.svg'
import { Users } from './components/users'
import './App.css'

export const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Users />
      </header>
    </div>
  )
}
