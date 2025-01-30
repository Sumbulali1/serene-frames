import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Image {
  url: string;
  title: string;
  category: string;
  location: string;
}

const images: Image[] = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Mountain Lake',
    category: 'Landscapes',
    location: 'New Zealand',
  },
  {
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
    title: 'Aurora Borealis',
    category: 'Aurora',
    location: 'Toronto',
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    title: 'Misty Forest',
    category: 'Black and White',
    location: 'Vienna',
  },
  {
    url: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f',
    title: 'Desert Sunset',
    category: 'Sunset',
    location: 'Dubai',
  },
  {
    url: 'https://images.unsplash.com/photo-1499678329028-101435549a4e',
    title: 'City Lights',
    category: 'Skyline',
    location: 'Los Angeles',
  },
  {
    url: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59',
    title: 'Ancient Architecture',
    category: 'Black and White',
    location: 'Rome',
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentFilter, setCurrentFilter] = useState<'category' | 'location'>('category');
  
  const categories = Array.from(new Set(images.map(img => img.category)));
  const locations = Array.from(new Set(images.map(img => img.location)));

  const getCategorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
  const getLocationSlug = (location: string) => location.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-serif mb-4"
            >
              Photography Galleries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Discover a world of breathtaking landscapes, stunning cityscapes, and intimate moments 
              captured through the lens. Each gallery is a visual journey, telling stories through 
              light, composition, and emotion.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <Tabs defaultValue="category" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger 
              value="category" 
              onClick={() => setCurrentFilter('category')}
            >
              By Theme
            </TabsTrigger>
            <TabsTrigger 
              value="location" 
              onClick={() => setCurrentFilter('location')}
            >
              By Location
            </TabsTrigger>
          </TabsList>

          <TabsContent value="category">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/portfolio/${getCategorySlug(category)}`}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  {images.find(img => img.category === category) && (
                    <img
                      src={images.find(img => img.category === category)?.url}
                      alt={category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white text-2xl font-serif mb-2">{category}</h3>
                    <p className="text-white/80 text-sm">
                      {images.filter(img => img.category === category).length} Photos
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="location">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Link
                  key={location}
                  to={`/portfolio/${getLocationSlug(location)}`}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  {images.find(img => img.location === location) && (
                    <img
                      src={images.find(img => img.location === location)?.url}
                      alt={location}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white text-2xl font-serif mb-2">{location}</h3>
                    <p className="text-white/80 text-sm">
                      {images.filter(img => img.location === location).length} Photos
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-serif mb-4">Interested in purchasing prints?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your space with stunning photography prints. Each piece is carefully crafted 
            to bring the beauty of these moments into your home or office.
          </p>
          <Button size="lg" className="font-serif">
            Browse Print Store
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-accent"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <h3 className="text-xl font-serif">{selectedImage.title}</h3>
            <p className="text-sm text-white/80">
              {selectedImage.category} • {selectedImage.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;