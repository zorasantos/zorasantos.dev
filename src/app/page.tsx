import PostCard from "@/components/PostCard";
import { getPostMetadata } from "@/utils";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Zoranildo Santos',
  description: 'Site pessoal do engenheiro de software Zoranildo Santos',
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
