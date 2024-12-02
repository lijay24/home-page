import './App.css'
import Hero from './components/Hero/Hero'
import ProductRange from './components/ProductRange/ProductRange'
import Products from './components/products/Products'
import Inspiration from './components/Inspiration/Inspiration'
import Gallery from "./components/Gallery/Gallery";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Route, Routes} from 'react-router-dom'
import Shop from './components/Pages/Shop'
import SingleProduct from './components/Pages/SingleProduct'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Header/> }/>
    </Routes>
    <Routes>
    <Route path='/' element={<Hero /> }/>
    </Routes>
    <Routes>
    <Route path='/' element={<ProductRange /> }/>
    </Routes>
    <Routes>
    <Route path='/' element={<Products />  }/>
    </Routes>
    <Routes>
    <Route path='/' element={<Inspiration/> }/>
    </Routes>
    <Routes>
    <Route path='/' element={<Gallery />  }/>
    </Routes>
    <Routes>
    <Route path='/Shop' element={<Shop/> }/>
    </Routes>
    <Routes>
    <Route path='/Shop' element={<Shop/> }/>
    </Routes>
    <Routes>
    <Route path='/SingleProduct/:id' element={<SingleProduct/> }/>
    </Routes>

   <Footer /> 
   <Toaster 
   position='bottom-right'
   reverseOrder={false}
   gutter={8}
   containerClassName=''
   toastOptions={{
    style:{
      backgroundColor: 'black',
      color: 'white',
    },
    
   }}
   />
      
      
     
    </>
  )
}

export default App
