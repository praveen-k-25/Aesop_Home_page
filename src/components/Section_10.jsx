import { useRef } from 'react';
import { asset } from '../assets/assets'

const Section_10 = () => {
  const svgRef = useRef(null);
    const bgBlack = (e)=>{
      if(svgRef.current) {
  
        document.getElementById("svg10").setAttribute('fill','#ffffff');
      }
      
    }
    const bgWhite = (e)=>{
  
      if(svgRef.current) {
        document.getElementById("svg10").setAttribute('fill','#000000')
      }
    }
  return (
    <section className=" pt-[80px] sm:pt-[100px] lg:pt-[150px] lg:grid lg:grid-cols-9">
                <div className="lg:col-span-6 pr-[20px] mb-[30px] sm:pr-[12.5%] lg:pr-[8.333%]">
                    {/* <img className='h-[97.44vw] sm:h-auto' src={asset.section_10_property} alt="" /> */}
                    <picture>
                      <source 
                        media="(min-width: 1025px)" 
                        srcSet={asset.section_10_property_large} 
                      />
                      <source 
                        media="(min-width: 640px)" 
                        srcSet={asset.section_10_property_small} 
                      />
                      <source 
                        media="(min-width: 0px)" 
                        srcSet={asset.section_10_property_below}
                      />
                      <img 
                        src={asset.section_10_property_img}
                        alt="Description of the image" 
                        style={{ width: "100%", height: "auto" }} 
                      />
                    </picture>
                </div>
        
                <div className="px-[20px] sm:px-[16.667%] lg:px-[0] lg:pr-[80px] lg:col-span-3">        
                  <h1 className="mb-[30px] text-[25px] sm:text-[30px]">Virtual guidance from home's comfort</h1>
        
                  <p className="text-[16px] mb-[30px] leading-7 ">For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order.  </p>
        
                  <button ref={svgRef} onMouseEnter={bgBlack} onMouseLeave={bgWhite} className=" bg-[#ffffff] text-[#000000] hover:text-[#ffffff] hover:bg-[#3d3d3d] border border-[#52524f] flex justify-between items-center py-[19px]  px-[23px] rounded-sm w-[100%] sm:w-[300px] ">
            <a href="" className="hover:text-[]">Explore gifts</a>
              <span className="w-4">
                <svg id="svg10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </span>
          </button>
                </div>
            </section>
  )
}

export default Section_10