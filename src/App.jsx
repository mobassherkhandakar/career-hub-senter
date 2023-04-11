import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footers from './components/Footers'
import { createContext, useEffect, useState } from 'react'

export const JobsContext = createContext([])

function App() {
  const [jobData, setJobData] = useState([])
  useEffect(()=>{
    fetch('/futursJob.json')
    .then(res=> res.json())
    .then(data=> setJobData(data))
  },[])
  return (
    <JobsContext.Provider value={[jobData, setJobData]}>
      <Header/>
      <div className='min-h-[calc(100vh-65px)]'>
      <Outlet/>
      </div>
      <Footers/>
    </JobsContext.Provider>
  )
}

export default App
