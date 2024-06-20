import React from 'react'
import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({className, children}) => {


  return (
    // the cn here is a utility function that will help me to add classes to the div element
    // the MaxWidthWrapper is a component that will wrap the children components to help us to control the width of the children components
    <div className={cn("h-full max-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
    )}>
        {children}
    </div>
  );
}

export default MaxWidthWrapper