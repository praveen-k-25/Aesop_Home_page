
import { asset } from '../assets/assets'

const Sidebar = ({slider,setSlider}) => {
    
  return (
    <div className={`fixed top-0 left-0  h-[100vh] w-[100vw] lg:w-[50vw] overflow-y-hidden bg-[#fff9ee] text-[#333333] text-[14px] transform transition-transform duration-500  ${slider ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="  sticky top-0 flex item-center justify-between h-[80px] px-[20px] lg:p-[30px] border-none">
             <h1 className=' flex items-center text-[20px] text text-[#333333]'>Shipping fees and delivery times</h1>
             <div className="flex items-center">
             <img onClick={()=>setSlider(0)} src={asset.cross} alt="" className='w-[20px] h-[20px] cursor-pointer' />
             </div>
             
        </div>
{/* ------------  SF Express ----------- */}
        
        <div className="overflow-y-scroll h-[85vh] p-[20px] pb-[80px]  ">
            <div className="border-t-[0.5px] border-[#686868] mt-[30px] py-[30px]">
                <h1 className='text-black my-3'>SF Express (Hong Kong SAR, China)</h1>
                <section className="text-[#666666] flex justify-between py-3 ">
                    <p className="">Orders below $400</p>
                    <p className="">$40</p>
                </section>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">Orders $400 and over</p>
                    <p className="">Complimentary</p>
                </section>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">Urban areas</p>
                    <p className="">2-3 business days</p>
                </section>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">Outlying Islands</p>
                    <p className="">3-5 business days</p>
                </section>
            </div>

            
{/* ------------  Morning Global----------- */}

            <div className="border-t-[0.5px] border-[#686868]">
                <h1 className='text-black my-3'>Morning Global (Macau SAR, China)</h1>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">Orders below $400</p>
                    <p className="">$60</p>
                </section>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">Orders over $400</p>
                    <p className="">Complimentary</p>
                </section>
                <section className="text-[#666666] flex justify-between py-3 gap-11">
                    <p className="">All areas</p>
                    <p className="">5-7 business days</p>
                </section>
                <p className="mt-6 my-5">Regrettably we are unable to accept orders containing Dangerous Goods to Macau SAR, China.</p>
            </div>
            
{/* -----  Complimentary samples ------ */}
            <div className="">
                <section className='text-[#666666] border-t-[0.5px] border-[#686868] py-6'>
                    <h2 className='text-black pb-5 '>Complimentary samples</h2>
                    <p>All online orders include complimentary samples. At checkout, select from the available bundles to add them to your order.</p>
                </section>

                <section className='text-[#666666] border-t-[0.5px] border-[#686868] py-6'>
                    <h2 className='text-black pb-5'>Click and Collect</h2>
                    <p className='pb-5'>Simply choose in-store collection at checkout, then pick up your order at your preferred location.</p>
                    <p className='pb-5'>For general enquiries regarding Click and Collect, we welcome you to phone us on +852 3001 6734 instead of contacting your local store.</p>
                </section>

                <section className='text-[#666666] border-t-[0.5px] border-[#686868] py-6'>
                    <h2 className='text-black pb-5'>Returns</h2>
                    <p>Online purchases may be returned to us or any Aesop Stores within 30 days.</p>
                </section>
            </div>
            

            
            

        </div>
    </div>
  )
}

export default Sidebar