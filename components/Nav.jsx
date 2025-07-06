"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" }
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-4">
      {links.map(({ label, href }, index) => {
        const isActive = pathname === href
        return (
          <Link
            key={index}
            href={href}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200
              ${isActive 
                ? "underline underline-offset-8 decoration-1.5 decoration-[#ffc917] text-[#ffc917]"
                : "hover:underline hover:underline-offset-8 hover:decoration-1.5 hover:decoration-[#ffc917] hover:text-[#ffc917] text-white"
              }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav