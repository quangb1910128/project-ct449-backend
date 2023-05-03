const {Author, Book} = require("../model/model");

const authorController = {
    // add author
    addAuthor: async(req, res)=>{
        try{
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // get all authors
    getAllAuthors: async(req, res)=>{
        try{
            const authors = await Author.find().populate("books");
            res.status(200).json(authors);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //get an author
    getAnAuthor: async(req, res)=>{
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (err) {
            res.status(500).json(arr);
        }
    },
    //update book
    updateAuthor: async (req, res)=>{
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({$set: req.body});
            res.status(200).json("Update successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //delete author
    deleteAuthor: async (req, res)=>{
        try {
            await Book.updateMany({author: req.params.id},{author:null });
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = authorController;