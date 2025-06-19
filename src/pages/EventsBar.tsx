
import { Music, Clock, MapPin, Users, Wine, Headphones } from "lucide-react";
import Layout from "../components/Layout";

const EventsBar = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              Événements Bar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Des soirées intimistes dans l'esprit Green Event 🍸🎵
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Concept unique</h3>
              <p className="text-lg text-gray-200">
                Nous transformons des bars partenaires en véritables écrins musicaux 
                avec notre équipe de DJs, notre scénographie et notre ambiance green.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre approche bar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous ne nous contentons pas de mixer, nous créons une expérience complète 
              qui respecte l'ADN de chaque établissement tout en y apportant notre touche green.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "DJs Résidents",
                description: "Une équipe de DJs talentueux qui s'adaptent à l'ambiance de votre établissement",
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: Wine,
                title: "Scénographie Éco",
                description: "Décoration éphémère avec des matériaux recyclés et éclairages LED",
                color: "from-[#06b14a] to-[#048a3a]"
              },
              {
                icon: Users,
                title: "Animation Live",
                description: "MC, performers et surprises pour créer une soirée mémorable",
                color: "from-orange-500 to-orange-700"
              },
              {
                icon: Music,
                title: "Playlists Sur-Mesure",
                description: "Curation musicale adaptée à votre clientèle et votre style",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: Clock,
                title: "Horaires Flexibles",
                description: "Organisation de 19h à 2h du matin selon vos besoins",
                color: "from-red-500 to-red-700"
              },
              {
                icon: MapPin,
                title: "Promotion Croisée",
                description: "Communication sur nos réseaux et auprès de notre communauté",
                color: "from-teal-500 to-teal-700"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos bars partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos bars partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Des lieux d'exception qui partagent nos valeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Le Comptoir Vert",
                location: "Belleville, Paris 20e",
                style: "Cocktails bio & platines vintage",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
              },
              {
                name: "Green Garden",
                location: "Marais, Paris 3e", 
                style: "Rooftop végétalisé & DJ sets",
                image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
              },
              {
                name: "L'Écosystème",
                location: "République, Paris 11e",
                style: "Bar à vin nature & acoustique",
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
              },
              {
                name: "Le Jardin Secret",
                location: "Montmartre, Paris 18e",
                style: "Cour intérieure & électro chill",
                image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
              },
              {
                name: "Botanique",
                location: "Bastille, Paris 11e",
                style: "Jungle urbaine & house music",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
              },
              {
                name: "L'Oasis",
                location: "Pigalle, Paris 9e",
                style: "Cocktail bar tropical & afrobeat",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
              }
            ].map((bar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img
                    src={bar.image}
                    alt={bar.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{bar.name}</h3>
                    <p className="text-sm text-gray-200">{bar.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-medium">{bar.style}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre bar mérite une soirée Green !
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Vous êtes propriétaire d'un bar et souhaitez organiser une soirée avec nous ? 
            Contactez-nous pour discuter de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Devenir partenaire
            </a>
            <a
              href="/lineup"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Voir nos DJs
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsBar;
