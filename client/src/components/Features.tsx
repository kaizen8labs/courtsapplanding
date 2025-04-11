import { Calendar, Bell, Users } from "lucide-react";

const features = [
  {
    icon: <Calendar className="text-primary text-xl" />,
    title: "Easy Booking",
    description: "Book your favorite courts with just a few taps, anytime, anywhere."
  },
  {
    icon: <Bell className="text-primary text-xl" />,
    title: "Smart Notifications",
    description: "Get timely reminders about your upcoming reservations and available slots."
  },
  {
    icon: <Users className="text-primary text-xl" />,
    title: "Team Management",
    description: "Invite friends to play, manage your team, and organize matches easily."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-800">What to Expect</h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            CourtsApp will bring powerful features to make court reservations seamless and efficient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
