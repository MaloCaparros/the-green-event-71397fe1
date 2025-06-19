
import { ExternalLink, Star, Handshake } from "lucide-react";
import Layout from "../components/Layout";

const Partners = () => {
  const partners = [
    {
      name: "Spotify",
      category: "Streaming",
      description: "Partenaire officiel pour la diffusion de nos playlists et la promotion de nos artistes",
      logo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=100&fit=crop",
      website: "https://spotify.com",
      collaboration: "Playlists officielles, promotion artistes, données analytics"
    },
    {
      name: "Native Instruments",
      category: "Matériel",
      description: "Équipement DJ et production musicale pour tous nos événements",
      logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=100&fit=crop",
      website: "https://native-instruments.com",
      collaboration: "Prêt de matériel, masterclasses, showcases produits"
    },
    {
      name: "Patagonia",
      category: "Mode Éthique",
      description: "Vêtements éco-responsables pour nos équipes et notre merchandising",
      logo: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=100&fit=crop",
      website: "https://patagonia.com",
      collaboration: "Collection capsule, tenues équipes, sensibilisation environnementale"
    },
    {
      name: "Biocoop",
      category: "Alimentation Bio",
      description: "Approvisionnement local et bio pour tous nos espaces restauration",
      logo: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=100&fit=crop",
      website: "https://biocoop.fr",
      collaboration: "Produits locaux, circuits courts, sensibilisation consommation"
    },
    {
      name: "Tesla",
      category: "Mobilité Verte",
      description: "Solutions de transport électrique pour nos déplacements et navettes",
      logo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=100&fit=crop",
      website: "https://tesla.com",
      collaboration: "Navettes électriques, stations de recharge, partenariat mobilité"
    },
    {
      name: "SolarCity",
      category: "Énergie Solaire",
      description: "Alimentation 100% solaire pour tous nos événements en extérieur",
      logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=100&fit=crop",
      website: "https://solarcity.com",
      collaboration: "Installations temporaires, autonomie énergétique, innovation green tech"
    },
    {
      name: "Veja",
      category: "Mode Éthique",
      description: "Chaussures éthiques et sneakers éco-conçues pour notre équipe",
      logo: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=200&h=100&fit=crop",
      website: "https://veja-store.com",
      collaboration: "Équipement équipes, éditions limitées, communication RSE"
    },
    {
      name: "La Ruche qui dit Oui",
      category: "Circuit Court",
      description: "Approvisionnement direct producteurs pour nos espaces food",
      logo: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=200&h=100&fit=crop",
      website: "https://laruchequiditoui.fr",
      collaboration: "Produits frais, circuits courts, soutien producteurs locaux"
    },
    {
      name: "Greenpeace",
      category: "ONG Environnementale",
      description: "Partenariat de sensibilisation et actions écologiques lors de nos événements",
      logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=100&fit=crop",
      website: "https://greenpeace.org",
      collaboration: "Sensibilisation publique, actions écologiques, stands informatifs"
    },
    {
      name: "WWF France",
      category: "Conservation",
      description: "Actions de préservation de la biodiversité et sensibilisation environnementale",
      logo: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=100&fit=crop",
      website: "https://wwf.fr",
      collaboration: "Programmes de conservation, éducation environnementale, partenariat RSE"
    },
    {
      name: "Surfrider Foundation",
      category: "Protection Océans",
      description: "Protection des océans et sensibilisation aux déchets plastiques",
      logo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=100&fit=crop",
      website: "https://surfrider.eu",
      collaboration: "Nettoyage plages, sensibilisation plastic free, éco-gestes"
    },
    {
      name: "ADEME",
      category: "Transition Écologique",
      description: "Accompagnement dans la transition écologique de nos événements",
      logo: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=100&fit=crop",
      website: "https://ademe.fr",
      collaboration: "Études d'impact, conseils transition, financement projets verts"
    }
  ];

  const categories = [
    "Streaming", "Matériel", "Mode Éthique", "Alimentation Bio", 
    "Mobilité Verte", "Énergie Solaire", "Circuit Court", 
    "ONG Environnementale", "Conservation", "Protection Océans", "Transition Écologique"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              Nos Partenaires
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Ensemble, nous construisons un écosystème musical durable 🤝🌱
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Réseau d'Impact</h3>
              <p className="text-lg text-gray-200">
                Nos partenaires partagent nos valeurs et nous accompagnent dans notre mission : 
                créer des événements qui respectent la planète et rassemblent les communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#06b14a] mb-2">{partners.length}</div>
              <div className="text-gray-600 font-semibold">Partenaires actifs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#06b14a] mb-2">{categories.length}</div>
              <div className="text-gray-600 font-semibold">Secteurs d'activité</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#06b14a] mb-2">3</div>
              <div className="text-gray-600 font-semibold">Ans de collaboration</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#06b14a] mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Éco-responsables</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos partenaires de confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les entreprises et organisations qui nous accompagnent 
              dans notre démarche éco-responsable et notre passion pour la musique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Logo */}
                <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[#06b14a] text-white rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Type de collaboration */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Handshake className="h-4 w-4 text-[#06b14a] mr-2" />
                      <span className="text-sm font-semibold text-gray-700">Collaboration :</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {partner.collaboration}
                    </p>
                  </div>

                  {/* Lien vers le site */}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#06b14a] hover:text-[#048a3a] font-semibold text-sm transition-colors duration-300 group"
                  >
                    Visiter le site
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="py-20 bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Devenir partenaire
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Votre entreprise partage nos valeurs éco-responsables ? 
            Rejoignez notre écosystème et construisons ensemble l'avenir de l'événementiel durable !
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Visibilité</h3>
              <p className="text-green-100 text-sm">
                Exposition auprès de milliers de festivaliers engagés
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-green-100 text-sm">
                Participation concrète à la transition écologique
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Réseau</h3>
              <p className="text-green-100 text-sm">
                Intégration dans un écosystème d'entreprises engagées
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Proposer un partenariat
            </a>
            <a
              href="mailto:partnerships@thegreenevent.fr"
              className="border-2 border-white text-white hover:bg-white hover:text-[#06b14a] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contacter l'équipe
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
