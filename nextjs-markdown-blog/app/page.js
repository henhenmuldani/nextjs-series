import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post";
import { sortByDate } from "../utils";

async function getData() {
  //Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    //Create slug
    const slug = filename.replace(".md", "");

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  //console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default async function Home() {
  const data = await getData();
  //console.log(data);
  /* 
  The logs will only show in your terminal if you use console.log in your Node.js or Next.js server-side code.
  */

  const { posts } = data.props;
  //console.log(posts);
  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
          // <div key={index}>
          //   <h3>{post.frontmatter.title}</h3>
          // </div>
        ))}
      </div>
    </main>
  );
}
