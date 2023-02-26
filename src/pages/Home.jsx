import React, { useState, useEffect } from "react";

const Home = () => {
  let [news, setNews] = useState([]);
  let [primaryPost, setPrimaryPost] = useState([]);

  useEffect(() => {
    getNews();
    getPrimaryPost();
  }, []);

  useEffect(() => {
    console.log(news);
    console.log(primaryPost);
  }, [news, primaryPost]);

  const BASE_URL = "https://admin.ikar-thinktank.org/api";
  const getNews = async () => {
    await fetch(`${BASE_URL}/news`)
      .then((response) => response.json())
      .then((res) => {
        const CLEARED_DATA = res.data.map((item) => {
          return {
            id: item.id,
            ...item.attributes,
          };
        });
        setNews(CLEARED_DATA);
      });
  };

  const getPrimaryPost = async () => {
    await fetch(`${BASE_URL}/primary-post`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        // const CLEARED_DATA = res.data.map((item) => {
        //   return {
        //     id: item.id,
        //     ...item.attributes,
        //   };
        // });
        // setPrimaryPost(CLEARED_DATA);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <>
      <div>Home</div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        );
      })}
      <div>
        {primaryPost.map((item) =>{
          
        })}
      </div>
    </>
  );
};

export default Home;