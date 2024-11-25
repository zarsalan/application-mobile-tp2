import mongoose from "mongoose";

const ingredient = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: String,
	},
	unit: {
		type: String,
	},
});

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
			type: ingredient,
			required: true,
		},
	],
	steps: [
		{
			type: String,
			required: true,
		},
	],
	preparationTime: {
		type: Number,
		required: true,
	},
	cookingTime: {
		type: Number,
		required: true,
	},
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
