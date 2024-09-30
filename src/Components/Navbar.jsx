import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import { useContext } from 'react';
export default function Navbar(){
  const{itemAmount}=useContext(ShopContext)
  return(
    <div className="flex justify-between p-4 ">
    <div className="font-bold text-[2rem]">
      <h1>ShopX</h1>
    </div>
    <div >
      <ul className='hidden   md:flex md:gap-5 md:font-medium md:text-[1.5rem] md:cursor-pointer'>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
        <li>Use App</li>
      </ul>
    </div>
    <div className="flex gap-5 text-2xl cursor-pointer ">
      <Link to='/Cart'>
      <div  className='relative  flex text-[2rem]' >
      <FontAwesomeIcon icon={faCartShopping} className='m-1' />
      <p className=' bg-red-600 absolute  right-[-8px] text-[12px]
       h-5 w-5 rounded-[50%] text-white grid place-content-center'>{itemAmount}</p>
      </div></Link>
      <div>
      <FontAwesomeIcon icon={faUser} className='me-10 text-[30px]'  />
      </div>
    </div>
  </div>
  )
}