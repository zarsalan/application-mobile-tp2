import mongoose from "mongoose";

const groceryItemSchema = new mongoose.Schema({
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "ItemCategory",
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
});

const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);
export default GroceryItem;
