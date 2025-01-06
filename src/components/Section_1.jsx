import { useRef } from "react";


const Section_1 = () => {
  const svgRef = useRef(null);

  const bgBlack = ()=>{
    if(svgRef.current) {
      document.getElementById("svg").setAttribute('fill','#ffffff');
    }
  }
  const bgWhite = ()=>{
    if(svgRef.current) {
      document.getElementById("svg").setAttribute('fill','#000000')
    }
  }
  
  
  
  return (
    /* BOOK */
    <section className=" pt-[80px] sm:pt-[100px]  lg:grid lg:grid-cols-9">
        <div className="pr-[20px] mb-[30px] sm:pr-[12.5%] lg:pr-[8.333%] lg:col-span-6">
            <img className='h-[97.44vw] sm:h-auto' src="https://www.aesop.com/u1nb1km7t5q7/23mX2EVjoEY3EflqXW2ajg/7fb9b7d000b8cdb875fd12bbb5ad95b0/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg" alt="" />
        </div>`
        `

        <div className="px-[20px] sm:px-[16.667%] lg:px-[0] lg:pr-[80px] lg:col-span-3">
          <h2 className="mb-[20px] text-[14px]">Festive giving</h2>

          <h1 className="mb-[30px] text-[25px] sm:text-[30px]">A complimentary sleeve for your gifts</h1>

          <p className="text-[16px] mb-[30px] leading-7 ">Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.</p>

          <button ref={svgRef} onMouseEnter={bgBlack} onMouseLeave={bgWhite} className=" bg-[#ffffff] text-[#000000] hover:text-[#ffffff] hover:bg-[#3d3d3d] border border-[#52524f] flex justify-between items-center py-[19px]  px-[23px] rounded-sm w-[100%] sm:w-[300px] ">
            <a href="" className="hover:text-[]">Explore gifts</a>
              <span className="w-4">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </span>
          </button>
        </div>
    </section>
  )
}

export default Section_1