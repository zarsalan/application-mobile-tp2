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
			}).populate([
				{
					path: "category",
					select: "name description",
				},
				{
					path: "ingredients.item",
					select: "name description",
				},
			]);
		} else {
			recipes = await Recipe.find().populate([
				{
					path: "category",
					select: "name description",
				},
				{
					path: "ingredients.item",
					select: "name description",
				},
			]);
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

router.get("/get/:id", async (req, res, next) => {
	try {
		const recipe = await Recipe.findById(req.params.id);
		if (!recipe) {
			console.log("Recette non trouvée: ", req.params.id);
			return res.status(404).json({
				message: "Recette non trouvée",
			});
		}

		await recipe.populate([
			{
				path: "category",
				select: "name description",
			},
			{
				path: "ingredients.item",
				select: "name description",
			},
		]);
		res.json(recipe);
	} catch (err) {
		next(err);
	}
});

router.get("/get-recipes", async (req, res, next) => {
	try {
		const ids = req.query.ids;

		let recipes;
		if (ids) {
			recipes = await Recipe.find({
				_id: { $in: ids },
			}).populate([
				{
					path: "category",
					select: "name description",
				},
				{
					path: "ingredients.item",
					select: "name description",
				},
			]);
		} else {
			recipes = await Recipe.find().populate([
				{
					path: "category",
					select: "name description",
				},
				{
					path: "ingredients.item",
					select: "name description",
				},
			]);
		}

		if (!recipes || recipes.length === 0) {
			return res.status(404).json({
				message: "Aucune recette trouvée",
			});
		}

		res.json(recipes);
	} catch (err) {
		next(err);
	}
});

router.get("/get-categories", async (req, res, next) => {
	try {
		const categories = await Category.find();
		categories.sort((a, b) => a.name.localeCompare(b.name));
		res.json(categories);
	} catch (err) {
		next(err);
	}
});

export default router;
