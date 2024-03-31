// Ashish Nagpal
const express = require('express');
const bookController = require('../controllers/books');

const router = express.Router();

// API to fetch all books
router.get('/all', bookController.getAllBooks);

router.get('/genres', bookController.getAllGenres);

router.get('/authors', bookController.getAllAuthors);

module.exports = router;
