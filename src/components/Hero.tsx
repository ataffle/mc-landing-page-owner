
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#ff813A]/20 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Louez votre logement <br className="hidden md:block" />
              <span className="text-[#095BE1]">sans contraintes</span>
            </h1>
            <p className="text-xl text-gray-700">
              Publiez gratuitement, recevez des dossiers qualifiés et bénéficiez de garanties exclusives sur la plateforme de location moyenne et longue durée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#095BE1] hover:bg-[#074bc8] text-white rounded-full text-lg py-6">
                Publier mon annonce gratuitement
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#ff813A] text-[#ff813A]" />
                ))}
              </div>
              <span className="text-gray-700">
                <strong>4.8/5</strong> basé sur plus de 10 000 avis
              </span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/d087b4cd-24fc-45e6-8eb9-60eda99cf8f3.png"
              alt="MorningCroissant interface" 
              className="rounded-lg shadow-lg border border-gray-200 w-full"
            />
            <Card className="shadow-lg border-2 border-gray-100 bg-white absolute -bottom-10 -left-5 md:left-10 max-w-xs">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#095BE1]/10 flex items-center justify-center text-[#095BE1]">✓</div>
                  <p className="text-sm font-medium">Garantie Loyers Impayés jusqu'à 90 000€</p>
                </div>
              </CardContent>
            </Card>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-[#095BE1]/10 rounded-full z-[-1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
