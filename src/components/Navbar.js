import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from "@/components/ui/button"

const Navbar = () => {

    const user = undefined

  return (
    <nav
      className="sticky z-[100] h-14 inset-x-0 top-0 w-full 
    text-snow backdrop-blur-lg transition-all
    "
    >
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href="/" className="flex z-40 font-semibold">
            Eagle<span className="text-redwood">Shell</span>
          </Link>
          <div className='h-full flex '>
            {user ? (
                <>
                <Link href="/api/auth/logout" className={buttonVariants({
                size: 'sm', 
                
                })}></Link>
                </>
            ) : () }
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar