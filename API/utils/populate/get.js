import ItemCategory from "../../models/item-category.js";
import Item from "../../models/item.js";
import RecipeCategory from "../../models/recipe-category.js";

var itemCategories = [];
var recipeCategories = [];
var items = [];

export async function getItemCategory(categoryName) {
	const itemCategory =
		itemCategories[categoryName] ||
		(await ItemCategory.findOne({
			name: categoryName,
		}));
	itemCategories[categoryName] = itemCategory;

	if (!itemCategory) {
		return ItemCategory.create({
			name: categoryName,
		});
	}

	return itemCategory;
}

export async function getRecipeCategory(categoryName) {
	const recipeCategory =
		recipeCategories[categoryName] ||
		(await RecipeCategory.findOne({
			name: categoryName,
		}));
	recipeCategories[categoryName] = recipeCategory;

	if (!recipeCategory) {
		return RecipeCategory.create({
			name: categoryName,
		});
	}

	return recipeCategory;
}

export async function getItem(name, category) {
	const item = items[name] || (await Item.findOne({ name: name }));
	items[name] = item;

	if (!item) {
		const itemCategory = await getItemCategory(category);
		return Item.create({
			name: name,
			category: itemCategory._id,
		});
	}

	return item;
}
