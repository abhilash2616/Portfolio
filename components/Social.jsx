import Link from "next/link"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilashbera/",
    icon: <FaLinkedinIn />
  },
  {
    name: "GitHub",
    href: "https://github.com/abhilash2616",
    icon: <FaGithub />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/abhilashbera03/",
    icon: <FaInstagram />
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/97343431856",
    icon: <FaWhatsapp />
  }
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link) => (
        <Link href={link.href} target="_blank" key={link.name} className={iconStyles}>
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social