
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Paris",
    rating: 5,
    testimonial: "J'étais inquiète de mettre mon appartement en location, mais MorningCroissant a rendu le processus tellement simple. Les dossiers sont vraiment bien vérifiés et je suis payée à l'heure tous les mois !",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Thomas B.",
    location: "Lyon",
    rating: 5,
    testimonial: "Cela fait 3 ans que je loue avec MorningCroissant et je n'ai eu aucun problème. Le service client est réactif et les garanties sont rassurantes. Je recommande à 100% !",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Sophie M.",
    location: "Bordeaux",
    rating: 5,
    testimonial: "La différence avec une agence classique est flagrante. Je contrôle tout mais avec moins de travail et plus de sécurité. Les 4,5% de frais sont largement justifiés par le service.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#ff813A]/20 text-[#ff813A] hover:bg-[#ff813A]/30 border-none">
            Témoignages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ce que disent nos propriétaires
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez l'expérience de ceux qui nous font déjà confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#ff813A] text-[#ff813A]" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
