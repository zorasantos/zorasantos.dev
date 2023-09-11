import dynamic from "next/dynamic"
import { Metadata } from "next/types";
import { getPostMetadata } from "@/utils";

const PreviewPostCard = dynamic(() => import("@/components/PreviewPostCard"))

export const metadata: Metadata = {
  description:  'Site pessoal do engenheiro de software Zoranildo Santos'
}

export default function Home() {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata?.map((post) => (
    <PreviewPostCard key={post.slug} { ...post } />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">{postPreviews}</div>
  )
}
