
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Login from './Login.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </>
)
