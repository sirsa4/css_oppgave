"use client"
import Link from "next/link"


const Nav = () => {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:justify-between shadow-md px-4 ">
        <h1 className="font-black">HIOF</h1>
        <nav className="">
            <ul className="flex flex-col md:flex-row md:gap-4 ">
                <li><Link href={`#`}>User</Link></li>
                <li className="md:opacity-60">User</li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav