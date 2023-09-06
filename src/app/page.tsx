import dynamic from "next/dynamic"
import { Metadata } from "next/types";
import Link from "next/link";
import { getPostMetadata } from "@/utils";

const PostCard = dynamic(() => import("@/components/PostCard"))

export const metadata: Metadata = {
  description:  'Site pessoal do engenheiro de software Zoranildo Santos'
}

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <PostCard {...post} />
    </Link>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">{postPreviews}</div>
  )
}
