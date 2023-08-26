import { getPostMetadata } from ".";

export const getTagsByPost = (slug: string) => {
  const metadata = getPostMetadata();

  const tags = metadata.find(item => item.slug === slug)?.tags

  return tags;
}