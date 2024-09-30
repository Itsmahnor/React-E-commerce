import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import CartDetails from './CartDEtails';
import { useContext } from 'react';
import { ShopContext } from './ShopContext';
import './Cart.css' 
export default function Cart(){

  const{cart,clearCart,total,itemAmount}=useContext(ShopContext)
  return(
    <div>
      <div className='cart_container'>
        <div className='cart_left'>
          <div className='flex justify-between'>
          <h1 className='text-[2rem] font-bold'>Shopping Cart</h1>
          <h1 className='text-[1.5rem] font-medium'>Items: ({itemAmount})</h1>
          <FontAwesomeIcon icon={faTrash} className='me-10 text-[30px]' onClick={clearCart}  />
          </div>
        <div className="cart-header">
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        <div className="cart-details">
          {cart.length>0?cart.map((item)=>
<CartDetails item={item} key={item.id}/>
          ): (
            <p>Your Cart is Empty</p>
          )}
        </div>   </div>
        <div className="cart_right">
          <h2>Cart Summary</h2>
          <div className="cart_summary">
          <div className="summary_item">
          <span>Items </span><span>{itemAmount}</span>
          </div>
          <div className="summaary_item">
            <span>SubTotal </span>
            <span>${isNaN(total)?0:total}</span>
          </div>
          <div className="summaary_item">
            <span>Shipping </span>
            <span>Free </span>
          </div>
          <div className="summaary_item">
            <span>Promo Code</span><br />
           <input type="text" placeholder='Enter Your Code' />
           <button className='bg-green-700 text-white px-4 py-2 rounded'>Apply</button>
          </div>
          <div className="summaary_item total_cost">
            <span>Total Cost</span>
            <span>${isNaN(total)?0:total}</span>
          </div>
          <button className="checkout_btn">Checkout</button>
        </div></div>
      </div>
    </div>
  )
}