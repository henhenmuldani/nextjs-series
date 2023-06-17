import React, { useState } from "react";

const Search = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    const response = await fetch(`/api/users/search?query=${query}`);
    const users = await response.json();
    console.log(users);
    getSearchResults(users);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto text-slate-900 flex justify-end"
    >
      <input
        type="text"
        className="border-2 border-slate-900 rounded-md p-2"
        placeholder="Search User ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Search;
