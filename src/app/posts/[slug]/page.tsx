import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";
import { Breadcrumbs } from "@/components";

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
    <>
      <Breadcrumbs page="Blog" title={post?.data?.title} />
      <article className="prose text-lg mx-auto max-w-6xl md:max-w-full text-justify">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  )
}