import {asset} from '../assets/assets'
import '../App.css'
const Header = ({setSlider}) => {


  return (
    <div onClick={()=>setSlider(1)} className="bg-black text-white text-[14px] flex justify-between items-center p-3 px-5 lg:justify-center ">
      
        <p className="font-serif text-[14px] mr-5 cursor-pointer">Enjoy complimentary shipping on orders over $400. Click and Collect is now available in Hong Kong.</p>
        <img src={asset.plus} className='w-3 h-3 mr-[6px] cursor-pointer' alt="" />
      </div>
  )
}

export default Header