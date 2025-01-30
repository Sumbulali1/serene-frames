import { useState } from 'react';
import { X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Portfolio</h1>
        
        <div className="flex justify-center mb-8">
          <Tabs defaultValue="category" className="w-full max-w-3xl">
            <TabsList className="grid w-full grid-cols-2">
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
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/portfolio/${getCategorySlug(category)}`}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    {images.find(img => img.category === category) && (
                      <img
                        src={images.find(img => img.category === category)?.url}
                        alt={category}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-xl font-serif">{category}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {locations.map((location) => (
                  <Link
                    key={location}
                    to={`/portfolio/${getLocationSlug(location)}`}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    {images.find(img => img.location === location) && (
                      <img
                        src={images.find(img => img.location === location)?.url}
                        alt={location}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-xl font-serif">{location}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="image-grid">
          {images.map((image) => (
            <div
              key={image.url}
              onClick={() => setSelectedImage(image)}
              className="relative group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Portfolio;