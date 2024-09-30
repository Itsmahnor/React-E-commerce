// import React, {useContext} from 'react'

// import { useContext } from "react"


// //import params
// import { useParams } from 'react-router-dom'

// import { productsData } from '../../data'

// //import Context
// import { ShopContext } from '../Components/ShopContext'

// const ProductDetails = () => {

//   const { addToCart } = useContext(ShopContext);
  
//   //get the product id
//   const { id } = useParams()
//   //get the product based on id
//   const product = productsData.find(product=> {
//     return product.id ===parseInt(id);
//   })


//   return (
//     <div>
//       <div className="product_details_info">
//         <div className="detail_left">
//           <img src={product.image} alt="" />
//         </div>
//         <div className="details_right">
//             <h3>{product.title} </h3>
//             <p className='product_price'>$ {product.price} </p>
//             <p className='desc'>{product.description} </p>
//             <button onClick={()=> addToCart(product, id)}>ADD TO CART</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { productsData } from "../../data"
import { ShopContext } from "../Components/ShopContext"
import './Productdetails.css'
const ProductDetails=()=>{
  const {addToCart}=useContext(ShopContext);
  const {id} = useParams();
  const product=productsData.find(product=>{
    return product.id===parseInt(id);
  })
  return(
    <div>
          <div className="product_details_info">
            <div className="detail_left">
              <img src={product.image} alt="" />
             </div>
            <div className="details_right">
                <h3>{product.title} </h3>
                <p className='product_price'>$ {product.price} </p>
                <p className='desc'>{product.description} </p>
                <button onClick={()=> addToCart(product, id)}>ADD TO CART</button>
            </div>
          </div>
         </div>
  )
}


export default ProductDetails