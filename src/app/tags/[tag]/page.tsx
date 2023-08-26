import Link from "next/link";
import { PostCard } from "@/components";
import { getPostMetadata } from "@/utils";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { tag } = params;

  return {
    props: {
      tag,
    },
  };
}

export default function TagPage(params: { params: { tag: string } }) {

  const { tag } = params?.params

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  )
}