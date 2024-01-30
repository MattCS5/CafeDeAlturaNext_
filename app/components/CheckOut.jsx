import React from 'react'
import MetodoDePago from './MetodoDePago'
import TotalCarrito from './TotalCarrito'

const CheckOut = () => {
  return (
    <div className='mt-28 pl-10 pr-10 pb-10 flex flex-col justify-center gap-6 '>
        <div className='flex items-center justify-center'>
            <h2 className='flex items-center text-[#2A5B45] font-medium text-2xl'>CheckOut</h2>
        </div>
       
       <div className='flex gap-6 justify-around'>
        <MetodoDePago/>
        <TotalCarrito/>
       </div>

       <div className='flex gap-6' >
        
       </div>
    </div>
  )
}

export default CheckOut