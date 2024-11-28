import express from "express";
const router = express.Router();

import Recipe from "../models/recipe.js";
import Category from "../models/recipe-category.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Fuse = require("fuse.js");
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

		// Obtention des recettes de la catégorie
		if (category) {
			recipes = await Recipe.find({
				_id: { $in: category.recipes },
			});
		} else {
			recipes = await Recipe.find();
		}

		if (!recipes || recipes.length === 0) {
			console.log("Aucun item trouvé");
			return res.status(404).json({
				message: "Aucun item trouvé",
			});
		}

		// Obtention des recettes par nom
		if (name) {
			const fuse = new Fuse(recipes, {
				keys: ["name"],
				threshold: 0.3,
			});
			recipes = fuse.search(name).map((result) => result.item);
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
