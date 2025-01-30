import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Mountain Lake',
    category: 'Landscapes',
  },
  {
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
    title: 'Aurora Borealis',
    category: 'Night Sky',
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    title: 'Misty Forest',
    category: 'Landscapes',
  },
  // Add more images as needed
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Portfolio</h1>
        
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
              <p className="text-sm text-white/80">{selectedImage.category}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;