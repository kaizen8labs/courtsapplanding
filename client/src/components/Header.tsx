import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };
  
  return (
    <header className="py-6 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl font-bold text-black">
            CourtsApp
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => handleLinkClick('about')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <button 
                onClick={() => handleLinkClick('about')} 
                className="text-lg font-medium py-2 text-gray-800 hover:text-black"
              >
                About
              </button>
              <button 
                onClick={() => handleLinkClick('contact')} 
                className="text-lg font-medium py-2 text-gray-800 hover:text-black"
              >
                Contact
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
