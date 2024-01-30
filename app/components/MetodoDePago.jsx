import React from "react";
import bizum from "../assets/Bizum.jpg"
import Image from "next/image";
import DireccionEnvio from "./DireccionEnvio";

const MetodoDePago = () => {
  return (
    <div className="flex flex-col justify-center gap-6 font-outfit">
      <h3 className="font-semibold text-lg">Seleccionar método de pago</h3>

        <div className="flex gap-4 items-center ">

            <input
            className="accent-[#2A5B45] w-4 h-4  "
            type="radio"
            name="Pago"
            value="TarjetaDebito">       
            </input>

            <div>
                <p><b>Tarjeta de débito</b></p>
                <p>Opción estándar sin seguimiento</p>
            </div>

        </div>
        <div className=" flex flex-col w-[279px] font-outfit">
            <form>

                <div className="flex flex-col gap-[3px]">
                    <label
                        for="titular"
                        className="text-xs font-normal text-[#000000]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]">
                        Titular
                    </label>
                    <input
                        type="text"
                        id="titular"
                        name="titular"
                        className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]"
                        placeholder="Nombre del titular">
                    </input>
                </div>

           
                <div>
                    <label
                        for="numeroTarjeta"
                        className="text-xs font-normal text-[#000000]">
                        Número de Tarjeta
                    </label>
                    <input
                        type="text"
                        id="numeroTarjeta"
                        name="numeroTarjeta"
                        className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]"
                        placeholder="1234 1234 1234 1234">
                    </input>
                </div>

         
            <div class="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label
                    for="fechaCaducidad"
                    className="text-xs font-normal text-[#000000]"
                    >
                    Fecha de Caducidad
                    </label>

                    <input
                    type="text"
                    id="fechaCaducidad"
                    name="fechaCaducidad"
                    placeholder="MM / YY"
                    className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]  hover:border-[#9B9EA3] focus-within:outline-[#3F8F6B]">

                    </input>
                </div>

                <div>
                    <label
                    className="text-xs font-normal text-[#000000]"
                    for="cvc"
                    >
                    CVC
                    </label>
                    <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    className="px-2 py-[10px] w-full border rounded-md text-xs text-[#515051]"
                    placeholder="123"
                    ></input>
              </div>
            </div>

            </form>

            
        </div>
        <div className="h-[1px] bg-[#E3DED7]"></div>


        <div className="flex gap-4 items-center ">

                <input
                className="accent-[#2A5B45] w-4 h-4  "
                type="radio"
                name="Pago"
                value="TransferenciaBancaria">       
                </input>

                <div>
                    <p><b>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</b></p>
                    <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedidoo</p>
                </div>

        </div>
        <div className="h-[1px] bg-[#E3DED7]"></div>

        <div className="flex gap-4 items-center ">

            <input
            className="accent-[#2A5B45] w-4 h-4  "
            type="radio"
            name="Pago"
            value="TransferenciaBancaria">       
            </input>

            <div className="flex gap-4 justify-center items-center">
                <p><b>Bizum</b></p>
                <Image src={bizum} alt="bizum" width={70} height={70} />
            </div>

        </div>


        <DireccionEnvio/>
    
    </div>  
  );
};

export default MetodoDePago;
