import { Camera, Mail, Instagram } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552168324-d612d77725e3"
              alt="Photographer Profile"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif">About Me</h1>
            
            <p className="text-lg text-gray-700">
              I'm John Doe, a landscape photographer based in New Zealand. For the past decade,
              I've been capturing the raw beauty of nature through my lens.
            </p>
            
            <p className="text-lg text-gray-700">
              My work focuses on the interplay between light and landscape, seeking to capture
              those fleeting moments when nature reveals its most spectacular displays.
            </p>

            <div className="pt-4 space-y-4">
              <h2 className="text-2xl font-serif">Get in Touch</h2>
              
              <div className="flex items-center space-x-6">
                <a
                  href="mailto:contact@johndoe.com"
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;