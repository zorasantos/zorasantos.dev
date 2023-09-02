import Link from "next/link";
import { Breadcrumbs, PostCard } from "@/components";
import { getPostMetadata } from "@/utils";
import { Metadata } from "next/types";

type TagProps = {
  params: {
    tag: string
  }
}

export async function generateMetadata({ params }: TagProps): Promise<Metadata> {
  return {
    title: params?.tag,
    description: `Lista todos os artigos com a tag ${params?.tag}`
  }
}


export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  const tags = posts.map(item => item.tags).map(item => item);

  const uniqueTags = tags.reduce((acc, tags) => {
    tags?.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return uniqueTags.map(tag => ({
    tag,
  }));
}

export default function TagPage({ params }: TagProps) {

  const { tag } = params
  const posts = getPostMetadata();

  const filterPostsByTag = (tag: string) => {
    return posts.filter((post) => post.tags.includes(tag));
  }

  const result = filterPostsByTag(tag)

  const postPreviews = result?.map((post) => (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <PostCard {...post} />
    </Link>
  ));


  return (
    <div className="flex flex-col gap-10">
      <Breadcrumbs page="Tags" title={tag} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </div>
  )
}