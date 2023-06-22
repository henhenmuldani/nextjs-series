import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="px-6 py-6 bg-blue-700 text-white">
        <Link href="/">
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
