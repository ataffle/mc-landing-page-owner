
import { Badge } from "@/components/ui/badge";
import { Shield, Star, Users, CheckCircle } from "lucide-react";

const TrustElements = () => {
  const stats = [
    {
      icon: Users,
      value: "2000+",
      label: "Propriétaires nous font confiance"
    },
    {
      icon: CheckCircle,
      value: "100k+",
      label: "Locations et 0€ d'impayés pour nos loueurs"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Assuré par Mila"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Avis utilisateurs"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-[#095BE1]/20 text-[#095BE1] hover:bg-[#095BE1]/30 border-none">
            Ils nous font confiance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Notre engagement à vos côtés
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#095BE1]/10 mb-4">
                <stat.icon className="h-6 w-6 text-[#095BE1]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold mb-8">Ils parlent de nous</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-80">
            <div className="w-24 md:w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_logo_black_2022.svg/1200px-Google_logo_black_2022.svg.png"
                alt="Google"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/16/Le_Figaro_logo.svg"
                alt="Le Figaro"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Les_%C3%89chos_%28logo%29.svg/2560px-Les_%C3%89chos_%28logo%29.svg.png"
                alt="Les Echos"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/L%27Express_logo.svg/2560px-L%27Express_logo.svg.png"
                alt="L'Express"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2560px-Le_Monde.svg.png"
                alt="Le Monde"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustElements;
