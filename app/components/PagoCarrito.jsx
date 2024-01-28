import React from "react";

const PagoCarrito = () => {
  return (
    <div className="flex flex-col bg-[#E3DED7] gap-4  p-6 ">
      <div>
        <h3>Total del carrito</h3>
        <div>
          <div className="linea"></div>
          <div>
            <div className="flex justify-between">
              <p>SUBTOTAL</p>
              <p>
                <b>?</b>
              </p>
            </div>

            <div className="flex justify-between">
              <p>ENVÍO</p>
              <p>
                <b>GRATIS</b>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                <b>TOTAL</b>
              </p>
              <p>
                <b>?</b>
              </p>
            </div>
            <div className="flex justify-end">
              <p>Incluye 3.78€ de IVA</p>
            </div>
          </div>
        </div>
        <div>
          <button class="botonVerde">Ir a checkout</button>
          <button class="botonSeguirCompra">Seguir comprando</button>
        </div>
      </div>
    </div>
  );
};

export default PagoCarrito;
