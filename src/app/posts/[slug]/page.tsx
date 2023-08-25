import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";
import { Breadcrumbs, Code, PostDetails } from "@/components";
import { artigo1, artigo2 } from "@/utils/headings";
import Link from "next/link";
import { scrollToTop } from "@/utils/scrollToTop";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts?.map((post: { slug: any; }) => ({
    slug: post?.slug,
  }));
}

export default async function Post(params: { params: { slug: string } }) {
  const { slug } = params?.params
  const post = getPostContent(slug)

  const result = { 'api-node-desacoplada-parte-01':  artigo1, "api-node-desacoplada-parte-02": artigo2  }[slug]

  if(!post) {
    return notFound()
  }

  return (
    <div className="grid grid-cols-12">
      {/* <Head>
        <title>{post?.data?.title}</title>
        <meta name='title' content={`Post - ${post?.data?.title}`}/>
        <meta name='description' content={post?.data?.description} />
        <meta property="og:title" content="My page title" key="title" />
      </Head> */}
      <div className="col-span-full md:col-span-8 row-span-full">
        <Breadcrumbs page="Blog" title={post?.data?.title} />
        <PostDetails author={post?.data?.author} date={post?.data?.date} description={post?.data?.description} title={post?.data?.title}/>
        <article className="prose prose-img:mx-auto prose-img:aspect-auto prose-headings:text-[#556AF3] text-lg mx-auto max-w-6xl md:max-w-full text-justify">
          <Markdown options={{
            overrides: {
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
          {result?.map(item => (
            <Link className="flex flex-col text-lg mb-2 hover:text-[#556AF3]" key={item.id} href={`#${item.id}`}>{item.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}