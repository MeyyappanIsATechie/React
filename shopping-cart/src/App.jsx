
import {Routes, Route} from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import CartList from './pages/CartList'

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path='/cart' element={<CartList/>}/>
    </Routes>
  )
}

export default App
