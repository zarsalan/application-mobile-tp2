import express from "express";
const router = express.Router();

import GroceryItem from "../models/item.js";
import Category from "../models/item-category.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Fuse = require("fuse.js");
// -- REQUÊTE --------------------------------------------------------------------------
router.get("/get", async (req, res, next) => {
	try {
		const { categoryName, name } = req.query;

		let category;
		let groceryItems;

		// Obtention du catégorie
		if (categoryName) {
			category = await Category.findOne({
				name: categoryName,
			});

			if (!category) {
				return res.status(404).json({
					message: "Catégorie non trouvée",
				});
			}
		}

		// Obtention des items de la catégorie
		if (category) {
			groceryItems = await GroceryItem.find({
				_id: { $in: category.items },
			});
		} else {
			groceryItems = await GroceryItem.find();
		}

		if (!groceryItems || groceryItems.length === 0) {
			return res.status(404).json({
				message: "Aucun item trouvé",
			});
		}

		// Obtention des items par nom
		if (name) {
			const fuse = new Fuse(groceryItems, {
				keys: ["name"],
				threshold: 0.3,
			});
			groceryItems = fuse.search(name).map((result) => result.item);
		}

		if (!groceryItems || groceryItems.length === 0) {
			return res.status(404).json({
				message: "Aucun item trouvé",
			});
		}

		res.json(groceryItems);
	} catch (err) {
		next(err);
	}
});

export default router;
