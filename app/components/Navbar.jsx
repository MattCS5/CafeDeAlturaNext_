"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cafe from "../assets/cafe.png";
import Carrito from "../assets/Carr.svg";
import Telefono from "../assets/Phone.svg";
import Image from "next/image";
import ModalCarrito from "./ModalCarrito";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="  h-16 bg-black text-white mb-4 flex items-center  justify-between py-3 px-10 font-outfit fixed top-0  w-full">
      
        <div>
          <Link className="text-2xl flex gap-2 items-center outfit" href="/">
            <p>cafedealtura.com</p>
            <Image
              className="w-5 h-6"
              src={Cafe}
              alt="cafe"
              width={25}
              height={25}
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 outfit hover:bg">
          <Link href="/shopPage" className="hover:bg-[#515051] rounded p-2">
            Tienda
          </Link>

          <Link
            href="/suscripcionPage"
            className="hover:bg-[#515051] rounded p-2"
          >
            Suscripción
          </Link>
          <Link href="/empresasPage" className="hover:bg-[#515051] rounded p-2">
            Para empresas
          </Link>
          <Link
            href="/sobreNosotrosPage"
            className="hover:bg-[#515051] rounded p-2"
          >
            Sobre Nosotros
          </Link>
          <Link href="/contactoPage" className="hover:bg-[#515051] rounded p-2">
            Contacto
          </Link>
        </div>

        <div>
          <Link href="/telefonoPage" className="flex items-center gap-4 outfit">
            <div className="flex gap-2">
              <Image src={Telefono} width={25} height={25} alt="Telefono" />
              <p>+34 919 49 05 18</p>
            </div>

            <Link
              href="/inicioSesionPage"
              className="flex gap-2 py-3 px-6 rounded bg-[#515051]"
            >
              Iniciar sesión
            </Link>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)}>
          <Image src={Carrito} alt="carrito" height={25} width={25} />
        </button>
      

      <div>
        {open && <ModalCarrito />}
      </div>

    </div>
  );
};
export default Navbar;
