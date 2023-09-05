import fs from "fs";
import matter from "gray-matter";

interface PortfolioMetadata {
  title: string;
  description: string;
  slug: string;
}


export const getPortfolioMetadata = (): PortfolioMetadata[] => {
  const folder = "./src/portfolioMD/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`./src/portfolioMD/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};
