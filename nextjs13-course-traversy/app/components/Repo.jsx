import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

async function fetchRepo(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  //await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 second

  const repo = await response.json();
  return repo;
}

const Repo = async ({ id }) => {
  const repo = await fetchRepo(id);
  console.log(repo);

  return (
    <div>
      <Image src={repo.data.avatar} alt="profile" width={100} height={100} />
      <h3>{repo.data.first_name}</h3>
      <p>{repo.data.email}</p>
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
    </div>
  );
};

export default Repo;
