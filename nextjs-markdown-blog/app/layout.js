import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container mx-auto max-w-3xl ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
