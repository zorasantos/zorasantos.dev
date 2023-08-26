import Link from "next/link";

interface ITagsProps {
  tags: string[];
}

export default function Tags({ tags }: ITagsProps) {
  return (
    <span>
      {tags?.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={tag + index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 mr-2 mb-2 cursor-pointer hover:text-[#85F3E2]">{tag}</Link>
      ))}
    </span>
  )
}
