import ProductList from './products'

const Func = () => {
  const dummy = ['Product 1', 'Product 2', 'Product 3'];
  return (
    <div>
      <h1>hello world</h1>
      <ProductList arr={dummy}/>
    </div>
  )
}

export default Func
