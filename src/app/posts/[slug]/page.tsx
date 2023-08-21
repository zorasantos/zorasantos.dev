import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts?.map((post: { slug: any; }) => ({
    slug: post?.slug,
  }));
}

export default async function Post(params: { params: { slug: string } }) {
  const { slug } = params?.params
  const post = getPostContent(slug)

  if(!post) {
    return notFound()
  }

  return (
    <article className="prose text-lg mx-auto max-w-6xl text-justify">
      <Markdown>{post.content}</Markdown>
    </article>
  )
}