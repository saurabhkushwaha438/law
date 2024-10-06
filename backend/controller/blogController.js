import Blog from '../models/blogModel.js';

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    } else if (error.request) {
      console.error("No response from server:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Check if an image is uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required.' });
    }

    const imageFilename = req.file.filename;  // Store the filename, not the full path

    const newBlog = new Blog({
      title,
      content,
      images:imageFilename  // Store the filename in MongoDB
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Error creating blog', details: error.message });
  }
};
