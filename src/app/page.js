// import Image from "next/image";
// import styles from "./page.module.css";
// // import Header from "@/components/header";
"use client";
import ArticleList from "@/components/articleList";
import { useState, useEffect } from "react";


export default function Home() {

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        if (!res.ok) {
          throw new Error(`Failed to fetch article`);
        }
        const data = await res.json();
        setArticle(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }

    fetchData();

  }, [])

  if (loading) return <p>loading...</p>
  if (error) return <p>Error: {error}</p>


  return (
    <main>
      <div>
        <h2>Learning Next.js</h2>
        {/* <Header></Header> */}
        {/* {article.map((a, id) => {
          <p key={id}>{a.title}</p>
        })} */}
        <ul>
        <ArticleList articles={article}/>
        </ul>
        </div>
    </main>
  );
}
