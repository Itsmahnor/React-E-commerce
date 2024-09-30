import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import './Cart.css';

export default function CartDetails({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);

  if (!item) return null; // Guard clause for missing item

  const { id, title, image, price, amount } = item;

  return (
    <div className="w-100">
      <div className="flex justify-between ">
       
        <div className="product_info" >
        <img src={image} alt={title} className="img1" />
        <div>
          <h3>{title}</h3>
          <div className="cartremove">
            Remove 
            <FontAwesomeIcon 
              icon={faTrash} 
              className='me-10 text-black mx-4' 
              onClick={() => removeFromCart(id)} 
              aria-label={`Remove ${title} from cart`}
              role="button"
              tabIndex={0} // Makes the icon focusable
              onKeyPress={(e) => e.key === 'Enter' && removeFromCart(id)} // Keyboard accessibility
            />
          </div></div>
        </div>
        <div className="quantity">
          <button 
            onClick={() => decreaseAmount(id)} 
            aria-label={`Decrease quantity of ${title}`}
            disabled={amount <= 1} // Disable if only one item is left
          >
            -
          </button>
          <span>{amount}</span>
          <button 
            onClick={() => increaseAmount(id)} 
            aria-label={`Increase quantity of ${title}`}
          >
            +
          </button>
        </div>
        <div className="price">${price.toFixed(2)}</div>
        <div className="total">${(price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
}
