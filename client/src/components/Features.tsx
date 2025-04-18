import { Calendar, Bell, Users } from "lucide-react";

const features = [
  {
    icon: <Calendar className="text-black text-xl" />,
    title: "Easy Booking",
    description: "Book your favorite courts with just a few taps, anytime, anywhere."
  },
  {
    icon: <Bell className="text-black text-xl" />,
    title: "Smart Notifications",
    description: "Get timely reminders about your upcoming reservations and available slots."
  },
  {
    icon: <Users className="text-black text-xl" />,
    title: "Team Management",
    description: "Invite friends to play, manage your team, and organize matches easily."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">What to Expect</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            CourtsApp will bring powerful features to make court reservations seamless and efficient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
