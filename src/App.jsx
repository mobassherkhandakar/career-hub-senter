import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footers from './components/Footers'


function App() {

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footers/>
    </div>
  )
}

export default App
