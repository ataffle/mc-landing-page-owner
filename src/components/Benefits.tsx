
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Users, FileText, Clock, DollarSign, Headphones, Globe2 } from "lucide-react";

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="h-12 w-12 rounded-full bg-[#095BE1]/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-[#095BE1]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Publiez votre annonce gratuitement",
      description: "Publiez sans engagement ni limite de durée. Maîtrisez le processus de location sans contraintes."
    },
    {
      icon: Globe2,
      title: "Atteignez une audience élargie",
      description: "Touchez des milliers de locataires sur notre plateforme et sur des sites partenaires comme SeLoger et Leboncoin."
    },
    {
      icon: FileText,
      title: "Adaptez les contrats selon vos besoins",
      description: "Choisissez parmi plusieurs formules : bail classique, bail société, bail mobilité ou bail étudiant."
    },
    {
      icon: Users,
      title: "Accédez à une clientèle diversifiée",
      description: "Touchez des étudiants, salariés en mutation, expatriés et chercheurs, dont 50% à l'international."
    },
    {
      icon: Shield,
      title: "Garantie Loyers Impayés jusqu'à 90 000€",
      description: "Recevez vos loyers à date fixe chaque mois, même en cas de retard ou d'impayés de la part du locataire."
    },
    {
      icon: Clock,
      title: "Gérez tout en ligne",
      description: "Demandes de location, signature des contrats, documents et préavis, tout se fait sur notre plateforme intuitive."
    },
    {
      icon: DollarSign,
      title: "Frais réduits et au succès",
      description: "Payez uniquement si votre bien est loué avec des frais de 4,5% TTC, 3x moins cher qu'une agence traditionnelle."
    },
    {
      icon: Headphones,
      title: "Support dédié",
      description: "Contactez notre équipe par téléphone, email ou chat, même avant votre inscription."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#ff813A]/20 text-[#ff813A] hover:bg-[#ff813A]/30 border-none">
            Avantages exclusifs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi louer avec <span className="text-[#095BE1]">MorningCroissant</span> ?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions innovantes qui simplifient vos locations et sécurisent vos revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
