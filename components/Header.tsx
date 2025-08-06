import React from 'react'
import Logo from "../public/logo.png"
import Image from 'next/image'

export default function Header() {
  return (
    <>
     <header className="bg-gradient-to-r from-[#00223f] to-[#004b6d] text-white p-4">
          <div className="flex items-center justify-between">
            <Image
              src={Logo} 
              alt="Tegramais"
              height={40}
              width={160} 
            />
          </div>
        </header>
    </>
  )
}
