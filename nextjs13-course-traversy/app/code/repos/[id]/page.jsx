import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoLists from "@/app/components/RepoLists";

const RepoPage = ({ params: { id } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading List...</div>}>
        <RepoLists />
      </Suspense>
    </div>
  );
};

export default RepoPage;
