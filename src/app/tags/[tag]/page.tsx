import Link from "next/link";
import { PostCard } from "@/components";
import { getPostMetadata } from "@/utils";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "node:querystring";

interface ITagProps extends ParsedUrlQuery {
  tag: string;
}

const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { tag } = params as ITagProps;

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