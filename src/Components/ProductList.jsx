import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
const ProductList=()=>{
  const {products,Add_to_Cart}=useContext(ShopContext);
  return(
    <div className="flex flex-col place-content-center  w-100 ">
      <div >
        <h2 className="text-[30px] font-bold text-center py-3 ">Our Elegent Collection</h2>
        <div className="w-100  flex flex-wrap gap-11 justify-center ">
        { products.map((product)=>{
          const{id,image,title,price}=product;
          return(
            <div key={id} className="w-[300px]  h-[400px]  my-10 shadow-xl shadow-stone-500 rounded-lg flex flex-col
            place-items-center justify-center">
           <div className="relative w-[250px] h-[250px]">
  <img
    className="absolute w-full h-full rounded object-contain transition-transform duration-300 hover:translate-y-[-10px]"
    src={image}
    alt=""
  />
</div>


              <div>
                <Link to={`/product/${product.id}`} key={product.id}>
                <h4 className="font-bold text-[20px] mt-4">{title}</h4>
                <p className="text-center text-gray-500">{price}</p>

</Link>
              </div>
             
              <button onClick={()=>Add_to_Cart(product,id)} className="font-medium border border-black px-14 py-2 hover:bg-blue-500 hover:text-white transition-all">Add to Cart</button>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
export default ProductList;