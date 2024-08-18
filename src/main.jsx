import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
import { Practical } from './practical.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <GeneralInfo />
    <Education />
    <Practical />
  </StrictMode>,
)
