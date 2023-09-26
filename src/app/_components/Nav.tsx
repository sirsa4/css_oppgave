"use client"
import Link from "next/link"


const Nav = () => {
  return (
    <header className="flex gap-4 flex-row h-16 items-center justify-between shadow-md px-4 ">
        <h1 className="font-black">HIOF</h1>
        <nav className="">
            <ul className="flex justify-center md:justify-between gap-4 md:gap-4 ">
                <li><Link href={`#`}>User</Link></li>
                <li className="md:opacity-60">User</li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav