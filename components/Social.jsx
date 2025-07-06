import Link from "next/link"
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-bera-0000000000/",
    icon: <FaLinkedinIn />
  },
  {
    name: "GitHub",
    href: "https://github.com/abhilash-bera",
    icon: <FaGithub />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/abhilash_bera/",
    icon: <FaInstagram />
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/abhilash.bera.5",
    icon: <FaFacebook />
  }
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link) => (
        <Link href={link.href} key={link.name} className={iconStyles}>
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social