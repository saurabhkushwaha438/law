import Blog from '../models/blogModel.js';

// Get all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);  // Log the error
        res.status(500).json({ error: 'Error fetching blogs' });    }
};

// Create a new blog
export const createBlog = async (req, res) => {
    const { title, content } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
    
    try {
        const newBlog = new Blog({ title, content, images });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog' });
    }
};
