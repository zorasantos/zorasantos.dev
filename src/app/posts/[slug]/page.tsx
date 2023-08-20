import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";

type Post = {
  id: number,
  title: string,
  content: string,
  slug: string
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts?.map((post: { slug: any; }) => ({
    slug: post?.slug,
  }));
}

export default async function Post(params: any) {
  const { slug } = params?.params
  const post = getPostContent(slug)

  if(!post) {
    return notFound()
  }

  return (
    <article className="prose text-lg">
      <Markdown>{post.content}</Markdown>
    </article>
  )
}