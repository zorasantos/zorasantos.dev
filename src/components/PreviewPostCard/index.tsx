import Link from "next/link";
import { PostCard } from "..";
import { PostCardProps } from "../PostCard";

interface PreviewPostCardProps extends PostCardProps {}

export default function PreviewPostCard(props: PreviewPostCardProps) {
  return (
    <Link id={props.slug} key={props.slug} href={`/posts/${props.slug}`}>
      <PostCard {...props} />
    </Link>
  )
}