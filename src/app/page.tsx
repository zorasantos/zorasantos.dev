import PostCard from "@/components/PostCard";
import { getPostMetadata } from "@/utils";
import Link from "next/link";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <PostCard {...post} />
    </Link>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  )
}
