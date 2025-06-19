
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Facebook, Music, Users, Building } from "lucide-react";
import Layout from "../components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    eventType: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on gérerait l'envoi du formulaire
    console.log("Formulaire envoyé:", formData);
  };

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
              Contact
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Rejoignez le mouvement green ! 🌱📧
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Parlons de votre projet</h3>
              <p className="text-lg text-gray-200">
                Que ce soit pour organiser un événement, devenir partenaire, 
                ou simplement nous dire bonjour, nous sommes là pour vous écouter !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infos de contact */}
      <section className="py-20 bg-[#f8efc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comment nous contacter ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plusieurs moyens de nous joindre selon vos besoins. 
              Notre équipe vous répond dans les plus brefs délais !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email général",
                content: "hello@thegreenevent.fr",
                description: "Pour toute question générale",
                color: "from-[#06b14a] to-[#048a3a]"
              },
              {
                icon: Phone,
                title: "Téléphone",
                content: "+33 1 23 45 67 89",
                description: "Du lundi au vendredi, 9h-18h",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: MapPin,
                title: "Adresse",
                content: "123 Rue Verte, 75011 Paris",
                description: "Nos bureaux parisiens",
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: Clock,
                title: "Horaires",
                content: "Lun-Ven : 9h-18h",
                description: "Weekend sur rendez-vous",
                color: "from-orange-500 to-orange-700"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                <p className="text-lg font-semibold text-[#06b14a] mb-2">{contact.content}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire et infos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent transition-colors duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de demande
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="green-fest">Green Fest - Informations festival</option>
                    <option value="event-bar">Événement Bar - Collaboration</option>
                    <option value="green-outside">Green Outside - Prestation privée</option>
                    <option value="partnership">Partenariat</option>
                    <option value="artist">Candidature artiste</option>
                    <option value="press">Presse & Média</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent transition-colors duration-300"
                    placeholder="Le sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Décrivez votre projet, vos questions ou vos idées..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#06b14a] hover:bg-[#048a3a] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Infos complémentaires */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contacts spécialisés
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#06b14a] rounded-full flex items-center justify-center">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Programmation Artistique</h4>
                      <p className="text-gray-600">booking@thegreenevent.fr</p>
                      <p className="text-sm text-gray-500">Pour les candidatures d'artistes et collaborations musicales</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Partenariats</h4>
                      <p className="text-gray-600">partnerships@thegreenevent.fr</p>
                      <p className="text-sm text-gray-500">Pour les collaborations entreprises et sponsoring</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Événements Privés</h4>
                      <p className="text-gray-600">events@thegreenevent.fr</p>
                      <p className="text-sm text-gray-500">Pour les prestations Green Outside et événements sur-mesure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Retrouvez-nous sur les réseaux sociaux pour suivre notre actualité, 
                  découvrir les coulisses de nos événements et ne rien manquer de l'aventure Green Event !
                </p>
              </div>

              <div className="bg-[#f8efc8] rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  💌 Newsletter
                </h4>
                <p className="text-gray-600 mb-4">
                  Inscrivez-vous à notre newsletter pour recevoir en avant-première 
                  toutes nos actualités, nos nouveaux événements et nos offres exclusives !
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06b14a] focus:border-transparent"
                  />
                  <button className="bg-[#06b14a] hover:bg-[#048a3a] text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Venez nous rendre visite !
            </h2>
            <p className="text-xl text-gray-600">
              Nos bureaux sont ouverts du lundi au vendredi pour vous accueillir
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[#06b14a] to-[#048a3a] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">123 Rue Verte</h3>
                <p className="text-xl">75011 Paris, France</p>
                <p className="mt-4 text-green-100">
                  Métro République ou Bastille<br/>
                  Parking vélo disponible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
