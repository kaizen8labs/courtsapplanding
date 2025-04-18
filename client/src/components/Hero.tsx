import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black">
            CourtsApp
          </h1>
          <div className="inline-block bg-black text-white font-semibold px-4 py-1 rounded-full mb-8">
            Coming Soon
          </div>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join our waitlist to be the first to know when we launch.
          </p>
        </div>
      </div>
    </section>
  );
}
