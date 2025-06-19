
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Leaf, Music } from "lucide-react";
import Layout from "../components/Layout";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#f8efc8] bg-clip-text text-transparent">
              The Green Event
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Des festivals éco-responsables qui font vibrer la planète 🌱🎵
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/green-fest"
                className="bg-[#06b14a] hover:bg-[#048a3a] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Découvrir nos festivals
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#06b14a] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Rejoindre le mouvement
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
          <div className="w-1 h-8 border-2 border-white rounded-full mx-auto mb-2">
            <div className="w-full h-3 bg-white rounded-full animate-pulse" />
          </div>
          <p className="text-sm">Scroll</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos formats d'événements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'intime au grandiose, nous créons des expériences musicales uniques 
              qui respectent l'environnement et rassemblent les communautés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "The Green Fest",
                description: "Notre festival principal avec lineup international",
                link: "/green-fest",
                color: "from-[#06b14a] to-[#048a3a]"
              },
              {
                icon: Users,
                title: "Événements Bar",
                description: "Soirées intimistes dans des bars partenaires",
                link: "/events-bar",
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: Leaf,
                title: "The Green Outside",
                description: "Prestations pour entreprises et particuliers",
                link: "/green-outside",
                color: "from-orange-500 to-orange-700"
              },
              {
                icon: Calendar,
                title: "Line-up",
                description: "Découvrez nos artistes et programmations",
                link: "/lineup",
                color: "from-blue-500 to-blue-700"
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-[#06b14a] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à vivre l'expérience ?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Rejoignez notre communauté et soyez les premiers informés de nos prochains événements !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#06b14a] hover:bg-[#f8efc8] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              S'inscrire à la newsletter
            </Link>
            <Link
              to="/merch"
              className="border-2 border-white text-white hover:bg-white hover:text-[#06b14a] px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Découvrir notre merch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
