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
    try {
        const { title, content } = req.body;
        const imagePath = req.file ? `/images/${req.file.filename}` : null;

        if (!imagePath) {
            return res.status(400).json({ error: 'Image file is required.' });
        }

        const newBlog = new Blog({ title, content, images: imagePath });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Error creating blog', details: error.message });
    }
};

