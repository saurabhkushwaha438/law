import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles',{
          referrerPolicy: 'no-referrer',
          mode: 'no-cors',
        });
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Articles</h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className="list-group">
          {articles.map(article => (
            <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{article.title}</h5>
                <small className="text-muted">Published on {new Date(article.createdAt).toLocaleDateString()}</small>
              </div>
              <a 
                href={` https://legaleyepartners.onrender.com/pdfs/${article.pdfUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View PDF
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Articles;
