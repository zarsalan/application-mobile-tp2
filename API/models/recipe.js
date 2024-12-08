import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	ingredients: [
		{
			item: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "GroceryItem",
			},
			quantity: {
				type: String,
			},
		},
	],
	steps: [
		{
			type: String,
			required: true,
		},
	],
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "RecipeCategory",
		required: true,
	},
});

recipeSchema.index({
	"ingredients.item": 1,
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
