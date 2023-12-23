import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const key = import.meta.env.VITE_NEWS_API_KEY
    ? import.meta.env.VITE_NEWS_API_KEY
    : "bcddef95f8d045a3b53443a5463c2411";
  console.log(key);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="text-center badge bg-dark">News</span>
      </h2>
      {articles.map((news, idx) => {
        return (
          <NewsItem
            key={idx}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            publishTime={news.publishedAt}
            author={news.author}
            content={news.content}
            source={news.source.name}
            sourceUrl={news.url}
          />
        );
      })}
    </div>
  );
};
