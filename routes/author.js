const authorController = require("../controllers/authorController");

const router = require("express").Router();

// add author
router.post("/",authorController.addAuthor);

// get all authors
router.get("/", authorController.getAllAuthors);

//get an author
router.get("/:id", authorController.getAnAuthor);

// update author
router.put("/:id", authorController.updateAuthor);

// delete author
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;