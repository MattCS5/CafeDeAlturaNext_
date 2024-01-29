import React from "react";


const Envio = () => {

  return (
<div className="flex flex-col gap-6 w-[792px]">
  <div className="flex justify-between ">
    <div className="flex gap-4 items-center justify-center">
          <input
              className="accent-[#2A5B45] w-4 h-4"
              type="radio"
              name="grupo1"
              value="opcion1">
            </input>
            
            <div>
              <p><b>Envio 5-7 días</b></p>
              <p>Opción estándar sin seguimiento</p>
            </div>
    </div>
            <div>
              <p><b>GRATIS</b></p>
            </div>

  </div>
  <div className="h-[1px] bg-[#E3DED7]"></div>

  <div className="flex justify-between">
    <div className="flex gap-4 items-center justify-center">
          <input
              className="accent-[#2A5B45] w-4
              h-4  "
              type="radio"
              name="grupo1"
              value="opcion2">
            </input>
            
            <div>
              <p><b>Envío urgente 24h </b></p>
              <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
            </div>
    </div>
            <div>
              <p><b>9,00€</b></p>
            </div>

  </div>





</div>

















    // <div className=" flex flex-col gap-6 justify-between w-[792px]">

    //   <div className="flex flex-col gap-4  ">

    //     <div className=" flex justify-between ">
          
    //       <input
    //         className="accent-[#2A5B45]"
    //         type="radio"
    //         name="grupo1"
    //         value="opcion1">
    //       </input>
          
    //       <div>
    //         <p><b>Envio 5-7 días</b></p>
    //         <p>Opción estándar sin seguimiento</p>
    //       </div>

    //     </div>
            
    //       <div>
    //         <p><b>GRATIS</b></p>
    //       </div>

    // </div>

    // <div class="lineaGrande"></div>

    //     <div className=" flex justify-between">
    //       <input
    //         className="accent-[#2A5B45]"
    //         type="radio"
    //         name="grupo1"
    //         value="opcion2">
    //       </input>

    //       <div className="flex flex-col">
    //         <p><b>Envío urgente 24h</b></p>
    //         <p>
    //           Recibe tu pedido en las siguientes 24h (Para pedidos realizados
    //           antes de las 13:00).
    //         </p>
    //       </div>

    //   </div>
            

    //       <div>
    //         <p>
    //           <b>9,00 €</b>
    //         </p>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
};

export default Envio;
