import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

async function getPostData(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

const PostPage = async ({ params: { slug } }) => {
  const data = await getPostData(slug);
  //console.log(data.props);

  const {
    frontmatter: { title, date, cover_image },
    content,
  } = data.props;
  console.log(title, date, cover_image, content);

  return (
    <>
      <Link className="" href="/">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go Back
        </button>
      </Link>
      <div>
        <h1>{title}</h1>
        <div>Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
