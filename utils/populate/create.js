import ItemCategory from "../../models/item-category.js";
import RecipeCategory from "../../models/recipe-category.js";
import Item from "../../models/item.js";
import Recipe from "../../models/recipe.js";

import { getItemCategory, getRecipeCategory, getItem } from "./get.js";

export async function createItemCategory(category) {
	await ItemCategory.create({
		name: category.name,
		description: category.description,
	});
}

export async function createRecipeCategory(category) {
	await RecipeCategory.create({
		name: category.name,
		description: category.description,
	});
}

export async function createItem(item) {
	const category = await getItemCategory(item.category);

	item = await Item.create({
		category: category._id,
		name: item.name,
		description: item.description,
	});

	console.log("Ajout de l'item: ", item.name);

	category.items.push(item._id);
	await category.save();
}

export async function createRecipe(recipe) {
	if (await Recipe.findOne({ name: recipe.name })) {
		console.log("La recette existe déjà: ", recipe.name);
		return;
	}

	const category = await getRecipeCategory(recipe.category);

	const ingredients = [];
	for (const ingredient of recipe.ingredients) {
		const item = await getItem(ingredient.name, ingredient.category);
		ingredients.push({
			item: item._id,
			quantity: ingredient.quantity,
		});
	}

	recipe = await Recipe.create({
		name: recipe.name,
		description: recipe.description,
		ingredients: ingredients,
		steps: recipe.steps,
		category: category._id,
	});

	console.log("Ajout de la recette: ", recipe.name);

	category.recipes.push(recipe._id);
	await category.save();
}
