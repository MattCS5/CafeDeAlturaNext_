import { useContext } from "react";
import { DataContext } from "../context/DataContext";


const Envio = () => {
  const {setDeliveryPrice, deliveryPrice } = useContext(DataContext);
  console.log(deliveryPrice);
  return (

<div className="flex flex-col gap-6 w-[792px]">
  <div className="flex justify-between ">
    <div className="flex gap-4 items-center justify-center">
          <input
              className="accent-[rgb(42,91,69)] w-4 h-4"
              type="radio"
              name="grupo1"
              value="Gratis"
              onClick={e => setDeliveryPrice(e.target.value)}>
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
              value="Express"
              onClick={e => setDeliveryPrice(e.target.value)}>  
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
  )
};

export default Envio;
