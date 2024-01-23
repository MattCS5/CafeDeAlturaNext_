import React from 'react'
import cafeteria from '../assets/Cafeteria.png'
import TextWraperDos from './TextWraperDos'
import Image from 'next/image'


const WraperDos = () => {
  return (
    <div className='flex px-12 py-10 gap-6 justify-around items-center font-outfit '>

    <TextWraperDos/>

    <div>
       <Image width={500} height={500} className=" w-[588px] h-[390px] rounded-2xl" src={cafeteria} alt='cafeteria'/>
       
    </div>


    
</div>
  )
}

export default WraperDos