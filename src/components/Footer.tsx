
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">morning</span>
              <span className="text-xl font-bold text-[#ff813A]">croissant</span>
            </div>
            <p className="mb-4 text-sm">
              La plateforme qui révolutionne la location moyenne et longue durée en France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Propriétaires</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-white">Publier une annonce</a></li>
              <li><a href="#" className="hover:text-white">Garanties</a></li>
              <li><a href="#" className="hover:text-white">Tarifs</a></li>
              <li><a href="#" className="hover:text-white">FAQ propriétaires</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Locataires</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Rechercher un logement</a></li>
              <li><a href="#" className="hover:text-white">Comment louer</a></li>
              <li><a href="#" className="hover:text-white">Services inclus</a></li>
              <li><a href="#" className="hover:text-white">FAQ locataires</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Notre histoire</a></li>
              <li><a href="#" className="hover:text-white">Conditions générales</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white">Nous contacter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} MorningCroissant. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <Button variant="link" className="text-gray-400 hover:text-white text-sm">
              Mentions légales
            </Button>
            <Button variant="link" className="text-gray-400 hover:text-white text-sm">
              CGU
            </Button>
            <Button variant="link" className="text-gray-400 hover:text-white text-sm">
              Confidentialité
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
