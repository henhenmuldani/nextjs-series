import React from "react";

async function fetchRepoLists() {
  //bisa dibikin dinamis juga tinggal pake (id)
  await new Promise((resolve) => setTimeout(resolve, 3000)); //wait 3 second

  const response = await fetch("https://reqres.in/api/unknown", {
    next: {
      revalidate: 60,
    },
  });

  const repoLists = await response.json();
  return repoLists;
}

const RepoLists = async () => {
  //bisa dibikin dinamis juga tinggal pake (id)
  const repoLists = await fetchRepoLists(); //bisa dibikin dinamis juga tinggal pake (id)
  const lists = repoLists.data.filter((repoList) => repoList.year >= 2000);
  return (
    <div>
      <h3>RepoLists</h3>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <h3>{list.name}</h3>
            <p>{list.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoLists;
