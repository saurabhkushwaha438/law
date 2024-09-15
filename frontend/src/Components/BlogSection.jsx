import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Fix: Extract isAuthenticated from useAuth0 hook
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedBlog(null);
    setShow(false);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    const filteredBlogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };
  
  const handleUploadClick = () => {
    if (isAuthenticated) {
      navigate('/creatBlogForm');  // Navigate to the CreateBlog page
    } else {
      alert('You must be logged in to upload a blog!');  // Show alert message if not authenticated
    }
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          {/* Conditionally disable link if user is not authenticated */}
          <Link 
            to={isAuthenticated ? '/createblog' : '#'}  // Only navigate if authenticated
            className={`navbar-brand ${!isAuthenticated ? 'disabled-link' : ''}`}
            onClick={handleUploadClick}  // Handles click logic
            style={{ cursor: isAuthenticated ? 'pointer' : 'not-allowed' }}
          >
            <span className="p-2 btn btn-secondary">
              Upload
            </span>
          </Link>

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </nav>
    
      <div className="container">
        <div className="row">
          {blogs.map(blog => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={blog._id}>
              <div className="card h-100 d-flex flex-column" style={{ width: '100%' }}>
                <img
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  src={`http://localhost:3000/images/${blog.images}`}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">
                    {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
                  </p>
                  <button className="btn btn-secondary mt-auto" onClick={() => handleShow(blog)}>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {show && selectedBlog && (
        <div
          className="modal modal-fullscreen fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered"
            role="document"
            style={{ maxWidth: '90%' }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedBlog.title}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body d-flex flex-column align-items-center">
                <img
                  src={`http://localhost:3000/images/${selectedBlog.images}`}
                  alt={selectedBlog.title}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '20px',
                  }}
                />
                <div style={{ fontSize: '1.1rem', padding: '0 30px', textAlign: 'justify' }}>
                  {selectedBlog.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '15px' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogSection;
