"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"

import { useState } from "react"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

  return (
    <div className="select-none w-full py-[45px] z-10 text-slate-400 bg-gray-900 drop-shadow-lg">
      <nav className="px-2 flex items-center justify-center">
        {/* Logo */}
        <Image
          className="w-14 mr-4 rounded-full"
          width={50}
          height={50}
          src="/logo.png"
          alt=""
        />
        <h1 className="font-semibold text-2xl mr-6 text-white">Randimalz</h1>

        {/* [ PC ] Navbar Items */}
        <ul className="hidden md:flex flex-row justify-center text-xl">
          <NavItem href="/credits" text="Credits" />
          <NavItem href="/cats" text="Cat Facts" />
          <NavItem href="/dogs" text="Dog Facts" />
          <NavItem href="/" text="Animal Facts" />
        </ul>

        <button
          onClick={handleNav}
          className="p-2 rounded-lg text-white md:hidden hover:bg-slate-700 hover:scale-125 hover:ease duration-150 cursor-pointer"
        >
          <i className="fa-solid fa-bars w-7"></i>
        </button>
      </nav>

      {/* [ Phone ] Navbar Items */}
      <ul
        className={
          nav ? "md:hidden w-full px-8 bg-gray-900 ease duration-150" : "hidden"
        }
        onClick={handleNav}
      >
        <NavItem href="/credits" text="Credits" collapsed />
        <NavItem href="/cats" text="Cat Facts" collapsed />
        <NavItem href="/dogs" text="Dog Facts" collapsed />
        <NavItem href="/" text="Animal Facts" collapsed />
      </ul>
    </div>
  )
}

type NavItemProps = {
  href: string
  text: string
  collapsed?: boolean
}

const NavItem = ({ href, text, collapsed }: NavItemProps) => {
  const path = usePathname()

  return (
    <Link href={href}>
      <li
        className={
          collapsed
            ? "w-full h-full border-b-2 cursor-pointer border-slate-300 "
            : "" +
              (path === href
                ? "text-blue-600"
                : "text-white hover:text-slate-400")
        }
      >
        {text}
      </li>
    </Link>
  )
}

export default Navbar
