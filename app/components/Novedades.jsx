"use client";
import React from 'react'
import ProductCard from './ProductCard';
import {useContext} from 'react';
import Link from 'next/link';
import flecha from "../assets/Flecha.svg";
import Image from 'next/image';
import { DataContext } from '../context/DataContext';

const Novedades = () => {
  const { data } = useContext(DataContext) 
  console.log(data);
  


  return (
  <div className='flex flex-col  p-10 gap-10 items-center'>

      <h2 className='flex text-[rgb(42,91,69)] text-2xl font-medium'> Novedades </h2>

      <div className=' flex flex-wrap gap-6 justify-center'>
            {data?.slice(4, 8).map((cafe)=>{
              return(
                <ProductCard 
                infoCafe={cafe}
                key={cafe.id} 
                cafeImg={cafe.img_url} 
                name={cafe.brand} 
                price={cafe.price}
                available={cafe.available}
                />
              )
            })}
      </div>

      <Link className='flex gap-4 font-outfit font-semibold text-sm' href="/shopPage">
        <p><u>Ver todos</u></p>
      <Image src={flecha} alt="flecha" width={20} height={20}  /> 
      </Link>
  </div>
  )
}

export default Novedades