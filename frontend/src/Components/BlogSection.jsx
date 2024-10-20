import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]); // Original blogs list
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Filtered blogs for display
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://legaleyepartners.onrender.com/api/blogs');
        setBlogs(response.data);
        setFilteredBlogs(response.data); // Initialize filtered blogs with original blogs
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
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered); // Update filtered blogs state
  };
  
  const handleUploadClick = () => {
    if (isAuthenticated) {
      if (user.email === 'legal.eye.serv@gmail.com') {
        navigate('/createblog');
      } else {
        alert('Only admin can upload!');
      }
    } else {
      alert('You must be logged in to upload a blog!');
    }
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link 
            to={isAuthenticated ? '/createblog' : '#'}
            className={`navbar-brand ${!isAuthenticated ? 'disabled-link' : ''}`}
            onClick={handleUploadClick}
            style={{ cursor: isAuthenticated ? 'pointer' : 'not-allowed' }}
          >
            <span className="p-2 btn btn-secondary">Upload</span>
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
          {filteredBlogs.map(blog => ( // Display filtered blogs
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={blog._id}>
              <div className="card h-100 d-flex flex-column" style={{ width: '100%' }}>
                <img
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  src={`${blog.images}`}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">
                    {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
                  </p>
                  <small className="text-muted">Published on {new Date(blog.createdAt).toLocaleDateString()}</small>

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
                  src={`${selectedBlog.images}`}
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
