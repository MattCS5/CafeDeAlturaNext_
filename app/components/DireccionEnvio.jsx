import React from 'react'

const DireccionEnvio = () => {
  return (
    <div classNameName='font-outfit'>
        <h3 className='pb-6 text-lg font-semibold'>Dirección de envío</h3>
         <form className='w-[521px]'>
            <div className="flex flex-col gap-[3px] mb-4">
                <label for="nombre" className="text-xs font-normal text-[#000000]">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
            </div>

            <div className="flex flex-col gap-[3px] mb-4">
                <label for="apellidos" className="text-xs font-normal text-[#000000]">Apellidos</label>
                <input type="text" id="apellidos" name="apellidos" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
            </div>

            <div className="flex flex-col gap-[3px] mb-4">
                <label for="telefono" className="text-xs font-normal text-[#000000]">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" placeholder="+34 600 6000 600"/>
            </div>

            <div className="flex flex-col gap-[3px] mb-4">
                <label for="email" className="text-xs font-normal text-[#000000]">Email</label>
                <input type="email" id="email" name="email" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
            </div>

            <div className="flex flex-col gap-[3px] mb-4">
                <label for="pais" className="text-xs font-normal text-[#000000]">País</label>
                <select id="pais" name="pais" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]">
                    
                    <option value="es">España</option>
                    <option value="mx">México</option>

                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                    
                <div className="col-span-1 gap-[3px]">
                    <label for="poblacion" className="text-xs font-normal text-[#000000]">Población</label>
                    <input type="text" id="poblacion" name="poblacion" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
                </div>

                <div className="col-span-1 gap-[3px]">
                    
                    <label for="codigoPostal" className="text-xs font-normal text-[#000000]">CP</label>
                    <input type="text" id="codigoPostal" name="codigoPostal" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" placeholder="123"/>
                </div>

            </div>




            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1">
                    <label for="calle" className="text-xs font-normal text-[#000000]">Calle</label>
                    <input type="text" id="calle" name="calle" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]"/>
                </div>
                <div className="col-span-1">
                    <label for="numero" className="text-xs font-normal text-[#000000]">Nº</label>
                    <input type="text" id="numero" name="numero" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
                </div>
                <div className="col-span-1">
                    <label for="piso" className="text-xs font-normal text-[#000000]">Piso</label>
                    <input type="text" id="piso" name="piso" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
                </div>
                <div className="col-span-1">
                    <label for="puerta" className="text-xs font-normal text-[#000000]">Puerta</label>
                    <input type="text" id="puerta" name="puerta" className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]" />
                </div>
            </div>

</form>
    </div>
  )
}

export default DireccionEnvio