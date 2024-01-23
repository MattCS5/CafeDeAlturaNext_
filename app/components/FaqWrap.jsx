"use client";
import React, {useState} from 'react'
import chevron from '../assets/Chevron.svg';
import Image from 'next/image';


const FaqWrap = ({titulo,descripcion}) => {

  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };
  
  return (
    <div className='flex flex-col  gap-4 p-6 bg-white rounded-lg font-outfit w-[668px]'>

        <div className='flex justify-between font-semibold'>
           <h3>{titulo}</h3> 
          <button className='cursor-pointer' onClick={toggleAccordion}>
            <Image src={chevron} alt='chevron' width={22} height={22} className={`transform ${open ? 'rotate-180 transition' : 'rotate-0 transition'}`} />
          </button>
        </div>

        {open && (
        <div>
          <div className='bg-[#E3DED7] w-[620px] h-[1px]'></div>
             <p className='text-xs font-normal pt-4'>{descripcion}</p>
        </div>
      )}
  </div>
  );
};

    
export default FaqWrap