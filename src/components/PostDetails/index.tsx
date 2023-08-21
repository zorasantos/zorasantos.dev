import Image from "next/image";
import photo_author from "../../../public/perfil.jpeg"

interface PostDetailsProps {
  author: string;
  title: string;
  description: string;
  date: string;
}

export default function PostDetails({ author, date, description, title }: PostDetailsProps) {
  return (
  <div className="flex flex-col justify-between gap-6 mt-10 mb-14 min-h-[216px]">
    <h1 className="text-[#556AF3] text-4xl font-bold">{title}</h1>
    <h3 className="text-gray-700 text-[25px] font-normal">{description}</h3>
    <div className="flex justify-between items-center text-gray-700 font-thin text-[16px]">
      <div className="flex items-center gap-3">
        <Image alt="photo author" width={40} src={photo_author} className="h-auto max-w-full rounded-full" />
        <span>{author}</span>
      </div>
      <span>{date}</span>
    </div>
  </div>
  )
}