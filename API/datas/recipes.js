const recipes = [
	{
		name: "Salade estivale aux fruits",
		description:
			"Une salade rafraîchissante mélangeant douceur et acidité, parfaite pour l'été.",
		ingredients: [
			{ name: "Pastèque", quantity: "300g", category: "Fruits" },
			{ name: "Fraises", quantity: "200g", category: "Fruits" },
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper la pastèque en cubes et les fraises en quartiers.",
			"Mélanger les fruits dans un saladier.",
			"Ajouter les feuilles de menthe ciselées et le vinaigre balsamique.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Soupe crémeuse de brocoli",
		description:
			"Une soupe onctueuse et riche, idéale pour les soirées d'hiver.",
		ingredients: [
			{ name: "Brocoli", quantity: "500g", category: "Légumes" },
			{
				name: "Crème épaisse",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Oignon rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Thym séché", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir l'oignon émincé dans un peu d'huile.",
			"Ajouter le brocoli et couvrir d'eau.",
			"Cuire jusqu'à ce que le brocoli soit tendre, puis mixer.",
			"Incorporer la crème et assaisonner avec le thym.",
		],
		category: "Soupes",
	},
	{
		name: "Tartines à l'avocat et saumon",
		description: "Un en-cas rapide et sain, parfait pour le brunch.",
		ingredients: [
			{ name: "Avocat", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Pain complet",
				quantity: "2 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Pavé de saumon", quantity: "150g", category: "Viandes" },
			{ name: "Citron", quantity: "1 quartier", category: "Fruits" },
		],
		steps: [
			"Écraser l'avocat avec une fourchette et ajouter un peu de jus de citron.",
			"Griller les tranches de pain complet.",
			"Déposer l'avocat écrasé et les morceaux de saumon sur le pain.",
			"Servir avec une touche de poivre.",
		],
		category: "Brunchs",
	},
	{
		name: "Muffins aux myrtilles",
		description:
			"Des petits gâteaux moelleux et fruités, parfaits pour le goûter.",
		ingredients: [
			{ name: "Myrtille", quantity: "150g", category: "Fruits" },
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "150ml", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger les ingrédients secs dans un bol.",
			"Ajouter le lait et remuer pour obtenir une pâte lisse.",
			"Incorporer délicatement les myrtilles.",
			"Cuire dans des moules à muffins à 180°C pendant 20 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza maison aux légumes grillés",
		description: "Une pizza végétarienne savoureuse et facile à préparer.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte sur une plaque et garnir de sauce tomate.",
			"Ajouter les légumes grillés et la mozzarella.",
			"Cuire au four à 200°C pendant 15 minutes.",
			"Servir chaud.",
		],
		category: "Plats principaux",
	},
	{
		name: "Smoothie aux fruits rouges",
		description: "Une boisson rafraîchissante et riche en vitamines.",
		ingredients: [
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Framboises", quantity: "100g", category: "Fruits" },
			{
				name: "Lait de coco",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{
				name: "Miel",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Mixer les fruits rouges avec le lait de coco.",
			"Ajouter le miel et mélanger.",
			"Servir frais dans un grand verre.",
		],
		category: "Boissons",
	},
	{
		name: "Ratatouille provençale",
		description: "Un plat traditionnel de légumes mijotés.",
		ingredients: [
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Thym séché", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Couper les légumes en morceaux.",
			"Les faire mijoter dans une casserole avec un filet d'huile d'olive.",
			"Ajouter le thym et laisser cuire à feu doux.",
			"Servir chaud ou froid.",
		],
		category: "Plats traditionnels",
	},
	{
		name: "Tarte fine aux pommes",
		description: "Un dessert léger et croustillant, facile à préparer.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pomme rouge", quantity: "3 pièces", category: "Fruits" },
			{
				name: "Sucre",
				quantity: "2 cuillères à soupe",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "30g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte feuilletée sur une plaque.",
			"Disposer les tranches de pomme en rosace.",
			"Saupoudrer de sucre et ajouter quelques noisettes de beurre.",
			"Cuire au four à 200°C pendant 25 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Omelette aux herbes",
		description: "Un plat rapide et savoureux, parfait pour un déjeuner léger.",
		ingredients: [
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
			{ name: "Lait entier", quantity: "50ml", category: "Produits laitiers" },
		],
		steps: [
			"Battre les œufs avec le lait.",
			"Ajouter le persil ciselé et le fromage râpé.",
			"Cuire dans une poêle chaude jusqu'à ce que l'omelette soit prise.",
			"Servir chaud.",
		],
		category: "Plats rapides",
	},
	{
		name: "Risotto aux champignons",
		description:
			"Un plat italien crémeux et savoureux, parfait pour les dîners.",
		ingredients: [
			{ name: "Riz arborio", quantity: "300g", category: "Riz" },
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle.",
			"Ajouter le riz et remuer pendant 2 minutes.",
			"Incorporer progressivement du bouillon chaud jusqu'à ce que le riz soit cuit.",
			"Ajouter la crème et le parmesan, puis servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Quiche aux poireaux et chèvre",
		description: "Une quiche légère et savoureuse, idéale pour un déjeuner.",
		ingredients: [
			{ name: "Poireau", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{
				name: "Crème fraîche légère",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les poireaux émincés, puis les déposer sur la pâte.",
			"Ajouter le fromage de chèvre et la crème, puis enfourner à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Tarte aux fruits rouges",
		description: "Un dessert fruité et gourmand, parfait pour l'été.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Framboise", quantity: "150g", category: "Fruits" },
			{ name: "Myrtille", quantity: "150g", category: "Fruits" },
			{
				name: "Crème pâtissière",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte sablée dans un moule et cuire à blanc.",
			"Préparer la crème pâtissière et l'étaler sur la pâte refroidie.",
			"Disposer les fruits rouges sur la crème.",
			"Réfrigérer avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Poulet au paprika",
		description: "Un plat épicé et réconfortant, facile à préparer.",
		ingredients: [
			{ name: "Cuisse de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Paprika", quantity: "1 cuillère à soupe", category: "Épices" },
			{ name: "Oignon rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les cuisses de poulet jusqu'à ce qu'elles soient dorées.",
			"Ajouter l'oignon émincé et le paprika, puis mélanger.",
			"Incorporer un peu d'eau et laisser mijoter à feu doux.",
			"Ajouter la crème en fin de cuisson et servir avec du riz.",
		],
		category: "Plats épicés",
	},
	{
		name: "Salade de quinoa aux légumes grillés",
		description: "Une salade saine et colorée, idéale pour les repas légers.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Faire cuire le quinoa et le laisser refroidir.",
			"Griller les légumes et les couper en morceaux.",
			"Mélanger le quinoa et les légumes dans un saladier.",
			"Assaisonner avec le vinaigre balsamique avant de servir.",
		],
		category: "Salades",
	},
	{
		name: "Lasagnes aux épinards et ricotta",
		description: "Un plat végétarien crémeux et délicieux.",
		ingredients: [
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Ricotta", quantity: "250g", category: "Produits laitiers" },
			{
				name: "Feuilles de lasagnes",
				quantity: "10 pièces",
				category: "Pâtes",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards et les mélanger avec la ricotta.",
			"Alterner les couches de lasagnes, d'épinards et de ricotta.",
			"Saupoudrer de parmesan et cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Gâteau au chocolat fondant",
		description: "Un dessert gourmand pour les amateurs de chocolat.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Battre les œufs avec le sucre, puis incorporer le mélange au chocolat.",
			"Verser dans un moule et cuire à 180°C pendant 15 minutes.",
			"Servir tiède pour un cœur fondant.",
		],
		category: "Desserts",
	},
	{
		name: "Wraps au thon et crudités",
		description: "Un snack rapide et équilibré.",
		ingredients: [
			{
				name: "Tortilla",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Thon", quantity: "100g", category: "Viandes" },
			{ name: "Carotte", quantity: "1 pièce", category: "Légumes" },
			{ name: "Laitue", quantity: "4 feuilles", category: "Légumes" },
		],
		steps: [
			"Étaler le thon sur les tortillas.",
			"Ajouter les carottes râpées et les feuilles de laitue.",
			"Rouler les tortillas et les couper en deux.",
			"Servir frais.",
		],
		category: "Snacks",
	},
	{
		name: "Soupe de lentilles épicée",
		description: "Une soupe nourrissante avec une touche épicée.",
		ingredients: [
			{ name: "Lentilles corail", quantity: "200g", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire les lentilles et les carottes coupées en morceaux.",
			"Mixer avec un peu d'eau de cuisson.",
			"Ajouter le cumin et la crème, puis servir chaud.",
		],
		category: "Soupes",
	},

	{
		name: "Riz sauté au poulet et légumes",
		description:
			"Un plat complet et savoureux, inspiré des cuisines asiatiques.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Filet de dinde", quantity: "150g", category: "Viandes" },
			{ name: "Carotte", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et réserver.",
			"Faire revenir le filet de dinde coupé en morceaux.",
			"Ajouter les carottes râpées et cuire légèrement.",
			"Incorporer le riz et la sauce soja, puis mélanger.",
		],
		category: "Plats rapides",
	},
	{
		name: "Crêpes salées au jambon et fromage",
		description: "Un classique facile à préparer pour les repas en famille.",
		ingredients: [
			{
				name: "Pâte à crêpes",
				quantity: "500ml",
				category: "Produits de boulangerie",
			},
			{ name: "Jambon blanc", quantity: "2 tranches", category: "Viandes" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Faire chauffer une poêle et y déposer une crêpe.",
			"Ajouter une tranche de jambon et du fromage râpé.",
			"Replier la crêpe et la cuire jusqu'à ce que le fromage soit fondu.",
			"Servir chaud avec une salade.",
		],
		category: "Plats principaux",
	},
	{
		name: "Cake aux olives et lardons",
		description: "Une entrée ou un apéritif convivial, idéal à partager.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Lardons", quantity: "100g", category: "Viandes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour obtenir une pâte.",
			"Incorporer les lardons et les olives.",
			"Verser dans un moule à cake et cuire à 180°C pendant 40 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Apéritifs",
	},
	{
		name: "Couscous aux légumes",
		description: "Un plat végétarien riche en saveurs et en couleurs.",
		ingredients: [
			{ name: "Semoule de couscous", quantity: "200g", category: "Riz" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Pois chiches", quantity: "100g", category: "Légumes" },
		],
		steps: [
			"Faire cuire la semoule selon les instructions du paquet.",
			"Faire mijoter les légumes avec les pois chiches dans un bouillon.",
			"Servir les légumes sur la semoule.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Parmentier de poisson",
		description: "Une variante légère du hachis parmentier classique.",
		ingredients: [
			{ name: "Pavé de saumon", quantity: "200g", category: "Viandes" },
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "30g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire et écraser les pommes de terre avec le lait et le beurre.",
			"Faire cuire le saumon et l'émietter.",
			"Disposer une couche de purée, puis une couche de saumon, et recouvrir de purée.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats à base de poisson",
	},
	{
		name: "Soupe à l'oignon gratinée",
		description: "Une soupe réconfortante et gratinée au fromage.",
		ingredients: [
			{ name: "Oignon rouge", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Pain complet",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les oignons émincés jusqu'à ce qu'ils soient dorés.",
			"Ajouter le bouillon et laisser mijoter.",
			"Servir dans des bols avec une tranche de pain et du gruyère râpé, puis gratiner au four.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de fruits frais",
		description: "Un dessert léger et coloré, parfait pour toutes les saisons.",
		ingredients: [
			{ name: "Pomme rouge", quantity: "1 pièce", category: "Fruits" },
			{ name: "Banane", quantity: "1 pièce", category: "Fruits" },
			{ name: "Kiwi", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Jus d'orange",
				quantity: "100ml",
				category: "Boissons non alcoolisées",
			},
		],
		steps: [
			"Couper tous les fruits en morceaux.",
			"Mélanger dans un saladier et arroser de jus d'orange.",
			"Réfrigérer avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de courge butternut",
		description: "Un plat automnal riche et onctueux.",
		ingredients: [
			{ name: "Courge butternut", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Éplucher et couper la courge en cubes.",
			"Disposer dans un plat à gratin, ajouter la crème et le fromage.",
			"Saupoudrer de muscade et cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats traditionnels",
	},
	{
		name: "Burger végétarien",
		description: "Un burger savoureux et sans viande, facile à préparer.",
		ingredients: [
			{
				name: "Pain burger",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{
				name: "Steak végétal",
				quantity: "2 pièces",
				category: "Produits surgelés",
			},
			{ name: "Laitue", quantity: "4 feuilles", category: "Légumes" },
			{ name: "Tomate", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Griller les steaks végétaux dans une poêle.",
			"Assembler les burgers avec les pains, la laitue, les tomates et les steaks.",
			"Servir chaud avec des frites ou une salade.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Ratatouille aux herbes de Provence",
		description: "Une version traditionnelle et parfumée de ce plat classique.",
		ingredients: [
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Herbes de Provence",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper tous les légumes en morceaux.",
			"Faire revenir les légumes dans une casserole avec un peu d'huile d'olive.",
			"Ajouter les herbes et laisser mijoter pendant 30 minutes.",
			"Servir chaud ou froid.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Wrap de poulet au curry",
		description: "Un snack rapide et épicé avec une touche crémeuse.",
		ingredients: [
			{
				name: "Tortilla",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Cuisse de poulet", quantity: "200g", category: "Viandes" },
			{
				name: "Yaourt grec nature",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Curry doux", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire cuire le poulet et l'effilocher.",
			"Mélanger le yaourt avec le curry.",
			"Étaler la sauce sur les tortillas, ajouter le poulet et rouler.",
			"Servir frais ou légèrement réchauffé.",
		],
		category: "Snacks",
	},
	{
		name: "Velouté de potimarron",
		description: "Un velouté crémeux et réconfortant pour l'automne.",
		ingredients: [
			{ name: "Potimarron", quantity: "500g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Oignon rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Muscat", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Éplucher et couper le potimarron et l'oignon.",
			"Faire revenir l'oignon, ajouter le potimarron et couvrir d'eau.",
			"Mixer le tout avec la crème et assaisonner.",
			"Servir chaud avec un filet de crème.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin de légumes au quinoa",
		description: "Un plat végétarien complet et savoureux.",
		ingredients: [
			{ name: "Quinoa", quantity: "200g", category: "Riz" },
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire le quinoa et réserver.",
			"Couper les légumes et les disposer dans un plat à gratin.",
			"Ajouter le quinoa et couvrir de mozzarella.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats à base de riz",
	},
	{
		name: "Filet de poisson au citron",
		description: "Un plat léger et acidulé, parfait pour un déjeuner rapide.",
		ingredients: [
			{ name: "Filet de dinde", quantity: "200g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Huile d'olive extra vierge",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Assaisonner le filet de poisson avec le citron et l'huile d'olive.",
			"Cuire à la poêle avec un peu de persil ciselé.",
			"Servir avec des légumes vapeur ou du riz.",
		],
		category: "Plats à base de poisson",
	},
	{
		name: "Salade grecque",
		description: "Une salade estivale classique aux saveurs méditerranéennes.",
		ingredients: [
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les légumes en morceaux et les disposer dans un saladier.",
			"Ajouter les olives et la feta émiettée.",
			"Assaisonner avec un filet d'huile d'olive et un peu d'origan.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Soupe aux légumes d'hiver",
		description:
			"Une soupe riche et nourrissante, idéale pour les journées froides.",
		ingredients: [
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Navet", quantity: "1 pièce", category: "Légumes" },
			{ name: "Chou-fleur", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Couper les légumes et les faire cuire dans le bouillon.",
			"Mixer pour obtenir une texture lisse.",
			"Assaisonner avec sel et poivre selon votre goût.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Clafoutis aux poires et chocolat",
		description: "Un dessert sucré mélangeant fruits et chocolat.",
		ingredients: [
			{ name: "Poire", quantity: "2 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{
				name: "Chocolat noir",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Disposer les poires coupées en morceaux dans un plat beurré.",
			"Préparer une pâte en mélangeant la farine, le lait et les œufs.",
			"Verser la pâte sur les poires et ajouter des pépites de chocolat.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Tarte aux courgettes et chèvre",
		description: "Une tarte salée légère et pleine de saveurs.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Crème fraîche légère",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les rondelles de courgette et le fromage de chèvre.",
			"Recouvrir de crème fraîche et cuire à 180°C pendant 35 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats principaux",
	},
	{
		name: "Risotto au safran",
		description: "Un risotto italien au parfum délicat de safran.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{
				name: "Bouillon de volaille",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Safran", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Faire revenir le riz dans une casserole.",
			"Ajouter progressivement le bouillon chaud tout en remuant.",
			"Incorporer le safran et le parmesan en fin de cuisson.",
			"Servir immédiatement avec des herbes fraîches.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Raviolis aux épinards et ricotta",
		description:
			"Des pâtes fraîches garnies d'un mélange crémeux d'épinards et de ricotta.",
		ingredients: [
			{ name: "Raviolis", quantity: "250g", category: "Pâtes" },
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Ricotta", quantity: "100g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire les raviolis selon les instructions du paquet.",
			"Faire revenir les épinards et les mélanger avec la ricotta.",
			"Servir les raviolis avec le mélange et saupoudrer de parmesan.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Poulet au citron et romarin",
		description: "Un plat parfumé et savoureux, parfait pour un repas léger.",
		ingredients: [
			{ name: "Filet de dinde", quantity: "200g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
			{
				name: "Huile d'olive extra vierge",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Mariner le poulet avec le jus de citron, l'huile d'olive et le romarin.",
			"Cuire à la poêle jusqu'à ce que le poulet soit bien doré.",
			"Servir avec des légumes vapeur ou une salade.",
		],
		category: "Plats rapides",
	},
	{
		name: "Flan aux légumes",
		description:
			"Une recette légère et onctueuse idéale pour une entrée ou un repas végétarien.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Râper les légumes et les faire revenir légèrement.",
			"Mélanger les œufs avec la crème et ajouter les légumes.",
			"Verser dans des moules individuels et cuire au bain-marie à 180°C pendant 25 minutes.",
		],
		category: "Entrées",
	},
	{
		name: "Pain perdu au caramel",
		description: "Un dessert ou un goûter simple et réconfortant.",
		ingredients: [
			{
				name: "Pain de mie",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{
				name: "Caramel liquide",
				quantity: "50ml",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Tremper les tranches de pain dans un mélange d'œufs et de lait.",
			"Faire dorer dans une poêle avec un peu de beurre.",
			"Arroser de caramel avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Bœuf bourguignon",
		description:
			"Un grand classique de la cuisine française, mijoté avec amour.",
		ingredients: [
			{ name: "Bœuf bourguignon", quantity: "500g", category: "Viandes" },
			{ name: "Carotte", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Vin rouge",
				quantity: "500ml",
				category: "Boissons alcoolisées",
			},
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
		],
		steps: [
			"Faire revenir les morceaux de bœuf pour les colorer.",
			"Ajouter les légumes coupés et le vin rouge.",
			"Laisser mijoter à feu doux pendant 3 heures.",
			"Servir avec des pommes de terre vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Brochettes de légumes grillés",
		description: "Un accompagnement sain et coloré pour vos repas d'été.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate cerise", quantity: "10 pièces", category: "Légumes" },
			{
				name: "Huile d'olive extra vierge",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les légumes en morceaux adaptés à des brochettes.",
			"Les enfiler sur des piques et les badigeonner d'huile d'olive.",
			"Griller sur un barbecue ou au four jusqu'à ce qu'ils soient tendres.",
			"Servir en accompagnement.",
		],
		category: "Accompagnements",
	},
	{
		name: "Omelette aux champignons et fromage",
		description: "Un repas simple et rapide, parfait pour un déjeuner léger.",
		ingredients: [
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle.",
			"Battre les œufs et les verser sur les champignons.",
			"Ajouter le fromage râpé et plier l'omelette avant de servir.",
		],
		category: "Plats rapides",
	},
	{
		name: "Riz pilaf aux épices",
		description:
			"Un riz parfumé et délicatement épicé pour accompagner vos plats.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Curcuma", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Raisins secs", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire revenir les épices dans un peu d'huile.",
			"Ajouter le riz et remuer jusqu'à ce qu'il soit bien enrobé.",
			"Incorporer les raisins secs et couvrir d'eau.",
			"Cuire jusqu'à absorption complète de l'eau.",
		],
		category: "Plats à base de riz",
	},
	{
		name: "Muffins aux courgettes et parmesan",
		description:
			"Des muffins salés moelleux, parfaits pour un apéritif ou un brunch.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Râper la courgette et la mélanger avec les autres ingrédients.",
			"Verser dans des moules à muffins.",
			"Cuire au four à 180°C pendant 20 minutes.",
			"Servir tiède ou à température ambiante.",
		],
		category: "Apéritifs",
	},
	{
		name: "Tarte tatin aux pommes",
		description:
			"Un dessert classique et délicieux, inversant les rôles de la pâte et des fruits.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pomme rouge", quantity: "4 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire caraméliser le sucre et le beurre dans une poêle.",
			"Ajouter les pommes coupées en quartiers et cuire légèrement.",
			"Recouvrir avec la pâte feuilletée et cuire au four à 180°C pendant 30 minutes.",
			"Renverser délicatement avant de servir.",
		],
		category: "Desserts",
	},

	{
		name: "Salade de lentilles au chèvre frais",
		description:
			"Une salade saine et rassasiante, parfaite pour les repas légers.",
		ingredients: [
			{ name: "Lentilles vertes", quantity: "200g", category: "Légumes" },
			{
				name: "Fromage de chèvre frais",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Faire cuire les lentilles et les laisser refroidir.",
			"Couper les tomates en dés et les mélanger avec les lentilles.",
			"Émietter le fromage de chèvre et assaisonner avec le vinaigre balsamique.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Blanquette de veau traditionnelle",
		description: "Un plat mijoté français classique, crémeux et savoureux.",
		ingredients: [
			{ name: "Veau", quantity: "500g", category: "Viandes" },
			{ name: "Carotte", quantity: "3 pièces", category: "Légumes" },
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
			{
				name: "Crème épaisse",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir le veau et le laisser mijoter avec les carottes dans de l'eau.",
			"Ajouter les champignons en fin de cuisson.",
			"Incorporer la crème avant de servir avec du riz ou des pommes de terre.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Gaufres salées au fromage",
		description:
			"Une version originale de gaufres pour un brunch ou un apéritif.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Lait entier", quantity: "150ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, le lait et les œufs pour former une pâte.",
			"Ajouter le fromage râpé.",
			"Faire cuire dans un gaufrier jusqu'à ce que les gaufres soient dorées.",
			"Servir chaudes avec une salade verte.",
		],
		category: "Brunchs",
	},
	{
		name: "Quiche lorraine",
		description:
			"Une recette classique française, parfaite pour un repas convivial.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les lardons, puis les disposer sur la pâte.",
			"Mélanger les œufs avec la crème et verser sur les lardons.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Fondant au chocolat cœur coulant",
		description: "Un dessert irrésistible pour les amateurs de chocolat.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Mélanger avec les œufs et la farine pour obtenir une pâte.",
			"Verser dans des moules individuels et cuire 8 minutes à 200°C.",
			"Servir immédiatement pour un cœur coulant.",
		],
		category: "Desserts",
	},
	{
		name: "Pâtes aux crevettes et citron",
		description: "Un plat de pâtes léger et parfumé, idéal pour l'été.",
		ingredients: [
			{ name: "Spaghetti", quantity: "200g", category: "Pâtes" },
			{ name: "Crevettes", quantity: "150g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Huile d'olive extra vierge",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les spaghetti selon les instructions.",
			"Faire revenir les crevettes avec un peu d'huile d'olive.",
			"Ajouter le jus de citron et mélanger avec les pâtes.",
			"Servir chaud avec une touche de persil.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Crumble de légumes",
		description: "Un plat végétarien croustillant et riche en saveurs.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Couper les légumes en morceaux et les faire revenir légèrement.",
			"Préparer un crumble en mélangeant le beurre et la farine.",
			"Disposer les légumes dans un plat, recouvrir de crumble.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Brioche perdue aux fruits rouges",
		description:
			"Une version revisitée de la brioche perdue, sucrée et fruitée.",
		ingredients: [
			{
				name: "Brioche",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Framboises", quantity: "100g", category: "Fruits" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Tremper les tranches de brioche dans un mélange de lait et d'œufs.",
			"Faire dorer dans une poêle avec un peu de beurre.",
			"Servir avec les fruits rouges frais et un filet de miel.",
		],
		category: "Desserts",
	},
	{
		name: "Galettes de sarrasin au saumon",
		description: "Une spécialité bretonne garnie de saumon fumé.",
		ingredients: [
			{
				name: "Farine de sarrasin",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Saumon fumé", quantity: "100g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "50ml",
				category: "Produits laitiers",
			},
			{ name: "Œufs", quantity: "1 pièce", category: "Produits laitiers" },
		],
		steps: [
			"Préparer une pâte avec la farine de sarrasin, l'œuf et de l'eau.",
			"Cuire des galettes dans une poêle chaude.",
			"Garnir de saumon fumé et de crème fraîche.",
			"Plier et servir chaud.",
		],
		category: "Plats traditionnels",
	},
	{
		name: "Smoothie exotique",
		description: "Une boisson fraîche et fruitée, idéale pour l'été.",
		ingredients: [
			{ name: "Mangue", quantity: "1 pièce", category: "Fruits" },
			{ name: "Ananas", quantity: "150g", category: "Fruits" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Jus de citron vert",
				quantity: "1 cuillère à soupe",
				category: "Fruits",
			},
		],
		steps: [
			"Mixer tous les ingrédients ensemble jusqu'à obtenir une texture lisse.",
			"Servir frais avec quelques glaçons.",
			"Décorer avec une feuille de menthe si désiré.",
		],
		category: "Boissons",
	},

	{
		name: "Tarte fine aux tomates cerises et moutarde",
		description:
			"Une tarte légère et croustillante, parfaite pour l'apéritif ou une entrée.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomate cerise", quantity: "200g", category: "Légumes" },
			{ name: "Moutarde", quantity: "2 cuillères à soupe", category: "Épices" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte sur une plaque de cuisson et la piquer avec une fourchette.",
			"Badigeonner de moutarde et disposer les tomates cerises coupées en deux.",
			"Parsemer de fromage râpé et cuire au four à 200°C pendant 15 minutes.",
			"Servir tiède avec une salade.",
		],
		category: "Entrées",
	},
	{
		name: "Chili sin carne",
		description: "Un plat épicé et végétarien inspiré de la cuisine mexicaine.",
		ingredients: [
			{ name: "Haricots rouges", quantity: "200g", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Maïs", quantity: "150g", category: "Légumes" },
			{
				name: "Poudre de chili",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir les tomates concassées dans une casserole.",
			"Ajouter les haricots rouges et le maïs.",
			"Assaisonner avec la poudre de chili et laisser mijoter 20 minutes.",
			"Servir avec du riz ou des tortillas.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poêlée de légumes et tofu mariné",
		description: "Un plat végétalien riche en saveurs et en protéines.",
		ingredients: [
			{
				name: "Tofu ferme",
				quantity: "200g",
				category: "Viandes végétariennes",
			},
			{ name: "Brocoli", quantity: "300g", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "3 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Mariner le tofu dans la sauce soja pendant 15 minutes.",
			"Faire revenir les légumes dans une poêle.",
			"Ajouter le tofu mariné et faire sauter le tout.",
			"Servir chaud avec du riz ou des nouilles.",
		],
		category: "Plats végétaliens",
	},
	{
		name: "Parfait aux fruits rouges et granola",
		description: "Un dessert frais et croustillant, parfait pour l'été.",
		ingredients: [
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Framboises", quantity: "100g", category: "Fruits" },
			{
				name: "Yaourt grec nature",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Granola", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Disposer une couche de yaourt dans un verre.",
			"Ajouter une couche de fruits rouges, puis une couche de granola.",
			"Répéter jusqu'à remplir le verre et servir frais.",
		],
		category: "Desserts",
	},
	{
		name: "Curry de pois chiches et épinards",
		description: "Un curry végétalien nourrissant et épicé.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Épinards", quantity: "150g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry doux",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Faire chauffer le curry dans une casserole.",
			"Ajouter les pois chiches et le lait de coco, puis laisser mijoter.",
			"Incorporer les épinards en fin de cuisson.",
			"Servir avec du riz basmati.",
		],
		category: "Plats végétaliens",
	},
	{
		name: "Frittata aux légumes du soleil",
		description: "Une omelette italienne épaisse et garnie de légumes.",
		ingredients: [
			{ name: "Œufs", quantity: "6 pièces", category: "Produits laitiers" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Mozzarella", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Battre les œufs dans un bol.",
			"Faire revenir les légumes coupés en dés dans une poêle.",
			"Ajouter les œufs battus et cuire à feu doux.",
			"Parsemer de mozzarella et terminer la cuisson au four.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Quinoa aux légumes rôtis",
		description: "Un plat équilibré et coloré, idéal pour un repas léger.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Courge butternut", quantity: "200g", category: "Légumes" },
			{ name: "Poivron jaune", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et réserver.",
			"Rôtir les légumes au four avec un filet d'huile d'olive.",
			"Mélanger le quinoa avec les légumes rôtis.",
			"Assaisonner avec le vinaigre balsamique avant de servir.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Cheesecake au citron",
		description: "Un dessert crémeux et légèrement acidulé.",
		ingredients: [
			{
				name: "Biscuit sablé",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{
				name: "Fromage frais",
				quantity: "300g",
				category: "Produits laitiers",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Émietter les biscuits et les presser au fond d'un moule.",
			"Mélanger le fromage frais, le sucre et le jus de citron.",
			"Verser la préparation sur la base de biscuit et réfrigérer 4 heures.",
			"Décorer avec des zestes de citron avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe froide de betterave",
		description: "Une soupe fraîche et colorée, idéale pour l'été.",
		ingredients: [
			{ name: "Betterave cuite", quantity: "300g", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Citron", quantity: "1 quartier", category: "Fruits" },
			{ name: "Aneth", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Mixer les betteraves avec le yaourt et le jus de citron.",
			"Assaisonner avec l'aneth et réfrigérer.",
			"Servir bien frais dans des bols avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza Margherita maison",
		description: "Une pizza classique italienne avec des ingrédients simples.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "6 feuilles", category: "Épices" },
		],
		steps: [
			"Étaler la pâte à pizza sur une plaque.",
			"Étaler la purée de tomates, ajouter la mozzarella et le basilic.",
			"Cuire au four à 220°C pendant 10-15 minutes.",
			"Servir chaud avec un filet d'huile d'olive.",
		],
		category: "Plats principaux",
	},

	{
		name: "Pizza Margherita maison (suite)",
		description: "Une pizza classique italienne avec des ingrédients simples.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "6 feuilles", category: "Épices" },
		],
		steps: [
			"Étaler la pâte à pizza sur une plaque.",
			"Étaler la purée de tomates, ajouter la mozzarella et le basilic.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec un filet d'huile d'olive.",
		],
		category: "Plats à partager",
	},
	{
		name: "Wok de légumes et nouilles sautées",
		description:
			"Un plat rapide et savoureux, inspiré de la cuisine asiatique.",
		ingredients: [
			{ name: "Nouilles de blé", quantity: "200g", category: "Pâtes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Brocoli", quantity: "200g", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire les nouilles selon les instructions du paquet.",
			"Faire sauter les légumes dans un wok avec un peu d'huile.",
			"Ajouter les nouilles cuites et la sauce soja.",
			"Mélanger et servir chaud.",
		],
		category: "Plats rapides",
	},
	{
		name: "Poulet au lait de coco et curry",
		description: "Un plat crémeux et épicé, inspiré des saveurs exotiques.",
		ingredients: [
			{ name: "Filet de dinde", quantity: "200g", category: "Viandes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry doux",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Tomate", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir le poulet coupé en morceaux.",
			"Ajouter les tomates concassées, le lait de coco et le curry.",
			"Laisser mijoter 20 minutes.",
			"Servir avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Salade de melon et jambon cru",
		description: "Une entrée fraîche et légère, parfaite pour l'été.",
		ingredients: [
			{ name: "Melon", quantity: "1 pièce", category: "Fruits" },
			{ name: "Jambon cru", quantity: "4 tranches", category: "Viandes" },
			{ name: "Roquette", quantity: "50g", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper le melon en dés et disposer dans un plat.",
			"Ajouter la roquette et les tranches de jambon cru.",
			"Assaisonner avec le vinaigre balsamique.",
			"Servir frais.",
		],
		category: "Entrées",
	},
	{
		name: "Soufflé au fromage",
		description: "Un classique français, aérien et riche en fromage.",
		ingredients: [
			{ name: "Gruyère râpé", quantity: "150g", category: "Produits laitiers" },
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Préparer une béchamel avec le lait, la farine et le beurre.",
			"Incorporer les jaunes d'œufs et le gruyère râpé.",
			"Battre les blancs d'œufs en neige et les ajouter délicatement.",
			"Cuire au four à 200°C pendant 20 minutes et servir immédiatement.",
		],
		category: "Plats principaux",
	},
	{
		name: "Brownies au caramel",
		description: "Une variation gourmande du classique brownie.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{
				name: "Caramel liquide",
				quantity: "100ml",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Faire fondre le chocolat avec le beurre.",
			"Incorporer la farine et les œufs pour former une pâte.",
			"Verser dans un moule et ajouter des filets de caramel.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Galettes de pois chiches",
		description: "Des galettes végétaliennes riches en protéines.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Mixer les pois chiches avec le persil et le cumin.",
			"Ajouter la farine pour former une pâte.",
			"Former des galettes et les cuire à la poêle.",
			"Servir chaud avec une sauce au yaourt.",
		],
		category: "Plats végétaliens",
	},
	{
		name: "Tarte au citron meringuée",
		description:
			"Un dessert classique avec une base acidulée et une meringue douce.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Citron", quantity: "2 pièces", category: "Fruits" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "150g", category: "Produits de boulangerie" },
		],
		steps: [
			"Cuire la pâte sablée à blanc.",
			"Préparer une crème au citron avec le jus, le sucre et les œufs.",
			"Verser la crème sur la pâte cuite.",
			"Battre les blancs en neige avec du sucre pour la meringue et la disposer sur la tarte.",
			"Cuire au four à 180°C jusqu'à ce que la meringue soit dorée.",
		],
		category: "Desserts",
	},
	{
		name: "Brochettes de poulet marinées au miel",
		description: "Des brochettes sucrées-salées parfaites pour un barbecue.",
		ingredients: [
			{ name: "Filet de dinde", quantity: "300g", category: "Viandes" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Couper le poulet en morceaux et le mariner avec le miel, la sauce soja et le citron.",
			"Enfiler sur des brochettes et griller jusqu'à cuisson complète.",
			"Servir avec une salade ou du riz.",
		],
		category: "Recettes pour barbecue",
	},

	{
		name: "Velouté de champignons",
		description:
			"Un velouté crémeux et réconfortant pour les soirées fraîches.",
		ingredients: [
			{ name: "Champignon de Paris", quantity: "300g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir l'oignon émincé et les champignons dans une casserole.",
			"Ajouter le bouillon et laisser mijoter 15 minutes.",
			"Mixer le tout jusqu'à obtenir une texture lisse.",
			"Incorporer la crème, assaisonner, et servir chaud.",
		],
		category: "Soupes",
	},
	{
		name: "Tartare de saumon et avocat",
		description: "Une entrée fraîche et élégante.",
		ingredients: [
			{ name: "Pavé de saumon", quantity: "150g", category: "Viandes" },
			{ name: "Avocat", quantity: "1 pièce", category: "Fruits" },
			{ name: "Citron vert", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Ciboulette",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Hacher le saumon et l'avocat en petits dés.",
			"Mélanger avec le jus de citron et la ciboulette ciselée.",
			"Disposer dans des cercles de présentation et réfrigérer avant de servir.",
		],
		category: "Entrées",
	},
	{
		name: "Tagliatelles aux champignons et truffe",
		description: "Un plat raffiné avec une touche de luxe.",
		ingredients: [
			{ name: "Tagliatelles", quantity: "200g", category: "Pâtes" },
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{
				name: "Huile de truffe",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire les tagliatelles selon les instructions.",
			"Faire revenir les champignons dans une poêle avec un peu d'huile.",
			"Ajouter la crème et l'huile de truffe, puis mélanger avec les pâtes.",
			"Servir chaud avec du parmesan râpé.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Poulet rôti aux légumes racines",
		description: "Un plat familial classique et savoureux.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Carotte", quantity: "3 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
		],
		steps: [
			"Placer le poulet dans un plat avec les légumes coupés en morceaux.",
			"Assaisonner avec le romarin, sel et poivre.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement.",
			"Servir chaud avec une sauce au jus de cuisson.",
		],
		category: "Plats familiaux",
	},
	{
		name: "Quiche aux poireaux et saumon fumé",
		description: "Une quiche savoureuse, parfaite pour un repas équilibré.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poireau", quantity: "2 pièces", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "100g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les poireaux émincés dans une poêle.",
			"Disposer les poireaux et le saumon fumé sur la pâte, ajouter la crème.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Mousse au chocolat noir",
		description: "Un dessert léger et intense en chocolat.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire fondre le chocolat noir.",
			"Battre les jaunes d'œufs avec le sucre, puis incorporer le chocolat fondu.",
			"Monter les blancs en neige et les incorporer délicatement.",
			"Réfrigérer pendant au moins 4 heures avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Salade César revisitée",
		description: "Une salade classique avec une touche moderne.",
		ingredients: [
			{ name: "Laitue", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poulet rôti", quantity: "150g", category: "Viandes" },
			{
				name: "Croutons",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Déchirer la laitue et la disposer dans un saladier.",
			"Ajouter le poulet, les croûtons et le parmesan râpé.",
			"Assaisonner avec une sauce à base de citron et huile d'olive.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Gratin de courgettes au chèvre",
		description: "Un gratin léger et fondant aux saveurs méditerranéennes.",
		ingredients: [
			{ name: "Courgette", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Herbes de Provence",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Couper les courgettes en rondelles et les disposer dans un plat.",
			"Ajouter le fromage de chèvre émietté et la crème.",
			"Saupoudrer d'herbes de Provence et cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud avec une viande ou un poisson.",
		],
		category: "Accompagnements",
	},
	{
		name: "Lasagnes bolognaises classiques",
		description: "Un plat généreux et réconfortant.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Bœuf haché", quantity: "400g", category: "Viandes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Fromage râpé", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Préparer une sauce bolognaise avec le bœuf haché et les tomates.",
			"Disposer des couches de lasagnes, sauce et fromage dans un plat.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Porridge aux fruits frais",
		description: "Un petit-déjeuner sain et nourrissant.",
		ingredients: [
			{ name: "Flocons d'avoine", quantity: "50g", category: "Céréales" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Banane", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Miel",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les flocons d'avoine dans le lait à feu doux.",
			"Ajouter la banane coupée en morceaux et le miel.",
			"Servir chaud avec des fruits frais en garniture.",
		],
		category: "Petits-déjeuners",
	},

	{
		name: "Curry de poulet à l'ananas",
		description: "Un curry sucré-salé avec une touche exotique.",
		ingredients: [
			{ name: "Filet de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Ananas", quantity: "150g", category: "Fruits" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry doux",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir les morceaux de poulet dans une poêle.",
			"Ajouter les morceaux d'ananas et le curry.",
			"Incorporer le lait de coco et laisser mijoter 20 minutes.",
			"Servir avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Pâtes au pesto de roquette",
		description: "Un plat de pâtes rapide et parfumé.",
		ingredients: [
			{ name: "Penne", quantity: "200g", category: "Pâtes" },
			{ name: "Roquette", quantity: "100g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Pignons de pin", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Mixer la roquette, le parmesan et les pignons pour obtenir un pesto.",
			"Cuire les penne selon les instructions du paquet.",
			"Mélanger les pâtes chaudes avec le pesto et servir immédiatement.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Tian de légumes au thym",
		description: "Un plat provençal sain et coloré.",
		ingredients: [
			{ name: "Courgette", quantity: "2 pièces", category: "Légumes" },
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Thym", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Trancher les légumes en fines rondelles.",
			"Les disposer dans un plat en alternant les couleurs.",
			"Saupoudrer de thym, arroser d'huile d'olive et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud ou tiède.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe aux pois cassés et lardons",
		description: "Une soupe rustique et réconfortante.",
		ingredients: [
			{ name: "Pois cassés", quantity: "200g", category: "Légumes" },
			{ name: "Lardons", quantity: "100g", category: "Viandes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir les lardons dans une casserole.",
			"Ajouter les pois cassés, les carottes coupées et le bouillon.",
			"Laisser mijoter 40 minutes, puis mixer légèrement.",
			"Servir avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Gâteau aux carottes",
		description: "Un dessert moelleux et épicé, parfait pour le goûter.",
		ingredients: [
			{ name: "Carotte", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Râper les carottes et les mélanger avec les ingrédients secs.",
			"Ajouter les œufs et un peu de lait pour obtenir une pâte.",
			"Verser dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Servir avec un glaçage au fromage frais si désiré.",
		],
		category: "Desserts",
	},
	{
		name: "Croquettes de poisson maison",
		description: "Un plat croustillant et savoureux, idéal pour les enfants.",
		ingredients: [
			{ name: "Filet de poisson blanc", quantity: "300g", category: "Viandes" },
			{ name: "Pommes de terre", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{
				name: "Chapelure",
				quantity: "100g",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Cuire et écraser les pommes de terre.",
			"Mélanger avec le poisson émietté, former des boulettes.",
			"Rouler dans la farine, l'œuf battu, puis la chapelure.",
			"Faire frire jusqu'à ce qu'elles soient dorées.",
		],
		category: "Plats pour enfants",
	},
	{
		name: "Riz cantonnais",
		description: "Un plat complet et rapide, inspiré de la cuisine chinoise.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Petits pois", quantity: "100g", category: "Légumes" },
			{ name: "Jambon blanc", quantity: "2 tranches", category: "Viandes" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir les œufs battus pour en faire une omelette, puis la couper en morceaux.",
			"Ajouter les petits pois, le jambon coupé et le riz dans une poêle.",
			"Mélanger le tout à feu vif et servir.",
		],
		category: "Plats rapides",
	},
	{
		name: "Chocolat chaud maison",
		description: "Une boisson réconfortante pour les journées froides.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "100g",
				category: "Produits de boulangerie",
			},
			{ name: "Lait entier", quantity: "500ml", category: "Produits laitiers" },
			{
				name: "Sucre",
				quantity: "2 cuillères à soupe",
				category: "Produits de boulangerie",
			},
			{ name: "Cannelle", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Faire chauffer le lait dans une casserole.",
			"Ajouter le chocolat en morceaux, le sucre et la cannelle.",
			"Mélanger jusqu'à ce que le chocolat soit fondu.",
			"Servir chaud dans des tasses.",
		],
		category: "Boissons",
	},
	{
		name: "Feuilletés au fromage",
		description: "Un apéritif simple et croustillant.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Graines de sésame",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Œufs", quantity: "1 pièce", category: "Produits laitiers" },
		],
		steps: [
			"Découper la pâte en bandes, les badigeonner d'œuf battu.",
			"Saupoudrer de fromage râpé et de graines de sésame.",
			"Tordre légèrement les bandes et cuire au four à 200°C pendant 15 minutes.",
			"Servir tiède.",
		],
		category: "Apéritifs",
	},
	{
		name: "Clafoutis salé aux tomates et olives",
		description: "Une version salée de ce dessert classique.",
		ingredients: [
			{ name: "Tomate cerise", quantity: "200g", category: "Légumes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Disposer les tomates cerises et les olives dans un plat.",
			"Mélanger la farine, le lait et les œufs pour former une pâte.",
			"Verser la pâte sur les légumes et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Plats végétariens",
	},

	{
		name: "Poulet au miel et au sésame",
		description: "Un plat sucré-salé aux saveurs asiatiques.",
		ingredients: [
			{ name: "Filet de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Graines de sésame",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Découper le poulet en morceaux et les faire revenir dans une poêle.",
			"Ajouter le miel, la sauce soja et les graines de sésame.",
			"Laisser caraméliser quelques minutes à feu doux.",
			"Servir chaud avec du riz ou des légumes sautés.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Gratin de pommes de terre et courgettes",
		description: "Un accompagnement fondant et savoureux.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Courgette", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Éplucher et couper les pommes de terre et les courgettes en rondelles.",
			"Disposer dans un plat à gratin en alternant les couches.",
			"Verser la crème, ajouter le fromage râpé, et cuire au four à 180°C pendant 35 minutes.",
			"Servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Quinoa aux légumes croquants",
		description: "Un plat léger et coloré avec une texture agréable.",
		ingredients: [
			{ name: "Quinoa", quantity: "200g", category: "Riz" },
			{ name: "Poivron jaune", quantity: "1 pièce", category: "Légumes" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Couper le poivron et le concombre en petits dés.",
			"Mélanger le quinoa avec les légumes et la vinaigrette.",
			"Servir frais en salade.",
		],
		category: "Salades",
	},
	{
		name: "Crumble de pommes à la cannelle",
		description: "Un dessert croustillant et parfumé.",
		ingredients: [
			{ name: "Pomme rouge", quantity: "4 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes en morceaux, puis les disposer dans un plat.",
			"Mélanger la farine, le beurre et la cannelle pour former une pâte sableuse.",
			"Répartir la pâte sur les pommes et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une boule de glace.",
		],
		category: "Desserts",
	},
	{
		name: "Lasagnes aux légumes grillés",
		description: "Une version végétarienne et légère des lasagnes.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Griller les légumes coupés en tranches.",
			"Disposer des couches de lasagnes, de légumes et de fromage dans un plat.",
			"Répéter jusqu'en haut du plat et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Muffins au chocolat et noix",
		description: "De délicieux muffins gourmands avec une touche croquante.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{
				name: "Chocolat noir",
				quantity: "100g",
				category: "Produits de boulangerie",
			},
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine avec le sucre, les œufs et le lait.",
			"Incorporer le chocolat fondu et les noix concassées.",
			"Verser dans des moules à muffins et cuire à 180°C pendant 20 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},
	{
		name: "Galette complète bretonne",
		description: "Une spécialité de Bretagne garnie de jambon, œuf et fromage.",
		ingredients: [
			{
				name: "Galette de sarrasin",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Jambon blanc", quantity: "2 tranches", category: "Viandes" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Gruyère râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Réchauffer les galettes dans une poêle.",
			"Déposer une tranche de jambon, casser un œuf au centre et parsemer de gruyère.",
			"Plier les bords et cuire jusqu'à ce que l'œuf soit cuit.",
			"Servir chaud.",
		],
		category: "Plats traditionnels",
	},
	{
		name: "Poisson vapeur aux herbes",
		description: "Un plat léger et sain, parfait pour un dîner rapide.",
		ingredients: [
			{
				name: "Filet de poisson blanc",
				quantity: "2 pièces",
				category: "Viandes",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Assaisonner le poisson avec du jus de citron, du sel et du poivre.",
			"Cuire à la vapeur pendant 10 minutes.",
			"Servir avec du persil ciselé et un filet d'huile d'olive.",
			"Accompagner de légumes vapeur.",
		],
		category: "Plats à base de poisson",
	},
	{
		name: "Gaspacho andalou",
		description: "Une soupe froide rafraîchissante et savoureuse.",
		ingredients: [
			{ name: "Tomate", quantity: "4 pièces", category: "Légumes" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Mixer les légumes avec un peu d'eau pour obtenir une texture lisse.",
			"Ajouter le vinaigre balsamique et assaisonner avec du sel et du poivre.",
			"Réfrigérer au moins 2 heures.",
			"Servir frais avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Pain d'épices maison",
		description: "Un classique moelleux et parfumé, idéal pour le goûter.",
		ingredients: [
			{ name: "Farine", quantity: "250g", category: "Produits de boulangerie" },
			{ name: "Miel", quantity: "100g", category: "Huiles et vinaigres" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Gingembre", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Mélanger la farine, le miel et les épices dans un saladier.",
			"Ajouter du lait tiède pour obtenir une pâte homogène.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},

	{
		name: "Pâtes aux courgettes et parmesan",
		description:
			"Un plat de pâtes simple et savoureux, parfait pour les repas rapides.",
		ingredients: [
			{ name: "Spaghetti", quantity: "200g", category: "Pâtes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Cuire les spaghetti dans une grande casserole d'eau bouillante salée.",
			"Faire revenir les courgettes râpées et l'ail émincé dans une poêle.",
			"Ajouter les pâtes cuites aux courgettes, puis saupoudrer de parmesan.",
			"Servir immédiatement avec un filet d'huile d'olive.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Poulet basquaise",
		description: "Un plat traditionnel du sud-ouest, riche en saveurs.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire dorer les cuisses de poulet dans une cocotte.",
			"Ajouter l'oignon émincé, les poivrons et les tomates concassées.",
			"Laisser mijoter à feu doux pendant 1 heure.",
			"Servir avec du riz ou des pommes de terre.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Cake salé aux tomates séchées et olives",
		description:
			"Un cake moelleux parfait pour les pique-niques ou les apéritifs.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Tomates séchées", quantity: "100g", category: "Légumes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour obtenir une pâte.",
			"Incorporer les tomates séchées, les olives et le gruyère.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Apéritifs",
	},
	{
		name: "Tartare de bœuf classique",
		description: "Un plat frais et savoureux pour les amateurs de viande crue.",
		ingredients: [
			{ name: "Filet de bœuf", quantity: "200g", category: "Viandes" },
			{ name: "Cornichons", quantity: "20g", category: "Épices" },
			{
				name: "Jaune d'œuf",
				quantity: "1 pièce",
				category: "Produits laitiers",
			},
			{ name: "Moutarde", quantity: "1 cuillère à soupe", category: "Épices" },
		],
		steps: [
			"Hacher finement le filet de bœuf.",
			"Mélanger avec les cornichons émincés, le jaune d'œuf et la moutarde.",
			"Assaisonner avec du sel et du poivre.",
			"Servir avec des frites ou une salade.",
		],
		category: "Plats principaux",
	},
	{
		name: "Gratin dauphinois",
		description: "Un classique riche et fondant de la cuisine française.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "250ml",
				category: "Produits laitiers",
			},
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines rondelles.",
			"Frotter un plat avec de l'ail et disposer les pommes de terre en couches.",
			"Mélanger le lait et la crème, verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 1 heure.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe de carottes et gingembre",
		description: "Une soupe légère et parfumée avec une touche épicée.",
		ingredients: [
			{ name: "Carotte", quantity: "500g", category: "Légumes" },
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Éplucher et couper les carottes en morceaux.",
			"Les cuire dans le bouillon avec le gingembre râpé.",
			"Mixer jusqu'à obtenir une texture lisse et ajouter la crème.",
			"Servir chaud avec des graines torréfiées.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de pâtes au thon",
		description: "Un plat rapide et équilibré pour les repas estivaux.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "200g", category: "Pâtes" },
			{ name: "Thon en boîte", quantity: "150g", category: "Viandes" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les pâtes, puis les laisser refroidir.",
			"Ajouter le thon émietté, les tomates en dés et la vinaigrette.",
			"Mélanger le tout et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte tatin aux poires",
		description: "Une variante fruitée et douce de la tarte tatin classique.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poire", quantity: "4 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Caraméliser le sucre et le beurre dans une poêle.",
			"Ajouter les poires coupées en quartiers et cuire légèrement.",
			"Recouvrir avec la pâte et cuire au four à 180°C pendant 25 minutes.",
			"Renverser délicatement avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Gaufres légères à la vanille",
		description: "Des gaufres moelleuses et parfumées, idéales pour le goûter.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{
				name: "Extrait de vanille",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Mélanger la farine, le sucre, le lait et l'extrait de vanille.",
			"Verser la pâte dans un gaufrier chaud.",
			"Cuire jusqu'à obtenir des gaufres dorées.",
			"Servir avec du sucre glace ou des fruits frais.",
		],
		category: "Desserts",
	},
	{
		name: "Bruschettas à la tomate et au basilic",
		description: "Une entrée italienne fraîche et simple.",
		ingredients: [
			{
				name: "Pain de campagne",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Toaster les tranches de pain.",
			"Frotter les tranches avec une gousse d'ail.",
			"Disposer les dés de tomate et le basilic ciselé.",
			"Arroser d'huile d'olive et servir immédiatement.",
		],
		category: "Entrées",
	},

	{
		name: "Curry de légumes au lait de coco",
		description:
			"Un plat végétarien crémeux et épicé, parfait pour les amateurs de saveurs exotiques.",
		ingredients: [
			{ name: "Patate douce", quantity: "300g", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Éplucher et couper les légumes en morceaux.",
			"Les faire revenir dans une poêle avec un peu d'huile.",
			"Ajouter le lait de coco et le curry, puis laisser mijoter 20 minutes.",
			"Servir chaud avec du riz ou des naans.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de poisson et épinards",
		description: "Un plat équilibré et riche en saveurs marines.",
		ingredients: [
			{ name: "Filet de poisson blanc", quantity: "300g", category: "Viandes" },
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Précuire les épinards et les disposer dans un plat à gratin.",
			"Ajouter les filets de poisson par-dessus.",
			"Recouvrir de crème fraîche et de fromage râpé.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Porridge aux fruits secs et miel",
		description: "Un petit-déjeuner sain et réconfortant.",
		ingredients: [
			{ name: "Flocons d'avoine", quantity: "50g", category: "Céréales" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Amandes", quantity: "20g", category: "Fruits secs" },
			{
				name: "Miel",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Faire chauffer le lait et y ajouter les flocons d'avoine.",
			"Cuire à feu doux jusqu'à épaississement.",
			"Garnir avec les amandes et un filet de miel.",
			"Servir chaud.",
		],
		category: "Petits-déjeuners",
	},
	{
		name: "Salade de boulgour aux herbes",
		description: "Une salade fraîche et parfumée, idéale pour l'été.",
		ingredients: [
			{ name: "Boulgour", quantity: "150g", category: "Céréales" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{
				name: "Vinaigre de cidre",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le boulgour et le laisser refroidir.",
			"Couper le concombre en petits dés.",
			"Mélanger le boulgour avec le concombre et la menthe ciselée.",
			"Assaisonner avec le vinaigre de cidre et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Clafoutis aux cerises",
		description: "Un dessert fruité et léger, idéal pour l'été.",
		ingredients: [
			{ name: "Cerises", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Disposer les cerises dans un plat beurré.",
			"Mélanger la farine, le lait et les œufs pour obtenir une pâte.",
			"Verser la pâte sur les cerises et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe froide de concombre et yaourt",
		description:
			"Une soupe légère et rafraîchissante, idéale pour les journées chaudes.",
		ingredients: [
			{ name: "Concombre", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "200g",
				category: "Produits laitiers",
			},
			{ name: "Aneth", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Citron", quantity: "1 quartier", category: "Fruits" },
		],
		steps: [
			"Mixer les concombres pelés avec le yaourt et le jus de citron.",
			"Ajouter l'aneth et assaisonner selon votre goût.",
			"Réfrigérer avant de servir dans des bols ou des verrines.",
		],
		category: "Soupes",
	},
	{
		name: "Pain perdu aux myrtilles",
		description: "Une version fruitée et gourmande du classique pain perdu.",
		ingredients: [
			{
				name: "Pain de mie",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Myrtilles", quantity: "100g", category: "Fruits" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Tremper les tranches de pain dans un mélange de lait et d'œufs.",
			"Faire dorer dans une poêle avec un peu de beurre.",
			"Servir chaud avec les myrtilles fraîches et un filet de sirop d'érable.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza blanche aux champignons",
		description:
			"Une pizza sans sauce tomate, garnie de champignons et de fromage.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte et la badigeonner de crème fraîche.",
			"Disposer les champignons émincés et la mozzarella.",
			"Cuire au four à 200°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Risotto aux légumes verts",
		description: "Un risotto crémeux et coloré, plein de légumes de saison.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Petits pois", quantity: "100g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les légumes verts dans une poêle.",
			"Cuire le riz arborio en ajoutant progressivement du bouillon chaud.",
			"Incorporer les légumes, le parmesan et un peu de beurre.",
			"Servir chaud avec des herbes fraîches.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Brownies aux noix de pécan",
		description: "Des brownies riches et croquants, parfaits pour le goûter.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Noix de pécan", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Mélanger avec la farine, les œufs et les noix de pécan.",
			"Verser dans un moule et cuire au four à 180°C pendant 20 minutes.",
			"Laisser refroidir avant de découper en carrés.",
		],
		category: "Desserts",
	},

	{
		name: "Tarte rustique aux légumes",
		description:
			"Une tarte simple et colorée, parfaite pour utiliser des légumes de saison.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte sur une plaque et disposer les légumes tranchés.",
			"Ajouter des morceaux de fromage de chèvre.",
			"Replier les bords de la pâte vers l'intérieur.",
			"Cuire au four à 200°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Filet mignon en croûte",
		description: "Un plat élégant pour les repas festifs.",
		ingredients: [
			{ name: "Filet mignon de porc", quantity: "500g", category: "Viandes" },
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir le filet mignon et les champignons émincés.",
			"Enrober le filet mignon dans les champignons et la crème.",
			"Emballer le tout dans la pâte feuilletée et sceller les bords.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Velouté de patate douce et coco",
		description:
			"Une soupe douce et exotique, idéale pour les soirées fraîches.",
		ingredients: [
			{ name: "Patate douce", quantity: "400g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
			{ name: "Curcuma", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir l'oignon dans une casserole.",
			"Ajouter les patates douces coupées en morceaux et couvrir d'eau.",
			"Cuire jusqu'à tendreté, puis mixer avec le lait de coco et le curcuma.",
			"Servir chaud avec des graines de sésame.",
		],
		category: "Soupes",
	},
	{
		name: "Riz sauté au tofu et légumes",
		description: "Un plat rapide et équilibré, parfait pour les soirs pressés.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{
				name: "Tofu ferme",
				quantity: "150g",
				category: "Viandes végétariennes",
			},
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "3 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et réserver.",
			"Faire revenir les légumes et le tofu coupés en dés dans une poêle.",
			"Ajouter le riz et la sauce soja, puis mélanger.",
			"Servir chaud.",
		],
		category: "Plats rapides",
	},
	{
		name: "Gâteau au yaourt aux fruits rouges",
		description: "Un dessert facile et moelleux, agrémenté de fruits rouges.",
		ingredients: [
			{
				name: "Yaourt nature",
				quantity: "1 pot",
				category: "Produits laitiers",
			},
			{
				name: "Farine",
				quantity: "2 pots",
				category: "Produits de boulangerie",
			},
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Framboises", quantity: "100g", category: "Fruits" },
		],
		steps: [
			"Mélanger le yaourt, la farine et le sucre pour former une pâte.",
			"Incorporer les fruits rouges délicatement.",
			"Verser dans un moule et cuire au four à 180°C pendant 30 minutes.",
			"Servir froid ou tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Couscous végétarien",
		description: "Un plat méditerranéen riche en légumes et en saveurs.",
		ingredients: [
			{ name: "Semoule de couscous", quantity: "200g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Pois chiches", quantity: "150g", category: "Légumes" },
		],
		steps: [
			"Cuire les légumes et les pois chiches dans un bouillon épicé.",
			"Préparer la semoule selon les instructions.",
			"Servir les légumes sur la semoule et arroser de bouillon chaud.",
			"Ajouter des herbes fraîches pour la décoration.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Salade de quinoa à l'avocat",
		description: "Une salade nutritive et rafraîchissante.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Avocat", quantity: "1 pièce", category: "Fruits" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Couper les tomates et l'avocat en dés.",
			"Mélanger les ingrédients avec la vinaigrette.",
			"Servir frais en entrée ou en plat léger.",
		],
		category: "Salades",
	},
	{
		name: "Brochettes de légumes marinés",
		description: "Un accompagnement sain et coloré pour les barbecues.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les légumes en morceaux adaptés aux brochettes.",
			"Les faire mariner dans un mélange d'huile d'olive et de vinaigre balsamique.",
			"Enfiler sur des piques à brochettes et cuire au barbecue ou au four.",
			"Servir chaud ou tiède.",
		],
		category: "Accompagnements",
	},
	{
		name: "Ratatouille provençale",
		description: "Un plat mijoté aux légumes méditerranéens, riche en saveurs.",
		ingredients: [
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
		],
		steps: [
			"Couper tous les légumes en morceaux.",
			"Faire revenir dans une cocotte avec un peu d'huile d'olive.",
			"Laisser mijoter à feu doux pendant 30 minutes.",
			"Servir chaud ou froid, en accompagnement ou en plat principal.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tiramisu aux fruits rouges",
		description: "Une variante fruitée et légère du dessert italien classique.",
		ingredients: [
			{ name: "Mascarpone", quantity: "250g", category: "Produits laitiers" },
			{
				name: "Biscuits à la cuillère",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Framboises", quantity: "100g", category: "Fruits" },
		],
		steps: [
			"Tremper les biscuits dans un jus de fruits rouges.",
			"Disposer une couche de biscuits, puis une couche de mascarpone fouetté.",
			"Répéter les couches et ajouter les fruits rouges sur le dessus.",
			"Réfrigérer pendant 4 heures avant de servir.",
		],
		category: "Desserts",
	},

	{
		name: "Wraps au poulet et crudités",
		description:
			"Un repas rapide et équilibré, idéal pour les déjeuners sur le pouce.",
		ingredients: [
			{
				name: "Tortilla",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Filet de poulet", quantity: "150g", category: "Viandes" },
			{ name: "Carotte", quantity: "1 pièce", category: "Légumes" },
			{ name: "Laitue", quantity: "4 feuilles", category: "Légumes" },
		],
		steps: [
			"Faire griller le poulet et le couper en fines lamelles.",
			"Râper la carotte et laver les feuilles de laitue.",
			"Disposer les ingrédients sur la tortilla et rouler fermement.",
			"Couper en deux avant de servir.",
		],
		category: "Snacks",
	},
	{
		name: "Gnocchis au pesto et parmesan",
		description: "Un plat simple et savoureux pour les amateurs de pâtes.",
		ingredients: [
			{ name: "Gnocchis", quantity: "300g", category: "Pâtes" },
			{ name: "Pesto", quantity: "3 cuillères à soupe", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Tomates cerises", quantity: "100g", category: "Légumes" },
		],
		steps: [
			"Cuire les gnocchis dans de l'eau bouillante jusqu'à ce qu'ils remontent.",
			"Égoutter et mélanger avec le pesto.",
			"Ajouter les tomates cerises coupées en deux et saupoudrer de parmesan.",
			"Servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Curry de pois chiches et courgettes",
		description: "Un plat végétalien parfumé et facile à préparer.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir les courgettes coupées en dés dans une poêle.",
			"Ajouter les pois chiches, le lait de coco et le curry.",
			"Laisser mijoter 15 minutes à feu doux.",
			"Servir chaud avec du riz.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Quiche épinards et feta",
		description:
			"Une quiche savoureuse et légère, idéale pour un repas équilibré.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les épinards et les disposer sur la pâte.",
			"Ajouter des morceaux de feta et verser un mélange d'œufs battus avec de la crème.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Salade de lentilles au saumon fumé",
		description:
			"Une salade complète et savoureuse, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Lentilles", quantity: "200g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "100g", category: "Viandes" },
			{ name: "Oignon rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les lentilles et les laisser refroidir.",
			"Ajouter des lamelles de saumon fumé et l'oignon rouge émincé.",
			"Assaisonner avec la vinaigrette et mélanger.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Flan pâtissier maison",
		description:
			"Un dessert onctueux et gourmand, parfait pour terminer un repas.",
		ingredients: [
			{ name: "Lait entier", quantity: "500ml", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Faire chauffer le lait avec le sucre.",
			"Mélanger la farine avec les œufs, puis incorporer le lait chaud.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de brocoli et cheddar",
		description: "Un plat végétarien crémeux et savoureux.",
		ingredients: [
			{ name: "Brocoli", quantity: "500g", category: "Légumes" },
			{ name: "Cheddar râpé", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Chapelure",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Précuire le brocoli à la vapeur.",
			"Disposer dans un plat à gratin, recouvrir de crème et de cheddar.",
			"Saupoudrer de chapelure et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Smoothie à la mangue et au gingembre",
		description:
			"Une boisson fruitée et épicée, parfaite pour un regain d'énergie.",
		ingredients: [
			{ name: "Mangue", quantity: "1 pièce", category: "Fruits" },
			{ name: "Banane", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
		],
		steps: [
			"Peler et couper les fruits en morceaux.",
			"Mixer avec le lait de coco et le gingembre râpé.",
			"Servir frais avec quelques glaçons.",
		],
		category: "Boissons",
	},
	{
		name: "Omelette aux herbes et fromage",
		description: "Un repas simple et rapide, rehaussé par des herbes fraîches.",
		ingredients: [
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Battre les œufs avec du sel, du poivre et le persil ciselé.",
			"Faire fondre le beurre dans une poêle et cuire l'omelette.",
			"Ajouter le fromage râpé avant de plier l'omelette.",
			"Servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Pain aux noix et au miel",
		description:
			"Un pain rustique et légèrement sucré, parfait pour le petit-déjeuner.",
		ingredients: [
			{ name: "Farine", quantity: "300g", category: "Produits de boulangerie" },
			{ name: "Noix", quantity: "100g", category: "Fruits secs" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Levure boulangère",
				quantity: "1 sachet",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Mélanger la farine, la levure, les noix et le miel.",
			"Ajouter de l'eau tiède pour former une pâte homogène.",
			"Laisser lever 1 heure, puis façonner un pain.",
			"Cuire au four à 200°C pendant 30 minutes.",
		],
		category: "Produits de boulangerie",
	},

	{
		name: "Crumble de légumes au parmesan",
		description:
			"Un accompagnement croquant et savoureux, idéal avec des viandes ou des poissons.",
		ingredients: [
			{ name: "Courgette", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomate", quantity: "3 pièces", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Couper les légumes en morceaux et les disposer dans un plat.",
			"Mélanger la farine, le beurre et le parmesan pour former un crumble.",
			"Émietter le crumble sur les légumes.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Brochettes de poulet au citron et romarin",
		description:
			"Des brochettes légères et parfumées, parfaites pour les barbecues.",
		ingredients: [
			{ name: "Filet de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper le poulet en morceaux et les mariner avec le jus de citron, l'huile d'olive et le romarin.",
			"Enfiler les morceaux sur des piques à brochettes.",
			"Griller au barbecue ou au four jusqu'à cuisson complète.",
			"Servir avec une salade verte.",
		],
		category: "Recettes pour barbecue",
	},
	{
		name: "Salade de roquette et parmesan",
		description: "Une salade fraîche et simple, idéale en entrée.",
		ingredients: [
			{ name: "Roquette", quantity: "100g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Pignons de pin", quantity: "30g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Laver la roquette et la disposer dans un saladier.",
			"Ajouter des copeaux de parmesan et les pignons de pin.",
			"Arroser de vinaigrette et mélanger délicatement.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte aux pommes caramélisées",
		description:
			"Un dessert classique et gourmand, parfait pour finir un repas.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pomme rouge", quantity: "4 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Éplucher et couper les pommes en tranches.",
			"Caraméliser le sucre et le beurre dans une poêle, puis ajouter les pommes.",
			"Disposer les pommes caramélisées sur la pâte et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe de courgettes et menthe",
		description: "Une soupe légère et rafraîchissante pour les soirées d'été.",
		ingredients: [
			{ name: "Courgette", quantity: "3 pièces", category: "Légumes" },
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire les courgettes dans le bouillon de légumes.",
			"Mixer les courgettes avec quelques feuilles de menthe.",
			"Ajouter la crème fraîche et réchauffer doucement.",
			"Servir chaud ou tiède.",
		],
		category: "Soupes",
	},
	{
		name: "Galettes de légumes",
		description:
			"Des galettes croustillantes, parfaites pour accompagner des viandes ou des poissons.",
		ingredients: [
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Râper les légumes et les mélanger avec les œufs et la farine.",
			"Former des galettes et les faire cuire dans une poêle chaude avec un peu d'huile.",
			"Servir chaud avec une sauce au yaourt.",
		],
		category: "Accompagnements",
	},
	{
		name: "Penne aux épinards et ricotta",
		description: "Un plat de pâtes crémeux et savoureux.",
		ingredients: [
			{ name: "Penne", quantity: "250g", category: "Pâtes" },
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Ricotta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Cuire les pâtes selon les instructions.",
			"Faire revenir l'ail et les épinards dans une poêle.",
			"Ajouter la ricotta, mélanger et incorporer les pâtes.",
			"Servir chaud avec un peu de parmesan râpé.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Gâteau au chocolat fondant",
		description: "Un dessert intense en chocolat pour les gourmands.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Ajouter la farine et les œufs pour former une pâte lisse.",
			"Verser dans un moule et cuire au four à 180°C pendant 15 minutes.",
			"Servir tiède pour un cœur fondant.",
		],
		category: "Desserts",
	},
	{
		name: "Tartines avocat et œuf poché",
		description: "Un brunch savoureux et sain, prêt en quelques minutes.",
		ingredients: [
			{
				name: "Pain complet",
				quantity: "2 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Avocat", quantity: "1 pièce", category: "Fruits" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Citron", quantity: "1 quartier", category: "Fruits" },
		],
		steps: [
			"Toaster les tranches de pain.",
			"Écraser l'avocat avec un peu de jus de citron et l'étaler sur le pain.",
			"Pocher les œufs et les disposer sur les tartines.",
			"Assaisonner avec du sel, du poivre et servir.",
		],
		category: "Brunchs",
	},
	{
		name: "Brioche maison",
		description:
			"Une brioche moelleuse et légèrement sucrée, parfaite pour le petit-déjeuner.",
		ingredients: [
			{ name: "Farine", quantity: "500g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "150g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{
				name: "Levure boulangère",
				quantity: "1 sachet",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Mélanger la farine, le sucre, la levure et le beurre fondu.",
			"Pétrir jusqu'à obtenir une pâte lisse et laisser lever 2 heures.",
			"Façonner la brioche et cuire au four à 180°C pendant 25 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Produits de boulangerie",
	},

	{
		name: "Boulettes de viande à la tomate",
		description: "Des boulettes tendres mijotées dans une sauce tomate maison.",
		ingredients: [
			{ name: "Viande hachée de bœuf", quantity: "400g", category: "Viandes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Mélanger la viande avec du persil ciselé et façonner des boulettes.",
			"Faire revenir les boulettes dans une poêle jusqu'à ce qu'elles soient dorées.",
			"Ajouter l'oignon émincé et les tomates concassées.",
			"Laisser mijoter 20 minutes et servir chaud avec des pâtes ou du riz.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade niçoise",
		description: "Un classique méditerranéen frais et coloré.",
		ingredients: [
			{ name: "Laitue", quantity: "1 pièce", category: "Légumes" },
			{ name: "Thon en boîte", quantity: "150g", category: "Viandes" },
			{ name: "Haricots verts", quantity: "100g", category: "Légumes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Laver et disposer la laitue dans un plat.",
			"Ajouter les haricots verts blanchis, le thon émietté et les olives.",
			"Assaisonner avec une vinaigrette au citron et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Blanquette de poisson",
		description:
			"Une version légère et délicate de la blanquette traditionnelle.",
		ingredients: [
			{ name: "Filet de poisson blanc", quantity: "300g", category: "Viandes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les légumes dans une casserole.",
			"Ajouter le poisson et un peu de bouillon, laisser mijoter 15 minutes.",
			"Incorporer la crème en fin de cuisson.",
			"Servir avec du riz ou des pommes de terre vapeur.",
		],
		category: "Plats principaux",
	},
	{
		name: "Cakes individuels aux légumes",
		description:
			"Des petits cakes salés parfaits pour les pique-niques ou les apéritifs.",
		ingredients: [
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Carotte", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour former une pâte.",
			"Incorporer les légumes râpés et le fromage.",
			"Verser dans des moules individuels et cuire au four à 180°C pendant 20 minutes.",
			"Laisser tiédir avant de servir.",
		],
		category: "Apéritifs",
	},
	{
		name: "Riz au lait à la vanille",
		description: "Un dessert doux et crémeux avec un parfum de vanille.",
		ingredients: [
			{ name: "Riz rond", quantity: "100g", category: "Riz" },
			{ name: "Lait entier", quantity: "500ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Gousse de vanille", quantity: "1 pièce", category: "Épices" },
		],
		steps: [
			"Faire chauffer le lait avec la gousse de vanille fendue.",
			"Ajouter le riz et cuire à feu doux en remuant régulièrement.",
			"Incorporer le sucre en fin de cuisson.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Frites de patate douce au paprika",
		description: "Une alternative saine et savoureuse aux frites classiques.",
		ingredients: [
			{ name: "Patate douce", quantity: "2 pièces", category: "Légumes" },
			{ name: "Paprika", quantity: "1 cuillère à café", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Sel", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les patates douces en bâtonnets.",
			"Les mélanger avec l'huile d'olive, le paprika et le sel.",
			"Disposer sur une plaque et cuire au four à 200°C pendant 20 minutes.",
			"Servir chaud avec une sauce dip.",
		],
		category: "Accompagnements",
	},
	{
		name: "Omelette aux champignons et fines herbes",
		description: "Un plat simple et rapide pour un déjeuner léger.",
		ingredients: [
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Champignon de Paris", quantity: "150g", category: "Légumes" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle avec du beurre.",
			"Battre les œufs avec le persil ciselé et les verser dans la poêle.",
			"Cuire à feu doux jusqu'à ce que l'omelette soit prise.",
			"Servir chaud avec une salade.",
		],
		category: "Plats rapides",
	},
	{
		name: "Smoothie fraise-banane",
		description:
			"Une boisson fruitée et nourrissante, idéale pour un petit-déjeuner rapide.",
		ingredients: [
			{ name: "Fraises", quantity: "100g", category: "Fruits" },
			{ name: "Banane", quantity: "1 pièce", category: "Fruits" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{
				name: "Miel",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Peler et couper les fruits en morceaux.",
			"Mixer avec le lait et le miel jusqu'à obtenir une consistance lisse.",
			"Servir frais dans un verre.",
		],
		category: "Boissons",
	},
	{
		name: "Tarte aux poireaux et lardons",
		description: "Une tarte salée gourmande, parfaite pour un repas convivial.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poireau", quantity: "2 pièces", category: "Légumes" },
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les poireaux émincés et les lardons dans une poêle.",
			"Disposer sur la pâte étalée dans un moule.",
			"Recouvrir de crème et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud ou tiède.",
		],
		category: "Plats principaux",
	},
	{
		name: "Cookies aux pépites de chocolat",
		description:
			"Des cookies croustillants à l'extérieur et moelleux à l'intérieur.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{
				name: "Pépites de chocolat",
				quantity: "100g",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Mélanger le beurre mou avec le sucre, puis ajouter la farine.",
			"Incorporer les pépites de chocolat et former des boules.",
			"Disposer sur une plaque et cuire au four à 180°C pendant 12 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},

	{
		name: "Poulet tikka masala",
		description:
			"Un plat indien riche en saveurs avec une sauce épicée et crémeuse.",
		ingredients: [
			{ name: "Filet de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Tomates concassées", quantity: "200g", category: "Légumes" },
			{
				name: "Garam masala",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Mariner le poulet dans le yaourt avec du garam masala pendant 1 heure.",
			"Faire revenir le poulet dans une poêle jusqu'à ce qu'il soit doré.",
			"Ajouter les tomates concassées et laisser mijoter 20 minutes.",
			"Servir chaud avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Velouté de potiron et noisettes",
		description: "Une soupe automnale douce et croquante.",
		ingredients: [
			{ name: "Potiron", quantity: "500g", category: "Légumes" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire revenir l'oignon émincé, puis ajouter le potiron coupé en dés.",
			"Couvrir d'eau et cuire jusqu'à tendreté.",
			"Mixer, ajouter la crème et parsemer de noisettes concassées avant de servir.",
			"Servir chaud.",
		],
		category: "Soupes",
	},
	{
		name: "Salade d'endives au bleu et noix",
		description: "Une salade croquante et savoureuse, parfaite pour l'hiver.",
		ingredients: [
			{ name: "Endives", quantity: "3 pièces", category: "Légumes" },
			{ name: "Fromage bleu", quantity: "100g", category: "Produits laitiers" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Laver et couper les endives en morceaux.",
			"Ajouter des morceaux de fromage bleu et les noix concassées.",
			"Assaisonner avec la vinaigrette et mélanger.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Lasagnes végétariennes au fromage",
		description: "Une version végétarienne et fondante du classique italien.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Ricotta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards et les mélanger avec la ricotta.",
			"Monter les lasagnes en alternant feuilles, épinards et mozzarella.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Ratatouille gratinée au fromage",
		description:
			"Un plat méditerranéen traditionnel revisité avec une touche gratinée.",
		ingredients: [
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les légumes en morceaux et les faire mijoter dans une poêle.",
			"Transférer dans un plat à gratin et parsemer de gruyère.",
			"Gratiner au four à 200°C pendant 15 minutes.",
			"Servir chaud en accompagnement.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Crêpes à la farine de châtaigne",
		description:
			"Des crêpes au goût unique, idéales pour un dessert ou un goûter.",
		ingredients: [
			{
				name: "Farine de châtaigne",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "30g", category: "Produits de boulangerie" },
		],
		steps: [
			"Mélanger la farine, le sucre et les œufs.",
			"Ajouter le lait progressivement pour éviter les grumeaux.",
			"Cuire les crêpes dans une poêle chaude légèrement huilée.",
			"Servir avec du miel ou une confiture de saison.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe minestrone",
		description: "Une soupe italienne riche en légumes et pâtes.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Haricots blancs", quantity: "150g", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Pâtes courtes", quantity: "100g", category: "Pâtes" },
		],
		steps: [
			"Faire revenir les légumes dans une grande casserole.",
			"Ajouter les haricots et les tomates, couvrir d'eau.",
			"Cuire 20 minutes, puis ajouter les pâtes et prolonger la cuisson de 10 minutes.",
			"Servir chaud avec du parmesan râpé.",
		],
		category: "Soupes",
	},
	{
		name: "Cake citron-pavot",
		description: "Un gâteau moelleux et acidulé, parfait pour le goûter.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Graines de pavot",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, le sucre, le beurre fondu et le jus de citron.",
			"Ajouter les graines de pavot et mélanger.",
			"Verser dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin dauphinois à l'ail",
		description: "Un plat réconfortant et crémeux, parfait en accompagnement.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "250ml",
				category: "Produits laitiers",
			},
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines rondelles.",
			"Frotter un plat à gratin avec l'ail et disposer les pommes de terre.",
			"Mélanger le lait et la crème, verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 1 heure.",
		],
		category: "Accompagnements",
	},
	{
		name: "Pain de mie maison",
		description:
			"Un pain moelleux et légèrement sucré, parfait pour les sandwichs.",
		ingredients: [
			{ name: "Farine", quantity: "400g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{
				name: "Levure boulangère",
				quantity: "1 sachet",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Mélanger la farine, la levure, le lait tiède et le beurre fondu.",
			"Pétrir la pâte et laisser lever 1 heure.",
			"Façonner un pain et cuire au four à 180°C pendant 25 minutes.",
			"Laisser refroidir avant de trancher.",
		],
		category: "Produits de boulangerie",
	},

	{
		name: "Soupe de lentilles corail et carottes",
		description: "Une soupe riche et épicée, idéale pour les soirées fraîches.",
		ingredients: [
			{ name: "Lentilles corail", quantity: "200g", category: "Légumes" },
			{ name: "Carotte", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Curry doux", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir les carottes coupées en rondelles.",
			"Ajouter les lentilles, le lait de coco et le curry.",
			"Couvrir d'eau et cuire 20 minutes.",
			"Mixer pour obtenir une texture veloutée et servir chaud.",
		],
		category: "Soupes",
	},
	{
		name: "Quiche aux champignons et comté",
		description:
			"Une quiche riche en saveurs et parfaite pour un repas rapide.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Comté râpé", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les champignons émincés et les disposer sur la pâte.",
			"Ajouter le comté et la crème mélangée aux œufs battus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Salade de chou rouge et pommes",
		description: "Une salade croquante et sucrée-salée, idéale pour l'hiver.",
		ingredients: [
			{ name: "Chou rouge", quantity: "200g", category: "Légumes" },
			{ name: "Pomme verte", quantity: "1 pièce", category: "Fruits" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Émincer le chou rouge et couper la pomme en fines tranches.",
			"Mélanger avec les noix et assaisonner avec la vinaigrette.",
			"Servir frais en entrée ou en accompagnement.",
		],
		category: "Salades",
	},
	{
		name: "Pizza aux légumes grillés",
		description: "Une pizza colorée et légère, garnie de légumes de saison.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Griller les légumes tranchés et les réserver.",
			"Étaler la pâte, ajouter une base de sauce tomate et disposer les légumes.",
			"Parsemer de mozzarella et cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Cookies avoine et raisins secs",
		description: "Des cookies sains et gourmands, parfaits pour une collation.",
		ingredients: [
			{ name: "Flocons d'avoine", quantity: "100g", category: "Céréales" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Raisins secs", quantity: "50g", category: "Fruits secs" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger les flocons d'avoine, la farine, les raisins secs et le sucre.",
			"Ajouter le beurre mou et former une pâte.",
			"Façonner des boules et les disposer sur une plaque.",
			"Cuire au four à 180°C pendant 12 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Brochettes de crevettes marinées",
		description:
			"Des brochettes savoureuses, idéales pour les barbecues ou les planchas.",
		ingredients: [
			{ name: "Crevettes", quantity: "200g", category: "Viandes" },
			{ name: "Citron vert", quantity: "1 pièce", category: "Fruits" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Mariner les crevettes avec le jus de citron, l'ail haché et l'huile d'olive pendant 1 heure.",
			"Enfiler les crevettes sur des piques en bois.",
			"Griller les brochettes quelques minutes de chaque côté.",
			"Servir avec une sauce au yaourt ou une salade.",
		],
		category: "Recettes pour barbecue",
	},
	{
		name: "Tarte aux poires et chocolat",
		description:
			"Un dessert gourmand alliant le fondant des poires et l'intensité du chocolat.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poires", quantity: "3 pièces", category: "Fruits" },
			{
				name: "Chocolat noir",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la précuire à blanc.",
			"Faire fondre le chocolat avec la crème et verser sur la pâte.",
			"Disposer les poires tranchées sur le chocolat.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Velouté d'asperges et parmesan",
		description:
			"Une soupe élégante et délicate, parfaite pour les occasions spéciales.",
		ingredients: [
			{ name: "Asperges vertes", quantity: "500g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les asperges et la pomme de terre coupée en morceaux dans de l'eau bouillante.",
			"Mixer les légumes avec la crème jusqu'à obtenir un velouté.",
			"Servir chaud avec du parmesan râpé par-dessus.",
		],
		category: "Soupes",
	},
	{
		name: "Tagliatelles au saumon fumé",
		description: "Un plat simple et raffiné, parfait pour les repas rapides.",
		ingredients: [
			{ name: "Tagliatelles", quantity: "250g", category: "Pâtes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Aneth", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Cuire les tagliatelles dans une grande casserole d'eau salée.",
			"Faire chauffer la crème avec des morceaux de saumon fumé.",
			"Mélanger avec les pâtes cuites et saupoudrer d'aneth.",
			"Servir immédiatement.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Pain perdu brioché à la cannelle",
		description: "Une version luxueuse du pain perdu avec une touche épicée.",
		ingredients: [
			{
				name: "Brioche",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Tremper les tranches de brioche dans un mélange de lait, œufs et cannelle.",
			"Faire dorer dans une poêle beurrée des deux côtés.",
			"Servir chaud avec du sucre glace ou du sirop d'érable.",
		],
		category: "Desserts",
	},

	{
		name: "Poulet au citron et olives",
		description:
			"Un plat mijoté aux saveurs méditerranéennes, idéal pour un repas en famille.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Citron confit", quantity: "1 pièce", category: "Fruits" },
			{ name: "Olives vertes", quantity: "100g", category: "Fruits secs" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir les cuisses de poulet dans une cocotte jusqu'à ce qu'elles soient dorées.",
			"Ajouter l'oignon émincé, le citron confit coupé en morceaux et les olives.",
			"Couvrir d'eau et laisser mijoter 40 minutes.",
			"Servir chaud avec de la semoule ou du riz.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Taboulé de quinoa à la menthe",
		description:
			"Une salade légère et rafraîchissante, parfaite pour les repas estivaux.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomate", quantity: "2 pièces", category: "Légumes" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Couper les légumes en petits dés et ciseler la menthe.",
			"Mélanger le tout et assaisonner avec une vinaigrette citronnée.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Velouté de chou-fleur au curry",
		description: "Un velouté crémeux et légèrement épicé pour un dîner léger.",
		ingredients: [
			{ name: "Chou-fleur", quantity: "1 pièce", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le chou-fleur et les pommes de terre dans une casserole d'eau bouillante.",
			"Mixer avec la crème et le curry jusqu'à obtenir une texture lisse.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte aux légumes du soleil",
		description:
			"Une tarte colorée et savoureuse, idéale pour les repas d'été.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les légumes grillés sur la pâte.",
			"Ajouter des tranches de fromage de chèvre.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},

	{
		name: "Gratin de pommes de terre et saumon fumé",
		description:
			"Un gratin fondant avec une touche de fumé, idéal pour un repas réconfortant.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines tranches.",
			"Disposer une couche de pommes de terre, une couche de saumon fumé et un peu de crème dans un plat.",
			"Répéter l'opération jusqu'en haut, terminer avec du fromage râpé.",
			"Cuire au four à 180°C pendant 40 minutes.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Brochettes de légumes et halloumi",
		description:
			"Un plat végétarien idéal pour les barbecues ou les repas légers.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron jaune", quantity: "1 pièce", category: "Légumes" },
			{ name: "Halloumi", quantity: "200g", category: "Produits laitiers" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les légumes et le halloumi en cubes.",
			"Enfiler sur des piques en alternant légumes et halloumi.",
			"Badigeonner d'huile d'olive et assaisonner avec du sel et du poivre.",
			"Griller au barbecue ou au four pendant 10 minutes.",
		],
		category: "Recettes pour barbecue",
	},
	{
		name: "Curry d'épinards et pois chiches",
		description:
			"Un plat végétalien crémeux et épicé, parfait pour un repas réconfortant.",
		ingredients: [
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Curry doux", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle jusqu'à ce qu'ils réduisent.",
			"Ajouter les pois chiches, le lait de coco et le curry.",
			"Laisser mijoter 15 minutes à feu doux.",
			"Servir avec du riz ou du pain naan.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de poireaux et pommes de terre",
		description:
			"Une soupe classique et réconfortante, idéale pour les soirées fraîches.",
		ingredients: [
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les poireaux émincés dans une casserole.",
			"Ajouter les pommes de terre coupées en morceaux et le bouillon.",
			"Cuire jusqu'à tendreté, puis mixer avec la crème fraîche.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte tatin aux légumes",
		description: "Une tarte renversée salée avec des légumes caramélisés.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Beurre", quantity: "20g", category: "Produits laitiers" },
		],
		steps: [
			"Caraméliser les légumes dans une poêle avec le beurre et un peu de sucre.",
			"Transférer les légumes dans un moule et recouvrir de pâte feuilletée.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Renverser délicatement et servir chaud.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Clafoutis salé aux courgettes et feta",
		description:
			"Un clafoutis léger et savoureux, parfait pour un repas estival.",
		ingredients: [
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Couper les courgettes en rondelles et les faire revenir légèrement.",
			"Mélanger la farine, le lait et les œufs pour former une pâte.",
			"Disposer les courgettes et la feta dans un plat, verser la pâte par-dessus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet rôti au thym et citron",
		description:
			"Un classique savoureux et juteux, parfait pour un repas familial.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Thym", quantity: "2 branches", category: "Épices" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
		],
		steps: [
			"Farcir le poulet avec le citron coupé en deux, l'ail et le thym.",
			"Badigeonner d'huile d'olive et assaisonner avec du sel et du poivre.",
			"Rôtir au four à 200°C pendant 1h30, en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Brownies aux noix de macadamia",
		description: "Une version croquante et gourmande du classique brownie.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Noix de macadamia", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Mélanger avec la farine, le sucre et les œufs.",
			"Incorporer les noix de macadamia et verser dans un moule.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Risotto aux champignons et parmesan",
		description: "Un plat crémeux et savoureux pour une soirée cosy.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Champignon de Paris", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons dans une poêle avec un peu de beurre.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer le parmesan en fin de cuisson.",
			"Servir immédiatement avec des herbes fraîches.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Cake aux carottes et aux épices",
		description:
			"Un cake moelleux et parfumé, parfait pour un goûter gourmand.",
		ingredients: [
			{ name: "Carottes", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Râper les carottes et les mélanger avec la farine, le sucre et les épices.",
			"Incorporer les œufs et les noix concassées.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},

	{
		name: "Tarte fine aux pommes et cannelle",
		description:
			"Une tarte simple et élégante, parfaite pour un dessert rapide.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes", quantity: "3 pièces", category: "Fruits" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte sur une plaque de cuisson.",
			"Disposer les tranches de pommes fines en éventail sur la pâte.",
			"Saupoudrer de sucre et de cannelle.",
			"Cuire au four à 200°C pendant 20 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe froide de tomates et basilic",
		description:
			"Une soupe fraîche et légère, idéale pour les chaudes journées d'été.",
		ingredients: [
			{ name: "Tomates", quantity: "500g", category: "Légumes" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Basilic frais", quantity: "10 feuilles", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Mixer les tomates pelées et épépinées avec le concombre.",
			"Ajouter le basilic et l'huile d'olive.",
			"Assaisonner avec du sel et du poivre.",
			"Réfrigérer avant de servir bien frais.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin de courge butternut",
		description:
			"Un gratin doux et fondant, parfait pour accompagner un plat principal.",
		ingredients: [
			{ name: "Courge butternut", quantity: "500g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Éplucher et couper la courge en tranches fines.",
			"Disposer dans un plat à gratin et recouvrir de crème.",
			"Saupoudrer de gruyère et de muscade.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Croque-monsieur classique",
		description:
			"Un en-cas rapide et savoureux, parfait pour un repas sur le pouce.",
		ingredients: [
			{
				name: "Pain de mie",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Jambon blanc", quantity: "2 tranches", category: "Viandes" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Beurre", quantity: "20g", category: "Produits laitiers" },
		],
		steps: [
			"Beurrer les tranches de pain de mie.",
			"Disposer une tranche de jambon et du fromage entre deux tranches.",
			"Griller au four ou dans une poêle jusqu'à ce que le fromage fonde.",
			"Servir chaud avec une salade verte.",
		],
		category: "Snacks",
	},
	{
		name: "Risotto aux légumes verts",
		description: "Un risotto crémeux et coloré, riche en saveurs végétales.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Petits pois", quantity: "100g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir la courgette et les petits pois dans une poêle.",
			"Ajouter le riz et mouiller progressivement avec le bouillon chaud.",
			"Cuire en remuant jusqu'à ce que le riz soit tendre.",
			"Servir avec du parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pâtes aux fruits de mer",
		description:
			"Un plat savoureux et raffiné, parfait pour les amateurs de fruits de mer.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Crevettes", quantity: "150g", category: "Viandes" },
			{ name: "Moules", quantity: "200g", category: "Viandes" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Cuire les spaghetti dans de l'eau bouillante salée.",
			"Faire revenir l'ail avec les fruits de mer dans une poêle.",
			"Ajouter les pâtes cuites et mélanger.",
			"Servir avec un filet d'huile d'olive et du persil.",
		],
		category: "Plats à base de pâtes",
	},
	{
		name: "Gâteau renversé à l'ananas",
		description: "Un dessert rétro et gourmand avec une base caramélisée.",
		ingredients: [
			{ name: "Ananas en tranches", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Caraméliser le sucre et le beurre dans un moule.",
			"Disposer les tranches d'ananas sur le caramel.",
			"Préparer une pâte à gâteau et la verser par-dessus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Burger végétarien aux pois chiches",
		description:
			"Un burger sain et savoureux avec une galette de pois chiches maison.",
		ingredients: [
			{
				name: "Pain à burger",
				quantity: "2 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Carotte", quantity: "1 pièce", category: "Légumes" },
			{ name: "Yaourt nature", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Mixer les pois chiches avec la carotte râpée pour former une pâte.",
			"Façonner des galettes et les cuire à la poêle.",
			"Assembler le burger avec les galettes, le yaourt et des crudités.",
			"Servir chaud avec des frites.",
		],
		category: "Snacks",
	},
	{
		name: "Poêlée de champignons à l'ail et au persil",
		description: "Une recette simple et savoureuse, idéale en accompagnement.",
		ingredients: [
			{ name: "Champignons de Paris", quantity: "300g", category: "Légumes" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Beurre", quantity: "20g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans du beurre.",
			"Ajouter l'ail haché et le persil ciselé en fin de cuisson.",
			"Assaisonner avec du sel et du poivre.",
			"Servir chaud avec des viandes ou des pâtes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Tiramisu au café",
		description: "Un dessert italien classique, léger et crémeux.",
		ingredients: [
			{ name: "Mascarpone", quantity: "250g", category: "Produits laitiers" },
			{
				name: "Biscuits à la cuillère",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Café fort", quantity: "200ml", category: "Boissons" },
			{
				name: "Cacao en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Tremper les biscuits dans le café et les disposer dans un plat.",
			"Ajouter une couche de mascarpone fouetté avec du sucre.",
			"Répéter les couches et saupoudrer de cacao.",
			"Réfrigérer au moins 4 heures avant de servir.",
		],
		category: "Desserts",
	},

	{
		name: "Tiramisu au café",
		description: "Un dessert italien classique, léger et crémeux.",
		ingredients: [
			{ name: "Mascarpone", quantity: "250g", category: "Produits laitiers" },
			{
				name: "Biscuits à la cuillère",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Café fort", quantity: "200ml", category: "Boissons" },
			{
				name: "Cacao en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Tremper les biscuits dans le café froid et les disposer dans un plat.",
			"Fouetter le mascarpone avec un peu de sucre et en recouvrir les biscuits.",
			"Répéter les couches et saupoudrer de cacao.",
			"Réfrigérer pendant 4 heures avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Galettes de pommes de terre croustillantes",
		description:
			"Des galettes dorées et croustillantes, parfaites pour accompagner vos plats.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{
				name: "Farine",
				quantity: "2 cuillères à soupe",
				category: "Produits de boulangerie",
			},
			{ name: "Œuf", quantity: "1 pièce", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Râper les pommes de terre et les presser pour retirer l'excès d'eau.",
			"Mélanger avec l'œuf, la farine et l'ail haché.",
			"Former des galettes et les cuire à la poêle jusqu'à ce qu'elles soient dorées des deux côtés.",
			"Servir chaud avec une sauce au yaourt.",
		],
		category: "Accompagnements",
	},
	{
		name: "Poulet au gingembre et miel",
		description:
			"Un plat sucré-salé avec une touche épicée, parfait pour un repas exotique.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir les morceaux de poulet dans une poêle.",
			"Ajouter le miel, le gingembre râpé et la sauce soja.",
			"Laisser caraméliser quelques minutes à feu doux.",
			"Servir chaud avec du riz ou des légumes sautés.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Gratin de macaronis au fromage",
		description:
			"Un gratin crémeux et réconfortant, parfait pour les petits et les grands.",
		ingredients: [
			{ name: "Macaronis", quantity: "250g", category: "Pâtes" },
			{ name: "Fromage râpé", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Cuire les macaronis dans de l'eau bouillante salée.",
			"Mélanger avec la crème, le fromage et la muscade.",
			"Transférer dans un plat à gratin et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Crumble de fruits rouges",
		description:
			"Un dessert acidulé et croustillant, parfait pour terminer un repas en beauté.",
		ingredients: [
			{ name: "Fruits rouges mélangés", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Disposer les fruits rouges dans un plat à gratin.",
			"Mélanger la farine, le sucre et le beurre pour former un crumble.",
			"Émietter le mélange sur les fruits et cuire au four à 180°C pendant 20 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},
	{
		name: "Poisson au four aux herbes",
		description:
			"Un plat léger et parfumé, idéal pour un dîner sain et rapide.",
		ingredients: [
			{
				name: "Filet de poisson blanc",
				quantity: "2 pièces",
				category: "Viandes",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Thym", quantity: "2 branches", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Placer les filets de poisson dans un plat allant au four.",
			"Arroser de jus de citron, ajouter le thym et un filet d'huile d'olive.",
			"Cuire au four à 180°C pendant 15 minutes.",
			"Servir avec des légumes vapeur.",
		],
		category: "Plats à base de poisson",
	},

	{
		name: "Roulés de jambon au fromage frais",
		description:
			"Une entrée rapide et légère, parfaite pour les repas estivaux.",
		ingredients: [
			{ name: "Jambon blanc", quantity: "4 tranches", category: "Viandes" },
			{
				name: "Fromage frais",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Ciboulette", quantity: "1 bouquet", category: "Épices" },
			{ name: "Poivre", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Tartiner les tranches de jambon avec le fromage frais.",
			"Parsemer de ciboulette ciselée et de poivre.",
			"Rouler les tranches et les couper en morceaux.",
			"Servir frais en entrée ou à l'apéritif.",
		],
		category: "Entrées",
	},
	{
		name: "Cake aux olives et lardons",
		description:
			"Un cake salé moelleux et savoureux, idéal pour les pique-niques.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{ name: "Olives noires", quantity: "100g", category: "Fruits secs" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour obtenir une pâte.",
			"Incorporer les lardons, les olives et le fromage râpé.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Apéritifs",
	},
	{
		name: "Tarte aux figues et au miel",
		description:
			"Un dessert fruité et sucré, parfait pour les repas d'automne.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Figues fraîches", quantity: "6 pièces", category: "Fruits" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les figues coupées en deux sur la pâte.",
			"Arroser de miel et parsemer d'amandes effilées.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Salade de pois cassés et feta",
		description:
			"Une salade originale et nourrissante, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Pois cassés", quantity: "200g", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les pois cassés et les laisser refroidir.",
			"Couper le concombre et la feta en dés.",
			"Mélanger tous les ingrédients et assaisonner avec la vinaigrette.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Pizza maison aux quatre fromages",
		description:
			"Une pizza fondante et savoureuse, idéale pour les amateurs de fromage.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Mozzarella", quantity: "100g", category: "Produits laitiers" },
			{ name: "Gorgonzola", quantity: "50g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{
				name: "Fromage de chèvre",
				quantity: "50g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte à pizza sur une plaque.",
			"Ajouter une base de sauce tomate et répartir les différents fromages.",
			"Cuire au four à 220°C pendant 12 à 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},

	{
		name: "Crêpes aux épinards et ricotta",
		description: "Des crêpes salées garnies, parfaites pour un dîner léger.",
		ingredients: [
			{
				name: "Pâte à crêpes",
				quantity: "200ml",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Ricotta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Préparer les crêpes et les réserver.",
			"Faire revenir les épinards avec l'ail émincé dans une poêle.",
			"Mélanger les épinards cuits avec la ricotta.",
			"Garnir les crêpes de ce mélange, les rouler et les réchauffer au four 10 minutes à 180°C.",
			"Servir chaud avec une salade.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Velouté de champignons et noisettes",
		description: "Un velouté riche et parfumé, parfait pour un repas automnal.",
		ingredients: [
			{ name: "Champignons de Paris", quantity: "300g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire revenir les champignons dans une poêle.",
			"Ajouter la pomme de terre coupée en morceaux et couvrir d'eau.",
			"Cuire jusqu'à tendreté, mixer et ajouter la crème.",
			"Parsemer de noisettes concassées avant de servir chaud.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet rôti à l'estragon",
		description: "Un plat classique parfumé, parfait pour un repas en famille.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Estragon frais", quantity: "2 branches", category: "Épices" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Farcir le poulet avec l'estragon et le citron coupé en deux.",
			"Badigeonner le poulet de beurre fondu, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30, en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Risotto au potiron et parmesan",
		description: "Un risotto crémeux et savoureux, idéal pour l'automne.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Potiron", quantity: "300g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir le potiron coupé en dés dans une poêle.",
			"Ajouter le riz et cuire en ajoutant le bouillon chaud petit à petit.",
			"Incorporer le parmesan en fin de cuisson.",
			"Servir chaud avec des herbes fraîches.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Galettes de courgettes et parmesan",
		description:
			"Des galettes croustillantes et savoureuses, parfaites en accompagnement.",
		ingredients: [
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Œuf", quantity: "1 pièce", category: "Produits laitiers" },
		],
		steps: [
			"Râper les courgettes et les presser pour retirer l'eau.",
			"Mélanger avec l'œuf, le parmesan et la farine.",
			"Former des galettes et les cuire à la poêle avec un peu d'huile.",
			"Servir chaud avec une sauce au yaourt.",
		],
		category: "Accompagnements",
	},
	{
		name: "Gâteau aux poires et chocolat",
		description: "Un dessert moelleux et gourmand qui ravira petits et grands.",
		ingredients: [
			{ name: "Poires", quantity: "3 pièces", category: "Fruits" },
			{
				name: "Chocolat noir",
				quantity: "150g",
				category: "Produits de boulangerie",
			},
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire fondre le chocolat avec le beurre.",
			"Mélanger avec la farine, le sucre et les œufs.",
			"Incorporer les poires coupées en morceaux.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Tarte aux oignons caramélisés",
		description:
			"Une tarte salée fondante et savoureuse, parfaite pour un repas léger.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Oignons", quantity: "4 pièces", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les oignons émincés jusqu'à ce qu'ils soient caramélisés.",
			"Étaler la pâte dans un moule et disposer les oignons.",
			"Ajouter la crème et le fromage râpé par-dessus.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Pâtes au pesto et noix",
		description: "Un plat simple et rapide avec une touche croquante.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Pesto", quantity: "3 cuillères à soupe", category: "Épices" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans une grande casserole d'eau bouillante salée.",
			"Mélanger les pâtes cuites avec le pesto.",
			"Ajouter les noix concassées et saupoudrer de parmesan.",
			"Servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Soupe de courgettes et fromage frais",
		description: "Une soupe veloutée et légère, idéale pour un dîner simple.",
		ingredients: [
			{ name: "Courgettes", quantity: "500g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Fromage frais",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Cuire les courgettes et la pomme de terre dans le bouillon.",
			"Mixer avec le fromage frais jusqu'à obtenir une texture lisse.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},

	{
		name: "Tarte au thon et tomates",
		description:
			"Une tarte simple et savoureuse, parfaite pour les déjeuners rapides.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Thon en boîte", quantity: "200g", category: "Viandes" },
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte feuilletée dans un moule et la piquer avec une fourchette.",
			"Répartir le thon émietté et les rondelles de tomates sur la pâte.",
			"Ajouter la crème fraîche et assaisonner avec du sel et du poivre.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats rapides",
	},
	{
		name: "Ratatouille classique",
		description: "Un plat mijoté méditerranéen plein de saveurs.",
		ingredients: [
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomates", quantity: "3 pièces", category: "Légumes" },
		],
		steps: [
			"Couper les légumes en morceaux et les faire revenir dans une cocotte.",
			"Ajouter un peu d'eau et laisser mijoter à feu doux pendant 30 minutes.",
			"Assaisonner avec des herbes de Provence.",
			"Servir chaud ou froid en accompagnement ou en plat principal.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de pâtes au pesto et tomates séchées",
		description: "Une salade rapide et parfumée, idéale pour les pique-niques.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "200g", category: "Pâtes" },
			{ name: "Pesto", quantity: "2 cuillères à soupe", category: "Épices" },
			{ name: "Tomates séchées", quantity: "100g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes et les laisser refroidir.",
			"Ajouter le pesto, les tomates séchées coupées en morceaux et le parmesan râpé.",
			"Mélanger délicatement et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Soufflé au fromage",
		description:
			"Un soufflé léger et aérien, parfait pour impressionner vos invités.",
		ingredients: [
			{ name: "Fromage râpé", quantity: "150g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "250ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Préparer une béchamel avec la farine et le lait.",
			"Incorporer le fromage râpé et les jaunes d'œufs.",
			"Battre les blancs en neige et les ajouter délicatement.",
			"Verser dans un moule à soufflé et cuire au four à 200°C pendant 20 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Tartelette au citron meringuée",
		description:
			"Un dessert acidulé et sucré, parfait pour les amateurs de pâtisserie.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Citrons", quantity: "2 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Précuire la pâte dans des moules à tartelettes.",
			"Préparer une crème au citron en mélangeant jus de citron, sucre et œufs.",
			"Garnir les tartelettes de la crème et ajouter une meringue par-dessus.",
			"Dorer au chalumeau ou au four quelques minutes avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Wok de légumes croquants",
		description: "Un plat rapide et coloré, parfait pour un dîner léger.",
		ingredients: [
			{ name: "Brocoli", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper les légumes en morceaux.",
			"Les faire sauter dans un wok avec un peu d'huile.",
			"Ajouter la sauce soja et mélanger rapidement.",
			"Servir chaud avec du riz ou des nouilles.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Flan aux légumes",
		description:
			"Un flan léger et coloré, parfait en entrée ou en accompagnement.",
		ingredients: [
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Râper les légumes et les disposer dans des ramequins.",
			"Mélanger les œufs avec la crème et assaisonner.",
			"Verser le mélange dans les ramequins.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Entrées",
	},
	{
		name: "Crème brûlée classique",
		description: "Un dessert français emblématique, crémeux et croustillant.",
		ingredients: [
			{
				name: "Crème liquide",
				quantity: "500ml",
				category: "Produits laitiers",
			},
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{
				name: "Jaunes d'œufs",
				quantity: "4 pièces",
				category: "Produits laitiers",
			},
			{ name: "Vanille", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Faire chauffer la crème avec la vanille.",
			"Fouetter les jaunes d'œufs avec le sucre et ajouter la crème chaude.",
			"Verser dans des ramequins et cuire au bain-marie à 150°C pendant 30 minutes.",
			"Saupoudrer de sucre et caraméliser au chalumeau avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Pommes de terre sautées aux herbes",
		description:
			"Un accompagnement simple et savoureux, parfait pour les viandes.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les pommes de terre en dés et les faire cuire dans une poêle avec l'huile.",
			"Ajouter l'ail émincé et le persil en fin de cuisson.",
			"Saler, poivrer et servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Salade César revisitée",
		description:
			"Une version légère et croquante de la classique salade César.",
		ingredients: [
			{ name: "Laitue", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poulet rôti", quantity: "150g", category: "Viandes" },
			{
				name: "Croutons",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
			{ name: "Parmesan", quantity: "30g", category: "Produits laitiers" },
		],
		steps: [
			"Disposer la laitue dans un saladier.",
			"Ajouter des morceaux de poulet, les croutons et des copeaux de parmesan.",
			"Assaisonner avec une vinaigrette César légère.",
			"Servir immédiatement.",
		],
		category: "Salades",
	},

	{
		name: "Gratin de légumes méditerranéens",
		description:
			"Un plat gratiné savoureux et coloré, idéal pour un repas estival.",
		ingredients: [
			{ name: "Aubergines", quantity: "2 pièces", category: "Légumes" },
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomates", quantity: "4 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les légumes en rondelles et les disposer dans un plat.",
			"Intercaler des tranches de mozzarella entre les légumes.",
			"Assaisonner avec des herbes de Provence et un filet d'huile d'olive.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet curry-coco",
		description:
			"Un plat exotique aux saveurs épicées et douces, idéal avec du riz.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Oignons", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir les oignons émincés dans une poêle.",
			"Ajouter les morceaux de poulet et les faire dorer.",
			"Incorporer le curry et le lait de coco, puis laisser mijoter 15 minutes.",
			"Servir chaud avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Quiche au saumon et épinards",
		description:
			"Une quiche gourmande et équilibrée, parfaite pour un repas léger.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les épinards et les disposer sur la pâte.",
			"Ajouter le saumon fumé coupé en morceaux, puis verser le mélange crème-œufs.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Brownies au chocolat et noix",
		description:
			"Des brownies fondants et croquants pour un dessert ou un goûter gourmand.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble.",
			"Mélanger avec la farine, le sucre et les œufs.",
			"Ajouter les noix concassées et verser dans un moule.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Velouté de carottes et coriandre",
		description: "Une soupe douce et parfumée, parfaite pour un dîner léger.",
		ingredients: [
			{ name: "Carottes", quantity: "500g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Coriandre fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire cuire les carottes et la pomme de terre dans le bouillon.",
			"Mixer jusqu'à obtenir une consistance lisse.",
			"Ajouter la coriandre ciselée avant de servir.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Salade grecque",
		description: "Une salade fraîche et légère, parfaite pour l'été.",
		ingredients: [
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
			{ name: "Feta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Couper les légumes en morceaux et les disposer dans un saladier.",
			"Ajouter des cubes de feta et les olives noires.",
			"Assaisonner avec de l'huile d'olive, du sel et du poivre.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Rôti de porc au miel et moutarde",
		description: "Un rôti juteux et parfumé, parfait pour un repas familial.",
		ingredients: [
			{ name: "Rôti de porc", quantity: "800g", category: "Viandes" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Moutarde", quantity: "2 cuillères à soupe", category: "Épices" },
			{ name: "Thym", quantity: "1 branche", category: "Épices" },
		],
		steps: [
			"Badigeonner le rôti avec un mélange de miel et de moutarde.",
			"Ajouter le thym et un filet d'huile d'olive.",
			"Cuire au four à 200°C pendant 1 heure, en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Gaufres maison",
		description:
			"Des gaufres moelleuses et croustillantes, idéales pour un goûter.",
		ingredients: [
			{ name: "Farine", quantity: "250g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "300ml", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
			{ name: "Beurre fondu", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, le lait, les œufs et le beurre fondu.",
			"Laisser reposer la pâte pendant 30 minutes.",
			"Faire cuire dans un gaufrier jusqu'à obtenir des gaufres dorées.",
			"Servir avec du sucre glace ou du sirop d'érable.",
		],
		category: "Desserts",
	},
	{
		name: "Brochettes de dinde marinées au citron",
		description:
			"Des brochettes tendres et parfumées, parfaites pour les barbecues.",
		ingredients: [
			{ name: "Filets de dinde", quantity: "300g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper la dinde en morceaux et les mariner avec le jus de citron, l'ail et l'huile.",
			"Enfiler sur des piques et griller au barbecue ou au four.",
			"Servir chaud avec une salade ou des légumes.",
		],
		category: "Recettes pour barbecue",
	},

	{
		name: "Clafoutis aux cerises",
		description: "Un dessert fruité et léger, idéal pour l'été.",
		ingredients: [
			{ name: "Cerises", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Disposer les cerises lavées et équeutées dans un moule beurré.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte lisse.",
			"Verser la pâte sur les cerises et cuire au four à 180°C pendant 35 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe froide de concombre et menthe",
		description:
			"Une soupe rafraîchissante et légère, parfaite pour les journées chaudes.",
		ingredients: [
			{ name: "Concombre", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{ name: "Citron", quantity: "1/2 pièce", category: "Fruits" },
		],
		steps: [
			"Éplucher et mixer le concombre avec le yaourt.",
			"Ajouter le jus de citron et les feuilles de menthe ciselées.",
			"Assaisonner avec du sel et du poivre.",
			"Servir bien frais avec des glaçons.",
		],
		category: "Soupes",
	},

	{
		name: "Riz au safran et légumes",
		description:
			"Un plat coloré et parfumé, parfait en accompagnement ou en plat principal.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Petits pois", quantity: "100g", category: "Légumes" },
			{ name: "Safran", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Cuire le riz avec une pincée de safran dans de l'eau bouillante salée.",
			"Faire revenir les carottes coupées en dés et les petits pois dans une poêle.",
			"Mélanger les légumes avec le riz safrané.",
			"Servir chaud en accompagnement ou avec une sauce au yaourt.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Cake aux noix et banane",
		description:
			"Un cake moelleux et gourmand, idéal pour le petit-déjeuner ou le goûter.",
		ingredients: [
			{ name: "Banane", quantity: "2 pièces", category: "Fruits" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Écraser les bananes et les mélanger avec le sucre, la farine et les œufs.",
			"Incorporer les noix concassées et bien mélanger.",
			"Verser la pâte dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Laisser refroidir avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza aux légumes grillés et pesto",
		description: "Une pizza végétarienne savoureuse et colorée.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Aubergine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Pesto", quantity: "2 cuillères à soupe", category: "Épices" },
		],
		steps: [
			"Griller les légumes en tranches et les réserver.",
			"Étaler la pâte à pizza et y étaler le pesto.",
			"Ajouter les légumes grillés et cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Velouté de patate douce et gingembre",
		description: "Une soupe douce et épicée, idéale pour un dîner chaleureux.",
		ingredients: [
			{ name: "Patate douce", quantity: "400g", category: "Légumes" },
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire la patate douce dans le bouillon avec le gingembre.",
			"Mixer jusqu'à obtention d'une texture lisse.",
			"Ajouter la crème fraîche et réchauffer doucement.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet au citron et romarin",
		description: "Un plat parfumé et juteux, idéal pour les repas familiaux.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Frotter les cuisses de poulet avec du jus de citron et assaisonner.",
			"Ajouter le romarin et les gousses d'ail écrasées.",
			"Cuire au four à 200°C pendant 40 minutes en arrosant régulièrement.",
			"Servir avec des pommes de terre rôties.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte à la courge et au fromage",
		description:
			"Une tarte salée fondante et gourmande, parfaite pour l'automne.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courge", quantity: "300g", category: "Légumes" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire la courge à la vapeur et l'écraser en purée.",
			"Mélanger avec le fromage et la crème.",
			"Étaler la pâte dans un moule, ajouter la garniture et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud avec une salade.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Brochettes de crevettes au paprika",
		description:
			"Des brochettes simples et savoureuses, parfaites pour les barbecues.",
		ingredients: [
			{ name: "Crevettes", quantity: "200g", category: "Viandes" },
			{ name: "Paprika", quantity: "1 cuillère à café", category: "Épices" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Mélanger les crevettes avec l'huile, le paprika et le jus de citron.",
			"Enfiler sur des piques à brochettes.",
			"Griller au barbecue ou au four pendant 10 minutes.",
			"Servir avec une sauce au yaourt.",
		],
		category: "Recettes pour barbecue",
	},
	{
		name: "Flan pâtissier traditionnel",
		description:
			"Un dessert crémeux et réconfortant, parfait pour les amateurs de pâtisserie.",
		ingredients: [
			{ name: "Lait entier", quantity: "500ml", category: "Produits laitiers" },
			{ name: "Farine", quantity: "60g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Faire chauffer le lait avec une partie du sucre.",
			"Mélanger le reste du sucre avec la farine et les œufs, puis incorporer le lait chaud.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Laisser refroidir avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Omelette aux herbes fraîches",
		description:
			"Une omelette légère et parfumée, idéale pour un repas rapide.",
		ingredients: [
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Ciboulette", quantity: "1 bouquet", category: "Épices" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Battre les œufs avec les herbes fraîches ciselées.",
			"Faire chauffer le beurre dans une poêle et verser les œufs battus.",
			"Cuire à feu doux en remuant légèrement.",
			"Servir avec une salade verte.",
		],
		category: "Plats rapides",
	},

	{
		name: "Tarte aux poireaux et chèvre",
		description:
			"Une tarte salée gourmande et fondante, parfaite pour un repas léger.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poireaux", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Émincer les poireaux et les faire revenir à feu doux.",
			"Étaler la pâte feuilletée dans un moule et disposer les poireaux cuits.",
			"Ajouter des tranches de chèvre et verser le mélange crème-œufs.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gnocchis à la crème de courgettes",
		description: "Un plat rapide et crémeux, idéal pour un dîner improvisé.",
		ingredients: [
			{ name: "Gnocchis", quantity: "300g", category: "Pâtes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire les gnocchis dans de l'eau bouillante salée jusqu'à ce qu'ils remontent.",
			"Mixer la courgette cuite avec la crème pour obtenir une sauce.",
			"Mélanger les gnocchis avec la sauce et saupoudrer de parmesan.",
			"Servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Curry de légumes d'hiver",
		description:
			"Un plat chaud et épicé, parfait pour réchauffer les soirées fraîches.",
		ingredients: [
			{ name: "Carottes", quantity: "3 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry doux",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper les légumes en morceaux et les faire revenir dans une poêle.",
			"Ajouter le lait de coco et le curry, puis laisser mijoter 20 minutes.",
			"Servir avec du riz basmati ou du pain naan.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin dauphinois",
		description:
			"Un accompagnement classique et réconfortant, parfait avec des viandes.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "400ml",
				category: "Produits laitiers",
			},
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines tranches.",
			"Frotter un plat à gratin avec l'ail, puis y disposer les pommes de terre.",
			"Mélanger le lait et la crème, verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 1 heure.",
		],
		category: "Accompagnements",
	},
	{
		name: "Salade de quinoa aux légumes grillés",
		description: "Une salade saine et savoureuse, idéale pour un repas léger.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Griller les légumes et les couper en morceaux.",
			"Mélanger les légumes avec le quinoa et la vinaigrette.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte tatin aux tomates cerises",
		description: "Une version salée et originale de la tarte tatin.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomates cerises", quantity: "300g", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Fromage de chèvre",
				quantity: "50g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Caraméliser les tomates cerises avec le vinaigre balsamique dans une poêle.",
			"Transférer les tomates dans un moule et recouvrir de pâte brisée.",
			"Cuire au four à 180°C pendant 20 minutes.",
			"Renverser délicatement et servir chaud.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Omelette roulée aux champignons",
		description: "Une omelette originale et savoureuse pour un repas rapide.",
		ingredients: [
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Champignons", quantity: "150g", category: "Légumes" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Beurre", quantity: "10g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans du beurre.",
			"Battre les œufs avec le persil ciselé.",
			"Cuire l'omelette à feu doux et ajouter les champignons au centre.",
			"Rouler l'omelette et servir chaud.",
		],
		category: "Plats rapides",
	},
	{
		name: "Soupe de pois cassés",
		description: "Une soupe rustique et nourrissante, parfaite pour l'hiver.",
		ingredients: [
			{ name: "Pois cassés", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Oignons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire cuire les pois cassés avec les carottes et les oignons dans le bouillon.",
			"Mixer pour obtenir une texture lisse.",
			"Assaisonner avec du sel, du poivre et un filet d'huile d'olive.",
			"Servir chaud avec du pain.",
		],
		category: "Soupes",
	},
	{
		name: "Pâtes aux courgettes et menthe",
		description: "Un plat frais et léger, parfait pour l'été.",
		ingredients: [
			{ name: "Tagliatelles", quantity: "250g", category: "Pâtes" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée.",
			"Râper la courgette et la faire revenir légèrement dans une poêle.",
			"Mélanger les pâtes avec la courgette et ajouter la menthe ciselée.",
			"Servir chaud avec du parmesan râpé.",
		],
		category: "Plats rapides",
	},

	{
		name: "Crêpes Suzette",
		description:
			"Un dessert français classique avec une sauce à l'orange flambée.",
		ingredients: [
			{
				name: "Pâte à crêpes",
				quantity: "300ml",
				category: "Produits de boulangerie",
			},
			{ name: "Oranges", quantity: "2 pièces", category: "Fruits" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Grand Marnier", quantity: "30ml", category: "Boissons" },
		],
		steps: [
			"Préparer les crêpes et les garder au chaud.",
			"Presser les oranges pour récupérer le jus.",
			"Dans une poêle, faire fondre le beurre avec le sucre, puis ajouter le jus d'orange.",
			"Déposer une crêpe dans la sauce, la replier et arroser de Grand Marnier.",
			"Flamber la crêpe et servir immédiatement.",
		],
		category: "Desserts",
	},
	{
		name: "Poêlée de légumes au sésame",
		description: "Une recette simple et savoureuse avec une touche asiatique.",
		ingredients: [
			{ name: "Brocoli", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Graines de sésame",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper les légumes en morceaux et les faire sauter dans une poêle.",
			"Ajouter la sauce soja et mélanger.",
			"Parsemer de graines de sésame juste avant de servir.",
			"Servir chaud en accompagnement ou avec du riz.",
		],
		category: "Accompagnements",
	},
	{
		name: "Lasagnes aux épinards et ricotta",
		description:
			"Une version végétarienne et crémeuse des lasagnes classiques.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Ricotta", quantity: "250g", category: "Produits laitiers" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle jusqu'à ce qu'ils réduisent.",
			"Mélanger les épinards avec la ricotta.",
			"Monter les lasagnes en alternant feuilles, épinards et fromage râpé.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de lentilles corail au lait de coco",
		description: "Une soupe exotique et réconfortante, facile à préparer.",
		ingredients: [
			{ name: "Lentilles corail", quantity: "200g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir l'oignon émincé dans une casserole.",
			"Ajouter les lentilles, le lait de coco et le curry.",
			"Couvrir d'eau et cuire 20 minutes.",
			"Mixer pour obtenir une texture veloutée et servir chaud.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de haricots verts et noisettes",
		description:
			"Une salade croquante et légère, parfaite pour accompagner un plat principal.",
		ingredients: [
			{ name: "Haricots verts", quantity: "300g", category: "Légumes" },
			{ name: "Noisettes", quantity: "50g", category: "Fruits secs" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Vinaigre balsamique",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les haricots verts à la vapeur et les laisser refroidir.",
			"Concasser les noisettes et les faire griller légèrement.",
			"Mélanger les haricots avec les noisettes, l'huile et le vinaigre.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Poulet rôti au miel et gingembre",
		description:
			"Un poulet sucré-salé avec une touche d'épices, parfait pour les repas familiaux.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{
				name: "Miel",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Mélanger le miel avec le jus de citron et le gingembre râpé.",
			"Badigeonner le poulet avec ce mélange.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement.",
			"Servir avec des légumes rôtis ou du riz.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte aux fruits rouges",
		description: "Un dessert coloré et acidulé, idéal pour les repas estivaux.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Fruits rouges mélangés", quantity: "300g", category: "Fruits" },
			{
				name: "Crème pâtissière",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Sucre glace",
				quantity: "1 cuillère à soupe",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Précuire la pâte sablée dans un moule.",
			"Étaler une couche de crème pâtissière sur la pâte refroidie.",
			"Disposer les fruits rouges par-dessus.",
			"Saupoudrer de sucre glace avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de poisson et épinards",
		description: "Un plat complet et léger, parfait pour un dîner équilibré.",
		ingredients: [
			{
				name: "Filets de poisson blanc",
				quantity: "300g",
				category: "Viandes",
			},
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Disposer les épinards dans un plat à gratin.",
			"Ajouter les filets de poisson par-dessus.",
			"Verser la crème et saupoudrer de fromage râpé.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats à base de poisson",
	},
	{
		name: "Ratatouille express",
		description: "Une version rapide et savoureuse du classique provençal.",
		ingredients: [
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
		],
		steps: [
			"Faire revenir les légumes coupés en morceaux dans une cocotte.",
			"Ajouter les tomates concassées et laisser mijoter 20 minutes.",
			"Assaisonner avec des herbes de Provence.",
			"Servir chaud avec du riz ou du pain.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Cake salé au thon et aux olives",
		description:
			"Un cake moelleux et savoureux, parfait pour les pique-niques.",
		ingredients: [
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Thon en boîte", quantity: "200g", category: "Viandes" },
			{ name: "Olives vertes", quantity: "100g", category: "Fruits secs" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour former une pâte.",
			"Incorporer le thon émietté, les olives tranchées et le fromage râpé.",
			"Verser dans un moule à cake et cuire au four à 180°C pendant 35 minutes.",
			"Laisser tiédir avant de trancher.",
		],
		category: "Apéritifs",
	},
	{
		name: "Soupe de légumes du potager",
		description:
			"Une soupe rustique et saine, idéale pour les soirées fraîches.",
		ingredients: [
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poireaux", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Éplucher et couper les légumes en morceaux.",
			"Les faire cuire dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer la soupe et assaisonner avec du sel et du poivre.",
			"Servir chaud avec du pain frais.",
		],
		category: "Soupes",
	},
	{
		name: "Pâtes au thon et citron",
		description: "Un plat simple et frais, parfait pour un dîner rapide.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Thon en boîte", quantity: "150g", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée.",
			"Mélanger le thon avec du jus de citron et de l'huile d'olive.",
			"Incorporer les pâtes cuites et mélanger délicatement.",
			"Servir immédiatement avec du persil frais.",
		],
		category: "Plats rapides",
	},
	{
		name: "Gratin de courgettes au parmesan",
		description:
			"Un gratin léger et savoureux, parfait pour un accompagnement.",
		ingredients: [
			{ name: "Courgettes", quantity: "3 pièces", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Couper les courgettes en rondelles et les disposer dans un plat à gratin.",
			"Mélanger la crème avec l'ail haché et verser sur les courgettes.",
			"Saupoudrer de parmesan et cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Rouleaux de printemps",
		description:
			"Des rouleaux frais et légers, parfaits pour un apéritif ou une entrée.",
		ingredients: [
			{
				name: "Feuilles de riz",
				quantity: "8 pièces",
				category: "Produits de boulangerie",
			},
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Crevettes", quantity: "100g", category: "Viandes" },
		],
		steps: [
			"Couper les légumes en julienne et décortiquer les crevettes.",
			"Tremper les feuilles de riz dans l'eau pour les ramollir.",
			"Disposer les légumes et les crevettes sur chaque feuille et rouler fermement.",
			"Servir avec une sauce à la cacahuète ou à la sauce soja.",
		],
		category: "Entrées",
	},
	{
		name: "Poulet basquaise",
		description:
			"Un plat traditionnel du sud-ouest de la France, riche en saveurs.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Poivrons rouges", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir les cuisses de poulet jusqu'à ce qu'elles soient dorées.",
			"Ajouter l'oignon émincé, les poivrons coupés en lanières et les tomates.",
			"Laisser mijoter 40 minutes à feu doux.",
			"Servir chaud avec du riz ou des pommes de terre.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Cake à la carotte et aux épices",
		description: "Un cake moelleux et parfumé, idéal pour un goûter gourmand.",
		ingredients: [
			{ name: "Carottes", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Râper les carottes et les mélanger avec la farine, le sucre et les épices.",
			"Ajouter les œufs et les noix concassées.",
			"Verser dans un moule et cuire au four à 180°C pendant 40 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Velouté de courge butternut et noix de muscade",
		description:
			"Une soupe onctueuse et réconfortante, parfaite pour l'automne.",
		ingredients: [
			{ name: "Courge butternut", quantity: "500g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Cuire la courge et la pomme de terre dans le bouillon.",
			"Mixer jusqu'à obtention d'une texture veloutée.",
			"Ajouter une pincée de muscade et servir chaud avec des croûtons.",
			"Optionnel : ajouter une cuillère de crème fraîche.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de pâtes aux légumes croquants",
		description:
			"Une salade fraîche et colorée, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "250g", category: "Pâtes" },
			{ name: "Poivrons", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les pâtes et les laisser refroidir.",
			"Couper les légumes en petits morceaux.",
			"Mélanger les pâtes avec les légumes et la vinaigrette.",
			"Servir frais avec des herbes fraîches.",
		],
		category: "Salades",
	},

	{
		name: "Riz sauté aux crevettes et légumes",
		description:
			"Un plat rapide et savoureux, inspiré de la cuisine asiatique.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Crevettes", quantity: "150g", category: "Viandes" },
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire sauter les carottes coupées en julienne avec les crevettes dans une poêle.",
			"Ajouter le riz froid et la sauce soja, puis mélanger à feu vif.",
			"Servir chaud avec un peu de coriandre fraîche.",
		],
		category: "Plats rapides",
	},
	{
		name: "Tarte fine aux poires et bleu",
		description: "Un mélange sucré-salé original et savoureux.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poires", quantity: "2 pièces", category: "Fruits" },
			{ name: "Fromage bleu", quantity: "100g", category: "Produits laitiers" },
			{ name: "Noix", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte sur une plaque et la piquer avec une fourchette.",
			"Disposer des tranches de poires, des morceaux de bleu et des noix concassées.",
			"Cuire au four à 200°C pendant 15 minutes.",
			"Servir tiède en entrée ou en plat principal.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de chou-fleur au cheddar",
		description:
			"Un gratin crémeux et gourmand, idéal pour les amateurs de fromage.",
		ingredients: [
			{ name: "Chou-fleur", quantity: "1 pièce", category: "Légumes" },
			{ name: "Cheddar", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Moutarde", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Cuire le chou-fleur à la vapeur et le disposer dans un plat à gratin.",
			"Mélanger la crème avec la moutarde et la moitié du cheddar râpé.",
			"Verser sur le chou-fleur et saupoudrer du reste de cheddar.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe à l'oignon gratinée",
		description:
			"Un classique réconfortant et savoureux pour les soirées d'hiver.",
		ingredients: [
			{ name: "Oignons", quantity: "4 pièces", category: "Légumes" },
			{
				name: "Bouillon de bœuf",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Pain",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les oignons émincés jusqu'à ce qu'ils soient caramélisés.",
			"Ajouter le bouillon et laisser mijoter 20 minutes.",
			"Répartir la soupe dans des bols, ajouter une tranche de pain et du gruyère.",
			"Gratiner sous le gril du four jusqu'à ce que le fromage soit doré.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de betteraves et chèvre",
		description: "Une salade simple et colorée, idéale pour une entrée légère.",
		ingredients: [
			{ name: "Betteraves cuites", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Noix", quantity: "30g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les betteraves en rondelles et les disposer dans un saladier.",
			"Ajouter des morceaux de fromage de chèvre et les noix concassées.",
			"Assaisonner avec la vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Poulet rôti au citron et thym",
		description:
			"Un plat classique et parfumé, parfait pour les repas en famille.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Thym", quantity: "3 branches", category: "Épices" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Farcir le poulet avec le citron coupé en deux et le thym.",
			"Badigeonner de beurre fondu, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pâtes au pesto rosso",
		description:
			"Un plat rapide et savoureux avec une sauce italienne classique.",
		ingredients: [
			{ name: "Penne", quantity: "250g", category: "Pâtes" },
			{
				name: "Pesto rosso",
				quantity: "3 cuillères à soupe",
				category: "Épices",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Olives noires", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée.",
			"Mélanger les pâtes cuites avec le pesto rosso.",
			"Ajouter des olives tranchées et saupoudrer de parmesan.",
			"Servir chaud avec un filet d'huile d'olive.",
		],
		category: "Plats rapides",
	},
	{
		name: "Crème caramel maison",
		description: "Un dessert classique, onctueux et délicatement parfumé.",
		ingredients: [
			{ name: "Lait entier", quantity: "500ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{
				name: "Extrait de vanille",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Faire un caramel avec 100g de sucre et le verser dans des ramequins.",
			"Mélanger le lait chaud avec les œufs, le reste du sucre et la vanille.",
			"Verser dans les ramequins et cuire au bain-marie à 150°C pendant 40 minutes.",
			"Laisser refroidir avant de démouler.",
		],
		category: "Desserts",
	},
	{
		name: "Omelette aux tomates et oignons",
		description:
			"Une omelette simple et savoureuse, idéale pour un repas rapide.",
		ingredients: [
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
			{ name: "Oignons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Huile d'olive",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Faire revenir les oignons émincés et les tomates en dés dans une poêle.",
			"Battre les œufs avec du sel et du poivre.",
			"Verser les œufs battus sur les légumes et cuire à feu doux.",
			"Servir chaud avec une salade.",
		],
		category: "Plats rapides",
	},
	{
		name: "Quiche lorraine classique",
		description:
			"Une quiche gourmande et incontournable de la cuisine française.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Faire revenir les lardons et les disposer sur la pâte.",
			"Mélanger la crème et les œufs, puis verser sur les lardons.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},

	{
		name: "Quiche lorraine classique",
		description:
			"Une quiche gourmande et incontournable de la cuisine française.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Lardons", quantity: "200g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte brisée dans un moule et la piquer avec une fourchette.",
			"Faire revenir les lardons et les répartir sur la pâte.",
			"Mélanger la crème avec les œufs, saler et poivrer.",
			"Verser le mélange sur les lardons et cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Tarte rustique aux légumes du soleil",
		description: "Une tarte colorée et savoureuse, parfaite pour l'été.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Couper les légumes en morceaux et les faire revenir légèrement.",
			"Étaler la pâte sur une plaque et disposer les légumes au centre.",
			"Replier les bords de la pâte pour former une tarte rustique.",
			"Cuire au four à 200°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Salade de roquette, poires et parmesan",
		description:
			"Une salade fraîche et élégante, idéale en entrée ou en accompagnement.",
		ingredients: [
			{ name: "Roquette", quantity: "100g", category: "Légumes" },
			{ name: "Poires", quantity: "2 pièces", category: "Fruits" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Noix", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Disposer la roquette dans un saladier.",
			"Ajouter des tranches de poires, des copeaux de parmesan et les noix.",
			"Assaisonner avec une vinaigrette au vinaigre balsamique.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Velouté de champignons et ail rôti",
		description: "Une soupe onctueuse et parfumée, idéale pour l'automne.",
		ingredients: [
			{ name: "Champignons de Paris", quantity: "300g", category: "Légumes" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire rôtir la tête d'ail au four jusqu'à ce qu'elle soit tendre.",
			"Faire revenir les champignons, ajouter le bouillon et laisser mijoter.",
			"Mixer la soupe avec l'ail rôti et ajouter la crème.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet au paprika et légumes grillés",
		description: "Un plat parfumé et coloré, parfait pour un repas convivial.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Paprika", quantity: "2 cuillères à café", category: "Épices" },
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivrons jaunes", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Badigeonner le poulet avec de l'huile et saupoudrer de paprika.",
			"Faire griller les légumes et le poulet à la poêle ou au barbecue.",
			"Servir chaud avec une sauce au yaourt et des herbes fraîches.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis aux abricots et amandes",
		description: "Un dessert fruité et moelleux, parfait pour l'été.",
		ingredients: [
			{ name: "Abricots", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
			{ name: "Lait entier", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Disposer les abricots coupés en deux dans un plat beurré.",
			"Mélanger la farine, les œufs, le sucre et le lait pour obtenir une pâte lisse.",
			"Verser la pâte sur les abricots et parsemer d'amandes effilées.",
			"Cuire au four à 180°C pendant 35 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de pommes de terre et bacon",
		description:
			"Un gratin crémeux et croustillant, parfait pour les repas d'hiver.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{ name: "Bacon", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les pommes de terre en rondelles et les disposer dans un plat.",
			"Ajouter des morceaux de bacon et verser la crème par-dessus.",
			"Saupoudrer de fromage râpé et cuire au four à 180°C pendant 40 minutes.",
			"Servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pizza blanche aux champignons et roquette",
		description: "Une pizza sans sauce tomate, gourmande et raffinée.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Roquette", quantity: "50g", category: "Légumes" },
		],
		steps: [
			"Étaler la pâte à pizza sur une plaque.",
			"Disposer des tranches de mozzarella et des champignons émincés.",
			"Cuire au four à 220°C pendant 15 minutes, puis ajouter la roquette avant de servir.",
			"Servir chaud avec un filet d'huile d'olive.",
		],
		category: "Plats à partager",
	},
	{
		name: "Salade César au poulet",
		description:
			"Une salade classique et complète, idéale pour un repas léger.",
		ingredients: [
			{ name: "Laitue romaine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poulet rôti", quantity: "150g", category: "Viandes" },
			{
				name: "Croutons",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Disposer la laitue dans un saladier.",
			"Ajouter des morceaux de poulet, les croutons et des copeaux de parmesan.",
			"Assaisonner avec une vinaigrette César maison.",
			"Servir immédiatement.",
		],
		category: "Salades",
	},

	{
		name: "Flan de courgettes et chèvre",
		description:
			"Un flan léger et savoureux, parfait en entrée ou en plat principal.",
		ingredients: [
			{ name: "Courgettes", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Râper les courgettes et les faire revenir légèrement dans une poêle.",
			"Mélanger les œufs, la crème et le fromage de chèvre émietté.",
			"Ajouter les courgettes au mélange et verser dans un moule.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de potiron et curry",
		description:
			"Une soupe épicée et réconfortante, idéale pour les soirées d'hiver.",
		ingredients: [
			{ name: "Potiron", quantity: "600g", category: "Légumes" },
			{ name: "Pomme de terre", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Faire cuire le potiron et la pomme de terre dans de l'eau bouillante.",
			"Mixer avec le lait de coco et le curry.",
			"Réchauffer doucement et servir chaud avec du pain.",
		],
		category: "Soupes",
	},
	{
		name: "Risotto aux poireaux et parmesan",
		description: "Un risotto crémeux et parfumé, parfait pour un dîner cosy.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les poireaux émincés dans une poêle avec un peu d'huile.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer le parmesan en fin de cuisson et mélanger.",
			"Servir immédiatement avec des herbes fraîches.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte au saumon et aneth",
		description:
			"Une tarte délicate et savoureuse, parfaite pour un repas léger.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Aneth", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer le saumon fumé en morceaux et parsemer d'aneth.",
			"Verser le mélange œufs-crème par-dessus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Gratin d'aubergines au parmesan",
		description:
			"Un plat italien fondant et gourmand, idéal pour un dîner entre amis.",
		ingredients: [
			{ name: "Aubergines", quantity: "3 pièces", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les aubergines en tranches et les faire griller légèrement.",
			"Disposer les aubergines, les tomates et les fromages en couches dans un plat.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de boulgour aux herbes",
		description:
			"Une salade fraîche et légère, parfaite pour un déjeuner rapide.",
		ingredients: [
			{ name: "Boulgour", quantity: "200g", category: "Riz" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
		],
		steps: [
			"Cuire le boulgour et le laisser refroidir.",
			"Hacher les herbes fraîches et couper les tomates en dés.",
			"Mélanger tous les ingrédients avec une vinaigrette citronnée.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Quiche aux épinards et feta",
		description: "Une quiche végétarienne gourmande et équilibrée.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Feta", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les épinards dans une poêle.",
			"Disposer la pâte dans un moule et répartir les épinards et la feta.",
			"Verser le mélange crème-œufs et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud ou froid.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet tikka masala",
		description:
			"Un plat indien savoureux et épicé, parfait avec du riz basmati.",
		ingredients: [
			{ name: "Poulet", quantity: "300g", category: "Viandes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Épices tandoori",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Mariner le poulet dans le yaourt et les épices tandoori pendant 1 heure.",
			"Faire revenir le poulet dans une poêle et ajouter les tomates.",
			"Laisser mijoter 20 minutes et servir avec du riz.",
			"Garnir de coriandre fraîche avant de servir.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Cake aux olives et fromage",
		description:
			"Un cake salé moelleux, parfait pour les pique-niques ou apéritifs.",
		ingredients: [
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Olives noires", quantity: "100g", category: "Fruits secs" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Mélanger la farine, les œufs, et ajouter un peu de lait pour obtenir une pâte.",
			"Incorporer les olives tranchées et le fromage râpé.",
			"Verser dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Apéritifs",
	},

	{
		name: "Clafoutis aux cerises",
		description: "Un dessert fruité et léger, parfait pour terminer un repas.",
		ingredients: [
			{ name: "Cerises", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Beurrer un plat et y disposer les cerises.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte homogène.",
			"Verser la pâte sur les cerises et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid avec une touche de sucre glace.",
		],
		category: "Desserts",
	},
	{
		name: "Tarte aux pommes caramélisées",
		description:
			"Une tarte classique avec des pommes fondantes et caramélisées.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes", quantity: "4 pièces", category: "Fruits" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
		],
		steps: [
			"Précuire la pâte dans un moule pendant 10 minutes.",
			"Faire revenir les pommes coupées en tranches dans le beurre et le sucre jusqu'à caramélisation.",
			"Disposer les pommes sur la pâte et cuire au four à 180°C pendant 20 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},
	{
		name: "Pâtes aux légumes grillés et feta",
		description: "Un plat simple et savoureux, idéal pour un repas rapide.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "250g", category: "Pâtes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée.",
			"Griller les légumes coupés en morceaux dans une poêle.",
			"Mélanger les pâtes cuites avec les légumes grillés et des morceaux de feta.",
			"Servir chaud ou tiède avec un filet d'huile d'olive.",
		],
		category: "Plats rapides",
	},
	{
		name: "Gâteau au yaourt et citron",
		description: "Un dessert simple et moelleux avec une touche acidulée.",
		ingredients: [
			{
				name: "Yaourt nature",
				quantity: "1 pot",
				category: "Produits laitiers",
			},
			{
				name: "Farine",
				quantity: "2 pots",
				category: "Produits de boulangerie",
			},
			{ name: "Sucre", quantity: "1 pot", category: "Produits de boulangerie" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Mélanger le yaourt, la farine, le sucre et les œufs.",
			"Ajouter le zeste et le jus du citron, puis bien mélanger.",
			"Verser la pâte dans un moule et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Ratatouille au four",
		description: "Une version simplifiée de ce classique provençal.",
		ingredients: [
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomates", quantity: "3 pièces", category: "Légumes" },
		],
		steps: [
			"Couper tous les légumes en morceaux.",
			"Les disposer dans un plat avec de l'huile d'olive, du sel et des herbes de Provence.",
			"Cuire au four à 180°C pendant 30 minutes en remuant à mi-cuisson.",
			"Servir chaud ou froid en accompagnement ou en plat principal.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Omelette aux champignons et persil",
		description: "Une omelette gourmande, parfaite pour un dîner rapide.",
		ingredients: [
			{ name: "Œufs", quantity: "4 pièces", category: "Produits laitiers" },
			{ name: "Champignons de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Persil", quantity: "1 bouquet", category: "Épices" },
			{ name: "Beurre", quantity: "20g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans du beurre.",
			"Battre les œufs avec du sel, du poivre et le persil ciselé.",
			"Verser les œufs sur les champignons et cuire à feu doux.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats rapides",
	},
	{
		name: "Poulet au miel et moutarde",
		description: "Un plat sucré-salé simple et délicieux.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Moutarde", quantity: "1 cuillère à soupe", category: "Épices" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Mélanger le miel, la moutarde et le jus de citron.",
			"Badigeonner les filets de poulet avec ce mélange.",
			"Cuire les filets dans une poêle chaude jusqu'à ce qu'ils soient dorés.",
			"Servir avec du riz ou des légumes vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade d'endives, noix et roquefort",
		description: "Une salade croquante et parfumée, idéale pour l'hiver.",
		ingredients: [
			{ name: "Endives", quantity: "3 pièces", category: "Légumes" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Roquefort", quantity: "80g", category: "Produits laitiers" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les endives en morceaux et les disposer dans un saladier.",
			"Ajouter les noix concassées et des morceaux de roquefort.",
			"Assaisonner avec la vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte aux courgettes et basilic",
		description:
			"Une tarte légère et parfumée, parfaite pour un repas estival.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer des tranches de courgettes, de mozzarella et du basilic.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud ou froid.",
		],
		category: "Plats végétariens",
	},

	{
		name: "Brownies aux noix",
		description: "Un dessert chocolaté fondant avec une touche croquante.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble au bain-marie.",
			"Ajouter le sucre, la farine et les œufs, puis mélanger jusqu'à obtenir une pâte homogène.",
			"Incorporer les noix concassées et verser la pâte dans un moule.",
			"Cuire au four à 180°C pendant 20 minutes. Laisser refroidir avant de couper.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de poireaux et pommes de terre",
		description:
			"Un gratin réconfortant et savoureux, parfait pour les soirées fraîches.",
		ingredients: [
			{ name: "Poireaux", quantity: "3 pièces", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les poireaux et les pommes de terre en morceaux.",
			"Faire cuire les pommes de terre dans de l'eau bouillante jusqu'à ce qu'elles soient tendres.",
			"Disposer les légumes dans un plat, verser la crème et parsemer de fromage.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Poulet coco-curry",
		description:
			"Un plat exotique au lait de coco et aux épices, parfait avec du riz.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir l'oignon émincé dans une poêle avec un peu d'huile.",
			"Ajouter les morceaux de poulet et les faire dorer.",
			"Incorporer le curry et le lait de coco, puis laisser mijoter 15 minutes.",
			"Servir chaud avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Soupe froide de concombre et menthe",
		description:
			"Une soupe légère et rafraîchissante, parfaite pour les journées chaudes.",
		ingredients: [
			{ name: "Concombre", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Menthe fraîche", quantity: "10 feuilles", category: "Épices" },
			{ name: "Citron", quantity: "1/2 pièce", category: "Fruits" },
		],
		steps: [
			"Éplucher et mixer les concombres avec le yaourt et le jus de citron.",
			"Ajouter les feuilles de menthe ciselées et assaisonner avec du sel et du poivre.",
			"Servir bien frais avec des glaçons si souhaité.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza aux quatre saisons",
		description: "Une pizza savoureuse, divisée en quatre sections gourmandes.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
			{ name: "Champignons", quantity: "100g", category: "Légumes" },
			{ name: "Jambon", quantity: "100g", category: "Viandes" },
		],
		steps: [
			"Étaler la pâte et ajouter une base de sauce tomate.",
			"Répartir les garnitures : tomates, champignons, jambon et olives.",
			"Saupoudrer de fromage râpé et cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade.",
		],
		category: "Plats à partager",
	},
	{
		name: "Salade de quinoa et légumes grillés",
		description:
			"Une salade saine et savoureuse, parfaite pour un repas estival.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Courgette", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivron rouge", quantity: "1 pièce", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Griller les légumes coupés en morceaux.",
			"Mélanger le quinoa avec les légumes grillés et des morceaux de feta.",
			"Assaisonner avec une vinaigrette au citron et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte tatin aux légumes",
		description: "Une version salée et originale de la célèbre tarte tatin.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomates cerises", quantity: "300g", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Herbes de Provence",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Caraméliser les tomates cerises avec le vinaigre balsamique dans une poêle.",
			"Transférer dans un moule et recouvrir avec la pâte feuilletée.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Renverser délicatement la tarte et servir tiède.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet rôti aux herbes",
		description: "Un classique familial avec des saveurs parfumées.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Thym", quantity: "3 branches", category: "Épices" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Farcir le poulet avec le citron et les herbes.",
			"Badigeonner avec un filet d'huile d'olive, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Crumble aux pommes et aux amandes",
		description: "Un dessert croquant et fondant, idéal pour l'automne.",
		ingredients: [
			{ name: "Pommes", quantity: "4 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "80g", category: "Produits laitiers" },
			{ name: "Amandes effilées", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Éplucher et couper les pommes en morceaux, puis les disposer dans un plat.",
			"Mélanger la farine, le beurre et le sucre pour obtenir une pâte sableuse.",
			"Ajouter les amandes effilées et répartir le mélange sur les pommes.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Desserts",
	},

	{
		name: "Tarte au chocolat et framboises",
		description:
			"Un dessert gourmand avec une ganache au chocolat et des framboises fraîches.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Framboises", quantity: "150g", category: "Fruits" },
		],
		steps: [
			"Précuire la pâte sablée dans un moule pendant 10 minutes.",
			"Faire fondre le chocolat avec la crème pour obtenir une ganache lisse.",
			"Verser la ganache sur la pâte précuite et laisser refroidir.",
			"Disposer les framboises sur le dessus avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Risotto aux champignons et ail",
		description:
			"Un risotto crémeux et parfumé, idéal pour un repas réconfortant.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir l'ail et les champignons dans une poêle.",
			"Ajouter le riz et cuire en incorporant progressivement du bouillon chaud.",
			"Incorporer le parmesan en fin de cuisson et servir chaud.",
			"Garnir avec des herbes fraîches si désiré.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de lentilles, carottes et feta",
		description:
			"Une salade nourrissante et savoureuse, idéale pour un repas équilibré.",
		ingredients: [
			{ name: "Lentilles", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les lentilles et les laisser refroidir.",
			"Râper les carottes et les mélanger avec les lentilles.",
			"Ajouter des morceaux de feta et assaisonner avec la vinaigrette.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Quiche aux brocolis et chèvre",
		description:
			"Une quiche végétarienne pleine de saveurs, parfaite pour un repas léger.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Brocolis", quantity: "200g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire les brocolis à la vapeur.",
			"Étaler la pâte dans un moule et répartir les brocolis et le chèvre.",
			"Mélanger la crème avec des œufs, saler, poivrer et verser sur la pâte.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de saumon et poireaux",
		description:
			"Un plat complet et équilibré, parfait pour les repas en famille.",
		ingredients: [
			{ name: "Filets de saumon", quantity: "300g", category: "Viandes" },
			{ name: "Poireaux", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les poireaux émincés dans une poêle.",
			"Disposer les filets de saumon dans un plat à gratin et ajouter les poireaux.",
			"Verser la crème et saupoudrer de fromage râpé.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats à base de poisson",
	},
	{
		name: "Tarte aux figues et au miel",
		description:
			"Un dessert élégant et fruité, idéal pour les repas automnaux.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Figues fraîches", quantity: "6 pièces", category: "Fruits" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les figues coupées en deux sur la pâte.",
			"Arroser de miel et parsemer d'amandes effilées.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Soupe de tomates et basilic",
		description:
			"Une soupe légère et parfumée, parfaite pour une entrée ou un dîner simple.",
		ingredients: [
			{ name: "Tomates", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Crème liquide",
				quantity: "50ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire les tomates dans le bouillon jusqu'à ce qu'elles soient tendres.",
			"Mixer avec le basilic pour obtenir une texture lisse.",
			"Ajouter la crème et réchauffer doucement avant de servir.",
			"Accompagner de croûtons ou de pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet rôti à l'estragon",
		description:
			"Un classique parfumé et savoureux, parfait pour les repas en famille.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Estragon", quantity: "3 branches", category: "Épices" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Farcir le poulet avec l'estragon et le citron.",
			"Badigeonner le poulet avec du beurre fondu, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Crème brûlée à la vanille",
		description: "Un dessert classique et élégant avec une croûte caramélisée.",
		ingredients: [
			{
				name: "Crème liquide",
				quantity: "500ml",
				category: "Produits laitiers",
			},
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{
				name: "Jaunes d'œufs",
				quantity: "4 pièces",
				category: "Produits laitiers",
			},
			{ name: "Gousse de vanille", quantity: "1 pièce", category: "Épices" },
		],
		steps: [
			"Faire chauffer la crème avec la gousse de vanille fendue.",
			"Mélanger les jaunes d'œufs avec le sucre, puis incorporer la crème chaude.",
			"Verser dans des ramequins et cuire au bain-marie à 150°C pendant 40 minutes.",
			"Laisser refroidir, saupoudrer de sucre et caraméliser au chalumeau.",
		],
		category: "Desserts",
	},

	{
		name: "Pâtes au pesto et tomates cerises",
		description:
			"Un plat rapide et savoureux avec des saveurs fraîches et estivales.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Pesto", quantity: "3 cuillères à soupe", category: "Épices" },
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée jusqu'à ce qu'elles soient al dente.",
			"Faire revenir les tomates cerises dans une poêle avec un filet d'huile d'olive.",
			"Mélanger les pâtes cuites avec le pesto et les tomates cerises.",
			"Servir chaud, garni de parmesan râpé.",
		],
		category: "Plats rapides",
	},
	{
		name: "Salade de pommes de terre au saumon fumé",
		description:
			"Une salade complète et savoureuse, parfaite pour un repas frais.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "400g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Ciboulette", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire cuire les pommes de terre, les éplucher et les couper en morceaux.",
			"Ajouter le saumon fumé en lanières et la crème fraîche.",
			"Parsemer de ciboulette ciselée et mélanger délicatement.",
			"Servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Tarte rustique aux poires et bleu",
		description: "Un mélange sucré-salé parfait pour un repas original.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poires", quantity: "2 pièces", category: "Fruits" },
			{
				name: "Bleu d'Auvergne",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Noix", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte sur une plaque et y disposer les poires coupées en tranches.",
			"Ajouter des morceaux de bleu et parsemer de noix concassées.",
			"Replier légèrement les bords de la pâte et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de courgettes et fromage frais",
		description: "Une soupe veloutée et légère, idéale pour un dîner simple.",
		ingredients: [
			{ name: "Courgettes", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Fromage frais",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire cuire les courgettes dans le bouillon jusqu'à tendreté.",
			"Mixer avec le fromage frais pour obtenir une texture lisse.",
			"Ajouter des feuilles de basilic ciselées avant de servir.",
			"Servir chaud ou froid selon les goûts.",
		],
		category: "Soupes",
	},
	{
		name: "Lasagnes aux légumes et béchamel",
		description: "Des lasagnes végétariennes riches en saveurs et gourmandes.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Béchamel", quantity: "400ml", category: "Produits laitiers" },
		],
		steps: [
			"Griller les légumes coupés en tranches dans une poêle.",
			"Disposer une couche de béchamel au fond d'un plat, ajouter des feuilles de lasagnes, puis des légumes.",
			"Répéter jusqu'à épuisement des ingrédients, en terminant par de la béchamel.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Poêlée de légumes et tofu",
		description:
			"Un plat végétalien sain et savoureux, parfait pour un dîner rapide.",
		ingredients: [
			{ name: "Tofu", quantity: "200g", category: "Produits végétaliens" },
			{ name: "Brocoli", quantity: "150g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper le tofu en cubes et le faire mariner dans la sauce soja pendant 15 minutes.",
			"Faire revenir les légumes coupés en morceaux dans une poêle.",
			"Ajouter le tofu et sa marinade, puis cuire à feu moyen jusqu'à ce que le tout soit doré.",
			"Servir chaud avec du riz ou des nouilles.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gâteau renversé à l'ananas",
		description:
			"Un dessert rétro et fruité, parfait pour une touche de nostalgie.",
		ingredients: [
			{ name: "Ananas en tranches", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "150g", category: "Produits de boulangerie" },
		],
		steps: [
			"Caraméliser un peu de sucre dans un moule et y disposer les tranches d'ananas.",
			"Mélanger la farine, le sucre, les œufs et le beurre fondu pour obtenir une pâte.",
			"Verser la pâte sur les tranches d'ananas et cuire au four à 180°C pendant 30 minutes.",
			"Laisser tiédir avant de démouler.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de courgettes et riz",
		description:
			"Un gratin simple et nourrissant, idéal pour un repas familial.",
		ingredients: [
			{ name: "Courgettes", quantity: "3 pièces", category: "Légumes" },
			{ name: "Riz", quantity: "200g", category: "Riz" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire le riz et le disposer dans un plat à gratin.",
			"Ajouter des tranches de courgettes et verser la crème par-dessus.",
			"Saupoudrer de fromage râpé et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Poulet aux champignons et estragon",
		description:
			"Un plat mijoté délicat et savoureux, idéal pour un repas raffiné.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Champignons", quantity: "150g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Estragon frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter les champignons émincés et laisser cuire 5 minutes.",
			"Incorporer la crème et l'estragon, puis laisser mijoter 10 minutes.",
			"Servir chaud avec du riz ou des pâtes.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Pâtes à la carbonara végétarienne",
		description:
			"Une version sans viande du classique italien, avec des légumes croquants.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée jusqu'à ce qu'elles soient al dente.",
			"Faire revenir les courgettes coupées en dés dans une poêle avec un peu d'huile.",
			"Mélanger les pâtes avec la crème et les courgettes, puis ajouter le parmesan.",
			"Servir chaud, garni de poivre et de basilic frais.",
		],
		category: "Plats rapides",
	},
	{
		name: "Poulet mariné au yaourt et citron",
		description: "Un poulet tendre et savoureux grâce à une marinade parfumée.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Yaourt nature",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Coriandre", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Mélanger le yaourt avec le jus de citron et la coriandre ciselée.",
			"Placer les filets de poulet dans la marinade et laisser reposer 1 heure.",
			"Griller ou cuire les filets de poulet dans une poêle chaude.",
			"Servir avec une salade ou des légumes vapeur.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Clafoutis aux prunes",
		description:
			"Un dessert fruité et moelleux, idéal pour profiter des fruits de saison.",
		ingredients: [
			{ name: "Prunes", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Beurrer un moule et y disposer les prunes coupées en deux.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte homogène.",
			"Verser la pâte sur les prunes et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Velouté de pois chiches et cumin",
		description: "Une soupe crémeuse et parfumée aux saveurs orientales.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire cuire les pois chiches dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer avec la crème et le cumin pour obtenir une texture lisse.",
			"Réchauffer doucement et servir chaud avec des croûtons ou du pain pita.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin de légumes au curcuma",
		description: "Un gratin coloré et épicé, parfait pour les repas d'hiver.",
		ingredients: [
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Brocoli", quantity: "200g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Curcuma", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Cuire les légumes à la vapeur jusqu'à ce qu'ils soient légèrement tendres.",
			"Disposer les légumes dans un plat à gratin et verser la crème mélangée au curcuma.",
			"Saupoudrer de fromage râpé si désiré et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pizza aux artichauts et olives",
		description: "Une pizza originale aux saveurs méditerranéennes.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Cœurs d'artichauts", quantity: "150g", category: "Légumes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte et ajouter une base de sauce tomate.",
			"Disposer les cœurs d'artichauts, les olives et la mozzarella.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Salade de boulgour et grenade",
		description:
			"Une salade fraîche et croquante, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Boulgour", quantity: "150g", category: "Riz" },
			{ name: "Graines de grenade", quantity: "100g", category: "Fruits" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le boulgour et le laisser refroidir.",
			"Ajouter les graines de grenade et la menthe ciselée.",
			"Mélanger avec la vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Crumble salé aux courgettes et chèvre",
		description:
			"Un plat original et gourmand, parfait pour un repas végétarien.",
		ingredients: [
			{ name: "Courgettes", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "80g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les courgettes coupées en rondelles.",
			"Disposer les courgettes et des morceaux de chèvre dans un plat.",
			"Mélanger la farine et le beurre pour former un crumble, puis parsemer sur les courgettes.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Riz sauté au poulet et légumes",
		description:
			"Un plat rapide et équilibré, inspiré de la cuisine asiatique.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Filets de poulet", quantity: "150g", category: "Viandes" },
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir le poulet coupé en morceaux avec les carottes en julienne.",
			"Ajouter le riz froid et la sauce soja, puis mélanger à feu vif.",
			"Servir chaud avec des herbes fraîches.",
		],
		category: "Plats rapides",
	},

	{
		name: "Tarte aux épinards et ricotta",
		description:
			"Une tarte savoureuse et légère, idéale pour un repas équilibré.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Ricotta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle jusqu'à ce qu'ils réduisent.",
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Mélanger la ricotta et le parmesan, puis ajouter les épinards.",
			"Verser le mélange sur la pâte et cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet basquaise classique",
		description: "Un plat traditionnel du sud-ouest, riche en saveurs.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Poivrons rouges", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomates", quantity: "3 pièces", category: "Légumes" },
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir les cuisses de poulet dans une cocotte pour les dorer.",
			"Ajouter l'oignon émincé, les poivrons en lanières et les tomates en morceaux.",
			"Laisser mijoter à feu doux pendant 40 minutes.",
			"Servir chaud avec du riz ou des pommes de terre vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Gâteau aux carottes et noix",
		description:
			"Un dessert moelleux et parfumé aux épices, idéal pour les goûters.",
		ingredients: [
			{ name: "Carottes", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Râper les carottes et mélanger avec la farine, le sucre et les œufs.",
			"Ajouter les noix concassées et la cannelle.",
			"Verser la pâte dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Laisser refroidir avant de déguster.",
		],
		category: "Desserts",
	},
	{
		name: "Velouté de panais et pommes",
		description:
			"Une soupe douce et légèrement sucrée, parfaite pour l'automne.",
		ingredients: [
			{ name: "Panais", quantity: "300g", category: "Légumes" },
			{ name: "Pommes", quantity: "2 pièces", category: "Fruits" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Éplucher et couper les panais et les pommes en morceaux.",
			"Faire cuire dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer avec la crème pour obtenir une soupe lisse.",
			"Servir chaud avec une pincée de noix de muscade.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin dauphinois traditionnel",
		description: "Un classique français, réconfortant et crémeux.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "400ml",
				category: "Produits laitiers",
			},
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines rondelles.",
			"Frotter un plat à gratin avec l'ail, puis y disposer les pommes de terre.",
			"Mélanger la crème et le lait, saler et poivrer, puis verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 1 heure.",
		],
		category: "Accompagnements",
	},
	{
		name: "Pizza blanche au chèvre et miel",
		description: "Une pizza originale et gourmande avec une touche sucrée.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Thym", quantity: "1 branche", category: "Épices" },
		],
		steps: [
			"Étaler la pâte et y répartir des rondelles de fromage de chèvre.",
			"Arroser de miel et parsemer de thym.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Salade de quinoa aux légumes croquants",
		description: "Une salade légère et nourrissante, parfaite pour l'été.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Concombre", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Couper le concombre et les carottes en petits morceaux.",
			"Mélanger tous les ingrédients avec la vinaigrette.",
			"Servir frais, garni de persil ou de coriandre.",
		],
		category: "Salades",
	},
	{
		name: "Clafoutis aux mirabelles",
		description: "Un dessert estival gourmand avec des fruits de saison.",
		ingredients: [
			{ name: "Mirabelles", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Laver et dénoyauter les mirabelles, puis les disposer dans un moule beurré.",
			"Mélanger la farine, le sucre, les œufs et le lait.",
			"Verser la pâte sur les mirabelles et cuire au four à 180°C pendant 35 minutes.",
			"Servir tiède ou froid avec une touche de sucre glace.",
		],
		category: "Desserts",
	},
	{
		name: "Riz sauté aux légumes et tofu",
		description:
			"Un plat végétalien savoureux et rapide, inspiré de la cuisine asiatique.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Tofu", quantity: "150g", category: "Produits végétaliens" },
			{ name: "Poivrons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir le tofu coupé en dés avec les poivrons en morceaux.",
			"Ajouter le riz froid et la sauce soja, puis mélanger à feu vif.",
			"Servir chaud, garni de graines de sésame.",
		],
		category: "Plats rapides",
	},

	{
		name: "Crumble aux fruits rouges",
		description:
			"Un dessert acidulé et croustillant, parfait pour les amateurs de fruits.",
		ingredients: [
			{ name: "Fruits rouges mélangés", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "80g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Disposer les fruits rouges dans un plat beurré.",
			"Mélanger la farine, le sucre et le beurre pour obtenir une texture sableuse.",
			"Répartir le mélange sur les fruits rouges.",
			"Cuire au four à 180°C pendant 25 minutes jusqu'à ce que le crumble soit doré.",
		],
		category: "Desserts",
	},
	{
		name: "Quiche aux courgettes et tomates cerises",
		description:
			"Une quiche légère et estivale, parfaite pour un repas en plein air.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Répartir des rondelles de courgettes et des tomates cerises coupées en deux.",
			"Ajouter des morceaux de mozzarella et verser un mélange œufs-crème.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de patate douce et coriandre",
		description:
			"Une soupe douce et parfumée, idéale pour un dîner réconfortant.",
		ingredients: [
			{ name: "Patate douce", quantity: "400g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Coriandre fraîche", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire la patate douce coupée en morceaux dans le bouillon.",
			"Mixer avec la crème pour obtenir une soupe lisse.",
			"Ajouter la coriandre ciselée avant de servir.",
			"Servir chaud avec des croûtons ou du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Lasagnes au saumon et épinards",
		description:
			"Des lasagnes savoureuses et légères, idéales pour un repas familial.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Saumon fumé", quantity: "200g", category: "Viandes" },
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{ name: "Béchamel", quantity: "400ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle avec un filet d'huile.",
			"Disposer une couche de béchamel, de feuilles de lasagnes, de saumon et d'épinards.",
			"Répéter jusqu'à épuisement des ingrédients, en terminant par une couche de béchamel.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pâtes à la sauce tomate et basilic",
		description:
			"Un classique simple et délicieux, idéal pour les repas rapides.",
		ingredients: [
			{ name: "Spaghetti", quantity: "250g", category: "Pâtes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée jusqu'à ce qu'elles soient al dente.",
			"Faire mijoter les tomates concassées avec un peu d'ail et d'huile d'olive.",
			"Ajouter les pâtes cuites à la sauce, mélanger et garnir de basilic et de parmesan.",
			"Servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Poulet rôti aux légumes d'hiver",
		description:
			"Un plat réconfortant avec des légumes rôtis et du poulet tendre.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Carottes", quantity: "3 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
		],
		steps: [
			"Disposer le poulet dans un plat avec les légumes coupés en morceaux.",
			"Badigeonner d'huile d'olive, saler et poivrer.",
			"Rôtir au four à 200°C pendant 1h30, en arrosant régulièrement.",
			"Servir chaud avec une sauce au jus de cuisson.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Cake salé au fromage et herbes",
		description:
			"Un cake moelleux, parfait pour les pique-niques ou apéritifs.",
		ingredients: [
			{ name: "Farine", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
			{
				name: "Herbes de Provence",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Mélanger la farine, les œufs et un peu de lait pour obtenir une pâte.",
			"Incorporer le fromage râpé et les herbes.",
			"Verser dans un moule et cuire au four à 180°C pendant 35 minutes.",
			"Servir tiède ou froid.",
		],
		category: "Apéritifs",
	},
	{
		name: "Clafoutis salé aux tomates cerises",
		description:
			"Une version salée du clafoutis, idéale pour une entrée ou un repas léger.",
		ingredients: [
			{ name: "Tomates cerises", quantity: "300g", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Beurrer un moule et y disposer les tomates cerises.",
			"Mélanger la farine, le lait, les œufs et le fromage râpé.",
			"Verser le mélange sur les tomates et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Riz au lait vanillé",
		description:
			"Un dessert doux et crémeux, parfait pour finir un repas en légèreté.",
		ingredients: [
			{ name: "Riz rond", quantity: "150g", category: "Riz" },
			{
				name: "Lait entier",
				quantity: "1 litre",
				category: "Produits laitiers",
			},
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
			{ name: "Gousse de vanille", quantity: "1 pièce", category: "Épices" },
		],
		steps: [
			"Faire chauffer le lait avec la gousse de vanille fendue.",
			"Ajouter le riz et cuire à feu doux en remuant régulièrement.",
			"Incorporer le sucre en fin de cuisson.",
			"Laisser refroidir et servir tiède ou froid.",
		],
		category: "Desserts",
	},

	{
		name: "Velouté de champignons",
		description:
			"Une soupe crémeuse et réconfortante, parfaite pour l'automne.",
		ingredients: [
			{ name: "Champignons de Paris", quantity: "300g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Faire revenir les champignons et l'ail émincé dans une poêle.",
			"Ajouter le bouillon et laisser mijoter 15 minutes.",
			"Mixer pour obtenir une texture lisse, puis incorporer la crème.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte au chèvre et épinards",
		description: "Une tarte riche en saveurs, idéale pour un repas végétarien.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "300g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Œufs", quantity: "3 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle.",
			"Étaler la pâte dans un moule et ajouter les épinards et le fromage de chèvre.",
			"Mélanger les œufs avec de la crème et verser sur la tarte.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Ragoût de pois chiches et légumes",
		description:
			"Un plat mijoté sain et savoureux, parfait pour un repas équilibré.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
		],
		steps: [
			"Faire revenir les carottes et les courgettes coupées en morceaux.",
			"Ajouter les pois chiches et les tomates concassées.",
			"Laisser mijoter à feu doux pendant 20 minutes.",
			"Servir chaud avec du riz ou du pain complet.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade d'oranges et fenouil",
		description:
			"Une salade fraîche et croquante, idéale pour accompagner un plat principal.",
		ingredients: [
			{ name: "Oranges", quantity: "2 pièces", category: "Fruits" },
			{ name: "Fenouil", quantity: "1 pièce", category: "Légumes" },
			{ name: "Olives noires", quantity: "30g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Éplucher les oranges et les couper en rondelles.",
			"Émincer le fenouil et mélanger avec les oranges et les olives.",
			"Ajouter la vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Gratin de pommes de terre au bleu",
		description:
			"Un gratin crémeux avec une touche de fromage bleu pour un goût unique.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Bleu d'Auvergne",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en rondelles.",
			"Disposer les pommes de terre dans un plat à gratin et ajouter des morceaux de bleu.",
			"Verser la crème mélangée avec l'ail haché et cuire au four à 180°C pendant 45 minutes.",
			"Servir chaud en accompagnement ou en plat principal.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe froide de betterave et yaourt",
		description: "Une soupe fraîche et colorée, parfaite pour l'été.",
		ingredients: [
			{ name: "Betteraves cuites", quantity: "300g", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Citron", quantity: "1/2 pièce", category: "Fruits" },
			{ name: "Aneth", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Mixer les betteraves avec le yaourt et le jus de citron.",
			"Assaisonner avec du sel, du poivre et ajouter l'aneth ciselé.",
			"Servir bien frais avec des croûtons ou des graines de sésame.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet aux amandes et miel",
		description: "Un plat sucré-salé inspiré des saveurs orientales.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Amandes effilées", quantity: "50g", category: "Fruits secs" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Cannelle", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle.",
			"Ajouter les amandes et les faire légèrement griller.",
			"Incorporer le miel et la cannelle, puis laisser mijoter quelques minutes.",
			"Servir chaud avec du riz ou de la semoule.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Tarte aux prunes et amandes",
		description: "Un dessert fruité et gourmand, idéal pour l'été.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Prunes", quantity: "300g", category: "Fruits" },
			{ name: "Amandes en poudre", quantity: "50g", category: "Fruits secs" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Répartir les prunes coupées en deux et saupoudrer de poudre d'amandes.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza aux légumes grillés et pesto",
		description: "Une pizza maison colorée et savoureuse.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Pesto", quantity: "2 cuillères à soupe", category: "Épices" },
		],
		steps: [
			"Griller les légumes tranchés dans une poêle ou au four.",
			"Étaler la pâte, ajouter une base de pesto, puis disposer les légumes.",
			"Cuire au four à 200°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},

	{
		name: "Brownies chocolat-noix",
		description:
			"Un dessert gourmand et croquant, parfait pour les amateurs de chocolat.",
		ingredients: [
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{ name: "Beurre", quantity: "100g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Faire fondre le chocolat et le beurre ensemble au bain-marie.",
			"Incorporer la farine, le sucre, les œufs et mélanger jusqu'à obtenir une pâte homogène.",
			"Ajouter les noix concassées, puis verser la pâte dans un moule.",
			"Cuire au four à 180°C pendant 20 minutes. Laisser refroidir avant de couper en carrés.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de chou-fleur et cheddar",
		description:
			"Un gratin simple et savoureux, idéal pour accompagner vos plats.",
		ingredients: [
			{ name: "Chou-fleur", quantity: "1 pièce", category: "Légumes" },
			{ name: "Cheddar râpé", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Cuire le chou-fleur à la vapeur jusqu'à ce qu'il soit tendre.",
			"Disposer les bouquets de chou-fleur dans un plat à gratin.",
			"Mélanger la crème fraîche avec la muscade, saler et poivrer, puis verser sur le chou-fleur.",
			"Parsemer de cheddar râpé et cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Velouté de carottes au gingembre",
		description: "Une soupe légère et épicée, idéale pour se réchauffer.",
		ingredients: [
			{ name: "Carottes", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Gingembre frais", quantity: "1 morceau", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les carottes coupées en rondelles avec le gingembre râpé.",
			"Ajouter le bouillon et laisser mijoter jusqu'à ce que les carottes soient tendres.",
			"Mixer pour obtenir une texture lisse, puis incorporer la crème.",
			"Servir chaud avec un peu de coriandre fraîche en garniture.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza margherita maison",
		description:
			"Une pizza classique et savoureuse avec des ingrédients simples.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomates", quantity: "3 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Préparer une sauce tomate en faisant mijoter les tomates avec un peu d'huile d'olive.",
			"Étaler la pâte à pizza et étaler la sauce tomate dessus.",
			"Ajouter des tranches de mozzarella et des feuilles de basilic.",
			"Cuire au four à 220°C pendant 15 minutes. Servir immédiatement.",
		],
		category: "Plats à partager",
	},
	{
		name: "Tarte aux pommes normande",
		description: "Une tarte classique aux pommes avec une garniture onctueuse.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes", quantity: "4 pièces", category: "Fruits" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer des tranches de pommes en cercle sur la pâte.",
			"Mélanger la crème fraîche et le sucre, puis verser sur les pommes.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Lasagnes bolognaises traditionnelles",
		description:
			"Un plat familial riche et savoureux, parfait pour les grandes tablées.",
		ingredients: [
			{
				name: "Feuilles de lasagnes",
				quantity: "12 pièces",
				category: "Pâtes",
			},
			{ name: "Bœuf haché", quantity: "400g", category: "Viandes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Béchamel", quantity: "500ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir le bœuf haché avec un peu d'huile, puis ajouter les tomates et laisser mijoter.",
			"Disposer une couche de sauce à la viande, une couche de béchamel et une couche de feuilles de lasagnes.",
			"Répéter jusqu'à épuisement des ingrédients, en terminant par de la béchamel.",
			"Cuire au four à 180°C pendant 30 minutes. Servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Riz au curcuma et légumes verts",
		description:
			"Un riz coloré et parfumé, idéal pour accompagner vos plats principaux.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Haricots verts", quantity: "150g", category: "Légumes" },
			{ name: "Petits pois", quantity: "100g", category: "Légumes" },
			{ name: "Curcuma", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Cuire le riz dans de l'eau bouillante salée avec le curcuma.",
			"Faire revenir les haricots verts et les petits pois dans une poêle avec un peu d'huile.",
			"Mélanger les légumes cuits avec le riz au curcuma.",
			"Servir chaud en accompagnement ou en plat principal.",
		],
		category: "Accompagnements",
	},
	{
		name: "Clafoutis aux poires et amandes",
		description:
			"Un dessert moelleux et fruité, parfait pour toutes les saisons.",
		ingredients: [
			{ name: "Poires", quantity: "3 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Beurrer un moule et y disposer les poires coupées en morceaux.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte lisse.",
			"Verser la pâte sur les poires et parsemer d'amandes effilées.",
			"Cuire au four à 180°C pendant 35 minutes. Servir tiède.",
		],
		category: "Desserts",
	},

	{
		name: "Salade César revisitée",
		description:
			"Une version modernisée de la salade César, pleine de saveurs.",
		ingredients: [
			{ name: "Laitue romaine", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poulet grillé", quantity: "150g", category: "Viandes" },
			{
				name: "Croûtons",
				quantity: "50g",
				category: "Produits de boulangerie",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Couper la laitue en morceaux et la disposer dans un saladier.",
			"Ajouter le poulet coupé en lanières, les croûtons et des copeaux de parmesan.",
			"Assaisonner avec une vinaigrette César maison.",
			"Servir immédiatement avec un peu de poivre moulu.",
		],
		category: "Salades",
	},
	{
		name: "Gâteau marbré chocolat-vanille",
		description:
			"Un dessert moelleux et savoureux avec deux parfums classiques.",
		ingredients: [
			{ name: "Farine", quantity: "200g", category: "Produits de boulangerie" },
			{ name: "Sucre", quantity: "150g", category: "Produits de boulangerie" },
			{ name: "Beurre", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Chocolat noir",
				quantity: "100g",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Mélanger la farine, le sucre, les œufs et le beurre fondu pour obtenir une pâte homogène.",
			"Diviser la pâte en deux et ajouter le chocolat fondu dans une moitié.",
			"Verser les deux pâtes en alternance dans un moule beurré pour créer un effet marbré.",
			"Cuire au four à 180°C pendant 35 minutes. Laisser refroidir avant de démouler.",
		],
		category: "Desserts",
	},
	{
		name: "Poulet au citron et romarin",
		description:
			"Un plat parfumé et léger, parfait pour les amateurs de cuisine méditerranéenne.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Citron", quantity: "2 pièces", category: "Fruits" },
			{ name: "Romarin", quantity: "3 branches", category: "Épices" },
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Mariner les cuisses de poulet avec du jus de citron, du romarin et de l'ail écrasé pendant 1 heure.",
			"Disposer les cuisses dans un plat et les arroser d'un filet d'huile d'olive.",
			"Cuire au four à 200°C pendant 40 minutes, en arrosant régulièrement avec le jus de cuisson.",
			"Servir chaud avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Quiche aux poireaux et lardons",
		description:
			"Une quiche classique et gourmande, idéale pour un repas familial.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les lardons et les poireaux émincés dans une poêle.",
			"Étaler la pâte dans un moule et y ajouter le mélange poireaux-lardons.",
			"Verser la crème mélangée avec des œufs et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud ou tiède avec une salade.",
		],
		category: "Plats principaux",
	},
	{
		name: "Risotto au potiron et sauge",
		description: "Un risotto crémeux aux saveurs automnales.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Potiron", quantity: "300g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Sauge", quantity: "5 feuilles", category: "Épices" },
		],
		steps: [
			"Faire revenir le potiron en dés avec un peu d'huile d'olive.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer les dés de potiron et des feuilles de sauge ciselées.",
			"Servir immédiatement, garni de parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte rustique aux fruits d'été",
		description: "Un dessert simple et coloré avec des fruits frais de saison.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pêches", quantity: "3 pièces", category: "Fruits" },
			{ name: "Abricots", quantity: "4 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte sur une plaque de cuisson et disposer les fruits tranchés au centre.",
			"Replier légèrement les bords de la pâte pour former une tarte rustique.",
			"Saupoudrer de sucre et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une boule de glace ou de la crème fouettée.",
		],
		category: "Desserts",
	},
	{
		name: "Pâtes aux épinards et gorgonzola",
		description:
			"Un plat riche et crémeux, parfait pour les amateurs de fromages.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "250g", category: "Pâtes" },
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Gorgonzola", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Cuire les pâtes dans de l'eau bouillante salée jusqu'à ce qu'elles soient al dente.",
			"Faire revenir les épinards dans une poêle avec un peu de beurre.",
			"Ajouter le gorgonzola et la crème, puis mélanger jusqu'à obtention d'une sauce lisse.",
			"Incorporer les pâtes et servir immédiatement.",
		],
		category: "Plats rapides",
	},
	{
		name: "Soupe de courgettes au chèvre frais",
		description: "Une soupe légère et onctueuse, idéale pour un dîner rapide.",
		ingredients: [
			{ name: "Courgettes", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Fromage de chèvre frais",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire cuire les courgettes en morceaux dans le bouillon.",
			"Mixer avec le fromage de chèvre jusqu'à obtention d'une texture lisse.",
			"Ajouter des feuilles de basilic ciselées avant de servir.",
			"Servir chaud ou froid, selon les goûts.",
		],
		category: "Soupes",
	},

	{
		name: "Clafoutis salé aux légumes d'été",
		description: "Un clafoutis léger et coloré avec des légumes grillés.",
		ingredients: [
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les courgettes en rondelles dans une poêle.",
			"Beurrer un moule et y disposer les courgettes et les tomates cerises.",
			"Mélanger la farine, le lait, les œufs et du fromage râpé pour obtenir une pâte lisse.",
			"Verser la pâte sur les légumes et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Risotto aux asperges et citron",
		description: "Un risotto frais et léger, idéal pour le printemps.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Asperges vertes", quantity: "300g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Faire revenir le riz dans un peu d'huile jusqu'à ce qu'il soit nacré.",
			"Ajouter progressivement le bouillon chaud tout en remuant.",
			"Blanchir les asperges, les couper en morceaux et les ajouter au risotto.",
			"Incorporer le zeste de citron en fin de cuisson et servir avec du parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte tatin aux échalotes caramélisées",
		description: "Une tarte salée originale et gourmande.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Échalotes", quantity: "300g", category: "Légumes" },
			{
				name: "Vinaigre balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Sucre",
				quantity: "1 cuillère à soupe",
				category: "Produits de boulangerie",
			},
		],
		steps: [
			"Faire revenir les échalotes dans une poêle avec le vinaigre et le sucre jusqu'à caramélisation.",
			"Transférer dans un moule, recouvrir avec la pâte feuilletée et replier les bords.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Renverser la tarte avant de servir tiède.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de patates douces et chèvre",
		description:
			"Un gratin doux et crémeux avec une touche de fromage de chèvre.",
		ingredients: [
			{ name: "Patates douces", quantity: "500g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les patates douces en rondelles.",
			"Disposer les rondelles dans un plat à gratin et ajouter des morceaux de chèvre.",
			"Verser la crème mélangée à la muscade, saler et poivrer.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe froide de concombre et aneth",
		description:
			"Une soupe rafraîchissante et légère, parfaite pour les journées chaudes.",
		ingredients: [
			{ name: "Concombre", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Aneth", quantity: "1 bouquet", category: "Épices" },
			{ name: "Citron", quantity: "1/2 pièce", category: "Fruits" },
		],
		steps: [
			"Mixer les concombres pelés avec le yaourt et le jus de citron.",
			"Ajouter l'aneth ciselé, saler et poivrer.",
			"Servir bien frais avec des glaçons ou un filet d'huile d'olive.",
		],
		category: "Soupes",
	},
	{
		name: "Poulet à l'estragon et moutarde",
		description:
			"Un plat parfumé et savoureux, parfait pour un repas en famille.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Estragon", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Moutarde à l'ancienne",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter l'estragon et la moutarde, puis incorporer la crème.",
			"Laisser mijoter 10 minutes à feu doux.",
			"Servir chaud avec du riz ou des légumes vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pizza aux figues et roquefort",
		description: "Une pizza sucrée-salée originale et gourmande.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Figues fraîches", quantity: "4 pièces", category: "Fruits" },
			{ name: "Roquefort", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Étaler la pâte et disposer des morceaux de figues et de roquefort.",
			"Arroser de miel et ajouter des noix si désiré.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Clafoutis aux raisins",
		description: "Un dessert automnal moelleux et fruité.",
		ingredients: [
			{ name: "Raisins", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "80g", category: "Produits de boulangerie" },
		],
		steps: [
			"Beurrer un moule et y disposer les raisins.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte lisse.",
			"Verser la pâte sur les raisins et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid, saupoudré de sucre glace.",
		],
		category: "Desserts",
	},
	{
		name: "Ragoût de légumes d'hiver",
		description: "Un plat mijoté réconfortant avec des légumes de saison.",
		ingredients: [
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Navets", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir les légumes en morceaux dans une cocotte avec un peu d'huile.",
			"Ajouter le bouillon et laisser mijoter 30 minutes à feu doux.",
			"Servir chaud avec du pain complet ou de la semoule.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Tarte fine aux tomates et au pesto",
		description: "Une tarte légère et savoureuse, idéale pour un repas rapide.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Tomates", quantity: "3 pièces", category: "Légumes" },
			{ name: "Pesto", quantity: "3 cuillères à soupe", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte feuilletée sur une plaque de cuisson et la piquer avec une fourchette.",
			"Répartir une fine couche de pesto sur la pâte.",
			"Disposer les tomates en tranches par-dessus et saupoudrer de parmesan.",
			"Cuire au four à 200°C pendant 20 minutes. Servir tiède.",
		],
		category: "Plats rapides",
	},
	{
		name: "Poulet au lait de coco et curry",
		description: "Un plat exotique aux saveurs riches, parfait avec du riz.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à soupe",
				category: "Épices",
			},
			{ name: "Oignon", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir l'oignon émincé dans une poêle avec un peu d'huile.",
			"Ajouter les morceaux de poulet et les faire dorer.",
			"Incorporer le curry et le lait de coco, puis laisser mijoter 15 minutes.",
			"Servir chaud avec du riz basmati.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Gratin de légumes et ricotta",
		description: "Un gratin léger et crémeux avec une touche de ricotta.",
		ingredients: [
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Ricotta", quantity: "200g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les légumes en tranches dans une poêle avec un peu d'huile.",
			"Disposer les légumes dans un plat à gratin en couches, en alternant avec la ricotta.",
			"Saupoudrer de parmesan et cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Riz sauté au porc et légumes",
		description: "Un plat complet et rapide, inspiré de la cuisine asiatique.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Émincé de porc", quantity: "150g", category: "Viandes" },
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir le porc avec des carottes en julienne dans une poêle.",
			"Ajouter le riz froid et la sauce soja, puis cuire à feu vif en mélangeant bien.",
			"Servir chaud, garni de ciboule hachée.",
		],
		category: "Plats rapides",
	},
	{
		name: "Clafoutis aux pêches et lavande",
		description: "Un dessert floral et fruité, idéal pour l'été.",
		ingredients: [
			{ name: "Pêches", quantity: "3 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Fleurs de lavande", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Beurrer un moule et y disposer les pêches coupées en quartiers.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte lisse.",
			"Ajouter une pincée de lavande et verser la pâte sur les pêches.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza aux champignons et roquette",
		description:
			"Une pizza savoureuse et légèrement poivrée avec de la roquette fraîche.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Roquette", quantity: "50g", category: "Légumes" },
		],
		steps: [
			"Étaler la pâte et ajouter une base de sauce tomate.",
			"Répartir les champignons émincés et les tranches de mozzarella.",
			"Cuire au four à 220°C pendant 15 minutes, puis ajouter la roquette avant de servir.",
			"Arroser d'un filet d'huile d'olive et servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Gratin dauphinois au thym",
		description: "Un gratin crémeux avec une touche parfumée de thym.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "400ml",
				category: "Produits laitiers",
			},
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Thym frais", quantity: "3 branches", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines rondelles.",
			"Frotter un plat à gratin avec une gousse d'ail, puis disposer les pommes de terre.",
			"Mélanger la crème et le lait avec du thym, saler et poivrer, puis verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 1 heure.",
		],
		category: "Accompagnements",
	},
	{
		name: "Poulet rôti au citron et ail",
		description:
			"Un poulet juteux et parfumé, parfait pour les repas de famille.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Citron", quantity: "2 pièces", category: "Fruits" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
			{ name: "Romarin", quantity: "3 branches", category: "Épices" },
		],
		steps: [
			"Farcir le poulet avec un citron coupé en deux, de l'ail et du romarin.",
			"Badigeonner le poulet d'huile d'olive, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement avec le jus de cuisson.",
			"Servir chaud avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Velouté de potimarron et noisettes",
		description:
			"Une soupe onctueuse et légèrement croquante, idéale pour l'automne.",
		ingredients: [
			{ name: "Potimarron", quantity: "600g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire cuire le potimarron coupé en morceaux dans le bouillon.",
			"Mixer pour obtenir une soupe lisse, puis incorporer la crème.",
			"Parsemer de noisettes concassées avant de servir.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Salade d'avocat, pamplemousse et crevettes",
		description:
			"Une salade fraîche et acidulée, parfaite pour une entrée légère.",
		ingredients: [
			{ name: "Avocats", quantity: "2 pièces", category: "Fruits" },
			{ name: "Pamplemousse", quantity: "1 pièce", category: "Fruits" },
			{ name: "Crevettes", quantity: "150g", category: "Viandes" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Éplucher les avocats et le pamplemousse, puis les couper en morceaux.",
			"Mélanger avec les crevettes et arroser de vinaigrette.",
			"Servir frais avec un peu de coriandre ciselée.",
		],
		category: "Salades",
	},
	{
		name: "Ragoût de pois cassés et carottes",
		description:
			"Un plat rustique et réconfortant, idéal pour les soirées fraîches.",
		ingredients: [
			{ name: "Pois cassés", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Thym", quantity: "1 branche", category: "Épices" },
		],
		steps: [
			"Faire tremper les pois cassés pendant 1 heure.",
			"Faire revenir les carottes en rondelles, puis ajouter les pois cassés et le bouillon.",
			"Laisser mijoter à feu doux pendant 45 minutes.",
			"Servir chaud, accompagné de pain complet.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Quiche lorraine classique",
		description:
			"Un classique français riche et savoureux, parfait pour toutes les occasions.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les lardons dans une poêle sans matière grasse.",
			"Étaler la pâte dans un moule et y répartir les lardons.",
			"Mélanger la crème avec des œufs et verser sur la pâte.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Clafoutis salé aux poireaux et chèvre",
		description:
			"Une recette simple et savoureuse pour une entrée ou un repas léger.",
		ingredients: [
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les poireaux émincés dans une poêle.",
			"Beurrer un moule et disposer les poireaux et le fromage de chèvre.",
			"Mélanger la farine, le lait et les œufs, puis verser sur les légumes.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Pizza aux poivrons et chorizo",
		description:
			"Une pizza relevée avec des saveurs épicées et méditerranéennes.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poivrons rouges", quantity: "2 pièces", category: "Légumes" },
			{ name: "Chorizo", quantity: "100g", category: "Viandes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte et ajouter une base de sauce tomate.",
			"Disposer des tranches de poivrons et de chorizo sur la pâte.",
			"Répartir la mozzarella et cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Riz au lait à la cannelle",
		description:
			"Un dessert crémeux et parfumé, idéal pour une touche de douceur.",
		ingredients: [
			{ name: "Riz rond", quantity: "150g", category: "Riz" },
			{
				name: "Lait entier",
				quantity: "1 litre",
				category: "Produits laitiers",
			},
			{ name: "Sucre", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire chauffer le lait avec la cannelle.",
			"Ajouter le riz et cuire à feu doux en remuant régulièrement.",
			"Incorporer le sucre en fin de cuisson.",
			"Laisser tiédir et servir avec une pincée de cannelle en poudre.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de brocoli et saumon fumé",
		description: "Un gratin léger et raffiné, parfait pour un repas équilibré.",
		ingredients: [
			{ name: "Brocoli", quantity: "300g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire le brocoli à la vapeur jusqu'à ce qu'il soit tendre.",
			"Disposer les bouquets de brocoli et des morceaux de saumon fumé dans un plat.",
			"Verser la crème et saupoudrer de fromage râpé.",
			"Cuire au four à 180°C pendant 20 minutes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Soupe aux lentilles et au cumin",
		description:
			"Une soupe rustique et parfumée, parfaite pour les soirées fraîches.",
		ingredients: [
			{ name: "Lentilles vertes", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir les carottes coupées en morceaux avec un peu d'huile.",
			"Ajouter les lentilles et le bouillon, puis laisser mijoter 30 minutes.",
			"Mixer légèrement pour une texture veloutée et incorporer le cumin.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},

	{
		name: "Poulet aux pommes et au cidre",
		description:
			"Un plat sucré-salé délicieux, parfait pour les repas d'automne.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Pommes", quantity: "2 pièces", category: "Fruits" },
			{ name: "Cidre brut", quantity: "200ml", category: "Boissons" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle avec un peu de beurre jusqu'à ce qu'ils soient dorés.",
			"Ajouter les pommes coupées en quartiers et les faire caraméliser légèrement.",
			"Verser le cidre et laisser mijoter 10 minutes à feu doux.",
			"Incorporer la crème et servir chaud avec des pommes de terre vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte au chèvre, miel et noix",
		description: "Une tarte sucrée-salée raffinée et facile à réaliser.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{
				name: "Fromage de chèvre",
				quantity: "200g",
				category: "Produits laitiers",
			},
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer des tranches de chèvre sur la pâte, arroser de miel et parsemer de noix.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Risotto aux fruits de mer",
		description:
			"Un risotto onctueux et parfumé, parfait pour les amateurs de fruits de mer.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{
				name: "Mélange de fruits de mer",
				quantity: "300g",
				category: "Viandes",
			},
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Ail", quantity: "2 gousses", category: "Épices" },
		],
		steps: [
			"Faire revenir l'ail émincé dans une poêle avec un peu d'huile.",
			"Ajouter le riz et cuire en incorporant progressivement le bouillon chaud.",
			"Incorporer les fruits de mer en fin de cuisson et mélanger.",
			"Servir immédiatement, garni de persil haché.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis aux cerises et amandes",
		description:
			"Un dessert classique et gourmand, enrichi de croquant avec des amandes effilées.",
		ingredients: [
			{ name: "Cerises", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Beurrer un moule et y disposer les cerises.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte homogène.",
			"Verser la pâte sur les cerises et parsemer d'amandes effilées.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de chou kale et pommes de terre",
		description:
			"Un gratin original et nourrissant, idéal pour un repas complet.",
		ingredients: [
			{ name: "Chou kale", quantity: "200g", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Blanchir le chou kale et cuire les pommes de terre en rondelles.",
			"Disposer les légumes dans un plat à gratin, ajouter la crème et le fromage.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
	{
		name: "Salade de betterave, chèvre et noix",
		description:
			"Une salade fraîche et colorée, parfaite pour une entrée légère.",
		ingredients: [
			{ name: "Betteraves cuites", quantity: "300g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette maison",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les betteraves en tranches et les disposer dans un saladier.",
			"Ajouter des morceaux de chèvre et parsemer de noix concassées.",
			"Arroser de vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Soupe à l'oignon gratinée",
		description:
			"Un grand classique de la cuisine française, réconfortant et savoureux.",
		ingredients: [
			{ name: "Oignons", quantity: "4 pièces", category: "Légumes" },
			{
				name: "Bouillon de volaille",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{
				name: "Pain",
				quantity: "4 tranches",
				category: "Produits de boulangerie",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les oignons émincés dans un peu de beurre jusqu'à ce qu'ils soient dorés.",
			"Ajouter le bouillon et laisser mijoter 20 minutes.",
			"Verser la soupe dans des bols, ajouter une tranche de pain et du gruyère.",
			"Passer sous le grill du four jusqu'à ce que le fromage soit fondu et doré.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte aux figues et mascarpone",
		description:
			"Un dessert raffiné et fruité, parfait pour impressionner vos invités.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Figues fraîches", quantity: "6 pièces", category: "Fruits" },
			{ name: "Mascarpone", quantity: "200g", category: "Produits laitiers" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Étaler la pâte dans un moule et la cuire à blanc 10 minutes à 180°C.",
			"Mélanger le mascarpone avec le miel et étaler sur la pâte refroidie.",
			"Disposer les figues coupées en quartiers par-dessus.",
			"Servir frais avec un filet de miel supplémentaire si souhaité.",
		],
		category: "Desserts",
	},

	{
		name: "Poulet tikka masala",
		description:
			"Un classique de la cuisine indienne, riche en épices et en saveurs.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{
				name: "Épices tikka masala",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Mariner les morceaux de poulet dans le yaourt avec les épices pendant 1 heure.",
			"Faire revenir le poulet dans une poêle jusqu'à ce qu'il soit doré.",
			"Ajouter les tomates concassées et laisser mijoter 20 minutes.",
			"Servir chaud avec du riz basmati et du naan.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Gratin de courgettes et chèvre",
		description:
			"Un gratin léger et savoureux, parfait pour un repas végétarien.",
		ingredients: [
			{ name: "Courgettes", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Couper les courgettes en rondelles et les faire revenir légèrement dans une poêle.",
			"Disposer les courgettes dans un plat à gratin avec des tranches de fromage de chèvre.",
			"Verser la crème mélangée avec de l'ail haché, saler et poivrer.",
			"Cuire au four à 180°C pendant 25 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Velouté de courge butternut et noisettes",
		description: "Une soupe douce et onctueuse avec une touche croquante.",
		ingredients: [
			{ name: "Courge butternut", quantity: "600g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire cuire la courge butternut coupée en morceaux dans le bouillon.",
			"Mixer jusqu'à obtenir une texture lisse et ajouter la crème.",
			"Parsemer de noisettes concassées avant de servir.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Clafoutis salé aux asperges et parmesan",
		description:
			"Un clafoutis léger et printanier, parfait pour une entrée ou un plat principal.",
		ingredients: [
			{ name: "Asperges vertes", quantity: "300g", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Blanchir les asperges et les couper en morceaux.",
			"Beurrer un moule et disposer les asperges.",
			"Mélanger la farine, le lait et les œufs, puis ajouter le parmesan.",
			"Verser la pâte sur les asperges et cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet aux champignons et estragon",
		description:
			"Un plat mijoté délicat et parfumé, parfait pour les repas en famille.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Champignons de Paris", quantity: "200g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Estragon frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire revenir les filets de poulet jusqu'à ce qu'ils soient dorés.",
			"Ajouter les champignons émincés et laisser cuire 5 minutes.",
			"Incorporer la crème et l'estragon, puis laisser mijoter 10 minutes.",
			"Servir chaud avec du riz ou des pâtes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Riz sauté aux crevettes et légumes",
		description: "Un plat rapide et équilibré aux saveurs asiatiques.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Crevettes", quantity: "150g", category: "Viandes" },
			{ name: "Carottes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir les crevettes et les carottes en julienne dans une poêle.",
			"Ajouter le riz et la sauce soja, puis mélanger à feu vif.",
			"Servir chaud, garni de ciboulette ou de coriandre.",
		],
		category: "Plats rapides",
	},
	{
		name: "Salade de quinoa, avocat et tomates cerises",
		description:
			"Une salade fraîche et nourrissante, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Avocat", quantity: "1 pièce", category: "Fruits" },
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{
				name: "Vinaigrette citronnée",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Couper l'avocat et les tomates cerises en morceaux.",
			"Mélanger le tout avec la vinaigrette et servir frais.",
			"Garnir de persil haché si désiré.",
		],
		category: "Salades",
	},
	{
		name: "Pizza aux courgettes, feta et menthe",
		description:
			"Une pizza légère et originale, parfaite pour un dîner rapide.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Feta", quantity: "100g", category: "Produits laitiers" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une fine couche de sauce tomate.",
			"Disposer des rondelles de courgettes et des morceaux de feta.",
			"Cuire au four à 220°C pendant 15 minutes, puis parsemer de menthe fraîche avant de servir.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Tarte rustique aux pommes et cannelle",
		description: "Un dessert réconfortant et simple, parfait pour l'automne.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes", quantity: "4 pièces", category: "Fruits" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Étaler la pâte et disposer les pommes en tranches au centre.",
			"Replier les bords, saupoudrer de sucre et de cannelle.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},

	{
		name: "Tarte tatin aux poires et épices",
		description:
			"Une variante raffinée de la tarte tatin, enrichie d'un mélange d'épices.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poires", quantity: "4 pièces", category: "Fruits" },
			{ name: "Beurre", quantity: "50g", category: "Produits laitiers" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire fondre le beurre dans un moule, ajouter la cannelle et saupoudrer de sucre.",
			"Disposer les poires coupées en quartiers et couvrir avec la pâte feuilletée.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Renverser la tarte avant de servir tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Risotto aux épinards et champignons",
		description: "Un risotto crémeux et savoureux avec des légumes de saison.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Épinards frais", quantity: "200g", category: "Légumes" },
			{ name: "Champignons de Paris", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir les champignons dans une poêle avec un peu d'huile.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer les épinards en fin de cuisson et mélanger.",
			"Servir chaud avec du parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Soupe de carottes et lait de coco",
		description: "Une soupe exotique et réconfortante, parfaite pour l'hiver.",
		ingredients: [
			{ name: "Carottes", quantity: "500g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Gingembre", quantity: "1 morceau", category: "Épices" },
		],
		steps: [
			"Faire revenir les carottes coupées en rondelles avec le gingembre râpé.",
			"Ajouter le bouillon et laisser cuire jusqu'à ce que les carottes soient tendres.",
			"Mixer avec le lait de coco et servir chaud.",
			"Décorer avec des herbes fraîches si désiré.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza blanche aux artichauts et ricotta",
		description: "Une pizza sans sauce tomate, légère et pleine de saveurs.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Cœurs d'artichauts", quantity: "150g", category: "Légumes" },
			{ name: "Ricotta", quantity: "200g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte et étaler une couche de ricotta.",
			"Ajouter les cœurs d'artichauts coupés et saupoudrer de parmesan.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud, garni de roquette.",
		],
		category: "Plats à partager",
	},
	{
		name: "Poulet au sésame et miel",
		description:
			"Un plat sucré-salé d'inspiration asiatique, simple et rapide.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Graines de sésame", quantity: "50g", category: "Fruits secs" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Couper le poulet en morceaux et les faire revenir dans une poêle.",
			"Ajouter le miel, la sauce soja et les graines de sésame.",
			"Laisser mijoter quelques minutes jusqu'à ce que le poulet soit bien enrobé.",
			"Servir avec du riz ou des légumes sautés.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Tarte aux courgettes et parmesan",
		description:
			"Une tarte savoureuse et légère, idéale pour les déjeuners rapides.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Disposer la pâte dans un moule et la piquer avec une fourchette.",
			"Ajouter les courgettes coupées en rondelles et le parmesan râpé.",
			"Verser le mélange crème et œufs sur le dessus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de patates douces et brocolis",
		description:
			"Un gratin riche en couleurs et en saveurs, parfait pour un repas complet.",
		ingredients: [
			{ name: "Patates douces", quantity: "500g", category: "Légumes" },
			{ name: "Brocolis", quantity: "300g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire les patates douces et les brocolis à la vapeur.",
			"Disposer les légumes dans un plat à gratin, ajouter la crème et le fromage râpé.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
	{
		name: "Salade de riz, poivrons et thon",
		description:
			"Une salade simple et nourrissante, parfaite pour un déjeuner à emporter.",
		ingredients: [
			{ name: "Riz", quantity: "150g", category: "Riz" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
			{ name: "Thon en conserve", quantity: "150g", category: "Viandes" },
			{
				name: "Vinaigrette",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Couper les poivrons en dés et les mélanger avec le riz et le thon émietté.",
			"Assaisonner avec la vinaigrette et servir frais.",
			"Ajouter des herbes fraîches pour plus de saveur.",
		],
		category: "Salades",
	},
	{
		name: "Soupe de poireaux et pommes de terre",
		description:
			"Une soupe classique et réconfortante pour les soirées fraîches.",
		ingredients: [
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les poireaux émincés dans une cocotte avec un peu de beurre.",
			"Ajouter les pommes de terre coupées en morceaux et le bouillon.",
			"Laisser mijoter jusqu'à ce que les légumes soient tendres, puis mixer.",
			"Incorporer la crème et servir chaud.",
		],
		category: "Soupes",
	},

	{
		name: "Clafoutis aux myrtilles et vanille",
		description:
			"Un dessert moelleux et fruité, rehaussé d'une douce touche de vanille.",
		ingredients: [
			{ name: "Myrtilles", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{
				name: "Extrait de vanille",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Beurrer un moule et y disposer les myrtilles.",
			"Mélanger la farine, le sucre, les œufs, le lait et l'extrait de vanille.",
			"Verser la pâte sur les myrtilles et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid avec une touche de sucre glace.",
		],
		category: "Desserts",
	},
	{
		name: "Poulet à la moutarde et au miel",
		description:
			"Un plat sucré-salé facile à préparer, parfait pour un repas rapide.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Moutarde à l'ancienne",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter la moutarde, le miel et la crème, puis laisser mijoter 10 minutes.",
			"Servir chaud avec du riz ou des légumes vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte fine aux figues et chèvre",
		description:
			"Une tarte élégante et savoureuse, parfaite pour une entrée ou un repas léger.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Figues fraîches", quantity: "4 pièces", category: "Fruits" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Étaler la pâte sur une plaque de cuisson et la piquer avec une fourchette.",
			"Disposer des tranches de figues et de fromage de chèvre.",
			"Arroser de miel et cuire au four à 200°C pendant 15 minutes.",
			"Servir tiède, garni de roquette si désiré.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Gratin de poireaux et pommes de terre",
		description:
			"Un gratin réconfortant et simple, parfait pour accompagner vos plats.",
		ingredients: [
			{ name: "Poireaux", quantity: "3 pièces", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pommes de terre en rondelles et blanchir les poireaux.",
			"Disposer les légumes dans un plat à gratin et verser la crème.",
			"Parsemer de gruyère râpé et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe de lentilles corail et carottes",
		description: "Une soupe épaisse et nourrissante, aux saveurs orientales.",
		ingredients: [
			{ name: "Lentilles corail", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "3 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir les carottes en rondelles avec un peu d'huile.",
			"Ajouter les lentilles corail et le bouillon, puis cuire 20 minutes.",
			"Mixer la soupe et assaisonner avec du cumin.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de pâtes au pesto et mozzarella",
		description:
			"Une salade fraîche et gourmande, idéale pour un pique-nique ou un déjeuner rapide.",
		ingredients: [
			{ name: "Pâtes courtes", quantity: "200g", category: "Pâtes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Pesto", quantity: "2 cuillères à soupe", category: "Épices" },
		],
		steps: [
			"Cuire les pâtes al dente et les laisser refroidir.",
			"Couper la mozzarella et les tomates cerises en morceaux.",
			"Mélanger les pâtes avec le pesto, la mozzarella et les tomates.",
			"Servir frais, garni de feuilles de basilic.",
		],
		category: "Salades",
	},
	{
		name: "Pizza au saumon fumé et câpres",
		description:
			"Une pizza raffinée et savoureuse, parfaite pour les amateurs de saumon.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Câpres", quantity: "2 cuillères à soupe", category: "Épices" },
		],
		steps: [
			"Étaler la pâte à pizza et tartiner de crème fraîche.",
			"Disposer des morceaux de saumon fumé et parsemer de câpres.",
			"Cuire au four à 220°C pendant 12 minutes.",
			"Servir chaud, garni d'aneth frais.",
		],
		category: "Plats à partager",
	},
	{
		name: "Tarte aux abricots et amandes",
		description:
			"Un dessert fruité et gourmand, rehaussé de la douceur des amandes.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Abricots", quantity: "300g", category: "Fruits" },
			{ name: "Poudre d'amandes", quantity: "50g", category: "Fruits secs" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte dans un moule et saupoudrer de poudre d'amandes.",
			"Disposer les abricots coupés en deux et saupoudrer de sucre.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède avec une boule de glace.",
		],
		category: "Desserts",
	},
	{
		name: "Risotto au citron et crevettes",
		description: "Un risotto frais et raffiné, idéal pour un dîner élégant.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Crevettes", quantity: "200g", category: "Viandes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Faire revenir le riz dans un peu d'huile et ajouter progressivement le bouillon.",
			"Incorporer les crevettes et le zeste de citron en fin de cuisson.",
			"Servir chaud, garni de persil haché.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Soupe de courgettes et menthe",
		description: "Une soupe légère et rafraîchissante, parfaite pour l'été.",
		ingredients: [
			{ name: "Courgettes", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire les courgettes coupées en morceaux dans le bouillon.",
			"Mixer les courgettes avec la crème et les feuilles de menthe.",
			"Servir chaud ou froid selon les goûts.",
			"Garnir de quelques feuilles de menthe avant de servir.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte aux oignons et lardons",
		description:
			"Une tarte salée classique, riche en saveurs et facile à préparer.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Oignons", quantity: "3 pièces", category: "Légumes" },
			{ name: "Lardons", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les oignons émincés et les lardons dans une poêle.",
			"Étaler la pâte dans un moule et ajouter le mélange oignons-lardons.",
			"Verser la crème mélangée avec des œufs sur la tarte.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats principaux",
	},
	{
		name: "Pizza aux légumes grillés et fromage de chèvre",
		description: "Une pizza gourmande et colorée, idéale pour partager.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivrons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Griller les légumes coupés en tranches dans une poêle ou au four.",
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Disposer les légumes grillés et les morceaux de fromage de chèvre.",
			"Cuire au four à 220°C pendant 15 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Riz sauté au tofu et légumes",
		description:
			"Un plat végétalien simple et équilibré, parfait pour un dîner rapide.",
		ingredients: [
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
			{ name: "Tofu", quantity: "150g", category: "Produits végétaliens" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Cuire le riz et le laisser refroidir.",
			"Faire revenir le tofu en cubes et les courgettes dans une poêle.",
			"Ajouter le riz et la sauce soja, puis mélanger à feu vif.",
			"Servir chaud avec des graines de sésame pour plus de saveur.",
		],
		category: "Plats rapides",
	},
	{
		name: "Clafoutis salé aux tomates cerises et basilic",
		description:
			"Un clafoutis léger et parfumé, parfait pour un repas estival.",
		ingredients: [
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Beurrer un moule et disposer les tomates cerises.",
			"Mélanger la farine, le lait, les œufs et le basilic ciselé.",
			"Verser la pâte sur les tomates et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Salade de boulgour, grenade et menthe",
		description:
			"Une salade fraîche et originale, idéale pour un déjeuner léger.",
		ingredients: [
			{ name: "Boulgour", quantity: "150g", category: "Riz" },
			{ name: "Graines de grenade", quantity: "100g", category: "Fruits" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Vinaigrette au citron",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le boulgour et le laisser refroidir.",
			"Mélanger avec les graines de grenade et la menthe ciselée.",
			"Ajouter la vinaigrette et servir frais.",
			"Garnir avec des amandes effilées pour plus de croquant.",
		],
		category: "Salades",
	},
	{
		name: "Gratin de poivrons et mozzarella",
		description:
			"Un gratin fondant et parfumé, idéal pour accompagner vos plats.",
		ingredients: [
			{ name: "Poivrons rouges", quantity: "3 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Basilic", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Griller les poivrons, puis les couper en lanières.",
			"Disposer les poivrons dans un plat, ajouter la mozzarella en tranches et le basilic.",
			"Verser la crème et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud ou tiède.",
		],
		category: "Accompagnements",
	},
	{
		name: "Poulet aux pommes et romarin",
		description: "Un plat sucré-salé délicat et réconfortant.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Pommes", quantity: "2 pièces", category: "Fruits" },
			{ name: "Romarin", quantity: "3 branches", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter les pommes coupées en quartiers et le romarin.",
			"Incorporer la crème et laisser mijoter 10 minutes.",
			"Servir avec du riz ou des pommes de terre vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte aux fraises et mascarpone",
		description:
			"Un dessert élégant et frais, parfait pour les amateurs de fraises.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Fraises", quantity: "300g", category: "Fruits" },
			{ name: "Mascarpone", quantity: "200g", category: "Produits laitiers" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Cuire la pâte sablée à blanc pendant 10 minutes à 180°C.",
			"Mélanger le mascarpone avec le sucre et étaler sur la pâte refroidie.",
			"Disposer les fraises coupées en deux sur le mascarpone.",
			"Servir frais avec un filet de miel ou de coulis de fruits rouges.",
		],
		category: "Desserts",
	},

	{
		name: "Risotto aux courgettes et citron",
		description:
			"Un risotto frais et onctueux, parfait pour les journées chaudes.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Faire revenir les courgettes coupées en dés dans une poêle avec un peu d'huile.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer le zeste et le jus de citron en fin de cuisson.",
			"Servir chaud, garni de parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Gratin de légumes racines",
		description: "Un gratin coloré et réconfortant avec des légumes de saison.",
		ingredients: [
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Navets", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Éplucher et couper les légumes en fines tranches.",
			"Disposer les légumes dans un plat à gratin en couches successives.",
			"Verser la crème, saler, poivrer, et cuire au four à 180°C pendant 35 minutes.",
			"Servir chaud en accompagnement.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe froide de betterave et orange",
		description:
			"Une soupe légère et acidulée, idéale pour une entrée estivale.",
		ingredients: [
			{ name: "Betteraves cuites", quantity: "300g", category: "Légumes" },
			{ name: "Orange", quantity: "1 pièce", category: "Fruits" },
			{
				name: "Yaourt nature",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Coriandre fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Mixer les betteraves avec le jus d'orange et le yaourt.",
			"Assaisonner avec du sel, du poivre et de la coriandre ciselée.",
			"Servir bien frais, garni de zestes d'orange.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte rustique aux prunes et miel",
		description:
			"Un dessert simple et fruité, parfait pour mettre en valeur les prunes.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Prunes", quantity: "300g", category: "Fruits" },
			{
				name: "Miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte et disposer les prunes coupées en deux au centre.",
			"Replier les bords de la pâte, saupoudrer de sucre et arroser de miel.",
			"Cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},
	{
		name: "Poulet rôti à l'ail et herbes",
		description: "Un poulet tendre et parfumé, parfait pour un repas familial.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
			{ name: "Thym", quantity: "3 branches", category: "Épices" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
		],
		steps: [
			"Farcir le poulet avec l'ail, le citron coupé en deux et le thym.",
			"Badigeonner d'huile d'olive, saler, poivrer et cuire au four à 200°C pendant 1h30.",
			"Arroser régulièrement avec le jus de cuisson.",
			"Servir chaud avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Pizza aux champignons et jambon cru",
		description:
			"Une pizza gourmande et savoureuse avec une touche de jambon cru.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{ name: "Jambon cru", quantity: "100g", category: "Viandes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Disposer les champignons émincés et la mozzarella.",
			"Cuire au four à 220°C pendant 12 minutes, puis ajouter le jambon cru.",
			"Servir immédiatement avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Salade de quinoa aux légumes grillés",
		description: "Une salade saine et complète avec des légumes grillés.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivrons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette au citron",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Griller les légumes et les couper en morceaux.",
			"Mélanger le quinoa avec les légumes et la vinaigrette.",
			"Servir frais avec des feuilles de basilic.",
		],
		category: "Salades",
	},
	{
		name: "Velouté de topinambours et noisettes",
		description: "Une soupe douce et veloutée avec une touche croquante.",
		ingredients: [
			{ name: "Topinambours", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire cuire les topinambours dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer pour obtenir une soupe lisse et ajouter la crème.",
			"Parsemer de noisettes concassées avant de servir.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Clafoutis salé aux courgettes et parmesan",
		description:
			"Un clafoutis léger et savoureux, parfait pour un déjeuner rapide.",
		ingredients: [
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les courgettes en rondelles dans une poêle.",
			"Mélanger la farine, le lait, les œufs et le parmesan.",
			"Disposer les courgettes dans un moule et verser la pâte dessus.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},

	{
		name: "Tarte au chocolat et fruits rouges",
		description:
			"Un dessert gourmand et élégant avec une base chocolatée et des fruits frais.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Fruits rouges", quantity: "150g", category: "Fruits" },
		],
		steps: [
			"Cuire la pâte à blanc pendant 10 minutes à 180°C.",
			"Faire fondre le chocolat avec la crème liquide pour réaliser une ganache.",
			"Verser la ganache sur la pâte refroidie.",
			"Décorer avec les fruits rouges et laisser refroidir avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Pizza aux quatre fromages",
		description:
			"Une pizza fondante et savoureuse pour les amateurs de fromage.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Mozzarella", quantity: "100g", category: "Produits laitiers" },
			{ name: "Gorgonzola", quantity: "50g", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
			{ name: "Emmental râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une fine couche de crème fraîche.",
			"Disposer les différents fromages uniformément sur la pâte.",
			"Cuire au four à 220°C pendant 15 minutes.",
			"Servir chaud, garni d'origan si désiré.",
		],
		category: "Plats à partager",
	},
	{
		name: "Velouté de brocolis et roquefort",
		description:
			"Une soupe onctueuse et riche en saveurs, parfaite pour l'hiver.",
		ingredients: [
			{ name: "Brocolis", quantity: "400g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Roquefort", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire les brocolis dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer les brocolis avec le bouillon et la crème.",
			"Incorporer le roquefort émietté et mixer à nouveau.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},
	{
		name: "Tarte rustique aux pommes de terre et romarin",
		description:
			"Une tarte simple et rustique avec des saveurs méditerranéennes.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes de terre", quantity: "300g", category: "Légumes" },
			{ name: "Romarin", quantity: "2 branches", category: "Épices" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire cuire les pommes de terre en rondelles jusqu'à ce qu'elles soient tendres.",
			"Étaler la pâte et disposer les rondelles de pommes de terre.",
			"Saupoudrer de parmesan et de romarin, puis replier les bords de la pâte.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet aux poivrons et olives",
		description:
			"Un plat mijoté savoureux et coloré aux saveurs méditerranéennes.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{ name: "Poivrons rouges", quantity: "2 pièces", category: "Légumes" },
			{ name: "Olives noires", quantity: "100g", category: "Fruits secs" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
		],
		steps: [
			"Faire revenir les cuisses de poulet dans une cocotte jusqu'à ce qu'elles soient dorées.",
			"Ajouter les poivrons coupés en lanières, les tomates concassées et les olives.",
			"Laisser mijoter 30 minutes à feu doux.",
			"Servir chaud avec du riz ou de la semoule.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis aux pommes et cannelle",
		description:
			"Un dessert réconfortant et épicé, parfait pour les soirées d'automne.",
		ingredients: [
			{ name: "Pommes", quantity: "3 pièces", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Cannelle", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes en morceaux.",
			"Beurrer un moule et disposer les morceaux de pommes.",
			"Mélanger la farine, le sucre, les œufs, le lait et la cannelle.",
			"Verser la pâte sur les pommes et cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Desserts",
	},
	{
		name: "Risotto aux champignons et parmesan",
		description:
			"Un risotto crémeux et riche en saveurs, parfait pour un dîner réconfortant.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle avec un peu de beurre.",
			"Ajouter le riz et cuire en ajoutant progressivement le bouillon chaud.",
			"Incorporer le parmesan râpé en fin de cuisson.",
			"Servir immédiatement, garni de persil frais.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de pommes, noix et roquefort",
		description:
			"Une salade élégante et savoureuse, parfaite pour une entrée raffinée.",
		ingredients: [
			{ name: "Pommes", quantity: "2 pièces", category: "Fruits" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{ name: "Roquefort", quantity: "50g", category: "Produits laitiers" },
			{
				name: "Vinaigrette au miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Couper les pommes en tranches fines.",
			"Mélanger avec les noix et le roquefort émietté.",
			"Arroser de vinaigrette et servir frais.",
			"Garnir avec quelques feuilles de roquette si désiré.",
		],
		category: "Salades",
	},

	{
		name: "Gratin dauphinois au comté",
		description:
			"Un gratin crémeux avec une touche de comté, parfait pour un repas copieux.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "400ml",
				category: "Produits laitiers",
			},
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Comté", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en rondelles fines.",
			"Mélanger la crème, le lait, saler, poivrer et ajouter de la muscade.",
			"Disposer les pommes de terre dans un plat et verser le mélange crème-lait.",
			"Parsemer de comté râpé et cuire au four à 180°C pendant 45 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe de potiron et curry",
		description: "Une soupe douce et épicée, idéale pour les soirées fraîches.",
		ingredients: [
			{ name: "Potiron", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{
				name: "Curry en poudre",
				quantity: "1 cuillère à café",
				category: "Épices",
			},
		],
		steps: [
			"Faire cuire le potiron en morceaux dans le bouillon jusqu'à ce qu'il soit tendre.",
			"Mixer pour obtenir une soupe lisse, puis incorporer la crème et le curry.",
			"Servir chaud, garni de graines de courge grillées.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza aux épinards et œufs",
		description: "Une pizza maison nutritive avec des épinards et des œufs.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Œufs", quantity: "2 pièces", category: "Produits laitiers" },
		],
		steps: [
			"Étaler la pâte et ajouter une fine couche de sauce tomate.",
			"Disposer les épinards cuits à la vapeur et la mozzarella en morceaux.",
			"Casser les œufs sur la pizza et cuire au four à 220°C pendant 12 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Plats à partager",
	},
	{
		name: "Ragoût de haricots blancs et chorizo",
		description:
			"Un plat mijoté réconfortant avec des haricots blancs et du chorizo.",
		ingredients: [
			{ name: "Haricots blancs", quantity: "250g", category: "Légumes" },
			{ name: "Chorizo", quantity: "100g", category: "Viandes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Oignons", quantity: "1 pièce", category: "Légumes" },
		],
		steps: [
			"Faire revenir l'oignon émincé et le chorizo en rondelles dans une cocotte.",
			"Ajouter les haricots blancs et les tomates concassées.",
			"Laisser mijoter 30 minutes à feu doux.",
			"Servir chaud avec du pain complet.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis salé aux épinards et feta",
		description:
			"Un clafoutis léger et parfumé, parfait pour un repas estival.",
		ingredients: [
			{ name: "Épinards", quantity: "200g", category: "Légumes" },
			{ name: "Feta", quantity: "150g", category: "Produits laitiers" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les épinards dans une poêle avec un peu d'huile.",
			"Mélanger la farine, les œufs, le lait et la feta émiettée.",
			"Verser le mélange dans un moule beurré et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid avec une salade.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Salade de pommes de terre au saumon fumé",
		description:
			"Une salade gourmande et fraîche, idéale pour les repas rapides.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Aneth frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire cuire les pommes de terre et les couper en morceaux.",
			"Mélanger les pommes de terre avec la crème fraîche et l'aneth ciselé.",
			"Ajouter des morceaux de saumon fumé et mélanger délicatement.",
			"Servir frais, garni d'un peu d'aneth supplémentaire.",
		],
		category: "Salades",
	},
	{
		name: "Gratin de courge spaghetti et parmesan",
		description: "Un gratin original et léger avec de la courge spaghetti.",
		ingredients: [
			{ name: "Courge spaghetti", quantity: "1 pièce", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Cuire la courge spaghetti au four, puis récupérer la chair à l'aide d'une fourchette.",
			"Mélanger avec la crème, l'ail haché et la moitié du parmesan.",
			"Verser dans un plat à gratin, saupoudrer du reste de parmesan.",
			"Cuire au four à 180°C pendant 20 minutes et servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Pizza à la roquette et jambon cru",
		description: "Une pizza simple et raffinée avec une touche de fraîcheur.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
			{ name: "Jambon cru", quantity: "100g", category: "Viandes" },
			{ name: "Roquette", quantity: "50g", category: "Légumes" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Disposer des morceaux de mozzarella et cuire au four à 220°C pendant 12 minutes.",
			"Ajouter le jambon cru et la roquette avant de servir.",
			"Arroser d'un filet d'huile d'olive pour la touche finale.",
		],
		category: "Plats à partager",
	},
	{
		name: "Soupe aux légumes d'hiver et thym",
		description:
			"Une soupe rustique et parfumée, parfaite pour les journées froides.",
		ingredients: [
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Navets", quantity: "2 pièces", category: "Légumes" },
			{ name: "Thym", quantity: "2 branches", category: "Épices" },
		],
		steps: [
			"Faire cuire les légumes coupés en morceaux dans un grand volume d'eau.",
			"Ajouter le thym et laisser mijoter jusqu'à ce que les légumes soient tendres.",
			"Mixer pour obtenir une soupe lisse et assaisonner selon le goût.",
			"Servir chaud avec des croûtons.",
		],
		category: "Soupes",
	},

	{
		name: "Clafoutis aux abricots et amandes",
		description:
			"Un dessert fruité et gourmand avec une touche croquante d'amandes.",
		ingredients: [
			{ name: "Abricots", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Beurrer un moule et disposer les abricots coupés en deux.",
			"Mélanger la farine, le sucre, les œufs et le lait pour obtenir une pâte lisse.",
			"Verser la pâte sur les abricots et saupoudrer d'amandes effilées.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède ou froid.",
		],
		category: "Desserts",
	},
	{
		name: "Poulet au paprika et poivrons",
		description: "Un plat mijoté aux saveurs riches et légèrement épicées.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Poivrons rouges", quantity: "2 pièces", category: "Légumes" },
			{ name: "Paprika", quantity: "1 cuillère à soupe", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter les poivrons coupés en lanières et saupoudrer de paprika.",
			"Incorporer la crème fraîche et laisser mijoter 10 minutes.",
			"Servir chaud avec du riz ou des pâtes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de pois chiches et légumes grillés",
		description: "Une salade végétarienne colorée et nourrissante.",
		ingredients: [
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Poivrons", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Vinaigrette citronnée",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Griller les courgettes et les poivrons en morceaux dans une poêle ou au four.",
			"Mélanger les pois chiches avec les légumes grillés.",
			"Ajouter la vinaigrette citronnée et servir frais.",
			"Garnir avec des herbes fraîches comme du persil ou de la coriandre.",
		],
		category: "Salades",
	},
	{
		name: "Pizza aux poireaux et bleu",
		description:
			"Une pizza originale et savoureuse pour les amateurs de fromage.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bleu d'Auvergne",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les poireaux émincés dans une poêle.",
			"Étaler la pâte à pizza et tartiner de crème fraîche.",
			"Ajouter les poireaux et les morceaux de bleu.",
			"Cuire au four à 220°C pendant 12 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Velouté de panais et noisettes",
		description:
			"Une soupe douce et légèrement sucrée, avec une touche croquante.",
		ingredients: [
			{ name: "Panais", quantity: "400g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire cuire les panais dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer avec la crème pour obtenir une texture veloutée.",
			"Parsemer de noisettes concassées avant de servir.",
			"Servir chaud avec du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin de pommes de terre et saumon fumé",
		description:
			"Un gratin gourmand et raffiné, parfait pour un dîner en famille.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Fromage râpé", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Cuire les pommes de terre en rondelles dans de l'eau bouillante salée.",
			"Disposer une couche de pommes de terre, puis une couche de saumon fumé dans un plat à gratin.",
			"Verser la crème et parsemer de fromage râpé.",
			"Cuire au four à 180°C pendant 20 minutes. Servir chaud.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis salé aux champignons et parmesan",
		description:
			"Un clafoutis gourmand et léger, parfait pour un repas végétarien.",
		ingredients: [
			{ name: "Champignons", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Parmesan", quantity: "50g", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle.",
			"Mélanger la farine, le lait, les œufs et le parmesan.",
			"Verser les champignons dans un moule et ajouter le mélange.",
			"Cuire au four à 180°C pendant 30 minutes.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet rôti aux herbes et citron",
		description:
			"Un plat classique et parfumé, idéal pour les repas en famille.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Citron", quantity: "1 pièce", category: "Fruits" },
			{ name: "Thym", quantity: "3 branches", category: "Épices" },
			{ name: "Ail", quantity: "1 tête", category: "Épices" },
		],
		steps: [
			"Farcir le poulet avec le citron coupé en deux, l'ail et le thym.",
			"Badigeonner le poulet d'huile d'olive, saler et poivrer.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement avec le jus de cuisson.",
			"Servir avec des légumes rôtis.",
		],
		category: "Plats mijotés",
	},

	{
		name: "Tarte aux pommes et amandes",
		description:
			"Un dessert classique rehaussé d'une touche d'amandes croquantes.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Pommes", quantity: "4 pièces", category: "Fruits" },
			{ name: "Poudre d'amandes", quantity: "50g", category: "Fruits secs" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
		],
		steps: [
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les pommes tranchées en rosace et saupoudrer de poudre d'amandes et de sucre.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède avec une boule de glace à la vanille.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de légumes d'été au fromage",
		description:
			"Un gratin coloré et savoureux avec des légumes d'été fondants.",
		ingredients: [
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Tomates", quantity: "2 pièces", category: "Légumes" },
			{ name: "Mozzarella", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Couper les légumes en rondelles et les faire revenir légèrement dans une poêle.",
			"Disposer les légumes en couches dans un plat à gratin.",
			"Ajouter des tranches de mozzarella et cuire au four à 180°C pendant 25 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
	{
		name: "Pizza au poulet, poivrons et ananas",
		description:
			"Une pizza sucrée-salée originale, parfaite pour un dîner convivial.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Filets de poulet", quantity: "150g", category: "Viandes" },
			{ name: "Poivrons rouges", quantity: "1 pièce", category: "Légumes" },
			{ name: "Ananas frais", quantity: "100g", category: "Fruits" },
		],
		steps: [
			"Faire revenir le poulet et les poivrons en lanières dans une poêle.",
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Disposer le poulet, les poivrons et les morceaux d'ananas sur la pâte.",
			"Cuire au four à 220°C pendant 15 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Velouté de céleri-rave et pommes",
		description: "Une soupe douce et parfumée, idéale pour une entrée légère.",
		ingredients: [
			{ name: "Céleri-rave", quantity: "400g", category: "Légumes" },
			{ name: "Pommes", quantity: "2 pièces", category: "Fruits" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire le céleri-rave et les pommes en morceaux dans le bouillon.",
			"Mixer pour obtenir une texture veloutée et ajouter la crème.",
			"Servir chaud, garni de persil frais.",
		],
		category: "Soupes",
	},
	{
		name: "Ragoût de bœuf à la bière",
		description:
			"Un plat mijoté riche et réconfortant avec une touche de bière brune.",
		ingredients: [
			{ name: "Bœuf à braiser", quantity: "500g", category: "Viandes" },
			{ name: "Oignons", quantity: "2 pièces", category: "Légumes" },
			{ name: "Bière brune", quantity: "300ml", category: "Boissons" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
		],
		steps: [
			"Faire revenir les morceaux de bœuf dans une cocotte avec les oignons émincés.",
			"Ajouter les carottes en rondelles et couvrir avec la bière.",
			"Laisser mijoter 2 heures à feu doux.",
			"Servir chaud avec des pommes de terre vapeur ou de la purée.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis salé aux tomates et basilic",
		description:
			"Un clafoutis léger et estival, parfait pour un repas végétarien.",
		ingredients: [
			{ name: "Tomates cerises", quantity: "200g", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Basilic frais", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Beurrer un moule et disposer les tomates cerises.",
			"Mélanger la farine, le lait, les œufs et le basilic ciselé.",
			"Verser la pâte sur les tomates et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet à l'estragon et champignons",
		description:
			"Un plat parfumé et simple à réaliser, parfait pour un repas rapide.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Champignons de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Estragon frais", quantity: "1 bouquet", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les filets de poulet dans une poêle jusqu'à ce qu'ils soient dorés.",
			"Ajouter les champignons émincés et laisser cuire 5 minutes.",
			"Incorporer l'estragon et la crème, puis laisser mijoter 10 minutes.",
			"Servir chaud avec du riz ou des pâtes.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Soupe de patates douces et coco",
		description: "Une soupe douce et exotique avec une touche de lait de coco.",
		ingredients: [
			{ name: "Patates douces", quantity: "500g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Curry", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire cuire les patates douces en morceaux dans le bouillon.",
			"Mixer avec le lait de coco et ajouter le curry.",
			"Servir chaud, garni de coriandre fraîche.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de roquette, poires et noix",
		description:
			"Une salade fraîche et élégante, idéale pour une entrée légère.",
		ingredients: [
			{ name: "Roquette", quantity: "100g", category: "Légumes" },
			{ name: "Poires", quantity: "2 pièces", category: "Fruits" },
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette au miel",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Laver la roquette et la disposer dans un saladier.",
			"Ajouter les poires tranchées finement et les noix.",
			"Arroser de vinaigrette au miel et servir immédiatement.",
		],
		category: "Salades",
	},

	{
		name: "Tarte tatin aux légumes et chèvre",
		description:
			"Une tarte renversée savoureuse avec des légumes caramélisés et du fromage de chèvre.",
		ingredients: [
			{
				name: "Pâte feuilletée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les carottes et les courgettes coupées en rondelles dans une poêle avec un peu de sucre pour les caraméliser.",
			"Disposer les légumes dans un moule et ajouter des morceaux de fromage de chèvre.",
			"Recouvrir avec la pâte feuilletée en repliant les bords.",
			"Cuire au four à 180°C pendant 25 minutes, puis renverser avant de servir.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Risotto aux champignons et asperges",
		description:
			"Un risotto crémeux et raffiné, parfait pour une occasion spéciale.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Champignons de Paris", quantity: "200g", category: "Légumes" },
			{ name: "Asperges vertes", quantity: "150g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir les champignons émincés dans une poêle.",
			"Ajouter le riz et cuire en incorporant progressivement le bouillon chaud.",
			"Blanchir les asperges et les ajouter en fin de cuisson.",
			"Servir chaud, garni de parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Velouté de carottes et cumin",
		description:
			"Une soupe parfumée et réconfortante, parfaite pour les soirées fraîches.",
		ingredients: [
			{ name: "Carottes", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Cumin", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire cuire les carottes coupées en morceaux dans le bouillon.",
			"Mixer les carottes avec le cumin et la crème pour obtenir une texture veloutée.",
			"Servir chaud, garni de graines de cumin pour la décoration.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza aux légumes grillés et ricotta",
		description:
			"Une pizza légère et gourmande, idéale pour un repas convivial.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Ricotta", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Griller les légumes coupés en tranches dans une poêle.",
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Disposer les légumes grillés et des cuillerées de ricotta.",
			"Cuire au four à 220°C pendant 15 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Clafoutis salé aux poireaux et saumon",
		description:
			"Un clafoutis gourmand et équilibré, parfait pour un repas léger.",
		ingredients: [
			{ name: "Poireaux", quantity: "2 pièces", category: "Légumes" },
			{ name: "Saumon fumé", quantity: "150g", category: "Viandes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les poireaux émincés dans une poêle.",
			"Mélanger la farine, le lait, les œufs et ajouter des morceaux de saumon fumé.",
			"Verser le mélange dans un moule et cuire au four à 180°C pendant 30 minutes.",
			"Servir tiède ou froid avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Poulet à la moutarde et au romarin",
		description:
			"Un plat mijoté parfumé et riche en saveurs, parfait pour les repas en famille.",
		ingredients: [
			{ name: "Cuisses de poulet", quantity: "4 pièces", category: "Viandes" },
			{
				name: "Moutarde à l'ancienne",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Romarin", quantity: "3 branches", category: "Épices" },
		],
		steps: [
			"Faire revenir les cuisses de poulet dans une cocotte jusqu'à ce qu'elles soient dorées.",
			"Ajouter la moutarde, la crème et le romarin.",
			"Laisser mijoter à feu doux pendant 25 minutes.",
			"Servir avec des pommes de terre vapeur ou une purée maison.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de pâtes au thon et olives",
		description:
			"Une salade simple et rafraîchissante, parfaite pour un déjeuner léger.",
		ingredients: [
			{ name: "Pâtes", quantity: "200g", category: "Pâtes" },
			{ name: "Thon en conserve", quantity: "150g", category: "Viandes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette citronnée",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les pâtes al dente et les laisser refroidir.",
			"Mélanger les pâtes avec le thon émietté et les olives.",
			"Ajouter la vinaigrette et servir frais.",
			"Décorer avec du persil ciselé.",
		],
		category: "Salades",
	},
	{
		name: "Soupe aux pois cassés et carottes",
		description:
			"Une soupe rustique et nourrissante, parfaite pour les soirées fraîches.",
		ingredients: [
			{ name: "Pois cassés", quantity: "200g", category: "Légumes" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Thym", quantity: "1 branche", category: "Épices" },
		],
		steps: [
			"Faire tremper les pois cassés pendant 1 heure.",
			"Faire cuire les carottes et les pois cassés dans le bouillon avec le thym.",
			"Mixer pour une texture veloutée et assaisonner.",
			"Servir chaud avec des croûtons maison.",
		],
		category: "Soupes",
	},
	{
		name: "Gratin de chou-fleur au cheddar",
		description: "Un gratin crémeux et savoureux avec une touche de cheddar.",
		ingredients: [
			{ name: "Chou-fleur", quantity: "500g", category: "Légumes" },
			{ name: "Cheddar", quantity: "150g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Muscade", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Blanchir le chou-fleur et le disposer dans un plat à gratin.",
			"Mélanger la crème, la muscade et le cheddar râpé.",
			"Verser sur le chou-fleur et cuire au four à 180°C pendant 20 minutes.",
			"Servir chaud avec une viande ou une salade verte.",
		],
		category: "Accompagnements",
	},

	{
		name: "Tarte aux légumes grillés et feta",
		description:
			"Une tarte légère et savoureuse, parfaite pour un repas estival.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Aubergines", quantity: "1 pièce", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Feta", quantity: "150g", category: "Produits laitiers" },
		],
		steps: [
			"Griller les légumes coupés en tranches.",
			"Étaler la pâte dans un moule et la piquer avec une fourchette.",
			"Disposer les légumes grillés sur la pâte et ajouter des morceaux de feta.",
			"Cuire au four à 180°C pendant 25 minutes. Servir tiède.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Velouté de potiron et gingembre",
		description: "Une soupe épicée et réconfortante, idéale pour l'hiver.",
		ingredients: [
			{ name: "Potiron", quantity: "600g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Gingembre", quantity: "1 morceau", category: "Épices" },
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire cuire le potiron coupé en morceaux dans le bouillon.",
			"Mixer avec le gingembre râpé et la crème pour obtenir une texture veloutée.",
			"Servir chaud avec une pincée de noix de muscade.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza aux épinards, chèvre et noix",
		description: "Une pizza gourmande et croquante avec une touche de noix.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards frais", quantity: "200g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Noix", quantity: "50g", category: "Fruits secs" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une base de crème fraîche.",
			"Disposer les épinards légèrement cuits à la vapeur, des morceaux de chèvre et les noix.",
			"Cuire au four à 220°C pendant 12 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Gratin de patates douces au lait de coco",
		description: "Un gratin doux et parfumé avec une touche exotique.",
		ingredients: [
			{ name: "Patates douces", quantity: "600g", category: "Légumes" },
			{
				name: "Lait de coco",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
			{ name: "Coriandre fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les patates douces en rondelles.",
			"Disposer les patates douces dans un plat à gratin, ajouter l'ail haché et verser le lait de coco.",
			"Cuire au four à 180°C pendant 30 minutes.",
			"Parsemer de coriandre fraîche avant de servir.",
		],
		category: "Accompagnements",
	},
	{
		name: "Ragoût de pois chiches et légumes",
		description:
			"Un plat mijoté nourrissant et épicé, parfait pour un repas végétalien.",
		ingredients: [
			{ name: "Pois chiches", quantity: "300g", category: "Légumes" },
			{ name: "Tomates concassées", quantity: "400g", category: "Légumes" },
			{ name: "Courgettes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Paprika", quantity: "1 cuillère à café", category: "Épices" },
		],
		steps: [
			"Faire revenir les courgettes en morceaux avec un peu d'huile.",
			"Ajouter les pois chiches, les tomates concassées et le paprika.",
			"Laisser mijoter 20 minutes à feu doux.",
			"Servir chaud avec du riz ou de la semoule.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Clafoutis salé aux légumes du soleil",
		description:
			"Un clafoutis léger et coloré, parfait pour les déjeuners d'été.",
		ingredients: [
			{ name: "Tomates cerises", quantity: "150g", category: "Légumes" },
			{ name: "Poivrons jaunes", quantity: "1 pièce", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
		],
		steps: [
			"Faire revenir les poivrons en lanières dans une poêle.",
			"Mélanger la farine, les œufs et le lait, puis ajouter les légumes.",
			"Verser le mélange dans un moule et cuire au four à 180°C pendant 25 minutes.",
			"Servir tiède avec une salade verte.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Soupe de légumes anciens et thym",
		description: "Une soupe rustique et savoureuse avec des légumes oubliés.",
		ingredients: [
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Topinambours", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Thym", quantity: "2 branches", category: "Épices" },
		],
		steps: [
			"Faire cuire les légumes en morceaux dans le bouillon avec le thym.",
			"Mixer pour obtenir une texture lisse et assaisonner.",
			"Servir chaud avec des croûtons ou du pain grillé.",
		],
		category: "Soupes",
	},
	{
		name: "Salade de lentilles, betteraves et chèvre",
		description: "Une salade fraîche et équilibrée avec une touche gourmande.",
		ingredients: [
			{ name: "Lentilles vertes", quantity: "200g", category: "Légumes" },
			{ name: "Betteraves cuites", quantity: "200g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "100g",
				category: "Produits laitiers",
			},
			{
				name: "Vinaigrette balsamique",
				quantity: "2 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire les lentilles et les laisser refroidir.",
			"Mélanger avec les betteraves coupées en morceaux et le fromage de chèvre émietté.",
			"Assaisonner avec la vinaigrette et servir frais.",
		],
		category: "Salades",
	},
	{
		name: "Poulet à l'ananas et gingembre",
		description: "Un plat sucré-salé aux saveurs exotiques, simple et rapide.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{ name: "Ananas", quantity: "150g", category: "Fruits" },
			{ name: "Gingembre", quantity: "1 morceau", category: "Épices" },
			{
				name: "Sauce soja",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
		],
		steps: [
			"Faire revenir le poulet coupé en morceaux avec le gingembre râpé.",
			"Ajouter les morceaux d'ananas et la sauce soja, puis laisser mijoter 10 minutes.",
			"Servir chaud avec du riz basmati.",
		],
		category: "Plats exotiques",
	},

	{
		name: "Gratin dauphinois au bleu",
		description:
			"Un gratin classique revisité avec une touche de fromage bleu pour un goût plus prononcé.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "1kg", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "400ml",
				category: "Produits laitiers",
			},
			{
				name: "Bleu d'Auvergne",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Éplucher et couper les pommes de terre en fines rondelles.",
			"Frotter un plat à gratin avec l'ail et disposer les rondelles de pommes de terre en couches.",
			"Mélanger la crème avec le bleu émietté, saler et poivrer, puis verser sur les pommes de terre.",
			"Cuire au four à 180°C pendant 45 minutes. Servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Velouté de topinambours et truffe",
		description:
			"Un velouté élégant et raffiné, sublimé par l'arôme de truffe.",
		ingredients: [
			{ name: "Topinambours", quantity: "500g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème liquide",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{
				name: "Huile de truffe",
				quantity: "1 cuillère à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Faire cuire les topinambours dans le bouillon jusqu'à ce qu'ils soient tendres.",
			"Mixer avec la crème pour obtenir une texture veloutée.",
			"Ajouter un filet d'huile de truffe juste avant de servir.",
			"Servir chaud avec des croûtons pour un contraste de textures.",
		],
		category: "Soupes",
	},
	{
		name: "Pizza au thon, câpres et olives",
		description: "Une pizza classique aux saveurs méditerranéennes.",
		ingredients: [
			{
				name: "Pâte à pizza",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Thon en conserve", quantity: "150g", category: "Viandes" },
			{ name: "Olives noires", quantity: "50g", category: "Fruits secs" },
			{ name: "Câpres", quantity: "2 cuillères à soupe", category: "Épices" },
		],
		steps: [
			"Étaler la pâte à pizza et ajouter une base de sauce tomate.",
			"Répartir le thon émietté, les olives et les câpres sur la pâte.",
			"Cuire au four à 220°C pendant 12 minutes. Servir chaud.",
		],
		category: "Plats à partager",
	},
	{
		name: "Ragoût d'agneau aux pruneaux",
		description: "Un plat mijoté sucré-salé, parfait pour les repas festifs.",
		ingredients: [
			{ name: "Épaule d'agneau", quantity: "600g", category: "Viandes" },
			{ name: "Pruneaux", quantity: "150g", category: "Fruits secs" },
			{ name: "Oignons", quantity: "2 pièces", category: "Légumes" },
			{
				name: "Bouillon de volaille",
				quantity: "500ml",
				category: "Produits surgelés",
			},
		],
		steps: [
			"Faire revenir les morceaux d'agneau avec les oignons émincés dans une cocotte.",
			"Ajouter les pruneaux et couvrir avec le bouillon.",
			"Laisser mijoter à feu doux pendant 1h30.",
			"Servir avec de la semoule ou des légumes vapeur.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Salade de boulgour aux carottes râpées et raisins secs",
		description: "Une salade simple et colorée avec une touche sucrée.",
		ingredients: [
			{ name: "Boulgour", quantity: "150g", category: "Riz" },
			{ name: "Carottes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Raisins secs", quantity: "50g", category: "Fruits secs" },
			{
				name: "Vinaigrette au citron",
				quantity: "3 cuillères à soupe",
				category: "Huiles et vinaigres",
			},
		],
		steps: [
			"Cuire le boulgour et le laisser refroidir.",
			"Mélanger avec les carottes râpées et les raisins secs.",
			"Assaisonner avec la vinaigrette et servir frais.",
			"Ajouter quelques feuilles de menthe pour une touche de fraîcheur.",
		],
		category: "Salades",
	},
	{
		name: "Poulet tikka masala et riz basmati",
		description: "Un classique indien riche en épices et en saveurs.",
		ingredients: [
			{ name: "Filets de poulet", quantity: "300g", category: "Viandes" },
			{
				name: "Yaourt nature",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{
				name: "Épices tikka masala",
				quantity: "2 cuillères à soupe",
				category: "Épices",
			},
			{ name: "Riz basmati", quantity: "200g", category: "Riz" },
		],
		steps: [
			"Mariner les morceaux de poulet dans le yaourt mélangé aux épices pendant 1 heure.",
			"Faire revenir le poulet dans une poêle jusqu'à ce qu'il soit bien cuit.",
			"Servir chaud avec du riz basmati et un peu de coriandre ciselée.",
		],
		category: "Plats exotiques",
	},
	{
		name: "Tarte aux poires et chocolat",
		description:
			"Une tarte gourmande avec l'alliance classique du chocolat et des poires.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Poires", quantity: "3 pièces", category: "Fruits" },
			{
				name: "Chocolat noir",
				quantity: "200g",
				category: "Produits de boulangerie",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Cuire la pâte sablée à blanc pendant 10 minutes à 180°C.",
			"Faire fondre le chocolat avec la crème pour obtenir une ganache.",
			"Disposer les poires tranchées sur la pâte, puis verser la ganache.",
			"Laisser refroidir avant de servir.",
		],
		category: "Desserts",
	},
	{
		name: "Clafoutis aux cerises et amandes",
		description:
			"Un dessert classique et fruité, enrichi de croquant avec des amandes effilées.",
		ingredients: [
			{ name: "Cerises", quantity: "300g", category: "Fruits" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Amandes effilées", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Beurrer un moule et y disposer les cerises.",
			"Mélanger la farine, le sucre, les œufs et le lait.",
			"Verser la pâte sur les cerises et saupoudrer d'amandes effilées.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de brocolis et pommes de terre",
		description:
			"Un gratin classique, parfait pour accompagner une viande ou un poisson.",
		ingredients: [
			{ name: "Brocolis", quantity: "300g", category: "Légumes" },
			{ name: "Pommes de terre", quantity: "500g", category: "Légumes" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
			{ name: "Gruyère râpé", quantity: "100g", category: "Produits laitiers" },
		],
		steps: [
			"Blanchir les brocolis et cuire les pommes de terre en rondelles.",
			"Disposer les légumes dans un plat à gratin, ajouter la crème et le gruyère.",
			"Cuire au four à 180°C pendant 25 minutes. Servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Soupe de chou kale et pois chiches",
		description:
			"Une soupe saine et nourrissante avec des saveurs méditerranéennes.",
		ingredients: [
			{ name: "Chou kale", quantity: "200g", category: "Légumes" },
			{ name: "Pois chiches", quantity: "200g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Faire revenir l'ail haché avec un peu d'huile, puis ajouter le chou kale.",
			"Ajouter les pois chiches et le bouillon, puis laisser mijoter 15 minutes.",
			"Servir chaud avec des croûtons ou un filet d'huile d'olive.",
		],
		category: "Soupes",
	},

	{
		name: "Tarte rustique aux prunes et romarin",
		description:
			"Une tarte simple et parfumée, parfaite pour les desserts d'été.",
		ingredients: [
			{
				name: "Pâte sablée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Prunes", quantity: "400g", category: "Fruits" },
			{ name: "Sucre", quantity: "50g", category: "Produits de boulangerie" },
			{ name: "Romarin", quantity: "1 branche", category: "Épices" },
		],
		steps: [
			"Étaler la pâte sur une plaque de cuisson.",
			"Disposer les prunes coupées en deux au centre, saupoudrer de sucre et ajouter quelques feuilles de romarin.",
			"Replier les bords de la pâte sur les fruits.",
			"Cuire au four à 180°C pendant 25 minutes. Servir tiède.",
		],
		category: "Desserts",
	},
	{
		name: "Gratin de fenouil et parmesan",
		description:
			"Un gratin léger et savoureux, parfait pour accompagner des poissons.",
		ingredients: [
			{ name: "Fenouils", quantity: "2 pièces", category: "Légumes" },
			{ name: "Parmesan", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
			{ name: "Ail", quantity: "1 gousse", category: "Épices" },
		],
		steps: [
			"Couper les fenouils en quartiers et les blanchir dans de l'eau bouillante salée.",
			"Disposer les fenouils dans un plat à gratin, ajouter la crème et le parmesan râpé.",
			"Cuire au four à 180°C pendant 20 minutes. Servir chaud.",
		],
		category: "Accompagnements",
	},
	{
		name: "Velouté de champignons et noisettes",
		description:
			"Une soupe onctueuse avec une touche de croquant grâce aux noisettes.",
		ingredients: [
			{ name: "Champignons de Paris", quantity: "400g", category: "Légumes" },
			{
				name: "Bouillon de légumes",
				quantity: "500ml",
				category: "Produits surgelés",
			},
			{
				name: "Crème fraîche",
				quantity: "100ml",
				category: "Produits laitiers",
			},
			{ name: "Noisettes", quantity: "30g", category: "Fruits secs" },
		],
		steps: [
			"Faire revenir les champignons dans une poêle avec un peu de beurre.",
			"Ajouter le bouillon et laisser mijoter 15 minutes.",
			"Mixer la soupe et incorporer la crème.",
			"Servir chaud, parsemé de noisettes concassées.",
		],
		category: "Soupes",
	},
	{
		name: "Clafoutis salé aux courgettes et menthe",
		description: "Un clafoutis léger et frais avec une touche de menthe.",
		ingredients: [
			{ name: "Courgettes", quantity: "2 pièces", category: "Légumes" },
			{ name: "Farine", quantity: "100g", category: "Produits de boulangerie" },
			{ name: "Lait", quantity: "200ml", category: "Produits laitiers" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Faire revenir les courgettes coupées en rondelles.",
			"Mélanger la farine, le lait, les œufs et la menthe ciselée.",
			"Disposer les courgettes dans un moule et verser la pâte dessus.",
			"Cuire au four à 180°C pendant 30 minutes. Servir tiède.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Salade de quinoa aux agrumes et grenade",
		description: "Une salade vitaminée et colorée avec des saveurs acidulées.",
		ingredients: [
			{ name: "Quinoa", quantity: "150g", category: "Riz" },
			{ name: "Orange", quantity: "1 pièce", category: "Fruits" },
			{ name: "Grenade", quantity: "100g", category: "Fruits" },
			{ name: "Menthe fraîche", quantity: "1 bouquet", category: "Épices" },
		],
		steps: [
			"Cuire le quinoa et le laisser refroidir.",
			"Peler l'orange à vif et récupérer les segments.",
			"Mélanger le quinoa avec les segments d'orange, les graines de grenade et la menthe ciselée.",
			"Servir frais avec une vinaigrette légère.",
		],
		category: "Salades",
	},
	{
		name: "Poulet rôti aux légumes racines",
		description:
			"Un poulet tendre et juteux accompagné de légumes d'hiver rôtis.",
		ingredients: [
			{ name: "Poulet entier", quantity: "1 pièce", category: "Viandes" },
			{ name: "Carottes", quantity: "3 pièces", category: "Légumes" },
			{ name: "Panais", quantity: "2 pièces", category: "Légumes" },
			{ name: "Thym", quantity: "3 branches", category: "Épices" },
		],
		steps: [
			"Disposer le poulet dans un plat, badigeonner d'huile, saler et poivrer.",
			"Ajouter autour les légumes coupés en morceaux et le thym.",
			"Cuire au four à 200°C pendant 1h30 en arrosant régulièrement avec le jus de cuisson.",
			"Servir chaud avec les légumes rôtis.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Tarte au chèvre et aux épinards",
		description:
			"Une tarte salée légère et gourmande, idéale pour un déjeuner rapide.",
		ingredients: [
			{
				name: "Pâte brisée",
				quantity: "1 rouleau",
				category: "Produits de boulangerie",
			},
			{ name: "Épinards frais", quantity: "200g", category: "Légumes" },
			{
				name: "Fromage de chèvre",
				quantity: "150g",
				category: "Produits laitiers",
			},
			{
				name: "Crème liquide",
				quantity: "150ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Faire revenir les épinards dans une poêle jusqu'à ce qu'ils réduisent.",
			"Étaler la pâte dans un moule, disposer les épinards et ajouter des morceaux de chèvre.",
			"Verser la crème mélangée aux œufs sur la garniture.",
			"Cuire au four à 180°C pendant 30 minutes. Servir chaud ou froid.",
		],
		category: "Plats végétariens",
	},
	{
		name: "Risotto au safran et crevettes",
		description: "Un risotto crémeux et raffiné avec une touche de safran.",
		ingredients: [
			{ name: "Riz arborio", quantity: "250g", category: "Riz" },
			{ name: "Crevettes", quantity: "200g", category: "Viandes" },
			{
				name: "Bouillon de légumes",
				quantity: "1 litre",
				category: "Produits surgelés",
			},
			{ name: "Safran", quantity: "1 pincée", category: "Épices" },
		],
		steps: [
			"Faire revenir le riz dans une poêle avec un peu d'huile.",
			"Ajouter le bouillon chaud petit à petit en remuant constamment.",
			"Incorporer les crevettes et le safran en fin de cuisson.",
			"Servir chaud avec une touche de parmesan râpé.",
		],
		category: "Plats mijotés",
	},
	{
		name: "Gratin de pommes de terre au jambon et fromage",
		description: "Un gratin gourmand et réconfortant pour toute la famille.",
		ingredients: [
			{ name: "Pommes de terre", quantity: "800g", category: "Légumes" },
			{ name: "Jambon", quantity: "150g", category: "Viandes" },
			{ name: "Fromage râpé", quantity: "100g", category: "Produits laitiers" },
			{
				name: "Crème liquide",
				quantity: "200ml",
				category: "Produits laitiers",
			},
		],
		steps: [
			"Cuire les pommes de terre en rondelles dans de l'eau salée.",
			"Disposer une couche de pommes de terre, une couche de jambon et une couche de fromage.",
			"Verser la crème par-dessus et cuire au four à 180°C pendant 30 minutes.",
			"Servir chaud avec une salade verte.",
		],
		category: "Accompagnements",
	},
];

export default recipes;
