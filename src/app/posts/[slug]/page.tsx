import dynamic from "next/dynamic"
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata, getHeadings, scrollToTop, getTagsByPost, handleKeyUp } from "@/utils";
import { CustomCode } from "@/CustomMarkdown";

const Breadcrumbs = dynamic(() => import("@/components/Breadcrumbs"))
const Code = dynamic(() => import("@/components/Code"))
const PostDetails = dynamic(() => import("@/components/PostDetails"))
const Markdown = dynamic(() => import("markdown-to-jsx"))
const Tags = dynamic(() => import("@/components/Tags"))

type SlugProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: SlugProps): Promise<Metadata> {
  const posts = getPostMetadata();
  const meta = posts.find(item => item.slug === params.slug)

  return {
    title: meta?.title,
    description: meta?.description
  }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts?.map((post: { slug: string; }) => ({
    slug: post?.slug,
  }));
}

export default async function Post({ params }: SlugProps) {
  const { slug } = params

  const post = getPostContent(slug)
  const headings = getHeadings(slug)
  const tags = getTagsByPost(slug)

  if(!post) {
    return notFound()
  }


  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full md:col-span-8 row-span-full">
        <Breadcrumbs page="Blog" title={post?.data?.title} />
        <PostDetails author={post?.data?.author} publishedAt={post?.data?.publishedAt} description={post?.data?.description} title={post?.data?.title}/>
        <article role="main" className="prose prose-img:mx-auto prose-img:aspect-auto prose-headings:text-primary dark:prose-a:text-white prose-p:text-lg prose-ol:text-lg mx-auto max-w-6xl md:max-w-full text-justify">
          <Markdown options={{
            overrides: {
              code: {
                component: CustomCode,
                props: {
                  className: "text-sm font-semibold bg-gray-200 p-1 rounded-md dark:bg-[#2D3748] dark:text-[#FDBA74]"
                }
              },
              Code: {
                component: Code
              }
            }
          }}>{post.content}</Markdown>
        </article>
      </div>
      <div className="hidden sticky top-96 space-y-4 h-[100dvh] md:block flex-col col-start-10 col-end-13">
          <div className="flex flex-col gap-2">
            <span className="text-primary dark:text-primary-dark text-xl font-semibold">Tabela de Conteúdos</span>
            <span data-cy="page-top" tabIndex={0} onClick={scrollToTop} onKeyUp={handleKeyUp} className="text-base hover:text-primary dark:hover:text-primary-dark mb-2 cursor-pointer">Topo da página</span>
          {headings?.map(item => (
            <Link className="flex flex-col text-lg mb-2 hover:text-primary dark:hover:text-primary-dark" key={item.id} href={`#${item.id}`}>{item.title}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-primary dark:text-primary-dark text-xl">Tags</span>
          <Tags tags={tags || []} />
        </div>
      </div>
    </div>
  )
}