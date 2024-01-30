import React from 'react'
import Link  from 'next/link'
import Button from './Button'
import cafe from '../assets/cafe.png'
import phone from '../assets/Phone.svg'
import mail from '../assets/Mail.svg'
import Image from 'next/image'



const Footer = () => {

  return (
    <div  className='flex flex-col bg-black gap-4 px-10 pt-7 pb-10'>
      

      <div className='flex text-white font-outfit '>
            <Link className='text-2xl flex gap-2 items-center outfit' href="/">
                <p>cafedealtura.com</p>
                <Image width={20} height={20} className='w-5 h-6' src={cafe} alt='cafe'/>
            </Link>
      </div> 

      <div className='flex w-[1132px] justify-between'>

          <div className='font-outfit text-white flex flex-col gap-4  '>
            <h3>Te ayudamos en</h3>
            <div className='flex flex-col gap-4  '>
              <Button size={"newSize"} imagen={phone}>+34 919 49 05 18</Button>
              <Button  imagen={mail}>hola@cafedealtura.com</Button>
            </div>
          </div>

          <div className='flex flex-col justify-center  gap-4 outfit text-white'>

            <Link href="/shopPage">Tienda</Link>
            <Link href="/suscripcionPage">Suscripción</Link>
            <Link href="/empresasPage">Para empresas</Link>
            <Link href="/sobreNosotrosPage">Sobre Nosotros</Link>
            <Link href="/contactoPage">Contacto</Link>
        
          </div>

          <div className='flex flex-col justify-center  gap-4 outfit text-white'>

          <Link href="/privaciadPage">Política de privacidad</Link>
          <Link href="/cookiesPage">Política de cookies</Link>
          <Link href="/condicionesPage">Términos y condiciones</Link>
          
        
          </div>
      </div>
    </div>
  )
}

export default Footer