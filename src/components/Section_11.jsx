import React from 'react'

const Section_11  = () => {
  return (
    <div>
        <div className="py-[50px]">
            <section className="py-[80px] px-[20px] sm:px-[34px] sm:py-[100px] lg:px-[40px] lg:py-[150px] flex flex-col justify-center">
                <div className="flex justify-center">
                    <p className="text-[25px] sm:text-[30px] text-center sm:w-[50%] ">The manner of giving is worth more than the gift.</p>
                </div>
                
                <cite className='text-center font-semibold text-[14px] leading-6'>Pierre Corneille</cite>
            </section>
        </div>
        <div className="py-[50px] bg-[#F6F5E8]">
            <div className="p-[20px] flex flex-col gap-5 sm:grid sm:grid-cols-3 lg:px-[80px] py-[50px] lg:gap-10 ">
                <section className="text-[14px] sm:col-span-1  ">
                    <h2 className="font-medium mb-[5px] lg:flex lg:flex-col  lg:items-center ">Certified B Corp</h2>
                    <p className="text-[#666666] leading-6 lg:text-center ">We meet the highest verified standards of social and environmental performance, transparency and accountability.</p>
                </section>
                <section className="text-[14px] sm:col-span-1 ">
                    <h2 className="font-medium mb-[5px] lg:flex lg:flex-col  lg:items-center">Leaping Bunny approved</h2>
                    <p className="text-[#666666] lg:text-center ">Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.</p>
                </section>
                <section className="text-[14px] sm:col-span-1 ">
                    <h2 className="font-medium mb-[5px] lg:flex lg:flex-col  lg:items-center">PETA recognition</h2>
                    <p className="text-[#666666] lg:text-center ">We appear on PETA's internationally recognised vegan and cruelty-free lists.</p>
                </section>
                </div>
        </div>
        
        
    </div>
  )
}

export default Section_11