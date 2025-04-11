import { Button } from "@/components/ui/button";
import tennisIllustration from "../assets/tennis-illustration.svg";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
              A New Way to Manage Court Reservations
            </h1>
            <div className="inline-block bg-primary text-white font-semibold px-4 py-1 rounded-full mb-6">
              Coming Soon
            </div>
            <p className="text-lg text-gray-600 mb-8">
              CourtsApp is revolutionizing how sports facilities manage their court bookings. Join our waitlist to be the first to know when we launch.
            </p>
            <Button 
              onClick={handleContactClick} 
              className="bg-primary hover:bg-green-600 text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Join the Waitlist
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-white">
              <img 
                src={tennisIllustration} 
                alt="Tennis court illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
