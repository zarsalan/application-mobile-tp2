import mongoose from "mongoose";

const itemCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Item",
		},
	],
});

const ItemCategory = mongoose.model("ItemCategory", itemCategorySchema);
export default ItemCategory;
