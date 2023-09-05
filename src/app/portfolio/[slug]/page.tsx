import { Breadcrumbs } from "@/components";
import { getPortfolioContent, getPortfolioMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";

type SlugProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: SlugProps): Promise<Metadata> {
  const items = getPortfolioMetadata();
  const meta = items.find(item => item.slug === params.slug)

  return {
    title: meta?.title,
    description: meta?.description
  }
}

export const generateStaticParams = async () => {
  const items = getPortfolioMetadata();

  return items?.map((item: { slug: string; }) => ({
    slug: item?.slug,
  }));
}

export default async function PortfolioPage({ params }: SlugProps) {
  const { slug } = params

  const post = getPortfolioContent(slug)

  if(!post) {
    return notFound()
  }

  return (
    <div>
      <Breadcrumbs page="Portfolio" title={post?.data?.title} />
      <article role="main" className="prose prose-headings:text-primary dark:prose-a:text-white prose-p:text-lg prose-ol:text-lg mx-auto max-w-6xl md:max-w-full text-justify">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}