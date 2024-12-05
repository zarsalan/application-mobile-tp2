import mongoose from "mongoose";

const recipeCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
	},
	recipes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Recipe",
		},
	],
});

const RecipeCategory = mongoose.model("RecipeCategory", recipeCategorySchema);
export default RecipeCategory;
