import { useEffect, useRef } from 'react'
import { asset } from '../assets/assets'

const Section_2 = () => {
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
                <source media="(min-width:1025px )" srcSet={asset.section_2_property_large} />
                <source media="(min-width:640px )" srcSet={asset.section_2_property_small} />
                <source media="(min-width:0px )" srcSet={asset.section_2_property_below} />
                <img src={asset.section_2_property_img} alt="" />
            </picture>
            <figcaption className='mt-[20px] '>
                <h3 className="mb-[20px] text-[16px] hover:underline cursor-pointer ">Six aromatic encounters</h3>
                <p className="text-[14px] ">
                Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.
                </p>
            </figcaption>
        </figure>

        <figure className="sm:col-span-1">
            <video ref={videoRef} loop src={asset.section_2_property_video}></video>
            <figcaption className='mt-[20px]'>
                <h3 className="mb-[20px] text-[16px] hover:underline cursor-pointer">Home gifts</h3>
                <p className="text-[14px]">
                    From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.
                </p>
            </figcaption>
        </figure>
    </div>
  )
}

export default Section_2