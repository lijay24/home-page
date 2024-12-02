import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Header from './components/Header/Header'



function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Header/> }/>
    </Routes>
    
    <Routes>
      <Route path='/Login' element={<Login/> }/>

        </Routes>
   
    
      
      
      
    
    </>
  )
}

export default App
