import express from "express";
const router = express.Router();

import Recipe from "../models/recipe.js";
import Category from "../models/recipe-category.js";
// -- REQUÊTE --------------------------------------------------------------------------
router.get("/get", async (req, res, next) => {
	try {
		const { categoryName, name } = req.query;

		let category;
		let recipes;

		// Obtention du catégorie
		if (categoryName) {
			category = await Category.findOne({
				name: categoryName,
			});

			if (!category) {
				console.log("Catégorie non trouvée: ", categoryName);
				return res.status(404).json({
					message: "Catégorie non trouvée",
				});
			}
		}

		// Obtention des recettes
		if (category && name) {
			recipes = await Recipe.find({
				_id: { $in: category.recipes },
				name: name,
			});
		} else if (category) {
			recipes = await category.populate("recipes");
		} else if (name) {
			recipes = await Recipe.find({
				name,
			});
		} else {
			recipes = await Recipe.find();
			const count = await Recipe.countDocuments();
		}

		if (!recipes || recipes.length === 0) {
			return res.status(404).json({
				message: "Aucun item trouvé",
			});
		}

		res.json(recipes);
	} catch (err) {
		next(err);
	}
});

export default router;
