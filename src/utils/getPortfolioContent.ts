import fs from "fs";
import matter from "gray-matter";

export const getPortfolioContent = (slug: string) => {
  const folder = "./src/portfolioMD/";
  const file = `${folder}${slug}.md`;
  const fileExists = fs.existsSync(file);

  if(fileExists) {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;

  } else {
    return null
  }
};