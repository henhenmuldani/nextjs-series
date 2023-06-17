"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Login />
      <Toaster />

      {/* <header className="bg-yellow-300 p-5">
        <h1 className="text-2xl md:text-4xl">Header</h1>
      </header>

      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Main Content</h1>
        </div>
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
      </div>

      <footer className="bg-slate-800 mt-auto p-5">
        <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
      </footer> */}
    </main>
  );
}
