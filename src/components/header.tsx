'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { MdOutlineMenu, MdOutlineOtherHouses, MdClose } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import { BiDoorOpen } from 'react-icons/bi'
import Button from './Button/Button'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotificationMenu, setShowNotificationMenu] = useState(false)
  const pathName = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <header className="flex z-0 flex-col items-center px-16 mb-10 w-full text-lg bg-white border-b-2 border-zinc-200 text-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-nowrap gap-5 justify-between items-center max-w-full w-[1196px]">

    <div id="mobile-menu">
        <div className="flex lg:hidden items-center w-fit bg-blue">
                <button className="" type="button" title="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
                <MdOutlineMenu className="w-[24px] my-auto" />
                </button>
            </div>
            <div className={`fixed flex flex-col items-center justify-center top-0 left-0 h-full bg-slate-800 bg-opacity-50 transition-all duration-500 ease-in-out ${showMenu ? 'w-full' : 'w-0'} }`}  onClick={() => setShowMenu(!showMenu)} >
                {showMenu && (
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center self-stretch p-2.5 my-auto relative">
                    <div className="top-0 left-0 w-fit h-full z-40" />
                    <div className=" absolute top-0 left-0 block p-2.5 z-5 ">
                        <button className="self-stretch my-auto top-0 right-0 z-50 w-full" type="button" title="close-menu" onClick={() => setShowMenu(!showMenu)}>
                        <MdClose className="self-stretch my-auto text-white z-5" size={32} />
                        </button>
                    </div>
                    <nav className="top-0 left-0 w-full h-full flex flex-col items-center gap-2.5 justify-center self-stretch p-2.5 my-auto uppercase z-50">
                        <NavLink href="/" className="gap-2.5 self-stretch p-2.5 my-auto rounded-md text-white uppercase">
                        Home
                        </NavLink>
                        <NavLink href="/properties" className="gap-2.5 self-stretch px-2.5 my-auto">
                        Properties
                        </NavLink>
                    </nav>
                </div>
                )}
            </div>
    </div>


        <div className="flex justify-center gap-8 items-center font-semibold whitespace-nowrap w-fit">
          <div className="flex overflow-hidden gap-2.5 items-center self-stretch py-2 my-auto justify-center w-fit">
            <Image src={logo} width={48} height={48} alt="PropertyPulse logo" className="object-contain shrink-0 self-center my-auto aspect-square w-[42px]" />
            <Link href="/" className="self-stretch my-auto hidden lg:block">
              PropertyPulse
            </Link>
          </div>

          <nav className={`lex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto uppercase max-lg:hidden`}>
            <NavLink href="/">
              Home
            </NavLink>
            <NavLink href="/properties">
              Properties
            </NavLink>
            
          </nav>
        </div>





{/* Large screens */}
    {
      !loggedIn ? (

        <div className="">
                <div className="flex gap-5 justify-center items-center self-stretch p-2.5 my-auto uppercase max-lg:hidden">
          <NavLink href="/login">
            Login
          </NavLink>
          <NavLink href="/register">
            Register
          </NavLink>
        </div>

        <div className="relative lg:hidden flex items-center gap-2.5 justify-center">
            {/* <Button textColor='amber-300'><h2>Register/login</h2></Button> */}  
            <BiDoorOpen className={`self-stretch my-auto cursor-pointer ${showUserMenu ? 'text-amber-300' : ''} hover:text-amber-300 transition-all duration-300 ease-in-out`} size={32} onClick={() => {setShowNotificationMenu(false); return setShowUserMenu(!showUserMenu); }}/>
            {
            showUserMenu && (
              <div className="absolute right-0 top-10  w-fit text-sm text-zinc-800 border-0 shadow-sm border border-zinc-300 rounded-md p-5 bg-white">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Register</li>
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Log in</li>
                </ul>
              </div>
            )
          }

        </div>

        </div>
    
      ) : (<div className="hidden lg:flex  items-center justify-center gap-5 z-10">
        <div className="relative w-full h-auto" id='notification'>
          <FaBell
            className="self-stretch my-auto cursor-pointer"
            size={24}
            onClick={() => {setShowUserMenu(false); console.log(showNotificationMenu); return setShowNotificationMenu(!showNotificationMenu);  }}
          />
          {
            showNotificationMenu &&  (
              <div className="absolute right-0 top-10  w-fit text-sm text-zinc-800 border-0 shadow-sm border border-zinc-300 rounded-md p-5 bg-white">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Test Notification 1</li>
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Test Notification 2</li>
                </ul>
              </div>
            )
          }
        </div>
        <div className="relative w-fit h-auto" id='user'>
          <AiOutlineUser
            className="self-stretch my-auto cursor-pointer"
            size={24}
            onClick={() => { setShowNotificationMenu(false); return setShowUserMenu(!showUserMenu); }}
          />
          {
            showUserMenu && (
              <div className="absolute right-0 top-10  w-fit text-sm text-zinc-800 border-0 shadow-sm border border-zinc-300 rounded-md p-5 bg-white">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Test User Option 1</li>
                  <li className="px-4 py-2 hover:bg-zinc-100 cursor-pointer whitespace-nowrap">Test User Option 2</li>
                </ul>
              </div>
            )
          }
        </div>
      </div>)
    }



</div>
    </header>
  )
}

export default Header
