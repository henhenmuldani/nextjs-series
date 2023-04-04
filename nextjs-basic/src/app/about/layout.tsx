import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main>{children}</main>
    </>
  );
}
