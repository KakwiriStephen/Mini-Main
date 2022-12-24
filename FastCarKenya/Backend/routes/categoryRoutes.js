const categoryController = require("../controllers/categoryController");

const express = require("express");

const router = express.Router();

router.post("/create", categoryController.addCategory);
router.get("/categories", categoryController.getCategories);

module.exports = router;
