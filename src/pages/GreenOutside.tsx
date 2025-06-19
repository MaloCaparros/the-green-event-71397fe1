
import { Building, Users, Leaf, Star, Calendar, Award } from "lucide-react";
import Layout from "../components/Layout";

const GreenOutside = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              The Green Outside
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Prestations événementielles sur-mesure pour entreprises et particuliers 🌿✨
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Building className="h-8 w-8 text-[#f8efc8] mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Entreprises</h3>
                <p className="text-gray-200">Team building & événements corporate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Users className="h-8 w-8 text-[#f8efc8] mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Particuliers</h3>
                <p className="text-gray-200">Mariages, anniversaires & garden parties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Entreprises */}
      <section className="py-20 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Événements d'entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Renforcez la cohésion de vos équipes avec des expériences originales 
              qui allient plaisir, créativité et respect de l'environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎪",
                title: "Team Building Musical",
                description: "Ateliers DJ, création de playlists collaboratives et mini-concerts d'équipe",
                features: ["Formation DJ", "Studio mobile", "Matériel professionnel"]
              },
              {
                icon: "🌱",
                title: "Séminaires Green",
                description: "Événements corporate dans des lieux éco-responsables avec animations nature",
                features: ["Lieux d'exception", "Catering bio", "Activités outdoor"]
              },
              {
                icon: "🎨",
                title: "Soirées d'Entreprise",
                description: "Événements de fin d'année, lancements produit et célébrations corporate",
                features: ["Scénographie", "DJ & Live", "Cocktails signature"]
              },
              {
                icon: "🏆",
                title: "Conventions & Congrès",
                description: "Animation musicale et artistique pour vos grands événements",
                features: ["Sonorisation", "Animations live", "Gestion technique"]
              },
              {
                icon: "🚀",
                title: "Lancements Produit",
                description: "Créez le buzz avec des événements immersifs et mémorables",
                features: ["Concept créatif", "Influence marketing", "Média coverage"]
              },
              {
                icon: "🎭",
                title: "Incentives",
                description: "Récompensez vos équipes avec des expériences musicales uniques",
                features: ["Voyages musicaux", "Rencontres artistes", "Expériences VIP"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-[#06b14a] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Particuliers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Événements privés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vos moments les plus précieux méritent une bande sonore exceptionnelle. 
              Nous créons l'ambiance parfaite pour tous vos événements privés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mariages",
                icon: "💍",
                description: "De la cérémonie à la fête, nous orchestrons votre jour J avec élégance",
                services: ["Cérémonie laïque", "Cocktail & vin d'honneur", "Soirée dansante", "Brunch du lendemain"],
                price: "À partir de 2500€"
              },
              {
                title: "Anniversaires",
                icon: "🎂", 
                description: "18 ans, 30 ans, 50 ans... Chaque âge a sa playlist et son ambiance !",
                services: ["DJ personnalisé", "Animations", "Décoration thématique", "Surprises musicales"],
                price: "À partir de 1200€"
              },
              {
                title: "Garden Parties",
                icon: "🌻",
                description: "Transformez votre jardin en festival privé le temps d'une soirée",
                services: ["Installation outdoor", "Éclairage d'ambiance", "Sound system", "Animation live"],
                price: "À partir de 1800€"
              },
              {
                title: "Événements Familiaux",
                icon: "👨‍👩‍👧‍👦",
                description: "Baptêmes, communions, retrouvailles... L'union fait la force musicale",
                services: ["Playlist multi-génération", "Animations enfants", "Karaoké famille", "Moments musicaux"],
                price: "À partir de 800€"
              }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f8efc8] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{event.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-[#06b14a] font-semibold">{event.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {event.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Award className="h-4 w-4 text-[#06b14a] mr-2" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Quelques événements qui nous ont marqués
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mariage Sarah & Thomas",
                type: "Château de Versailles",
                image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
                description: "150 invités - 3 ambiances musicales"
              },
              {
                title: "Team Building Google",
                type: "Bois de Vincennes",
                image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop", 
                description: "200 collaborateurs - Ateliers DJ"
              },
              {
                title: "50 ans de Pierre",
                type: "Loft privé Marais",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
                description: "80 invités - Playlist vintage/moderne"
              },
              {
                title: "Lancement BMW i8",
                type: "Musée des Arts Décoratifs",
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
                description: "300 VIP - Expérience immersive"
              },
              {
                title: "Garden Party Hermès",
                type: "Jardin du Luxembourg",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
                description: "120 invités - Acoustique & nature"
              },
              {
                title: "Anniversaire 30 ans Julie",
                type: "Rooftop Montparnasse",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
                description: "60 invités - Vue panoramique"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.type}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{project.description}</p>
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
            Prêt à créer votre événement ?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contactez-nous pour un devis personnalisé et commençons à imaginer 
            votre événement idéal ensemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </a>
            <a
              href="tel:+33123456789"
              className="border-2 border-white text-white hover:bg-white hover:text-[#06b14a] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenOutside;
