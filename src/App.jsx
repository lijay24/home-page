import './App.css'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Inspiration from './components/Inspiration/Inspiration'
import ProductRange from './components/ProductRange/ProductRange'
import Products from './components/products/Products'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductRange />
      <Products />
      <Inspiration />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
