import { cn } from "../lib/utils";
import React from "react";
import Image from "next/image";
import phoneTemplate from "/public/phone/phone-template.png"



const Phone = ({className, imgSrc, dark = false, ...props}) => {

return (
  <div
    className={cn(
      "relative pointer-events-none z-50 overflow-hidden",
      className
    )}
    {...props}
  >
    <Image
      src={phoneTemplate}
      alt="phone"
      priority
      className="pointer-events-none z-50 select-none  "
    />
    <div className="absolute -z-10 inset-0">
      <Image
        src={imgSrc}
        alt="dog"
        priority
        className={`object-cover rounded-[2.5rem]  border-richBlack border-[0.5rem] w-full h-full ${dark? 'border-snow' : 'border-richBlack'}`}
      />
    </div>
  </div>
);
}

export default Phone;