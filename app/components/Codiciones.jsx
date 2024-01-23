import React from 'react'
import Card from './Card'
import condiciones from "../assets/condiciones.jpg"
import Check from "../assets/Check.svg"
import Truck from "../assets/Truck.svg"
import Gift from "../assets/Gift.svg"
import Image from 'next/image'


// const BackgrounImageCofee = {
//   backgroundImage : url(`${condiciones}`)
  
// }

const Condiciones = () => {
  return (
    
        <div className=" flex flex-col bg-cover bg-center h-96 px-36 py-12 font-outfit bg-[url('../public/condiciones.jpg')] ">

          <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-2xl text-white font-medium text-cent er'>Café con las mejores condiciones</p>
            <div className='flex gap-6 justify-center items-center '>
                <Card logo= {Check} titulo="Recibe tu pedido sin preocuparte" texto="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. "/>
                <Card logo= {Truck} titulo="Envío en 24/48h" texto="Pide tu café antes de las 12h y lo recibirás al día siguiente. "/>
                <Card logo= {Gift} titulo="Descuentos y beneficios" texto="Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros. "/>
               
            </div>
          </div>
        </div>
  )
}

export default Condiciones