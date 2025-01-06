import { useState } from 'react';
import {asset} from '../assets/assets';

const Footer = () => {
    const [checked,setChecked] = useState(false);
    const [display,setDisplay] = useState(false);

    const [chance,setChance] = useState(false);
    let color = checked ? "#ffffff" : "#252525"

    const handleSubmit = (e)=>{
        e.preventDefault();
        !checked ? setDisplay(true) : setDisplay(false);
    }
  return (
    <div className="bg-[#252525] text-[#fffef2] text-[14px] ">
        <div className=" py-[50px] px-[30px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-[34px] gap-y-[40px]">
            <div className=" col-span-2 sm:col-span-3 lg:col-span-2 ">
                <p className="text-[15px]">Subscribe to the Aesop newsletter</p>
                <div className="mt-[16px] pt-[16px] border-t-[1px]">

                    <form className='' onSubmit={(e)=>handleSubmit(e)} >

                        <div className="flex border-[1px] rounded-sm">
                            <input className='border-none bg-transparent flex-grow py-[1px] pr-[2px] pl-[10px] text-[1.125rem] focus:outline-none placeholder-[#fffef2da] focus:placeholder-[#252525]' type="email" placeholder='Email address' />
  
                            <button className='p-3' type='submit' ><img className=' w-3 h-3' src={asset.arrow} alt="" /></button>
                        </div>

                        <div className="flex mt-5  ">
                           
                                <input className='hidden' type='checkbox' checked={checked} onChange={()=>setChance(!chance)} />

                                    <svg onClick={()=>
                                        setChecked(!checked)} className='bg-[#252525] rounded-sm border-[1px] border-white w-5 h-[15px] mr-3 mt-1 p-[2px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill={color} d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                            <div  className="">
                                <div onClick={()=>setChecked(!checked)} className="inline cursor-pointer">
                                Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our
                                </div> <a className="underline" href="">privacy policy</a>
                            </div>
                            
                        </div>
                    </form>
                    <div className={`text-red-500 mt-2 ${display ? "block" : "hidden"}`}>Please accept the privacy policy before proceeding</div>
                </div>
            </div>
            
                <section className=" col-span-1">
                    <div className="">
                        <h2 className="text-[15px]">Orders and Assistance</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[16px] leading-9">
                        <a href="" className='flex items-center gap-1'>Contact us <img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a href="" className='flex items-center gap-1'>FAQ <img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a href="" className='flex items-center gap-1'>send <img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a href="" className='flex items-center gap-1'>return the goods <img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a href="" className='flex items-center gap-1'>Order history</a>
                        <a href="" className='flex items-center gap-1'>Gift card balance</a>
                        <a href="" className='flex items-center gap-1'>Terms and Conditions</a>
                    </div>
                </section>

                <section className=" col-span-1">
                    <div className="">
                        <h2 className="text-[15px]">Services</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[16px] leading-9">
                        <a href="" className="block">Live assistance</a>
                        <a href="" className="block">corporate gifts</a>
                        <a href="" className="block">facial Appointments</a>
                        <a href="" className="block">Click and collect</a>
                        <a href="" className="block"> video consultation</a>
                    </div>
                </section>

                <section className=" col-span-1">
                    <div className="">
                        <h2 className="text-[15px]">Location preferences</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[26px] leading-6">
                        <div className="">
                            <p className="">Shipping:</p>
                            <a href="" className="">Hong Kong, SAR</a>
                        </div>
                        <div className="mt-[20px]">
                            <p className="">Language:</p>
                            <a href="" className="">English</a>
                            <a href="" className="">繁體中文</a>
                        </div>
                    </div>
                </section>

                <section className=" col-span-1 lg:col-span-2">
                    <div className="">
                        <h2 className="text-[15px]">Sustainability</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[16px]">
                        <p className="leading-[26px] ">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <a className='text-nowrap' href="">Learn more</a></p>
                        
                    </div>
                </section>
                <section className=" col-span-1">
                <div className="">
                        <h2 className="text-[15px]">about</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[16px] flex flex-col leading-9">
                        <a href="" className="">About Aesop</a>
                        <a href="" className="">Aesop Foundation</a>
                        <a href="" className="">recruitment</a>
                        <a href="" className="">privacy policy</a>
                        <a href="" className="">Accessibility</a>
                        <a href="" className="">Cookie Policy</a>
                    </div>
                </section>
                <section className=" col-span-1">
                    <div className="">
                        <h2 className="text-[15px]">Social media</h2>
                    </div>
                    <div className="border-t-[1px] mt-[16px] pt-[16px] leading-9">
                        <a className='flex items-center gap-1' href="">Instagram<img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a className='flex items-center gap-1' href="">Twitter<img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a className='flex items-center gap-1' href="">LinkedIn<img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a className='flex items-center gap-1' href="">WeChat<img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                        <a className='flex items-center gap-1' href="">Weibo<img className='rotate-[-45deg] w-3 h-3' src={asset.arrow} alt="" /></a>
                    </div>
                </section>
        </div>
        <div className=" h-[72px] text-[16px] leading-[1.7] border-t-[4px] px-[20px] flex items-center ">&copy; Aesop </div>
    </div>
  )
}

export default Footer