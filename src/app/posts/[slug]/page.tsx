import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from "@/utils";
import Markdown from "markdown-to-jsx";
import { Breadcrumbs, Code, PostDetails } from "@/components";
import { artigo1, artigo2 } from "@/utils/headings";
import Link from "next/link";

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

  console.log("result", result)

  if(!post) {
    return notFound()
  }

  return (
    <div className="grid grid-cols-12">
      {/* <head>
        <title>{post?.data?.title}</title>
        <meta name='title' content={`Post - ${post?.data?.title}`}/>
        <meta name='description' content={post?.data?.description} />
      </head> */}
      <div className="col-span-8">
        <Breadcrumbs page="Blog" title={post?.data?.title} />
        <PostDetails author={post?.data?.author} date={post?.data?.date} description={post?.data?.description} title={post?.data?.title}/>
        <article className="prose prose-img:mx-auto prose-headings:text-[#556AF3] text-lg mx-auto max-w-6xl md:max-w-full text-justify">
          <Markdown options={{
            overrides: {
              Code: {
                component: Code
              }
            }
          }}>{post.content}</Markdown>
        </article>
      </div>
      {/* Criar component para mobile e desktop */}
      <div className="flex flex-col col-start-10 col-end-13">
        <span className="text-[#556AF3] text-xl">Tabela de Conteúdos</span>
        <span className="text-sm hover:text-[#556AF3]">Topo da página</span>
        {result?.map(item => (
          <Link className="flex flex-col text-lg gap-6 hover:text-[#556AF3]" key={item.id} href={`#${item.id}`}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}