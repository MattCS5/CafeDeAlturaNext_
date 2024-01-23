import phone from '../assets/Phone.png'
import mail from "../assets/Mail.png"
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Form from './Form'

const Split = () => {

  return (
    <div className='flex bg-[#E3DED7] px-10 font-outfit gap-6 justify-center '>
      <div className='flex flex-col justify-center w-[588px]'>

        <div className='flex flex-col gap-3'>

          <div className='flex flex-col'>
            <h3 className='font-semibold text-lg'>Entra en contacto con nosotros</h3>
          </div>

          <p className='font-normal text-sm pb-8'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>

        </div>

        <div className='flex flex-col gap-6 font-normal text-sm'>
            <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>

            <div flex flex-col>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
            </div>

            <div className='flex flex-col gap-3'>
              <button className='flex  items-center gap-3 text-[#6B7280]'><Image width={20} height={20} src={phone} alt='phone'/>+1 (555) 123-4567</button>
              <button className='flex  items-center gap-3 text-[#6B7280]'><Image width={20} height={20} src={mail} alt='mail'/>support@example.com</button>
            </div>
            <div className='flex'>
              <p>¿Buscas un trabajo?</p>
              <p><b><u>Ver nuestras ofertas.</u></b></p>
            </div>
            <div className='flex flex-col'>
            </div>
        </div>
      </div>

      <div className='flex flex-col justify-center bg-white pl-12 py-8 pr-8 text-xs font-normal'>
        <Form/>
      </div>
    
    </div>
  )
}

export default Split