import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { Icon: FaFacebookF, label: "Facebook", url: "#" },
    { Icon: FaTwitter, label: "Twitter", url: "#" },
    { Icon: FaInstagram, label: "Instagram", url: "#" },
    { Icon: FaLinkedinIn, label: "LinkedIn", url: "#" }
  ];

  const policyLinks = [
    { label: "Privacy Policy", url: "#" },
    { label: "Accessibility Statement", url: "#" },
    { label: "Terms and Conditions", url: "#" },
    { label: "Refund Policy", url: "#" }
  ];

  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-8 text-white">CourtsApp</div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label={social.label}
              >
                <social.Icon className="text-xl" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            {policyLinks.map((policy, index) => (
              <a 
                key={index}
                href={policy.url} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {policy.label}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CourtsApp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
