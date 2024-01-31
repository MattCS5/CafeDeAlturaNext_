import React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";

//class-variance-authority: library

const ButtonVariants = cva(
  /* button base style */
  "h-auto text-white  flex gap-2 items-center  rounded text-sm",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-[#1F1815] hover:bg-[#515051]",
        secondary: "bg-[#2A5B45] hover:bg-[#6A8D7D]",
        default: "bg-[#515051] hover:bg-gray-600",
        añadir: "bg-[#6A8D7D] group-hover:bg-[#2A5B45]",
        agotado: "bg-[#CEC6BB]",
      },

      /* button sizes */
      size: {
        small: ["text-sm", "py-2", "px-2"],
        medium: ["text-base", "py-3", "px-6"],
        large: ["text-lg", "py-4", "px-8"],
        newSize: ["text-base", "py-3", "px-6", "w-fit"],
      },

      /* button roundness */
      roundness: {
        square: "rounded-none",
        round: "rounded",
        pill: "rounded-full",
      },
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

export default function Button({
  intent,
  size,
  roundness,
  children,
  imagen,
  onClick,
}) {
  return (
    <button
      className={ButtonVariants({ intent, size, roundness, imagen })}
      onClick={onClick}
    >
      {imagen && <Image width={20} height={20} src={imagen} alt="" />}
      {children}
    </button>
  );
}
