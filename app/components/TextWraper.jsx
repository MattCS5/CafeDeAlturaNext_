import React from 'react'
import Button from './Button'

const TextWraper = () => {
  return (
    <div className='flex flex-col gap-4 w-[588px]'>
         <h3 className='text-[18px] text-[#2A5B45] font-semibold  '>De la planta a tu taza</h3>
            <h1 className='text-[40px] text-[#000] font-semibold  '>El mejor café del mundo, ahora en tu casa.</h1>
            <p className='text-[#111827] font-normal text-sm '>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>

            <div className='flex gap-4 text-white '>
              <Button imagen={false} intent={"primary"} size={"medium"}>Descubrir orígenes</Button>
              <Button intent={"secondary"} size={"medium"}>Comprar café</Button>
            </div>
    </div>
  )
}

export default TextWraper