import { createContext, useEffect, useState } from "react";
import { productsData } from '../../data';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState(productsData);
  // cart state
  const[cart,setCart]=useState([]);
  // amount state
  const[itemAmount,setAmount]=useState(0);
  // total price state
  const[total,setTotal]=useState(0);
  // get Total Amount
  useEffect(()=>{
    const total=cart.reduce((accumulator,currentitem)=>{
      const priceAsNumber=parseFloat(currentitem.price);
      if(isNaN(priceAsNumber)){return accumulator;}
      return accumulator+ priceAsNumber*currentitem.amount;
    },0)
    setTotal(total)
  },[cart]); 


  const Add_to_Cart=(product,id)=>{
    let newItem={...product,amount:1}
console.log(newItem)


  // check if item is already in cart
  const cartItem=cart.find((item)=>{
    return item.id === id;
  });
  if(cartItem){
    const newCart=[...cart].map((item)=>{
      if(item.id===id){
        return{...item,amount:cartItem.amount+1}
      }else{
        return item;
      }
    })
    setCart(newCart);
  }else{
    setCart([...cart,newItem])
  }}
    
  // update item amount
  useEffect(()=>{
    if(cart){
      const amount=cart.reduce((accumulator,currentitem)=>{
        return accumulator+currentitem.amount;
      },0)
      setAmount(amount)   
    }
  },[cart])
  // remove an item from cart
  const removeFromCart=(id)=>{
    const newCart=cart.filter((item)=>{
      return item.id !== id;
    });
    setCart(newCart);
  }
  // clear cart
  const clearCart=()=>{
    setCart([]);
  }
  // increase quantity of an item
  const increaseAmount=(id)=>{
    const cartItem=cart.find((item)=>item.id===id)
    Add_to_Cart(cartItem,id);
  }
   // decrease quantity of an item
   const decreaseAmount=(id)=>{
    const cartItem=cart.find((item)=>item.id===id);
    if(cartItem){
    const newCart=cart.map((item)=>{
      if(item.id===id){
        return {...item,amount:cartItem.amount-1}
      }else{
        return item;
      }
    });
    setCart(newCart);}
    else{
      if(cartItem.amount<2){
        removeFromCart(id);
      }
    }
    
  }
  return (
    <ShopContext.Provider value={{ products,Add_to_Cart,total,cart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount}}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
