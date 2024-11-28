import express from "express";
const router = express.Router();

import GroceryItem from "../models/item.js";
import Category from "../models/item-category.js";
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

		// Obtention des items
		if (category && name) {
			groceryItems = await GroceryItem.find({ category, name });
		} else if (category) {
			groceryItems = await GroceryItem.find({
				category,
			});
		} else if (name) {
			groceryItems = await GroceryItem.find({
				name,
			});
		}

		if (!groceryItems) {
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
