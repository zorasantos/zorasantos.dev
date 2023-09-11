import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@/assets/linkedin.svg"
import GithubIcon from "@/assets/github.svg"
import YoutubeIcon from "@/assets/youtube.svg"

export default function Footer() {
  const items = [
    { icon: LinkedinIcon, altText: "Linkedin Icon", link: "https://www.linkedin.com/in/zoranildosantos/" },
    { icon: GithubIcon, altText: "Github Icon", link: "https://github.com/ZoraSantos" },
    { icon: YoutubeIcon, altText: "Youtube Icon", link: "https://www.youtube.com/@MrZoranildo" }
  ]

  return (
  <footer className="sticky top-[100vh] flex flex-col justify-center gap-2 sm:flex-row sm:justify-between sm:gap-0 border-t bottom-0 left-0 items-center w-full h-32 mt-10 px-10 md:px-24">
    <span>© {new Date().getFullYear()}, <span className="text-primary dark:text-primary-dark font-bold">Zoranildo Santos</span>. Todos os direitos reservados.</span>
    <div className="flex items-center space-x-6">
      {items?.map(item => (
        <Link key={item.altText} className="flex-shrink-0" target="_blank" href={item.link}>
          <Image src={item.icon} width={27} height={16} alt={item.altText} />
        </Link>
      ))}
      </div>
  </footer>
  )
}