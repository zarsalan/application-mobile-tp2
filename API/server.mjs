import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import groceryItemRoutes from "./routes/grocery-item.js";
import recipesRoutes from "./routes/recipe.js";

import populate from "./utils/populate/populate.js";

const MONGO_DB_URI = process.env.MONGO_DB_URI;

// -- Initialisation --------------------------------------------------------------------------
const app = express();

// -- Fonctions --------------------------------------------------------------------------
async function connectToDatabase() {
	try {
		// Connecte le client au serveur
		await mongoose.connect(MONGO_DB_URI);
		console.log("La connexion à la BD à été effectuée avec succès");

		// Affichage des collections et de leur nombre de documents
		const collections = await mongoose.connection.db
			.listCollections()
			.toArray();
		for (const collection of collections) {
			const count = await mongoose.connection.db
				.collection(collection.name)
				.countDocuments();
			console.log(`Collection: ${collection.name}, count: ${count}`);
		}

		return true;
	} catch (err) {
		console.error("Erreur lors de la connexion à MongoDB:", err);
		return false;
	}
}
// -- MIDDLEWARE ET ROUTES --------------------------------------------------------------------------
app.use(cors());
app.use(express.json());

// Middleware pour valider la clé API
// app.use((req, res, next) => {
// 	const apiKey = req.header("api-key");
// 	if (apiKey !== process.env.API_KEY) {
// 		return res.status(403).json({ message: "La clé api est invalide" });
// 	}
// 	next();
// });

// Middleware de gestion des erreurs
app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || "Quelque chose s'est mal passé.";
	console.error(`Error: ${message}\nStack: ${error.stack}`);
	res.status(status).json({ message: message });
});

// Routes
app.use("/api/grocery-items", groceryItemRoutes);
app.use("/api/recipes", recipesRoutes);

export default app;
// -- EXÉCUTION DES FONCTIONS --------------------------------------------------------------------------
connectToDatabase()
	.then((result) => {
		const PORT = process.env.PORT || 3000;
		if (result) {
			// On démarre le serveur seulement si on est en mode développement
			if (process.env.NODE_ENV === "development") {
				app.listen(PORT, () => {
					console.log(`Le serveur est lancé sur le port ${PORT}`);
				});

				// Ajout des données dans la bd
				// populate();
			} else {
				app.listen(PORT, () => {
					console.log(
						`Le serveur roule en mode production sur le port ${PORT}`
					);
				});
			}
		}
	})
	.catch((error) => {
		console.error("Erreur lors de la connexion a la bd:", error);
	});
