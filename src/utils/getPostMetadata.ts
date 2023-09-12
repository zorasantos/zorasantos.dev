import fs from "fs";
import matter from "gray-matter";

type PostMetadata = {
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  slug: string;
}


export const getPostMetadata = (): PostMetadata[] => {
  const folder = "./src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`./src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      publishedAt: matterResult.data.publishedAt,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};
