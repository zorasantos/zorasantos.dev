import Image from "next/image";
import photo_author from "@/assets/perfil.jpeg"

type PostDetailsProps = {
  author: string;
  title: string;
  description: string;
  publishedAt: string;
}

export default function PostDetails({ author, publishedAt, description, title }: PostDetailsProps) {
  return (
  <div className="flex flex-col justify-between gap-6 mt-10 mb-14 min-h-[216px]">
    <h1 className="text-5xl font-bold">{title}</h1>
    <p aria-label="Descrição" className="text-2xl font-normal">{description}</p>
    <div className="flex justify-between items-center font-normal text-[16px]">
      <div className="flex items-center gap-3">
        <Image alt="photo author" width={40} height={40} src={photo_author} className="h-auto max-w-full rounded-full" />
        <span>{author}</span>
      </div>
      <span aria-label="Data de publicação">{publishedAt}</span>
    </div>
  </div>
  )
}