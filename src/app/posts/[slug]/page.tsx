import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { getPostContent, getPostMetadata, getHeadings, scrollToTop, getTagsByPost } from "@/utils";
import { Breadcrumbs, Code, PostDetails, Tags } from "@/components";
import { CustomCode } from "@/CustomMarkdown";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts?.map((post: { slug: string; }) => ({
    slug: post?.slug,
  }));
}

export default async function Post(params: { params: { slug: string } }) {
  const { slug } = params?.params

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
        <article className="prose prose-img:mx-auto prose-img:aspect-auto prose-headings:text-primary text-lg mx-auto max-w-6xl md:max-w-full text-justify">
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
            <span className="text-[#556AF3] text-xl">Tabela de Conteúdos</span>
            <span onClick={scrollToTop} className="text-sm hover:text-[#556AF3] mb-2 cursor-pointer">Topo da página</span>
          {headings?.map(item => (
            <Link className="flex flex-col text-lg mb-2 hover:text-[#556AF3]" key={item.id} href={`#${item.id}`}>{item.title}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#556AF3] text-xl">Tags</span>
          <Tags tags={tags || []} />
        </div>
      </div>
    </div>
  )
}