import Blog from '../models/blogModel.js';

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;  // Use imageUrl from the request

    // Ensure title and content are provided
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    // Ensure imageUrl is provided
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required.' });
    }

    // Create the new blog with the Cloudinary image URL
    const newBlog = new Blog({
      title,
      content,
      images: imageUrl  // Store the Cloudinary image URL in MongoDB
    });

    await newBlog.save();
    res.status(201).json(newBlog);

  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Error creating blog', details: error.message });
  }
};
