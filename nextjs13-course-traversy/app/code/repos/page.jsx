import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

async function fetchRepos() {
  const response = await fetch("https://reqres.in/api/users", {
    next: {
      revalidate: 60,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 second

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="repos-container">
      <h1>Repository Name</h1>
      <br />
      <ul className="repo-list">
        {repos.data.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.id}`}>
              <Image src={repo.avatar} alt="profile" width={100} height={100} />
              <h3>{repo.first_name}</h3>
              <p>{repo.email}</p>
              <div className="repo-details">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaCodeBranch />
                </span>
                <span>
                  <FaEye />
                </span>
              </div>
              <br />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
