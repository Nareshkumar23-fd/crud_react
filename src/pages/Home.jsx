import React from 'react'

//here I Keeping sample products in array of objects
const sampleProducts = [
  { id: 1, name: "APPLE", price: 100 },
  { id: 2, name: "ORANGE", price: 150 },
  { id: 3, name: "BANANA",price: 200 },
  { id: 3, name: "GRAPES", price: 200 },
   { id: 3, name: "GUAUVA", price: 200 },
    { id: 3, name: "CARROT", price: 200 },

]

const Home = ({ addToCart }) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-20 mt-20 text-center '>PRODUCTS</h2>
      <div className='grid grid-cols-3 gap-4'>


        {sampleProducts.map(product => (
          <div key={product.id} className='bg-white p-4 rounded border border-gray-400'>
            <h3 className='font-bold '>{product.name}</h3>
            <p className='font-bold'>price: Rs.{product.price}</p>


            <button
              onClick={() => addToCart(product)}
              className='mt-2 bg-gray-500 text-white px-4 py-1 rounded'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
