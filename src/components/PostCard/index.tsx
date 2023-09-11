import Image from "next/image";
import arrow_forward from "@/assets/arrow_forward.svg"
import photo_author from "@/assets/perfil.jpeg"
import { ChipTag } from "..";

export interface PostCardProps {
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  slug: string;
}
export default function PostCard(props: PostCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 min-h-[316px] bg-white dark:bg-[#1A202C] shadow-lg rounded-lg hover:bg-gray-100 dark:hover:bg-[#2D3748] hover:scale-105">
      <div  className="flex items-center gap-3 text-gray-700 dark:text-white">
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
      <div className="flex gap-2">
        <Image alt="icon arrow forward" src={arrow_forward}  width={24} height={24} className="w-6" />
        <span className="text-gray-700 dark:text-white dark font-semibold">Ler Mais</span>
      </div>
    </div>
  )
}