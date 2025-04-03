
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/5c63621b-8de1-4a21-9df5-fd4e89a5b029.png" alt="MorningCroissant" className="h-10" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-[#095BE1]">
            Déjà un compte ?
          </a>
          <Button className="bg-[#ff813A] hover:bg-[#e67434] text-white rounded-full">
            Devenir propriétaire
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden bg-white w-full absolute transition-all duration-300 ease-in-out",
          isOpen ? "max-h-60 py-4 shadow-md" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#" className="text-gray-600 hover:text-[#095BE1] py-2">
            Déjà un compte ?
          </a>
          <Button className="bg-[#ff813A] hover:bg-[#e67434] text-white rounded-full">
            Devenir propriétaire
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

