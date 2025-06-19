
import { Calendar, MapPin, Users, Leaf, Star } from "lucide-react";
import Layout from "../components/Layout";

const GreenFest = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              The Green Fest
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200">
              Le festival éco-responsable qui révolutionne la musique 🌱
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Calendar className="h-8 w-8 text-[#f8efc8] mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Dates 2024</h3>
                <p className="text-gray-200">15-17 Juillet 2024</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <MapPin className="h-8 w-8 text-[#f8efc8] mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Lieu</h3>
                <p className="text-gray-200">Parc de Vincennes, Paris</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Users className="h-8 w-8 text-[#f8efc8] mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Capacité</h3>
                <p className="text-gray-200">15 000 festivaliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs écologiques */}
      <section className="py-20 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos engagements écologiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Green Fest n'est pas qu'un festival, c'est un laboratoire d'innovations 
              pour un divertissement durable et responsable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "100% Énergies Renouvelables",
                description: "Alimentation solaire et éolienne pour toutes nos installations"
              },
              {
                icon: "♻️",
                title: "Zéro Déchet",
                description: "Tri sélectif, compostage et recyclage sur site"
              },
              {
                icon: "🚲",
                title: "Mobilité Douce",
                description: "Navettes électriques et parkings vélos gratuits"
              },
              {
                icon: "🌿",
                title: "Restauration Bio",
                description: "Produits locaux et circuits courts uniquement"
              },
              {
                icon: "💧",
                title: "Gestion de l'Eau",
                description: "Récupération des eaux de pluie et fontaines gratuites"
              },
              {
                icon: "🎋",
                title: "Éco-construction",
                description: "Structures temporaires en matériaux biosourcés"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lineup Preview */}
      <section className="py-20 bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Line-up 2024
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Une programmation éclectique qui mélange têtes d'affiche internationales 
              et talents émergents de la scène française.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Disclosure", day: "Vendredi", time: "23h00", stage: "Main Stage" },
              { name: "Christine and the Queens", day: "Samedi", time: "22h30", stage: "Main Stage" },  
              { name: "Bon Iver", day: "Dimanche", time: "21h00", stage: "Main Stage" },
              { name: "Orelsan", day: "Samedi", time: "20h00", stage: "Main Stage" },
              { name: "FKJ", day: "Vendredi", time: "19h30", stage: "Green Stage" },
              { name: "Polo & Pan", day: "Samedi", time: "18h00", stage: "Green Stage" },
              { name: "Thylacine", day: "Dimanche", time: "17h30", stage: "Green Stage" },
              { name: "Clara Luciani", day: "Vendredi", time: "18h00", stage: "Main Stage" }
            ].map((artist, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-[#f8efc8] mr-2" />
                  <span className="text-sm text-green-200">{artist.stage}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <p className="text-green-100">{artist.day} - {artist.time}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/lineup"
              className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Voir le line-up complet
            </a>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              L'édition 2023 en images
            </h2>
            <p className="text-xl text-gray-600">
              Revivez les moments forts de notre dernière édition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <img
                  src={image}
                  alt={`Green Fest 2023 - ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenFest;
