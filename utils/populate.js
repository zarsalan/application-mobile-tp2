import Category from "../models/category.js";
import GroceryItem from "../models/grocery-item.js";
import Recipe from "../models/recipe.js";

async function populateCategories() {
    await Category.deleteMany();

    const categories = ["Fruits", "Légumes", "Viandes", "Poissons", "Produits laitiers"];
    const categoriesObject = new Map();
    for (const category of categories) {
        categoriesObject.set(category, await Category.create({ name: category }));
    }

    return categoriesObject;
}

export default async function populate() {
	// Suppression des données
	await Category.deleteMany();
	await GroceryItem.deleteMany();

	// Ajout de catégorie
	const categories = [];
	const categoriesObject = new Map();
	for (const category of categories) {
		categoriesObject.set(category, await Category.create({ name: category }));
	}

	// Ajout de produits
	const groceryItems = [
		{
			category: categoriesObject.get("Fruits"),
			items: { name: "Banane", description: "" },
		},
	];
	const groceryItemsObject = new Map();
	for (const groceryItems of groceryItems) {
		for (const item of groceryItems.items) {
			groceryItemsObject.set(
				item.name,
				await GroceryItem.create({
					category: groceryItems.category,
					name: item.name,
					description: item.description,
				})
			);
		}
	}

    // Ajout de recettes

}