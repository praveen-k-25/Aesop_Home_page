import { useEffect, useRef } from 'react'
import { asset } from '../assets/assets';

const Section_4 = () => {
    const videoRef = useRef(null);
    
        useEffect(()=>{
            if(videoRef.current){
                videoRef.current.muted=true;
                videoRef.current.play().catch((err)=>{
                    console.log("AutoPlay failed : ",err);
                });
            }
        })
  return (
    <div className="sm:grid sm:grid-cols-2 pt-[80px] px-[20px] sm:pt-[100px] sm:px-[34px] lg:pt-[150px] lg:px-[80px] sm:gap-5 ">
            <figure className="mb-[45px] sm:col-span-1 ">
                <picture className=''>
                    <source media="(min-width:1025px )" srcSet={asset.section_4_property_large} />
                    <source media="(min-width:640px )" srcSet={asset.section_4_property_small} />
                    <source media="(min-width:0px )" srcSet={asset.section_4_property_below} />
                    <img src={asset.section_4_property_img} alt="" />
                </picture>
                
                <figcaption className='mt-[20px] '>
                    <h3 className="mb-[20px] text-[16px] hover:underline cursor-pointer ">For their travel bag</h3>
                    <p className="text-[14px] ">
                    Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials.
                    </p>
                </figcaption>
            </figure>
    
            <figure className="sm:col-span-1">
                <video ref={videoRef} loop src={asset.section_4_property_video}></video>
                <figcaption className='mt-[20px]'>
                    <h3 className="mb-[20px] text-[16px] transition-all duration-1000 hover:underline   cursor-pointer">Noteworthy gifts</h3>
                    <p className="text-[14px]">
                    From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing.
                    </p>
                </figcaption>
            </figure>
        </div>
  )
}

export default Section_4