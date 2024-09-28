import Article from '../models/articleModel.js';

export const createArticle = async (req, res) => {
    try {
        const { title } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ error: "No PDF file uploaded" });
        }

        const pdfUrl =req.file.filename

        const newArticle = new Article({
            title,
            pdfUrl
        });

        console.log("Article to be saved:", newArticle);

        const savedArticle = await newArticle.save();
        console.log("Saved article in DB:", savedArticle);

        res.status(201).json(savedArticle);
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ error: "Error creating article", details: error.message });
    }
};


export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching articles' });
    }
};