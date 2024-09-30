import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadphones, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/hero.png';

export default function Hero() {
  return (
    <div className="w-100 h-auto">
      <div className="h-auto p-3 sm:p-[8rem] flex flex-col md:flex-row md:justify-around">
        <div className='md:w-[50%] flex flex-col justify-center gap-4'>
          <h1 className="text-[3rem] font-medium">Elevate Your Wardrobe</h1>
          <h2 className="md:text-[4rem] text-[2rem] font-bold">Discover Timeless Style and Unmatched Comfort</h2>
          <p className="text-gray-400 text-[1.5rem]">Shop the latest and classic essentials just for you</p>
        </div>
        <div className='md:w-[50%] flex justify-center'>
          <img src={img} alt="img1" className='h-[600px]' />
        </div>
      </div>
      {/* hero bottom */}
      <div className='m-11 p-4 h-auto bg-white shadow-xl shadow-stone-500 rounded-xl'>
        <div className='flex justify-around h-auto p-4  flex-wrap gap-3 '>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faTruck} className="  text-blue-500 text-[40px]" />
          <div><span className='font-bold text-[2rem]'>Free Shipping</span>
          <p className='text-gray-600'>Free Shipping on order</p></div>  
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faHeadphones} className=" text-[40px] text-green-500" />
            <div><span className='font-bold text-[2rem]'>24/7 Support</span>
            <p className='text-gray-600'>Full Sport on Process</p></div>
            
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faCreditCard} className=" text-[40px] text-yellow-500" />
            <div>
            <span className='font-bold text-[2rem]'>Secure Payment</span>
            <p className='text-gray-600'>Your Payment is secure</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
