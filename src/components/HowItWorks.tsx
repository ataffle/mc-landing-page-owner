
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Publiez gratuitement votre annonce",
      description: "Créez votre annonce en quelques minutes. Fixez vos conditions et valorisez votre logement avec photos et visite virtuelle.",
      color: "bg-[#095BE1]"
    },
    {
      number: "2",
      title: "Recevez vos premières demandes",
      description: "Obtenez des demandes qualifiées et échangez directement avec vos candidats via la messagerie MorningCroissant.",
      color: "bg-[#ff813A]"
    },
    {
      number: "3",
      title: "Finalisez avec des dossiers vérifiés",
      description: "Nous vérifions la solvabilité via notre partenaire assureur. Vous gardez le contrôle pour accepter ou non un dossier.",
      color: "bg-[#095BE1]"
    },
    {
      number: "4",
      title: "Signez le contrat en ligne",
      description: "Signez électroniquement le contrat de location en quelques clics après paiement du 1er mois sur notre plateforme sécurisée.",
      color: "bg-[#ff813A]"
    },
    {
      number: "5",
      title: "Recevez vos loyers à date fixe",
      description: "Après l'état des lieux, recevez le premier loyer sous 36h, puis les suivants à date fixe. Vos loyers sont garantis jusqu'à 90 000€.",
      color: "bg-[#095BE1]"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#095BE1]/20 text-[#095BE1] hover:bg-[#095BE1]/30 border-none">
            Processus simplifié
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et sécurisé pour louer votre logement
          </p>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-5 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col items-center`}>
                <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {step.number}
                </div>
                <div className="hidden lg:block absolute top-6 left-[calc(50%+20px)] right-0 h-0.5 bg-gray-300 -z-10">
                  {index < steps.length - 1 ? <div className="w-full h-full" /> : null}
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#095BE1] hover:bg-[#074bc8] text-white rounded-full px-8 py-6 text-lg">
            Publier mon annonce gratuitement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
