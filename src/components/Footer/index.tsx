import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@/assets/linkedin.svg"
import GithubIcon from "@/assets/github.svg"
import YoutubeIcon from "@/assets/youtube.svg"

export default function Footer() {
  return (
  <footer className="sticky top-[100vh] flex justify-between border-t-2 bottom-0 left-0 items-center w-full h-32 mt-10">
    <span>© {new Date().getFullYear()}, <span className="text-[#556AF3]">Zoranildo Santos</span>. Todos os direitos reservados.</span>
    <div className="flex items-center space-x-6">
        <Link className="flex-shrink-0" target="_blank" href="https://www.linkedin.com/in/zoranildosantos/">
          <Image src={LinkedinIcon} width={27} height={16} alt="Linkedin Icon" />
        </Link>
        <Link className="flex-shrink-0" target="_blank" href="https://github.com/ZoraSantos">
          <Image src={GithubIcon} width={27} height={16} alt="Github Icon" />
        </Link>
        <Link className="flex-shrink-0" target="_blank" href="https://www.youtube.com/@MrZoranildo">
          <Image src={YoutubeIcon} width={27} height={16} alt="Youtube Icon" />
        </Link>
      </div>
  </footer>
  )
}