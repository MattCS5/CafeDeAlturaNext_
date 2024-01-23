import React from 'react'
import plantaCafe from "../assets/plantaCafe.jpg"
import TextWraper from './TextWraper'
import Image from 'next/image'

const Wrapper = () => {
  return (
    <div className='flex px-12 py-10 gap-6 justify-around items-center font-outfit'>

        <div className=' flex flex-col justify-around gap-4 '>
          <TextWraper/>
        </div>

        <div>
           <Image className=" w-[588px] h-[390px] rounded-2xl" src={plantaCafe} alt='plantacafe' height={500} width={500}/>
        </div>
        
    </div>
  )
}

export default Wrapper