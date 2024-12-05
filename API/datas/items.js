const groceryItem = [
	// Fruits (35 items)
	{
		name: "Banane",
		category: "Fruits",
		description:
			"Fruit doux et riche en potassium, parfait pour les collations.",
	},
	{
		name: "Orange",
		category: "Fruits",
		description: "Agrume juteux riche en vitamine C.",
	},
	{
		name: "Pomme rouge",
		category: "Fruits",
		description: "Fruit sucré et croquant, idéal pour les desserts.",
	},
	{
		name: "Raisin noir",
		category: "Fruits",
		description: "Fruit sucré parfait pour les desserts et salades.",
	},
	{
		name: "Fraise",
		category: "Fruits",
		description: "Petit fruit rouge sucré, excellent pour les smoothies.",
	},
	{
		name: "Kiwi",
		category: "Fruits",
		description: "Fruit vert acidulé, riche en vitamine C.",
	},
	{
		name: "Mangue",
		category: "Fruits",
		description: "Fruit tropical sucré et juteux.",
	},
	{
		name: "Ananas",
		category: "Fruits",
		description: "Fruit tropical au goût sucré et acidulé.",
	},
	{
		name: "Poire",
		category: "Fruits",
		description: "Fruit tendre et sucré, parfait pour les collations.",
	},
	{
		name: "Melon",
		category: "Fruits",
		description: "Fruit rafraîchissant pour l’été.",
	},
	{
		name: "Pastèque",
		category: "Fruits",
		description: "Fruit juteux et sucré idéal pour les pique-niques.",
	},
	{
		name: "Pamplemousse",
		category: "Fruits",
		description: "Agrume légèrement amer et rafraîchissant.",
	},
	{
		name: "Framboise",
		category: "Fruits",
		description: "Petit fruit rouge sucré, idéal pour les desserts.",
	},
	{
		name: "Myrtille",
		category: "Fruits",
		description: "Baie sucrée parfaite pour les pâtisseries.",
	},
	{
		name: "Papaye",
		category: "Fruits",
		description: "Fruit tropical doux et riche en enzymes.",
	},
	{
		name: "Abricot",
		category: "Fruits",
		description: "Petit fruit orange sucré et tendre.",
	},
	{
		name: "Cerise",
		category: "Fruits",
		description: "Petit fruit rouge sucré et juteux.",
	},
	{
		name: "Litchi",
		category: "Fruits",
		description: "Fruit exotique sucré avec une texture juteuse.",
	},
	{
		name: "Prune",
		category: "Fruits",
		description: "Fruit sucré et acidulé, idéal pour les compotes.",
	},
	{
		name: "Grenade",
		category: "Fruits",
		description: "Fruit juteux et riche en antioxydants.",
	},
	{
		name: "Nectarine",
		category: "Fruits",
		description: "Fruit sucré avec une peau lisse.",
	},
	{
		name: "Pêche",
		category: "Fruits",
		description: "Fruit juteux avec une chair douce et sucrée.",
	},
	{
		name: "Cassis",
		category: "Fruits",
		description: "Baies noires acidulées pour les confitures.",
	},
	{
		name: "Groseille",
		category: "Fruits",
		description: "Petites baies rouges acidulées.",
	},
	{
		name: "Fruit de la passion",
		category: "Fruits",
		description: "Fruit tropical au goût sucré et acidulé.",
	},
	{
		name: "Carambole",
		category: "Fruits",
		description: "Fruit tropical en forme d’étoile.",
	},
	{
		name: "Physalis",
		category: "Fruits",
		description: "Petit fruit jaune dans une enveloppe naturelle.",
	},
	{
		name: "Figue",
		category: "Fruits",
		description: "Fruit doux et sucré avec des graines croquantes.",
	},
	{
		name: "Kumquat",
		category: "Fruits",
		description: "Petit agrume sucré et acidulé.",
	},
	{
		name: "Datte",
		category: "Fruits",
		description: "Fruit séché sucré, riche en fibres.",
	},
	{
		name: "Coing",
		category: "Fruits",
		description: "Fruit dur utilisé dans les gelées et compotes.",
	},
	{
		name: "Avocat",
		category: "Fruits",
		description: "Fruit crémeux riche en bons gras.",
	},
	{
		name: "Citrons verts",
		category: "Fruits",
		description: "Petits agrumes acidulés pour les cocktails.",
	},

	// Légumes (30 items)
	{
		name: "Tomate",
		category: "Légumes",
		description: "Légume polyvalent, essentiel dans les salades et sauces.",
	},
	{
		name: "Poivron rouge",
		category: "Légumes",
		description: "Légume croquant et sucré utilisé dans les plats mijotés.",
	},
	{
		name: "Brocoli",
		category: "Légumes",
		description: "Légume vert riche en fibres et en vitamines.",
	},
	{
		name: "Carotte",
		category: "Légumes",
		description: "Légume croquant et sucré, idéal pour les soupes.",
	},
	{
		name: "Aubergine",
		category: "Légumes",
		description: "Légume doux utilisé dans les plats méditerranéens.",
	},
	{
		name: "Courgette",
		category: "Légumes",
		description: "Légume tendre idéal pour les gratins et ratatouilles.",
	},
	{
		name: "Épinards",
		category: "Légumes",
		description: "Feuilles vertes riches en fer pour les plats sains.",
	},
	{
		name: "Chou-fleur",
		category: "Légumes",
		description: "Légume blanc polyvalent pour les gratins.",
	},
	{
		name: "Haricot vert",
		category: "Légumes",
		description: "Légume long et croquant, parfait en accompagnement.",
	},
	{
		name: "Laitue",
		category: "Légumes",
		description: "Feuilles vertes idéales pour les salades fraîches.",
	},
	{
		name: "Navet",
		category: "Légumes",
		description: "Légume racine utilisé dans les soupes et ragoûts.",
	},
	{
		name: "Chou rouge",
		category: "Légumes",
		description: "Légume croquant pour les salades et plats cuisinés.",
	},
	{
		name: "Betterave",
		category: "Légumes",
		description: "Légume racine sucré, souvent utilisé en salade.",
	},
	{
		name: "Céleri",
		category: "Légumes",
		description: "Tiges croquantes parfaites pour les soupes et jus.",
	},
	{
		name: "Radis",
		category: "Légumes",
		description: "Petit légume croquant et légèrement piquant.",
	},
	{
		name: "Asperge",
		category: "Légumes",
		description: "Légume délicat pour les plats printaniers.",
	},
	{
		name: "Chou de Bruxelles",
		category: "Légumes",
		description: "Petits choux parfaits pour les plats d’hiver.",
	},
	{
		name: "Fenouil",
		category: "Légumes",
		description: "Légume aromatique au goût d’anis.",
	},
	{
		name: "Petit pois",
		category: "Légumes",
		description: "Légume vert sucré utilisé dans de nombreux plats.",
	},
	{
		name: "Poireau",
		category: "Légumes",
		description: "Légume essentiel pour les soupes et les quiches.",
	},
	{
		name: "Patate douce",
		category: "Légumes",
		description: "Légume racine sucré et nutritif.",
	},
	{
		name: "Chicorée",
		category: "Légumes",
		description: "Légume légèrement amer, souvent utilisé en salade.",
	},
	{
		name: "Oignon rouge",
		category: "Légumes",
		description: "Oignon doux utilisé cru ou cuit.",
	},
	{
		name: "Champignon de Paris",
		category: "Légumes",
		description: "Champignon blanc utilisé dans de nombreux plats.",
	},
	{
		name: "Chou kale",
		category: "Légumes",
		description: "Légume vert feuillu, riche en nutriments.",
	},
	{
		name: "Courge butternut",
		category: "Légumes",
		description: "Légume doux parfait pour les soupes et purées.",
	},
	{
		name: "Topinambour",
		category: "Légumes",
		description: "Légume racine au goût délicat.",
	},
	{
		name: "Artichaut",
		category: "Légumes",
		description: "Légume fleuri riche en fibres.",
	},
	{
		name: "Rutabaga",
		category: "Légumes",
		description: "Légume racine utilisé dans les ragoûts.",
	},

	// Produits laitiers (35 items)
	{
		name: "Lait entier",
		category: "Produits laitiers",
		description: "Lait riche et crémeux, parfait pour les boissons chaudes.",
	},
	{
		name: "Fromage de chèvre",
		category: "Produits laitiers",
		description: "Fromage doux et savoureux.",
	},
	{
		name: "Mozzarella",
		category: "Produits laitiers",
		description: "Fromage fondant idéal pour les pizzas.",
	},
	{
		name: "Yaourt à la fraise",
		category: "Produits laitiers",
		description: "Yaourt sucré au goût de fraise.",
	},
	{
		name: "Crème liquide",
		category: "Produits laitiers",
		description: "Crème idéale pour la cuisine et les desserts.",
	},
	{
		name: "Fromage râpé",
		category: "Produits laitiers",
		description: "Mélange de fromages râpés pour gratins et pizzas.",
	},
	{
		name: "Petit suisse nature",
		category: "Produits laitiers",
		description: "Petit fromage frais pour les desserts.",
	},
	{
		name: "Fromage bleu",
		category: "Produits laitiers",
		description: "Fromage à pâte persillée au goût fort.",
	},
	{
		name: "Ricotta",
		category: "Produits laitiers",
		description: "Fromage italien léger, parfait pour les desserts.",
	},
	{
		name: "Parmesan",
		category: "Produits laitiers",
		description: "Fromage italien dur, utilisé râpé ou en copeaux.",
	},
	{
		name: "Fromage Camembert",
		category: "Produits laitiers",
		description: "Fromage français à pâte molle.",
	},
	{
		name: "Crème fouettée",
		category: "Produits laitiers",
		description: "Crème aérée pour desserts et boissons.",
	},
	{
		name: "Mascarpone",
		category: "Produits laitiers",
		description: "Fromage doux, parfait pour le tiramisu.",
	},
	{
		name: "Beurre demi-sel",
		category: "Produits laitiers",
		description: "Beurre légèrement salé pour les tartines et pâtisseries.",
	},
	{
		name: "Fromage feta",
		category: "Produits laitiers",
		description: "Fromage grec idéal pour les salades.",
	},
	{
		name: "Yaourt à boire",
		category: "Produits laitiers",
		description: "Boisson lactée pratique et nutritive.",
	},
	{
		name: "Lait de chèvre",
		category: "Produits laitiers",
		description:
			"Lait au goût distinctif, adapté aux intolérants au lait de vache.",
	},
	{
		name: "Fromage comté",
		category: "Produits laitiers",
		description: "Fromage français affiné au goût intense.",
	},
	{
		name: "Kéfir",
		category: "Produits laitiers",
		description: "Boisson lactée fermentée riche en probiotiques.",
	},
	{
		name: "Fromage gruyère",
		category: "Produits laitiers",
		description: "Fromage suisse au goût légèrement fruité.",
	},
	{
		name: "Fromage à raclette",
		category: "Produits laitiers",
		description: "Fromage fondant parfait pour les soirées raclette.",
	},
	{
		name: "Lait concentré sucré",
		category: "Produits laitiers",
		description: "Ingrédient sucré pour les desserts.",
	},
	{
		name: "Crème anglaise",
		category: "Produits laitiers",
		description: "Sauce sucrée pour accompagner les gâteaux.",
	},
	{
		name: "Lait de coco",
		category: "Produits laitiers",
		description: "Lait végétal crémeux pour les plats exotiques.",
	},
	{
		name: "Fromage à tartiner",
		category: "Produits laitiers",
		description: "Pâte à tartiner au fromage doux et crémeux.",
	},
	{
		name: "Fromage Munster",
		category: "Produits laitiers",
		description: "Fromage à forte odeur et saveur prononcée.",
	},
	{
		name: "Lait cru",
		category: "Produits laitiers",
		description: "Lait non pasteurisé pour un goût authentique.",
	},
	{
		name: "Yaourt grec nature",
		category: "Produits laitiers",
		description: "Yaourt épais et riche en protéines.",
	},
	{
		name: "Fromage Roquefort",
		category: "Produits laitiers",
		description: "Fromage bleu français avec une saveur forte.",
	},
	{
		name: "Crème épaisse",
		category: "Produits laitiers",
		description: "Crème riche pour accompagner les plats.",
	},
	{
		name: "Lait aromatisé chocolat",
		category: "Produits laitiers",
		description: "Boisson lactée sucrée au chocolat.",
	},
	{
		name: "Fromage cheddar",
		category: "Produits laitiers",
		description: "Fromage anglais au goût prononcé.",
	},
	{
		name: "Beurre clarifié",
		category: "Produits laitiers",
		description: "Beurre chauffé et filtré pour la cuisine.",
	},
	{
		name: "Crème fraîche légère",
		category: "Produits laitiers",
		description: "Version allégée de la crème fraîche classique.",
	},

	// Viandes (35 items)
	{
		name: "Escalope de veau",
		category: "Viandes",
		description: "Viande tendre pour les plats sautés ou panés.",
	},
	{
		name: "Cuisse de poulet",
		category: "Viandes",
		description: "Pièce juteuse idéale pour les plats mijotés.",
	},
	{
		name: "Boudin blanc",
		category: "Viandes",
		description: "Saucisse délicate au goût léger.",
	},
	{
		name: "Saucisse de Toulouse",
		category: "Viandes",
		description: "Saucisse fraîche parfaite pour le barbecue ou les ragoûts.",
	},
	{
		name: "Côtelette d’agneau",
		category: "Viandes",
		description: "Viande tendre avec un os.",
	},
	{
		name: "Magret de canard",
		category: "Viandes",
		description: "Viande riche, parfaite pour les repas festifs.",
	},
	{
		name: "Rôti de porc",
		category: "Viandes",
		description: "Viande savoureuse pour les repas familiaux.",
	},
	{
		name: "Filet de dinde",
		category: "Viandes",
		description: "Viande maigre idéale pour les plats légers.",
	},
	{
		name: "Foie gras",
		category: "Viandes",
		description: "Produit de luxe pour les occasions spéciales.",
	},
	{
		name: "Jambon blanc",
		category: "Viandes",
		description: "Charcuterie classique pour les sandwichs.",
	},
	{
		name: "Steak haché",
		category: "Viandes",
		description: "Viande hachée en portions individuelles.",
	},
	{
		name: "Blanquette de veau",
		category: "Viandes",
		description: "Morceaux de veau pour les plats mijotés.",
	},
	{
		name: "Rillettes de porc",
		category: "Viandes",
		description: "Charcuterie effilochée pour les tartines.",
	},
	{
		name: "Lard fumé",
		category: "Viandes",
		description: "Viande fumée utilisée en cuisine.",
	},
	{
		name: "Côte de bœuf",
		category: "Viandes",
		description: "Pièce épaisse et juteuse à griller.",
	},
	{
		name: "Poulet rôti",
		category: "Viandes",
		description: "Poulet entier cuit au four.",
	},
	{
		name: "Bœuf bourguignon",
		category: "Viandes",
		description: "Morceaux de bœuf pour plats en sauce.",
	},
	{
		name: "Filet mignon",
		category: "Viandes",
		description: "Viande de porc tendre et juteuse.",
	},
	{
		name: "Saucisson sec",
		category: "Viandes",
		description: "Charcuterie sèche pour l’apéritif.",
	},
	{
		name: "Jambon cru",
		category: "Viandes",
		description: "Charcuterie salée et séchée.",
	},
	{
		name: "Cuisse de lapin",
		category: "Viandes",
		description: "Viande maigre et délicate pour les plats mijotés.",
	},
	{
		name: "Jarret de porc",
		category: "Viandes",
		description: "Viande tendre pour les plats mijotés.",
	},
	{
		name: "Rognons de veau",
		category: "Viandes",
		description: "Abats délicats pour les recettes traditionnelles.",
	},
	{
		name: "Saucisses cocktail",
		category: "Viandes",
		description: "Petites saucisses pour les apéritifs.",
	},
	{
		name: "Tournedos de bœuf",
		category: "Viandes",
		description: "Tranche de bœuf tendre pour les repas élégants.",
	},
	{
		name: "Jambon de Bayonne",
		category: "Viandes",
		description: "Charcuterie traditionnelle du sud-ouest.",
	},
	{
		name: "Lardons",
		category: "Viandes",
		description: "Petits morceaux de lard pour agrémenter vos plats.",
	},
	{
		name: "Pavé de saumon",
		category: "Viandes",
		description: "Filet de poisson pour une alternative saine.",
	},
	{
		name: "Sanglier",
		category: "Viandes",
		description: "Viande de gibier au goût prononcé.",
	},
	{
		name: "Cheval",
		category: "Viandes",
		description: "Viande maigre riche en fer.",
	},
	{
		name: "Chorizo",
		category: "Viandes",
		description: "Saucisse épicée d’origine espagnole.",
	},
	{
		name: "Andouille",
		category: "Viandes",
		description: "Charcuterie traditionnelle au goût intense.",
	},
	{
		name: "Terrine de campagne",
		category: "Viandes",
		description: "Mélange de viandes hachées pour tartiner.",
	},
	// Épices (30 items)
	{
		name: "Paprika",
		category: "Épices",
		description: "Épice douce et colorée, idéale pour les plats mijotés.",
	},
	{
		name: "Curcuma",
		category: "Épices",
		description: "Épice jaune aux propriétés anti-inflammatoires.",
	},
	{
		name: "Cumin",
		category: "Épices",
		description:
			"Épice chaude et terreuse utilisée dans les cuisines du monde.",
	},
	{
		name: "Piment de Cayenne",
		category: "Épices",
		description: "Épice piquante pour relever vos plats.",
	},
	{
		name: "Cannelle en poudre",
		category: "Épices",
		description: "Épice douce pour les desserts et les boissons chaudes.",
	},
	{
		name: "Clous de girofle",
		category: "Épices",
		description: "Épice intense pour les plats mijotés et marinades.",
	},
	{
		name: "Gingembre moulu",
		category: "Épices",
		description: "Épice piquante et aromatique pour la cuisine asiatique.",
	},
	{
		name: "Origan",
		category: "Épices",
		description: "Épice herbacée essentielle dans la cuisine italienne.",
	},
	{
		name: "Thym séché",
		category: "Épices",
		description: "Herbe aromatique pour parfumer les plats mijotés.",
	},
	{
		name: "Romarin",
		category: "Épices",
		description: "Herbe boisée parfaite pour les viandes rôties.",
	},
	{
		name: "Muscade",
		category: "Épices",
		description: "Épice chaude utilisée dans les desserts et sauces.",
	},
	{
		name: "Cardamome",
		category: "Épices",
		description:
			"Épice exotique utilisée dans les plats indiens et les desserts.",
	},
	{
		name: "Fenouil en grains",
		category: "Épices",
		description: "Graines aromatiques pour les marinades et pains.",
	},
	{
		name: "Anis étoilé",
		category: "Épices",
		description: "Épice parfumée pour les plats et boissons.",
	},
	{
		name: "Za’atar",
		category: "Épices",
		description: "Mélange d’épices et d’herbes moyen-orientales.",
	},
	{
		name: "Coriandre moulue",
		category: "Épices",
		description:
			"Épice douce utilisée dans les cuisines asiatiques et latines.",
	},
	{
		name: "Poudre de chili",
		category: "Épices",
		description: "Mélange d’épices piquant pour les plats mexicains.",
	},
	{
		name: "Sumac",
		category: "Épices",
		description: "Épice acidulée pour les salades et viandes.",
	},
	{
		name: "Sel de mer",
		category: "Épices",
		description: "Sel naturel pour assaisonner vos plats.",
	},
	{
		name: "Poivre blanc",
		category: "Épices",
		description: "Poivre doux pour les sauces claires.",
	},
	{
		name: "Curry doux",
		category: "Épices",
		description: "Mélange d’épices indiennes doux et parfumé.",
	},
	{
		name: "Épices quatre épices",
		category: "Épices",
		description: "Mélange de poivre, cannelle, girofle et muscade.",
	},
	{
		name: "Poudre d’ail",
		category: "Épices",
		description: "Épice pratique pour ajouter une saveur d’ail.",
	},
	{
		name: "Poudre d’oignon",
		category: "Épices",
		description: "Épice pour intensifier la saveur des plats.",
	},
	{
		name: "Feuilles de laurier",
		category: "Épices",
		description: "Herbe aromatique pour parfumer les plats en sauce.",
	},
	{
		name: "Ras el hanout",
		category: "Épices",
		description: "Mélange d’épices marocaines pour les tajines.",
	},
	{
		name: "Harissa",
		category: "Épices",
		description: "Pâte épicée pour les plats orientaux.",
	},
	{
		name: "Épices cajun",
		category: "Épices",
		description: "Mélange épicé pour les plats créoles.",
	},
	{
		name: "Poivre rose",
		category: "Épices",
		description: "Baies roses au goût délicat pour la cuisine fine.",
	},

	// Fruits secs (30 items)
	{
		name: "Amandes nature",
		category: "Fruits secs",
		description: "Fruits secs riches en protéines et bons gras.",
	},
	{
		name: "Noix de cajou",
		category: "Fruits secs",
		description: "Noix crémeuses et sucrées, parfaites pour les collations.",
	},
	{
		name: "Pistaches",
		category: "Fruits secs",
		description: "Noix croquantes et savoureuses.",
	},
	{
		name: "Raisins secs",
		category: "Fruits secs",
		description: "Fruits sucrés pour les gâteaux et collations.",
	},
	{
		name: "Noix de pécan",
		category: "Fruits secs",
		description: "Noix au goût riche et beurré.",
	},
	{
		name: "Abricots secs",
		category: "Fruits secs",
		description: "Fruits moelleux et sucrés riches en fibres.",
	},
	{
		name: "Pruneaux",
		category: "Fruits secs",
		description: "Fruits séchés riches en antioxydants.",
	},
	{
		name: "Noisettes",
		category: "Fruits secs",
		description: "Noix croquantes parfaites pour les pâtisseries.",
	},
	{
		name: "Cranberries séchées",
		category: "Fruits secs",
		description: "Fruits rouges acidulés pour les salades.",
	},
	{
		name: "Noix de macadamia",
		category: "Fruits secs",
		description: "Noix riches et croquantes.",
	},
	{
		name: "Figues sèches",
		category: "Fruits secs",
		description: "Fruits séchés sucrés, riches en fibres.",
	},
	{
		name: "Noix",
		category: "Fruits secs",
		description: "Noix classiques pour les recettes salées et sucrées.",
	},
	{
		name: "Amandes grillées",
		category: "Fruits secs",
		description: "Fruits secs croquants et savoureux.",
	},
	{
		name: "Chips de banane",
		category: "Fruits secs",
		description: "Collation sucrée et croquante.",
	},
	{
		name: "Cacahuètes nature",
		category: "Fruits secs",
		description: "Noix riches en protéines, idéales en collation.",
	},
	{
		name: "Noix du Brésil",
		category: "Fruits secs",
		description: "Noix riches en sélénium.",
	},
	{
		name: "Châtaignes séchées",
		category: "Fruits secs",
		description: "Fruits secs pour accompagner les plats d’hiver.",
	},
	{
		name: "Pommes séchées",
		category: "Fruits secs",
		description: "Fruits séchés légers et sucrés.",
	},
	{
		name: "Baies de goji",
		category: "Fruits secs",
		description: "Super-aliment riche en antioxydants.",
	},
	{
		name: "Mélange trail mix",
		category: "Fruits secs",
		description: "Mélange de fruits secs et de noix pour les randonnées.",
	},
	{
		name: "Noix de coco râpée",
		category: "Fruits secs",
		description: "Ingrédient sucré pour les desserts.",
	},
	{
		name: "Graines de tournesol",
		category: "Fruits secs",
		description: "Graines croquantes pour les salades et snacks.",
	},
	{
		name: "Graines de courge",
		category: "Fruits secs",
		description: "Graines riches en magnésium.",
	},
	{
		name: "Noix de pin",
		category: "Fruits secs",
		description: "Noix utilisées dans les pestos et salades.",
	},
	{
		name: "Mélange apéritif",
		category: "Fruits secs",
		description: "Mélange de noix et fruits secs salés.",
	},
	{
		name: "Mûres blanches séchées",
		category: "Fruits secs",
		description: "Fruits séchés sucrés et acidulés.",
	},
	{
		name: "Datte Medjool",
		category: "Fruits secs",
		description: "Fruit séché moelleux et très sucré.",
	},
	{
		name: "Pommes chips",
		category: "Fruits secs",
		description: "Tranches de pommes déshydratées.",
	},
	{
		name: "Fraises séchées",
		category: "Fruits secs",
		description: "Fruits rouges sucrés parfaits pour les desserts.",
	},
	{
		name: "Ananas séché",
		category: "Fruits secs",
		description: "Fruit tropical déshydraté pour une collation.",
	},
	// Produits surgelés (30 items)
	{
		name: "Frites surgelées",
		category: "Produits surgelés",
		description: "Pommes de terre coupées et prêtes à cuire.",
	},
	{
		name: "Petits pois surgelés",
		category: "Produits surgelés",
		description: "Légumes verts surgelés pour les plats rapides.",
	},
	{
		name: "Mélange de légumes grillés",
		category: "Produits surgelés",
		description: "Légumes assortis pour accompagner vos repas.",
	},
	{
		name: "Pizza margherita surgelée",
		category: "Produits surgelés",
		description: "Pizza prête à cuire pour un dîner rapide.",
	},
	{
		name: "Pâtes aux légumes surgelées",
		category: "Produits surgelés",
		description: "Plat prêt à réchauffer.",
	},
	{
		name: "Poulet pané surgelé",
		category: "Produits surgelés",
		description: "Bouchées de poulet croustillantes.",
	},
	{
		name: "Poisson pané surgelé",
		category: "Produits surgelés",
		description: "Filets de poisson prêts à cuire.",
	},
	{
		name: "Lasagnes surgelées",
		category: "Produits surgelés",
		description: "Plat italien pratique et rapide.",
	},
	{
		name: "Sorbet citron",
		category: "Produits surgelés",
		description: "Dessert glacé rafraîchissant.",
	},
	{
		name: "Glace au chocolat",
		category: "Produits surgelés",
		description: "Dessert glacé pour les gourmands.",
	},
	{
		name: "Gaufres surgelées",
		category: "Produits surgelés",
		description: "Gaufres prêtes à réchauffer.",
	},
	{
		name: "Ratatouille surgelée",
		category: "Produits surgelés",
		description: "Mélange de légumes provençaux.",
	},
	{
		name: "Choux de Bruxelles surgelés",
		category: "Produits surgelés",
		description: "Légumes verts pratiques et rapides.",
	},
	{
		name: "Steak haché surgelé",
		category: "Produits surgelés",
		description: "Viande de bœuf prête à cuire.",
	},
	{
		name: "Quiche lorraine surgelée",
		category: "Produits surgelés",
		description: "Tarte salée prête à chauffer.",
	},
	{
		name: "Pain précuit surgelé",
		category: "Produits surgelés",
		description: "Pain à cuire pour plus de fraîcheur.",
	},
	{
		name: "Epices fraîches congelées",
		category: "Produits surgelés",
		description: "Herbes aromatiques surgelées.",
	},
	{
		name: "Epinards hachés surgelés",
		category: "Produits surgelés",
		description: "Feuilles d’épinards prêtes à cuire.",
	},
	{
		name: "Crevettes décortiquées surgelées",
		category: "Produits surgelés",
		description: "Fruits de mer prêts à l'emploi.",
	},
	{
		name: "Mélange de fruits rouges surgelés",
		category: "Produits surgelés",
		description: "Parfait pour les desserts et smoothies.",
	},
	{
		name: "Riz cantonais surgelé",
		category: "Produits surgelés",
		description: "Riz sauté prêt en quelques minutes.",
	},
	{
		name: "Hachis Parmentier surgelé",
		category: "Produits surgelés",
		description: "Plat mijoté pratique et rapide.",
	},
	{
		name: "Noix de Saint-Jacques surgelées",
		category: "Produits surgelés",
		description: "Fruits de mer surgelés pour plats raffinés.",
	},
	{
		name: "Chili con carne surgelé",
		category: "Produits surgelés",
		description: "Plat épicé à réchauffer.",
	},
	{
		name: "Croquettes de poisson",
		category: "Produits surgelés",
		description: "Snack pour petits et grands.",
	},
	{
		name: "Soupe surgelée",
		category: "Produits surgelés",
		description: "Soupe prête à réchauffer pour les soirs pressés.",
	},
	{
		name: "Macaronis au fromage",
		category: "Produits surgelés",
		description: "Plat classique rapide à préparer.",
	},
	{
		name: "Rouleaux de printemps surgelés",
		category: "Produits surgelés",
		description: "Spécialité asiatique prête en quelques minutes.",
	},
	{
		name: "Galettes de pommes de terre surgelées",
		category: "Produits surgelés",
		description: "Accompagnement rapide et croustillant.",
	},

	// Produits de boulangerie (35 items)
	{
		name: "Pain complet",
		category: "Produits de boulangerie",
		description: "Pain riche en fibres pour le petit-déjeuner.",
	},
	{
		name: "Baguette tradition",
		category: "Produits de boulangerie",
		description: "Pain français classique à la croûte dorée.",
	},
	{
		name: "Croissant au beurre",
		category: "Produits de boulangerie",
		description: "Viennoiserie moelleuse pour le matin.",
	},
	{
		name: "Pain de seigle",
		category: "Produits de boulangerie",
		description: "Pain sombre avec une saveur intense.",
	},
	{
		name: "Pain aux noix",
		category: "Produits de boulangerie",
		description: "Pain croustillant avec des morceaux de noix.",
	},
	{
		name: "Brioche",
		category: "Produits de boulangerie",
		description: "Pain sucré et moelleux, idéal pour le goûter.",
	},
	{
		name: "Pain aux céréales",
		category: "Produits de boulangerie",
		description: "Pain nutritif avec des graines et céréales.",
	},
	{
		name: "Pain sans gluten",
		category: "Produits de boulangerie",
		description: "Pain spécialement conçu pour les régimes sans gluten.",
	},
	{
		name: "Pain pita",
		category: "Produits de boulangerie",
		description: "Pain plat utilisé dans la cuisine méditerranéenne.",
	},
	{
		name: "Pain viennois",
		category: "Produits de boulangerie",
		description: "Pain doux et moelleux.",
	},
	{
		name: "Pain de campagne",
		category: "Produits de boulangerie",
		description: "Pain rustique au levain.",
	},
	{
		name: "Pain de mie",
		category: "Produits de boulangerie",
		description: "Pain tranché parfait pour les sandwichs.",
	},
	{
		name: "Pain aux raisins",
		category: "Produits de boulangerie",
		description: "Viennoiserie sucrée avec des raisins secs.",
	},
	{
		name: "Chocolatine",
		category: "Produits de boulangerie",
		description: "Viennoiserie classique avec du chocolat.",
	},
	{
		name: "Pain naan",
		category: "Produits de boulangerie",
		description: "Pain plat indien parfait pour accompagner les currys.",
	},
	{
		name: "Pain aux olives",
		category: "Produits de boulangerie",
		description: "Pain savoureux avec des morceaux d’olives.",
	},
	{
		name: "Focaccia",
		category: "Produits de boulangerie",
		description: "Pain italien moelleux parfumé aux herbes.",
	},
	{
		name: "Pain d’épices",
		category: "Produits de boulangerie",
		description: "Pain sucré avec des épices chaudes.",
	},
	{
		name: "Bretzel",
		category: "Produits de boulangerie",
		description: "Pain salé avec une croûte dorée.",
	},
	{
		name: "Pain polaire",
		category: "Produits de boulangerie",
		description: "Pain plat nordique pour les sandwichs légers.",
	},
	{
		name: "Pain bagnat",
		category: "Produits de boulangerie",
		description: "Pain rond pour les sandwichs méditerranéens.",
	},
	{
		name: "Pain brioché",
		category: "Produits de boulangerie",
		description: "Pain légèrement sucré parfait pour les burgers.",
	},
	{
		name: "Pain ciabatta",
		category: "Produits de boulangerie",
		description: "Pain italien avec une mie alvéolée.",
	},
	{
		name: "Pain au levain",
		category: "Produits de boulangerie",
		description: "Pain traditionnel avec une saveur acidulée.",
	},
	{
		name: "Pain burger",
		category: "Produits de boulangerie",
		description: "Pain rond pour préparer des hamburgers.",
	},
	{
		name: "Pain suédois",
		category: "Produits de boulangerie",
		description: "Pain plat idéal pour les wraps.",
	},
	{
		name: "Pain au chocolat",
		category: "Produits de boulangerie",
		description: "Viennoiserie sucrée garnie de chocolat.",
	},
	{
		name: "Pain d’épeautre",
		category: "Produits de boulangerie",
		description: "Pain riche en nutriments, préparé avec de l’épeautre.",
	},
	{
		name: "Pain de maïs",
		category: "Produits de boulangerie",
		description: "Pain légèrement sucré à base de maïs.",
	},
	{
		name: "Pain à la châtaigne",
		category: "Produits de boulangerie",
		description: "Pain rustique avec un goût unique.",
	},
	{
		name: "Pain noir",
		category: "Produits de boulangerie",
		description: "Pain dense, souvent utilisé pour les repas nordiques.",
	},
	{
		name: "Tresse au beurre",
		category: "Produits de boulangerie",
		description: "Pain moelleux en forme de tresse.",
	},
	{
		name: "Pain de son",
		category: "Produits de boulangerie",
		description: "Pain riche en fibres.",
	},

	// Pâtes (35 items)
	{
		name: "Spaghetti",
		category: "Pâtes",
		description:
			"Pâtes longues et fines, idéales pour les sauces tomate ou carbonara.",
	},
	{
		name: "Penne rigate",
		category: "Pâtes",
		description:
			"Pâtes courtes en forme de tubes, parfaites pour les sauces épaisses.",
	},
	{
		name: "Tagliatelles",
		category: "Pâtes",
		description:
			"Pâtes plates et larges, parfaites avec une sauce crémeuse ou au pesto.",
	},
	{
		name: "Fusilli",
		category: "Pâtes",
		description:
			"Pâtes en spirales, excellentes pour les salades ou plats en sauce.",
	},
	{
		name: "Linguine",
		category: "Pâtes",
		description:
			"Pâtes plates et longues, idéales pour les plats de fruits de mer.",
	},
	{
		name: "Farfalle",
		category: "Pâtes",
		description:
			"Pâtes en forme de nœuds papillons, parfaites pour les plats familiaux.",
	},
	{
		name: "Macaroni",
		category: "Pâtes",
		description:
			"Pâtes courtes et creuses, souvent utilisées dans les gratins.",
	},
	{
		name: "Lasagnes",
		category: "Pâtes",
		description: "Feuilles de pâtes utilisées pour des plats superposés.",
	},
	{
		name: "Raviolis",
		category: "Pâtes",
		description: "Pâtes farcies aux légumes, fromages ou viandes.",
	},
	{
		name: "Gnocchis",
		category: "Pâtes",
		description: "Petites pâtes moelleuses à base de pommes de terre.",
	},
	{
		name: "Tortellinis",
		category: "Pâtes",
		description: "Pâtes en forme d’anneaux, souvent farcies.",
	},
	{
		name: "Conchiglie",
		category: "Pâtes",
		description:
			"Pâtes en forme de coquillages, idéales pour retenir les sauces.",
	},
	{
		name: "Cavatelli",
		category: "Pâtes",
		description: "Petites pâtes en forme de coquilles allongées.",
	},
	{
		name: "Pâtes fraîches",
		category: "Pâtes",
		description: "Pâtes non séchées, pour des plats savoureux et rapides.",
	},
	{
		name: "Rigatoni",
		category: "Pâtes",
		description: "Pâtes courtes et larges, parfaites pour les sauces épaisses.",
	},
	{
		name: "Orecchiette",
		category: "Pâtes",
		description:
			"Pâtes en forme de petites oreilles, typiques de la cuisine italienne.",
	},
	{
		name: "Bucatini",
		category: "Pâtes",
		description: "Pâtes longues et creuses, idéales pour la sauce amatriciana.",
	},
	{
		name: "Pappardelle",
		category: "Pâtes",
		description: "Pâtes très larges, parfaites avec les sauces riches.",
	},
	{
		name: "Capellini",
		category: "Pâtes",
		description: "Pâtes fines appelées 'cheveux d'ange'.",
	},
	{
		name: "Pastina",
		category: "Pâtes",
		description: "Petites pâtes pour les soupes et plats pour enfants.",
	},
	{
		name: "Tortiglioni",
		category: "Pâtes",
		description: "Pâtes torsadées idéales pour les sauces généreuses.",
	},
	{
		name: "Pâtes aux œufs",
		category: "Pâtes",
		description: "Pâtes fabriquées avec des œufs pour une texture riche.",
	},
	{
		name: "Pâtes de blé complet",
		category: "Pâtes",
		description: "Pâtes riches en fibres pour un repas sain.",
	},
	{
		name: "Cannellonis",
		category: "Pâtes",
		description: "Grandes pâtes tubulaires souvent farcies avant cuisson.",
	},
	{
		name: "Ravioles",
		category: "Pâtes",
		description: "Pâtes farcies, souvent aux fromages ou aux épinards.",
	},
	{
		name: "Fidés",
		category: "Pâtes",
		description: "Pâtes très fines, utilisées pour les soupes.",
	},
	{
		name: "Pâtes tricolores",
		category: "Pâtes",
		description: "Pâtes colorées aux légumes comme les épinards et tomates.",
	},
	{
		name: "Pâtes sans gluten",
		category: "Pâtes",
		description: "Options adaptées aux régimes sans gluten.",
	},
	{
		name: "Anellini",
		category: "Pâtes",
		description: "Petites pâtes en forme d'anneaux, idéales pour les soupes.",
	},
	{
		name: "Risoni",
		category: "Pâtes",
		description: "Pâtes en forme de grains de riz pour soupes et salades.",
	},

	// Riz
	{
		name: "Riz basmati",
		category: "Riz",
		description: "Riz parfumé à grains longs, parfait pour les plats indiens.",
	},
	{
		name: "Riz jasmin",
		category: "Riz",
		description: "Riz thaïlandais parfumé, idéal pour accompagner les currys.",
	},
	{
		name: "Riz arborio",
		category: "Riz",
		description: "Riz à grains courts utilisé pour le risotto.",
	},
	{
		name: "Riz complet",
		category: "Riz",
		description: "Riz nutritif avec le son conservé, riche en fibres.",
	},
	{
		name: "Riz blanc",
		category: "Riz",
		description:
			"Riz classique à grains longs, polyvalent pour tous les plats.",
	},
	{
		name: "Riz gluant",
		category: "Riz",
		description:
			"Riz collant utilisé dans la cuisine asiatique et les desserts.",
	},
	{
		name: "Riz noir",
		category: "Riz",
		description: "Riz riche en antioxydants, avec une texture ferme.",
	},
	{
		name: "Riz rouge",
		category: "Riz",
		description: "Riz coloré au goût légèrement noisetté.",
	},
	{
		name: "Riz sauvage",
		category: "Riz",
		description: "Grains longs et fins, souvent mélangés avec du riz blanc.",
	},
	{
		name: "Riz au lait",
		category: "Riz",
		description: "Riz spécial pour les desserts crémeux.",
	},
	{
		name: "Riz précuit",
		category: "Riz",
		description: "Riz facile et rapide à préparer.",
	},
	{
		name: "Riz instantané",
		category: "Riz",
		description: "Riz à cuisson rapide pour les repas pressés.",
	},
	{
		name: "Riz soufflé",
		category: "Riz",
		description: "Grains légers pour les desserts et petits-déjeuners.",
	},
	{
		name: "Riz thaï",
		category: "Riz",
		description: "Riz parfumé, idéal pour les recettes asiatiques.",
	},
	{
		name: "Riz pilaf",
		category: "Riz",
		description: "Riz légèrement épicé, préparé avec des légumes.",
	},
	{
		name: "Riz bio",
		category: "Riz",
		description:
			"Riz cultivé sans pesticides, idéal pour une alimentation saine.",
	},
	{
		name: "Riz sauté",
		category: "Riz",
		description: "Mélange de riz cuit et d'assaisonnements.",
	},
	{
		name: "Riz à paella",
		category: "Riz",
		description: "Riz à grains ronds utilisé pour les recettes espagnoles.",
	},
	{
		name: "Riz long étuvé",
		category: "Riz",
		description: "Riz à texture légère et qui ne colle pas.",
	},
	{
		name: "Riz parfumé aux herbes",
		category: "Riz",
		description: "Riz prêt à cuisiner avec des saveurs d'herbes.",
	},
	{
		name: "Riz japonais",
		category: "Riz",
		description: "Riz collant idéal pour les sushis et les plats asiatiques.",
	},
	{
		name: "Riz risotto",
		category: "Riz",
		description: "Riz riche en amidon, parfait pour des plats crémeux.",
	},
	{
		name: "Riz aux légumes",
		category: "Riz",
		description: "Mélange de riz et de légumes, pratique pour les repas.",
	},
	{
		name: "Riz frit",
		category: "Riz",
		description: "Préparation rapide et savoureuse, souvent avec des œufs.",
	},
	{
		name: "Riz curcuma",
		category: "Riz",
		description: "Riz légèrement coloré et aromatisé au curcuma.",
	},
	{
		name: "Riz à cuisson vapeur",
		category: "Riz",
		description: "Riz adapté pour les autocuiseurs à vapeur.",
	},
	{
		name: "Riz épicé",
		category: "Riz",
		description: "Riz parfumé avec des mélanges d'épices.",
	},
	{
		name: "Riz aux fruits secs",
		category: "Riz",
		description: "Riz mélangé à des raisins secs, amandes ou pistaches.",
	},
	{
		name: "Riz aux épices indiennes",
		category: "Riz",
		description:
			"Riz assaisonné avec du cumin, de la cardamome et d'autres épices.",
	},
	{
		name: "Riz pour soupe",
		category: "Riz",
		description: "Riz léger, parfait pour épaissir les soupes.",
	},
	// Huiles et vinaigres
	{
		name: "Huile d'olive extra vierge",
		category: "Huiles et vinaigres",
		description: "Huile pressée à froid pour les salades et la cuisine.",
	},
	{
		name: "Huile de tournesol",
		category: "Huiles et vinaigres",
		description: "Huile légère idéale pour les fritures et la pâtisserie.",
	},
	{
		name: "Huile de colza",
		category: "Huiles et vinaigres",
		description: "Huile riche en oméga-3 pour une cuisine saine.",
	},
	{
		name: "Vinaigre balsamique",
		category: "Huiles et vinaigres",
		description: "Vinaigre italien sucré pour les salades et marinades.",
	},
	{
		name: "Huile de noix",
		category: "Huiles et vinaigres",
		description: "Huile au goût intense pour les vinaigrettes.",
	},
	{
		name: "Huile de sésame",
		category: "Huiles et vinaigres",
		description: "Huile parfumée utilisée dans la cuisine asiatique.",
	},
	{
		name: "Vinaigre de cidre",
		category: "Huiles et vinaigres",
		description: "Vinaigre fruité utilisé en cuisine et pour ses bienfaits.",
	},
	{
		name: "Huile d'arachide",
		category: "Huiles et vinaigres",
		description: "Huile résistante aux hautes températures pour les fritures.",
	},
	{
		name: "Vinaigre blanc",
		category: "Huiles et vinaigres",
		description: "Vinaigre polyvalent pour la cuisine et le nettoyage.",
	},
	{
		name: "Huile de pépins de raisin",
		category: "Huiles et vinaigres",
		description: "Huile douce pour la cuisine et les marinades.",
	},
	{
		name: "Huile de coco",
		category: "Huiles et vinaigres",
		description:
			"Huile solide à température ambiante, idéale pour la pâtisserie.",
	},
	{
		name: "Huile de palme",
		category: "Huiles et vinaigres",
		description: "Huile utilisée principalement dans la cuisine industrielle.",
	},
	{
		name: "Vinaigre de vin rouge",
		category: "Huiles et vinaigres",
		description: "Vinaigre classique pour relever les plats.",
	},
	{
		name: "Vinaigre de vin blanc",
		category: "Huiles et vinaigres",
		description: "Vinaigre léger pour les sauces et les vinaigrettes.",
	},
	{
		name: "Huile de truffe",
		category: "Huiles et vinaigres",
		description: "Huile aromatisée pour les plats gastronomiques.",
	},
	{
		name: "Vinaigre de framboise",
		category: "Huiles et vinaigres",
		description: "Vinaigre fruité pour les salades et desserts.",
	},
	{
		name: "Huile d'avocat",
		category: "Huiles et vinaigres",
		description: "Huile riche en acides gras monoinsaturés.",
	},
	{
		name: "Vinaigre de Xérès",
		category: "Huiles et vinaigres",
		description: "Vinaigre espagnol vieilli, idéal pour les sauces.",
	},
	{
		name: "Huile de chanvre",
		category: "Huiles et vinaigres",
		description: "Huile riche en oméga pour les plats froids.",
	},
	{
		name: "Huile de lin",
		category: "Huiles et vinaigres",
		description: "Huile fragile riche en oméga-3, à consommer crue.",
	},
	{
		name: "Huile d'amande",
		category: "Huiles et vinaigres",
		description: "Huile douce pour pâtisserie et cuisine légère.",
	},
	{
		name: "Vinaigre à l'estragon",
		category: "Huiles et vinaigres",
		description: "Vinaigre aromatique pour parfumer les plats.",
	},
	{
		name: "Vinaigre de miel",
		category: "Huiles et vinaigres",
		description: "Vinaigre doux et légèrement sucré.",
	},
	{
		name: "Huile d'argan",
		category: "Huiles et vinaigres",
		description: "Huile marocaine au goût intense pour assaisonner.",
	},
	{
		name: "Vinaigre aux herbes",
		category: "Huiles et vinaigres",
		description: "Vinaigre infusé pour des saveurs uniques.",
	},
	{
		name: "Vinaigre de riz",
		category: "Huiles et vinaigres",
		description: "Vinaigre doux utilisé dans la cuisine asiatique.",
	},
	{
		name: "Vinaigre noir chinois",
		category: "Huiles et vinaigres",
		description: "Vinaigre riche pour la cuisine asiatique.",
	},
	{
		name: "Huile parfumée à l'ail",
		category: "Huiles et vinaigres",
		description: "Huile aromatisée pour les plats méditerranéens.",
	},
	{
		name: "Huile de cameline",
		category: "Huiles et vinaigres",
		description: "Huile ancienne au goût herbacé.",
	},
	{
		name: "Huile de pistache",
		category: "Huiles et vinaigres",
		description: "Huile parfumée pour les desserts et salades.",
	},
	// Boissons non alcoolisées
	{
		name: "Eau plate",
		category: "Boissons non alcoolisées",
		description: "Eau naturelle pour une hydratation quotidienne.",
	},
	{
		name: "Eau gazeuse",
		category: "Boissons non alcoolisées",
		description: "Eau pétillante, rafraîchissante et vivifiante.",
	},
	{
		name: "Jus d'orange",
		category: "Boissons non alcoolisées",
		description: "Boisson riche en vitamine C, idéale pour le petit-déjeuner.",
	},
	{
		name: "Jus de pomme",
		category: "Boissons non alcoolisées",
		description: "Boisson douce et fruitée pour toute la famille.",
	},
	{
		name: "Thé glacé au citron",
		category: "Boissons non alcoolisées",
		description: "Boisson rafraîchissante au goût de citron.",
	},
	{
		name: "Limonade",
		category: "Boissons non alcoolisées",
		description: "Boisson pétillante légèrement sucrée au citron.",
	},
	{
		name: "Soda cola",
		category: "Boissons non alcoolisées",
		description: "Boisson pétillante classique pour accompagner les repas.",
	},
	{
		name: "Soda à l'orange",
		category: "Boissons non alcoolisées",
		description: "Boisson pétillante au goût d'orange sucrée.",
	},
	{
		name: "Jus multifruits",
		category: "Boissons non alcoolisées",
		description: "Mélange de fruits pour un goût varié et équilibré.",
	},
	{
		name: "Eau aromatisée au citron",
		category: "Boissons non alcoolisées",
		description: "Eau légèrement parfumée pour une touche de fraîcheur.",
	},
	{
		name: "Jus de raisin",
		category: "Boissons non alcoolisées",
		description: "Boisson sucrée et riche en saveurs de raisin.",
	},
	{
		name: "Boisson énergisante",
		category: "Boissons non alcoolisées",
		description: "Boisson stimulante pour un regain d'énergie rapide.",
	},
	{
		name: "Eau de coco",
		category: "Boissons non alcoolisées",
		description: "Boisson naturelle riche en électrolytes.",
	},
	{
		name: "Boisson aux amandes",
		category: "Boissons non alcoolisées",
		description: "Alternative végétale et douce au lait.",
	},
	{
		name: "Boisson au soja",
		category: "Boissons non alcoolisées",
		description: "Alternative végétale adaptée aux intolérants au lactose.",
	},
	{
		name: "Smoothie aux fruits rouges",
		category: "Boissons non alcoolisées",
		description: "Boisson onctueuse et fruitée, riche en antioxydants.",
	},
	{
		name: "Boisson au thé matcha",
		category: "Boissons non alcoolisées",
		description: "Boisson riche en thé vert et en saveurs uniques.",
	},
	{
		name: "Boisson aux fruits exotiques",
		category: "Boissons non alcoolisées",
		description: "Mélange tropical pour une évasion gustative.",
	},
	{
		name: "Eau minérale gazeuse",
		category: "Boissons non alcoolisées",
		description: "Eau pétillante riche en minéraux naturels.",
	},
	{
		name: "Lait chocolaté",
		category: "Boissons non alcoolisées",
		description:
			"Boisson sucrée et réconfortante pour les enfants et les grands.",
	},
	{
		name: "Thé glacé à la pêche",
		category: "Boissons non alcoolisées",
		description: "Boisson fraîche au goût sucré et fruité.",
	},
	{
		name: "Eau tonique",
		category: "Boissons non alcoolisées",
		description:
			"Boisson pétillante légèrement amère, idéale pour les cocktails.",
	},
	{
		name: "Infusion glacée aux herbes",
		category: "Boissons non alcoolisées",
		description: "Boisson légère et rafraîchissante aux saveurs naturelles.",
	},
	{
		name: "Jus de mangue",
		category: "Boissons non alcoolisées",
		description: "Boisson sucrée et onctueuse pour une touche exotique.",
	},
	{
		name: "Jus de grenade",
		category: "Boissons non alcoolisées",
		description: "Boisson riche en antioxydants et en saveurs acidulées.",
	},
	{
		name: "Boisson aux céréales",
		category: "Boissons non alcoolisées",
		description: "Boisson énergétique à base de céréales et de lait.",
	},
	{
		name: "Eau infusée au concombre",
		category: "Boissons non alcoolisées",
		description: "Boisson hydratante au goût délicatement végétal.",
	},
	{
		name: "Lait de riz",
		category: "Boissons non alcoolisées",
		description: "Alternative végétale douce et légère.",
	},
	{
		name: "Jus d'ananas",
		category: "Boissons non alcoolisées",
		description: "Boisson exotique sucrée et acidulée.",
	},
	{
		name: "Eau pétillante aromatisée",
		category: "Boissons non alcoolisées",
		description: "Eau gazeuse parfumée aux saveurs variées.",
	},

	// Boissons alcoolisées
	{
		name: "Vin rouge",
		category: "Boissons alcoolisées",
		description: "Vin classique pour accompagner les viandes et fromages.",
	},
	{
		name: "Vin blanc sec",
		category: "Boissons alcoolisées",
		description: "Vin frais et léger, parfait pour les fruits de mer.",
	},
	{
		name: "Vin rosé",
		category: "Boissons alcoolisées",
		description: "Vin rafraîchissant pour les repas d'été.",
	},
	{
		name: "Champagne brut",
		category: "Boissons alcoolisées",
		description: "Vin mousseux pour les occasions spéciales.",
	},
	{
		name: "Bière blonde",
		category: "Boissons alcoolisées",
		description: "Bière légère et rafraîchissante.",
	},
	{
		name: "Bière ambrée",
		category: "Boissons alcoolisées",
		description: "Bière au goût légèrement caramélisé.",
	},
	{
		name: "Bière brune",
		category: "Boissons alcoolisées",
		description: "Bière au goût intense et malté.",
	},
	{
		name: "Whisky écossais",
		category: "Boissons alcoolisées",
		description: "Spiritueux à base de céréales, vieilli en fût.",
	},
	{
		name: "Rhum blanc",
		category: "Boissons alcoolisées",
		description: "Alcool doux utilisé dans les cocktails.",
	},
	{
		name: "Rhum ambré",
		category: "Boissons alcoolisées",
		description: "Alcool aux saveurs riches et épicées.",
	},
	{
		name: "Tequila",
		category: "Boissons alcoolisées",
		description: "Alcool mexicain souvent utilisé dans les margaritas.",
	},
	{
		name: "Vodka",
		category: "Boissons alcoolisées",
		description: "Spiritueux neutre, base de nombreux cocktails.",
	},
	{
		name: "Gin",
		category: "Boissons alcoolisées",
		description:
			"Alcool parfumé aux baies de genièvre, parfait pour le gin-tonic.",
	},
	{
		name: "Liqueur de café",
		category: "Boissons alcoolisées",
		description: "Alcool sucré et aromatique pour les desserts et cocktails.",
	},
	{
		name: "Cognac",
		category: "Boissons alcoolisées",
		description: "Alcool raffiné produit en France.",
	},
	{
		name: "Armagnac",
		category: "Boissons alcoolisées",
		description: "Spiritueux français avec des notes boisées.",
	},
	{
		name: "Vermouth",
		category: "Boissons alcoolisées",
		description: "Vin aromatisé utilisé comme apéritif ou en cocktail.",
	},
	{
		name: "Cidre brut",
		category: "Boissons alcoolisées",
		description: "Boisson pétillante à base de pommes.",
	},
	{
		name: "Liqueur de fruits rouges",
		category: "Boissons alcoolisées",
		description: "Alcool sucré au goût de fruits.",
	},
	{
		name: "Limoncello",
		category: "Boissons alcoolisées",
		description: "Liqueur italienne au citron, servie bien fraîche.",
	},
	{
		name: "Saké",
		category: "Boissons alcoolisées",
		description: "Boisson alcoolisée japonaise à base de riz.",
	},
	{
		name: "Amaretto",
		category: "Boissons alcoolisées",
		description: "Liqueur italienne douce avec un goût d'amande.",
	},
	{
		name: "Triple sec",
		category: "Boissons alcoolisées",
		description: "Liqueur d'agrumes utilisée dans les cocktails.",
	},
	{
		name: "Porto rouge",
		category: "Boissons alcoolisées",
		description: "Vin fortifié portugais au goût doux et sucré.",
	},
	{
		name: "Sherry",
		category: "Boissons alcoolisées",
		description: "Vin fortifié espagnol aux arômes complexes.",
	},
	{
		name: "Crème de cassis",
		category: "Boissons alcoolisées",
		description: "Liqueur de cassis utilisée pour le kir.",
	},
	{
		name: "Absinthe",
		category: "Boissons alcoolisées",
		description: "Spiritueux à base de plantes, au goût intense.",
	},
	{
		name: "Pastis",
		category: "Boissons alcoolisées",
		description: "Apéritif anisé traditionnel du sud de la France.",
	},
	{
		name: "Mezcal",
		category: "Boissons alcoolisées",
		description: "Alcool mexicain artisanal à base d’agave.",
	},
	{
		name: "Calvados",
		category: "Boissons alcoolisées",
		description: "Eau-de-vie de pommes produite en Normandie.",
	},

	// Produits apéritifs
	{
		name: "Chips nature",
		category: "Produits apéritifs",
		description: "Chips croustillantes légèrement salées.",
	},
	{
		name: "Chips barbecue",
		category: "Produits apéritifs",
		description: "Chips au goût fumé et savoureux.",
	},
	{
		name: "Chips ondulées",
		category: "Produits apéritifs",
		description: "Chips épaisses avec une texture croustillante.",
	},
	{
		name: "Cacahuètes salées",
		category: "Produits apéritifs",
		description: "Snack classique riche en protéines.",
	},
	{
		name: "Produits apéritif",
		category: "Produits apéritifs",
		description: "Assortiment de fruits secs et de noix salées.",
	},
	{
		name: "Biscuits salés au fromage",
		category: "Produits apéritifs",
		description: "Petits biscuits croquants au goût de fromage.",
	},
	{
		name: "Olives vertes dénoyautées",
		category: "Produits apéritifs",
		description: "Olives savoureuses prêtes à déguster.",
	},
	{
		name: "Olives noires",
		category: "Produits apéritifs",
		description: "Olives au goût riche et intense.",
	},
	{
		name: "Gressins",
		category: "Produits apéritifs",
		description: "Bâtonnets de pain italiens croustillants.",
	},
	{
		name: "Mini bretzels",
		category: "Produits apéritifs",
		description: "Biscuits salés en forme de bretzels.",
	},
	{
		name: "Crackers au sésame",
		category: "Produits apéritifs",
		description: "Biscuits croquants parsemés de graines de sésame.",
	},
	{
		name: "Pistaches salées",
		category: "Produits apéritifs",
		description: "Noix croquantes à la coquille craquante.",
	},
	{
		name: "Noix de cajou grillées",
		category: "Produits apéritifs",
		description: "Noix sucrées et salées pour grignoter.",
	},
	{
		name: "Tortilla chips",
		category: "Produits apéritifs",
		description: "Chips de maïs croustillantes, parfaites avec du guacamole.",
	},
	{
		name: "Popcorn salé",
		category: "Produits apéritifs",
		description: "Maïs soufflé léger et croustillant.",
	},
	{
		name: "Taralli",
		category: "Produits apéritifs",
		description: "Snack italien croquant et aromatisé.",
	},
	{
		name: "Bouchées feuilletées au fromage",
		category: "Produits apéritifs",
		description: "Apéritifs légers et fondants.",
	},
	{
		name: "Mini pizzas apéritives",
		category: "Produits apéritifs",
		description: "Petites pizzas garnies à partager.",
	},
	{
		name: "Chorizo tranché",
		category: "Produits apéritifs",
		description: "Charcuterie épicée pour accompagner un verre.",
	},
	{
		name: "Tapenade d'olives noires",
		category: "Produits apéritifs",
		description: "Purée d'olives savoureuse à tartiner.",
	},
	{
		name: "Houmous",
		category: "Produits apéritifs",
		description: "Purée de pois chiches parfumée au tahini.",
	},
	{
		name: "Guacamole",
		category: "Produits apéritifs",
		description: "Préparation à base d'avocats, idéale avec des chips.",
	},
	{
		name: "Fromage à tartiner",
		category: "Produits apéritifs",
		description: "Crème de fromage parfaite pour les toasts.",
	},
	{
		name: "Mini feuilletés à la saucisse",
		category: "Produits apéritifs",
		description: "En-cas croustillants pour les soirées.",
	},
	{
		name: "Billes de mozzarella",
		category: "Produits apéritifs",
		description:
			"Petites boules de fromage frais, idéales pour les brochettes.",
	},
	{
		name: "Cornichons",
		category: "Produits apéritifs",
		description: "Petits légumes marinés au goût acidulé.",
	},
	{
		name: "Cœurs d'artichauts marinés",
		category: "Produits apéritifs",
		description: "Légumes tendres et savoureux.",
	},
	{
		name: "Sablés salés",
		category: "Produits apéritifs",
		description: "Petits biscuits au beurre et au fromage.",
	},
	{
		name: "Mix asiatique",
		category: "Produits apéritifs",
		description: "Assortiment de snacks croustillants d'inspiration asiatique.",
	},
	// Condiments
	{
		name: "Moutarde de Dijon",
		category: "Condiments",
		description: "Condiment classique pour accompagner viandes et sandwiches.",
	},
	{
		name: "Moutarde à l'ancienne",
		category: "Condiments",
		description: "Moutarde granuleuse pour une saveur authentique.",
	},
	{
		name: "Ketchup",
		category: "Condiments",
		description: "Sauce sucrée à base de tomates, idéale avec des frites.",
	},
	{
		name: "Mayonnaise",
		category: "Condiments",
		description: "Sauce crémeuse pour accompagner ou garnir vos plats.",
	},
	{
		name: "Sauce barbecue",
		category: "Condiments",
		description: "Sauce épaisse et sucrée pour les grillades.",
	},
	{
		name: "Sauce soja",
		category: "Condiments",
		description: "Condiment salé utilisé dans la cuisine asiatique.",
	},
	{
		name: "Sauce Worcestershire",
		category: "Condiments",
		description: "Sauce anglaise légèrement épicée pour relever les plats.",
	},
	{
		name: "Vinaigrette allégée",
		category: "Condiments",
		description: "Sauce légère pour les salades.",
	},
	{
		name: "Pesto",
		category: "Condiments",
		description: "Sauce italienne à base de basilic, pignons et fromage.",
	},
	{
		name: "Tapenade d'olives vertes",
		category: "Condiments",
		description: "Purée d'olives idéale pour les toasts.",
	},
	{
		name: "Sauce au poivre",
		category: "Condiments",
		description: "Sauce crémeuse au goût relevé, idéale avec les viandes.",
	},
	{
		name: "Sauce béarnaise",
		category: "Condiments",
		description: "Sauce onctueuse aux herbes pour accompagner les viandes.",
	},
	{
		name: "Sauce tartare",
		category: "Condiments",
		description: "Sauce épaisse à base de câpres et cornichons.",
	},
	{
		name: "Raifort",
		category: "Condiments",
		description: "Condiment piquant utilisé avec les viandes fumées.",
	},
	{
		name: "Sauce aigre-douce",
		category: "Condiments",
		description: "Sauce sucrée et acidulée pour les plats asiatiques.",
	},
	{
		name: "Ajvar",
		category: "Condiments",
		description: "Pâte de poivrons rouges typique des Balkans.",
	},
	{
		name: "Chutney de mangue",
		category: "Condiments",
		description: "Condiment sucré et épicé, idéal pour les plats indiens.",
	},
	{
		name: "Sauce au curry",
		category: "Condiments",
		description: "Sauce épicée pour relever vos recettes.",
	},
	{
		name: "Relish de cornichons",
		category: "Condiments",
		description: "Condiment sucré et croquant pour garnir vos hot-dogs.",
	},
	{
		name: "Sauce pimentée",
		category: "Condiments",
		description: "Sauce épicée pour relever vos plats.",
	},
	{
		name: "Sauce sriracha",
		category: "Condiments",
		description: "Sauce pimentée asiatique au goût légèrement sucré.",
	},
	{
		name: "Sauce tahini",
		category: "Condiments",
		description: "Pâte de sésame utilisée dans les plats du Moyen-Orient.",
	},
	{
		name: "Sauce satay",
		category: "Condiments",
		description: "Sauce à base de cacahuètes pour les brochettes asiatiques.",
	},
	{
		name: "Beurre d'arachide",
		category: "Condiments",
		description: "Pâte sucrée-salée idéale à tartiner ou pour les desserts.",
	},
	{
		name: "Confiture d'oignons",
		category: "Condiments",
		description: "Condiment sucré et caramélisé, parfait pour les burgers.",
	},
	{
		name: "Cornichons sucrés",
		category: "Condiments",
		description: "Petits cornichons marinés au goût sucré.",
	},
	{
		name: "Sauce salsa",
		category: "Condiments",
		description: "Sauce tomate épicée pour accompagner les tortillas.",
	},
	{
		name: "Sauce fromage",
		category: "Condiments",
		description: "Sauce crémeuse au goût de fromage fondu.",
	},
	{
		name: "Harissa",
		category: "Condiments",
		description: "Pâte de piment tunisienne pour relever les plats.",
	},
	{
		name: "Wasabi",
		category: "Condiments",
		description:
			"Condiment japonais très piquant, souvent servi avec des sushis.",
	},
	// Confiserie
	{
		name: "Caramels mous",
		category: "Confiseries",
		description: "Confiseries tendres et sucrées au goût de caramel.",
	},
	{
		name: "Bonbons gélifiés",
		category: "Confiseries",
		description: "Bonbons colorés et fruités en forme amusante.",
	},
	{
		name: "Réglisse",
		category: "Confiseries",
		description: "Bâtonnets noirs au goût unique et intense.",
	},
	{
		name: "Sucettes",
		category: "Confiseries",
		description: "Confiseries sucrées sur bâtonnet pour les enfants.",
	},
	{
		name: "Dragées",
		category: "Confiseries",
		description: "Bonbons durs avec une amande à l'intérieur.",
	},
	{
		name: "Bonbons acidulés",
		category: "Confiseries",
		description: "Confiseries au goût sucré et piquant.",
	},
	{
		name: "Berlingots",
		category: "Confiseries",
		description: "Petits bonbons durs aux arômes variés.",
	},
	{
		name: "Pastilles à la menthe",
		category: "Confiseries",
		description: "Petits bonbons rafraîchissants à la menthe.",
	},
	{
		name: "Chiclets",
		category: "Confiseries",
		description: "Petits chewing-gums enrobés de sucre.",
	},
	{
		name: "Nougat tendre",
		category: "Confiseries",
		description: "Confiserie douce à base de miel et d'amandes.",
	},
	{
		name: "Guimauves",
		category: "Confiseries",
		description: "Confiseries moelleuses et sucrées, idéales grillées.",
	},
	{
		name: "Meringues",
		category: "Confiseries",
		description: "Confiseries légères à base de blancs d'œufs et de sucre.",
	},
	{
		name: "Pralines",
		category: "Confiseries",
		description: "Amandes ou noisettes enrobées de sucre caramélisé.",
	},
	{
		name: "Fruits confits",
		category: "Confiseries",
		description: "Fruits sucrés et séchés pour les desserts ou à grignoter.",
	},
	{
		name: "Bonbons au miel",
		category: "Confiseries",
		description: "Confiseries naturelles au goût doux et sucré.",
	},
	{
		name: "Barres de réglisse",
		category: "Confiseries",
		description: "Barres sucrées au goût de réglisse.",
	},
	{
		name: "Bonbons fourrés",
		category: "Confiseries",
		description: "Bonbons durs avec un cœur fondant.",
	},
	{
		name: "Pastilles fruitées",
		category: "Confiseries",
		description: "Bonbons petits et colorés aux saveurs de fruits.",
	},
	{
		name: "Toffee",
		category: "Confiseries",
		description: "Confiserie tendre et collante au goût de caramel.",
	},
	{
		name: "Bonbons au cola",
		category: "Confiseries",
		description: "Confiseries au goût sucré et pétillant.",
	},
	{
		name: "Pâtes de fruits",
		category: "Confiseries",
		description: "Confiseries moelleuses aux saveurs intenses de fruits.",
	},
	{
		name: "Bonbons au chocolat",
		category: "Confiseries",
		description: "Confiseries enrobées de chocolat fondant.",
	},
	{
		name: "Bonbons au caramel",
		category: "Confiseries",
		description: "Confiseries douces et crémeuses.",
	},
	{
		name: "Sucres d'orge",
		category: "Confiseries",
		description: "Bonbons durs en forme de cannes, sucrés et colorés.",
	},
	{
		name: "Bonbons sans sucre",
		category: "Confiseries",
		description: "Confiseries adaptées aux régimes sans sucre.",
	},
	{
		name: "Truffes au chocolat",
		category: "Confiseries",
		description: "Confiseries au chocolat fondant et intense.",
	},
	{
		name: "Bonbons mentholés",
		category: "Confiseries",
		description: "Confiseries rafraîchissantes au goût intense.",
	},
	{
		name: "Fudge",
		category: "Confiseries",
		description: "Confiserie crémeuse à base de lait et de sucre.",
	},
	{
		name: "Nougats glacés",
		category: "Confiseries",
		description: "Variantes sucrées et croquantes du nougat classique.",
	},
	{
		name: "Sucettes acidulées",
		category: "Confiseries",
		description: "Confiseries sur bâtonnet avec une saveur piquante.",
	},
	// Biscuits sucrés
	{
		name: "Cookies aux pépites de chocolat",
		category: "Biscuits sucrés",
		description: "Biscuits moelleux avec des morceaux de chocolat fondant.",
	},
	{
		name: "Madeleines",
		category: "Biscuits sucrés",
		description: "Petits gâteaux moelleux en forme de coquille.",
	},
	{
		name: "Sablés au beurre",
		category: "Biscuits sucrés",
		description: "Biscuits croustillants à base de beurre.",
	},
	{
		name: "Palets bretons",
		category: "Biscuits sucrés",
		description: "Biscuits épais et fondants au beurre salé.",
	},
	{
		name: "Galettes bretonnes",
		category: "Biscuits sucrés",
		description: "Biscuits croquants et dorés au beurre.",
	},
	{
		name: "Biscuits au citron",
		category: "Biscuits sucrés",
		description: "Biscuits croquants au goût acidulé.",
	},
	{
		name: "Macarons à la noix de coco",
		category: "Biscuits sucrés",
		description: "Petits gâteaux sucrés au goût exotique.",
	},
	{
		name: "Biscuits aux amandes",
		category: "Biscuits sucrés",
		description: "Biscuits croquants avec des éclats d’amandes.",
	},
	{
		name: "Boudoirs",
		category: "Biscuits sucrés",
		description: "Biscuits légers et sucrés, parfaits pour les tiramisus.",
	},
	{
		name: "Biscottes",
		category: "Biscuits sucrés",
		description: "Biscuits légers et croquants pour le petit-déjeuner.",
	},
	{
		name: "Pains d'épices",
		category: "Biscuits sucrés",
		description: "Gâteaux parfumés aux épices chaudes comme la cannelle.",
	},
	{
		name: "Biscuits fourrés à la confiture",
		category: "Biscuits sucrés",
		description: "Biscuits avec un cœur de confiture sucrée.",
	},
	{
		name: "Biscuits au chocolat",
		category: "Biscuits sucrés",
		description: "Biscuits croquants enrobés ou garnis de chocolat.",
	},
	{
		name: "Biscuits aux noisettes",
		category: "Biscuits sucrés",
		description: "Petits gâteaux croquants et parfumés aux noisettes.",
	},
	{
		name: "Biscuits à la cannelle",
		category: "Biscuits sucrés",
		description: "Biscuits épicés et légèrement sucrés.",
	},
	{
		name: "Langues de chat",
		category: "Biscuits sucrés",
		description: "Biscuits fins et légers parfaits avec un thé ou un café.",
	},
	{
		name: "Speculoos",
		category: "Biscuits sucrés",
		description: "Biscuits belges croustillants et épicés.",
	},
	{
		name: "Shortbread",
		category: "Biscuits sucrés",
		description: "Biscuits écossais riches en beurre.",
	},
	{
		name: "Biscuits fourrés au chocolat",
		category: "Biscuits sucrés",
		description: "Biscuits croquants avec une garniture fondante au chocolat.",
	},
	{
		name: "Rosettes de Savoie",
		category: "Biscuits sucrés",
		description: "Biscuits légers en forme de rosettes.",
	},
	{
		name: "Biscuits viennois",
		category: "Biscuits sucrés",
		description: "Biscuits délicats avec un goût de vanille.",
	},
	{
		name: "Petits-beurre",
		category: "Biscuits sucrés",
		description: "Biscuits classiques au goût de beurre.",
	},
	{
		name: "Biscuits au caramel",
		category: "Biscuits sucrés",
		description: "Biscuits croquants avec une touche de caramel.",
	},
	{
		name: "Biscuits aux fruits secs",
		category: "Biscuits sucrés",
		description: "Biscuits garnis de raisins secs ou d’abricots.",
	},
	{
		name: "Biscuits glacés",
		category: "Biscuits sucrés",
		description: "Biscuits décorés avec un glaçage sucré.",
	},
	{
		name: "Biscuits à l'avoine",
		category: "Biscuits sucrés",
		description: "Biscuits riches en fibres, parfaits pour le petit-déjeuner.",
	},
	{
		name: "Biscuits fourrés à la crème",
		category: "Biscuits sucrés",
		description: "Biscuits croquants avec une garniture douce et crémeuse.",
	},
	{
		name: "Biscuits roulés",
		category: "Biscuits sucrés",
		description: "Biscuits enroulés autour d'une garniture sucrée.",
	},
	{
		name: "Tuiles aux amandes",
		category: "Biscuits sucrés",
		description: "Biscuits légers et croquants aux amandes effilées.",
	},
	{
		name: "Cookies vegan",
		category: "Biscuits sucrés",
		description: "Biscuits sans produits animaux, souvent aux fruits secs.",
	},
	// Biscuits salés
	{
		name: "Crackers nature",
		category: "Biscuits salés",
		description: "Biscuits croquants parfaits pour accompagner les fromages.",
	},
	{
		name: "Crackers au fromage",
		category: "Biscuits salés",
		description: "Biscuits savoureux avec un goût intense de fromage.",
	},
	{
		name: "Mini toasts",
		category: "Biscuits salés",
		description: "Petits toasts croustillants pour les apéritifs.",
	},
	{
		name: "Gressins au sésame",
		category: "Biscuits salés",
		description: "Bâtonnets de pain parsemés de graines de sésame.",
	},
	{
		name: "Bretzels salés",
		category: "Biscuits salés",
		description: "Petits biscuits en forme de bretzels, légèrement salés.",
	},
	{
		name: "Sablés au parmesan",
		category: "Biscuits salés",
		description: "Biscuits fondants et riches en parmesan.",
	},
	{
		name: "Crackers aux graines",
		category: "Biscuits salés",
		description: "Biscuits croquants avec des graines de lin et de tournesol.",
	},
	{
		name: "Feuilletés au jambon",
		category: "Biscuits salés",
		description: "Bouchées croustillantes garnies de jambon.",
	},
	{
		name: "Crackers aux herbes",
		category: "Biscuits salés",
		description: "Biscuits assaisonnés de thym et de romarin.",
	},
	{
		name: "Tuiles salées",
		category: "Biscuits salés",
		description: "Biscuits légers et croquants, parfaits pour les apéritifs.",
	},
	{
		name: "Bâtonnets apéritifs",
		category: "Biscuits salés",
		description: "Petits bâtonnets croustillants et légèrement salés.",
	},
	{
		name: "Mini feuilletés à la tapenade",
		category: "Biscuits salés",
		description: "Biscuits garnis de tapenade d'olives noires.",
	},
	{
		name: "Crackers au romarin",
		category: "Biscuits salés",
		description: "Biscuits savoureux au goût d’herbes méditerranéennes.",
	},
	{
		name: "Biscuits au cheddar",
		category: "Biscuits salés",
		description: "Petits biscuits salés au goût de cheddar fondu.",
	},
	{
		name: "Sablés au sel de mer",
		category: "Biscuits salés",
		description: "Biscuits croquants au goût légèrement salé.",
	},
	{
		name: "Biscuits aux olives",
		category: "Biscuits salés",
		description: "Biscuits garnis de morceaux d'olives.",
	},
	{
		name: "Feuilletés au saumon",
		category: "Biscuits salés",
		description: "Petites bouchées garnies de saumon fumé.",
	},
	{
		name: "Biscuits au cumin",
		category: "Biscuits salés",
		description: "Biscuits assaisonnés d'épices pour un goût relevé.",
	},
	{
		name: "Crackers tricolores",
		category: "Biscuits salés",
		description: "Biscuits colorés à base de légumes déshydratés.",
	},
	{
		name: "Galettes de riz salées",
		category: "Biscuits salés",
		description: "Biscuits légers et croustillants, idéaux pour un encas.",
	},
	{
		name: "Mini croissants salés",
		category: "Biscuits salés",
		description: "Petits croissants feuilletés pour l’apéritif.",
	},
	{
		name: "Biscuits au piment d’Espelette",
		category: "Biscuits salés",
		description: "Biscuits relevés avec une pointe de piment.",
	},
	{
		name: "Crackers aux épinards",
		category: "Biscuits salés",
		description: "Biscuits salés avec une touche végétale.",
	},
	{
		name: "Crackers au maïs",
		category: "Biscuits salés",
		description: "Biscuits légers avec un goût subtil de maïs.",
	},
	{
		name: "Torsades feuilletées au fromage",
		category: "Biscuits salés",
		description: "Biscuits torsadés au goût riche et croustillant.",
	},
	{
		name: "Mini galettes de sarrasin",
		category: "Biscuits salés",
		description: "Bouchées croquantes à base de farine de sarrasin.",
	},
	{
		name: "Feuilletés aux herbes de Provence",
		category: "Biscuits salés",
		description: "Petites bouchées croustillantes parfumées aux herbes.",
	},
	{
		name: "Biscuits aux noix et au sel",
		category: "Biscuits salés",
		description: "Biscuits salés au goût intense de noix.",
	},
	{
		name: "Biscuits au paprika",
		category: "Biscuits salés",
		description: "Biscuits assaisonnés avec une touche épicée.",
	},
	{
		name: "Biscuits au sarrasin",
		category: "Biscuits salés",
		description: "Biscuits croquants avec un goût rustique.",
	},
	// Produits sans gluten
	{
		name: "Pain sans gluten",
		category: "Produits sans gluten",
		description: "Pain moelleux adapté aux régimes sans gluten.",
	},
	{
		name: "Farine de riz",
		category: "Produits sans gluten",
		description: "Farine légère idéale pour les pâtisseries sans gluten.",
	},
	{
		name: "Pâtes sans gluten",
		category: "Produits sans gluten",
		description: "Pâtes fabriquées à base de maïs ou de riz.",
	},
	{
		name: "Céréales pour petit-déjeuner sans gluten",
		category: "Produits sans gluten",
		description: "Céréales croquantes adaptées aux régimes spécifiques.",
	},
	{
		name: "Galettes de riz",
		category: "Produits sans gluten",
		description: "En-cas léger et croustillant.",
	},
	{
		name: "Biscuits sans gluten",
		category: "Produits sans gluten",
		description: "Biscuits adaptés pour une consommation sans gluten.",
	},
	{
		name: "Pain de mie sans gluten",
		category: "Produits sans gluten",
		description: "Pain tranché parfait pour les sandwichs.",
	},
	{
		name: "Gâteaux sans gluten",
		category: "Produits sans gluten",
		description: "Desserts légers et savoureux sans farine de blé.",
	},
	{
		name: "Crackers sans gluten",
		category: "Produits sans gluten",
		description: "Biscuits salés croustillants et adaptés.",
	},
	{
		name: "Farine de sarrasin",
		category: "Produits sans gluten",
		description: "Farine au goût rustique pour les crêpes et pains.",
	},
	{
		name: "Farine de maïs",
		category: "Produits sans gluten",
		description: "Ingrédient polyvalent pour les pâtisseries et sauces.",
	},
	{
		name: "Mélange de farines sans gluten",
		category: "Produits sans gluten",
		description: "Mélange prêt à l'emploi pour la pâtisserie.",
	},
	{
		name: "Pains burger sans gluten",
		category: "Produits sans gluten",
		description: "Pain moelleux pour les hamburgers.",
	},
	{
		name: "Pizza sans gluten",
		category: "Produits sans gluten",
		description: "Pizza prête à cuire avec une pâte adaptée.",
	},
	{
		name: "Cookies sans gluten",
		category: "Produits sans gluten",
		description: "Biscuits sucrés parfaits pour le goûter.",
	},
	{
		name: "Chapelure sans gluten",
		category: "Produits sans gluten",
		description: "Ingrédient pour paner vos plats.",
	},
	{
		name: "Blini sans gluten",
		category: "Produits sans gluten",
		description: "Petits pancakes légers pour l’apéritif.",
	},
	{
		name: "Cakes salés sans gluten",
		category: "Produits sans gluten",
		description: "En-cas savoureux adaptés à tous les régimes.",
	},
	{
		name: "Madeleines sans gluten",
		category: "Produits sans gluten",
		description: "Petits gâteaux moelleux pour le dessert ou le goûter.",
	},
	{
		name: "Pain d'épices sans gluten",
		category: "Produits sans gluten",
		description: "Gâteau sucré et parfumé aux épices.",
	},
	{
		name: "Bière sans gluten",
		category: "Produits sans gluten",
		description: "Bière légère et savoureuse adaptée aux régimes sans gluten.",
	},
	{
		name: "Granola sans gluten",
		category: "Produits sans gluten",
		description: "Mélange croquant de céréales pour le petit-déjeuner.",
	},
	{
		name: "Gaufres sans gluten",
		category: "Produits sans gluten",
		description: "Desserts légers pour les gourmands.",
	},
	{
		name: "Tartes salées sans gluten",
		category: "Produits sans gluten",
		description: "Pâtisseries adaptées pour des repas sans gluten.",
	},
	{
		name: "Pancakes sans gluten",
		category: "Produits sans gluten",
		description: "Pancakes moelleux pour le petit-déjeuner.",
	},
	{
		name: "Crêpes sans gluten",
		category: "Produits sans gluten",
		description: "Pâte fine et légère pour les desserts et plats.",
	},
	{
		name: "Bagels sans gluten",
		category: "Produits sans gluten",
		description: "Pain rond adapté pour les sandwichs.",
	},
	{
		name: "Tortillas sans gluten",
		category: "Produits sans gluten",
		description: "Galettes souples parfaites pour les wraps.",
	},
	{
		name: "Chips sans gluten",
		category: "Produits sans gluten",
		description: "En-cas croquant fabriqué avec des ingrédients adaptés.",
	},
	{
		name: "Muffins sans gluten",
		category: "Produits sans gluten",
		description: "Petits gâteaux individuels légers et savoureux.",
	},
	// Produits vegetarien
	{
		name: "Steaks de légumes",
		category: "Produits végétariens",
		description: "Galettes à base de légumes et de céréales, riches en fibres.",
	},
	{
		name: "Tofu nature",
		category: "Produits végétariens",
		description: "Source de protéines végétales neutres en goût.",
	},
	{
		name: "Tofu fumé",
		category: "Produits végétariens",
		description: "Tofu avec une saveur fumée, parfait pour les plats chauds.",
	},
	{
		name: "Tempeh",
		category: "Produits végétariens",
		description: "Produit à base de soja fermenté, riche en protéines.",
	},
	{
		name: "Burgers végétariens",
		category: "Produits végétariens",
		description: "Galettes prêtes à cuire, à base de légumes ou légumineuses.",
	},
	{
		name: "Fromage végétarien",
		category: "Produits végétariens",
		description: "Alternative au fromage traditionnel, sans présure animale.",
	},
	{
		name: "Protéines de soja texturées",
		category: "Produits végétariens",
		description: "Substitut de viande, parfait pour les plats mijotés.",
	},
	{
		name: "Nuggets végétariens",
		category: "Produits végétariens",
		description: "Bouchées croustillantes à base de protéines végétales.",
	},
	{
		name: "Lait d’amande",
		category: "Produits végétariens",
		description: "Alternative végétale au lait, douce et légère.",
	},
	{
		name: "Lait de soja",
		category: "Produits végétariens",
		description: "Boisson végétale riche en protéines.",
	},
	{
		name: "Seitan",
		category: "Produits végétariens",
		description: "Alternative riche en protéines fabriquée à base de gluten.",
	},
	{
		name: "Charcuterie végétarienne",
		category: "Produits végétariens",
		description: "Tranches végétales pour sandwichs et apéritifs.",
	},
	{
		name: "Falafels",
		category: "Produits végétariens",
		description:
			"Boulettes de pois chiches épicées, parfaites en wrap ou salade.",
	},
	{
		name: "Fromage frais végétarien",
		category: "Produits végétariens",
		description: "Alternative au fromage tartinable traditionnel.",
	},
	{
		name: "Houmous nature",
		category: "Produits végétariens",
		description: "Purée de pois chiches crémeuse et savoureuse.",
	},
	{
		name: "Tartinades de légumes",
		category: "Produits végétariens",
		description: "Pâtes à tartiner à base de légumes variés.",
	},
	{
		name: "Galettes de pois chiches",
		category: "Produits végétariens",
		description: "Galettes riches en protéines et en saveurs.",
	},
	{
		name: "Raviolis végétariens",
		category: "Produits végétariens",
		description: "Pâtes fraîches garnies de légumes et fromages.",
	},
	{
		name: "Pâtés végétaux",
		category: "Produits végétariens",
		description:
			"Alternatives aux terrines, à base de légumes ou légumineuses.",
	},
	{
		name: "Bâtonnets de légumes",
		category: "Produits végétariens",
		description: "Snack croquant et léger pour les apéritifs.",
	},
	{
		name: "Chili végétarien",
		category: "Produits végétariens",
		description: "Plat préparé à base de haricots rouges et épices.",
	},
	{
		name: "Tartes aux légumes",
		category: "Produits végétariens",
		description: "Pâtisseries salées riches en légumes.",
	},
	{
		name: "Lasagnes végétariennes",
		category: "Produits végétariens",
		description:
			"Plat italien sans viande, garni de légumes et de sauce tomate.",
	},
	{
		name: "Quiches végétariennes",
		category: "Produits végétariens",
		description: "Tartes salées aux légumes et fromages.",
	},
	{
		name: "Fromage râpé végétarien",
		category: "Produits végétariens",
		description: "Alternative au fromage râpé classique, sans présure animale.",
	},
	{
		name: "Bolognaise végétarienne",
		category: "Produits végétariens",
		description: "Sauce tomate enrichie de protéines végétales.",
	},
	{
		name: "Curry végétarien",
		category: "Produits végétariens",
		description: "Mélange épicé de légumes et légumineuses.",
	},
	{
		name: "Crêpes aux légumes",
		category: "Produits végétariens",
		description: "Pâte fine garnie de légumes variés.",
	},
	{
		name: "Pizza végétarienne",
		category: "Produits végétariens",
		description: "Pizza garnie de légumes et de fromage.",
	},
	{
		name: "Pains pita végétariens",
		category: "Produits végétariens",
		description: "Sandwichs garnis d’ingrédients végétariens.",
	},
	// Produits végétaliens
	{
		name: "Lait d'avoine",
		category: "Produits végétaliens",
		description: "Boisson végétale douce et crémeuse, parfaite pour les cafés.",
	},
	{
		name: "Lait de noisette",
		category: "Produits végétaliens",
		description: "Alternative végétale au lait, avec un goût de noisette.",
	},
	{
		name: "Fromage végétalien râpé",
		category: "Produits végétaliens",
		description:
			"Alternative au fromage râpé, sans ingrédients d'origine animale.",
	},
	{
		name: "Crème végétale à base de soja",
		category: "Produits végétaliens",
		description: "Crème légère et onctueuse pour cuisiner ou accompagner.",
	},
	{
		name: "Tofu soyeux",
		category: "Produits végétaliens",
		description: "Tofu doux idéal pour les desserts et sauces.",
	},
	{
		name: "Beurre végétal",
		category: "Produits végétaliens",
		description: "Alternative au beurre classique, sans produits animaux.",
	},
	{
		name: "Yaourt au soja nature",
		category: "Produits végétaliens",
		description:
			"Alternative au yaourt classique, riche en protéines végétales.",
	},
	{
		name: "Yaourt à la noix de coco",
		category: "Produits végétaliens",
		description: "Dessert végétalien à base de lait de coco.",
	},
	{
		name: "Protéines de pois",
		category: "Produits végétaliens",
		description: "Substitut de viande, riche en protéines végétales.",
	},
	{
		name: "Nuggets végétaliens",
		category: "Produits végétaliens",
		description: "En-cas croustillant à base de plantes.",
	},
	{
		name: "Steaks végétaliens",
		category: "Produits végétaliens",
		description: "Galettes à base de protéines végétales et légumes.",
	},
	{
		name: "Mayonnaise végétalienne",
		category: "Produits végétaliens",
		description: "Sauce crémeuse sans œufs, idéale pour accompagner vos plats.",
	},
	{
		name: "Charcuterie végétalienne",
		category: "Produits végétaliens",
		description: "Alternatives végétales aux tranches de jambon et saucissons.",
	},
	{
		name: "Crème glacée végétalienne",
		category: "Produits végétaliens",
		description: "Glace sans produits laitiers, à base de lait végétal.",
	},
	{
		name: "Pâte à tartiner végétalienne",
		category: "Produits végétaliens",
		description: "Alternative sucrée et sans lactose pour les desserts.",
	},
	{
		name: "Burger végétalien",
		category: "Produits végétaliens",
		description: "Galette végétale savoureuse, parfaite pour les sandwiches.",
	},
	{
		name: "Légumes grillés surgelés",
		category: "Produits végétaliens",
		description: "Mélange de légumes prêts à cuisiner, 100% végétal.",
	},
	{
		name: "Sauce bolognaise végétalienne",
		category: "Produits végétaliens",
		description: "Sauce tomate riche en protéines végétales.",
	},
	{
		name: "Falafels végétaliens",
		category: "Produits végétaliens",
		description:
			"Boulettes à base de pois chiches et épices, sans produits animaux.",
	},
	{
		name: "Tartinades végétaliennes aux légumes",
		category: "Produits végétaliens",
		description: "Pâte savoureuse pour l'apéritif, 100% végétale.",
	},
	{
		name: "Pesto végétalien",
		category: "Produits végétaliens",
		description: "Sauce italienne sans fromage, à base de basilic et de noix.",
	},
	{
		name: "Chocolat noir végétalien",
		category: "Produits végétaliens",
		description: "Chocolat intense sans produits laitiers.",
	},
	{
		name: "Crème de soja à fouetter",
		category: "Produits végétaliens",
		description: "Alternative végétale pour les desserts ou les plats.",
	},
	{
		name: "Fromage frais végétalien",
		category: "Produits végétaliens",
		description: "Alternative crémeuse pour tartiner.",
	},
	{
		name: "Tacos végétaliens",
		category: "Produits végétaliens",
		description: "Galettes garnies d'ingrédients 100% végétaux.",
	},
	{
		name: "Riz au lait végétalien",
		category: "Produits végétaliens",
		description: "Dessert à base de lait de coco ou de riz.",
	},
	{
		name: "Quiche végétalienne",
		category: "Produits végétaliens",
		description: "Tarte salée préparée sans œufs ni produits laitiers.",
	},
	{
		name: "Sauce au fromage végétalienne",
		category: "Produits végétaliens",
		description: "Sauce onctueuse et savoureuse sans produits animaux.",
	},
	{
		name: "Pizza végétalienne",
		category: "Produits végétaliens",
		description: "Pizza garnie de légumes et de fromage végétal.",
	},
	{
		name: "Glace au lait d'amande",
		category: "Produits végétaliens",
		description: "Dessert glacé doux et sans lactose.",
	},
	// Produits bio
	{
		name: "Lait biologique",
		category: "Produits biologiques",
		description: "Lait produit selon les normes de l’agriculture biologique.",
	},
	{
		name: "Œufs biologiques",
		category: "Produits biologiques",
		description:
			"Œufs issus de poules élevées en plein air et nourries biologiquement.",
	},
	{
		name: "Farine complète bio",
		category: "Produits biologiques",
		description:
			"Farine moulue à partir de grains issus de l’agriculture biologique.",
	},
	{
		name: "Miel biologique",
		category: "Produits biologiques",
		description: "Miel naturel sans additifs, produit de manière durable.",
	},
	{
		name: "Fruits frais bio",
		category: "Produits biologiques",
		description:
			"Fruits cultivés sans pesticides chimiques ni engrais de synthèse.",
	},
	{
		name: "Légumes bio",
		category: "Produits biologiques",
		description:
			"Légumes frais et de saison, issus de l'agriculture biologique.",
	},
	{
		name: "Pâtes bio",
		category: "Produits biologiques",
		description:
			"Pâtes fabriquées à partir de céréales cultivées biologiquement.",
	},
	{
		name: "Pain bio",
		category: "Produits biologiques",
		description:
			"Pain préparé avec des ingrédients issus de l'agriculture biologique.",
	},
	{
		name: "Yaourt nature bio",
		category: "Produits biologiques",
		description: "Yaourt sans sucre ajouté, fabriqué avec du lait biologique.",
	},
	{
		name: "Confiture bio",
		category: "Produits biologiques",
		description:
			"Préparation sucrée faite avec des fruits cultivés biologiquement.",
	},
	{
		name: "Riz complet bio",
		category: "Produits biologiques",
		description: "Riz nutritif et naturel, cultivé selon les normes bio.",
	},
	{
		name: "Chocolat noir bio",
		category: "Produits biologiques",
		description:
			"Chocolat intense fabriqué avec du cacao issu de l'agriculture biologique.",
	},
	{
		name: "Huile d’olive bio",
		category: "Produits biologiques",
		description: "Huile extra-vierge issue d’olives cultivées biologiquement.",
	},
	{
		name: "Céréales petit-déjeuner bio",
		category: "Produits biologiques",
		description: "Mélange de céréales croquantes sans additifs chimiques.",
	},
	{
		name: "Thé vert bio",
		category: "Produits biologiques",
		description: "Feuilles de thé cultivées selon les pratiques biologiques.",
	},
	{
		name: "Lentilles bio",
		category: "Produits biologiques",
		description:
			"Légumineuses riches en nutriments, cultivées sans pesticides.",
	},
	{
		name: "Compote bio",
		category: "Produits biologiques",
		description: "Préparation douce à base de fruits bio.",
	},
	{
		name: "Jus de pomme bio",
		category: "Produits biologiques",
		description: "Boisson rafraîchissante faite avec des pommes biologiques.",
	},
	{
		name: "Beurre bio",
		category: "Produits biologiques",
		description: "Beurre crémeux fait avec du lait biologique.",
	},
	{
		name: "Pois chiches bio",
		category: "Produits biologiques",
		description: "Légumineuses naturelles pour salades et plats mijotés.",
	},
	{
		name: "Lait d’amande bio",
		category: "Produits biologiques",
		description:
			"Alternative végétale produite à partir d’amandes biologiques.",
	},
	{
		name: "Vin rouge bio",
		category: "Produits biologiques",
		description: "Vin produit à partir de raisins cultivés biologiquement.",
	},
	{
		name: "Quinoa bio",
		category: "Produits biologiques",
		description:
			"Céréale sans gluten, riche en protéines et cultivée biologiquement.",
	},
	{
		name: "Sucres complets bio",
		category: "Produits biologiques",
		description: "Sucre brut et non raffiné pour des recettes plus naturelles.",
	},
	{
		name: "Légumes surgelés bio",
		category: "Produits biologiques",
		description: "Légumes récoltés frais et congelés rapidement.",
	},
	{
		name: "Haricots rouges bio",
		category: "Produits biologiques",
		description: "Légumineuses bio parfaites pour les chili et salades.",
	},
	{
		name: "Bouillon de légumes bio",
		category: "Produits biologiques",
		description: "Base pour les soupes et plats, sans additifs chimiques.",
	},
	{
		name: "Fromage bio",
		category: "Produits biologiques",
		description:
			"Fromage fabriqué avec du lait provenant de vaches élevées en agriculture biologique.",
	},
	{
		name: "Poisson fumé bio",
		category: "Produits biologiques",
		description: "Poisson élevé de manière durable et fumé naturellement.",
	},
	{
		name: "Sauces bio",
		category: "Produits biologiques",
		description:
			"Sauces prêtes à l'emploi fabriquées avec des ingrédients naturels.",
	},
	// Produits locaux
	{
		name: "Miel artisanal",
		category: "Produits locaux",
		description: "Miel produit par des apiculteurs locaux, 100% naturel.",
	},
	{
		name: "Lait fermier",
		category: "Produits locaux",
		description: "Lait frais et non homogénéisé provenant de fermes locales.",
	},
	{
		name: "Fromage de chèvre local",
		category: "Produits locaux",
		description: "Fromage artisanal fabriqué à partir de lait de chèvre local.",
	},
	{
		name: "Pommes locales",
		category: "Produits locaux",
		description: "Pommes fraîches et de saison, cultivées dans la région.",
	},
	{
		name: "Oeufs fermiers",
		category: "Produits locaux",
		description:
			"Œufs provenant de poules élevées en plein air dans des fermes locales.",
	},
	{
		name: "Beurre fermier",
		category: "Produits locaux",
		description: "Beurre frais fabriqué à la main avec du lait local.",
	},
	{
		name: "Pain au levain local",
		category: "Produits locaux",
		description: "Pain artisanal fabriqué à partir de levain naturel.",
	},
	{
		name: "Poisson frais local",
		category: "Produits locaux",
		description: "Poisson pêché dans les eaux locales.",
	},
	{
		name: "Viande bovine locale",
		category: "Produits locaux",
		description: "Viande de bœuf provenant d’élevages locaux.",
	},
	{
		name: "Fraises de saison",
		category: "Produits locaux",
		description: "Fraises fraîches cultivées dans des champs locaux.",
	},
	{
		name: "Châtaignes locales",
		category: "Produits locaux",
		description: "Récolte traditionnelle de châtaignes de la région.",
	},
	{
		name: "Cidre artisanal",
		category: "Produits locaux",
		description: "Boisson pétillante à base de pommes locales.",
	},
	{
		name: "Vins locaux",
		category: "Produits locaux",
		description:
			"Vins produits avec des raisins issus des vignobles régionaux.",
	},
	{
		name: "Confitures artisanales",
		category: "Produits locaux",
		description: "Confitures préparées avec des fruits frais de la région.",
	},
	{
		name: "Yaourt fermier",
		category: "Produits locaux",
		description: "Yaourt onctueux fabriqué dans des fermes locales.",
	},
	{
		name: "Charcuterie artisanale",
		category: "Produits locaux",
		description: "Saucissons et jambons préparés par des artisans locaux.",
	},
	{
		name: "Tartes aux fruits locales",
		category: "Produits locaux",
		description: "Tartes faites maison avec des ingrédients régionaux.",
	},
	{
		name: "Mûres sauvages",
		category: "Produits locaux",
		description: "Petits fruits noirs cueillis dans la nature locale.",
	},
	{
		name: "Herbes aromatiques fraîches",
		category: "Produits locaux",
		description: "Thym, romarin et autres herbes cultivées localement.",
	},
	{
		name: "Pâtes artisanales",
		category: "Produits locaux",
		description: "Pâtes fabriquées à la main par des producteurs régionaux.",
	},
	{
		name: "Tomme de montagne",
		category: "Produits locaux",
		description: "Fromage rustique fabriqué dans les alpages locaux.",
	},
	{
		name: "Jus de fruits frais",
		category: "Produits locaux",
		description: "Jus pressé à base de fruits locaux.",
	},
	{
		name: "Moutarde artisanale",
		category: "Produits locaux",
		description: "Moutarde fabriquée avec des graines locales.",
	},
	{
		name: "Pois chiches locaux",
		category: "Produits locaux",
		description: "Légumineuses cultivées dans les champs régionaux.",
	},
	{
		name: "Crème fraîche fermière",
		category: "Produits locaux",
		description: "Crème épaisse et savoureuse provenant de fermes locales.",
	},
	{
		name: "Chocolat artisanal",
		category: "Produits locaux",
		description:
			"Tablettes de chocolat fabriquées par des chocolatiers locaux.",
	},
	{
		name: "Soupe aux légumes locaux",
		category: "Produits locaux",
		description:
			"Préparation prête à l'emploi à base de légumes frais de la région.",
	},
	{
		name: "Huile de noix locale",
		category: "Produits locaux",
		description:
			"Huile extraite de noix pressées à froid par des artisans locaux.",
	},
	{
		name: "Pâtés maison",
		category: "Produits locaux",
		description: "Terrines artisanales faites avec des ingrédients locaux.",
	},
	{
		name: "Fleurs comestibles",
		category: "Produits locaux",
		description: "Fleurs fraîches et comestibles cultivées localement.",
	},
	// Charcuterie
	{
		name: "Jambon de Bayonne",
		category: "Charcuterie",
		description: "Spécialité française, jambon cru séché et légèrement salé.",
	},
	{
		name: "Saucisson sec",
		category: "Charcuterie",
		description:
			"Charcuterie traditionnelle à trancher, idéale pour l'apéritif.",
	},
	{
		name: "Chorizo doux",
		category: "Charcuterie",
		description: "Saucisson espagnol légèrement épicé.",
	},
	{
		name: "Chorizo fort",
		category: "Charcuterie",
		description: "Saucisson espagnol au goût relevé et épicé.",
	},
	{
		name: "Jambon blanc",
		category: "Charcuterie",
		description: "Jambon cuit classique, tendre et savoureux.",
	},
	{
		name: "Jambon cru",
		category: "Charcuterie",
		description:
			"Charcuterie séchée au goût intense, parfaite pour les antipasti.",
	},
	{
		name: "Rosette de Lyon",
		category: "Charcuterie",
		description: "Saucisson sec au goût subtil, originaire de Lyon.",
	},
	{
		name: "Andouille",
		category: "Charcuterie",
		description: "Saucisse fumée typique des régions françaises.",
	},
	{
		name: "Boudin blanc",
		category: "Charcuterie",
		description: "Saucisse douce et délicate, souvent servie en hiver.",
	},
	{
		name: "Boudin noir",
		category: "Charcuterie",
		description: "Saucisse préparée avec du sang et des épices.",
	},
	{
		name: "Terrine de campagne",
		category: "Charcuterie",
		description: "Préparation rustique et savoureuse à base de porc.",
	},
	{
		name: "Rillettes de porc",
		category: "Charcuterie",
		description: "Pâté effiloché riche et savoureux.",
	},
	{
		name: "Rillettes d'oie",
		category: "Charcuterie",
		description: "Spécialité délicate et onctueuse.",
	},
	{
		name: "Paté de foie",
		category: "Charcuterie",
		description: "Préparation fine et crémeuse à base de foie.",
	},
	{
		name: "Jambon Serrano",
		category: "Charcuterie",
		description: "Jambon espagnol sec, tranché finement.",
	},
	{
		name: "Viande des Grisons",
		category: "Charcuterie",
		description: "Spécialité suisse, viande de bœuf séchée et salée.",
	},
	{
		name: "Lardons fumés",
		category: "Charcuterie",
		description: "Petits morceaux de lard utilisés en cuisine.",
	},
	{
		name: "Coppa",
		category: "Charcuterie",
		description: "Charcuterie italienne séchée à base d'échine de porc.",
	},
	{
		name: "Mortadelle",
		category: "Charcuterie",
		description: "Charcuterie italienne douce avec des morceaux de pistache.",
	},
	{
		name: "Saucisse de Morteau",
		category: "Charcuterie",
		description: "Saucisse fumée au goût intense, typique de Franche-Comté.",
	},
	{
		name: "Jésus de Lyon",
		category: "Charcuterie",
		description: "Saucisson sec traditionnel, plus gros que la rosette.",
	},
	{
		name: "Jambon de Parme",
		category: "Charcuterie",
		description: "Jambon italien raffiné, vieilli naturellement.",
	},
	{
		name: "Salami",
		category: "Charcuterie",
		description: "Charcuterie italienne au goût légèrement épicé.",
	},
	{
		name: "Pastrami",
		category: "Charcuterie",
		description:
			"Viande de bœuf fumée et épicée, souvent utilisée dans les sandwichs.",
	},
	{
		name: "Rillettes de canard",
		category: "Charcuterie",
		description: "Pâté effiloché, riche en saveurs de canard.",
	},
	{
		name: "Foie gras",
		category: "Charcuterie",
		description: "Délice raffiné à base de foie de canard ou d'oie.",
	},
	{
		name: "Saucisse de Toulouse",
		category: "Charcuterie",
		description: "Saucisse fraîche parfaite pour les plats mijotés.",
	},
	{
		name: "Charcuterie Corse",
		category: "Charcuterie",
		description: "Assortiment de saucissons et jambons locaux au goût unique.",
	},
	{
		name: "Saucisson aux noix",
		category: "Charcuterie",
		description: "Saucisson sec agrémenté de morceaux de noix.",
	},
	{
		name: "Saucisson au poivre",
		category: "Charcuterie",
		description: "Charcuterie relevée d'une croûte de poivre noir.",
	},
	// Produits surgeles
	{
		name: "Frites surgelées",
		category: "Produits surgelés",
		description:
			"Pommes de terre précuites et surgelées, prêtes à frire ou au four.",
	},
	{
		name: "Poêlée de légumes",
		category: "Produits surgelés",
		description: "Mélange de légumes prêts à cuire.",
	},
	{
		name: "Pizza surgelée",
		category: "Produits surgelés",
		description: "Pizza prête à cuire avec une variété de garnitures.",
	},
	{
		name: "Petits pois surgelés",
		category: "Produits surgelés",
		description: "Légumes verts surgelés pour une cuisson rapide.",
	},
	{
		name: "Haricots verts surgelés",
		category: "Produits surgelés",
		description: "Légumes surgelés parfaits comme accompagnement.",
	},
	{
		name: "Glace vanille",
		category: "Produits surgelés",
		description: "Dessert glacé classique et crémeux.",
	},
	{
		name: "Sorbet citron",
		category: "Produits surgelés",
		description: "Glace légère et rafraîchissante au citron.",
	},
	{
		name: "Filets de poisson surgelés",
		category: "Produits surgelés",
		description: "Poisson précoupé prêt à cuire.",
	},
	{
		name: "Crevettes décortiquées surgelées",
		category: "Produits surgelés",
		description: "Fruits de mer prêts à l'emploi pour vos plats.",
	},
	{
		name: "Lasagnes surgelées",
		category: "Produits surgelés",
		description: "Plat italien prêt à réchauffer.",
	},
	{
		name: "Gnocchis aux épinards",
		category: "Produits surgelés",
		description: "Pâtes moelleuses prêtes à cuire rapidement.",
	},
	{
		name: "Mélange de fruits rouges",
		category: "Produits surgelés",
		description: "Baies surgelées parfaites pour les desserts et smoothies.",
	},
	{
		name: "Soupe de légumes surgelée",
		category: "Produits surgelés",
		description: "Préparation prête à chauffer pour un repas rapide.",
	},
	{
		name: "Quiche lorraine surgelée",
		category: "Produits surgelés",
		description: "Tarte salée prête à cuire au four.",
	},
	{
		name: "Cônes glacés chocolat-noisette",
		category: "Produits surgelés",
		description: "Glaces en cornet pour un dessert gourmand.",
	},
	{
		name: "Choux de Bruxelles surgelés",
		category: "Produits surgelés",
		description: "Légumes prêts à être cuisinés comme accompagnement.",
	},
	{
		name: "Brocolis surgelés",
		category: "Produits surgelés",
		description: "Fleurs de brocolis surgelées pour conserver leur fraîcheur.",
	},
	{
		name: "Poulet pané surgelé",
		category: "Produits surgelés",
		description: "Filets de poulet croustillants prêts à cuire.",
	},
	{
		name: "Riz cantonais surgelé",
		category: "Produits surgelés",
		description: "Plat asiatique rapide et savoureux.",
	},
	{
		name: "Galettes de pommes de terre",
		category: "Produits surgelés",
		description: "En-cas croustillant à cuire au four.",
	},
	{
		name: "Ratatouille surgelée",
		category: "Produits surgelés",
		description: "Mélange de légumes provençaux pour plats chauds.",
	},
	{
		name: "Noix de Saint-Jacques surgelées",
		category: "Produits surgelés",
		description: "Fruits de mer parfaits pour les repas gastronomiques.",
	},
	{
		name: "Chili con carne surgelé",
		category: "Produits surgelés",
		description: "Plat épicé prêt à réchauffer.",
	},
	{
		name: "Baguettes précuites surgelées",
		category: "Produits surgelés",
		description: "Pains prêts à être cuits pour un goût frais.",
	},
	{
		name: "Croissants surgelés",
		category: "Produits surgelés",
		description:
			"Viennoiseries prêtes à cuire pour des petits-déjeuners savoureux.",
	},
	{
		name: "Mini-feuilletés apéritifs",
		category: "Produits surgelés",
		description: "Snacks surgelés pour l'apéritif.",
	},
	{
		name: "Pains pita surgelés",
		category: "Produits surgelés",
		description:
			"Galettes de pain idéales pour garnir avec des légumes et sauces.",
	},
	{
		name: "Tortillas de blé surgelées",
		category: "Produits surgelés",
		description: "Galettes prêtes à chauffer pour des wraps.",
	},
	{
		name: "Glace au chocolat",
		category: "Produits surgelés",
		description: "Dessert glacé riche en saveur de chocolat.",
	},
	{
		name: "Légumes pour wok surgelés",
		category: "Produits surgelés",
		description: "Mélange de légumes asiatiques, parfaits pour un plat sauté.",
	},
	// Produits prêts à consommer
	{
		name: "Sandwich jambon-beurre",
		category: "Produits prêts à consommer",
		description:
			"Sandwich classique à base de jambon et de beurre dans une baguette.",
	},
	{
		name: "Salade composée",
		category: "Produits prêts à consommer",
		description: "Mélange de légumes frais prêts à déguster.",
	},
	{
		name: "Wrap au poulet",
		category: "Produits prêts à consommer",
		description: "Galette garnie de morceaux de poulet et légumes croquants.",
	},
	{
		name: "Sushi mix",
		category: "Produits prêts à consommer",
		description: "Assortiment de sushi et maki prêt à manger.",
	},
	{
		name: "Pizza margarita prête à consommer",
		category: "Produits prêts à consommer",
		description: "Pizza classique au fromage et tomate, prête à déguster.",
	},
	{
		name: "Bento au saumon",
		category: "Produits prêts à consommer",
		description: "Plateau repas japonais avec du riz et du saumon.",
	},
	{
		name: "Soupe en bocal",
		category: "Produits prêts à consommer",
		description: "Soupe prête à réchauffer pour un repas rapide.",
	},
	{
		name: "Taboulé",
		category: "Produits prêts à consommer",
		description: "Salade méditerranéenne à base de semoule, tomates et persil.",
	},
	{
		name: "Quiche lorraine",
		category: "Produits prêts à consommer",
		description: "Tarte salée garnie de lardons et crème.",
	},
	{
		name: "Tarte aux légumes",
		category: "Produits prêts à consommer",
		description: "Pâtisserie salée garnie de légumes variés.",
	},
	{
		name: "Bouchées apéritives",
		category: "Produits prêts à consommer",
		description: "Petits snacks prêts à déguster lors des apéritifs.",
	},
	{
		name: "Couscous végétarien",
		category: "Produits prêts à consommer",
		description: "Plat prêt à consommer à base de semoule et légumes.",
	},
	{
		name: "Chili con carne prêt",
		category: "Produits prêts à consommer",
		description: "Plat épicé à base de viande hachée et haricots rouges.",
	},
	{
		name: "Pâtes à la carbonara",
		category: "Produits prêts à consommer",
		description: "Plat italien crémeux prêt à réchauffer.",
	},
	{
		name: "Poulet rôti en barquette",
		category: "Produits prêts à consommer",
		description: "Morceaux de poulet rôti, prêts à être dégustés.",
	},
	{
		name: "Lasagnes à la bolognaise",
		category: "Produits prêts à consommer",
		description: "Plat italien en couches avec viande, tomate et fromage.",
	},
	{
		name: "Curry de légumes",
		category: "Produits prêts à consommer",
		description: "Plat exotique épicé à base de légumes.",
	},
	{
		name: "Risotto aux champignons",
		category: "Produits prêts à consommer",
		description: "Riz crémeux cuisiné avec des champignons.",
	},
	{
		name: "Tartelette aux fruits",
		category: "Produits prêts à consommer",
		description: "Petit dessert sucré garni de fruits frais.",
	},
	{
		name: "Crêpes fourrées au chocolat",
		category: "Produits prêts à consommer",
		description: "Crêpes garnies prêtes à être consommées.",
	},
	{
		name: "Clafoutis aux cerises",
		category: "Produits prêts à consommer",
		description:
			"Dessert traditionnel français aux cerises cuites dans une pâte.",
	},
	{
		name: "Bouillon de poulet en tasse",
		category: "Produits prêts à consommer",
		description: "Soupe légère prête à réchauffer.",
	},
	{
		name: "Plat mijoté aux légumes et viande",
		category: "Produits prêts à consommer",
		description: "Repas équilibré à base de viande et légumes.",
	},
	{
		name: "Fromage frais aux herbes",
		category: "Produits prêts à consommer",
		description: "Fromage crémeux prêt à tartiner.",
	},
	{
		name: "Muffins aux myrtilles",
		category: "Produits prêts à consommer",
		description: "Petits gâteaux moelleux prêts à déguster.",
	},
	{
		name: "Pain surprise",
		category: "Produits prêts à consommer",
		description: "Pain garni de petits sandwichs variés.",
	},
	{
		name: "Tarte tatin",
		category: "Produits prêts à consommer",
		description: "Dessert français aux pommes caramélisées, prêt à servir.",
	},
	{
		name: "Viennoiseries variées",
		category: "Produits prêts à consommer",
		description: "Croissants, pains au chocolat et brioches prêts à consommer.",
	},
	{
		name: "Cheesecake nature",
		category: "Produits prêts à consommer",
		description: "Gâteau crémeux à base de fromage frais.",
	},
	// Farines
	{
		name: "Farine de blé",
		category: "Farines",
		description:
			"Farine polyvalente utilisée pour la pâtisserie et la boulangerie.",
	},
	{
		name: "Farine complète",
		category: "Farines",
		description: "Farine riche en fibres, idéale pour des recettes saines.",
	},
	{
		name: "Farine de sarrasin",
		category: "Farines",
		description: "Farine sans gluten, parfaite pour les galettes et crêpes.",
	},
	{
		name: "Farine d'épeautre",
		category: "Farines",
		description:
			"Farine ancienne avec une saveur rustique, riche en nutriments.",
	},
	{
		name: "Farine de maïs",
		category: "Farines",
		description: "Farine jaune utilisée pour les tortillas et pâtisseries.",
	},
	{
		name: "Farine de riz",
		category: "Farines",
		description: "Farine légère adaptée aux recettes sans gluten.",
	},
	{
		name: "Farine de coco",
		category: "Farines",
		description: "Farine exotique riche en fibres, idéale pour la pâtisserie.",
	},
	{
		name: "Farine de châtaigne",
		category: "Farines",
		description: "Farine au goût sucré, idéale pour des desserts originaux.",
	},
	{
		name: "Farine d'amande",
		category: "Farines",
		description: "Farine sans gluten utilisée dans les pâtisseries.",
	},
	{
		name: "Farine de pois chiches",
		category: "Farines",
		description:
			"Farine nutritive pour des recettes salées comme les falafels.",
	},
	{
		name: "Farine de millet",
		category: "Farines",
		description: "Farine sans gluten utilisée dans des pains et desserts.",
	},
	{
		name: "Farine de quinoa",
		category: "Farines",
		description: "Farine riche en protéines pour les recettes saines.",
	},
	{
		name: "Farine de tapioca",
		category: "Farines",
		description: "Farine utilisée pour épaissir les sauces et desserts.",
	},
	{
		name: "Farine de seigle",
		category: "Farines",
		description: "Farine sombre pour les pains rustiques.",
	},
	{
		name: "Farine de noix de coco dégraissée",
		category: "Farines",
		description:
			"Farine à faible teneur en gras, parfaite pour les régimes spéciaux.",
	},
	{
		name: "Farine aux graines de lin",
		category: "Farines",
		description: "Farine riche en oméga-3 pour des recettes nutritives.",
	},
	{
		name: "Farine de lupin",
		category: "Farines",
		description: "Farine protéinée idéale pour les recettes sans gluten.",
	},
	{
		name: "Farine de manioc",
		category: "Farines",
		description: "Farine utilisée dans la cuisine exotique, sans gluten.",
	},
	{
		name: "Farine pour pizza",
		category: "Farines",
		description: "Farine spéciale pour obtenir des pâtes à pizza parfaites.",
	},
	{
		name: "Farine auto-levante",
		category: "Farines",
		description:
			"Farine mélangée à de la levure, idéale pour les gâteaux rapides.",
	},
	{
		name: "Farine tout usage bio",
		category: "Farines",
		description: "Farine biologique pour toutes vos préparations.",
	},
	{
		name: "Farine de teff",
		category: "Farines",
		description:
			"Farine sans gluten utilisée dans les pains éthiopiens traditionnels.",
	},
	{
		name: "Farine de banane verte",
		category: "Farines",
		description: "Alternative sans gluten, riche en amidon résistant.",
	},
	{
		name: "Farine de graines de courge",
		category: "Farines",
		description: "Farine nutritive au goût unique, pour pains et pâtisseries.",
	},
	{
		name: "Farine de soja",
		category: "Farines",
		description:
			"Farine riche en protéines, idéale pour enrichir les recettes.",
	},
	{
		name: "Farine de pois",
		category: "Farines",
		description:
			"Farine riche en protéines, parfaite pour des galettes et pains.",
	},
	{
		name: "Farine de patate douce",
		category: "Farines",
		description: "Farine légèrement sucrée, idéale pour des desserts sains.",
	},
	{
		name: "Farine de graines de chanvre",
		category: "Farines",
		description:
			"Farine riche en fibres et protéines, pour des recettes innovantes.",
	},
	{
		name: "Farine de riz gluant",
		category: "Farines",
		description: "Farine utilisée pour les desserts asiatiques.",
	},
	// Sucres et édulcorants
	{
		name: "Sucre blanc",
		category: "Sucres et édulcorants",
		description: "Sucre raffiné, parfait pour sucrer les boissons et desserts.",
	},
	{
		name: "Sucre brun",
		category: "Sucres et édulcorants",
		description: "Sucre non raffiné avec un goût légèrement caramélisé.",
	},
	{
		name: "Cassonade",
		category: "Sucres et édulcorants",
		description: "Sucre blond aux grains fins, idéal pour les pâtisseries.",
	},
	{
		name: "Sucre de canne complet",
		category: "Sucres et édulcorants",
		description: "Sucre non raffiné, riche en saveur et nutriments.",
	},
	{
		name: "Sucre glace",
		category: "Sucres et édulcorants",
		description:
			"Sucre finement moulu, parfait pour les glaçages et décorations.",
	},
	{
		name: "Sucre perlé",
		category: "Sucres et édulcorants",
		description: "Petits morceaux de sucre pour les brioches et gaufres.",
	},
	{
		name: "Mélasse",
		category: "Sucres et édulcorants",
		description:
			"Sirop épais et sombre, sous-produit de la fabrication du sucre.",
	},
	{
		name: "Sirop d'érable",
		category: "Sucres et édulcorants",
		description: "Édulcorant naturel au goût riche, parfait pour les pancakes.",
	},
	{
		name: "Sirop d'agave",
		category: "Sucres et édulcorants",
		description: "Alternative naturelle au sucre, à faible index glycémique.",
	},
	{
		name: "Miel liquide",
		category: "Sucres et édulcorants",
		description: "Édulcorant naturel pour les thés et desserts.",
	},
	{
		name: "Miel crémeux",
		category: "Sucres et édulcorants",
		description: "Miel doux à tartiner, idéal pour les petits-déjeuners.",
	},
	{
		name: "Sucre de coco",
		category: "Sucres et édulcorants",
		description:
			"Édulcorant naturel à faible indice glycémique, avec un goût de caramel.",
	},
	{
		name: "Érythritol",
		category: "Sucres et édulcorants",
		description:
			"Édulcorant sans calorie, parfait pour les régimes faibles en sucre.",
	},
	{
		name: "Xylitol",
		category: "Sucres et édulcorants",
		description:
			"Sucre naturel à faible indice glycémique, souvent utilisé pour les pâtisseries.",
	},
	{
		name: "Stevia",
		category: "Sucres et édulcorants",
		description:
			"Édulcorant naturel sans calorie, extrait de la plante stevia.",
	},
	{
		name: "Tagatose",
		category: "Sucres et édulcorants",
		description: "Édulcorant naturel avec une texture similaire au sucre.",
	},
	{
		name: "Sucre aromatisé à la vanille",
		category: "Sucres et édulcorants",
		description: "Sucre avec un arôme naturel de vanille.",
	},
	{
		name: "Sirop de riz",
		category: "Sucres et édulcorants",
		description: "Édulcorant liquide doux, extrait du riz.",
	},
	{
		name: "Sucre d'orge",
		category: "Sucres et édulcorants",
		description: "Confiserie traditionnelle sucrée et translucide.",
	},
	{
		name: "Sucre inverti",
		category: "Sucres et édulcorants",
		description: "Sucre liquide utilisé pour les glaces et pâtisseries.",
	},
	{
		name: "Muscovado",
		category: "Sucres et édulcorants",
		description: "Sucre brun non raffiné, avec un goût intense.",
	},
	{
		name: "Sirop de dattes",
		category: "Sucres et édulcorants",
		description: "Édulcorant naturel extrait des dattes.",
	},
	{
		name: "Sucre pétillant",
		category: "Sucres et édulcorants",
		description:
			"Sucre utilisé pour décorer les desserts avec une touche pétillante.",
	},
	{
		name: "Poudre de miel",
		category: "Sucres et édulcorants",
		description: "Miel déshydraté pour une utilisation pratique.",
	},
	{
		name: "Sucre liquide",
		category: "Sucres et édulcorants",
		description:
			"Sucre dissous prêt à être utilisé pour les boissons et sirops.",
	},
	{
		name: "Rapadura",
		category: "Sucres et édulcorants",
		description: "Sucre brut non raffiné au goût de mélasse.",
	},
	{
		name: "Sucre de betterave",
		category: "Sucres et édulcorants",
		description: "Sucre blanc issu de la betterave sucrière.",
	},
	{
		name: "Maltose",
		category: "Sucres et édulcorants",
		description: "Sucre doux extrait de l’amidon de céréales.",
	},
	{
		name: "Sucre pour confitures",
		category: "Sucres et édulcorants",
		description:
			"Sucre spécial enrichi en pectine pour la préparation de confitures.",
	},
	// "Produits pour bébés"
	{
		name: "Purée de légumes bio",
		category: "Produits pour bébés",
		description: "Repas doux et équilibré à base de légumes biologiques.",
	},
	{
		name: "Compote de fruits sans sucre ajouté",
		category: "Produits pour bébés",
		description: "Dessert naturel et léger pour les tout-petits.",
	},
	{
		name: "Céréales infantiles",
		category: "Produits pour bébés",
		description: "Mélange enrichi pour compléter le lait des bébés.",
	},
	{
		name: "Petits pots de légumes et viande",
		category: "Produits pour bébés",
		description: "Repas complet et pratique pour les repas des bébés.",
	},
	{
		name: "Biscuits pour bébés",
		category: "Produits pour bébés",
		description: "Biscuits adaptés aux dents fragiles des tout-petits.",
	},
	{
		name: "Lait infantile 1er âge",
		category: "Produits pour bébés",
		description: "Lait en poudre pour les nourrissons de 0 à 6 mois.",
	},
	{
		name: "Lait infantile 2e âge",
		category: "Produits pour bébés",
		description: "Lait en poudre pour les bébés de 6 à 12 mois.",
	},
	{
		name: "Lait de croissance",
		category: "Produits pour bébés",
		description:
			"Lait enrichi pour accompagner la croissance des jeunes enfants.",
	},
	{
		name: "Petits pots aux fruits",
		category: "Produits pour bébés",
		description: "Repas sucré à base de fruits frais pour les bébés.",
	},
	{
		name: "Crèmes dessert pour bébés",
		category: "Produits pour bébés",
		description: "Desserts lactés doux et adaptés.",
	},
	{
		name: "Purée de patate douce et carottes",
		category: "Produits pour bébés",
		description: "Plat doux et riche en saveurs naturelles.",
	},
	{
		name: "Eau minérale pour bébés",
		category: "Produits pour bébés",
		description: "Eau pure et adaptée à la préparation des biberons.",
	},
	{
		name: "Snacks pour bébés",
		category: "Produits pour bébés",
		description: "Petites bouchées croustillantes à base de céréales.",
	},
	{
		name: "Yaourts pour bébés",
		category: "Produits pour bébés",
		description: "Produits laitiers adaptés aux besoins des nourrissons.",
	},
	{
		name: "Purée de pommes et poires",
		category: "Produits pour bébés",
		description: "Repas sucré sans additifs pour les bébés.",
	},
	{
		name: "Soupe pour bébés",
		category: "Produits pour bébés",
		description: "Soupe douce et facile à digérer.",
	},
	{
		name: "Céréales au riz pour bébés",
		category: "Produits pour bébés",
		description: "Préparation à base de riz pour une digestion facile.",
	},
	{
		name: "Céréales à l’avoine pour bébés",
		category: "Produits pour bébés",
		description: "Céréales riches en fibres pour une croissance équilibrée.",
	},
	{
		name: "Purée de légumes verts",
		category: "Produits pour bébés",
		description: "Mélange de légumes verts adapté aux petits palais.",
	},
	{
		name: "Croûtons pour bébés",
		category: "Produits pour bébés",
		description: "Petites bouchées croustillantes pour les premières dents.",
	},
	{
		name: "Compote pomme-banane",
		category: "Produits pour bébés",
		description: "Dessert doux et onctueux à base de fruits frais.",
	},
	{
		name: "Repas à base de riz et légumes",
		category: "Produits pour bébés",
		description: "Plat équilibré pour les bébés dès 8 mois.",
	},
	{
		name: "Lait anti-régurgitation",
		category: "Produits pour bébés",
		description: "Lait conçu pour prévenir les régurgitations des nourrissons.",
	},
	{
		name: "Purée de courgettes et pommes de terre",
		category: "Produits pour bébés",
		description: "Repas doux et équilibré pour les jeunes enfants.",
	},
	{
		name: "Bouillie pour bébés",
		category: "Produits pour bébés",
		description: "Repas semi-liquide parfait pour introduire les solides.",
	},
	{
		name: "Bâtonnets de légumes pour bébés",
		category: "Produits pour bébés",
		description: "En-cas léger pour les bébés qui commencent à mâcher.",
	},
	{
		name: "Purée de poulet et légumes",
		category: "Produits pour bébés",
		description: "Repas riche en protéines pour les bébés.",
	},
	{
		name: "Pâtes pour bébés",
		category: "Produits pour bébés",
		description: "Petites pâtes faciles à manger pour les tout-petits.",
	},
	{
		name: "Céréales bio pour bébés",
		category: "Produits pour bébés",
		description:
			"Céréales enrichies sans pesticides pour une alimentation saine.",
	},
	// Aliments pour animaux
	{
		name: "Croquettes pour chiens",
		category: "Aliments pour animaux",
		description: "Nourriture sèche et équilibrée pour chiens adultes.",
	},
	{
		name: "Pâtée pour chiens",
		category: "Aliments pour animaux",
		description: "Nourriture humide pour une alimentation savoureuse.",
	},
	{
		name: "Croquettes pour chats",
		category: "Aliments pour animaux",
		description: "Nourriture complète adaptée aux besoins des chats.",
	},
	{
		name: "Pâtée pour chats",
		category: "Aliments pour animaux",
		description: "Nourriture humide riche en protéines pour chats.",
	},
	{
		name: "Friandises pour chiens",
		category: "Aliments pour animaux",
		description: "Petites récompenses pour éduquer ou gâter votre chien.",
	},
	{
		name: "Friandises pour chats",
		category: "Aliments pour animaux",
		description: "Encas croustillants ou moelleux pour chats.",
	},
	{
		name: "Croquettes pour chiots",
		category: "Aliments pour animaux",
		description:
			"Nourriture spécialement formulée pour la croissance des chiots.",
	},
	{
		name: "Croquettes pour chatons",
		category: "Aliments pour animaux",
		description: "Alimentation adaptée aux jeunes chats en pleine croissance.",
	},
	{
		name: "Croquettes pour chiens seniors",
		category: "Aliments pour animaux",
		description: "Nourriture formulée pour les besoins des chiens âgés.",
	},
	{
		name: "Croquettes pour chats seniors",
		category: "Aliments pour animaux",
		description: "Alimentation équilibrée pour les chats âgés.",
	},
	{
		name: "Os à mâcher pour chiens",
		category: "Aliments pour animaux",
		description: "Encas solide pour entretenir les dents des chiens.",
	},
	{
		name: "Sachets fraîcheur pour chats",
		category: "Aliments pour animaux",
		description: "Portions individuelles de pâtée pour chats.",
	},
	{
		name: "Alimentation pour poissons",
		category: "Aliments pour animaux",
		description: "Flocons ou granulés pour poissons d'aquarium.",
	},
	{
		name: "Graines pour oiseaux",
		category: "Aliments pour animaux",
		description: "Mélange de graines pour oiseaux de compagnie.",
	},
	{
		name: "Foin pour rongeurs",
		category: "Aliments pour animaux",
		description: "Alimentation essentielle pour les lapins et cochons d'Inde.",
	},
	{
		name: "Croquettes hypoallergéniques pour chiens",
		category: "Aliments pour animaux",
		description: "Nourriture pour chiens ayant des sensibilités alimentaires.",
	},
	{
		name: "Croquettes sans céréales pour chats",
		category: "Aliments pour animaux",
		description: "Nourriture adaptée aux chats avec intolérances aux céréales.",
	},
	{
		name: "Snack dentaire pour chiens",
		category: "Aliments pour animaux",
		description:
			"Friandises qui aident à réduire le tartre et à nettoyer les dents.",
	},
	{
		name: "Herbe à chat",
		category: "Aliments pour animaux",
		description: "Herbe spécialement cultivée pour le bien-être des chats.",
	},
	{
		name: "Alimentation pour reptiles",
		category: "Aliments pour animaux",
		description: "Nourriture adaptée aux lézards, tortues et autres reptiles.",
	},
	{
		name: "Croquettes light pour chiens",
		category: "Aliments pour animaux",
		description: "Alimentation réduite en calories pour chiens en surpoids.",
	},
	{
		name: "Croquettes light pour chats",
		category: "Aliments pour animaux",
		description:
			"Nourriture équilibrée pour chats ayant besoin de contrôler leur poids.",
	},
	{
		name: "Lait maternisé pour chiots",
		category: "Aliments pour animaux",
		description: "Substitut de lait pour nourrir les chiots orphelins.",
	},
	{
		name: "Lait maternisé pour chatons",
		category: "Aliments pour animaux",
		description: "Lait en poudre pour les jeunes chats.",
	},
	{
		name: "Mélange de graines pour poules",
		category: "Aliments pour animaux",
		description: "Alimentation complète pour les poules pondeuses.",
	},
	{
		name: "Nourriture pour perroquets",
		category: "Aliments pour animaux",
		description: "Mélange de graines enrichi en vitamines pour perroquets.",
	},
	{
		name: "Bâtonnets pour rongeurs",
		category: "Aliments pour animaux",
		description: "Encas durables pour lapins et hamsters.",
	},
	{
		name: "Insectes séchés pour reptiles",
		category: "Aliments pour animaux",
		description: "Protéines essentielles pour les reptiles insectivores.",
	},
	{
		name: "Croquettes bio pour chiens",
		category: "Aliments pour animaux",
		description: "Nourriture fabriquée avec des ingrédients biologiques.",
	},
	// Chocolats

	{
		name: "Chocolat noir 70%",
		category: "Chocolats",
		description: "Chocolat intense à forte teneur en cacao.",
	},
	{
		name: "Chocolat au lait",
		category: "Chocolats",
		description: "Chocolat doux et sucré, apprécié de tous.",
	},
	{
		name: "Chocolat blanc",
		category: "Chocolats",
		description: "Chocolat crémeux à base de beurre de cacao.",
	},
	{
		name: "Tablette de chocolat aux noisettes",
		category: "Chocolats",
		description: "Chocolat croquant garni de noisettes entières.",
	},
	{
		name: "Chocolat noir aux amandes",
		category: "Chocolats",
		description: "Chocolat intense avec des éclats d’amandes.",
	},
	{
		name: "Chocolat au caramel salé",
		category: "Chocolats",
		description: "Chocolat sucré avec une touche de sel et de caramel.",
	},
	{
		name: "Chocolat noir intense 85%",
		category: "Chocolats",
		description: "Chocolat riche en cacao pour les amateurs de goût corsé.",
	},
	{
		name: "Chocolat praliné",
		category: "Chocolats",
		description: "Mélange onctueux de chocolat et de praliné.",
	},
	{
		name: "Chocolats fourrés à la liqueur",
		category: "Chocolats",
		description: "Chocolats raffinés avec un cœur de liqueur.",
	},
	{
		name: "Truffes au chocolat",
		category: "Chocolats",
		description: "Confiseries fondantes à base de chocolat.",
	},
	{
		name: "Chocolat noir à l’orange",
		category: "Chocolats",
		description: "Alliance subtile de chocolat noir et d’écorces d’orange.",
	},
	{
		name: "Carrés de chocolat noir",
		category: "Chocolats",
		description: "Petits morceaux de chocolat noir pour accompagner le café.",
	},
	{
		name: "Chocolat au lait aux éclats de biscuit",
		category: "Chocolats",
		description: "Chocolat doux et croquant grâce aux morceaux de biscuit.",
	},
	{
		name: "Chocolat noir au piment",
		category: "Chocolats",
		description: "Chocolat épicé pour une saveur audacieuse.",
	},
	{
		name: "Chocolat blanc à la noix de coco",
		category: "Chocolats",
		description: "Chocolat crémeux au goût exotique de noix de coco.",
	},
	{
		name: "Chocolat noir aux fruits rouges",
		category: "Chocolats",
		description: "Chocolat intense enrichi de morceaux de fruits rouges.",
	},
	{
		name: "Chocolat en poudre",
		category: "Chocolats",
		description: "Idéal pour préparer des boissons chocolatées.",
	},
	{
		name: "Chocolat au lait fourré au caramel",
		category: "Chocolats",
		description: "Chocolat onctueux avec un cœur fondant de caramel.",
	},
	{
		name: "Tablette de chocolat bio",
		category: "Chocolats",
		description: "Chocolat fabriqué à partir d’ingrédients biologiques.",
	},
	{
		name: "Chocolat noir aux éclats de fèves",
		category: "Chocolats",
		description: "Chocolat riche en cacao avec une texture croquante.",
	},
	{
		name: "Chocolat blanc aux fruits secs",
		category: "Chocolats",
		description: "Chocolat doux garni de noix et fruits secs.",
	},
	{
		name: "Chocolat noir 100%",
		category: "Chocolats",
		description: "Chocolat pur sans sucre ajouté, au goût intense.",
	},
	{
		name: "Pépites de chocolat",
		category: "Chocolats",
		description: "Morceaux de chocolat pour pâtisseries et desserts.",
	},
	{
		name: "Chocolats assortis",
		category: "Chocolats",
		description: "Boîte contenant une variété de chocolats.",
	},
	{
		name: "Chocolat au lait aux éclats de noisettes",
		category: "Chocolats",
		description: "Chocolat doux et croquant aux noisettes concassées.",
	},
	{
		name: "Chocolat noir à la menthe",
		category: "Chocolats",
		description: "Chocolat intense avec une touche fraîche de menthe.",
	},
	{
		name: "Chocolat fourré à la framboise",
		category: "Chocolats",
		description: "Chocolat sucré avec un cœur fruité à la framboise.",
	},
	{
		name: "Chocolat sans sucre ajouté",
		category: "Chocolats",
		description: "Chocolat adapté pour les régimes réduits en sucre.",
	},
	{
		name: "Fondue au chocolat",
		category: "Chocolats",
		description: "Chocolat prêt à fondre pour accompagner des fruits.",
	},
	// Confitures et miel
	{
		name: "Confiture de fraises",
		category: "Confitures et miel",
		description: "Préparation sucrée à base de fraises mûres.",
	},
	{
		name: "Confiture d'abricots",
		category: "Confitures et miel",
		description: "Confiture douce et fruitée à base d'abricots.",
	},
	{
		name: "Confiture de framboises",
		category: "Confitures et miel",
		description: "Confiture parfumée et légèrement acidulée.",
	},
	{
		name: "Gelée de groseilles",
		category: "Confitures et miel",
		description: "Préparation translucide à base de groseilles rouges.",
	},
	{
		name: "Confiture de myrtilles",
		category: "Confitures et miel",
		description: "Confiture riche et sucrée à base de myrtilles sauvages.",
	},
	{
		name: "Confiture d'orange amère",
		category: "Confitures et miel",
		description: "Confiture au goût intense et légèrement amer.",
	},
	{
		name: "Miel d'acacia",
		category: "Confitures et miel",
		description: "Miel liquide doux et clair, parfait pour les thés.",
	},
	{
		name: "Miel de châtaignier",
		category: "Confitures et miel",
		description: "Miel au goût puissant et boisé.",
	},
	{
		name: "Miel de fleurs",
		category: "Confitures et miel",
		description: "Mélange de miels floraux pour un goût équilibré.",
	},
	{
		name: "Gelée royale",
		category: "Confitures et miel",
		description: "Produit rare et énergisant issu des ruches.",
	},
	{
		name: "Miel de lavande",
		category: "Confitures et miel",
		description: "Miel parfumé aux notes florales de lavande.",
	},
	{
		name: "Confiture de figues",
		category: "Confitures et miel",
		description: "Confiture sucrée et gourmande à base de figues fraîches.",
	},
	{
		name: "Confiture de cerises noires",
		category: "Confitures et miel",
		description: "Confiture riche et intense, parfaite avec du fromage.",
	},
	{
		name: "Miel de thym",
		category: "Confitures et miel",
		description:
			"Miel au goût prononcé, connu pour ses propriétés médicinales.",
	},
	{
		name: "Pâte de coing",
		category: "Confitures et miel",
		description: "Spécialité sucrée et compacte à base de coings.",
	},
	{
		name: "Miel crémeux",
		category: "Confitures et miel",
		description: "Miel doux à la texture onctueuse, idéal à tartiner.",
	},
	{
		name: "Confiture de mangue",
		category: "Confitures et miel",
		description: "Confiture exotique au goût sucré et parfumé.",
	},
	{
		name: "Confiture de rhubarbe",
		category: "Confitures et miel",
		description: "Confiture acidulée pour un goût unique.",
	},
	{
		name: "Miel de forêt",
		category: "Confitures et miel",
		description: "Miel sombre et riche en arômes boisés.",
	},
	{
		name: "Confiture de pêches",
		category: "Confitures et miel",
		description: "Confiture douce et fruitée à base de pêches.",
	},
	{
		name: "Confiture de poires",
		category: "Confitures et miel",
		description: "Préparation douce et légèrement granuleuse.",
	},
	{
		name: "Miel d'eucalyptus",
		category: "Confitures et miel",
		description: "Miel au goût intense, utilisé pour apaiser la gorge.",
	},
	{
		name: "Confiture de fruits rouges",
		category: "Confitures et miel",
		description: "Mélange sucré de fraises, framboises et groseilles.",
	},
	{
		name: "Confiture de banane",
		category: "Confitures et miel",
		description: "Confiture exotique et sucrée, idéale pour les desserts.",
	},
	{
		name: "Miel bio",
		category: "Confitures et miel",
		description: "Miel issu de ruches certifiées biologiques.",
	},
	{
		name: "Chutney de mangue",
		category: "Confitures et miel",
		description: "Mélange sucré-salé pour accompagner les plats indiens.",
	},
	{
		name: "Miel de trèfle",
		category: "Confitures et miel",
		description: "Miel clair et doux, parfait pour le petit-déjeuner.",
	},
	{
		name: "Confiture d'ananas",
		category: "Confitures et miel",
		description: "Confiture tropicale au goût sucré et acidulé.",
	},
	{
		name: "Gelée de pommes",
		category: "Confitures et miel",
		description: "Préparation légère et translucide à base de pommes.",
	},
	// Yaourts et desserts lactés
	{
		name: "Yaourt nature",
		category: "Yaourts et desserts lactés",
		description:
			"Yaourt classique sans sucre ajouté, idéal pour accompagner les fruits.",
	},
	{
		name: "Yaourt à la vanille",
		category: "Yaourts et desserts lactés",
		description: "Yaourt crémeux aromatisé à la vanille naturelle.",
	},
	{
		name: "Yaourt aux fruits",
		category: "Yaourts et desserts lactés",
		description: "Yaourt sucré avec des morceaux de fruits.",
	},
	{
		name: "Fromage blanc 0%",
		category: "Yaourts et desserts lactés",
		description: "Alternative légère et riche en protéines.",
	},
	{
		name: "Fromage blanc entier",
		category: "Yaourts et desserts lactés",
		description: "Fromage blanc onctueux au goût riche.",
	},
	{
		name: "Crème dessert chocolat",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté au chocolat, parfait pour les gourmands.",
	},
	{
		name: "Crème dessert caramel",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté onctueux au goût de caramel.",
	},
	{
		name: "Panna cotta",
		category: "Yaourts et desserts lactés",
		description:
			"Dessert italien à base de crème fraîche, souvent accompagné de coulis de fruits.",
	},
	{
		name: "Flan au caramel",
		category: "Yaourts et desserts lactés",
		description:
			"Dessert classique à base d'œufs et de lait avec un nappage caramel.",
	},
	{
		name: "Yaourt au lait de brebis",
		category: "Yaourts et desserts lactés",
		description: "Yaourt au goût doux et légèrement plus crémeux.",
	},
	{
		name: "Yaourt au lait de chèvre",
		category: "Yaourts et desserts lactés",
		description: "Yaourt au goût plus prononcé, riche en calcium.",
	},
	{
		name: "Tiramisu en portion individuelle",
		category: "Yaourts et desserts lactés",
		description: "Dessert italien à base de mascarpone, café et cacao.",
	},
	{
		name: "Yaourt à boire",
		category: "Yaourts et desserts lactés",
		description:
			"Yaourt liquide pratique pour le petit-déjeuner ou en déplacement.",
	},
	{
		name: "Crème aux œufs",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté onctueux à base d'œufs et de lait.",
	},
	{
		name: "Yaourt grec nature",
		category: "Yaourts et desserts lactés",
		description:
			"Yaourt épais et riche en protéines, parfait pour les recettes ou seul.",
	},
	{
		name: "Yaourt grec au miel",
		category: "Yaourts et desserts lactés",
		description: "Yaourt crémeux légèrement sucré avec du miel.",
	},
	{
		name: "Crème dessert vanille",
		category: "Yaourts et desserts lactés",
		description: "Dessert doux et onctueux parfumé à la vanille.",
	},
	{
		name: "Riz au lait",
		category: "Yaourts et desserts lactés",
		description: "Dessert traditionnel à base de riz, lait et sucre.",
	},
	{
		name: "Semoule au lait",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté avec une texture légèrement granuleuse.",
	},
	{
		name: "Mousse au chocolat",
		category: "Yaourts et desserts lactés",
		description: "Dessert aérien et riche en chocolat.",
	},
	{
		name: "Yaourt bio nature",
		category: "Yaourts et desserts lactés",
		description: "Yaourt produit à partir d'ingrédients biologiques.",
	},
	{
		name: "Yaourt à la noix de coco",
		category: "Yaourts et desserts lactés",
		description: "Yaourt au goût exotique de noix de coco.",
	},
	{
		name: "Yaourt aux fruits rouges",
		category: "Yaourts et desserts lactés",
		description: "Yaourt onctueux avec des morceaux de fruits rouges.",
	},
	{
		name: "Crème dessert praliné",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté au goût de noisettes et amandes.",
	},
	{
		name: "Crème brûlée",
		category: "Yaourts et desserts lactés",
		description: "Dessert à la vanille avec une fine couche caramélisée.",
	},
	{
		name: "Yaourt sucré à la fraise",
		category: "Yaourts et desserts lactés",
		description: "Yaourt doux et sucré au goût de fraise.",
	},
	{
		name: "Petits pots de crème au café",
		category: "Yaourts et desserts lactés",
		description: "Dessert lacté au goût intense de café.",
	},
	{
		name: "Yaourt soja nature",
		category: "Yaourts et desserts lactés",
		description: "Alternative végétale au yaourt traditionnel.",
	},
	{
		name: "Yaourt soja vanille",
		category: "Yaourts et desserts lactés",
		description: "Yaourt végétal au goût doux de vanille.",
	},
	// Laits végétaux
	{
		name: "Lait d'amande",
		category: "Laits végétaux",
		description:
			"Boisson végétale douce et légèrement sucrée à base d'amandes.",
	},
	{
		name: "Lait de soja nature",
		category: "Laits végétaux",
		description: "Alternative végétale riche en protéines.",
	},
	{
		name: "Lait d'avoine",
		category: "Laits végétaux",
		description:
			"Boisson végétale onctueuse idéale pour les cafés et céréales.",
	},
	{
		name: "Lait de noisette",
		category: "Laits végétaux",
		description: "Lait végétal au goût délicat de noisette.",
	},
	{
		name: "Lait de riz",
		category: "Laits végétaux",
		description: "Boisson végétale légère et légèrement sucrée.",
	},
	{
		name: "Lait de coco",
		category: "Laits végétaux",
		description: "Lait épais et crémeux parfait pour les plats exotiques.",
	},
	{
		name: "Lait d'amande chocolat",
		category: "Laits végétaux",
		description: "Lait végétal aromatisé au chocolat, idéal pour les enfants.",
	},
	{
		name: "Lait de soja vanille",
		category: "Laits végétaux",
		description: "Boisson douce et parfumée pour une pause gourmande.",
	},
	{
		name: "Lait de cajou",
		category: "Laits végétaux",
		description: "Boisson crémeuse au goût subtil de noix de cajou.",
	},
	{
		name: "Lait de chanvre",
		category: "Laits végétaux",
		description: "Boisson végétale riche en oméga-3 et sans lactose.",
	},
	{
		name: "Lait de quinoa",
		category: "Laits végétaux",
		description: "Alternative végétale légèrement sucrée et nutritive.",
	},
	{
		name: "Lait d'avoine chocolat",
		category: "Laits végétaux",
		description: "Boisson gourmande à base d'avoine et de chocolat.",
	},
	{
		name: "Lait de soja calcium",
		category: "Laits végétaux",
		description: "Boisson végétale enrichie en calcium pour les os.",
	},
	{
		name: "Lait de macadamia",
		category: "Laits végétaux",
		description: "Lait végétal crémeux au goût de noix de macadamia.",
	},
	{
		name: "Lait de coco bio",
		category: "Laits végétaux",
		description: "Boisson naturelle et certifiée biologique.",
	},
	{
		name: "Lait d'amande non sucré",
		category: "Laits végétaux",
		description: "Alternative végétale sans sucre ajouté.",
	},
	{
		name: "Lait d'épeautre",
		category: "Laits végétaux",
		description: "Boisson végétale au goût légèrement noisetté.",
	},
	{
		name: "Lait de souchet",
		category: "Laits végétaux",
		description:
			"Boisson douce et sucrée, idéale pour les intolérants au lactose.",
	},
	{
		name: "Lait d'avoine barista",
		category: "Laits végétaux",
		description:
			"Boisson spécialement conçue pour les boissons chaudes comme le café.",
	},
	{
		name: "Lait de riz vanille",
		category: "Laits végétaux",
		description: "Lait végétal aromatisé pour une touche gourmande.",
	},
	{
		name: "Lait de coco pour cuisine",
		category: "Laits végétaux",
		description: "Lait épais parfait pour les plats mijotés et currys.",
	},
	{
		name: "Lait de lupin",
		category: "Laits végétaux",
		description: "Alternative rare et riche en protéines végétales.",
	},
	{
		name: "Lait de millet",
		category: "Laits végétaux",
		description: "Boisson végétale légère et sans gluten.",
	},
	{
		name: "Lait de pistache",
		category: "Laits végétaux",
		description: "Boisson onctueuse au goût unique de pistache.",
	},
	{
		name: "Lait de sésame",
		category: "Laits végétaux",
		description: "Lait végétal riche en calcium, parfait pour les smoothies.",
	},
	{
		name: "Lait d'amande grillée",
		category: "Laits végétaux",
		description: "Boisson au goût intense et légèrement grillé.",
	},
	{
		name: "Lait de riz chocolat",
		category: "Laits végétaux",
		description: "Boisson végétale sucrée et gourmande.",
	},
	{
		name: "Lait de coco vanille",
		category: "Laits végétaux",
		description: "Lait crémeux parfumé à la vanille.",
	},
	{
		name: "Lait d'avoine bio",
		category: "Laits végétaux",
		description: "Alternative végétale certifiée biologique.",
	},
	// Beurres et margarines

	{
		name: "Beurre doux",
		category: "Beurres et margarines",
		description:
			"Beurre classique sans sel, parfait pour cuisiner ou tartiner.",
	},
	{
		name: "Beurre demi-sel",
		category: "Beurres et margarines",
		description:
			"Beurre légèrement salé, idéal pour les tartines et la pâtisserie.",
	},
	{
		name: "Beurre salé",
		category: "Beurres et margarines",
		description: "Beurre riche en sel, parfait pour les recettes savoureuses.",
	},
	{
		name: "Beurre bio",
		category: "Beurres et margarines",
		description:
			"Beurre fabriqué à partir de lait issu de l'agriculture biologique.",
	},
	{
		name: "Beurre clarifié",
		category: "Beurres et margarines",
		description:
			"Beurre purifié, parfait pour les cuissons à haute température.",
	},
	{
		name: "Beurre aux algues",
		category: "Beurres et margarines",
		description: "Beurre aromatisé avec une touche marine.",
	},
	{
		name: "Beurre allégé",
		category: "Beurres et margarines",
		description: "Beurre à faible teneur en matières grasses.",
	},
	{
		name: "Margarine végétale",
		category: "Beurres et margarines",
		description: "Alternative au beurre, idéale pour les régimes végétaliens.",
	},
	{
		name: "Beurre d'échiré",
		category: "Beurres et margarines",
		description: "Beurre artisanal avec une texture et un goût authentique.",
	},
	{
		name: "Beurre à l'ail",
		category: "Beurres et margarines",
		description: "Beurre parfumé idéal pour les plats et les toasts.",
	},
	{
		name: "Beurre aux herbes",
		category: "Beurres et margarines",
		description:
			"Beurre aromatisé parfait pour les grillades et accompagnements.",
	},
	{
		name: "Beurre de baratte",
		category: "Beurres et margarines",
		description:
			"Beurre traditionnel à la texture crémeuse et au goût intense.",
	},
	{
		name: "Beurre fouetté",
		category: "Beurres et margarines",
		description: "Beurre aérien et léger, facile à tartiner.",
	},
	{
		name: "Beurre aux truffes",
		category: "Beurres et margarines",
		description: "Beurre aromatisé au goût subtil et luxueux de truffes.",
	},
	{
		name: "Beurre fermier",
		category: "Beurres et margarines",
		description: "Beurre produit de manière artisanale avec du lait frais.",
	},
	{
		name: "Margarine bio",
		category: "Beurres et margarines",
		description:
			"Alternative au beurre, fabriquée à partir d'ingrédients biologiques.",
	},
	{
		name: "Beurre sans lactose",
		category: "Beurres et margarines",
		description: "Beurre adapté aux personnes intolérantes au lactose.",
	},
	{
		name: "Beurre parfumé au piment",
		category: "Beurres et margarines",
		description: "Beurre légèrement épicé pour rehausser vos plats.",
	},
	{
		name: "Beurre aux éclats de sel",
		category: "Beurres et margarines",
		description: "Beurre riche avec des cristaux de sel croquants.",
	},
	{
		name: "Beurre de cacahuète",
		category: "Beurres et margarines",
		description: "Pâte onctueuse à base d’arachides, idéale pour tartiner.",
	},
	{
		name: "Beurre de coco",
		category: "Beurres et margarines",
		description: "Alternative végétale sucrée à base de noix de coco.",
	},
	{
		name: "Margarine sans huile de palme",
		category: "Beurres et margarines",
		description: "Alternative au beurre respectueuse de l'environnement.",
	},
	{
		name: "Beurre à tartiner",
		category: "Beurres et margarines",
		description:
			"Beurre crémeux spécialement conçu pour être étalé facilement.",
	},
	{
		name: "Beurre ghee",
		category: "Beurres et margarines",
		description:
			"Beurre clarifié utilisé dans la cuisine indienne et asiatique.",
	},
	{
		name: "Beurre à la cannelle",
		category: "Beurres et margarines",
		description: "Beurre aromatisé pour des desserts gourmands.",
	},
	{
		name: "Margarine sans sel",
		category: "Beurres et margarines",
		description: "Alternative au beurre sans sel ajouté, idéale pour cuisiner.",
	},
	{
		name: "Beurre à la vanille",
		category: "Beurres et margarines",
		description: "Beurre sucré pour la pâtisserie et les desserts.",
	},
	{
		name: "Beurre de chèvre",
		category: "Beurres et margarines",
		description: "Beurre fabriqué à partir de lait de chèvre, au goût unique.",
	},
	{
		name: "Margarine enrichie en oméga-3",
		category: "Beurres et margarines",
		description: "Alternative au beurre pour un apport nutritionnel équilibré.",
	},
	// Fromages
	{
		name: "Camembert",
		category: "Fromages",
		description:
			"Fromage à pâte molle à croûte fleurie, au goût crémeux et intense.",
	},
	{
		name: "Brie",
		category: "Fromages",
		description: "Fromage doux à croûte fleurie, parfait pour les plateaux.",
	},
	{
		name: "Roquefort",
		category: "Fromages",
		description: "Fromage à pâte persillée, au goût puissant et salé.",
	},
	{
		name: "Comté",
		category: "Fromages",
		description: "Fromage à pâte pressée cuite, avec des arômes fruités.",
	},
	{
		name: "Gruyère",
		category: "Fromages",
		description: "Fromage à pâte dure, au goût légèrement salé et fruité.",
	},
	{
		name: "Emmental",
		category: "Fromages",
		description:
			"Fromage à pâte pressée cuite, avec des trous caractéristiques.",
	},
	{
		name: "Saint-Nectaire",
		category: "Fromages",
		description:
			"Fromage au lait cru avec une croûte lavée et un goût onctueux.",
	},
	{
		name: "Chèvre frais",
		category: "Fromages",
		description: "Fromage au lait de chèvre, doux et légèrement acidulé.",
	},
	{
		name: "Tomme de Savoie",
		category: "Fromages",
		description: "Fromage rustique à pâte pressée non cuite.",
	},
	{
		name: "Mozzarella",
		category: "Fromages",
		description: "Fromage italien frais, idéal pour les pizzas et salades.",
	},
	{
		name: "Feta",
		category: "Fromages",
		description: "Fromage grec à pâte ferme et au goût légèrement salé.",
	},
	{
		name: "Parmigiano Reggiano",
		category: "Fromages",
		description: "Fromage italien à pâte dure, idéal râpé sur les pâtes.",
	},
	{
		name: "Gorgonzola",
		category: "Fromages",
		description: "Fromage italien à pâte persillée, crémeux et parfumé.",
	},
	{
		name: "Cantal",
		category: "Fromages",
		description: "Fromage au goût doux ou plus corsé selon l'affinage.",
	},
	{
		name: "Reblochon",
		category: "Fromages",
		description: "Fromage savoyard à pâte molle, parfait pour la tartiflette.",
	},
	{
		name: "Munster",
		category: "Fromages",
		description: "Fromage à pâte molle au goût corsé et à croûte lavée.",
	},
	{
		name: "Pont-l'Évêque",
		category: "Fromages",
		description: "Fromage normand à pâte molle et à croûte lavée.",
	},
	{
		name: "Ricotta",
		category: "Fromages",
		description:
			"Fromage italien frais et léger, parfait pour les desserts et plats salés.",
	},
	{
		name: "Mascarpone",
		category: "Fromages",
		description: "Fromage frais italien crémeux, essentiel pour le tiramisu.",
	},
	{
		name: "Bleu d'Auvergne",
		category: "Fromages",
		description: "Fromage à pâte persillée, doux et fondant.",
	},
	{
		name: "Chaource",
		category: "Fromages",
		description: "Fromage à pâte molle et croûte fleurie, doux et crémeux.",
	},
	{
		name: "Raclette",
		category: "Fromages",
		description: "Fromage à pâte pressée non cuite, parfait pour être fondu.",
	},
	{
		name: "Cheddar",
		category: "Fromages",
		description:
			"Fromage anglais à pâte dure, souvent utilisé pour les burgers.",
	},
	{
		name: "Burrata",
		category: "Fromages",
		description: "Fromage italien frais, au cœur crémeux et délicat.",
	},
	{
		name: "Pecorino",
		category: "Fromages",
		description: "Fromage italien au lait de brebis, à pâte dure et salée.",
	},
	{
		name: "Abondance",
		category: "Fromages",
		description: "Fromage savoyard à pâte pressée cuite, riche et aromatique.",
	},
	{
		name: "Chèvre sec",
		category: "Fromages",
		description: "Fromage de chèvre affiné au goût plus prononcé.",
	},
	{
		name: "Saint-Félicien",
		category: "Fromages",
		description: "Fromage onctueux et crémeux à croûte fleurie.",
	},
	{
		name: "Brebis des Pyrénées",
		category: "Fromages",
		description: "Fromage doux et savoureux au lait de brebis.",
	},
	// Crèmes et sauces
	{
		name: "Crème fraîche épaisse",
		category: "Crèmes et sauces",
		description: "Crème riche et onctueuse, idéale pour les plats mijotés.",
	},
	{
		name: "Crème fraîche liquide",
		category: "Crèmes et sauces",
		description: "Crème légère parfaite pour les sauces et les desserts.",
	},
	{
		name: "Crème entière",
		category: "Crèmes et sauces",
		description: "Crème onctueuse et savoureuse pour enrichir vos recettes.",
	},
	{
		name: "Crème allégée",
		category: "Crèmes et sauces",
		description:
			"Crème à faible teneur en matières grasses pour les plats légers.",
	},
	{
		name: "Crème de soja",
		category: "Crèmes et sauces",
		description: "Alternative végétale pour remplacer la crème classique.",
	},
	{
		name: "Crème d’amande",
		category: "Crèmes et sauces",
		description: "Crème végétale au goût subtil, parfaite pour les desserts.",
	},
	{
		name: "Crème au mascarpone",
		category: "Crèmes et sauces",
		description: "Crème riche et douce, idéale pour les plats italiens.",
	},
	{
		name: "Crème à fouetter",
		category: "Crèmes et sauces",
		description: "Crème parfaite pour réaliser des chantilly maison.",
	},
	{
		name: "Crème anglaise",
		category: "Crèmes et sauces",
		description: "Sauce sucrée idéale pour accompagner les gâteaux et fruits.",
	},
	{
		name: "Sauce béchamel",
		category: "Crèmes et sauces",
		description: "Base crémeuse essentielle pour les gratins et lasagnes.",
	},
	{
		name: "Sauce tomate",
		category: "Crèmes et sauces",
		description: "Sauce classique pour accompagner les pâtes et pizzas.",
	},
	{
		name: "Sauce pesto",
		category: "Crèmes et sauces",
		description: "Mélange d'herbes et de parmesan, parfait pour les pâtes.",
	},
	{
		name: "Sauce au curry",
		category: "Crèmes et sauces",
		description: "Sauce épicée et parfumée pour accompagner les viandes.",
	},
	{
		name: "Sauce carbonara",
		category: "Crèmes et sauces",
		description: "Sauce crémeuse au goût de lardons pour les pâtes.",
	},
	{
		name: "Sauce bolognaise",
		category: "Crèmes et sauces",
		description: "Sauce italienne à base de viande et de tomates.",
	},
	{
		name: "Crème de champignons",
		category: "Crèmes et sauces",
		description: "Crème onctueuse idéale pour accompagner les viandes.",
	},
	{
		name: "Sauce au poivre",
		category: "Crèmes et sauces",
		description: "Sauce relevée pour sublimer les viandes grillées.",
	},
	{
		name: "Sauce au roquefort",
		category: "Crèmes et sauces",
		description: "Sauce crémeuse au goût intense de fromage bleu.",
	},
	{
		name: "Sauce hollandaise",
		category: "Crèmes et sauces",
		description: "Sauce classique pour accompagner les œufs et poissons.",
	},
	{
		name: "Sauce tartare",
		category: "Crèmes et sauces",
		description:
			"Sauce épaisse avec des cornichons et câpres, idéale pour les poissons.",
	},
	{
		name: "Sauce barbecue",
		category: "Crèmes et sauces",
		description: "Sauce fumée et sucrée pour les grillades.",
	},
	{
		name: "Sauce soja",
		category: "Crèmes et sauces",
		description:
			"Condiment asiatique salé, parfait pour les marinades et woks.",
	},
	{
		name: "Sauce teriyaki",
		category: "Crèmes et sauces",
		description: "Sauce sucrée-salée pour les plats asiatiques.",
	},
	{
		name: "Sauce aux herbes",
		category: "Crèmes et sauces",
		description: "Sauce légère et parfumée pour accompagner les légumes.",
	},
	{
		name: "Crème d’ail",
		category: "Crèmes et sauces",
		description: "Crème savoureuse pour enrichir vos plats méditerranéens.",
	},
	{
		name: "Crème au citron",
		category: "Crèmes et sauces",
		description: "Sauce acidulée pour poissons et fruits de mer.",
	},
	{
		name: "Crème de truffe",
		category: "Crèmes et sauces",
		description: "Crème raffinée au goût unique de truffe.",
	},
	{
		name: "Sauce aux champignons",
		category: "Crèmes et sauces",
		description: "Sauce riche et savoureuse pour les plats de viande ou pâtes.",
	},
	{
		name: "Crème caramel",
		category: "Crèmes et sauces",
		description: "Sauce sucrée pour nappages de desserts.",
	},

	// Gâteaux et pâtisseries
	{
		name: "Éclair au chocolat",
		category: "Gâteaux et pâtisseries",
		description:
			"Pâtisserie garnie de crème au chocolat et glacée au chocolat.",
	},
	{
		name: "Tarte aux pommes",
		category: "Gâteaux et pâtisseries",
		description: "Dessert classique avec des tranches de pommes sur une pâte.",
	},
	{
		name: "Tarte au citron meringuée",
		category: "Gâteaux et pâtisseries",
		description: "Tarte sucrée et acidulée surmontée de meringue.",
	},
	{
		name: "Millefeuille",
		category: "Gâteaux et pâtisseries",
		description:
			"Pâtisserie composée de couches de pâte feuilletée et de crème pâtissière.",
	},
	{
		name: "Opéra",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau sophistiqué à base de café et de chocolat.",
	},
	{
		name: "Macarons",
		category: "Gâteaux et pâtisseries",
		description:
			"Délicats biscuits français à base d’amandes et garnis de crème.",
	},
	{
		name: "Madeleines",
		category: "Gâteaux et pâtisseries",
		description: "Petits gâteaux moelleux en forme de coquillage.",
	},
	{
		name: "Brownie",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau dense et chocolaté, souvent agrémenté de noix.",
	},
	{
		name: "Fondant au chocolat",
		category: "Gâteaux et pâtisseries",
		description: "Dessert au cœur fondant et intense en chocolat.",
	},
	{
		name: "Cheesecake",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau crémeux à base de fromage frais.",
	},
	{
		name: "Tarte aux fraises",
		category: "Gâteaux et pâtisseries",
		description: "Tarte garnie de crème pâtissière et de fraises fraîches.",
	},
	{
		name: "Paris-Brest",
		category: "Gâteaux et pâtisseries",
		description: "Pâtisserie ronde garnie de crème pralinée.",
	},
	{
		name: "Chou à la crème",
		category: "Gâteaux et pâtisseries",
		description: "Pâtisserie légère garnie de crème pâtissière ou chantilly.",
	},
	{
		name: "Baba au rhum",
		category: "Gâteaux et pâtisseries",
		description:
			"Gâteau imbibé de sirop au rhum, souvent accompagné de chantilly.",
	},
	{
		name: "Clafoutis aux cerises",
		category: "Gâteaux et pâtisseries",
		description:
			"Dessert rustique avec des cerises cuites dans une pâte moelleuse.",
	},
	{
		name: "Galette des rois",
		category: "Gâteaux et pâtisseries",
		description:
			"Pâtisserie traditionnelle à base de pâte feuilletée et de frangipane.",
	},
	{
		name: "Cake aux fruits",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau moelleux avec des fruits confits.",
	},
	{
		name: "Pains au chocolat",
		category: "Gâteaux et pâtisseries",
		description: "Viennoiseries fourrées de chocolat.",
	},
	{
		name: "Croissants",
		category: "Gâteaux et pâtisseries",
		description: "Viennoiseries feuilletées et légèrement beurrées.",
	},
	{
		name: "Tarte au chocolat",
		category: "Gâteaux et pâtisseries",
		description: "Tarte sucrée garnie d'une ganache au chocolat.",
	},
	{
		name: "Gâteau roulé",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau roulé garni de confiture ou de crème.",
	},
	{
		name: "Tarte Tatin",
		category: "Gâteaux et pâtisseries",
		description: "Tarte renversée aux pommes caramélisées.",
	},
	{
		name: "Biscuit sablé",
		category: "Gâteaux et pâtisseries",
		description: "Biscuit croustillant au beurre, idéal pour le goûter.",
	},
	{
		name: "Forêt-Noire",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau au chocolat avec des cerises et de la chantilly.",
	},
	{
		name: "Financiers",
		category: "Gâteaux et pâtisseries",
		description: "Petits gâteaux moelleux aux amandes.",
	},
	{
		name: "Pain d'épices",
		category: "Gâteaux et pâtisseries",
		description: "Gâteau parfumé aux épices et au miel.",
	},
	{
		name: "Religieuse au café",
		category: "Gâteaux et pâtisseries",
		description:
			"Pâtisserie composée de deux choux superposés, garnis de crème au café.",
	},
	{
		name: "Tarte aux poires amandine",
		category: "Gâteaux et pâtisseries",
		description: "Tarte garnie de poires et de crème d'amande.",
	},
	{
		name: "Crêpes sucrées",
		category: "Gâteaux et pâtisseries",
		description:
			"Pâte fine et sucrée, idéale avec du sucre ou de la confiture.",
	},

	// Thés
	{
		name: "Thé noir Earl Grey",
		category: "Thé",
		description: "Thé noir aromatisé à la bergamote.",
	},
	{
		name: "Thé vert Sencha",
		category: "Thé",
		description: "Thé vert japonais riche en antioxydants.",
	},
	{
		name: "Thé blanc Pai Mu Tan",
		category: "Thé",
		description: "Thé délicat aux notes florales.",
	},
	{
		name: "Thé Oolong",
		category: "Thé",
		description: "Thé semi-fermenté avec une saveur subtile et florale.",
	},
	{
		name: "Thé à la menthe",
		category: "Thé",
		description:
			"Mélange de thé et de feuilles de menthe pour une boisson rafraîchissante.",
	},
	{
		name: "Thé chai indien",
		category: "Thé",
		description:
			"Mélange épicé de thé noir et d'épices comme la cannelle et le gingembre.",
	},
	{
		name: "Thé noir Darjeeling",
		category: "Thé",
		description: "Thé noir indien raffiné aux notes florales.",
	},
	{
		name: "Thé vert au jasmin",
		category: "Thé",
		description: "Thé vert délicatement parfumé aux fleurs de jasmin.",
	},
	{
		name: "Thé rooibos vanille",
		category: "Thé",
		description: "Infusion douce sans théine, aromatisée à la vanille.",
	},
	{
		name: "Thé glacé citron",
		category: "Thé",
		description: "Thé rafraîchissant prêt à boire, aromatisé au citron.",
	},
	{
		name: "Thé détox",
		category: "Thé",
		description: "Mélange de thé vert et d'herbes pour purifier l'organisme.",
	},
	{
		name: "Thé noir Assam",
		category: "Thé",
		description: "Thé noir corsé originaire de l'Inde.",
	},
	{
		name: "Thé matcha",
		category: "Thé",
		description: "Thé vert en poudre, utilisé pour les boissons et desserts.",
	},
	{
		name: "Thé blanc à la pêche",
		category: "Thé",
		description: "Thé blanc délicat avec des arômes fruités de pêche.",
	},
	{
		name: "Thé vert citron-gingembre",
		category: "Thé",
		description:
			"Mélange de thé vert et de saveurs piquantes de citron et gingembre.",
	},
	{
		name: "Thé noir fumé Lapsang Souchong",
		category: "Thé",
		description: "Thé noir aux arômes fumés et boisés.",
	},
	{
		name: "Thé glacé pêche",
		category: "Thé",
		description: "Thé rafraîchissant aromatisé à la pêche.",
	},
	{
		name: "Thé à la camomille",
		category: "Thé",
		description: "Infusion apaisante à base de fleurs de camomille.",
	},
	{
		name: "Thé noir aux fruits rouges",
		category: "Thé",
		description: "Mélange de thé noir et de fruits rouges sucrés.",
	},
	{
		name: "Thé vert menthe-citron",
		category: "Thé",
		description: "Mélange rafraîchissant de thé vert, menthe et citron.",
	},
	{
		name: "Thé blanc au litchi",
		category: "Thé",
		description: "Thé subtil aux arômes exotiques de litchi.",
	},
	{
		name: "Thé noir à la vanille",
		category: "Thé",
		description: "Thé noir aromatisé avec une touche de vanille douce.",
	},
	{
		name: "Thé vert tropical",
		category: "Thé",
		description: "Thé aux saveurs exotiques comme la mangue et l'ananas.",
	},
	{
		name: "Thé noir cannelle-orange",
		category: "Thé",
		description: "Mélange épicé parfait pour l'hiver.",
	},
	{
		name: "Thé glacé framboise",
		category: "Thé",
		description: "Boisson rafraîchissante aux arômes de framboise.",
	},
	{
		name: "Thé vert matcha-citron",
		category: "Thé",
		description: "Association énergisante de matcha et de citron.",
	},
	{
		name: "Thé noir aux épices",
		category: "Thé",
		description:
			"Mélange de thé noir et d'épices pour une boisson chaude réconfortante.",
	},
	{
		name: "Thé blanc lavande",
		category: "Thé",
		description: "Thé floral aux délicates notes de lavande.",
	},
	{
		name: "Thé déthéiné aux fruits",
		category: "Thé",
		description:
			"Mélange sans théine, parfait pour une consommation en soirée.",
	},
	{
		name: "Thé Earl Grey à la bergamote et citron",
		category: "Thé",
		description: "Thé noir classique avec une touche citronnée.",
	},

	// Café

	{
		name: "Café moulu",
		category: "Café",
		description: "Café prêt à l’emploi pour cafetière classique.",
	},
	{
		name: "Café en grains",
		category: "Café",
		description: "Grains de café entiers pour moulins et machines.",
	},
	{
		name: "Café instantané",
		category: "Café",
		description: "Café soluble pour une préparation rapide.",
	},
	{
		name: "Café décaféiné",
		category: "Café",
		description: "Café sans caféine, idéal pour le soir.",
	},
	{
		name: "Café expresso",
		category: "Café",
		description: "Mélange intense conçu pour les machines à expresso.",
	},
	{
		name: "Capsules de café",
		category: "Café",
		description: "Dosettes compatibles avec les machines à capsules.",
	},
	{
		name: "Café arabica",
		category: "Café",
		description: "Café doux et raffiné à base d’arabica.",
	},
	{
		name: "Café robusta",
		category: "Café",
		description: "Café corsé au goût intense.",
	},
	{
		name: "Café glacé",
		category: "Café",
		description: "Boisson froide à base de café et de lait.",
	},
	{
		name: "Café bio",
		category: "Café",
		description: "Café cultivé selon des pratiques biologiques respectueuses.",
	},
	{
		name: "Café moka",
		category: "Café",
		description: "Café au goût subtil de chocolat.",
	},
	{
		name: "Café colombien",
		category: "Café",
		description: "Café d’origine réputé pour ses arômes fruités.",
	},
	{
		name: "Café éthiopien",
		category: "Café",
		description: "Café d’origine aux saveurs florales et complexes.",
	},
	{
		name: "Café turc",
		category: "Café",
		description: "Café finement moulu préparé selon la tradition turque.",
	},
	{
		name: "Café au lait",
		category: "Café",
		description: "Boisson douce mélangeant café et lait.",
	},
	{
		name: "Café latté",
		category: "Café",
		description: "Café expresso avec une grande quantité de lait chaud.",
	},
	{
		name: "Cappuccino",
		category: "Café",
		description: "Café expresso garni de lait mousseux et de cacao.",
	},
	{
		name: "Macchiato",
		category: "Café",
		description: "Expresso surmonté d’une petite quantité de mousse de lait.",
	},
	{
		name: "Café soluble aromatisé",
		category: "Café",
		description:
			"Café instantané disponible en saveurs comme vanille ou caramel.",
	},
	{
		name: "Café vietnamien",
		category: "Café",
		description: "Café sucré souvent préparé avec du lait concentré.",
	},
	{
		name: "Café au caramel",
		category: "Café",
		description: "Café doux et sucré avec une touche de caramel.",
	},
	{
		name: "Café froid nitro",
		category: "Café",
		description: "Café froid infusé à l’azote pour une texture veloutée.",
	},
	{
		name: "Café corsé",
		category: "Café",
		description: "Café au goût puissant pour les amateurs de saveurs intenses.",
	},
	{
		name: "Café créole",
		category: "Café",
		description: "Boisson épicée à base de café, souvent avec du rhum.",
	},
	{
		name: "Café équitable",
		category: "Café",
		description: "Café issu de filières respectant les producteurs locaux.",
	},
	{
		name: "Café d’altitude",
		category: "Café",
		description: "Café cultivé en haute montagne pour des arômes distinctifs.",
	},
	{
		name: "Café avec notes fruitées",
		category: "Café",
		description: "Mélange de cafés aux arômes naturels de fruits.",
	},
	{
		name: "Café à l’ancienne",
		category: "Café",
		description: "Préparation artisanale au goût riche et authentique.",
	},
	{
		name: "Café instantané décaféiné",
		category: "Café",
		description: "Boisson rapide sans caféine, idéale pour une pause légère.",
	},

	// Eaux minérales
	{
		name: "Eau plate",
		category: "Eaux minérales",
		description: "Eau minérale naturelle sans gaz.",
	},
	{
		name: "Eau gazeuse",
		category: "Eaux minérales",
		description: "Eau naturellement ou artificiellement gazéifiée.",
	},
	{
		name: "Eau minérale naturelle",
		category: "Eaux minérales",
		description: "Eau provenant d’une source protégée, riche en minéraux.",
	},
	{
		name: "Eau de source",
		category: "Eaux minérales",
		description: "Eau provenant d’une source naturelle, légère et pure.",
	},
	{
		name: "Eau pétillante citron",
		category: "Eaux minérales",
		description: "Eau gazeuse aromatisée au citron.",
	},
	{
		name: "Eau gazeuse légère",
		category: "Eaux minérales",
		description: "Eau pétillante avec une teneur réduite en gaz.",
	},
	{
		name: "Eau minérale enrichie en magnésium",
		category: "Eaux minérales",
		description:
			"Eau contenant une forte teneur en magnésium pour les besoins nutritionnels.",
	},
	{
		name: "Eau minérale riche en calcium",
		category: "Eaux minérales",
		description: "Eau naturelle favorisant un bon apport en calcium.",
	},
	{
		name: "Eau gazeuse aromatisée fruits rouges",
		category: "Eaux minérales",
		description: "Eau pétillante aux notes de fraise et framboise.",
	},
	{
		name: "Eau filtrée",
		category: "Eaux minérales",
		description: "Eau purifiée et sans impuretés.",
	},
	{
		name: "Eau minérale pour bébés",
		category: "Eaux minérales",
		description: "Eau douce et adaptée à la préparation des biberons.",
	},
	{
		name: "Eau minérale alcaline",
		category: "Eaux minérales",
		description: "Eau ayant un pH élevé, réputée pour ses bienfaits santé.",
	},
	{
		name: "Eau minérale faiblement minéralisée",
		category: "Eaux minérales",
		description: "Eau légère, parfaite pour une hydratation quotidienne.",
	},
	{
		name: "Eau gazeuse citron-menthe",
		category: "Eaux minérales",
		description:
			"Eau pétillante avec un mélange rafraîchissant de citron et menthe.",
	},
	{
		name: "Eau enrichie en oligo-éléments",
		category: "Eaux minérales",
		description:
			"Eau spécialement formulée pour combler les carences en minéraux.",
	},
	{
		name: "Eau aromatisée pêche",
		category: "Eaux minérales",
		description: "Eau plate délicatement parfumée à la pêche.",
	},
	{
		name: "Eau gazeuse pamplemousse",
		category: "Eaux minérales",
		description:
			"Eau pétillante aux saveurs légèrement amères du pamplemousse.",
	},
	{
		name: "Eau minérale sportive",
		category: "Eaux minérales",
		description: "Eau enrichie en électrolytes pour les activités physiques.",
	},
	{
		name: "Eau naturelle de montagne",
		category: "Eaux minérales",
		description: "Eau pure collectée dans les montagnes.",
	},
	{
		name: "Eau minérale bio",
		category: "Eaux minérales",
		description: "Eau certifiée issue d’une gestion écologique de la source.",
	},
	{
		name: "Eau gazeuse intense",
		category: "Eaux minérales",
		description: "Eau pétillante avec une forte teneur en gaz.",
	},
	{
		name: "Eau minérale plate au goût neutre",
		category: "Eaux minérales",
		description:
			"Eau douce et sans arrière-goût, idéale pour la cuisine et la table.",
	},
	{
		name: "Eau minérale pour cure thermale",
		category: "Eaux minérales",
		description: "Eau spécifique pour des soins médicinaux et bien-être.",
	},
	{
		name: "Eau gazeuse naturelle",
		category: "Eaux minérales",
		description: "Eau pétillante directement extraite de la source.",
	},
	{
		name: "Eau plate en bouteille recyclable",
		category: "Eaux minérales",
		description:
			"Eau conditionnée dans une bouteille respectueuse de l’environnement.",
	},
	{
		name: "Eau minérale aromatisée cassis",
		category: "Eaux minérales",
		description: "Eau parfumée avec des notes de cassis fruité.",
	},
	{
		name: "Eau pétillante à la fleur d’oranger",
		category: "Eaux minérales",
		description: "Eau gazeuse légèrement parfumée à la fleur d’oranger.",
	},
	{
		name: "Eau enrichie en zinc",
		category: "Eaux minérales",
		description:
			"Eau minérale adaptée aux besoins en zinc pour la peau et l’immunité.",
	},
	{
		name: "Eau purifiée en carafe",
		category: "Eaux minérales",
		description:
			"Eau filtrée et servie dans une carafe, idéale pour la maison.",
	},

	// Glaces et sorbets
	{
		name: "Glace vanille",
		category: "Glaces et sorbets",
		description: "Dessert glacé classique à la vanille.",
	},
	{
		name: "Glace chocolat",
		category: "Glaces et sorbets",
		description: "Glace riche et intense au chocolat.",
	},
	{
		name: "Glace fraise",
		category: "Glaces et sorbets",
		description: "Dessert sucré aux saveurs fruitées de fraise.",
	},
	{
		name: "Glace pistache",
		category: "Glaces et sorbets",
		description: "Glace crémeuse au goût subtil de pistache.",
	},
	{
		name: "Glace café",
		category: "Glaces et sorbets",
		description:
			"Glace aromatisée au café pour les amateurs de saveurs corsées.",
	},
	{
		name: "Sorbets citron",
		category: "Glaces et sorbets",
		description: "Dessert glacé rafraîchissant au citron.",
	},
	{
		name: "Sorbets mangue",
		category: "Glaces et sorbets",
		description: "Dessert exotique aux saveurs tropicales de mangue.",
	},
	{
		name: "Sorbets framboise",
		category: "Glaces et sorbets",
		description: "Dessert glacé acidulé à base de framboises.",
	},
	{
		name: "Glace caramel beurre salé",
		category: "Glaces et sorbets",
		description: "Glace gourmande au caramel et une pointe de sel.",
	},
	{
		name: "Glace noix de coco",
		category: "Glaces et sorbets",
		description: "Dessert exotique au goût intense de coco.",
	},
	{
		name: "Glace stracciatella",
		category: "Glaces et sorbets",
		description: "Glace à la vanille parsemée de copeaux de chocolat.",
	},
	{
		name: "Glace amande",
		category: "Glaces et sorbets",
		description: "Glace douce et crémeuse au goût d’amande.",
	},
	{
		name: "Glace noisette",
		category: "Glaces et sorbets",
		description: "Glace riche aux saveurs de noisettes grillées.",
	},
	{
		name: "Glace tiramisu",
		category: "Glaces et sorbets",
		description: "Glace inspirée du célèbre dessert italien.",
	},
	{
		name: "Sorbets fruits rouges",
		category: "Glaces et sorbets",
		description: "Mélange glacé aux saveurs de fraise, framboise et cassis.",
	},
	{
		name: "Glace menthe-chocolat",
		category: "Glaces et sorbets",
		description:
			"Glace rafraîchissante à la menthe avec des morceaux de chocolat.",
	},
	{
		name: "Glace cookie dough",
		category: "Glaces et sorbets",
		description: "Glace gourmande avec des morceaux de pâte à cookies.",
	},
	{
		name: "Glace au miel",
		category: "Glaces et sorbets",
		description: "Glace douce et sucrée au miel naturel.",
	},
	{
		name: "Sorbets orange sanguine",
		category: "Glaces et sorbets",
		description: "Dessert glacé au goût acidulé d’orange sanguine.",
	},
	{
		name: "Glace vanille bourbon",
		category: "Glaces et sorbets",
		description: "Glace raffinée à la vanille bourbon.",
	},
	{
		name: "Sorbets cassis",
		category: "Glaces et sorbets",
		description: "Dessert glacé fruité et légèrement acidulé.",
	},
	{
		name: "Glace spéculoos",
		category: "Glaces et sorbets",
		description: "Glace aux saveurs épicées de biscuits spéculoos.",
	},
	{
		name: "Glace au lait d’amande",
		category: "Glaces et sorbets",
		description: "Glace végétale douce et onctueuse à base de lait d’amande.",
	},
	{
		name: "Glace chocolat blanc",
		category: "Glaces et sorbets",
		description: "Dessert sucré au chocolat blanc onctueux.",
	},
	{
		name: "Sorbets ananas",
		category: "Glaces et sorbets",
		description: "Dessert glacé tropical au goût d’ananas.",
	},
	{
		name: "Glace banane",
		category: "Glaces et sorbets",
		description: "Glace douce et fruitée à base de bananes mûres.",
	},
	{
		name: "Sorbets kiwi",
		category: "Glaces et sorbets",
		description: "Dessert glacé aux saveurs acidulées de kiwi.",
	},
	{
		name: "Glace rhum-raisins",
		category: "Glaces et sorbets",
		description: "Glace parfumée au rhum avec des raisins secs imbibés.",
	},
	{
		name: "Sorbets pêche",
		category: "Glaces et sorbets",
		description: "Dessert glacé délicatement parfumé à la pêche.",
	},
	{
		name: "Glace aux fruits exotiques",
		category: "Glaces et sorbets",
		description: "Mélange tropical pour une explosion de saveurs.",
	},

	// Pizzas surgelées
	{
		name: "Pizza Margherita surgelée",
		category: "Pizzas surgelées",
		description: "Pizza classique avec sauce tomate, mozzarella et basilic.",
	},
	{
		name: "Pizza quatre fromages surgelée",
		category: "Pizzas surgelées",
		description:
			"Pizza riche en fromages tels que mozzarella, gorgonzola, chèvre et parmesan.",
	},
	{
		name: "Pizza pepperoni surgelée",
		category: "Pizzas surgelées",
		description: "Pizza savoureuse garnie de tranches de pepperoni.",
	},
	{
		name: "Pizza végétarienne surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de légumes frais et savoureux.",
	},
	{
		name: "Pizza bolognaise surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie d’une sauce bolognaise riche et de mozzarella.",
	},
	{
		name: "Pizza hawaïenne surgelée",
		category: "Pizzas surgelées",
		description: "Pizza sucrée-salée avec jambon et ananas.",
	},
	{
		name: "Pizza au saumon surgelée",
		category: "Pizzas surgelées",
		description: "Pizza raffinée garnie de saumon fumé et de crème fraîche.",
	},
	{
		name: "Pizza calzone surgelée",
		category: "Pizzas surgelées",
		description: "Pizza pliée en chausson, garnie de fromage et de jambon.",
	},
	{
		name: "Pizza spicy surgelée",
		category: "Pizzas surgelées",
		description: "Pizza épicée avec des piments et du chorizo.",
	},
	{
		name: "Pizza au poulet surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de morceaux de poulet et d’oignons.",
	},
	{
		name: "Pizza forestière surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de champignons, crème fraîche et emmental.",
	},
	{
		name: "Pizza au thon surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de thon, olives et oignons rouges.",
	},
	{
		name: "Pizza bianca surgelée",
		category: "Pizzas surgelées",
		description: "Pizza sans sauce tomate, garnie de fromage et crème fraîche.",
	},
	{
		name: "Mini-pizzas surgelées",
		category: "Pizzas surgelées",
		description: "Format individuel, parfait pour les apéritifs.",
	},
	{
		name: "Pizza napolitaine surgelée",
		category: "Pizzas surgelées",
		description: "Pizza traditionnelle avec anchois, câpres et olives.",
	},
	{
		name: "Pizza sans gluten surgelée",
		category: "Pizzas surgelées",
		description: "Pizza adaptée aux régimes sans gluten.",
	},
	{
		name: "Pizza royale surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de jambon, champignons et olives.",
	},
	{
		name: "Pizza chèvre-miel surgelée",
		category: "Pizzas surgelées",
		description: "Pizza sucrée-salée avec du fromage de chèvre et du miel.",
	},
	{
		name: "Pizza barbecue surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de viande et d’une sauce barbecue savoureuse.",
	},
	{
		name: "Pizza fromage et épinards surgelée",
		category: "Pizzas surgelées",
		description: "Pizza végétarienne avec épinards frais et fromage.",
	},
	{
		name: "Pizza au chorizo surgelée",
		category: "Pizzas surgelées",
		description: "Pizza épicée garnie de chorizo tranché.",
	},
	{
		name: "Pizza champignons et truffe surgelée",
		category: "Pizzas surgelées",
		description: "Pizza raffinée avec une touche de truffe.",
	},
	{
		name: "Pizza tomate-mozzarella surgelée",
		category: "Pizzas surgelées",
		description: "Pizza simple et savoureuse avec des ingrédients classiques.",
	},
	{
		name: "Pizza végétalienne surgelée",
		category: "Pizzas surgelées",
		description: "Pizza sans produits d'origine animale, adaptée aux végans.",
	},
	{
		name: "Pizza aux fruits de mer surgelée",
		category: "Pizzas surgelées",
		description: "Pizza garnie de calamars, crevettes et moules.",
	},
	{
		name: "Pizza double fromage surgelée",
		category: "Pizzas surgelées",
		description: "Pizza extra gourmande avec un mélange de deux fromages.",
	},
	{
		name: "Pizza aux légumes grillés surgelée",
		category: "Pizzas surgelées",
		description: "Pizza savoureuse avec des légumes légèrement grillés.",
	},
	{
		name: "Pizza raclette surgelée",
		category: "Pizzas surgelées",
		description: "Pizza gourmande avec fromage à raclette et pommes de terre.",
	},
	{
		name: "Pizza épinards et feta surgelée",
		category: "Pizzas surgelées",
		description: "Pizza végétarienne inspirée de saveurs grecques.",
	},

	// Snacks
	{
		name: "Chips nature",
		category: "Snacks",
		description:
			"Tranches de pommes de terre croustillantes légèrement salées.",
	},
	{
		name: "Chips barbecue",
		category: "Snacks",
		description: "Chips au goût fumé et savoureux de barbecue.",
	},
	{
		name: "Popcorn sucré",
		category: "Snacks",
		description:
			"Maïs soufflé légèrement sucré, parfait pour les soirées cinéma.",
	},
	{
		name: "Popcorn salé",
		category: "Snacks",
		description: "Maïs soufflé avec une touche de sel.",
	},
	{
		name: "Bretzels",
		category: "Snacks",
		description: "Snacks salés en forme de nœuds, croustillants et dorés.",
	},
	{
		name: "Barres de céréales",
		category: "Snacks",
		description: "Barres énergétiques à base de céréales et fruits secs.",
	},
	{
		name: "Chips de maïs",
		category: "Snacks",
		description: "Snacks croustillants à base de farine de maïs.",
	},
	{
		name: "Mix apéritif",
		category: "Snacks",
		description: "Mélange de cacahuètes, biscuits salés et noix.",
	},
	{
		name: "Cacahuètes grillées",
		category: "Snacks",
		description: "Fruits secs grillés et légèrement salés.",
	},
	{
		name: "Noix de cajou épicées",
		category: "Snacks",
		description: "Cajous croquants relevés avec des épices.",
	},
	{
		name: "Biscuits apéritifs au fromage",
		category: "Snacks",
		description: "Petits biscuits croustillants au goût de fromage.",
	},
	{
		name: "Mini-roulés au jambon",
		category: "Snacks",
		description: "Snacks savoureux prêts à servir.",
	},
	{
		name: "Chips au vinaigre",
		category: "Snacks",
		description: "Chips au goût acidulé et croquant.",
	},
	{
		name: "Crackers aux herbes",
		category: "Snacks",
		description: "Petits biscuits salés parfumés aux herbes.",
	},
	{
		name: "Pois chiches grillés",
		category: "Snacks",
		description: "Snacks sains et croustillants, riches en protéines.",
	},
	{
		name: "Chips de légumes",
		category: "Snacks",
		description: "Tranches de légumes déshydratés pour une collation saine.",
	},
	{
		name: "Mix de noix et fruits secs",
		category: "Snacks",
		description: "Mélange nutritif pour une collation équilibrée.",
	},
	{
		name: "Mini-pizzas apéritives",
		category: "Snacks",
		description: "Petites bouchées gourmandes pour l'apéritif.",
	},
	{
		name: "Chips épicées",
		category: "Snacks",
		description: "Chips relevées avec un mélange d'épices.",
	},
	{
		name: "Crackers multigrains",
		category: "Snacks",
		description: "Biscuits croustillants riches en fibres.",
	},
	{
		name: "Popcorn caramel",
		category: "Snacks",
		description: "Maïs soufflé enrobé de caramel croquant.",
	},
	{
		name: "Nachos au fromage",
		category: "Snacks",
		description: "Snacks à base de maïs avec un goût intense de fromage.",
	},
	{
		name: "Boules apéritives",
		category: "Snacks",
		description: "Snacks légers et croustillants pour les apéritifs.",
	},
	{
		name: "Cacahuètes au miel",
		category: "Snacks",
		description: "Fruits secs sucrés et légèrement grillés.",
	},
	{
		name: "Bâtonnets salés",
		category: "Snacks",
		description:
			"Petits bâtons croquants parfaits pour tremper dans des sauces.",
	},
	{
		name: "Chips ondulées",
		category: "Snacks",
		description: "Chips épaisses et croustillantes avec des ondulations.",
	},
	{
		name: "Snack aux lentilles",
		category: "Snacks",
		description: "Collation croustillante et riche en protéines végétales.",
	},
	{
		name: "Noix au paprika",
		category: "Snacks",
		description: "Noix grillées légèrement épicées.",
	},
	{
		name: "Crackers au sésame",
		category: "Snacks",
		description: "Biscuits salés au goût délicat de sésame.",
	},

	// Sauces asiatiques
	{
		name: "Sauce soja classique",
		category: "Sauces asiatiques",
		description:
			"Sauce salée utilisée pour les marinades et les plats asiatiques.",
	},
	{
		name: "Sauce soja sucrée",
		category: "Sauces asiatiques",
		description:
			"Sauce épaisse et sucrée, parfaite pour les viandes et légumes.",
	},
	{
		name: "Sauce teriyaki",
		category: "Sauces asiatiques",
		description: "Sauce japonaise sucrée-salée pour marinades et grillades.",
	},
	{
		name: "Sauce nuoc-mâm",
		category: "Sauces asiatiques",
		description: "Condiment vietnamien à base de poisson fermenté.",
	},
	{
		name: "Sauce aigre-douce",
		category: "Sauces asiatiques",
		description:
			"Sauce chinoise sucrée et acidulée pour accompagner les nems et viandes.",
	},
	{
		name: "Sauce chili douce",
		category: "Sauces asiatiques",
		description:
			"Sauce sucrée et légèrement épicée pour les plats thaïlandais.",
	},
	{
		name: "Sauce sésame",
		category: "Sauces asiatiques",
		description: "Sauce crémeuse au goût prononcé de sésame grillé.",
	},
	{
		name: "Sauce satay",
		category: "Sauces asiatiques",
		description:
			"Sauce indonésienne à base de cacahuètes, parfaite pour les brochettes.",
	},
	{
		name: "Sauce hoisin",
		category: "Sauces asiatiques",
		description:
			"Sauce chinoise épaisse et sucrée utilisée pour les marinades.",
	},
	{
		name: "Sauce ponzu",
		category: "Sauces asiatiques",
		description: "Sauce japonaise à base d’agrumes et de sauce soja.",
	},
	{
		name: "Sauce au curry rouge",
		category: "Sauces asiatiques",
		description: "Sauce épicée utilisée pour les currys thaïlandais.",
	},
	{
		name: "Sauce au curry vert",
		category: "Sauces asiatiques",
		description: "Sauce parfumée avec un mélange d’herbes fraîches.",
	},
	{
		name: "Sauce pimentée Sriracha",
		category: "Sauces asiatiques",
		description: "Sauce thaïlandaise épicée pour relever vos plats.",
	},
	{
		name: "Sauce aux huîtres",
		category: "Sauces asiatiques",
		description:
			"Sauce chinoise riche en umami pour les sautés de légumes et viandes.",
	},
	{
		name: "Sauce yakitori",
		category: "Sauces asiatiques",
		description: "Sauce sucrée utilisée pour les brochettes japonaises.",
	},
	{
		name: "Sauce soja tamari",
		category: "Sauces asiatiques",
		description: "Sauce soja sans gluten, idéale pour les intolérants.",
	},
	{
		name: "Sauce gyoza",
		category: "Sauces asiatiques",
		description: "Sauce vinaigrée pour accompagner les raviolis japonais.",
	},
	{
		name: "Sauce aux prunes",
		category: "Sauces asiatiques",
		description: "Sauce sucrée-acidulée pour accompagner les plats de porc.",
	},
	{
		name: "Sauce au wasabi",
		category: "Sauces asiatiques",
		description: "Sauce relevée au goût piquant pour accompagner les sushis.",
	},
	{
		name: "Sauce au gingembre",
		category: "Sauces asiatiques",
		description:
			"Sauce fraîche et épicée pour les plats de poisson et de viande.",
	},
	{
		name: "Sauce aux haricots noirs",
		category: "Sauces asiatiques",
		description: "Sauce chinoise salée et fermentée pour les plats mijotés.",
	},
	{
		name: "Sauce pour wok",
		category: "Sauces asiatiques",
		description: "Mélange savoureux pour relever vos sautés.",
	},
	{
		name: "Sauce chili piquante",
		category: "Sauces asiatiques",
		description:
			"Sauce épicée parfaite pour les amateurs de sensations fortes.",
	},
	{
		name: "Sauce thaï au basilic",
		category: "Sauces asiatiques",
		description: "Sauce aromatique pour les plats de viande ou de légumes.",
	},
	{
		name: "Sauce soja au mirin",
		category: "Sauces asiatiques",
		description: "Mélange doux et sucré utilisé dans les recettes japonaises.",
	},
	{
		name: "Sauce miso",
		category: "Sauces asiatiques",
		description: "Sauce riche en umami à base de pâte de miso fermentée.",
	},
	{
		name: "Sauce pour sushi",
		category: "Sauces asiatiques",
		description:
			"Sauce légèrement sucrée, idéale pour accompagner les sushis et makis.",
	},
	{
		name: "Sauce XO",
		category: "Sauces asiatiques",
		description: "Sauce chinoise luxueuse avec crevettes séchées et épices.",
	},
	{
		name: "Sauce soja foncée",
		category: "Sauces asiatiques",
		description:
			"Sauce soja épaisse et riche en saveurs pour les plats mijotés.",
	},

	// Produits mexicains
	{
		name: "Tortillas de maïs",
		category: "Produits mexicains",
		description:
			"Galettes de maïs souples, parfaites pour les tacos et enchiladas.",
	},
	{
		name: "Tortillas de blé",
		category: "Produits mexicains",
		description: "Galettes souples idéales pour les burritos et wraps.",
	},
	{
		name: "Haricots noirs en boîte",
		category: "Produits mexicains",
		description:
			"Haricots cuits prêts à l'emploi pour vos recettes mexicaines.",
	},
	{
		name: "Épices pour tacos",
		category: "Produits mexicains",
		description:
			"Mélange d'épices spécialement conçu pour assaisonner vos tacos.",
	},
	{
		name: "Chili en poudre",
		category: "Produits mexicains",
		description: "Épice piquante utilisée dans les plats mexicains.",
	},
	{
		name: "Guacamole en pot",
		category: "Produits mexicains",
		description: "Préparation d’avocat crémeuse et savoureuse.",
	},
	{
		name: "Salsa rouge",
		category: "Produits mexicains",
		description: "Sauce tomate épicée pour accompagner les nachos et tacos.",
	},
	{
		name: "Salsa verte",
		category: "Produits mexicains",
		description: "Sauce fraîche et acidulée à base de tomatillos.",
	},
	{
		name: "Fromage râpé spécial nachos",
		category: "Produits mexicains",
		description: "Mélange de fromages fondants pour gratiner vos plats.",
	},
	{
		name: "Maïs en boîte",
		category: "Produits mexicains",
		description: "Maïs doux idéal pour garnir les salades et tacos.",
	},
	{
		name: "Chips de maïs",
		category: "Produits mexicains",
		description: "Snacks croquants pour accompagner vos salsas.",
	},
	{
		name: "Pâte de piment ancho",
		category: "Produits mexicains",
		description: "Pâte de piment doux pour relever vos plats.",
	},
	{
		name: "Enchilada sauce",
		category: "Produits mexicains",
		description: "Sauce tomate épicée pour napper vos enchiladas.",
	},
	{
		name: "Crème mexicaine",
		category: "Produits mexicains",
		description: "Crème onctueuse pour accompagner les plats épicés.",
	},
	{
		name: "Piments jalapeños",
		category: "Produits mexicains",
		description: "Piments verts marinés, parfaits pour relever vos plats.",
	},
	{
		name: "Chorizo mexicain",
		category: "Produits mexicains",
		description: "Saucisse épicée utilisée dans de nombreuses recettes.",
	},
	{
		name: "Farine de maïs masa harina",
		category: "Produits mexicains",
		description: "Farine essentielle pour préparer des tortillas maison.",
	},
	{
		name: "Pâte de piment chipotle",
		category: "Produits mexicains",
		description: "Piment fumé en pâte pour un goût intense et relevé.",
	},
	{
		name: "Tequila",
		category: "Produits mexicains",
		description: "Boisson alcoolisée mexicaine souvent utilisée en cocktails.",
	},
	{
		name: "Épices pour fajitas",
		category: "Produits mexicains",
		description: "Mélange d’épices pour relever vos viandes et légumes.",
	},
	{
		name: "Pozole en boîte",
		category: "Produits mexicains",
		description: "Grains de maïs blancs pour préparer le traditionnel pozole.",
	},
	{
		name: "Tortilla chips nature",
		category: "Produits mexicains",
		description: "Snacks parfaits pour tremper dans vos sauces mexicaines.",
	},
	{
		name: "Sauce mole",
		category: "Produits mexicains",
		description: "Sauce riche et épicée à base de cacao et d’épices.",
	},
	{
		name: "Haricots pinto",
		category: "Produits mexicains",
		description: "Haricots doux et crémeux pour accompagner vos plats.",
	},
	{
		name: "Pico de gallo",
		category: "Produits mexicains",
		description: "Mélange frais de tomates, oignons et coriandre.",
	},
	{
		name: "Tamales surgelés",
		category: "Produits mexicains",
		description: "Spécialité mexicaine à base de maïs et farce savoureuse.",
	},
	{
		name: "Quesadilla kit",
		category: "Produits mexicains",
		description: "Kit complet pour réaliser des quesadillas maison.",
	},
	{
		name: "Tacos shells",
		category: "Produits mexicains",
		description: "Coques croustillantes pour vos tacos.",
	},
	{
		name: "Piments habaneros",
		category: "Produits mexicains",
		description:
			"Piments extrêmement épicés pour les amateurs de sensations fortes.",
	},

	// Épices indiennes
	{
		name: "Curry en poudre",
		category: "Épices indiennes",
		description: "Mélange d'épices classique pour les plats indiens.",
	},
	{
		name: "Curcuma",
		category: "Épices indiennes",
		description:
			"Épice jaune aux propriétés médicinales, utilisée dans les currys.",
	},
	{
		name: "Garam masala",
		category: "Épices indiennes",
		description: "Mélange d'épices chaud et aromatique.",
	},
	{
		name: "Poudre de coriandre",
		category: "Épices indiennes",
		description: "Épice au goût doux et légèrement citronné.",
	},
	{
		name: "Graines de cumin",
		category: "Épices indiennes",
		description:
			"Épice parfumée et terreuse, essentielle dans la cuisine indienne.",
	},
	{
		name: "Graines de fenouil",
		category: "Épices indiennes",
		description: "Épice douce souvent utilisée comme digestif.",
	},
	{
		name: "Asafoetida",
		category: "Épices indiennes",
		description: "Épice au goût intense utilisée en très petites quantités.",
	},
	{
		name: "Graines de moutarde",
		category: "Épices indiennes",
		description: "Épices piquantes pour assaisonner les currys et marinades.",
	},
	{
		name: "Cardamome verte",
		category: "Épices indiennes",
		description: "Gousses aromatiques pour les plats salés et desserts.",
	},
	{
		name: "Cardamome noire",
		category: "Épices indiennes",
		description: "Épice fumée utilisée dans les plats de viande.",
	},
	{
		name: "Clous de girofle",
		category: "Épices indiennes",
		description: "Épice puissante pour parfumer les currys et boissons.",
	},
	{
		name: "Bâtons de cannelle",
		category: "Épices indiennes",
		description: "Épice douce pour les plats salés et desserts.",
	},
	{
		name: "Poudre de gingembre",
		category: "Épices indiennes",
		description: "Épice chaude et épicée pour les currys et thés.",
	},
	{
		name: "Piments rouges séchés",
		category: "Épices indiennes",
		description: "Piments forts pour relever vos plats.",
	},
	{
		name: "Poudre de chili",
		category: "Épices indiennes",
		description: "Épice piquante pour les plats épicés.",
	},
	{
		name: "Fenugrec",
		category: "Épices indiennes",
		description: "Graines amères utilisées dans les currys et marinades.",
	},
	{
		name: "Graines de nigelle",
		category: "Épices indiennes",
		description: "Épice noire légèrement poivrée utilisée dans les pains.",
	},
	{
		name: "Poudre de mangue séchée (amchur)",
		category: "Épices indiennes",
		description: "Poudre acidulée pour relever les currys.",
	},
	{
		name: "Feuilles de curry",
		category: "Épices indiennes",
		description: "Herbe aromatique essentielle pour les plats indiens.",
	},
	{
		name: "Pavot blanc",
		category: "Épices indiennes",
		description: "Graines utilisées pour épaissir les sauces.",
	},
	{
		name: "Poudre de tamarin",
		category: "Épices indiennes",
		description: "Épice acidulée pour ajouter de la profondeur aux plats.",
	},
	{
		name: "Poivre noir en grains",
		category: "Épices indiennes",
		description: "Épice universelle pour assaisonner les currys.",
	},
	{
		name: "Kalonji (graines de nigelle)",
		category: "Épices indiennes",
		description: "Petites graines noires avec un goût de noisette.",
	},
	{
		name: "Mace (fleur de muscade)",
		category: "Épices indiennes",
		description: "Épice douce et aromatique utilisée dans les plats riches.",
	},
	{
		name: "Star anise (anis étoilé)",
		category: "Épices indiennes",
		description: "Épice parfumée pour les plats et desserts indiens.",
	},
	{
		name: "Ajwain (graines de carambole)",
		category: "Épices indiennes",
		description: "Graines aromatiques pour les pains et currys.",
	},
	{
		name: "Chaat masala",
		category: "Épices indiennes",
		description: "Mélange d'épices pour les salades et collations.",
	},
	{
		name: "Poudre de fenouil",
		category: "Épices indiennes",
		description: "Épice douce pour parfumer les currys et desserts.",
	},
	{
		name: "Kala namak (sel noir)",
		category: "Épices indiennes",
		description: "Sel au goût sulfureux unique pour les plats indiens.",
	},

	// Produits italiens
	{
		name: "Pâtes penne",
		category: "Produits italiens",
		description:
			"Pâtes courtes en forme de tubes, parfaites pour les sauces épaisses.",
	},
	{
		name: "Pâtes spaghetti",
		category: "Produits italiens",
		description:
			"Pâtes longues et fines, idéales pour les plats classiques italiens.",
	},
	{
		name: "Pâtes linguine",
		category: "Produits italiens",
		description: "Pâtes longues et plates, parfaites avec des sauces légères.",
	},
	{
		name: "Sauce tomate basilic",
		category: "Produits italiens",
		description:
			"Sauce italienne classique à base de tomates et de basilic frais.",
	},
	{
		name: "Pesto alla Genovese",
		category: "Produits italiens",
		description:
			"Sauce traditionnelle italienne à base de basilic et de parmesan.",
	},
	{
		name: "Parmigiano Reggiano râpé",
		category: "Produits italiens",
		description: "Fromage italien râpé pour rehausser les plats.",
	},
	{
		name: "Mozzarella di bufala",
		category: "Produits italiens",
		description:
			"Fromage frais à pâte filée, idéal pour les salades et pizzas.",
	},
	{
		name: "Gorgonzola",
		category: "Produits italiens",
		description: "Fromage bleu crémeux au goût intense.",
	},
	{
		name: "Lasagnes fraîches",
		category: "Produits italiens",
		description: "Feuilles de pâte prêtes à être utilisées pour les lasagnes.",
	},
	{
		name: "Balsamique de Modène",
		category: "Produits italiens",
		description: "Vinaigre doux et acidulé, idéal pour les salades.",
	},
	{
		name: "Huile d’olive extra vierge",
		category: "Produits italiens",
		description: "Incontournable dans la cuisine italienne, riche en saveur.",
	},
	{
		name: "Arancini surgelés",
		category: "Produits italiens",
		description: "Boulettes de riz farcies, spécialité sicilienne.",
	},
	{
		name: "Tiramisu en portion",
		category: "Produits italiens",
		description: "Dessert classique italien à base de mascarpone et café.",
	},
	{
		name: "Ricotta fraîche",
		category: "Produits italiens",
		description:
			"Fromage doux et crémeux, utilisé pour les desserts ou plats salés.",
	},
	{
		name: "Prosciutto di Parma",
		category: "Produits italiens",
		description: "Jambon cru italien, séché et affiné.",
	},
	{
		name: "Pâtes farfalle",
		category: "Produits italiens",
		description:
			"Pâtes en forme de papillons, parfaites pour les salades de pâtes.",
	},
	{
		name: "Risotto Arborio",
		category: "Produits italiens",
		description: "Riz à grain court idéal pour les risottos.",
	},
	{
		name: "Grissini",
		category: "Produits italiens",
		description: "Bâtonnets de pain croquants, parfaits pour les apéritifs.",
	},
	{
		name: "Focaccia",
		category: "Produits italiens",
		description:
			"Pain italien moelleux, souvent garni d'herbes et d'huile d'olive.",
	},
	{
		name: "Cannelloni",
		category: "Produits italiens",
		description: "Pâtes tubulaires prêtes à être farcies et gratinées.",
	},
	{
		name: "Ravioli frais",
		category: "Produits italiens",
		description: "Pâtes farcies aux légumes ou viande.",
	},
	{
		name: "Bresaola",
		category: "Produits italiens",
		description: "Viande de bœuf séchée, servie en tranches fines.",
	},
	{
		name: "Polenta",
		category: "Produits italiens",
		description:
			"Farine de maïs, utilisée pour des accompagnements ou plats uniques.",
	},
	{
		name: "Limoncello",
		category: "Produits italiens",
		description: "Liqueur italienne au citron, servie fraîche.",
	},
	{
		name: "Stracciatella",
		category: "Produits italiens",
		description: "Glace italienne aux éclats de chocolat.",
	},
	{
		name: "Tomates séchées",
		category: "Produits italiens",
		description:
			"Tomates intensément aromatiques, parfaites pour les antipasti.",
	},
	{
		name: "Pâtes rigatoni",
		category: "Produits italiens",
		description:
			"Pâtes courtes avec des rainures, idéales pour retenir les sauces.",
	},
	{
		name: "Zabaglione",
		category: "Produits italiens",
		description: "Dessert mousseux à base de jaune d'œufs et de vin doux.",
	},
	{
		name: "Espresso italien",
		category: "Produits italiens",
		description: "Café noir et intense, un classique italien.",
	},

	// Produits japonais
	{
		name: "Riz à sushi",
		category: "Produits japonais",
		description:
			"Riz à grain court et collant, idéal pour la préparation de sushis.",
	},
	{
		name: "Algues nori",
		category: "Produits japonais",
		description: "Feuilles d’algues séchées utilisées pour rouler les makis.",
	},
	{
		name: "Wasabi en tube",
		category: "Produits japonais",
		description: "Condiment piquant servi avec les sushis et sashimis.",
	},
	{
		name: "Sauce soja japonaise",
		category: "Produits japonais",
		description: "Sauce salée et douce, idéale pour les plats japonais.",
	},
	{
		name: "Mirin",
		category: "Produits japonais",
		description: "Vin de riz sucré utilisé pour assaisonner les plats.",
	},
	{
		name: "Vinaigre de riz",
		category: "Produits japonais",
		description: "Vinaigre doux et légèrement sucré, utilisé pour les sushis.",
	},
	{
		name: "Pâte miso",
		category: "Produits japonais",
		description: "Pâte fermentée utilisée pour les soupes et marinades.",
	},
	{
		name: "Dashi en poudre",
		category: "Produits japonais",
		description:
			"Base pour les bouillons japonais, à base de poisson et algues.",
	},
	{
		name: "Gingembre mariné",
		category: "Produits japonais",
		description: "Accompagnement sucré et acidulé pour les sushis.",
	},
	{
		name: "Tofu soyeux",
		category: "Produits japonais",
		description: "Tofu à texture lisse, parfait pour les soupes et desserts.",
	},
	{
		name: "Nouilles soba",
		category: "Produits japonais",
		description: "Nouilles de sarrasin servies froides ou chaudes.",
	},
	{
		name: "Nouilles udon",
		category: "Produits japonais",
		description: "Nouilles épaisses et moelleuses idéales pour les bouillons.",
	},
	{
		name: "Thé matcha en poudre",
		category: "Produits japonais",
		description:
			"Thé vert japonais en poudre, utilisé pour les boissons et pâtisseries.",
	},
	{
		name: "Panko (chapelure japonaise)",
		category: "Produits japonais",
		description: "Chapelure légère et croustillante pour frire les aliments.",
	},
	{
		name: "Sauce teriyaki",
		category: "Produits japonais",
		description: "Sauce sucrée-salée utilisée pour les marinades et grillades.",
	},
	{
		name: "Saké",
		category: "Produits japonais",
		description: "Vin de riz japonais, souvent servi chaud ou froid.",
	},
	{
		name: "Tamago (omelette japonaise)",
		category: "Produits japonais",
		description: "Omelette sucrée et moelleuse utilisée pour les sushis.",
	},
	{
		name: "Edamame surgelés",
		category: "Produits japonais",
		description: "Jeunes fèves de soja à consommer comme snack.",
	},
	{
		name: "Gyoza surgelés",
		category: "Produits japonais",
		description: "Raviolis japonais à cuire à la poêle ou à la vapeur.",
	},
	{
		name: "Tonkatsu sauce",
		category: "Produits japonais",
		description: "Sauce épaisse et sucrée pour les côtelettes panées.",
	},
	{
		name: "Bento box",
		category: "Produits japonais",
		description: "Boîte à emporter compartimentée pour les repas japonais.",
	},
	{
		name: "Togarashi (épices japonaises)",
		category: "Produits japonais",
		description: "Mélange d’épices pour relever les plats japonais.",
	},
	{
		name: "Matcha KitKat",
		category: "Produits japonais",
		description: "Version japonaise du KitKat au thé matcha.",
	},
	{
		name: "Mochis glacés",
		category: "Produits japonais",
		description:
			"Petits desserts glacés à base de riz gluant et de crème glacée.",
	},
	{
		name: "Chocolat au matcha",
		category: "Produits japonais",
		description: "Chocolat blanc infusé au thé matcha.",
	},
	{
		name: "Takoyaki mix",
		category: "Produits japonais",
		description: "Mélange pour préparer des boulettes de poulpe.",
	},
	{
		name: "Bonite séchée (katsuobushi)",
		category: "Produits japonais",
		description:
			"Copeaux de poisson utilisés comme garniture ou pour les bouillons.",
	},
	{
		name: "Shoyu (sauce soja fermentée)",
		category: "Produits japonais",
		description: "Variante douce et fermentée de la sauce soja.",
	},
	{
		name: "Yakitori brochettes surgelées",
		category: "Produits japonais",
		description: "Brochettes de poulet prêtes à griller avec sauce sucrée.",
	},
	{
		name: "Nouilles ramen",
		category: "Produits japonais",
		description: "Nouilles fines servies dans un bouillon riche et savoureux.",
	},

	// Produits orientaux
	{
		name: "Semoule de couscous",
		category: "Produits orientaux",
		description:
			"Ingrédient de base pour les plats traditionnels comme le couscous.",
	},
	{
		name: "Harissa",
		category: "Produits orientaux",
		description: "Pâte de piment épicée typique de la cuisine nord-africaine.",
	},
	{
		name: "Pain pita",
		category: "Produits orientaux",
		description:
			"Pain plat utilisé pour les sandwichs ou comme accompagnement.",
	},
	{
		name: "Tahini (pâte de sésame)",
		category: "Produits orientaux",
		description:
			"Pâte crémeuse à base de graines de sésame, utilisée dans le houmous.",
	},
	{
		name: "Houmous",
		category: "Produits orientaux",
		description: "Purée de pois chiches mélangée à du tahini, citron et ail.",
	},
	{
		name: "Falafels surgelés",
		category: "Produits orientaux",
		description: "Boulettes de pois chiches épicées prêtes à cuire.",
	},
	{
		name: "Épices ras-el-hanout",
		category: "Produits orientaux",
		description:
			"Mélange d'épices utilisé dans de nombreux plats nord-africains.",
	},
	{
		name: "Feuilles de brick",
		category: "Produits orientaux",
		description: "Pâtes fines utilisées pour les plats salés ou sucrés.",
	},
	{
		name: "Confiture de dattes",
		category: "Produits orientaux",
		description: "Pâte sucrée à base de dattes, utilisée pour les desserts.",
	},
	{
		name: "Eau de rose",
		category: "Produits orientaux",
		description: "Ingrédient parfumé utilisé dans les desserts et boissons.",
	},
	{
		name: "Eau de fleur d'oranger",
		category: "Produits orientaux",
		description: "Ingrédient aromatique pour pâtisseries et plats sucrés.",
	},
	{
		name: "Datte Medjool",
		category: "Produits orientaux",
		description: "Dattes moelleuses et sucrées, parfaites pour une collation.",
	},
	{
		name: "Boulgour",
		category: "Produits orientaux",
		description:
			"Grains de blé concassés utilisés dans le taboulé et autres plats.",
	},
	{
		name: "Miel oriental",
		category: "Produits orientaux",
		description: "Miel souvent utilisé dans les pâtisseries orientales.",
	},
	{
		name: "Zaatar",
		category: "Produits orientaux",
		description:
			"Mélange d'herbes et de graines de sésame, utilisé pour assaisonner.",
	},
	{
		name: "Taboulé préparé",
		category: "Produits orientaux",
		description: "Salade froide à base de boulgour, herbes et légumes.",
	},
	{
		name: "Amlou",
		category: "Produits orientaux",
		description: "Pâte marocaine à base d'amandes, miel et huile d'argan.",
	},
	{
		name: "Makrout",
		category: "Produits orientaux",
		description: "Gâteaux orientaux à base de semoule et dattes.",
	},
	{
		name: "Pastilla surgelée",
		category: "Produits orientaux",
		description:
			"Feuilleté traditionnel sucré-salé, farci de viande ou fruits de mer.",
	},
	{
		name: "Labneh",
		category: "Produits orientaux",
		description:
			"Fromage frais crémeux, souvent servi avec de l'huile d'olive.",
	},
	{
		name: "Épices sumac",
		category: "Produits orientaux",
		description: "Épice acidulée utilisée pour rehausser les plats orientaux.",
	},
	{
		name: "Olives marocaines",
		category: "Produits orientaux",
		description: "Olives marinées, souvent aromatisées aux herbes et épices.",
	},
	{
		name: "Chorba (soupe préparée)",
		category: "Produits orientaux",
		description: "Soupe traditionnelle épicée à base de légumes et viande.",
	},
	{
		name: "Cornes de gazelle",
		category: "Produits orientaux",
		description:
			"Pâtisseries orientales en forme de croissant, farcies aux amandes.",
	},
	{
		name: "Couscous perlé (mograbieh)",
		category: "Produits orientaux",
		description: "Gros grains de couscous utilisés dans la cuisine libanaise.",
	},
	{
		name: "Baklavas",
		category: "Produits orientaux",
		description: "Pâtisseries à base de pâte filo, noix et miel.",
	},
	{
		name: "Sirop d’agave",
		category: "Produits orientaux",
		description:
			"Alternative naturelle au sucre, utilisée dans les boissons et desserts.",
	},
	{
		name: "Chakchouka en conserve",
		category: "Produits orientaux",
		description: "Plat mijoté à base de tomates, poivrons et épices.",
	},
	{
		name: "Roses séchées comestibles",
		category: "Produits orientaux",
		description: "Fleurs utilisées pour décorer ou parfumer les plats.",
	},

	// Produits exotiques
	{
		name: "Mangue fraîche",
		category: "Produits exotiques",
		description: "Fruit sucré et juteux, idéal pour les desserts et salades.",
	},
	{
		name: "Ananas entier",
		category: "Produits exotiques",
		description: "Fruit tropical à la chair douce et acidulée.",
	},
	{
		name: "Noix de coco fraîche",
		category: "Produits exotiques",
		description: "Noix au goût sucré avec une chair et une eau hydratante.",
	},
	{
		name: "Papaye",
		category: "Produits exotiques",
		description: "Fruit tropical doux et riche en enzymes digestives.",
	},
	{
		name: "Fruit de la passion",
		category: "Produits exotiques",
		description: "Petit fruit à la pulpe parfumée et acidulée.",
	},
	{
		name: "Goyave",
		category: "Produits exotiques",
		description: "Fruit tropical sucré au goût légèrement musqué.",
	},
	{
		name: "Pitaya (fruit du dragon)",
		category: "Produits exotiques",
		description: "Fruit exotique à la chair douce et riche en antioxydants.",
	},
	{
		name: "Kiwano",
		category: "Produits exotiques",
		description: "Fruit à la peau épineuse et à la chair juteuse et acidulée.",
	},
	{
		name: "Carambole",
		category: "Produits exotiques",
		description:
			"Fruit étoilé, sucré et acidulé, parfait pour décorer vos plats.",
	},
	{
		name: "Ramboutan",
		category: "Produits exotiques",
		description: "Fruit juteux et sucré à l'apparence velue.",
	},
	{
		name: "Durian",
		category: "Produits exotiques",
		description:
			"Fruit à l'odeur forte et au goût unique, considéré comme un délice.",
	},
	{
		name: "Jacquier",
		category: "Produits exotiques",
		description:
			"Grand fruit sucré, souvent utilisé comme substitut de viande.",
	},
	{
		name: "Tamarin",
		category: "Produits exotiques",
		description: "Fruit acidulé utilisé pour les sauces et desserts.",
	},
	{
		name: "Litchis",
		category: "Produits exotiques",
		description: "Fruits juteux et sucrés, parfaits pour les desserts.",
	},
	{
		name: "Longane",
		category: "Produits exotiques",
		description: "Petit fruit sucré au goût doux et musqué.",
	},
	{
		name: "Banane plantain",
		category: "Produits exotiques",
		description: "Banane utilisée comme légume dans les plats exotiques.",
	},
	{
		name: "Feuilles de bananier",
		category: "Produits exotiques",
		description:
			"Utilisées pour envelopper les aliments et les cuire à la vapeur.",
	},
	{
		name: "Patate douce violette",
		category: "Produits exotiques",
		description: "Tubercule sucré et coloré, riche en antioxydants.",
	},
	{
		name: "Riz gluant",
		category: "Produits exotiques",
		description: "Riz collant utilisé dans de nombreuses recettes asiatiques.",
	},
	{
		name: "Farine de manioc",
		category: "Produits exotiques",
		description:
			"Farine sans gluten, idéale pour les recettes africaines et brésiliennes.",
	},
	{
		name: "Épices colombo",
		category: "Produits exotiques",
		description:
			"Mélange d’épices antillais utilisé pour les currys et plats mijotés.",
	},
	{
		name: "Banane rouge",
		category: "Produits exotiques",
		description: "Variété de banane au goût sucré et crémeux.",
	},
	{
		name: "Cœur de palmier",
		category: "Produits exotiques",
		description: "Légume tendre, souvent utilisé dans les salades exotiques.",
	},
	{
		name: "Fruit du jacquier en conserve",
		category: "Produits exotiques",
		description: "Alternative végétale utilisée comme substitut de viande.",
	},
	{
		name: "Mangoustan",
		category: "Produits exotiques",
		description: "Fruit tropical à la chair sucrée et juteuse.",
	},
	{
		name: "Cacao cru en poudre",
		category: "Produits exotiques",
		description: "Poudre pure pour boissons et pâtisseries.",
	},
	{
		name: "Curcuma frais",
		category: "Produits exotiques",
		description:
			"Racine utilisée pour son goût et ses bienfaits pour la santé.",
	},
	{
		name: "Feuilles de pandan",
		category: "Produits exotiques",
		description: "Herbe parfumée utilisée dans les desserts asiatiques.",
	},
	{
		name: "Vanille en gousse",
		category: "Produits exotiques",
		description: "Gousses de vanille riches en arômes pour vos recettes.",
	},

	// Viandes fumées
	{
		name: "Bacon fumé",
		category: "Viandes fumées",
		description:
			"Fines tranches de porc fumé, parfaites pour le petit-déjeuner.",
	},
	{
		name: "Jambon fumé",
		category: "Viandes fumées",
		description: "Jambon au goût intense grâce à un fumage artisanal.",
	},
	{
		name: "Saumon fumé",
		category: "Viandes fumées",
		description:
			"Tranches de saumon délicatement fumées, prêtes à être servies.",
	},
	{
		name: "Magret de canard fumé",
		category: "Viandes fumées",
		description: "Filet de canard fumé, idéal pour les salades gourmandes.",
	},
	{
		name: "Poitrine de porc fumée",
		category: "Viandes fumées",
		description:
			"Pièce de viande au goût fumé, parfaite pour les plats mijotés.",
	},
	{
		name: "Filet mignon fumé",
		category: "Viandes fumées",
		description: "Viande de porc délicate et savoureuse, légèrement fumée.",
	},
	{
		name: "Échine de porc fumée",
		category: "Viandes fumées",
		description: "Pièce charnue au goût fumé intense.",
	},
	{
		name: "Jambonneau fumé",
		category: "Viandes fumées",
		description:
			"Viande de porc cuite et fumée, idéale pour les plats traditionnels.",
	},
	{
		name: "Saucisses fumées",
		category: "Viandes fumées",
		description:
			"Saucisses de porc fumées, parfaites pour les grillades ou plats mijotés.",
	},
	{
		name: "Lardons fumés",
		category: "Viandes fumées",
		description:
			"Petits morceaux de lard fumé, idéals pour enrichir vos plats.",
	},
	{
		name: "Travers de porc fumés",
		category: "Viandes fumées",
		description: "Côtes de porc préparées avec un goût fumé prononcé.",
	},
	{
		name: "Bœuf fumé",
		category: "Viandes fumées",
		description:
			"Tranches fines de viande de bœuf fumée, servies froides ou chaudes.",
	},
	{
		name: "Saucisson fumé",
		category: "Viandes fumées",
		description: "Charcuterie artisanale au goût fumé et intense.",
	},
	{
		name: "Chorizo fumé",
		category: "Viandes fumées",
		description: "Saucisse épicée espagnole au goût fumé.",
	},
	{
		name: "Poitrine de dinde fumée",
		category: "Viandes fumées",
		description: "Alternative légère et savoureuse à la viande de porc.",
	},
	{
		name: "Jarret de porc fumé",
		category: "Viandes fumées",
		description:
			"Pièce charnue, idéale pour les plats mijotés comme la choucroute.",
	},
	{
		name: "Kassler fumé",
		category: "Viandes fumées",
		description:
			"Côte de porc salée et fumée, typique de la cuisine allemande.",
	},
	{
		name: "Brochettes de poulet fumé",
		category: "Viandes fumées",
		description: "Petites brochettes prêtes à griller avec un arôme fumé.",
	},
	{
		name: "Saucisse de Morteau",
		category: "Viandes fumées",
		description: "Saucisse fumée traditionnelle du Jura français.",
	},
	{
		name: "Saucisse de Montbéliard",
		category: "Viandes fumées",
		description: "Saucisse fumée légèrement épicée, typique de Franche-Comté.",
	},
	{
		name: "Pastrami",
		category: "Viandes fumées",
		description: "Viande de bœuf fumée et épicée, idéale pour les sandwichs.",
	},
	{
		name: "Pancetta fumée",
		category: "Viandes fumées",
		description: "Charcuterie italienne à base de poitrine de porc fumée.",
	},
	{
		name: "Viande de grison fumée",
		category: "Viandes fumées",
		description: "Spécialité suisse à base de viande de bœuf séchée et fumée.",
	},
	{
		name: "Côtes de porc fumées",
		category: "Viandes fumées",
		description: "Pièce savoureuse à cuire lentement pour libérer ses arômes.",
	},
	{
		name: "Canard confit et fumé",
		category: "Viandes fumées",
		description: "Spécialité gourmande avec une double préparation.",
	},
	{
		name: "Andouille fumée",
		category: "Viandes fumées",
		description: "Charcuterie typique au goût puissant et fumé.",
	},
	{
		name: "Porc effiloché fumé",
		category: "Viandes fumées",
		description: "Viande tendre et fumée pour garnir les burgers ou tacos.",
	},
	{
		name: "Saucisses fumées aux herbes",
		category: "Viandes fumées",
		description: "Saucisses artisanales légèrement parfumées aux herbes.",
	},
	{
		name: "Filet de truite fumée",
		category: "Viandes fumées",
		description: "Alternative délicate au saumon fumé.",
	},

	// Produits de petit-déjeuner
	{
		name: "Céréales au chocolat",
		category: "Produits de petit-déjeuner",
		description:
			"Céréales croustillantes enrobées de chocolat, parfaites avec du lait.",
	},
	{
		name: "Muesli aux fruits secs",
		category: "Produits de petit-déjeuner",
		description: "Mélange de flocons d’avoine, noix et fruits séchés.",
	},
	{
		name: "Pain de mie complet",
		category: "Produits de petit-déjeuner",
		description:
			"Pain moelleux riche en fibres pour un petit-déjeuner équilibré.",
	},
	{
		name: "Pancakes surgelés",
		category: "Produits de petit-déjeuner",
		description: "Pancakes prêts à réchauffer pour un matin gourmand.",
	},
	{
		name: "Croissants au beurre",
		category: "Produits de petit-déjeuner",
		description: "Viennoiseries classiques françaises, parfaites avec un café.",
	},
	{
		name: "Confiture d'abricots",
		category: "Produits de petit-déjeuner",
		description: "Tartinable fruité pour les toasts ou les crêpes.",
	},
	{
		name: "Beurre demi-sel",
		category: "Produits de petit-déjeuner",
		description: "Beurre savoureux pour accompagner vos tartines.",
	},
	{
		name: "Granola croustillant",
		category: "Produits de petit-déjeuner",
		description: "Mélange d’avoine et de miel, parfait avec du yaourt.",
	},
	{
		name: "Brioche tressée",
		category: "Produits de petit-déjeuner",
		description: "Brioche moelleuse et légèrement sucrée.",
	},
	{
		name: "Yaourt nature",
		category: "Produits de petit-déjeuner",
		description: "Base idéale pour accompagner du granola ou des fruits.",
	},
	{
		name: "Œufs bio",
		category: "Produits de petit-déjeuner",
		description: "Œufs frais parfaits pour une omelette ou à la coque.",
	},
	{
		name: "Jus d'orange pressé",
		category: "Produits de petit-déjeuner",
		description: "Boisson vitaminée pour bien commencer la journée.",
	},
	{
		name: "Café moulu",
		category: "Produits de petit-déjeuner",
		description: "Café riche en arômes pour accompagner votre matinée.",
	},
	{
		name: "Thé noir Earl Grey",
		category: "Produits de petit-déjeuner",
		description: "Infusion délicate et parfumée pour un réveil en douceur.",
	},
	{
		name: "Pain aux céréales",
		category: "Produits de petit-déjeuner",
		description: "Pain rustique avec graines, riche en saveurs.",
	},
	{
		name: "Pâte à tartiner chocolat-noisette",
		category: "Produits de petit-déjeuner",
		description: "Crème sucrée pour un petit-déjeuner gourmand.",
	},
	{
		name: "Flocons d’avoine",
		category: "Produits de petit-déjeuner",
		description: "Base saine et nourrissante pour vos porridges.",
	},
	{
		name: "Gaufres surgelées",
		category: "Produits de petit-déjeuner",
		description: "Prêtes à être toastées et servies avec du sirop d’érable.",
	},
	{
		name: "Miel d’acacia",
		category: "Produits de petit-déjeuner",
		description:
			"Alternative naturelle au sucre, parfait pour le thé ou les tartines.",
	},
	{
		name: "Fromage frais",
		category: "Produits de petit-déjeuner",
		description: "Fromage onctueux pour accompagner vos pains ou crackers.",
	},
	{
		name: "Pain au chocolat",
		category: "Produits de petit-déjeuner",
		description: "Viennoiserie garnie de chocolat pour une touche sucrée.",
	},
	{
		name: "Compote de pommes",
		category: "Produits de petit-déjeuner",
		description:
			"Purée de fruits sans sucres ajoutés, idéale pour un début de journée léger.",
	},
	{
		name: "Riz au lait",
		category: "Produits de petit-déjeuner",
		description: "Dessert sucré parfait comme option de petit-déjeuner.",
	},
	{
		name: "Barres de céréales aux fruits rouges",
		category: "Produits de petit-déjeuner",
		description: "Snack pratique et énergétique pour les matins pressés.",
	},
	{
		name: "Lait végétal amande",
		category: "Produits de petit-déjeuner",
		description:
			"Alternative au lait classique, idéale pour accompagner les céréales.",
	},
	{
		name: "Baguette fraîche",
		category: "Produits de petit-déjeuner",
		description: "Pain croustillant et frais, parfait pour les tartines.",
	},
	{
		name: "Sirop d'érable",
		category: "Produits de petit-déjeuner",
		description: "Accompagnement parfait pour les pancakes et gaufres.",
	},
	{
		name: "Smoothie fruits rouges",
		category: "Produits de petit-déjeuner",
		description: "Boisson onctueuse et riche en vitamines.",
	},
	{
		name: "Pain complet aux graines",
		category: "Produits de petit-déjeuner",
		description:
			"Pain nutritif et riche en fibres, idéal pour bien commencer la journée.",
	},

	// Suppléments nutritionnels
	{
		name: "Protéines en poudre (whey)",
		category: "Suppléments nutritionnels",
		description:
			"Protéines de lactosérum pour favoriser la récupération musculaire.",
	},
	{
		name: "Protéines végétales en poudre",
		category: "Suppléments nutritionnels",
		description: "Mélange de protéines végétales pour une alternative vegan.",
	},
	{
		name: "Créatine monohydrate",
		category: "Suppléments nutritionnels",
		description: "Complément pour améliorer la force et l’endurance.",
	},
	{
		name: "Oméga-3 capsules",
		category: "Suppléments nutritionnels",
		description: "Acides gras essentiels pour la santé du cerveau et du cœur.",
	},
	{
		name: "Barres énergétiques",
		category: "Suppléments nutritionnels",
		description: "Snacks pratiques pour une source rapide d'énergie.",
	},
	{
		name: "Boisson protéinée prête à boire",
		category: "Suppléments nutritionnels",
		description: "Boisson riche en protéines pour un apport rapide.",
	},
	{
		name: "Vitamines multivitaminées",
		category: "Suppléments nutritionnels",
		description:
			"Compléments pour couvrir les besoins quotidiens en vitamines.",
	},
	{
		name: "BCAA (acides aminés)",
		category: "Suppléments nutritionnels",
		description: "Compléments pour réduire la fatigue musculaire.",
	},
	{
		name: "Magnésium en comprimés",
		category: "Suppléments nutritionnels",
		description: "Minéral essentiel pour réduire la fatigue et les crampes.",
	},
	{
		name: "Spiruline en poudre",
		category: "Suppléments nutritionnels",
		description: "Super-aliment riche en protéines et en nutriments.",
	},
	{
		name: "Collagène en poudre",
		category: "Suppléments nutritionnels",
		description:
			"Complément pour la santé de la peau, des articulations et des cheveux.",
	},
	{
		name: "Gel énergisant",
		category: "Suppléments nutritionnels",
		description: "Produit pour un regain d'énergie rapide pendant l'exercice.",
	},
	{
		name: "Glutamine",
		category: "Suppléments nutritionnels",
		description: "Acide aminé essentiel pour la récupération musculaire.",
	},
	{
		name: "Vitamine D3",
		category: "Suppléments nutritionnels",
		description:
			"Vitamine pour soutenir la santé des os et du système immunitaire.",
	},
	{
		name: "Électrolytes en poudre",
		category: "Suppléments nutritionnels",
		description: "Mélange pour réhydrater après un effort intense.",
	},
	{
		name: "Probiotiques en capsules",
		category: "Suppléments nutritionnels",
		description: "Compléments pour favoriser une flore intestinale saine.",
	},
	{
		name: "Poudre de maca",
		category: "Suppléments nutritionnels",
		description:
			"Super-aliment pour booster l'énergie et l'équilibre hormonal.",
	},
	{
		name: "Zinc en comprimés",
		category: "Suppléments nutritionnels",
		description: "Minéral essentiel pour le système immunitaire.",
	},
	{
		name: "L-Carnitine",
		category: "Suppléments nutritionnels",
		description:
			"Complément pour améliorer l'endurance et brûler les graisses.",
	},
	{
		name: "Poudre d'herbe de blé",
		category: "Suppléments nutritionnels",
		description: "Super-aliment riche en chlorophylle et en antioxydants.",
	},
	{
		name: "Caféine en capsules",
		category: "Suppléments nutritionnels",
		description: "Stimulant pour améliorer la concentration et l'énergie.",
	},
	{
		name: "Protéines de pois en poudre",
		category: "Suppléments nutritionnels",
		description: "Alternative vegan riche en protéines.",
	},
	{
		name: "Ashwagandha en capsules",
		category: "Suppléments nutritionnels",
		description:
			"Adaptogène pour réduire le stress et favoriser la relaxation.",
	},
	{
		name: "Gelée royale en capsules",
		category: "Suppléments nutritionnels",
		description: "Produit naturel pour renforcer l'énergie et l'immunité.",
	},
	{
		name: "Acide hyaluronique",
		category: "Suppléments nutritionnels",
		description: "Complément pour la santé de la peau et des articulations.",
	},
	{
		name: "Vitamine C effervescente",
		category: "Suppléments nutritionnels",
		description: "Vitamine pour renforcer l'immunité et réduire la fatigue.",
	},
	{
		name: "Protéines multi-sources",
		category: "Suppléments nutritionnels",
		description: "Mélange de plusieurs protéines pour un apport équilibré.",
	},
	{
		name: "Antioxydants en capsules",
		category: "Suppléments nutritionnels",
		description: "Compléments pour protéger contre les radicaux libres.",
	},
	{
		name: "Pré-entraînement en poudre",
		category: "Suppléments nutritionnels",
		description:
			"Complément stimulant pour booster vos séances d'entraînement.",
	},

	// Plats végétariens préparés

	{
		name: "Lasagnes végétariennes",
		category: "Plats végétariens préparés",
		description: "Lasagnes garnies de légumes et de sauce tomate.",
	},
	{
		name: "Burger végétarien",
		category: "Plats végétariens préparés",
		description: "Steak végétarien à base de légumineuses ou de légumes.",
	},
	{
		name: "Curry de légumes",
		category: "Plats végétariens préparés",
		description: "Plat mijoté aux légumes et épices indiennes.",
	},
	{
		name: "Chili sin carne",
		category: "Plats végétariens préparés",
		description:
			"Version végétarienne du chili, avec haricots rouges et légumes.",
	},
	{
		name: "Ratatouille",
		category: "Plats végétariens préparés",
		description: "Mélange de légumes mijotés avec des herbes aromatiques.",
	},
	{
		name: "Gratin de légumes",
		category: "Plats végétariens préparés",
		description: "Plat au four avec une couche de fromage fondant.",
	},
	{
		name: "Risotto aux champignons",
		category: "Plats végétariens préparés",
		description: "Riz crémeux accompagné de champignons savoureux.",
	},
	{
		name: "Wraps végétariens",
		category: "Plats végétariens préparés",
		description: "Galettes garnies de légumes frais et d'une sauce.",
	},
	{
		name: "Falafels avec sauce tahini",
		category: "Plats végétariens préparés",
		description: "Boulettes de pois chiches accompagnées d'une sauce crémeuse.",
	},
	{
		name: "Couscous aux légumes",
		category: "Plats végétariens préparés",
		description: "Semoule de couscous garnie de légumes mijotés.",
	},
	{
		name: "Galettes de quinoa",
		category: "Plats végétariens préparés",
		description: "Petites galettes à base de quinoa et légumes variés.",
	},
	{
		name: "Soupe minestrone",
		category: "Plats végétariens préparés",
		description: "Soupe italienne riche en légumes et pâtes.",
	},
	{
		name: "Tofu mariné et grillé",
		category: "Plats végétariens préparés",
		description: "Tofu imprégné de saveurs et légèrement grillé.",
	},
	{
		name: "Pâtes aux légumes rôtis",
		category: "Plats végétariens préparés",
		description: "Pâtes servies avec une garniture de légumes rôtis.",
	},
	{
		name: "Pizza végétarienne",
		category: "Plats végétariens préparés",
		description: "Pizza garnie de légumes variés et de fromage.",
	},
	{
		name: "Tarte aux légumes",
		category: "Plats végétariens préparés",
		description: "Tarte salée garnie de légumes et d'une base crémeuse.",
	},
	{
		name: "Quiche sans viande",
		category: "Plats végétariens préparés",
		description: "Quiche légère avec légumes, œufs et fromage.",
	},
	{
		name: "Boulettes végétariennes",
		category: "Plats végétariens préparés",
		description: "Boulettes à base de pois chiches, haricots ou lentilles.",
	},
	{
		name: "Haricots verts à la provençale",
		category: "Plats végétariens préparés",
		description: "Haricots mijotés avec tomates et herbes.",
	},
	{
		name: "Salade de quinoa et légumes",
		category: "Plats végétariens préparés",
		description: "Salade fraîche et nutritive, idéale pour un repas léger.",
	},
	{
		name: "Nouilles sautées aux légumes",
		category: "Plats végétariens préparés",
		description: "Nouilles agrémentées de légumes croquants et de sauce.",
	},
	{
		name: "Hachis parmentier végétarien",
		category: "Plats végétariens préparés",
		description: "Purée de pommes de terre sur un lit de légumes.",
	},
	{
		name: "Poêlée de légumes au tofu",
		category: "Plats végétariens préparés",
		description: "Mélange de légumes sautés et tofu mariné.",
	},
	{
		name: "Aubergines farcies",
		category: "Plats végétariens préparés",
		description: "Aubergines garnies d'un mélange de légumes et de riz.",
	},
	{
		name: "Empanadas végétariennes",
		category: "Plats végétariens préparés",
		description: "Petits chaussons farcis de légumes savoureux.",
	},
	{
		name: "Buddha bowl",
		category: "Plats végétariens préparés",
		description: "Bol composé de légumes, céréales et protéines végétales.",
	},
	{
		name: "Poivrons grillés farcis",
		category: "Plats végétariens préparés",
		description: "Poivrons garnis de riz ou de quinoa.",
	},
	{
		name: "Gratin dauphinois sans viande",
		category: "Plats végétariens préparés",
		description:
			"Tranches de pommes de terre cuites dans une crème savoureuse.",
	},
	{
		name: "Purée de patates douces",
		category: "Plats végétariens préparés",
		description: "Accompagnement sucré-salé à base de patates douces.",
	},
	{
		name: "Steaks de lentilles",
		category: "Plats végétariens préparés",
		description:
			"Alternatives aux steaks classiques, riches en protéines végétales.",
	},

	// Sirops
	{
		name: "Sirop de grenadine",
		category: "Sirops",
		description:
			"Sirop sucré au goût de fruits rouges, parfait pour les cocktails.",
	},
	{
		name: "Sirop de menthe",
		category: "Sirops",
		description: "Sirop rafraîchissant idéal pour les boissons glacées.",
	},
	{
		name: "Sirop de citron",
		category: "Sirops",
		description: "Sirop acidulé parfait pour les limonades maison.",
	},
	{
		name: "Sirop d'érable",
		category: "Sirops",
		description: "Sirop naturel sucré, idéal pour les pancakes et desserts.",
	},
	{
		name: "Sirop de fraise",
		category: "Sirops",
		description: "Sirop sucré au goût intense de fraises.",
	},
	{
		name: "Sirop de pêche",
		category: "Sirops",
		description: "Sirop fruité, parfait pour les thés glacés et cocktails.",
	},
	{
		name: "Sirop de cassis",
		category: "Sirops",
		description: "Sirop sucré et légèrement acidulé, idéal pour les kirs.",
	},
	{
		name: "Sirop de framboise",
		category: "Sirops",
		description:
			"Sirop au goût délicat de framboises, parfait pour les desserts.",
	},
	{
		name: "Sirop d'orgeat",
		category: "Sirops",
		description:
			"Sirop à base d'amandes, utilisé dans les cocktails comme le Mai Tai.",
	},
	{
		name: "Sirop de miel",
		category: "Sirops",
		description: "Alternative liquide et sucrée pour les boissons chaudes.",
	},
	{
		name: "Sirop de vanille",
		category: "Sirops",
		description: "Sirop parfumé pour les cafés et pâtisseries.",
	},
	{
		name: "Sirop de coco",
		category: "Sirops",
		description: "Sirop exotique pour agrémenter vos boissons tropicales.",
	},
	{
		name: "Sirop de caramel",
		category: "Sirops",
		description: "Sirop gourmand idéal pour les cafés et desserts.",
	},
	{
		name: "Sirop de chocolat",
		category: "Sirops",
		description: "Sirop riche et sucré pour accompagner les crêpes et glaces.",
	},
	{
		name: "Sirop de mangue",
		category: "Sirops",
		description: "Sirop fruité parfait pour les smoothies et cocktails.",
	},
	{
		name: "Sirop de passion",
		category: "Sirops",
		description: "Sirop tropical, idéal pour les boissons estivales.",
	},
	{
		name: "Sirop de pomme",
		category: "Sirops",
		description:
			"Sirop doux et fruité, parfait pour les boissons non alcoolisées.",
	},
	{
		name: "Sirop de violette",
		category: "Sirops",
		description: "Sirop floral utilisé dans les cocktails et desserts.",
	},
	{
		name: "Sirop de coquelicot",
		category: "Sirops",
		description: "Sirop au goût délicat et floral, parfait pour les infusions.",
	},
	{
		name: "Sirop de réglisse",
		category: "Sirops",
		description: "Sirop intense pour les amateurs de réglisse.",
	},
	{
		name: "Sirop de thé vert",
		category: "Sirops",
		description: "Sirop léger et parfumé, idéal pour les boissons glacées.",
	},
	{
		name: "Sirop de gingembre",
		category: "Sirops",
		description: "Sirop épicé pour relever vos cocktails.",
	},
	{
		name: "Sirop de banane",
		category: "Sirops",
		description: "Sirop sucré au goût tropical, parfait pour les desserts.",
	},
	{
		name: "Sirop de noisette",
		category: "Sirops",
		description: "Sirop gourmand utilisé dans les cafés et chocolats chauds.",
	},
	{
		name: "Sirop d'ananas",
		category: "Sirops",
		description: "Sirop tropical pour accompagner vos boissons et desserts.",
	},
	{
		name: "Sirop de figue",
		category: "Sirops",
		description: "Sirop fruité et délicat pour les cocktails.",
	},
	{
		name: "Sirop de melon",
		category: "Sirops",
		description: "Sirop frais et sucré, parfait pour les boissons estivales.",
	},
	{
		name: "Sirop de lavande",
		category: "Sirops",
		description: "Sirop floral unique pour vos créations culinaires.",
	},
	{
		name: "Sirop de pêche blanche",
		category: "Sirops",
		description: "Sirop raffiné pour les thés glacés et cocktails légers.",
	},

	// Aides à la pâtisserie
	{
		name: "Levure chimique",
		category: "Aides à la pâtisserie",
		description:
			"Ingrédient essentiel pour faire lever vos gâteaux et pâtisseries.",
	},
	{
		name: "Bicarbonate de soude",
		category: "Aides à la pâtisserie",
		description: "Agent levant naturel pour des recettes légères.",
	},
	{
		name: "Arôme de vanille",
		category: "Aides à la pâtisserie",
		description: "Extrait de vanille pour parfumer vos préparations.",
	},
	{
		name: "Colorants alimentaires",
		category: "Aides à la pâtisserie",
		description: "Colorants en gel ou liquide pour décorer vos desserts.",
	},
	{
		name: "Sucre glace",
		category: "Aides à la pâtisserie",
		description: "Sucre fin utilisé pour les glaçages et la décoration.",
	},
	{
		name: "Sucre vanillé",
		category: "Aides à la pâtisserie",
		description: "Mélange sucré et parfumé pour enrichir vos recettes.",
	},
	{
		name: "Pépites de chocolat",
		category: "Aides à la pâtisserie",
		description: "Ingrédient gourmand pour cookies et gâteaux.",
	},
	{
		name: "Pâte à sucre",
		category: "Aides à la pâtisserie",
		description: "Pâte modelable pour décorer vos gâteaux.",
	},
	{
		name: "Crème pâtissière en poudre",
		category: "Aides à la pâtisserie",
		description: "Mélange instantané pour préparer des crèmes dessert.",
	},
	{
		name: "Gélatine alimentaire",
		category: "Aides à la pâtisserie",
		description: "Agent gélifiant pour mousses et entremets.",
	},
	{
		name: "Poudre d'amandes",
		category: "Aides à la pâtisserie",
		description: "Ingrédient pour enrichir les tartes et macarons.",
	},
	{
		name: "Fécule de maïs",
		category: "Aides à la pâtisserie",
		description: "Agent épaississant pour crèmes et sauces.",
	},
	{
		name: "Arôme citron",
		category: "Aides à la pâtisserie",
		description: "Extrait pour ajouter une touche acidulée à vos préparations.",
	},
	{
		name: "Poudre à flan",
		category: "Aides à la pâtisserie",
		description: "Mélange pour réaliser des flans et crèmes desserts.",
	},
	{
		name: "Cacao en poudre",
		category: "Aides à la pâtisserie",
		description: "Poudre de chocolat non sucrée pour desserts et gâteaux.",
	},
	{
		name: "Noix de coco râpée",
		category: "Aides à la pâtisserie",
		description: "Ingrédient parfumé pour décorer et enrichir vos pâtisseries.",
	},
	{
		name: "Glaçage au chocolat prêt à l'emploi",
		category: "Aides à la pâtisserie",
		description: "Glaçage rapide pour décorer vos gâteaux.",
	},
	{
		name: "Arôme amande amère",
		category: "Aides à la pâtisserie",
		description: "Parfum intense pour vos desserts raffinés.",
	},
	{
		name: "Vanille en gousse",
		category: "Aides à la pâtisserie",
		description: "Vanille naturelle pour infuser vos préparations.",
	},
	{
		name: "Poudre de noisettes",
		category: "Aides à la pâtisserie",
		description: "Ingrédient pour pâtisseries gourmandes comme le praliné.",
	},
	{
		name: "Paillettes comestibles",
		category: "Aides à la pâtisserie",
		description: "Décorations brillantes pour embellir vos créations.",
	},
	{
		name: "Farine spéciale pâtisserie",
		category: "Aides à la pâtisserie",
		description: "Farine fine idéale pour des textures aériennes.",
	},
	{
		name: "Mélange pour génoise",
		category: "Aides à la pâtisserie",
		description:
			"Préparation prête à l'emploi pour réaliser des génoises moelleuses.",
	},
	{
		name: "Meringue en poudre",
		category: "Aides à la pâtisserie",
		description: "Base rapide pour réaliser des meringues parfaites.",
	},
	{
		name: "Décors en sucre",
		category: "Aides à la pâtisserie",
		description: "Petites formes sucrées pour embellir vos gâteaux.",
	},
	{
		name: "Chocolat noir pâtissier",
		category: "Aides à la pâtisserie",
		description: "Chocolat riche pour fondre ou râper dans vos desserts.",
	},
	{
		name: "Fondant blanc",
		category: "Aides à la pâtisserie",
		description: "Pâte sucrée pour recouvrir et décorer vos gâteaux.",
	},
	{
		name: "Pralin en poudre",
		category: "Aides à la pâtisserie",
		description: "Mélange sucré de noisettes et amandes caramélisées.",
	},
	{
		name: "Beurre de cacao",
		category: "Aides à la pâtisserie",
		description: "Ingrédient utilisé pour tempérer et travailler le chocolat.",
	},

	// Cornichons et pickles

	{
		name: "Cornichons aigres-doux",
		category: "Cornichons et pickles",
		description:
			"Petits cornichons marinés dans une solution douce et vinaigrée.",
	},
	{
		name: "Cornichons extra-fins",
		category: "Cornichons et pickles",
		description: "Cornichons croquants et délicatement acidulés.",
	},
	{
		name: "Pickles d’oignons rouges",
		category: "Cornichons et pickles",
		description: "Oignons marinés légèrement sucrés et acidulés.",
	},
	{
		name: "Pickles de carottes",
		category: "Cornichons et pickles",
		description: "Fines tranches de carottes marinées au vinaigre.",
	},
	{
		name: "Chou rouge mariné",
		category: "Cornichons et pickles",
		description: "Légumes fermentés pour accompagner les plats.",
	},
	{
		name: "Kimchi coréen",
		category: "Cornichons et pickles",
		description: "Chou fermenté et épicé, typique de la cuisine coréenne.",
	},
	{
		name: "Cornichons malossol",
		category: "Cornichons et pickles",
		description: "Cornichons marinés à la russe, au goût légèrement salé.",
	},
	{
		name: "Pickles de concombres",
		category: "Cornichons et pickles",
		description:
			"Concombres tranchés et marinés pour les burgers et sandwiches.",
	},
	{
		name: "Girolles marinées",
		category: "Cornichons et pickles",
		description: "Petits champignons au goût subtil marinés au vinaigre.",
	},
	{
		name: "Navets marinés",
		category: "Cornichons et pickles",
		description:
			"Légumes croquants et acidulés, souvent utilisés dans les plats orientaux.",
	},
	{
		name: "Pickles de betteraves",
		category: "Cornichons et pickles",
		description: "Betteraves marinées au vinaigre doux et épices.",
	},
	{
		name: "Cornichons épicés",
		category: "Cornichons et pickles",
		description: "Cornichons relevés d'épices pour une touche piquante.",
	},
	{
		name: "Pickles de radis",
		category: "Cornichons et pickles",
		description: "Radis croquants marinés au vinaigre et sucre.",
	},
	{
		name: "Cornichons à l’aneth",
		category: "Cornichons et pickles",
		description: "Cornichons aromatisés à l’aneth pour un goût frais.",
	},
	{
		name: "Chou blanc fermenté (sauerkraut)",
		category: "Cornichons et pickles",
		description: "Chou fermenté, souvent utilisé dans les plats alsaciens.",
	},
	{
		name: "Pickles de jalapeños",
		category: "Cornichons et pickles",
		description: "Piments verts marinés au vinaigre, parfaits pour les tacos.",
	},
	{
		name: "Mélange de légumes marinés",
		category: "Cornichons et pickles",
		description:
			"Assortiment de légumes croquants dans une marinade vinaigrée.",
	},
	{
		name: "Cornichons au curry",
		category: "Cornichons et pickles",
		description: "Cornichons marinés avec une touche d'épices au curry.",
	},
	{
		name: "Chou-fleur mariné",
		category: "Cornichons et pickles",
		description: "Fleurs de chou-fleur croquantes dans une marinade parfumée.",
	},
	{
		name: "Aubergines marinées",
		category: "Cornichons et pickles",
		description:
			"Tranches d'aubergines marinées dans un mélange d'huile et d'épices.",
	},
	{
		name: "Pickles de poivrons",
		category: "Cornichons et pickles",
		description: "Lamelles de poivrons rouges et jaunes marinées.",
	},
	{
		name: "Olives vertes marinées",
		category: "Cornichons et pickles",
		description: "Olives légèrement vinaigrées pour l'apéritif.",
	},
	{
		name: "Légumes tzukemono",
		category: "Cornichons et pickles",
		description: "Pickles japonais au goût umami délicat.",
	},
	{
		name: "Pickles de chou chinois",
		category: "Cornichons et pickles",
		description:
			"Chou croustillant mariné, souvent utilisé dans les salades asiatiques.",
	},
	{
		name: "Mini-cornichons sucrés",
		category: "Cornichons et pickles",
		description:
			"Cornichons doux et croquants, parfaits pour les plateaux de fromages.",
	},
	{
		name: "Pickles d’asperges",
		category: "Cornichons et pickles",
		description: "Tiges d’asperges marinées pour un goût raffiné.",
	},
	{
		name: "Pickles de mangue (achar)",
		category: "Cornichons et pickles",
		description: "Spécialité indienne de mangues marinées aux épices.",
	},
	{
		name: "Cornichons à l’ail",
		category: "Cornichons et pickles",
		description:
			"Cornichons marinés avec une touche d’ail pour plus de saveur.",
	},
	{
		name: "Pickles de citrons confits",
		category: "Cornichons et pickles",
		description:
			"Citrons marinés au sel, souvent utilisés dans les plats marocains.",
	},

	// Conserves de légumes
	{
		name: "Petits pois en conserve",
		category: "Conserves de légumes",
		description: "Légumes verts tendres prêts à l'emploi.",
	},
	{
		name: "Carottes en conserve",
		category: "Conserves de légumes",
		description:
			"Carottes cuites et marinées, parfaites pour les plats rapides.",
	},
	{
		name: "Maïs en boîte",
		category: "Conserves de légumes",
		description: "Grains de maïs doux et croquants, prêts à consommer.",
	},
	{
		name: "Haricots verts en conserve",
		category: "Conserves de légumes",
		description: "Haricots fins et tendres déjà cuits.",
	},
	{
		name: "Tomates pelées en conserve",
		category: "Conserves de légumes",
		description: "Base indispensable pour les sauces et plats mijotés.",
	},
	{
		name: "Cœurs d'artichauts en conserve",
		category: "Conserves de légumes",
		description: "Parties tendres et savoureuses des artichauts.",
	},
	{
		name: "Champignons émincés en boîte",
		category: "Conserves de légumes",
		description: "Champignons prêts à l'emploi pour pizzas ou plats cuisinés.",
	},
	{
		name: "Lentilles en conserve",
		category: "Conserves de légumes",
		description: "Légumineuses précuites, idéales pour des plats rapides.",
	},
	{
		name: "Pois chiches en conserve",
		category: "Conserves de légumes",
		description: "Légumineuses prêtes pour houmous ou salades.",
	},
	{
		name: "Ratatouille en conserve",
		category: "Conserves de légumes",
		description: "Mélange de légumes provençaux mijotés.",
	},
	{
		name: "Aubergines grillées en conserve",
		category: "Conserves de légumes",
		description: "Tranches d'aubergines prêtes à être utilisées.",
	},
	{
		name: "Poêlée de légumes en boîte",
		category: "Conserves de légumes",
		description: "Mélange varié de légumes sautés et assaisonnés.",
	},
	{
		name: "Courgettes en conserve",
		category: "Conserves de légumes",
		description: "Tranches de courgettes précuites pour vos recettes.",
	},
	{
		name: "Poivrons rouges marinés",
		category: "Conserves de légumes",
		description: "Poivrons confits au goût intense.",
	},
	{
		name: "Choucroute en conserve",
		category: "Conserves de légumes",
		description: "Chou blanc fermenté prêt à l'emploi pour plats alsaciens.",
	},
	{
		name: "Épinards en boîte",
		category: "Conserves de légumes",
		description: "Feuilles d'épinards précuites et prêtes à réchauffer.",
	},
	{
		name: "Haricots rouges en conserve",
		category: "Conserves de légumes",
		description: "Ingrédient clé pour les chilis et salades.",
	},
	{
		name: "Fèves en conserve",
		category: "Conserves de légumes",
		description:
			"Légumes riches en protéines, parfaits pour des plats végétariens.",
	},
	{
		name: "Mix de légumes pour pot-au-feu",
		category: "Conserves de légumes",
		description:
			"Assortiment de légumes précuits pour soupes et plats mijotés.",
	},
	{
		name: "Betteraves en conserve",
		category: "Conserves de légumes",
		description: "Betteraves précuites et prêtes à trancher.",
	},
	{
		name: "Pommes de terre en conserve",
		category: "Conserves de légumes",
		description: "Pommes de terre précuites, pratiques et rapides à préparer.",
	},
	{
		name: "Navets en conserve",
		category: "Conserves de légumes",
		description: "Navets tendres, parfaits pour les plats mijotés.",
	},
	{
		name: "Courge en conserve",
		category: "Conserves de légumes",
		description: "Légume doux et prêt pour des soupes ou purées.",
	},
	{
		name: "Tomates concassées en boîte",
		category: "Conserves de légumes",
		description: "Tomates hachées, prêtes pour vos sauces maison.",
	},
	{
		name: "Légumes pour couscous en conserve",
		category: "Conserves de légumes",
		description:
			"Mélange de légumes précuits pour préparer un couscous rapide.",
	},
	{
		name: "Panais en conserve",
		category: "Conserves de légumes",
		description: "Légume racine doux et savoureux, prêt à cuisiner.",
	},
	{
		name: "Asperges en conserve",
		category: "Conserves de légumes",
		description: "Tiges tendres d'asperges, parfaites pour salades ou gratins.",
	},
	{
		name: "Légumes grillés en conserve",
		category: "Conserves de légumes",
		description: "Mélange de légumes grillés au goût intense.",
	},
	{
		name: "Mix de légumes à la provençale",
		category: "Conserves de légumes",
		description: "Légumes mijotés avec des herbes de Provence.",
	},

	// Conserves de poissons
	{
		name: "Thon en boîte à l'huile d'olive",
		category: "Conserves de poissons",
		description: "Thon tendre conservé dans une huile d'olive savoureuse.",
	},
	{
		name: "Thon en boîte au naturel",
		category: "Conserves de poissons",
		description: "Thon conservé sans huile pour des plats légers.",
	},
	{
		name: "Sardines à l'huile d'olive",
		category: "Conserves de poissons",
		description:
			"Sardines entières marinées dans une huile d'olive de qualité.",
	},
	{
		name: "Sardines au piment",
		category: "Conserves de poissons",
		description: "Sardines relevées d'une marinade légèrement épicée.",
	},
	{
		name: "Maquereaux à la moutarde",
		category: "Conserves de poissons",
		description: "Filets de maquereaux dans une sauce moutardée.",
	},
	{
		name: "Filets de maquereaux au vin blanc",
		category: "Conserves de poissons",
		description: "Poisson tendre cuisiné dans une sauce au vin blanc.",
	},
	{
		name: "Anchois marinés",
		category: "Conserves de poissons",
		description:
			"Filets d'anchois au goût intense et salé, parfaits pour les salades.",
	},
	{
		name: "Rillettes de thon",
		category: "Conserves de poissons",
		description:
			"Préparation crémeuse à base de thon, idéale pour les tartines.",
	},
	{
		name: "Rillettes de maquereaux",
		category: "Conserves de poissons",
		description: "Préparation onctueuse pour les apéritifs et sandwiches.",
	},
	{
		name: "Saumon en conserve",
		category: "Conserves de poissons",
		description: "Morceaux de saumon cuits et prêts à être utilisés.",
	},
	{
		name: "Filets de hareng fumé",
		category: "Conserves de poissons",
		description: "Poisson fumé et conservé pour des plats authentiques.",
	},
	{
		name: "Tartinable de sardines",
		category: "Conserves de poissons",
		description: "Pâte de sardines idéale pour les toasts.",
	},
	{
		name: "Crevettes en conserve",
		category: "Conserves de poissons",
		description: "Crevettes marinées prêtes à l'emploi pour salades et plats.",
	},
	{
		name: "Poulpe en conserve",
		category: "Conserves de poissons",
		description:
			"Poulpe tendre, souvent utilisé dans les recettes méditerranéennes.",
	},
	{
		name: "Cabillaud en conserve",
		category: "Conserves de poissons",
		description: "Poisson blanc délicat et savoureux prêt à l'emploi.",
	},
	{
		name: "Caviar de saumon",
		category: "Conserves de poissons",
		description:
			"Œufs de saumon délicats, parfaits pour des recettes raffinées.",
	},
	{
		name: "Moules à l'escabèche",
		category: "Conserves de poissons",
		description: "Moules dans une sauce légèrement épicée.",
	},
	{
		name: "Œufs de lompe",
		category: "Conserves de poissons",
		description: "Alternative économique au caviar, pour garnir vos plats.",
	},
	{
		name: "Anchoïade",
		category: "Conserves de poissons",
		description: "Crème à base d'anchois pour accompagner crudités et toasts.",
	},
	{
		name: "Tuna flakes au citron",
		category: "Conserves de poissons",
		description: "Morceaux de thon assaisonnés avec une touche de citron.",
	},
	{
		name: "Sardines au citron",
		category: "Conserves de poissons",
		description: "Sardines marinées avec une saveur acidulée de citron.",
	},
	{
		name: "Harengs à la tomate",
		category: "Conserves de poissons",
		description: "Filets de harengs dans une sauce tomate savoureuse.",
	},
	{
		name: "Poisson en sauce curry",
		category: "Conserves de poissons",
		description: "Conserve de poisson dans une sauce épicée au curry.",
	},
	{
		name: "Terrine de poisson",
		category: "Conserves de poissons",
		description: "Préparation gourmande pour accompagner les apéritifs.",
	},
	{
		name: "Encornets farcis en conserve",
		category: "Conserves de poissons",
		description: "Calmars farcis, spécialité méditerranéenne.",
	},
	{
		name: "Saumon fumé en boîte",
		category: "Conserves de poissons",
		description: "Saumon fumé en conserve pour des utilisations rapides.",
	},
	{
		name: "Coquilles Saint-Jacques en conserve",
		category: "Conserves de poissons",
		description: "Mollusques tendres et savoureux pour vos plats.",
	},
	{
		name: "Morue salée en conserve",
		category: "Conserves de poissons",
		description:
			"Poisson traditionnel utilisé pour les recettes comme la brandade.",
	},
	{
		name: "Bouillabaisse en conserve",
		category: "Conserves de poissons",
		description: "Soupe de poisson méditerranéenne prête à réchauffer.",
	},

	// Produits d'épicerie fine

	{
		name: "Foie gras de canard",
		category: "Produits d'épicerie fine",
		description: "Spécialité française, parfaite pour les repas de fête.",
	},
	{
		name: "Rillettes de canard",
		category: "Produits d'épicerie fine",
		description: "Préparation gourmande à tartiner sur du pain frais.",
	},
	{
		name: "Terrine de gibier",
		category: "Produits d'épicerie fine",
		description: "Terrine savoureuse à base de viande de gibier.",
	},
	{
		name: "Truffes en conserve",
		category: "Produits d'épicerie fine",
		description: "Champignons précieux pour sublimer vos plats raffinés.",
	},
	{
		name: "Huile d'olive truffée",
		category: "Produits d'épicerie fine",
		description:
			"Huile parfumée à la truffe, idéale pour les salades et pâtes.",
	},
	{
		name: "Confit d'oignons",
		category: "Produits d'épicerie fine",
		description:
			"Accompagnement sucré-salé parfait pour le foie gras ou le fromage.",
	},
	{
		name: "Caviar d’aubergine",
		category: "Produits d'épicerie fine",
		description: "Préparation méditerranéenne pour vos apéritifs.",
	},
	{
		name: "Pesto de truffes",
		category: "Produits d'épicerie fine",
		description: "Sauce crémeuse et parfumée à base de truffes.",
	},
	{
		name: "Sel de Guérande",
		category: "Produits d'épicerie fine",
		description: "Sel marin artisanal pour relever vos plats.",
	},
	{
		name: "Miel de fleurs sauvages",
		category: "Produits d'épicerie fine",
		description: "Miel doux et floral, idéal pour accompagner des fromages.",
	},
	{
		name: "Vinaigre balsamique vieilli",
		category: "Produits d'épicerie fine",
		description: "Vinaigre raffiné, parfait pour les salades et desserts.",
	},
	{
		name: "Chutney de mangue",
		category: "Produits d'épicerie fine",
		description: "Accompagnement sucré et épicé pour les viandes et currys.",
	},
	{
		name: "Anchoïade",
		category: "Produits d'épicerie fine",
		description: "Pâte salée à base d'anchois, parfaite avec des crudités.",
	},
	{
		name: "Tartare d’algues",
		category: "Produits d'épicerie fine",
		description: "Préparation originale et iodée pour les apéritifs.",
	},
	{
		name: "Filets de sardines millésimées",
		category: "Produits d'épicerie fine",
		description: "Sardines haut de gamme pour les amateurs de poisson.",
	},
	{
		name: "Pâte de truffes noires",
		category: "Produits d'épicerie fine",
		description: "Ingrédient luxueux pour rehausser vos plats.",
	},
	{
		name: "Confit de figues",
		category: "Produits d'épicerie fine",
		description: "Compote sucrée idéale pour accompagner le fromage.",
	},
	{
		name: "Crème de marrons",
		category: "Produits d'épicerie fine",
		description: "Préparation douce et sucrée pour les desserts.",
	},
	{
		name: "Saumon fumé bio",
		category: "Produits d'épicerie fine",
		description: "Produit artisanal, idéal pour les repas de fête.",
	},
	{
		name: "Caviar d’esturgeon",
		category: "Produits d'épicerie fine",
		description:
			"Produit de luxe, souvent servi sur des blinis avec de la crème fraîche.",
	},
	{
		name: "Tapenade d’olives noires",
		category: "Produits d'épicerie fine",
		description: "Pâte savoureuse à tartiner, typique de la Provence.",
	},
	{
		name: "Fleur de sel à la truffe",
		category: "Produits d'épicerie fine",
		description:
			"Sel délicatement parfumé à la truffe pour des plats raffinés.",
	},
	{
		name: "Gelée de champagne",
		category: "Produits d'épicerie fine",
		description: "Accompagnement unique pour les desserts et fromages.",
	},
	{
		name: "Bloc de foie gras d’oie",
		category: "Produits d'épicerie fine",
		description: "Alternative raffinée au foie gras de canard.",
	},
	{
		name: "Poivre de Kampot",
		category: "Produits d'épicerie fine",
		description: "Poivre de qualité supérieure aux arômes complexes.",
	},
	{
		name: "Crème de parmesan",
		category: "Produits d'épicerie fine",
		description:
			"Tartinable crémeux pour accompagner des crackers ou des pâtes.",
	},
	{
		name: "Confit de citron",
		category: "Produits d'épicerie fine",
		description:
			"Accompagnement acidulé parfait pour les viandes blanches et poissons.",
	},
	{
		name: "Huîtres en conserve",
		category: "Produits d'épicerie fine",
		description: "Produit de luxe pour les amateurs de fruits de mer.",
	},
	{
		name: "Rillettes de saumon fumé",
		category: "Produits d'épicerie fine",
		description: "Préparation onctueuse pour tartines ou apéritifs.",
	},

	// Produits pour brunch
	{
		name: "Bagels nature",
		category: "Produits pour brunch",
		description:
			"Pains ronds et moelleux, parfaits pour garnir de saumon ou fromage.",
	},
	{
		name: "Saumon fumé tranché",
		category: "Produits pour brunch",
		description: "Idéal pour accompagner des bagels ou des œufs brouillés.",
	},
	{
		name: "Fromage à tartiner",
		category: "Produits pour brunch",
		description: "Crème onctueuse, parfaite pour les toasts et bagels.",
	},
	{
		name: "Pancakes prêts à réchauffer",
		category: "Produits pour brunch",
		description: "Pancakes moelleux pour accompagner sirop d’érable et fruits.",
	},
	{
		name: "Œufs bio",
		category: "Produits pour brunch",
		description: "Idéal pour les omelettes, œufs brouillés ou pochés.",
	},
	{
		name: "Bacon grillé",
		category: "Produits pour brunch",
		description: "Tranches croustillantes pour compléter un brunch.",
	},
	{
		name: "Croissants au beurre",
		category: "Produits pour brunch",
		description: "Viennoiseries classiques pour une touche sucrée.",
	},
	{
		name: "Pain aux céréales",
		category: "Produits pour brunch",
		description: "Pain rustique, idéal pour des tartines.",
	},
	{
		name: "Jus d’orange frais",
		category: "Produits pour brunch",
		description: "Boisson vitaminée pour bien commencer la journée.",
	},
	{
		name: "Avocats mûrs",
		category: "Produits pour brunch",
		description: "Parfaits pour des toasts ou des salades.",
	},
	{
		name: "Muesli aux noix et fruits secs",
		category: "Produits pour brunch",
		description: "Céréales nutritives pour accompagner du yaourt.",
	},
	{
		name: "Confiture artisanale",
		category: "Produits pour brunch",
		description: "Tartinable aux fruits pour vos viennoiseries et pains.",
	},
	{
		name: "Pain de mie complet",
		category: "Produits pour brunch",
		description: "Option moelleuse pour des sandwichs ou toasts.",
	},
	{
		name: "Crêpes prêtes à servir",
		category: "Produits pour brunch",
		description:
			"Délicieuses crêpes pour ajouter des garnitures sucrées ou salées.",
	},
	{
		name: "Sirop d’érable",
		category: "Produits pour brunch",
		description: "Parfait pour accompagner pancakes et gaufres.",
	},
	{
		name: "Fruits frais coupés",
		category: "Produits pour brunch",
		description: "Mélange coloré de fruits frais pour une option légère.",
	},
	{
		name: "Yaourt grec",
		category: "Produits pour brunch",
		description: "Yaourt riche et crémeux, idéal avec du miel ou granola.",
	},
	{
		name: "Quiche lorraine",
		category: "Produits pour brunch",
		description: "Tarte salée idéale pour un brunch.",
	},
	{
		name: "Salade de quinoa",
		category: "Produits pour brunch",
		description: "Option légère et nutritive pour compléter votre repas.",
	},
	{
		name: "Beurre demi-sel",
		category: "Produits pour brunch",
		description: "Pour accompagner vos tartines ou viennoiseries.",
	},
	{
		name: "Smoothie aux fruits rouges",
		category: "Produits pour brunch",
		description: "Boisson onctueuse et riche en vitamines.",
	},
	{
		name: "Tomates cerises",
		category: "Produits pour brunch",
		description:
			"Parfaites pour ajouter de la couleur et de la saveur à vos plats.",
	},
	{
		name: "Assortiment de fromages",
		category: "Produits pour brunch",
		description: "Sélection de fromages pour un plateau savoureux.",
	},
	{
		name: "Granola croustillant",
		category: "Produits pour brunch",
		description: "Mélange sucré et croquant pour accompagner les yaourts.",
	},
	{
		name: "Thé Earl Grey",
		category: "Produits pour brunch",
		description: "Boisson chaude classique pour accompagner votre repas.",
	},
	{
		name: "Charcuterie fine",
		category: "Produits pour brunch",
		description: "Assortiment de viandes séchées et jambons.",
	},
	{
		name: "Pain complet tranché",
		category: "Produits pour brunch",
		description: "Option riche en fibres pour des tartines ou sandwichs.",
	},
	{
		name: "Omelette préparée",
		category: "Produits pour brunch",
		description: "Option rapide et savoureuse pour votre repas.",
	},
	{
		name: "Tartare de saumon",
		category: "Produits pour brunch",
		description: "Préparation fraîche et légère pour accompagner des toasts.",
	},

	// Féculents
	{
		name: "Pommes de terre classiques",
		category: "Féculents",
		description: "Tubercules polyvalents pour purées, frites ou gratins.",
	},
	{
		name: "Pommes de terre nouvelles",
		category: "Féculents",
		description:
			"Pommes de terre petites et délicates, idéales pour les plats mijotés.",
	},
	{
		name: "Patates douces",
		category: "Féculents",
		description:
			"Tubercules sucrés riches en vitamines, parfaits pour les purées et frites.",
	},
	{
		name: "Pommes de terre rattes",
		category: "Féculents",
		description: "Variété au goût fin et à la texture ferme, idéale en salade.",
	},
	{
		name: "Gnocchis de pomme de terre",
		category: "Féculents",
		description: "Petites pâtes tendres, parfaites avec des sauces.",
	},
	{
		name: "Polenta précuite",
		category: "Féculents",
		description: "Farine de maïs à préparer en accompagnement ou en gratin.",
	},
	{
		name: "Manioc frais",
		category: "Féculents",
		description:
			"Racine tropicale riche en amidon, idéale pour bouillir ou frire.",
	},
	{
		name: "Riz basmati",
		category: "Féculents",
		description:
			"Riz long grain parfumé, parfait pour accompagner les plats asiatiques.",
	},
	{
		name: "Riz complet",
		category: "Féculents",
		description: "Riz entier riche en fibres pour une alimentation équilibrée.",
	},
	{
		name: "Semoule fine",
		category: "Féculents",
		description: "Ingrédient de base pour le couscous et les desserts.",
	},
	{
		name: "Farine de manioc",
		category: "Féculents",
		description: "Alternative sans gluten pour les plats et pâtisseries.",
	},
	{
		name: "Riz gluant",
		category: "Féculents",
		description:
			"Riz collant utilisé dans la cuisine asiatique, notamment les desserts.",
	},
	{
		name: "Blé précuit",
		category: "Féculents",
		description: "Céréale rapide à préparer, parfaite pour les taboulés.",
	},
	{
		name: "Quinoa",
		category: "Féculents",
		description:
			"Alternative nutritive et sans gluten aux céréales classiques.",
	},
	{
		name: "Épeautre",
		category: "Féculents",
		description:
			"Céréale ancienne, riche en fibres et au goût légèrement noisetté.",
	},
	{
		name: "Patates douces violettes",
		category: "Féculents",
		description: "Variété colorée et sucrée, riche en antioxydants.",
	},
	{
		name: "Couscous perlé (mograbieh)",
		category: "Féculents",
		description: "Gros grains de semoule utilisés dans la cuisine orientale.",
	},
	{
		name: "Riz sauvage",
		category: "Féculents",
		description: "Grains foncés et croquants, riches en nutriments.",
	},
	{
		name: "Vermicelles de riz",
		category: "Féculents",
		description:
			"Nouilles asiatiques légères, parfaites pour les soupes et sautés.",
	},
	{
		name: "Haricots blancs",
		category: "Féculents",
		description:
			"Légumineuses tendres, parfaites pour les cassoulets et ragoûts.",
	},
	{
		name: "Pois cassés",
		category: "Féculents",
		description:
			"Ingrédient riche en fibres, utilisé dans les soupes épaisses.",
	},
	{
		name: "Riz arborio",
		category: "Féculents",
		description: "Riz italien utilisé pour préparer des risottos crémeux.",
	},
	{
		name: "Fécule de pomme de terre",
		category: "Féculents",
		description: "Amidon utilisé pour épaissir les sauces et pâtisseries.",
	},
	{
		name: "Maïs précuit",
		category: "Féculents",
		description: "Grains doux et croquants, prêts à intégrer dans vos plats.",
	},
	{
		name: "Patates douces jaunes",
		category: "Féculents",
		description: "Variante sucrée et tendre, idéale pour les plats mijotés.",
	},
	{
		name: "Orge perlé",
		category: "Féculents",
		description: "Céréale tendre et riche en nutriments, parfaite en soupe.",
	},
	{
		name: "Bulgur",
		category: "Féculents",
		description:
			"Blé concassé utilisé dans les plats orientaux comme le taboulé.",
	},
	{
		name: "Haricots rouges",
		category: "Féculents",
		description: "Légumineuses incontournables pour le chili et les salades.",
	},
	{
		name: "Farine de blé entier",
		category: "Féculents",
		description: "Farine riche en fibres pour les pains et pâtisseries maison.",
	},

	// Soupes en conserve

	{
		name: "Soupe de légumes",
		category: "Soupes en conserve",
		description: "Mélange classique de légumes mijotés, prêt à réchauffer.",
	},
	{
		name: "Soupe de tomates",
		category: "Soupes en conserve",
		description: "Soupe douce et acidulée à base de tomates mûries au soleil.",
	},
	{
		name: "Velouté de potiron",
		category: "Soupes en conserve",
		description: "Soupe crémeuse à base de potiron et d'épices douces.",
	},
	{
		name: "Soupe de champignons",
		category: "Soupes en conserve",
		description: "Préparation onctueuse au goût intense de champignons.",
	},
	{
		name: "Minestrone",
		category: "Soupes en conserve",
		description: "Soupe italienne riche en légumes, haricots et pâtes.",
	},
	{
		name: "Soupe de poulet et nouilles",
		category: "Soupes en conserve",
		description:
			"Soupe réconfortante avec morceaux de poulet et nouilles fines.",
	},
	{
		name: "Velouté de légumes verts",
		category: "Soupes en conserve",
		description: "Soupe douce et crémeuse à base de légumes verts.",
	},
	{
		name: "Soupe de lentilles",
		category: "Soupes en conserve",
		description: "Soupe nourrissante aux lentilles et légumes.",
	},
	{
		name: "Bouillon de bœuf",
		category: "Soupes en conserve",
		description:
			"Base savoureuse idéale pour accompagner des pâtes ou légumes.",
	},
	{
		name: "Gaspacho",
		category: "Soupes en conserve",
		description:
			"Soupe froide espagnole à base de tomates, poivrons et concombres.",
	},
	{
		name: "Velouté de carottes",
		category: "Soupes en conserve",
		description: "Soupe douce et légèrement sucrée, idéale en entrée.",
	},
	{
		name: "Soupe de pois cassés",
		category: "Soupes en conserve",
		description: "Soupe épaisse et riche en protéines végétales.",
	},
	{
		name: "Soupe aux pois chiches",
		category: "Soupes en conserve",
		description: "Préparation méditerranéenne riche et savoureuse.",
	},
	{
		name: "Soupe miso",
		category: "Soupes en conserve",
		description: "Soupe japonaise à base de pâte miso et algues.",
	},
	{
		name: "Velouté de courgettes",
		category: "Soupes en conserve",
		description: "Soupe légère et délicatement parfumée.",
	},
	{
		name: "Soupe de poisson",
		category: "Soupes en conserve",
		description:
			"Préparation riche en saveurs marines, idéale avec des croûtons.",
	},
	{
		name: "Soupe thaï au lait de coco",
		category: "Soupes en conserve",
		description: "Soupe exotique au poulet et lait de coco parfumé.",
	},
	{
		name: "Soupe au curry rouge",
		category: "Soupes en conserve",
		description:
			"Soupe épicée et réchauffante, typique de la cuisine asiatique.",
	},
	{
		name: "Soupe à l’oignon",
		category: "Soupes en conserve",
		description: "Soupe traditionnelle française à base d'oignons caramélisés.",
	},
	{
		name: "Soupe de courge butternut",
		category: "Soupes en conserve",
		description: "Velouté doux et onctueux, parfait pour l'hiver.",
	},
	{
		name: "Bouillon de légumes",
		category: "Soupes en conserve",
		description: "Base légère et aromatique pour vos recettes.",
	},
	{
		name: "Soupe au pistou",
		category: "Soupes en conserve",
		description: "Soupe provençale aux légumes, haricots et basilic.",
	},
	{
		name: "Soupe aux haricots rouges",
		category: "Soupes en conserve",
		description: "Soupe épicée et riche en fibres.",
	},
	{
		name: "Chorba algérienne",
		category: "Soupes en conserve",
		description: "Soupe traditionnelle à base de légumes et épices orientales.",
	},
	{
		name: "Velouté aux asperges",
		category: "Soupes en conserve",
		description: "Préparation délicate à base d’asperges fraîches.",
	},
	{
		name: "Soupe pho",
		category: "Soupes en conserve",
		description: "Soupe vietnamienne aux nouilles de riz et épices.",
	},
	{
		name: "Potage Dubarry",
		category: "Soupes en conserve",
		description: "Velouté raffiné à base de chou-fleur.",
	},
	{
		name: "Velouté de brocolis",
		category: "Soupes en conserve",
		description: "Soupe onctueuse et riche en saveurs végétales.",
	},
	{
		name: "Soupe de légumes bio",
		category: "Soupes en conserve",
		description: "Préparation naturelle et équilibrée, certifiée biologique.",
	},

	// Produits halal
	{
		name: "Merguez halal",
		category: "Produits halal",
		description: "Saucisses épicées préparées selon les normes halal.",
	},
	{
		name: "Poulet entier halal",
		category: "Produits halal",
		description: "Volaille fraîche certifiée halal, idéale pour les rôtis.",
	},
	{
		name: "Escalope de dinde halal",
		category: "Produits halal",
		description: "Filets de dinde tendre, parfaits pour les grillades.",
	},
	{
		name: "Steak haché de bœuf halal",
		category: "Produits halal",
		description:
			"Viande de bœuf hachée, prête pour les burgers ou plats mijotés.",
	},
	{
		name: "Brochettes de poulet halal",
		category: "Produits halal",
		description: "Brochettes marinées, idéales pour les barbecues.",
	},
	{
		name: "Keftas de bœuf halal",
		category: "Produits halal",
		description:
			"Boulettes de bœuf épicées pour les grillades ou plats orientaux.",
	},
	{
		name: "Jambon de dinde halal",
		category: "Produits halal",
		description: "Alternative légère et certifiée halal pour vos sandwiches.",
	},
	{
		name: "Saucisses de volaille halal",
		category: "Produits halal",
		description: "Saucisses savoureuses pour les repas rapides.",
	},
	{
		name: "Ailes de poulet marinées halal",
		category: "Produits halal",
		description: "Prêtes à griller ou cuire au four pour un repas savoureux.",
	},
	{
		name: "Cordon bleu halal",
		category: "Produits halal",
		description:
			"Escalope de poulet panée et farcie de fromage, certifiée halal.",
	},
	{
		name: "Rôti de veau halal",
		category: "Produits halal",
		description: "Pièce de viande tendre, idéale pour les repas familiaux.",
	},
	{
		name: "Pâté de volaille halal",
		category: "Produits halal",
		description: "Tartinable délicat pour les apéritifs ou les entrées.",
	},
	{
		name: "Hachis d'agneau halal",
		category: "Produits halal",
		description: "Viande d’agneau hachée pour keftas, currys ou plats mijotés.",
	},
	{
		name: "Salami halal",
		category: "Produits halal",
		description:
			"Charcuterie savoureuse, idéale pour accompagner des plats ou apéritifs.",
	},
	{
		name: "Mini-pizzas halal",
		category: "Produits halal",
		description: "Pizzas surgelées avec garniture certifiée halal.",
	},
	{
		name: "Nuggets de poulet halal",
		category: "Produits halal",
		description: "Morceaux de poulet pané, parfaits pour les repas rapides.",
	},
	{
		name: "Viande hachée épicée halal",
		category: "Produits halal",
		description: "Parfaite pour des plats comme le chili ou les tacos.",
	},
	{
		name: "Filets de poisson panés halal",
		category: "Produits halal",
		description: "Poisson savoureux et croustillant, prêt à cuire.",
	},
	{
		name: "Shawarma de poulet halal",
		category: "Produits halal",
		description: "Viande marinée prête pour des sandwichs ou wraps.",
	},
	{
		name: "Rillettes de poulet halal",
		category: "Produits halal",
		description: "Préparation onctueuse idéale pour tartiner.",
	},
	{
		name: "Côtelettes d’agneau halal",
		category: "Produits halal",
		description: "Morceaux tendres et juteux pour vos grillades.",
	},
	{
		name: "Bolognaise halal en conserve",
		category: "Produits halal",
		description: "Sauce prête à l'emploi avec viande certifiée halal.",
	},
	{
		name: "Saucisses cocktail halal",
		category: "Produits halal",
		description: "Petites saucisses savoureuses, parfaites pour les apéritifs.",
	},
	{
		name: "Viande de kebab halal",
		category: "Produits halal",
		description:
			"Viande précuite et épicée, idéale pour wraps ou assiettes composées.",
	},
	{
		name: "Rillettes de canard halal",
		category: "Produits halal",
		description: "Préparation délicate à tartiner, certifiée halal.",
	},
	{
		name: "Boulettes de viande halal",
		category: "Produits halal",
		description: "Morceaux savoureux, parfaits pour accompagner des sauces.",
	},
	{
		name: "Foie de volaille halal",
		category: "Produits halal",
		description: "Ingrédient savoureux pour des plats mijotés ou en pâté.",
	},
	{
		name: "Viande séchée halal",
		category: "Produits halal",
		description: "Spécialité artisanale, parfaite pour les encas ou apéritifs.",
	},
	{
		name: "Agneau mariné halal",
		category: "Produits halal",
		description: "Viande prête à cuire avec une marinade parfumée.",
	},

	// Produits casher
	{
		name: "Poulet entier casher",
		category: "Produits casher",
		description:
			"Volaille certifiée casher, idéale pour les plats mijotés ou rôtis.",
	},
	{
		name: "Escalope de dinde casher",
		category: "Produits casher",
		description: "Filets tendres de dinde, préparés selon les règles casher.",
	},
	{
		name: "Steak haché de bœuf casher",
		category: "Produits casher",
		description:
			"Viande de bœuf hachée, parfaite pour les hamburgers et boulettes.",
	},
	{
		name: "Salami casher",
		category: "Produits casher",
		description:
			"Charcuterie savoureuse pour accompagner sandwiches et apéritifs.",
	},
	{
		name: "Saucisses de volaille casher",
		category: "Produits casher",
		description: "Saucisses tendres, idéales pour les plats rapides.",
	},
	{
		name: "Ailes de poulet casher",
		category: "Produits casher",
		description: "Morceaux juteux, prêts à cuire ou griller.",
	},
	{
		name: "Cordon bleu casher",
		category: "Produits casher",
		description: "Viande panée et farcie, adaptée aux repas casher.",
	},
	{
		name: "Rôti de veau casher",
		category: "Produits casher",
		description: "Viande tendre pour des plats mijotés ou au four.",
	},
	{
		name: "Hachis de volaille casher",
		category: "Produits casher",
		description: "Idéal pour les boulettes, keftas ou plats en sauce.",
	},
	{
		name: "Jambon de dinde casher",
		category: "Produits casher",
		description:
			"Alternative légère et certifiée pour les sandwiches et salades.",
	},
	{
		name: "Saucisses cocktail casher",
		category: "Produits casher",
		description: "Petites saucisses savoureuses pour les apéritifs ou snacks.",
	},
	{
		name: "Foie de volaille casher",
		category: "Produits casher",
		description:
			"Ingrédient parfait pour des plats traditionnels ou pâtés maison.",
	},
	{
		name: "Pastrami casher",
		category: "Produits casher",
		description: "Viande de bœuf fumée et épicée, idéale pour les sandwichs.",
	},
	{
		name: "Soupe de boulettes casher",
		category: "Produits casher",
		description: "Bouillon traditionnel avec boulettes certifiées casher.",
	},
	{
		name: "Boulettes de viande casher",
		category: "Produits casher",
		description:
			"Prêtes à cuisiner, idéales pour accompagner des pâtes ou du riz.",
	},
	{
		name: "Saucisses fumées casher",
		category: "Produits casher",
		description:
			"Charcuterie savoureuse, parfaite pour les plats réconfortants.",
	},
	{
		name: "Filets de poisson casher",
		category: "Produits casher",
		description: "Poisson préparé selon les règles casher, prêt à cuire.",
	},
	{
		name: "Viande de kebab casher",
		category: "Produits casher",
		description: "Viande marinée prête à griller ou à cuire.",
	},
	{
		name: "Charcuterie de bœuf casher",
		category: "Produits casher",
		description: "Sélection de charcuteries à base de bœuf pour les apéritifs.",
	},
	{
		name: "Nuggets de poulet casher",
		category: "Produits casher",
		description: "Morceaux de poulet panés, faciles à préparer.",
	},
	{
		name: "Blancs de poulet casher",
		category: "Produits casher",
		description:
			"Viande maigre et tendre, idéale pour les grillades ou sautés.",
	},
	{
		name: "Viande hachée épicée casher",
		category: "Produits casher",
		description: "Parfaite pour des recettes relevées comme le chili.",
	},
	{
		name: "Bouillon de volaille casher",
		category: "Produits casher",
		description: "Base savoureuse pour les soupes et plats mijotés.",
	},
	{
		name: "Corned beef casher",
		category: "Produits casher",
		description: "Viande de bœuf salée et savoureuse pour les repas rapides.",
	},
	{
		name: "Shnitzel casher",
		category: "Produits casher",
		description: "Escalope de poulet panée et croustillante.",
	},
	{
		name: "Terrine de poulet casher",
		category: "Produits casher",
		description:
			"Préparation raffinée et délicate pour les entrées ou apéritifs.",
	},
	{
		name: "Brochettes de bœuf casher",
		category: "Produits casher",
		description: "Morceaux marinés, parfaits pour les barbecues.",
	},
	{
		name: "Viande séchée casher",
		category: "Produits casher",
		description: "Spécialité artisanale à savourer en apéritif ou collation.",
	},
	{
		name: "Agneau mariné casher",
		category: "Produits casher",
		description:
			"Viande savoureuse prête à cuire pour des plats mijotés ou grillés.",
	},

	// Plats épicés
	{
		name: "Curry rouge thaï",
		category: "Plats épicés",
		description:
			"Plat épicé et crémeux à base de lait de coco et de pâte de curry rouge.",
	},
	{
		name: "Chili con carne",
		category: "Plats épicés",
		description: "Plat mijoté avec viande, haricots rouges et piments forts.",
	},
	{
		name: "Vindaloo d'agneau",
		category: "Plats épicés",
		description:
			"Curry indien très épicé à base de viande d'agneau et d'épices.",
	},
	{
		name: "Poulet tikka masala",
		category: "Plats épicés",
		description: "Poulet mariné et cuisiné dans une sauce épicée et parfumée.",
	},
	{
		name: "Ragoût de poisson épicé",
		category: "Plats épicés",
		description: "Plat mijoté à base de poisson et de piments.",
	},
	{
		name: "Tacos épicés",
		category: "Plats épicés",
		description: "Tortillas garnies de viande épicée et de légumes.",
	},
	{
		name: "Riz jollof",
		category: "Plats épicés",
		description: "Plat ouest-africain à base de riz, tomates et piments.",
	},
	{
		name: "Soupe au piment",
		category: "Plats épicés",
		description: "Soupe chaude et relevée avec une touche de piments frais.",
	},
	{
		name: "Poêlée de légumes épicés",
		category: "Plats épicés",
		description: "Mélange de légumes sautés avec des épices fortes.",
	},
	{
		name: "Haricots rouges épicés",
		category: "Plats épicés",
		description: "Plat mijoté avec haricots rouges et piments.",
	},
	{
		name: "Wings de poulet épicés",
		category: "Plats épicés",
		description: "Ailes de poulet marinées dans une sauce piquante.",
	},
	{
		name: "Émincé de bœuf au piment",
		category: "Plats épicés",
		description: "Morceaux de bœuf sautés avec des piments rouges.",
	},
	{
		name: "Pad Thaï épicé",
		category: "Plats épicés",
		description: "Nouilles sautées avec une sauce relevée au piment.",
	},
	{
		name: "Kimchi épicé",
		category: "Plats épicés",
		description: "Chou fermenté coréen avec une base de piments forts.",
	},
	{
		name: "Saucisses épicées",
		category: "Plats épicés",
		description: "Saucisses relevées d'un mélange de piments et épices.",
	},
	{
		name: "Nouilles sichuanaises",
		category: "Plats épicés",
		description:
			"Plat chinois avec des nouilles dans une sauce au piment de Sichuan.",
	},
	{
		name: "Soupe mexicaine épicée",
		category: "Plats épicés",
		description: "Soupe riche en saveurs avec du piment et des haricots.",
	},
	{
		name: "Crevettes épicées au piment",
		category: "Plats épicés",
		description: "Crevettes sautées avec une sauce piquante.",
	},
	{
		name: "Brochettes d’agneau épicées",
		category: "Plats épicés",
		description: "Brochettes marinées dans un mélange d’épices relevées.",
	},
	{
		name: "Kebabs épicés",
		category: "Plats épicés",
		description: "Boulettes de viande hachée aux herbes et épices piquantes.",
	},
	{
		name: "Ragoût de légumes épicés",
		category: "Plats épicés",
		description: "Légumes mijotés avec des épices et piments.",
	},
	{
		name: "Saumon au piment",
		category: "Plats épicés",
		description: "Saumon rôti assaisonné avec une marinade relevée.",
	},
	{
		name: "Poulet frit épicé",
		category: "Plats épicés",
		description:
			"Morceaux de poulet enrobés d'épices et frits jusqu'à croustillant.",
	},
	{
		name: "Omelette épicée",
		category: "Plats épicés",
		description: "Omelette garnie de légumes et de piments forts.",
	},
	{
		name: "Tofu sauté au piment",
		category: "Plats épicés",
		description: "Tofu croustillant cuisiné avec une sauce pimentée.",
	},
	{
		name: "Soupe Tom Yum",
		category: "Plats épicés",
		description: "Soupe thaïlandaise épicée et acidulée avec des crevettes.",
	},
	{
		name: "Côtes de porc épicées",
		category: "Plats épicés",
		description: "Travers de porc marinés dans une sauce relevée et grillés.",
	},
	{
		name: "Pizza épicée au chorizo",
		category: "Plats épicés",
		description: "Pizza garnie de chorizo, piments et fromage fondant.",
	},
	{
		name: "Steak au poivre épicé",
		category: "Plats épicés",
		description:
			"Pièce de viande assaisonnée avec un mélange de poivres forts.",
	},

	// Vinaigrettes
	{
		name: "Vinaigrette classique",
		category: "Vinaigrettes",
		description:
			"Mélange de vinaigre, huile d'olive et moutarde, idéal pour les salades.",
	},
	{
		name: "Vinaigrette au balsamique",
		category: "Vinaigrettes",
		description: "Sauce douce et acidulée à base de vinaigre balsamique.",
	},
	{
		name: "Vinaigrette au citron",
		category: "Vinaigrettes",
		description: "Parfumée et légère, parfaite pour accompagner les crudités.",
	},
	{
		name: "Vinaigrette à l'ail et fines herbes",
		category: "Vinaigrettes",
		description: "Sauce aromatisée idéale pour les salades composées.",
	},
	{
		name: "Vinaigrette au miel",
		category: "Vinaigrettes",
		description:
			"Sauce sucrée-salée qui sublime les salades et légumes grillés.",
	},
	{
		name: "Vinaigrette à la moutarde à l'ancienne",
		category: "Vinaigrettes",
		description: "Sauce légèrement granuleuse pour une saveur intense.",
	},
	{
		name: "Vinaigrette au yaourt",
		category: "Vinaigrettes",
		description:
			"Alternative crémeuse et légère pour accompagner les salades fraîches.",
	},
	{
		name: "Vinaigrette César",
		category: "Vinaigrettes",
		description:
			"Sauce riche et onctueuse, incontournable pour la salade César.",
	},
	{
		name: "Vinaigrette asiatique",
		category: "Vinaigrettes",
		description:
			"Mélange de soja, sésame et gingembre pour une touche exotique.",
	},
	{
		name: "Vinaigrette au vinaigre de cidre",
		category: "Vinaigrettes",
		description: "Légèrement fruitée, idéale pour les salades légères.",
	},
	{
		name: "Vinaigrette à l'échalote",
		category: "Vinaigrettes",
		description:
			"Sauce raffinée et légèrement piquante pour les salades gourmandes.",
	},
	{
		name: "Vinaigrette sans huile",
		category: "Vinaigrettes",
		description: "Option allégée, parfaite pour une cuisine diététique.",
	},
	{
		name: "Vinaigrette à la framboise",
		category: "Vinaigrettes",
		description:
			"Douce et fruitée, idéale pour accompagner des salades estivales.",
	},
	{
		name: "Vinaigrette au tahini",
		category: "Vinaigrettes",
		description:
			"Crémeuse et légèrement épicée, parfaite pour les salades orientales.",
	},
	{
		name: "Vinaigrette aux herbes fraîches",
		category: "Vinaigrettes",
		description: "Parfumée et légère, avec basilic, ciboulette et persil.",
	},
	{
		name: "Vinaigrette au vinaigre de vin rouge",
		category: "Vinaigrettes",
		description: "Sauce corsée, idéale pour les salades composées.",
	},
	{
		name: "Vinaigrette aux noix",
		category: "Vinaigrettes",
		description:
			"Riche et savoureuse, parfaite pour accompagner les salades d'hiver.",
	},
	{
		name: "Vinaigrette au curry",
		category: "Vinaigrettes",
		description: "Sauce relevée et exotique pour des plats originaux.",
	},
	{
		name: "Vinaigrette aux agrumes",
		category: "Vinaigrettes",
		description:
			"Fraîche et fruitée, idéale pour accompagner les fruits de mer.",
	},
	{
		name: "Vinaigrette au pesto",
		category: "Vinaigrettes",
		description:
			"Sauce parfumée au basilic et parmesan pour une touche italienne.",
	},
	{
		name: "Vinaigrette à l'avocat",
		category: "Vinaigrettes",
		description:
			"Crémeuse et onctueuse, idéale pour accompagner les salades vertes.",
	},
	{
		name: "Vinaigrette au sésame",
		category: "Vinaigrettes",
		description:
			"Sauce légèrement grillée, parfaite pour des salades asiatiques.",
	},
	{
		name: "Vinaigrette à l'orange",
		category: "Vinaigrettes",
		description:
			"Sauce douce et acidulée, idéale pour des salades sucrées-salées.",
	},
	{
		name: "Vinaigrette au paprika",
		category: "Vinaigrettes",
		description: "Relevée et épicée, idéale pour des salades de caractère.",
	},
	{
		name: "Vinaigrette à la truffe",
		category: "Vinaigrettes",
		description:
			"Sauce raffinée avec une touche de truffe pour des plats élégants.",
	},
	{
		name: "Vinaigrette épicée",
		category: "Vinaigrettes",
		description: "Sauce relevée parfaite pour les salades exotiques.",
	},
	{
		name: "Vinaigrette aux piments doux",
		category: "Vinaigrettes",
		description: "Douce et légèrement relevée, idéale pour les crudités.",
	},
	{
		name: "Vinaigrette grecque",
		category: "Vinaigrettes",
		description:
			"Mélange d'huile d'olive, citron et origan, parfait pour une salade grecque.",
	},
	{
		name: "Vinaigrette à l’huile de noisette",
		category: "Vinaigrettes",
		description: "Subtile et parfumée, idéale pour des plats d'automne.",
	},

	// Sels et poivres
	{
		name: "Sel de Guérande",
		category: "Sels et poivres",
		description: "Sel marin artisanal récolté à la main.",
	},
	{
		name: "Fleur de sel",
		category: "Sels et poivres",
		description: "Sel délicat et croquant pour sublimer vos plats.",
	},
	{
		name: "Sel rose de l'Himalaya",
		category: "Sels et poivres",
		description: "Sel pur et riche en minéraux, au goût subtil.",
	},
	{
		name: "Sel noir de lave",
		category: "Sels et poivres",
		description: "Sel volcanique aux notes fumées, parfait pour les grillades.",
	},
	{
		name: "Sel aromatisé aux herbes",
		category: "Sels et poivres",
		description: "Sel parfumé avec un mélange d’herbes méditerranéennes.",
	},
	{
		name: "Sel aux épices",
		category: "Sels et poivres",
		description: "Sel mélangé à des épices pour relever vos recettes.",
	},
	{
		name: "Sel à la truffe",
		category: "Sels et poivres",
		description:
			"Sel raffiné avec des morceaux de truffe pour une touche luxueuse.",
	},
	{
		name: "Poivre noir de Kampot",
		category: "Sels et poivres",
		description: "Poivre rare au goût intense et fruité.",
	},
	{
		name: "Poivre blanc de Penja",
		category: "Sels et poivres",
		description: "Poivre délicat et subtil, idéal pour les sauces légères.",
	},
	{
		name: "Poivre vert en grains",
		category: "Sels et poivres",
		description: "Poivre frais et parfumé pour accompagner les viandes.",
	},
	{
		name: "Poivre rose",
		category: "Sels et poivres",
		description: "Baies roses au goût doux et légèrement sucré.",
	},
	{
		name: "Mélange 5 baies",
		category: "Sels et poivres",
		description: "Mélange de poivres et baies pour une explosion de saveurs.",
	},
	{
		name: "Sel fumé",
		category: "Sels et poivres",
		description: "Sel au goût fumé intense, parfait pour les plats de viande.",
	},
	{
		name: "Poivre long",
		category: "Sels et poivres",
		description: "Poivre épicé et sucré, utilisé dans la cuisine asiatique.",
	},
	{
		name: "Poivre de Sichuan",
		category: "Sels et poivres",
		description: "Épice chinoise au goût citronné et légèrement piquant.",
	},
	{
		name: "Sel noir de l’Himalaya",
		category: "Sels et poivres",
		description: "Sel riche en soufre, idéal pour les plats végétaliens.",
	},
	{
		name: "Poivre moulu",
		category: "Sels et poivres",
		description: "Poivre noir fraîchement moulu pour assaisonner vos plats.",
	},
	{
		name: "Sel iodé",
		category: "Sels et poivres",
		description: "Sel enrichi en iode, idéal pour la cuisine quotidienne.",
	},
	{
		name: "Poivre noir entier",
		category: "Sels et poivres",
		description: "Grains de poivre noir pour un maximum de fraîcheur.",
	},
	{
		name: "Sel aux algues",
		category: "Sels et poivres",
		description: "Sel mélangé à des algues pour une touche marine.",
	},
	{
		name: "Poivre de Madagascar",
		category: "Sels et poivres",
		description: "Poivre aux arômes floraux et complexes.",
	},
	{
		name: "Poivre cubèbe",
		category: "Sels et poivres",
		description: "Poivre rare avec des notes mentholées et épicées.",
	},
	{
		name: "Sel bleu de Perse",
		category: "Sels et poivres",
		description: "Sel exotique aux cristaux bleutés, au goût délicat.",
	},
	{
		name: "Poivre rouge de Kampot",
		category: "Sels et poivres",
		description: "Poivre doux et fruité, parfait pour les desserts.",
	},
	{
		name: "Sel au piment d'Espelette",
		category: "Sels et poivres",
		description: "Sel épicé au piment basque pour relever vos plats.",
	},
	{
		name: "Poivre noir bio",
		category: "Sels et poivres",
		description: "Poivre cultivé sans pesticides, au goût authentique.",
	},
	{
		name: "Sel liquide",
		category: "Sels et poivres",
		description:
			"Solution saline naturelle pour assaisonner vos plats facilement.",
	},
	{
		name: "Poivre gris moulu",
		category: "Sels et poivres",
		description: "Poivre moulu classique, idéal pour tous les plats.",
	},
	{
		name: "Fleur de sel au citron",
		category: "Sels et poivres",
		description: "Sel aromatisé au citron pour les poissons et salades.",
	},

	// Tisanes et infusions
	{
		name: "Infusion de camomille",
		category: "Tisanes et infusions",
		description: "Boisson apaisante idéale pour se détendre.",
	},
	{
		name: "Tisane verveine",
		category: "Tisanes et infusions",
		description: "Infusion parfumée aux propriétés digestives et relaxantes.",
	},
	{
		name: "Infusion menthe poivrée",
		category: "Tisanes et infusions",
		description:
			"Boisson rafraîchissante et apaisante pour les maux d'estomac.",
	},
	{
		name: "Tisane de tilleul",
		category: "Tisanes et infusions",
		description: "Infusion douce pour favoriser le sommeil.",
	},
	{
		name: "Infusion de fleurs d'hibiscus",
		category: "Tisanes et infusions",
		description: "Boisson acidulée riche en antioxydants.",
	},
	{
		name: "Infusion au gingembre",
		category: "Tisanes et infusions",
		description:
			"Boisson épicée et réchauffante, idéale pour stimuler l'immunité.",
	},
	{
		name: "Tisane citronnelle",
		category: "Tisanes et infusions",
		description: "Infusion aux arômes d'agrumes, idéale pour se relaxer.",
	},
	{
		name: "Infusion aux fruits rouges",
		category: "Tisanes et infusions",
		description: "Boisson fruitée et légèrement acidulée.",
	},
	{
		name: "Tisane au rooibos",
		category: "Tisanes et infusions",
		description: "Infusion douce et sans théine, originaire d'Afrique du Sud.",
	},
	{
		name: "Infusion à la lavande",
		category: "Tisanes et infusions",
		description: "Boisson relaxante au parfum floral.",
	},
	{
		name: "Tisane thym-citron",
		category: "Tisanes et infusions",
		description: "Infusion aux propriétés apaisantes pour la gorge.",
	},
	{
		name: "Infusion au fenouil",
		category: "Tisanes et infusions",
		description: "Boisson aidant à la digestion et au confort intestinal.",
	},
	{
		name: "Tisane mélisse",
		category: "Tisanes et infusions",
		description: "Infusion aux propriétés apaisantes et anti-stress.",
	},
	{
		name: "Infusion détox",
		category: "Tisanes et infusions",
		description: "Mélange de plantes pour purifier l'organisme.",
	},
	{
		name: "Tisane réglisse-menthe",
		category: "Tisanes et infusions",
		description:
			"Infusion sucrée et rafraîchissante pour une touche de douceur.",
	},
	{
		name: "Infusion au curcuma",
		category: "Tisanes et infusions",
		description:
			"Boisson aux propriétés anti-inflammatoires et revitalisantes.",
	},
	{
		name: "Infusion au jasmin",
		category: "Tisanes et infusions",
		description: "Boisson délicatement parfumée pour un moment de détente.",
	},
	{
		name: "Tisane aux écorces d'orange",
		category: "Tisanes et infusions",
		description: "Infusion fruitée et légèrement acidulée.",
	},
	{
		name: "Infusion à la pomme et cannelle",
		category: "Tisanes et infusions",
		description: "Boisson réconfortante aux saveurs chaudes et sucrées.",
	},
	{
		name: "Tisane gingembre-citron",
		category: "Tisanes et infusions",
		description: "Infusion énergisante et revitalisante.",
	},
	{
		name: "Infusion à l’anis",
		category: "Tisanes et infusions",
		description:
			"Boisson douce et légèrement sucrée, idéale pour la digestion.",
	},
	{
		name: "Tisane au pissenlit",
		category: "Tisanes et infusions",
		description: "Infusion purifiante aux propriétés détoxifiantes.",
	},
	{
		name: "Infusion aux baies de sureau",
		category: "Tisanes et infusions",
		description: "Boisson riche en antioxydants et vitamines.",
	},
	{
		name: "Tisane aux fleurs de bleuet",
		category: "Tisanes et infusions",
		description: "Boisson délicate aux propriétés apaisantes.",
	},
	{
		name: "Infusion aux pétales de rose",
		category: "Tisanes et infusions",
		description: "Infusion florale et relaxante pour une pause bien-être.",
	},
	{
		name: "Tisane au houblon",
		category: "Tisanes et infusions",
		description: "Boisson relaxante pour favoriser un sommeil réparateur.",
	},
	{
		name: "Infusion aux épices chai",
		category: "Tisanes et infusions",
		description: "Mélange épicé et réchauffant pour une pause gourmande.",
	},
	{
		name: "Tisane à l’eucalyptus",
		category: "Tisanes et infusions",
		description: "Infusion apaisante pour les voies respiratoires.",
	},
	{
		name: "Infusion citron-miel",
		category: "Tisanes et infusions",
		description: "Boisson réconfortante pour les journées fraîches.",
	},

	// Noix et graines
	{
		name: "Amandes nature",
		category: "Noix et graines",
		description:
			"Noix riches en protéines et en fibres, parfaites pour les collations.",
	},
	{
		name: "Noix de cajou",
		category: "Noix et graines",
		description:
			"Noix légèrement sucrées, idéales pour les snacks ou la cuisine.",
	},
	{
		name: "Noisettes décortiquées",
		category: "Noix et graines",
		description: "Parfaites pour les pâtisseries ou à grignoter.",
	},
	{
		name: "Noix de Grenoble",
		category: "Noix et graines",
		description: "Noix à coque, riches en oméga-3, idéales pour les salades.",
	},
	{
		name: "Graines de tournesol",
		category: "Noix et graines",
		description:
			"Petites graines croquantes, parfaites pour les pains ou salades.",
	},
	{
		name: "Graines de courge",
		category: "Noix et graines",
		description:
			"Graines riches en nutriments, idéales en collation ou en garniture.",
	},
	{
		name: "Pignons de pin",
		category: "Noix et graines",
		description: "Graines tendres, parfaites pour les pestos et salades.",
	},
	{
		name: "Graines de chia",
		category: "Noix et graines",
		description:
			"Super-aliment riche en fibres, parfait pour les puddings et smoothies.",
	},
	{
		name: "Graines de lin",
		category: "Noix et graines",
		description:
			"Riches en oméga-3, idéales pour les pains ou comme garniture.",
	},
	{
		name: "Noix du Brésil",
		category: "Noix et graines",
		description: "Noix riches en sélénium, parfaites en collation.",
	},
	{
		name: "Amandes effilées",
		category: "Noix et graines",
		description: "Idéales pour décorer les desserts et enrichir les plats.",
	},
	{
		name: "Noix de pécan",
		category: "Noix et graines",
		description:
			"Noix douces et sucrées, parfaites pour les tartes et salades.",
	},
	{
		name: "Graines de sésame",
		category: "Noix et graines",
		description: "Ingrédient croquant pour les plats asiatiques et les pains.",
	},
	{
		name: "Noix macadamia",
		category: "Noix et graines",
		description:
			"Noix crémeuses et croquantes, parfaites en collation ou pâtisserie.",
	},
	{
		name: "Amandes grillées et salées",
		category: "Noix et graines",
		description: "Collation gourmande au goût intense.",
	},
	{
		name: "Graines de pavot",
		category: "Noix et graines",
		description: "Petites graines pour garnir pains et pâtisseries.",
	},
	{
		name: "Noix mélangées",
		category: "Noix et graines",
		description: "Mélange nutritif pour grignoter ou enrichir les recettes.",
	},
	{
		name: "Graines de chanvre",
		category: "Noix et graines",
		description:
			"Riches en protéines, parfaites pour les smoothies et salades.",
	},
	{
		name: "Noix de coco râpée",
		category: "Noix et graines",
		description: "Parfait pour la pâtisserie ou comme garniture exotique.",
	},
	{
		name: "Arachides non salées",
		category: "Noix et graines",
		description: "Idéal pour les plats asiatiques ou comme collation.",
	},
	{
		name: "Noix de cajou grillées",
		category: "Noix et graines",
		description: "Collation croquante et savoureuse.",
	},
	{
		name: "Noisettes grillées",
		category: "Noix et graines",
		description: "Parfaites pour les desserts ou à déguster telles quelles.",
	},
	{
		name: "Graines de nigelle",
		category: "Noix et graines",
		description: "Utilisées pour parfumer pains et plats orientaux.",
	},
	{
		name: "Noix concassées",
		category: "Noix et graines",
		description: "Pratiques pour les salades, gâteaux et plats cuisinés.",
	},
	{
		name: "Graines de quinoa soufflé",
		category: "Noix et graines",
		description: "Ajout croquant pour les mueslis et desserts.",
	},
	{
		name: "Beurre d’amande",
		category: "Noix et graines",
		description: "Pâte onctueuse à tartiner ou pour les smoothies.",
	},
	{
		name: "Tahini (pâte de sésame)",
		category: "Noix et graines",
		description: "Ingrédient essentiel pour le houmous et les sauces.",
	},
	{
		name: "Noix de coco chips",
		category: "Noix et graines",
		description: "Tranches croquantes pour les desserts et collations.",
	},
	{
		name: "Graines de millet",
		category: "Noix et graines",
		description: "Céréale sans gluten, idéale pour les salades et porridges.",
	},

	// Barres énergétiques
	{
		name: "Barre aux fruits rouges",
		category: "Barres énergétiques",
		description: "Snack riche en fibres et vitamines à base de fruits rouges.",
	},
	{
		name: "Barre protéinée chocolat",
		category: "Barres énergétiques",
		description: "Source d’énergie avec un goût intense de chocolat.",
	},
	{
		name: "Barre aux noix et graines",
		category: "Barres énergétiques",
		description:
			"Mélange croquant de noix et graines, parfait pour les sportifs.",
	},
	{
		name: "Barre aux céréales et miel",
		category: "Barres énergétiques",
		description: "Snack sucré et nourrissant, idéal pour une pause rapide.",
	},
	{
		name: "Barre énergisante au café",
		category: "Barres énergétiques",
		description: "Booster d’énergie avec un goût corsé de café.",
	},
	{
		name: "Barre aux dattes et amandes",
		category: "Barres énergétiques",
		description: "Snack naturel sucré, riche en fibres et énergie.",
	},
	{
		name: "Barre protéinée vanille",
		category: "Barres énergétiques",
		description: "Barre riche en protéines avec un goût doux et crémeux.",
	},
	{
		name: "Barre chocolat et noisettes",
		category: "Barres énergétiques",
		description: "Snack gourmand pour combiner énergie et plaisir.",
	},
	{
		name: "Barre vegan aux super-aliments",
		category: "Barres énergétiques",
		description:
			"Mélange riche en nutriments, idéal pour un mode de vie actif.",
	},
	{
		name: "Barre aux fruits tropicaux",
		category: "Barres énergétiques",
		description: "Saveur exotique avec mangue, ananas et noix de coco.",
	},
	{
		name: "Barre au beurre de cacahuète",
		category: "Barres énergétiques",
		description:
			"Snack riche et énergétique, parfait pour les efforts intenses.",
	},
	{
		name: "Barre aux baies de goji",
		category: "Barres énergétiques",
		description: "Snack santé avec des baies riches en antioxydants.",
	},
	{
		name: "Barre au quinoa soufflé",
		category: "Barres énergétiques",
		description: "Légère et croquante, parfaite pour les petites faims.",
	},
	{
		name: "Barre sans gluten cacao",
		category: "Barres énergétiques",
		description:
			"Alternative saine avec du cacao pour les intolérants au gluten.",
	},
	{
		name: "Barre aux figues et noisettes",
		category: "Barres énergétiques",
		description: "Snack gourmand et nourrissant pour un regain d'énergie.",
	},
	{
		name: "Barre au matcha et noix de cajou",
		category: "Barres énergétiques",
		description: "Mélange raffiné pour un boost naturel.",
	},
	{
		name: "Barre au caramel salé",
		category: "Barres énergétiques",
		description: "Parfait équilibre entre énergie et gourmandise.",
	},
	{
		name: "Barre énergétique myrtille",
		category: "Barres énergétiques",
		description:
			"Riche en vitamines, parfaite pour accompagner une activité sportive.",
	},
	{
		name: "Barre au chocolat noir et menthe",
		category: "Barres énergétiques",
		description: "Combinaison fraîche et énergisante pour les gourmands.",
	},
	{
		name: "Barre protéinée citron",
		category: "Barres énergétiques",
		description: "Goût acidulé pour une source de protéines rapide.",
	},
	{
		name: "Barre aux flocons d’avoine",
		category: "Barres énergétiques",
		description:
			"Snack naturel, riche en fibres pour un apport énergétique durable.",
	},
	{
		name: "Barre au chanvre et graines de courge",
		category: "Barres énergétiques",
		description: "Idéal pour une collation riche en protéines végétales.",
	},
	{
		name: "Barre énergétique banane-cacao",
		category: "Barres énergétiques",
		description: "Saveur douce et chocolatée pour un snack équilibré.",
	},
	{
		name: "Barre granola aux fruits secs",
		category: "Barres énergétiques",
		description: "Parfaite pour un regain d'énergie naturel et gourmand.",
	},
	{
		name: "Barre chocolat blanc et fruits rouges",
		category: "Barres énergétiques",
		description: "Snack sucré et énergisant pour les pauses plaisir.",
	},
	{
		name: "Barre énergétique orange-amande",
		category: "Barres énergétiques",
		description: "Mélange fruité et croquant, riche en nutriments.",
	},
	{
		name: "Barre protéinée double chocolat",
		category: "Barres énergétiques",
		description: "Pour les amateurs de chocolat, avec une dose de protéines.",
	},
	{
		name: "Barre aux dattes et noix du Brésil",
		category: "Barres énergétiques",
		description: "Énergie naturelle avec une touche exotique.",
	},
	{
		name: "Barre au yaourt et fruits",
		category: "Barres énergétiques",
		description: "Légère et fruitée, idéale pour une pause fraîche.",
	},

	// Produits sans lactose
	{
		name: "Lait d’amande",
		category: "Produits sans lactose",
		description:
			"Boisson végétale légère et sans lactose, idéale pour les intolérants.",
	},
	{
		name: "Yaourt au soja nature",
		category: "Produits sans lactose",
		description: "Alternative au yaourt classique, fabriquée à base de soja.",
	},
	{
		name: "Fromage râpé sans lactose",
		category: "Produits sans lactose",
		description:
			"Parfait pour les gratins et plats chauds, sans trace de lactose.",
	},
	{
		name: "Beurre sans lactose",
		category: "Produits sans lactose",
		description: "Alternative au beurre classique, adapté aux intolérants.",
	},
	{
		name: "Crème liquide végétale",
		category: "Produits sans lactose",
		description: "Idéale pour cuisiner des plats crémeux sans lactose.",
	},
	{
		name: "Lait de riz",
		category: "Produits sans lactose",
		description: "Boisson végétale douce et digeste.",
	},
	{
		name: "Glace au lait de coco",
		category: "Produits sans lactose",
		description: "Dessert glacé crémeux et sans lactose.",
	},
	{
		name: "Fromage à tartiner sans lactose",
		category: "Produits sans lactose",
		description: "Crème onctueuse pour accompagner vos pains et crackers.",
	},
	{
		name: "Crème dessert au lait d'avoine",
		category: "Produits sans lactose",
		description: "Dessert végétal doux et sucré, parfait pour les gourmands.",
	},
	{
		name: "Mozzarella sans lactose",
		category: "Produits sans lactose",
		description: "Fromage doux et fondant, adapté aux régimes sans lactose.",
	},
	{
		name: "Lait d’avoine",
		category: "Produits sans lactose",
		description:
			"Boisson végétale, idéale pour les céréales et boissons chaudes.",
	},
	{
		name: "Cheddar sans lactose",
		category: "Produits sans lactose",
		description: "Fromage savoureux pour burgers et sandwichs, sans lactose.",
	},
	{
		name: "Dessert au lait de coco",
		category: "Produits sans lactose",
		description:
			"Alternative sucrée et crémeuse aux desserts lactés classiques.",
	},
	{
		name: "Yaourt au lait de coco",
		category: "Produits sans lactose",
		description:
			"Yaourt léger et sans lactose, parfait pour les petits-déjeuners.",
	},
	{
		name: "Fromage bleu sans lactose",
		category: "Produits sans lactose",
		description: "Version sans lactose du fromage bleu classique.",
	},
	{
		name: "Lait de soja enrichi en calcium",
		category: "Produits sans lactose",
		description:
			"Boisson végétale nutritive, idéale pour remplacer le lait classique.",
	},
	{
		name: "Crème fouettée végétale",
		category: "Produits sans lactose",
		description: "Parfaite pour décorer vos desserts sans lactose.",
	},
	{
		name: "Chocolat au lait végétal",
		category: "Produits sans lactose",
		description: "Douceur chocolatée à base de lait végétal.",
	},
	{
		name: "Glace au lait d'amande",
		category: "Produits sans lactose",
		description:
			"Dessert glacé rafraîchissant et adapté aux intolérants au lactose.",
	},
	{
		name: "Ricotta sans lactose",
		category: "Produits sans lactose",
		description:
			"Fromage frais doux et léger, parfait pour les plats italiens.",
	},
	{
		name: "Crème épaisse sans lactose",
		category: "Produits sans lactose",
		description: "Alternative crémeuse idéale pour les sauces et desserts.",
	},
	{
		name: "Fromage frais de soja",
		category: "Produits sans lactose",
		description: "Parfait pour les toasts et dips, entièrement sans lactose.",
	},
	{
		name: "Boisson au lait de noisette",
		category: "Produits sans lactose",
		description: "Alternative végétale au goût délicat et légèrement sucré.",
	},
	{
		name: "Parmesan sans lactose",
		category: "Produits sans lactose",
		description: "Fromage râpé savoureux, parfait pour les pâtes et risottos.",
	},
	{
		name: "Beurre de coco",
		category: "Produits sans lactose",
		description:
			"Alternative riche et savoureuse pour tartines et pâtisseries.",
	},
	{
		name: "Glace au lait de riz",
		category: "Produits sans lactose",
		description: "Dessert glacé léger et sans allergènes.",
	},
	{
		name: "Lait d’épeautre",
		category: "Produits sans lactose",
		description: "Boisson végétale délicate et nutritive, sans lactose.",
	},
	{
		name: "Crème anglaise végétale",
		category: "Produits sans lactose",
		description: "Parfaite pour accompagner vos gâteaux et desserts fruités.",
	},
	{
		name: "Fromage vegan",
		category: "Produits sans lactose",
		description: "Alternative entièrement végétale aux fromages classiques.",
	},

	// Produits fermentés
	{
		name: "Kéfir de lait",
		category: "Produits fermentés",
		description:
			"Boisson fermentée riche en probiotiques, idéale pour la digestion.",
	},
	{
		name: "Kombucha",
		category: "Produits fermentés",
		description:
			"Boisson pétillante à base de thé fermenté, riche en antioxydants.",
	},
	{
		name: "Choucroute",
		category: "Produits fermentés",
		description:
			"Chou blanc fermenté, parfait pour accompagner les plats d'hiver.",
	},
	{
		name: "Kimchi",
		category: "Produits fermentés",
		description: "Chou fermenté coréen relevé d'épices et de piment.",
	},
	{
		name: "Pickles de légumes",
		category: "Produits fermentés",
		description: "Légumes croquants marinés et fermentés au vinaigre.",
	},
	{
		name: "Miso blanc",
		category: "Produits fermentés",
		description:
			"Pâte de soja fermentée douce, utilisée pour les soupes et sauces.",
	},
	{
		name: "Miso rouge",
		category: "Produits fermentés",
		description:
			"Pâte de soja fermentée au goût plus corsé, idéale pour les plats mijotés.",
	},
	{
		name: "Tofu fermenté",
		category: "Produits fermentés",
		description: "Tofu mariné et fermenté, riche en saveurs.",
	},
	{
		name: "Yaourt nature bio",
		category: "Produits fermentés",
		description: "Yaourt simple et fermenté, riche en probiotiques naturels.",
	},
	{
		name: "Fromage bleu",
		category: "Produits fermentés",
		description:
			"Fromage à pâte persillée, affiné et fermenté pour un goût unique.",
	},
	{
		name: "Tempeh",
		category: "Produits fermentés",
		description: "Bloc de soja fermenté, riche en protéines et en saveurs.",
	},
	{
		name: "Légumes lactofermentés",
		category: "Produits fermentés",
		description:
			"Mélange de légumes fermentés naturellement, riches en nutriments.",
	},
	{
		name: "Sourdough (pain au levain)",
		category: "Produits fermentés",
		description:
			"Pain préparé avec une levure naturelle pour une texture unique.",
	},
	{
		name: "Cornichons fermentés",
		category: "Produits fermentés",
		description:
			"Cornichons croquants et acidulés grâce à une fermentation naturelle.",
	},
	{
		name: "Crème fraîche fermentée",
		category: "Produits fermentés",
		description: "Crème onctueuse légèrement acidulée, idéale pour la cuisine.",
	},
	{
		name: "Rejuvelac",
		category: "Produits fermentés",
		description: "Boisson fermentée à base de grains germés, riche en enzymes.",
	},
	{
		name: "Beurre fermenté",
		category: "Produits fermentés",
		description: "Beurre traditionnel à la saveur légèrement acidulée.",
	},
	{
		name: "Lait ribot",
		category: "Produits fermentés",
		description: "Boisson lactée fermentée, idéale pour la cuisine bretonne.",
	},
	{
		name: "Sauerkraut",
		category: "Produits fermentés",
		description:
			"Choucroute traditionnelle allemande, riche en saveurs et probiotiques.",
	},
	{
		name: "Pois chiches fermentés",
		category: "Produits fermentés",
		description:
			"Alternative savoureuse et riche en protéines pour les salades.",
	},
	{
		name: "Vinaigre de cidre non filtré",
		category: "Produits fermentés",
		description:
			"Vinaigre brut, non pasteurisé, pour des usages culinaires et bien-être.",
	},
	{
		name: "Fromage de chèvre affiné",
		category: "Produits fermentés",
		description: "Fromage fermenté à pâte molle pour une saveur prononcée.",
	},
	{
		name: "Natto",
		category: "Produits fermentés",
		description:
			"Soja fermenté japonais, riche en nutriments et à la texture unique.",
	},
	{
		name: "Yogourt grec nature",
		category: "Produits fermentés",
		description:
			"Yaourt épais et crémeux, idéal pour les recettes ou en collation.",
	},
	{
		name: "Beurre clarifié fermenté",
		category: "Produits fermentés",
		description:
			"Beurre clarifié ayant subi une fermentation, idéal pour la cuisson.",
	},
	{
		name: "Levain naturel",
		category: "Produits fermentés",
		description: "Culture de levure naturelle utilisée pour le pain.",
	},
	{
		name: "Légumes en saumure",
		category: "Produits fermentés",
		description: "Légumes conservés dans une solution salée fermentée.",
	},
	{
		name: "Sauce de poisson fermentée",
		category: "Produits fermentés",
		description: "Condiment asiatique riche en umami pour relever les plats.",
	},
	{
		name: "Yaourt au lait de coco fermenté",
		category: "Produits fermentés",
		description:
			"Alternative vegan aux yaourts classiques, riche en probiotiques.",
	},

	// Produits fumés
	{
		name: "Saumon fumé",
		category: "Produits fumés",
		description:
			"Poisson délicatement fumé, idéal pour les apéritifs ou entrées.",
	},
	{
		name: "Filets de maquereaux fumés",
		category: "Produits fumés",
		description:
			"Poisson riche en saveurs, parfait pour les salades ou tartines.",
	},
	{
		name: "Poulet fumé",
		category: "Produits fumés",
		description:
			"Viande tendre et fumée, prête à être dégustée froide ou chaude.",
	},
	{
		name: "Jambon fumé",
		category: "Produits fumés",
		description: "Charcuterie savoureuse au goût intense de fumée.",
	},
	{
		name: "Fromage fumé",
		category: "Produits fumés",
		description: "Fromage à pâte ferme avec une saveur fumée unique.",
	},
	{
		name: "Lard fumé",
		category: "Produits fumés",
		description: "Ingrédient savoureux pour parfumer les plats.",
	},
	{
		name: "Saucisses fumées",
		category: "Produits fumés",
		description:
			"Saucisses cuites et fumées, idéales pour les plats réconfortants.",
	},
	{
		name: "Tofu fumé",
		category: "Produits fumés",
		description:
			"Alternative végétarienne riche en saveurs pour les plats salés.",
	},
	{
		name: "Truite fumée",
		category: "Produits fumés",
		description: "Poisson fumé délicat, parfait pour les canapés ou salades.",
	},
	{
		name: "Magret de canard fumé",
		category: "Produits fumés",
		description:
			"Viande tendre et fumée, idéale pour les plats gastronomiques.",
	},
	{
		name: "Bacon fumé",
		category: "Produits fumés",
		description:
			"Tranches fines et croustillantes, parfaites pour les petits-déjeuners.",
	},
	{
		name: "Ailes de poulet fumées",
		category: "Produits fumés",
		description: "Viande juteuse et parfumée pour les repas ou apéritifs.",
	},
	{
		name: "Échine de porc fumée",
		category: "Produits fumés",
		description: "Viande riche en goût, parfaite pour les plats mijotés.",
	},
	{
		name: "Saumon fumé bio",
		category: "Produits fumés",
		description: "Version biologique et raffinée du saumon fumé classique.",
	},
	{
		name: "Hareng fumé",
		category: "Produits fumés",
		description: "Poisson traditionnel, idéal pour les plats scandinaves.",
	},
	{
		name: "Saucisson fumé",
		category: "Produits fumés",
		description: "Charcuterie riche en saveurs pour les apéritifs.",
	},
	{
		name: "Poitrine de porc fumée",
		category: "Produits fumés",
		description: "Ingrédient parfait pour les plats rustiques et savoureux.",
	},
	{
		name: "Cheddar fumé",
		category: "Produits fumés",
		description: "Fromage fondant au goût fumé unique.",
	},
	{
		name: "Truite bio fumée",
		category: "Produits fumés",
		description: "Poisson fumé avec une saveur authentique et naturelle.",
	},
	{
		name: "Saucisses de Francfort fumées",
		category: "Produits fumés",
		description: "Saucisses fines et délicates, prêtes à être réchauffées.",
	},
	{
		name: "Œufs durs fumés",
		category: "Produits fumés",
		description:
			"Œufs avec une saveur fumée unique, parfaits pour les salades.",
	},
	{
		name: "Anguille fumée",
		category: "Produits fumés",
		description: "Poisson riche en goût, idéal pour les plats gourmands.",
	},
	{
		name: "Mozzarella fumée",
		category: "Produits fumés",
		description: "Fromage doux avec une touche fumée pour vos plats italiens.",
	},
	{
		name: "Épaule de porc fumée",
		category: "Produits fumés",
		description:
			"Viande savoureuse idéale pour les barbecues et plats mijotés.",
	},
	{
		name: "Saumon sauvage fumé",
		category: "Produits fumés",
		description: "Produit haut de gamme au goût authentique.",
	},
	{
		name: "Jambonneau fumé",
		category: "Produits fumés",
		description: "Viande tendre et fumée, idéale pour les plats rustiques.",
	},
	{
		name: "Filets de poulet fumés",
		category: "Produits fumés",
		description: "Viande légère et savoureuse, parfaite pour les sandwichs.",
	},
	{
		name: "Chorizo fumé",
		category: "Produits fumés",
		description: "Saucisse espagnole épicée et fumée, idéale pour les tapas.",
	},
	{
		name: "Tartinade de poisson fumé",
		category: "Produits fumés",
		description: "Préparation onctueuse pour vos apéritifs.",
	},

	// Caviars et tartinables
	{
		name: "Caviar d’aubergine",
		category: "Caviars et tartinables",
		description:
			"Préparation méditerranéenne onctueuse pour accompagner vos toasts.",
	},
	{
		name: "Tapenade d’olives noires",
		category: "Caviars et tartinables",
		description: "Mélange d’olives noires et d’huile d’olive pour tartiner.",
	},
	{
		name: "Tapenade d’olives vertes",
		category: "Caviars et tartinables",
		description: "Alternative plus douce à base d’olives vertes.",
	},
	{
		name: "Rillettes de saumon",
		category: "Caviars et tartinables",
		description: "Préparation crémeuse pour les apéritifs gourmands.",
	},
	{
		name: "Caviar de tomates séchées",
		category: "Caviars et tartinables",
		description: "Mélange riche et savoureux pour rehausser vos plats.",
	},
	{
		name: "Houmous nature",
		category: "Caviars et tartinables",
		description: "Purée de pois chiches parfumée au sésame et au citron.",
	},
	{
		name: "Houmous au piment",
		category: "Caviars et tartinables",
		description: "Version épicée pour un apéritif relevé.",
	},
	{
		name: "Tartinade de poivrons rouges",
		category: "Caviars et tartinables",
		description: "Crème douce et parfumée à base de poivrons grillés.",
	},
	{
		name: "Tzatziki",
		category: "Caviars et tartinables",
		description: "Mélange frais à base de concombre, yaourt et ail.",
	},
	{
		name: "Caviar de courgettes",
		category: "Caviars et tartinables",
		description: "Tartinable léger et savoureux pour vos entrées.",
	},
	{
		name: "Guacamole",
		category: "Caviars et tartinables",
		description: "Préparation mexicaine à base d’avocat, citron et épices.",
	},
	{
		name: "Tartare d’algues",
		category: "Caviars et tartinables",
		description: "Tartinable iodé pour accompagner vos toasts.",
	},
	{
		name: "Anchoïade",
		category: "Caviars et tartinables",
		description: "Crème salée à base d'anchois, parfaite avec des crudités.",
	},
	{
		name: "Caviar d’artichauts",
		category: "Caviars et tartinables",
		description: "Préparation douce et crémeuse, parfaite pour les apéritifs.",
	},
	{
		name: "Tartinade de pois cassés",
		category: "Caviars et tartinables",
		description: "Alternative végétale riche en goût et en protéines.",
	},
	{
		name: "Rillettes de maquereaux",
		category: "Caviars et tartinables",
		description: "Préparation onctueuse pour les amateurs de poisson.",
	},
	{
		name: "Caviar d’asperges",
		category: "Caviars et tartinables",
		description: "Tartinable raffiné pour des toasts élégants.",
	},
	{
		name: "Tartinade aux noix",
		category: "Caviars et tartinables",
		description: "Mélange crémeux à base de noix et fromage frais.",
	},
	{
		name: "Pesto de roquette",
		category: "Caviars et tartinables",
		description: "Sauce verte intense et légèrement épicée.",
	},
	{
		name: "Crème de champignons",
		category: "Caviars et tartinables",
		description: "Préparation riche et parfumée pour accompagner vos plats.",
	},
	{
		name: "Tartinade de betterave",
		category: "Caviars et tartinables",
		description: "Mélange coloré et sucré pour les toasts et crudités.",
	},
	{
		name: "Caviar de lentilles",
		category: "Caviars et tartinables",
		description: "Alternative végétale, riche en saveurs et en protéines.",
	},
	{
		name: "Rillettes végétales aux herbes",
		category: "Caviars et tartinables",
		description: "Préparation fraîche et crémeuse pour les apéritifs.",
	},
	{
		name: "Tapenade aux câpres",
		category: "Caviars et tartinables",
		description:
			"Tartinable corsé et savoureux pour accompagner des pains grillés.",
	},
	{
		name: "Crème de fromage ail et fines herbes",
		category: "Caviars et tartinables",
		description: "Tartinable crémeux et parfumé pour les apéritifs.",
	},
	{
		name: "Tartinade au citron confit",
		category: "Caviars et tartinables",
		description:
			"Préparation acidulée et gourmande pour accompagner des plats méditerranéens.",
	},
	{
		name: "Pesto rouge",
		category: "Caviars et tartinables",
		description: "Tartinade à base de tomates séchées et parmesan.",
	},
	{
		name: "Caviar de brocolis",
		category: "Caviars et tartinables",
		description: "Préparation onctueuse et nutritive pour les apéritifs.",
	},
	{
		name: "Rillettes de canard",
		category: "Caviars et tartinables",
		description: "Préparation savoureuse et riche pour tartiner sur du pain.",
	},

	// Chutneys et condiments
	{
		name: "Chutney de mangue",
		category: "Chutneys et condiments",
		description:
			"Préparation sucrée et épicée, parfaite pour accompagner les currys.",
	},
	{
		name: "Chutney de tomates",
		category: "Chutneys et condiments",
		description:
			"Mélange sucré et acidulé pour relever les viandes et fromages.",
	},
	{
		name: "Chutney d’oignons rouges",
		category: "Chutneys et condiments",
		description:
			"Condiment doux et parfumé, idéal pour les burgers ou sandwiches.",
	},
	{
		name: "Chutney de pommes et raisins",
		category: "Chutneys et condiments",
		description:
			"Préparation fruitée et épicée, parfaite pour le porc ou la volaille.",
	},
	{
		name: "Chutney de figues",
		category: "Chutneys et condiments",
		description:
			"Saveur sucrée et légèrement épicée, idéale avec les fromages.",
	},
	{
		name: "Chutney au gingembre",
		category: "Chutneys et condiments",
		description: "Condiment épicé pour accompagner les plats asiatiques.",
	},
	{
		name: "Chutney de coriandre",
		category: "Chutneys et condiments",
		description: "Sauce verte fraîche et épicée, idéale pour les grillades.",
	},
	{
		name: "Chutney de tamarin",
		category: "Chutneys et condiments",
		description:
			"Condiment sucré et acidulé, souvent utilisé dans la cuisine indienne.",
	},
	{
		name: "Chutney d’ananas",
		category: "Chutneys et condiments",
		description:
			"Préparation fruitée et piquante pour accompagner les viandes.",
	},
	{
		name: "Chutney aux dattes",
		category: "Chutneys et condiments",
		description: "Saveur riche et sucrée, parfaite pour les plats orientaux.",
	},
	{
		name: "Chutney aux poivrons rouges",
		category: "Chutneys et condiments",
		description:
			"Préparation douce et légèrement sucrée, idéale avec les grillades.",
	},
	{
		name: "Chutney de citron confit",
		category: "Chutneys et condiments",
		description: "Condiment acidulé pour accompagner les plats méditerranéens.",
	},
	{
		name: "Chutney de piments doux",
		category: "Chutneys et condiments",
		description: "Préparation légèrement épicée, parfaite pour les apéritifs.",
	},
	{
		name: "Chutney au curry",
		category: "Chutneys et condiments",
		description: "Sauce épicée pour relever les plats de riz ou de légumes.",
	},
	{
		name: "Chutney de myrtilles",
		category: "Chutneys et condiments",
		description: "Condiment sucré et acidulé, parfait pour le gibier.",
	},
	{
		name: "Chutney de noix de coco",
		category: "Chutneys et condiments",
		description:
			"Préparation douce et crémeuse, typique de la cuisine indienne.",
	},
	{
		name: "Chutney de betterave",
		category: "Chutneys et condiments",
		description: "Saveur douce et légèrement terreuse, idéale pour les toasts.",
	},
	{
		name: "Chutney de pêche",
		category: "Chutneys et condiments",
		description:
			"Préparation fruitée et douce, parfaite pour accompagner les volailles.",
	},
	{
		name: "Chutney de courgettes",
		category: "Chutneys et condiments",
		description: "Condiment léger et savoureux pour les viandes grillées.",
	},
	{
		name: "Chutney à l’ail rôti",
		category: "Chutneys et condiments",
		description:
			"Sauce parfumée pour accompagner les plats de viande ou légumes.",
	},
	{
		name: "Chutney d’abricots",
		category: "Chutneys et condiments",
		description:
			"Préparation sucrée et légèrement épicée, idéale avec les fromages.",
	},
	{
		name: "Chutney de poires",
		category: "Chutneys et condiments",
		description: "Saveur douce et fruitée, parfaite pour les viandes blanches.",
	},
	{
		name: "Chutney aux épices",
		category: "Chutneys et condiments",
		description: "Mélange riche et parfumé pour sublimer vos plats.",
	},
	{
		name: "Chutney à la grenade",
		category: "Chutneys et condiments",
		description: "Condiment fruité et acidulé, parfait pour les grillades.",
	},
	{
		name: "Chutney de rhubarbe",
		category: "Chutneys et condiments",
		description:
			"Préparation originale et acidulée, idéale pour les plats sucrés-salés.",
	},
	{
		name: "Chutney de melon",
		category: "Chutneys et condiments",
		description:
			"Saveur douce et sucrée, idéale pour accompagner les charcuteries.",
	},
	{
		name: "Chutney de banane",
		category: "Chutneys et condiments",
		description:
			"Préparation douce et légèrement épicée, typique des cuisines exotiques.",
	},
	{
		name: "Chutney aux mangues vertes",
		category: "Chutneys et condiments",
		description:
			"Condiment frais et acidulé pour accompagner les plats indiens.",
	},
	{
		name: "Chutney de pamplemousse",
		category: "Chutneys et condiments",
		description:
			"Préparation amère et légèrement sucrée pour des plats audacieux.",
	},

	// Ingrédients asiatiques
	{
		name: "Sauce soja",
		category: "Ingrédients asiatiques",
		description: "Condiment salé indispensable pour la cuisine asiatique.",
	},
	{
		name: "Nouilles de riz",
		category: "Ingrédients asiatiques",
		description: "Pâtes légères idéales pour les sautés ou soupes.",
	},
	{
		name: "Algues nori",
		category: "Ingrédients asiatiques",
		description: "Feuilles d’algues séchées pour les sushis et onigiris.",
	},
	{
		name: "Lait de coco",
		category: "Ingrédients asiatiques",
		description: "Ingrédient crémeux pour currys et desserts.",
	},
	{
		name: "Pâte de curry rouge",
		category: "Ingrédients asiatiques",
		description: "Base épicée pour préparer des currys thaïs.",
	},
	{
		name: "Riz à sushi",
		category: "Ingrédients asiatiques",
		description:
			"Riz rond et collant, parfait pour les préparations japonaises.",
	},
	{
		name: "Sauce teriyaki",
		category: "Ingrédients asiatiques",
		description: "Marinade sucrée-salée pour les viandes et légumes.",
	},
	{
		name: "Pâte miso",
		category: "Ingrédients asiatiques",
		description: "Ferment de soja utilisé dans les soupes et sauces.",
	},
	{
		name: "Vinaigre de riz",
		category: "Ingrédients asiatiques",
		description: "Acide doux pour assaisonner les sushis ou salades.",
	},
	{
		name: "Tofu soyeux",
		category: "Ingrédients asiatiques",
		description:
			"Alternative végétale pour les soupes, desserts ou plats légers.",
	},
	{
		name: "Nouilles soba",
		category: "Ingrédients asiatiques",
		description: "Pâtes de sarrasin japonaises au goût de noisette.",
	},
	{
		name: "Wasabi",
		category: "Ingrédients asiatiques",
		description: "Pâte verte piquante servie avec les sushis.",
	},
	{
		name: "Gingembre mariné",
		category: "Ingrédients asiatiques",
		description: "Accompagnement classique pour les sushis et sashimis.",
	},
	{
		name: "Huile de sésame",
		category: "Ingrédients asiatiques",
		description: "Huile parfumée pour les sautés ou assaisonnements.",
	},
	{
		name: "Sauce hoisin",
		category: "Ingrédients asiatiques",
		description: "Condiment sucré-salé utilisé dans les plats chinois.",
	},
	{
		name: "Champignons shiitake séchés",
		category: "Ingrédients asiatiques",
		description: "Ingrédient riche en umami pour les soupes et sautés.",
	},
	{
		name: "Bambou en tranches",
		category: "Ingrédients asiatiques",
		description: "Légume croquant pour les plats asiatiques traditionnels.",
	},
	{
		name: "Pâte de curry vert",
		category: "Ingrédients asiatiques",
		description: "Base parfumée et légèrement épicée pour les plats thaïs.",
	},
	{
		name: "Haricots mungo germés",
		category: "Ingrédients asiatiques",
		description: "Ingrédient frais et croquant pour les sautés et salades.",
	},
	{
		name: "Mirin",
		category: "Ingrédients asiatiques",
		description: "Vin de riz doux pour parfumer les plats japonais.",
	},
	{
		name: "Sauce ponzu",
		category: "Ingrédients asiatiques",
		description:
			"Condiment à base de sauce soja et d’agrumes pour les marinades.",
	},
	{
		name: "Nouilles udon",
		category: "Ingrédients asiatiques",
		description:
			"Pâtes épaisses japonaises, parfaites pour les soupes et sautés.",
	},
	{
		name: "Pâte de piment sambal oelek",
		category: "Ingrédients asiatiques",
		description:
			"Pâte épicée utilisée dans les plats indonésiens et malaisiens.",
	},
	{
		name: "Tamaris sans gluten",
		category: "Ingrédients asiatiques",
		description: "Alternative à la sauce soja pour les régimes sans gluten.",
	},
	{
		name: "Feuilles de bananier",
		category: "Ingrédients asiatiques",
		description: "Utilisées pour emballer et cuire les plats traditionnels.",
	},
	{
		name: "Pâte de crevettes",
		category: "Ingrédients asiatiques",
		description: "Ingrédient parfumé pour les currys et sauces.",
	},
	{
		name: "Nouilles de konjac",
		category: "Ingrédients asiatiques",
		description: "Pâtes faibles en calories, parfaites pour les plats légers.",
	},
	{
		name: "Farine de riz gluant",
		category: "Ingrédients asiatiques",
		description: "Ingrédient clé pour les desserts asiatiques traditionnels.",
	},
	{
		name: "Fruits lyophilisés au durian",
		category: "Ingrédients asiatiques",
		description: "Snack exotique au goût intense et unique.",
	},

	// Produits de fête
	{
		name: "Foie gras de canard",
		category: "Produits de fête",
		description:
			"Spécialité festive et gourmande, idéale pour les repas de fête.",
	},
	{
		name: "Champagne brut",
		category: "Produits de fête",
		description:
			"Vin pétillant incontournable pour célébrer les grandes occasions.",
	},
	{
		name: "Huîtres fraîches",
		category: "Produits de fête",
		description: "Coquillages délicats et savoureux pour les repas festifs.",
	},
	{
		name: "Saumon fumé",
		category: "Produits de fête",
		description: "Produit raffiné pour accompagner blinis et crème fraîche.",
	},
	{
		name: "Caviar d’esturgeon",
		category: "Produits de fête",
		description: "Délice de luxe pour les apéritifs élégants.",
	},
	{
		name: "Langoustines",
		category: "Produits de fête",
		description: "Crustacés délicats pour des repas raffinés.",
	},
	{
		name: "Chapon rôti",
		category: "Produits de fête",
		description: "Viande tendre et savoureuse pour les grands repas.",
	},
	{
		name: "Buche de Noël",
		category: "Produits de fête",
		description: "Dessert traditionnel des fêtes de fin d'année.",
	},
	{
		name: "Terrine de gibier",
		category: "Produits de fête",
		description: "Entrée rustique et savoureuse, parfaite pour les fêtes.",
	},
	{
		name: "Dinde farcie",
		category: "Produits de fête",
		description: "Plat incontournable des repas festifs.",
	},
	{
		name: "Macarons assortis",
		category: "Produits de fête",
		description: "Petits desserts raffinés pour accompagner le café.",
	},
	{
		name: "Homard frais",
		category: "Produits de fête",
		description: "Crustacé prestigieux pour un repas d'exception.",
	},
	{
		name: "Coteaux du Layon",
		category: "Produits de fête",
		description: "Vin liquoreux parfait pour accompagner le foie gras.",
	},
	{
		name: "Truffes noires",
		category: "Produits de fête",
		description: "Champignons rares pour sublimer les plats gastronomiques.",
	},
	{
		name: "Petit four sucrés",
		category: "Produits de fête",
		description: "Assortiment de douceurs parfaites pour les buffets.",
	},
	{
		name: "Terrine de canard au porto",
		category: "Produits de fête",
		description: "Délice raffiné à savourer sur du pain grillé.",
	},
	{
		name: "Chocolats fins assortis",
		category: "Produits de fête",
		description: "Sélection gourmande idéale pour offrir ou partager.",
	},
	{
		name: "Blanquette de veau festive",
		category: "Produits de fête",
		description: "Plat mijoté à servir pour une ambiance chaleureuse.",
	},
	{
		name: "Plateau de fruits de mer",
		category: "Produits de fête",
		description:
			"Assortiment de coquillages et crustacés pour un festin marin.",
	},
	{
		name: "Jambon ibérique",
		category: "Produits de fête",
		description: "Charcuterie d'exception pour vos entrées.",
	},
	{
		name: "Filet de bœuf Wellington",
		category: "Produits de fête",
		description:
			"Viande enveloppée dans une pâte feuilletée, un classique festif.",
	},
	{
		name: "Pain d’épices",
		category: "Produits de fête",
		description:
			"Douceur sucrée aux saveurs de miel et épices, parfait pour les fêtes.",
	},
	{
		name: "Velouté de homard",
		category: "Produits de fête",
		description: "Soupe raffinée pour débuter vos repas de fête.",
	},
	{
		name: "Rillettes de truite",
		category: "Produits de fête",
		description: "Préparation gourmande pour vos apéritifs.",
	},
	{
		name: "Galette des rois",
		category: "Produits de fête",
		description: "Pâtisserie traditionnelle pour célébrer l'Épiphanie.",
	},
	{
		name: "Saumon gravlax",
		category: "Produits de fête",
		description:
			"Saumon mariné aux saveurs nordiques, parfait pour les buffets.",
	},
	{
		name: "Mignardises",
		category: "Produits de fête",
		description:
			"Petits desserts élégants pour accompagner les cafés gourmands.",
	},
	{
		name: "Roti de cerf",
		category: "Produits de fête",
		description: "Viande tendre et noble pour un repas de fête exceptionnel.",
	},
	{
		name: "Marrons glacés",
		category: "Produits de fête",
		description: "Confiserie sucrée et délicate, idéale pour les desserts.",
	},

	// Produits artisanaux
	{
		name: "Pain au levain artisanal",
		category: "Produits artisanaux",
		description:
			"Pain rustique fabriqué à la main avec une croûte croustillante.",
	},
	{
		name: "Confiture artisanale de fraises",
		category: "Produits artisanaux",
		description:
			"Préparation sucrée et riche en fruits, fabriquée traditionnellement.",
	},
	{
		name: "Miel de fleurs sauvages",
		category: "Produits artisanaux",
		description: "Produit naturel récolté dans des ruches artisanales.",
	},
	{
		name: "Fromage fermier au lait cru",
		category: "Produits artisanaux",
		description: "Fromage à pâte molle fabriqué de manière traditionnelle.",
	},
	{
		name: "Chocolats faits à la main",
		category: "Produits artisanaux",
		description: "Assortiment gourmand de chocolats fabriqués artisanalement.",
	},
	{
		name: "Terrine de campagne maison",
		category: "Produits artisanaux",
		description: "Préparation rustique parfaite pour les repas conviviaux.",
	},
	{
		name: "Vin biologique artisanal",
		category: "Produits artisanaux",
		description:
			"Vin élaboré dans des vignobles respectueux de l'environnement.",
	},
	{
		name: "Huile d’olive pressée à froid",
		category: "Produits artisanaux",
		description:
			"Produit de qualité supérieure fabriqué de manière artisanale.",
	},
	{
		name: "Pâte de fruits artisanale",
		category: "Produits artisanaux",
		description: "Confiseries sucrées réalisées à partir de fruits locaux.",
	},
	{
		name: "Cidre fermier",
		category: "Produits artisanaux",
		description: "Boisson pétillante produite dans des fermes traditionnelles.",
	},
	{
		name: "Saucisson sec artisanal",
		category: "Produits artisanaux",
		description: "Charcuterie faite maison avec des ingrédients locaux.",
	},
	{
		name: "Tartinade de légumes maison",
		category: "Produits artisanaux",
		description: "Préparation onctueuse fabriquée avec des légumes de saison.",
	},
	{
		name: "Beurre de baratte",
		category: "Produits artisanaux",
		description: "Produit laitier artisanal à la texture crémeuse.",
	},
	{
		name: "Pâtes fraîches artisanales",
		category: "Produits artisanaux",
		description: "Pâtes fabriquées à la main pour une saveur authentique.",
	},
	{
		name: "Gelée de coings artisanale",
		category: "Produits artisanaux",
		description: "Préparation sucrée réalisée avec des fruits locaux.",
	},
	{
		name: "Charcuterie fumée maison",
		category: "Produits artisanaux",
		description: "Produits fumés préparés selon des recettes traditionnelles.",
	},
	{
		name: "Tapenade maison",
		category: "Produits artisanaux",
		description: "Mélange savoureux d'olives et d'huile d'olive.",
	},
	{
		name: "Bières artisanales",
		category: "Produits artisanaux",
		description:
			"Boissons fermentées en petites quantités pour un goût unique.",
	},
	{
		name: "Gâteaux secs artisanaux",
		category: "Produits artisanaux",
		description:
			"Biscuits croquants faits à la main avec des ingrédients locaux.",
	},
	{
		name: "Rillettes de porc maison",
		category: "Produits artisanaux",
		description: "Préparation traditionnelle pour accompagner des tartines.",
	},
	{
		name: "Confiseries au miel",
		category: "Produits artisanaux",
		description: "Bonbons naturels fabriqués à base de miel pur.",
	},
	{
		name: "Céramiques culinaires artisanales",
		category: "Produits artisanaux",
		description: "Vaisselle unique faite à la main pour vos repas.",
	},
	{
		name: "Moutarde artisanale",
		category: "Produits artisanaux",
		description: "Condiment fabriqué avec des graines de moutarde locales.",
	},
	{
		name: "Poissons fumés maison",
		category: "Produits artisanaux",
		description:
			"Filets de poissons fumés avec soin selon des techniques artisanales.",
	},
	{
		name: "Herbes séchées locales",
		category: "Produits artisanaux",
		description: "Mélanges d’herbes aromatiques récoltées à la main.",
	},
	{
		name: "Marrons au naturel",
		category: "Produits artisanaux",
		description:
			"Marrons préparés de manière artisanale, parfaits pour les plats d'hiver.",
	},
	{
		name: "Caramels au beurre salé",
		category: "Produits artisanaux",
		description:
			"Confiseries onctueuses fabriquées selon une recette traditionnelle.",
	},
	{
		name: "Épices moulues artisanales",
		category: "Produits artisanaux",
		description: "Assortiment d’épices fraîchement moulues à la main.",
	},
	{
		name: "Macarons artisanaux",
		category: "Produits artisanaux",
		description: "Délices colorés faits à la main, parfaits pour offrir.",
	},
	{
		name: "Biscuits sablés maison",
		category: "Produits artisanaux",
		description: "Gâteaux fondants préparés avec des ingrédients de qualité.",
	},

	// Produits pour barbecue
	{
		name: "Saucisses grillées",
		category: "Produits pour barbecue",
		description: "Saucisses prêtes à être grillées pour vos barbecues.",
	},
	{
		name: "Marinade barbecue",
		category: "Produits pour barbecue",
		description: "Sauce riche et parfumée pour rehausser les viandes.",
	},
	{
		name: "Brochettes de poulet marinées",
		category: "Produits pour barbecue",
		description: "Morceaux de poulet tendres et épicés, prêts à griller.",
	},
	{
		name: "Côtes de porc marinées",
		category: "Produits pour barbecue",
		description: "Travers de porc juteux, enrobés d’une marinade savoureuse.",
	},
	{
		name: "Steak haché pour burgers",
		category: "Produits pour barbecue",
		description: "Viande fraîche pour préparer des hamburgers maison.",
	},
	{
		name: "Filets de saumon grillés",
		category: "Produits pour barbecue",
		description: "Saumon pré-assaisonné pour une cuisson parfaite au barbecue.",
	},
	{
		name: "Légumes grillés surgelés",
		category: "Produits pour barbecue",
		description: "Mélange de légumes prêts à être grillés.",
	},
	{
		name: "Bavette de bœuf marinée",
		category: "Produits pour barbecue",
		description: "Viande tendre et parfumée pour des grillades savoureuses.",
	},
	{
		name: "Chorizo à griller",
		category: "Produits pour barbecue",
		description:
			"Saucisse espagnole légèrement épicée, parfaite pour les grillades.",
	},
	{
		name: "Halloumi à griller",
		category: "Produits pour barbecue",
		description: "Fromage chypriote qui reste ferme à la cuisson.",
	},
	{
		name: "Ailes de poulet épicées",
		category: "Produits pour barbecue",
		description: "Prêtes à cuire pour une saveur légèrement relevée.",
	},
	{
		name: "Courgettes marinées",
		category: "Produits pour barbecue",
		description:
			"Tranches de courgettes prêtes à griller, marinées à l’huile d’olive.",
	},
	{
		name: "Épis de maïs à griller",
		category: "Produits pour barbecue",
		description: "Légumes doux et juteux pour une cuisson directe sur le gril.",
	},
	{
		name: "Sauce chimichurri",
		category: "Produits pour barbecue",
		description:
			"Sauce argentine aux herbes pour accompagner les viandes grillées.",
	},
	{
		name: "Tofu mariné",
		category: "Produits pour barbecue",
		description: "Alternative végétarienne assaisonnée pour les barbecues.",
	},
	{
		name: "Filets de poulet citronnés",
		category: "Produits pour barbecue",
		description: "Viande tendre assaisonnée au citron et aux herbes.",
	},
	{
		name: "Sardines à griller",
		category: "Produits pour barbecue",
		description: "Poisson entier parfait pour une cuisson au barbecue.",
	},
	{
		name: "Merguez épicées",
		category: "Produits pour barbecue",
		description:
			"Saucisses épicées traditionnelles pour des barbecues réussis.",
	},
	{
		name: "Pain à hamburger brioché",
		category: "Produits pour barbecue",
		description: "Pains moelleux pour créer des burgers gourmands.",
	},
	{
		name: "Ribs de porc précuits",
		category: "Produits pour barbecue",
		description: "Travers de porc à finir de griller avec une sauce barbecue.",
	},
	{
		name: "Tomates cerises sur brochettes",
		category: "Produits pour barbecue",
		description:
			"Légumes sucrés et juteux, parfaits pour des brochettes colorées.",
	},
	{
		name: "Poivrons marinés",
		category: "Produits pour barbecue",
		description:
			"Tranches de poivrons doux et épicés pour accompagner vos grillades.",
	},
	{
		name: "Crevettes marinées",
		category: "Produits pour barbecue",
		description: "Fruits de mer parfumés prêts à cuire.",
	},
	{
		name: "Fromage raclette à griller",
		category: "Produits pour barbecue",
		description: "Fromage qui fond parfaitement sur des plats grillés.",
	},
	{
		name: "Tartare d’herbes pour marinades",
		category: "Produits pour barbecue",
		description: "Mélange d’herbes fraîches pour assaisonner vos viandes.",
	},
	{
		name: "Poitrine de porc tranchée",
		category: "Produits pour barbecue",
		description: "Morceaux juteux parfaits pour les barbecues.",
	},
	{
		name: "Brochettes végétariennes",
		category: "Produits pour barbecue",
		description:
			"Légumes et tofu marinés pour les amateurs de grillades végétales.",
	},
	{
		name: "Sauce piquante barbecue",
		category: "Produits pour barbecue",
		description: "Condiment relevé pour ajouter du caractère à vos plats.",
	},
	{
		name: "Mélange d'épices pour grillades",
		category: "Produits pour barbecue",
		description: "Assaisonnement spécial barbecue pour relever vos viandes.",
	},

	// Repas pour enfants
	{
		name: "Purée de pommes de terre",
		category: "Repas pour enfants",
		description: "Plat onctueux et doux, apprécié des plus jeunes.",
	},
	{
		name: "Nuggets de poulet",
		category: "Repas pour enfants",
		description:
			"Morceaux de poulet panés, faciles à manger et adorés des enfants.",
	},
	{
		name: "Fish sticks",
		category: "Repas pour enfants",
		description: "Bâtonnets de poisson panés, parfaits pour un repas rapide.",
	},
	{
		name: "Mini-pizzas",
		category: "Repas pour enfants",
		description: "Petites pizzas garnies, adaptées aux petites mains.",
	},
	{
		name: "Pâtes alphabet",
		category: "Repas pour enfants",
		description:
			"Pâtes amusantes en forme de lettres pour apprendre en mangeant.",
	},
	{
		name: "Raviolis au fromage",
		category: "Repas pour enfants",
		description: "Pâtes farcies au fromage, prêtes en quelques minutes.",
	},
	{
		name: "Steak haché junior",
		category: "Repas pour enfants",
		description: "Portion de viande tendre, parfaite pour les petits appétits.",
	},
	{
		name: "Soupe aux vermicelles",
		category: "Repas pour enfants",
		description:
			"Soupe légère avec des petites pâtes, idéale pour les repas d'hiver.",
	},
	{
		name: "Compote de pommes",
		category: "Repas pour enfants",
		description: "Dessert sucré et naturel, sans morceaux.",
	},
	{
		name: "Mini-burgers",
		category: "Repas pour enfants",
		description: "Petits sandwichs garnis pour les goûters ou repas.",
	},
	{
		name: "Croquettes de légumes",
		category: "Repas pour enfants",
		description: "Alternative saine et croustillante pour les petits.",
	},
	{
		name: "Bâtonnets de carottes",
		category: "Repas pour enfants",
		description: "Snack coloré et croquant pour accompagner les repas.",
	},
	{
		name: "Yaourt aromatisé",
		category: "Repas pour enfants",
		description: "Dessert lacté doux et sucré, en format individuel.",
	},
	{
		name: "Crêpes fourrées au chocolat",
		category: "Repas pour enfants",
		description: "Snack gourmand et pratique pour le goûter.",
	},
	{
		name: "Galettes de pommes de terre",
		category: "Repas pour enfants",
		description:
			"Galettes croustillantes et fondantes pour accompagner les plats.",
	},
	{
		name: "Pâtes à la sauce tomate",
		category: "Repas pour enfants",
		description: "Plat rapide et savoureux pour satisfaire tous les goûts.",
	},
	{
		name: "Omelette nature",
		category: "Repas pour enfants",
		description: "Repas simple et nutritif, parfait pour les petits.",
	},
	{
		name: "Purée de légumes",
		category: "Repas pour enfants",
		description: "Mélange doux de légumes variés, facile à manger.",
	},
	{
		name: "Barres de céréales au chocolat",
		category: "Repas pour enfants",
		description: "Snack énergétique pour les récréations.",
	},
	{
		name: "Petit pain au lait",
		category: "Repas pour enfants",
		description: "Pain moelleux idéal pour les petits-déjeuners ou goûters.",
	},
	{
		name: "Riz au lait",
		category: "Repas pour enfants",
		description: "Dessert crémeux et sucré, apprécié des enfants.",
	},
	{
		name: "Mini-quiches",
		category: "Repas pour enfants",
		description: "Petites tartes salées adaptées aux petites portions.",
	},
	{
		name: "Bâtonnets de fromage",
		category: "Repas pour enfants",
		description: "Snack pratique et riche en calcium.",
	},
	{
		name: "Purée de carottes",
		category: "Repas pour enfants",
		description: "Plat doux et légèrement sucré pour les jeunes palais.",
	},
	{
		name: "Pain de mie sans croûte",
		category: "Repas pour enfants",
		description: "Parfait pour préparer des sandwiches faciles à manger.",
	},
	{
		name: "Gâteau au yaourt",
		category: "Repas pour enfants",
		description: "Dessert moelleux et sucré, idéal pour les goûters.",
	},
	{
		name: "Milk-shake à la fraise",
		category: "Repas pour enfants",
		description: "Boisson sucrée et fruitée pour accompagner les repas.",
	},
	{
		name: "Mini-crêpes nature",
		category: "Repas pour enfants",
		description: "Format pratique et moelleux pour les petits.",
	},
	{
		name: "Biscuits au beurre",
		category: "Repas pour enfants",
		description: "Petits gâteaux sablés, parfaits pour les pauses sucrées.",
	},

	// Produits diététiques
	{
		name: "Barres protéinées",
		category: "Produits diététiques",
		description:
			"Snack riche en protéines pour soutenir l’énergie et la récupération.",
	},
	{
		name: "Flocons d’avoine bio",
		category: "Produits diététiques",
		description:
			"Céréales complètes riches en fibres, parfaites pour les petits-déjeuners.",
	},
	{
		name: "Granola sans sucre ajouté",
		category: "Produits diététiques",
		description: "Mélange croustillant et équilibré pour des repas sains.",
	},
	{
		name: "Farine complète",
		category: "Produits diététiques",
		description: "Ingrédient riche en fibres pour des préparations nutritives.",
	},
	{
		name: "Biscuits allégés au chocolat",
		category: "Produits diététiques",
		description: "En-cas gourmand avec moins de sucre et de matières grasses.",
	},
	{
		name: "Lait d’amande non sucré",
		category: "Produits diététiques",
		description:
			"Boisson végétale faible en calories, idéale pour les régimes.",
	},
	{
		name: "Chips de légumes déshydratées",
		category: "Produits diététiques",
		description: "Alternative saine et croustillante aux chips classiques.",
	},
	{
		name: "Riz complet bio",
		category: "Produits diététiques",
		description: "Riz riche en nutriments, parfait pour des repas équilibrés.",
	},
	{
		name: "Pâtes de lentilles corail",
		category: "Produits diététiques",
		description: "Alternative sans gluten riche en protéines végétales.",
	},
	{
		name: "Sucre de coco",
		category: "Produits diététiques",
		description: "Édulcorant naturel avec un faible index glycémique.",
	},
	{
		name: "Pain complet sans levure",
		category: "Produits diététiques",
		description:
			"Pain nutritif et facile à digérer, parfait pour les régimes spécifiques.",
	},
	{
		name: "Crackers aux graines",
		category: "Produits diététiques",
		description: "Snack croquant et riche en fibres.",
	},
	{
		name: "Purée d’amandes bio",
		category: "Produits diététiques",
		description: "Alternative nutritive et onctueuse au beurre classique.",
	},
	{
		name: "Thé vert matcha",
		category: "Produits diététiques",
		description: "Boisson riche en antioxydants et énergisante.",
	},
	{
		name: "Protéines de pois en poudre",
		category: "Produits diététiques",
		description: "Complément alimentaire végétal riche en protéines.",
	},
	{
		name: "Spiruline en poudre",
		category: "Produits diététiques",
		description: "Super-aliment riche en nutriments essentiels.",
	},
	{
		name: "Smoothie détox prêt-à-boire",
		category: "Produits diététiques",
		description: "Boisson naturelle pour purifier l’organisme.",
	},
	{
		name: "Flocons de quinoa",
		category: "Produits diététiques",
		description:
			"Alternative aux céréales classiques, idéale pour le petit-déjeuner.",
	},
	{
		name: "Gélules d’oméga-3",
		category: "Produits diététiques",
		description: "Supplément nutritionnel pour la santé cardiovasculaire.",
	},
	{
		name: "Beurre de cacahuète sans sucre",
		category: "Produits diététiques",
		description: "Tartinade riche en protéines, idéale pour les sportifs.",
	},
	{
		name: "Graines de chia bio",
		category: "Produits diététiques",
		description: "Super-aliment pour enrichir les smoothies et desserts.",
	},
	{
		name: "Biscuits sans gluten",
		category: "Produits diététiques",
		description: "Snack adapté aux personnes intolérantes au gluten.",
	},
	{
		name: "Céréales au son d’avoine",
		category: "Produits diététiques",
		description: "Parfaites pour les régimes riches en fibres.",
	},
	{
		name: "Pain protéiné",
		category: "Produits diététiques",
		description: "Pain riche en protéines pour un petit-déjeuner équilibré.",
	},
	{
		name: "Gaufres protéinées",
		category: "Produits diététiques",
		description: "Snack faible en sucre et riche en énergie.",
	},
	{
		name: "Compote sans sucre ajouté",
		category: "Produits diététiques",
		description: "Dessert naturel et léger à base de fruits.",
	},
	{
		name: "Gelée royale bio",
		category: "Produits diététiques",
		description: "Complément naturel pour renforcer le système immunitaire.",
	},
	{
		name: "Huile de coco bio",
		category: "Produits diététiques",
		description: "Alternative saine pour la cuisson et la pâtisserie.",
	},
	{
		name: "Pâtes de konjac",
		category: "Produits diététiques",
		description:
			"Pâtes faibles en calories, idéales pour les régimes hypocaloriques.",
	},

	// Sauces et dips

	{
		name: "Guacamole",
		category: "Sauces et dips",
		description:
			"Dip crémeux à base d'avocat, parfait pour accompagner des nachos.",
	},
	{
		name: "Houmous classique",
		category: "Sauces et dips",
		description:
			"Purée de pois chiches au tahini et au citron, idéale pour les légumes.",
	},
	{
		name: "Salsa mexicaine",
		category: "Sauces et dips",
		description:
			"Sauce tomate épicée avec oignons et coriandre, parfaite pour les tortillas.",
	},
	{
		name: "Sauce tzatziki",
		category: "Sauces et dips",
		description:
			"Mélange frais de yaourt, concombre et ail pour les grillades.",
	},
	{
		name: "Mayonnaise maison",
		category: "Sauces et dips",
		description: "Sauce onctueuse pour accompagner frites et sandwiches.",
	},
	{
		name: "Ketchup bio",
		category: "Sauces et dips",
		description:
			"Sauce tomate douce et légèrement sucrée pour les enfants et adultes.",
	},
	{
		name: "Moutarde de Dijon",
		category: "Sauces et dips",
		description: "Condiment classique au goût intense pour relever vos plats.",
	},
	{
		name: "Sauce barbecue",
		category: "Sauces et dips",
		description: "Sauce sucrée et fumée pour les grillades.",
	},
	{
		name: "Pesto vert",
		category: "Sauces et dips",
		description:
			"Sauce italienne à base de basilic, ail et parmesan, idéale pour les pâtes.",
	},
	{
		name: "Pesto rosso",
		category: "Sauces et dips",
		description: "Sauce à base de tomates séchées et d'huile d'olive.",
	},
	{
		name: "Dip au fromage bleu",
		category: "Sauces et dips",
		description:
			"Sauce crémeuse pour accompagner des légumes ou ailes de poulet.",
	},
	{
		name: "Tapenade d’olives noires",
		category: "Sauces et dips",
		description:
			"Crème méditerranéenne à base d'olives, idéale pour les apéritifs.",
	},
	{
		name: "Aioli",
		category: "Sauces et dips",
		description:
			"Sauce provençale à base d'ail et d'huile, parfaite pour les fruits de mer.",
	},
	{
		name: "Sauce aigre-douce",
		category: "Sauces et dips",
		description:
			"Sauce asiatique sucrée et acidulée pour accompagner les nems.",
	},
	{
		name: "Sauce curry",
		category: "Sauces et dips",
		description: "Mélange parfumé idéal pour les plats de riz et poulet.",
	},
	{
		name: "Sauce yaourt à la menthe",
		category: "Sauces et dips",
		description: "Accompagnement frais pour grillades et plats épicés.",
	},
	{
		name: "Sauce sésame (goma)",
		category: "Sauces et dips",
		description: "Sauce japonaise riche et onctueuse à base de sésame.",
	},
	{
		name: "Ranch dressing",
		category: "Sauces et dips",
		description:
			"Sauce crémeuse et légèrement acidulée pour les salades et dips.",
	},
	{
		name: "Dip aux artichauts",
		category: "Sauces et dips",
		description: "Crème savoureuse pour accompagner pains et crackers.",
	},
	{
		name: "Sauce chili",
		category: "Sauces et dips",
		description: "Sauce pimentée pour relever vos plats et apéritifs.",
	},
	{
		name: "Sauce fromage fondu",
		category: "Sauces et dips",
		description:
			"Sauce onctueuse et gourmande pour les nachos ou pommes de terre.",
	},
	{
		name: "Sauce tomate maison",
		category: "Sauces et dips",
		description: "Base douce et parfumée pour les plats de pâtes.",
	},
	{
		name: "Sauce aux champignons",
		category: "Sauces et dips",
		description: "Sauce crémeuse pour accompagner les viandes et pâtes.",
	},
	{
		name: "Crème d'avocat épicée",
		category: "Sauces et dips",
		description: "Dip onctueux et relevé pour accompagner les tacos.",
	},
	{
		name: "Sauce tartare",
		category: "Sauces et dips",
		description: "Accompagnement classique pour les poissons frits.",
	},
	{
		name: "Sauce au miel et moutarde",
		category: "Sauces et dips",
		description: "Sauce sucrée-salée idéale pour les viandes grillées.",
	},
	{
		name: "Sauce satay",
		category: "Sauces et dips",
		description:
			"Sauce asiatique à base de cacahuètes, parfaite pour les brochettes.",
	},
	{
		name: "Dip épinards et fromage",
		category: "Sauces et dips",
		description: "Mélange gourmand et crémeux pour les apéritifs.",
	},
	{
		name: "Sauce chimichurri",
		category: "Sauces et dips",
		description: "Sauce argentine à base de persil et ail pour les grillades.",
	},
	{
		name: "Sauce piquante harissa",
		category: "Sauces et dips",
		description:
			"Condiment nord-africain épicé pour accompagner les plats relevés.",
	},

	// Assaisonnements exotiques
	{
		name: "Garam masala",
		category: "Assaisonnements exotiques",
		description:
			"Mélange d’épices indiennes pour parfumer les currys et plats mijotés.",
	},
	{
		name: "Ras el hanout",
		category: "Assaisonnements exotiques",
		description: "Mélange nord-africain d’épices pour tagines et couscous.",
	},
	{
		name: "Piment d’Espelette",
		category: "Assaisonnements exotiques",
		description:
			"Épice basque douce et parfumée, idéale pour relever les plats.",
	},
	{
		name: "Sumac",
		category: "Assaisonnements exotiques",
		description: "Épice moyen-orientale acidulée pour salades et grillades.",
	},
	{
		name: "Curcuma",
		category: "Assaisonnements exotiques",
		description:
			"Épice jaune dorée aux propriétés anti-inflammatoires, utilisée en cuisine indienne.",
	},
	{
		name: "Mélange 5 épices",
		category: "Assaisonnements exotiques",
		description:
			"Assaisonnement chinois doux et parfumé, parfait pour les marinades.",
	},
	{
		name: "Tandoori masala",
		category: "Assaisonnements exotiques",
		description:
			"Mélange d’épices pour préparer des viandes indiennes grillées.",
	},
	{
		name: "Harissa",
		category: "Assaisonnements exotiques",
		description: "Pâte de piment nord-africaine pour relever les plats.",
	},
	{
		name: "Cardamome moulue",
		category: "Assaisonnements exotiques",
		description:
			"Épice au goût unique utilisée dans les plats salés et desserts.",
	},
	{
		name: "Feuilles de curry séchées",
		category: "Assaisonnements exotiques",
		description: "Ingrédient indien pour parfumer les plats de riz et soupes.",
	},
	{
		name: "Cumin en graines",
		category: "Assaisonnements exotiques",
		description:
			"Épice terreuse et aromatique, parfaite pour les plats mexicains et indiens.",
	},
	{
		name: "Zaatar",
		category: "Assaisonnements exotiques",
		description: "Mélange moyen-oriental de thym, sésame et sumac.",
	},
	{
		name: "Clous de girofle",
		category: "Assaisonnements exotiques",
		description: "Épice intense utilisée dans les plats mijotés et desserts.",
	},
	{
		name: "Coriandre moulue",
		category: "Assaisonnements exotiques",
		description:
			"Épice douce et citronnée, parfaite pour les currys et marinades.",
	},
	{
		name: "Poivre de Sichuan",
		category: "Assaisonnements exotiques",
		description: "Épice chinoise au goût citronné et légèrement piquant.",
	},
	{
		name: "Piment de Cayenne",
		category: "Assaisonnements exotiques",
		description: "Épice chaude et piquante pour relever vos plats.",
	},
	{
		name: "Anis étoilé",
		category: "Assaisonnements exotiques",
		description:
			"Épice asiatique au goût doux, utilisée dans les bouillons et desserts.",
	},
	{
		name: "Mélange baharat",
		category: "Assaisonnements exotiques",
		description:
			"Assaisonnement moyen-oriental riche en saveurs pour les viandes et légumes.",
	},
	{
		name: "Graines de fenouil",
		category: "Assaisonnements exotiques",
		description: "Épice douce pour parfumer les pains et plats indiens.",
	},
	{
		name: "Pâte de curry rouge",
		category: "Assaisonnements exotiques",
		description: "Base épicée pour les currys thaïs.",
	},
	{
		name: "Nigelle",
		category: "Assaisonnements exotiques",
		description:
			"Petites graines noires utilisées dans les pains et plats orientaux.",
	},
	{
		name: "Safran",
		category: "Assaisonnements exotiques",
		description:
			"Épice rare et parfumée pour les plats comme la paella ou les risottos.",
	},
	{
		name: "Vanille en gousse",
		category: "Assaisonnements exotiques",
		description: "Épice douce et sucrée pour les desserts et pâtisseries.",
	},
	{
		name: "Mélange d'épices jerk",
		category: "Assaisonnements exotiques",
		description: "Épices jamaïcaines pour viandes grillées.",
	},
	{
		name: "Mélange cajun",
		category: "Assaisonnements exotiques",
		description: "Assaisonnement épicé pour les plats créoles et grillades.",
	},
	{
		name: "Fenugrec",
		category: "Assaisonnements exotiques",
		description: "Épice légèrement amère, utilisée dans les plats indiens.",
	},
	{
		name: "Poudre de chili",
		category: "Assaisonnements exotiques",
		description: "Mélange d’épices piquant pour les plats tex-mex.",
	},
	{
		name: "Poudre de wasabi",
		category: "Assaisonnements exotiques",
		description: "Épice japonaise piquante, idéale pour les sushis.",
	},
	{
		name: "Mélange d'épices pour rasam",
		category: "Assaisonnements exotiques",
		description: "Assaisonnement indien pour les soupes épicées.",
	},
];

export default groceryItem;
