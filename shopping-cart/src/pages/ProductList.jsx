
import { useContext } from 'react'
import { ShoppingContext } from '../Context'
import ProductTile from '../components/ProductTile';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductList = () => {
    const {productsList,loading} = useContext(ShoppingContext);
  //console.log(productsList);
  
  if(loading) return <LoadingSpinner/>

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900'>
                    Shopping Cart
                </h1>
                <p className='mt-2 text-xl text-gray-500'>
                    Here are the items you have added to your cart.
                </p>
                <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
                    {
                        productsList && productsList.length > 0 ?
                        productsList.map(product => <ProductTile key={product.id} productTile={product}/>) : <h3>Oops nothing to show here</h3>
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductList
