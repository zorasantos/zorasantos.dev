import Image from "next/image";
import dynamic from "next/dynamic";
import photo_author from "@/assets/perfil.jpeg"

const ChipTag = dynamic(() => import("@/components/ChipTag"))
const ReadMore = dynamic(() => import("@/components/ReadMore"))

export type PostCardProps = {
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  slug: string;
}

export default function PostCard(props: PostCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 min-h-[354px] bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-gray-100 dark:hover:bg-[#2D3748] hover:scale-105">
      <div  className="flex items-center gap-3 dark:text-white">
        <Image alt="photo author" width={30} height={30} src={photo_author} className="h-auto max-w-full rounded-full" />
        <span aria-label="Data de publicação">{props.publishedAt}</span>
      </div>
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <p aria-label="Descrição" className="font-normal line-clamp-2">{props.description}</p>
      <div aria-label="Lista de tags">
        {props?.tags.map((tag, index) => (
          <ChipTag key={tag + index}>{tag}</ChipTag>
        ))}
      </div>
      <ReadMore text="Ler mais" />
    </div>
  )
}