// src/components/BlogSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const BlogCard = ({ title, description, imageUrl }) => {
    return (
      <div className="blog-card">
        <img src={imageUrl} alt={title} className="blog-card-image" />
        <div className="blog-card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          title={blog.title}
          description={blog.description}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default BlogSection;
