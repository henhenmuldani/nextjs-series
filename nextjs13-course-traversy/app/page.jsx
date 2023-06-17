"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Users from "./components/Users";
import LoadingPage from "./loading";
import Search from "./components/Search";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome</h1>
      <Search getSearchResults={(results) => setUsers(results)} />
      <Users users={users} />
      {/* <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul> */}
    </>
  );
};

export default HomePage;
