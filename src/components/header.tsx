'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/_theme_files/images/logo.png'
import { MdOutlineMenu, MdOutlineOtherHouses, MdClose } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import Link from 'next/link'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="flex overflow-hidden z-0 flex-col items-center px-16 mb-10 w-full text-lg bg-white border-b-2 border-zinc-200 text-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-row-reverse sm:flex-row flex-nowrap gap-5 justify-between items-center max-w-full w-[1196px]">
        <div className="flex sm:hidden items-center justify-center gap-5">
          <FaBell className="self-stretch my-auto" size={24} />
          <AiOutlineUser className="self-stretch my-auto" size={24} />
        </div>

        <div className="flex justify-center gap-8 items-center font-semibold whitespace-nowrap w-fit">
          <div className="flex overflow-hidden gap-2.5 items-center self-stretch py-2 my-auto justify-center w-fit">
            <Image src={logo} width={48} height={48} alt="PropertyPulse logo" className="object-contain shrink-0 self-center my-auto aspect-square w-[42px]" />
            <Link href="/" className="self-stretch my-auto hidden sm:block">
              PropertyPulse
            </Link>
          </div>

          <nav className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto uppercase max-lg:hidden">
            <Link href="/" className="gap-2.5 self-stretch p-2.5 my-auto bg-white rounded-md">
              Home
            </Link>
            <Link href="/properties" className="gap-2.5 self-stretch px-2.5 my-auto">
              Properties
            </Link>
          </nav>
        </div>

        <div className="flex gap-2.5 justify-center items-center px-2.5 pt-2.5 pb-2.5 my-auto font-bold uppercase rounded-md">
          <Link href="/signup" className="self-stretch my-auto max-md:hidden">
            Sign up
          </Link>
          <div className="shrink-0 self-stretch my-auto w-0 h-5 border border-black border-solid max-md:hidden" />
          <Link href="/signin" className="self-stretch my-auto max-md:hidden">
            Sign In
          </Link>

          <div className="hidden max-md:flex items-center w-fit">
            <button className="self-stretch my-auto" type="button" title="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
              <MdOutlineMenu className="self-stretch my-auto" />
            </button>
          </div>
          {showMenu && (
            <div className="absolute bg-slate-600 text-white left-0 inset-y-0 z-50">
              <div className="flex justify-end items-center p-2.5">
                <button className="self-stretch my-auto" type="button" title="close-menu" onClick={() => setShowMenu(!showMenu)}>
                  <MdClose className="self-stretch my-auto" />
                </button>
              </div>
              <nav className="flex flex-col items-center gap-2.5 justify-center self-stretch p-2.5 my-auto uppercase z-50">
                <Link href="/" className="gap-2.5 self-stretch p-2.5 my-auto rounded-md text-white uppercase">
                  Home
                </Link>
                <Link href="/properties" className="gap-2.5 self-stretch px-2.5 my-auto">
                  Properties
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
