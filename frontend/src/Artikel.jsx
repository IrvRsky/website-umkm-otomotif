import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Artikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://stirred-guided-bullfrog.ngrok-free.app/artikel');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching the articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.artikel_id}>
            <h2>{article.judul}</h2>
            <p>{article.deskripsi_artikel}</p>
            <p>By: {article.penulis} on {new Date(article.tgl).toLocaleDateString()}</p>
            {article.gambar && <img src={`path/to/your/images/${article.gambar}`} alt={article.judul} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artikel;
