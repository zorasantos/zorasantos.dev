import Link from "next/link";
import dynamic from "next/dynamic";

const ChipTag = dynamic(() => import("@/components/ChipTag"))

type ITagsProps = {
  tags: string[];
}

export default function Tags({ tags }: ITagsProps) {
  return (
    <span>
      {tags?.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={tag + index}>
          <ChipTag className="cursor-pointer">{tag}</ChipTag>
        </Link>
      ))}
    </span>
  )
}
