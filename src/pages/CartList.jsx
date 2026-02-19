import React from 'react';

const CartList = ({ cartItems, removeFromCart }) => {



  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice, "total price")

  return (
    <div>

      <h2 className='text-xl font-bold mb-4'>Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-xl'>Your Cart is Empty</p>
      ) : (
        <>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            {cartItems.map(item => (
              <div key={item.id} className='bg-white p-4 rounded shadow'>
                <h3 className='font-bold'>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>


                <button
                  onClick={() => removeFromCart(item.id)}
                  className='mt-2 bg-gray-500 text- px-4 py-1 rounded font-bold text-white'
                >
                  Remove
                </button>


              </div>
            ))}
          </div>
          {/* Total price */}
          <div className='text-right font-bold text-lg'>
            Total: Rs. {totalPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
