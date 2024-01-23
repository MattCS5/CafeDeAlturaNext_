"use client";
import React from 'react'
import Button from './Button'
import { useState } from 'react';
import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) =>{
        let infoForm = JSON.parse(localStorage.getItem("IfoFormulario")) || [];
        infoForm.push(data);
        localStorage.setItem("IfoFormulario", JSON.stringify(infoForm));
        alert("Formulario enviado..!");
        reset();
      };


  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-col gap-1'>
            <label for="nombre">Nombre Completo:</label>

            <input 
            className='h-[34px] rounded-md shadow border-[1px] hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B] pl-1' 
            type="text" 
            id="nombre" 
            name="nombre"
            {...register("nombre", {
                required: {
                    value: true,
                    message: "Este campo es necesario",
                },

            })}
            onBlur={()=> trigger ("nombre")}
            />
          {errors.nombre && (
            <span className='text-[12px] text-red-600'>
                {errors.nombre.message}
            </span>
          )}

          </div>
          <div className='flex flex-col gap-1 '>

            <label for="email">Email:</label>

            <input className='h-[34px] rounded-md shadow border-[1px] hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B] pl-1' 
            type="email" 
            id="email" 
            name="email"
            {...register("email", {
                required: {
                    value: true,
                    message: "Este campo es necesario",
                },
                
                    pattern: {
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
                        message: "Correo no valido",
                    },
            })}
            onBlur={()=> trigger ("email")}
            />
          {errors.email && (
            <span className='text-[12px] text-red-600'>
                {errors.email.message}
            </span>
          )}
          </div>
          <div className='flex flex-col gap-1'>
              <label for="prefijo">Teléfono</label>
              <div className='flex items-center h-[34px] rounded-md shadow border-[1px] gap-1 hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B] '>
                  <select className='border-none outline-0 shadow-none bg-transparent py-3 px-2 justify-center gap-1' id="prefijo" name="prefijo">
                    <option value="US">US</option>    
                    <option value="+ES">ES</option>
                    <option value="FR">FR</option>                   
                  </select>
                  <input className='border-none  bg-transparent px-2 outline-0 ' 
                  type="tel" id="telefono" 
                  name="telefono"
                placeholder="+1 (555) 987-6543"
                {...register("telefono", {
                    required: {
                        value: true,
                        message: "Este campo es necesario",
                    },
                    
                        pattern: {
                            value:/^[+]?[0-9()-]*$/g,
                            message: "Teléfono no valido",
                        },
                })}
                onBlur={()=> trigger ("telefono")}
                />
              </div>
              {errors.telefono && (
                <span className='text-[12px] text-red-600'>
                    {errors.telefono.message}
                </span>
              )}
          </div>

          <div>
            <label  for="textarea"></label>
            <textarea className='w-[470px] rounded-md shadow border-[1px] py-3 px-4 hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]' placeholder="¿En qué podemos ayudarte?"></textarea>
         </div>
            

          <div className='flex items-center gap-3'>
            <input type="checkbox" 
            id="acepto" 
            name="acepto" 
            className='accent-[#2A5B45]'
            {...register("nombre", {
              required: {
                  value: true,
                  message: "Este campo es necesario",
              },

          })}
          onBlur={()=> trigger ("nombre")}
          />
            
        <label class="terminosYcondiciones" for="acepto"> Acepto la <b><u>Política de Privacidad</u></b> y los <b><u>Términos y Condiciones</u></b></label>
      </div>
        {errors.nombre && (
          <span className='text-[12px] text-red-600'>
              {errors.nombre.message}
          </span>
        )}
          <div>
            <Button intent={"secondary"} size={"medium"}>
              Enviar
            </Button> 
          </div>
    </form>
  )
}

export default Form