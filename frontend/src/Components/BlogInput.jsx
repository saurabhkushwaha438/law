import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for styling

const CreateBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  //for article 

  const [articleTitle, setArticleTitle] = useState('');
  const [pdf, setPdf] = useState(null);
  const [articleMessage, setArticleMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('images', image);  // 'images' matches the multer field name

    try {
      const response = await axios.post('https://legaleyepartners.onrender.com/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Blog created successfully!');
      // Reset form fields
      setTitle('');
      setContent('');
      setImage(null);
    } catch (err) {
      setMessage('Error creating blog');
    }
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();

    const articleFormData = new FormData();
    articleFormData.append('title', articleTitle);
    articleFormData.append('pdf', pdf);  // 'pdf' for the uploaded article file

    try {
      const response = await axios.post('http://localhost:3000/api/articles', articleFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setArticleMessage('Article uploaded successfully!');
      // Reset article form fields
      setArticleTitle('');
      setPdf(null);
    } catch (err) {
      setArticleMessage('Error uploading article');
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-12">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Create a New Blog</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Title Input */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Blog Title</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  className="form-control" 
                  placeholder="Enter blog title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                />
              </div>
              
              {/* Content Input */}
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Blog Content</label>
                <textarea
                  id="content"
                  name="content"
                  className="form-control"
                  rows="5"
                  placeholder="Enter blog content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              
              {/* Image Upload */}
              <div className="mb-3">
                <label htmlFor="images" className="form-label">Upload Image</label>
                <input 
                  type="file" 
                  id="images" 
                  name="images" 
                  className="form-control" 
                  onChange={(e) => setImage(e.target.files[0])} 
                  required 
                />
              </div>
              
              {/* Submit Button */}
              <button type="submit" className="btn btn-secondary  w-100">Create Blog</button>
            </form>

            {/* Message */}
            {message && <p className="mt-3 alert alert-success text-center">{message}</p>}
          </div>
        </div>
      </div>
         {/* Article Upload Section */}
         <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-12">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Upload a New Article</h3>
            <form onSubmit={handleArticleSubmit} encType="multipart/form-data">
              {/* Article Title Input */}
              <div className="mb-3">
                <label htmlFor="articleTitle" className="form-label">Article Title</label>
                <input 
                  type="text" 
                  id="articleTitle" 
                  name="articleTitle" 
                  className="form-control" 
                  placeholder="Enter article title" 
                  value={articleTitle} 
                  onChange={(e) => setArticleTitle(e.target.value)} 
                  required 
                />
              </div>
              
              {/* PDF Upload */}
              <div className="mb-3">
                <label htmlFor="pdf" className="form-label">Upload PDF</label>
                <input 
                  type="file" 
                  id="pdf" 
                  name="pdf" 
                  className="form-control" 
                  onChange={(e) => setPdf(e.target.files[0])} 
                  accept="application/pdf"
                  required 
                />
              </div>
              
              {/* Submit Article Button */}
              <button type="submit" className="btn btn-secondary w-100">Upload Article</button>
            </form>

            {/* Article Message */}
            {articleMessage && <p className="mt-3 alert alert-success text-center">{articleMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
