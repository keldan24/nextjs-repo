import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import styles from "@/styles/layout.module.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Next.js",
  description: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
