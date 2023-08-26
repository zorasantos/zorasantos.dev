import Image from "next/image";
import arrow_forward from "@/assets/arrow_forward.svg"
import photo_author from "@/assets/perfil.jpeg"

interface PostCardProps {
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  slug: string;
}
export default function PostCard(props: PostCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 min-h-[316px] bg-white shadow-lg rounded-lg hover:bg-gray-100 hover:scale-105">
      <div  className="flex items-center gap-3 text-gray-700">
        <Image alt="photo author" width={30} src={photo_author} className="h-auto max-w-full rounded-full" />
        <span>{props.publishedAt}</span>
      </div>
      <h3 className="text-[#556AF3] text-2xl font-bold">{props.title}</h3>
      <p className="text-gray-700 font-thin line-clamp-2">{props.description}</p>
      <div>
        {props.tags.map((tag, index) => (
          <p key={tag + index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 mr-2 mb-2">{tag}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <Image alt="icon arrow forward" src={arrow_forward} className="w-6" />
        <span className="text-gray-700 font-semibold">Ler Mais</span>
      </div>
    </div>
  )
}