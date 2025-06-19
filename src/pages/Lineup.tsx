
import { useState } from "react";
import { Play, Instagram, Twitter, Globe, Star, Calendar } from "lucide-react";
import Layout from "../components/Layout";

const Lineup = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const artists = [
    {
      name: "Disclosure",
      genre: "House / Electronic",
      category: "headliner",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      description: "Le duo britannique de house music qui fait danser le monde entier",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024"]
    },
    {
      name: "Christine and the Queens",
      genre: "Electro Pop",
      category: "headliner", 
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      description: "L'artiste français.e qui révolutionne la pop avec son univers unique",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024"]
    },
    {
      name: "Bon Iver",
      genre: "Indie Folk",
      category: "headliner",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop",
      description: "Le projet de Justin Vernon qui sublime la folk avec des arrangements électroniques",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024"]
    },
    {
      name: "Orelsan",
      genre: "Hip Hop / Rap",
      category: "headliner",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      description: "Le rappeur normand qui a conquis toute la France avec ses textes ciselés",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024"]
    },
    {
      name: "FKJ",
      genre: "Nu-Jazz / Electronic",
      category: "support",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "French Kiwi Juice, le multi-instrumentiste qui mélange jazz et électronique",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024", "Green Outside"]
    },
    {
      name: "Polo & Pan",
      genre: "Electronic / World",
      category: "support",  
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      description: "Le duo qui transporte l'électronique vers des horizons ensoleillés",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024", "Events Bar"]
    },
    {
      name: "Clara Luciani",
      genre: "Pop / Chanson",
      category: "support",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop",
      description: "La chanteuse française qui révolutionne la pop hexagonale",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024"]
    },
    {
      name: "Thylacine",
      genre: "Electronic / Ambient",
      category: "emerging",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=400&fit=crop",
      description: "L'électronique organique qui puise son inspiration dans la nature",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024", "Green Outside", "Events Bar"]
    },
    {
      name: "DJ Koze",
      genre: "House / Techno",
      category: "dj",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      description: "Le maître allemand de la house music contemplative",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Events Bar", "Green Outside"]
    },
    {
      name: "Amelie Lens",
      genre: "Techno",
      category: "dj",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      description: "La reine belge de la techno qui fait trembler les dancefloors",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Events Bar"]
    },
    {
      name: "Lola Marsh",
      genre: "Dream Pop",
      category: "emerging",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop",
      description: "Le duo israélien qui enchante avec sa dream pop cinématographique",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Outside"]
    },
    {
      name: "Petit Biscuit",
      genre: "Electronic / Chill",
      category: "emerging",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      description: "Le prodige français de l'électronique mélodique",
      socialLinks: { instagram: "#", twitter: "#", website: "#" },
      events: ["Green Fest 2024", "Events Bar"]
    }
  ];

  const categories = [
    { id: "all", name: "Tous les artistes", count: artists.length },
    { id: "headliner", name: "Têtes d'affiche", count: artists.filter(a => a.category === "headliner").length },
    { id: "support", name: "Artistes confirmés", count: artists.filter(a => a.category === "support").length },
    { id: "dj", name: "DJs", count: artists.filter(a => a.category === "dj").length },
    { id: "emerging", name: "Talents émergents", count: artists.filter(a => a.category === "emerging").length }
  ];

  const filteredArtists = selectedCategory === "all" 
    ? artists 
    : artists.filter(artist => artist.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              Line-up
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Découvrez les artistes qui font vibrer nos événements 🎵✨
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Programmation 2024</h3>
              <p className="text-lg text-gray-200">
                Une sélection éclectique qui mélange têtes d'affiche internationales, 
                artistes confirmés et talents émergents de toutes les scènes musicales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-[#f8efc8] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#06b14a] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-[#06b14a] hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des artistes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      artist.category === "headliner" ? "bg-gold text-black" :
                      artist.category === "support" ? "bg-[#06b14a] text-white" :
                      artist.category === "dj" ? "bg-purple-500 text-white" :
                      "bg-orange-500 text-white"
                    }`}>
                      {artist.category === "headliner" ? "★ HEADLINER" :
                       artist.category === "support" ? "CONFIRMÉ" :
                       artist.category === "dj" ? "DJ" : "ÉMERGENT"}
                    </span>
                  </div>

                  {/* Bouton play */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </button>
                  </div>

                  {/* Nom de l'artiste */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{artist.name}</h3>
                    <p className="text-sm text-gray-200">{artist.genre}</p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{artist.description}</p>
                  
                  {/* Événements */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-[#06b14a] mr-2" />
                      <span className="text-sm font-semibold text-gray-700">Événements :</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {artist.events.map((event, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#f8efc8] text-[#06b14a] text-xs rounded-full font-medium">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a href={artist.socialLinks.instagram} className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href={artist.socialLinks.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={artist.socialLinks.website} className="text-gray-400 hover:text-[#06b14a] transition-colors duration-300">
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous êtes artiste ?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Rejoignez notre line-up et participez à l'aventure Green Event ! 
            Nous cherchons toujours de nouveaux talents à programmer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Candidater
            </a>
            <a
              href="/green-fest"
              className="border-2 border-white text-white hover:bg-white hover:text-[#06b14a] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Voir le festival
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lineup;
