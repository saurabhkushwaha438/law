import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://legaleyepartners.onrender.com/api/articles', {
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

  // Filter articles based on search query
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Articles</h2>

      {/* Search Bar */}
      <div className="mb-4 border border-dark">
        <input
          type="text"
          className="form-control"
          placeholder="Search by article title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search query
        />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className="list-group">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{article.title}</h5>
                  <small className="text-muted">Published on {new Date(article.createdAt).toLocaleDateString()}</small>
                </div>
                <a 
                  href={`${article.pdfUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View PDF
                </a>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center">
              No articles found.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Articles;
