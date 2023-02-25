import React, { useState } from 'react'

const Home = () => {
  let [news, setNews] = useState([]);

  const BASE_URL = 'https://admin.ikar-thinktank.org/api';
  const getNews = () => {
    fetch(`${BASE_URL}/news`)
      .then(response => response.json())
      .then(data => {
        setNews(data);
      })
  }
  return (
    <>

      <div>Home</div>
    </>
  )
}

export default Home