
import { useState } from "react";
import { ShoppingCart, Heart, Star, Filter, Truck, Shield, Recycle } from "lucide-react";
import Layout from "../components/Layout";

const Merch = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "T-shirt Green Fest 2024",
      category: "clothing",
      price: 25,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop",
      description: "T-shirt 100% coton bio avec le logo officiel du festival",
      materials: "Coton bio certifié GOTS",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Vert", "Beige", "Blanc"],
      rating: 4.8,
      inStock: true,
      eco: true
    },
    {
      id: 2,
      name: "Tote Bag The Green Event",
      category: "accessories",
      price: 15,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Sac en toile robuste pour tous vos essentiels de festival",
      materials: "Toile de coton recyclé",
      colors: ["Vert", "Naturel"],
      rating: 4.9,
      inStock: true,
      eco: true
    },
    {
      id: 3,
      name: "Casquette Logo Brodé",
      category: "accessories", 
      price: 20,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      description: "Casquette avec logo brodé, parfaite pour les festivals",
      materials: "Coton bio et polyester recyclé",
      colors: ["Vert", "Beige", "Noir"],
      rating: 4.6,
      inStock: true,
      eco: true
    },
    {
      id: 4,
      name: "Sweat à Capuche Green",
      category: "clothing",
      price: 45,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      description: "Sweat confortable avec capuche, design minimaliste",
      materials: "Coton bio 80% - Polyester recyclé 20%",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Vert foncé", "Beige", "Gris"],
      rating: 4.7,
      inStock: true,
      eco: true
    },
    {
      id: 5,
      name: "Gourde Inox Écologique",
      category: "accessories",
      price: 18,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      description: "Gourde en acier inoxydable, isotherme 12h",
      materials: "Acier inoxydable 18/8",
      colors: ["Vert", "Argent"],
      rating: 4.9,
      inStock: true,
      eco: true
    },
    {
      id: 6,
      name: "Vinyle Line-up 2024",
      category: "music",
      price: 35,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop",
      description: "Compilation vinyle des meilleurs titres de notre line-up",
      materials: "Vinyle recyclé - Pochette carton FSC",
      rating: 4.8,
      inStock: false,
      eco: true
    },
    {
      id: 7,
      name: "Pochette Festival Kit",
      category: "accessories",
      price: 12,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=400&fit=crop",
      description: "Trousse de survie festival : lingettes, bouchons d'oreilles...",
      materials: "Matériaux recyclés et biodégradables",
      rating: 4.5,
      inStock: true,
      eco: true
    },
    {
      id: 8,
      name: "Poster Affiche Green Fest",
      category: "decoration",
      price: 8,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      description: "Affiche officielle du festival, impression haute qualité",
      materials: "Papier recyclé - Encres végétales",
      sizes: ["A3", "A2", "A1"],
      rating: 4.4,
      inStock: true,
      eco: true
    }
  ];

  const categories = [
    { id: "all", name: "Tous les produits", count: products.length },
    { id: "clothing", name: "Vêtements", count: products.filter(p => p.category === "clothing").length },
    { id: "accessories", name: "Accessoires", count: products.filter(p => p.category === "accessories").length },
    { id: "music", name: "Musique", count: products.filter(p => p.category === "music").length },
    { id: "decoration", name: "Décoration", count: products.filter(p => p.category === "decoration").length }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Ici on pourrait ajouter une notification toast
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              Merch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Portez nos valeurs avec style ! 👕🌿
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Mode Éco-Responsable</h3>
              <p className="text-lg text-gray-200">
                Tous nos produits sont conçus dans le respect de l'environnement : 
                matières biologiques, circuits courts et packaging recyclable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs écologiques */}
      <section className="py-16 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06b14a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Éco-Responsable</h3>
              <p className="text-gray-600">Matières biologiques et recyclées uniquement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06b14a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison Verte</h3>
              <p className="text-gray-600">Transport neutre en carbone et packaging minimal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06b14a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité Garantie</h3>
              <p className="text-gray-600">Produits durables avec garantie satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-lg font-semibold text-gray-900">Filtrer par catégorie :</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-[#06b14a]" />
              <span className="text-sm font-medium text-gray-600">Panier ({cart.length})</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#06b14a] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-[#06b14a] hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des produits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.eco && (
                      <span className="px-3 py-1 text-xs font-semibold bg-[#06b14a] text-white rounded-full">
                        ÉCO
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full">
                        ÉPUISÉ
                      </span>
                    )}
                  </div>

                  {/* Favoris */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Overlay avec bouton */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        product.inStock
                          ? "bg-white text-[#06b14a] hover:bg-[#f8efc8] transform hover:scale-105"
                          : "bg-gray-400 text-gray-200 cursor-not-allowed"
                      }`}
                    >
                      {product.inStock ? "Ajouter au panier" : "Épuisé"}
                    </button>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 truncate">{product.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-700">Matériaux : </span>
                    <span className="text-sm text-gray-500">{product.materials}</span>
                  </div>

                  {/* Options */}
                  {product.colors && (
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-700 block mb-1">Couleurs :</span>
                      <div className="flex space-x-2">
                        {product.colors.map((color, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.sizes && (
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-700 block mb-1">Tailles :</span>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#06b14a]">{product.price}€</span>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        product.inStock
                          ? "bg-[#06b14a] text-white hover:bg-[#048a3a] hover:scale-110"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restez informé des nouveautés !
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Inscrivez-vous à notre newsletter pour être les premiers au courant 
            des nouvelles collections et des offres exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Merch;
