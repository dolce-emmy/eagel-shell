"use client"
import React from 'react'
import { StarFilledIcon } from "@radix-ui/react-icons";
import { StarHalfIcon } from "lucide-react";


const StarsIconArray = () => {
  return (
    <>
      <div className="flex  gap-0.5 pt-5">
        {[...Array(5)].map((_, index) => (
          <StarFilledIcon
            key={index}
            className="w-6 h-6 text-earthYellow fill-earthYellow"
          />
        ))}
        <StarHalfIcon className="w-6 h-6 text-earthYellow fill-earthYellow" />
        
      </div>
      
    </>
  );
}

export default StarsIconArray