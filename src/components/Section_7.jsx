import { useEffect, useRef } from 'react';
import { asset } from '../assets/assets' 
const Section_7 = () => {


    const videoRef = useRef(null);
    const svgRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure the video is muted
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  const bgBlack = ()=>{
    if(svgRef.current) {
      document.getElementById("svg8").setAttribute('fill','#ffffff');
      
    }
  }
  const bgWhite = ()=>{
    if(svgRef.current) {
      document.getElementById("svg8").setAttribute('fill','#000000')
      
    }
  }
    
  return (
    <section className="pt-[80px] sm:pt-[100px] lg:grid lg:grid-cols-9 lg:h-[46.659vw] lg:pt-[150px] ">
            <div className="px-[20px] mb-[30px] sm:px-[16.667%] lg:px-0 lg:pl-[80px] lg:col-span-3 ">
              <h2 className="mb-[20px] text-[14px]">Our online offering</h2>
    
              <h1 className="mb-[30px] text-[25px] sm:text-[30px]">Gestures to enhance your experience</h1>
    
              <p className="text-[16px] mb-[30px] leading-7 ">Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging.</p>
    
              <button ref={svgRef} onMouseEnter={bgBlack} onMouseLeave={bgWhite} className=" bg-[#ffffff] text-[#000000] hover:text-[#ffffff] hover:bg-[#3d3d3d] border border-[#52524f] flex justify-between items-center py-[19px]  px-[23px] rounded-sm w-[100%] sm:w-[300px] ">
            <a href="" className="hover:text-[]">Explore gifts</a>
              <span className="w-4">
                <svg id="svg8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </span>
          </button>
            </div>

            <div className="p-[20px] sm:p-0 sm:pl-[12.5%] lg:col-span-6">
                <video className='' loop ref={videoRef} playsInline src={asset.section_7_property}>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
  )
}

export default Section_7