import ItemCategory from "../../models/item-category.js";
import Item from "../../models/item.js";
import RecipeCategory from "../../models/recipe-category.js";
import Recipe from "../../models/recipe.js";

import itemCategories from "../../datas/item-categories.js";
import items from "../../datas/items.js";
import recipeCategories from "../../datas/recipe-categories.js";
import recipes from "../../datas/recipes.js";

import {
	createItemCategory,
	createRecipeCategory,
	createItem,
	createRecipe,
} from "./create.js";

async function populateCategories() {
	console.log("Ajout des catégories...");
	await ItemCategory.deleteMany();
	await ItemCategory.collection.dropIndexes();

	for (const category of itemCategories) {
		await createItemCategory(category);
	}

	await RecipeCategory.deleteMany();
	for (const category of recipeCategories) {
		await createRecipeCategory(category);
	}
	console.log("Catégories ajoutées avec succès!");
}

async function populateGroceryItems() {
	console.log("Ajout des items...");
	await Item.deleteMany();
	await Item.collection.dropIndexes();

	for (const item of items) {
		await createItem(item);
	}
	console.log("Items ajoutés avec succès!");
}

async function populateRecipes() {
	console.log("Ajout des recettes...");
	await Recipe.deleteMany();
	await Recipe.collection.dropIndexes();

	// Verify that the collection is empty
	const count = await Recipe.countDocuments();
	console.log(`Document count after deletion: ${count}`);

	// Verify that no indexes exist except _id
	const indexes = await Recipe.collection.indexes();
	console.log("Indexes after dropping:", indexes);

	for (const recipe of recipes) {
		await createRecipe(recipe);
	}
	console.log("Recettes ajoutées avec succès!");
}

export default async function populate() {
	await populateCategories();
	await populateGroceryItems();
	await populateRecipes();

	console.log("Les données ont été ajoutés avec succès!");
}
