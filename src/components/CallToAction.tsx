
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-16 bg-[#095BE1]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à louer votre logement simplement et en toute sécurité ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez plus de 2000 propriétaires satisfaits et publiez votre annonce gratuitement dès aujourd'hui.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <Button className="bg-white text-[#095BE1] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto">
              Publier mon annonce gratuitement
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
