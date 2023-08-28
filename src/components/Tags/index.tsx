import Link from "next/link";
import { ChipTag } from "..";

interface ITagsProps {
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
