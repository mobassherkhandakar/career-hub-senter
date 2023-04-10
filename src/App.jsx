import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footers from './components/Footers'


function App() {

  return (
    <div>
      <Header/>
      <div className='min-h-[calc(100vh-65px)]'>
      <Outlet/>
      </div>
      <Footers/>
    </div>
  )
}

export default App
