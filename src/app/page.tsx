import PostCard from "@/components/PostCard";
import { getPostMetadata } from "@/utils";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostCard key={post.slug} {...post} />
  ));
  return (
    <div className="px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </div>
  )
}
