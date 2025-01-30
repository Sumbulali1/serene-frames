import { useParams } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const galleries: Record<string, {
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}> = {
  'landscapes': {
    title: 'Breathtaking Landscapes',
    description: 'Discover the raw beauty of nature through our lens. From towering mountains to serene lakes, each image captures the essence of Earth\'s most spectacular landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Mountain Lake',
        description: 'A serene mountain lake reflecting the surrounding peaks'
      },
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
        title: 'Misty Forest',
        description: 'Morning mist rolling through an ancient forest'
      },
      // Add more images as needed
    ]
  },
  'aurora': {
    title: 'Aurora Borealis',
    description: 'Experience the magical dance of the Northern Lights. Our collection showcases nature\'s most spectacular light show in all its glory.',
    coverImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
        title: 'Northern Lights',
        description: 'The aurora borealis dancing across the night sky'
      },
      // Add more aurora images
    ]
  },
  'new-zealand': {
    title: 'New Zealand Wonders',
    description: 'Journey through the diverse landscapes of New Zealand, from dramatic mountains to pristine beaches.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'New Zealand Lake',
        description: 'Crystal clear waters of a New Zealand mountain lake'
      },
      // Add more New Zealand images
    ]
  },
  // Add more galleries as needed
};

const GalleryView = () => {
  const { galleryId } = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  if (!galleryId || !galleries[galleryId]) {
    return <div className="min-h-screen flex items-center justify-center">Gallery not found</div>;
  }

  const gallery = galleries[galleryId];
  const images = gallery.images;

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading more images
    setTimeout(() => {
      setPage(prev => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
          <div className="max-w-3xl text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{gallery.title}</h1>
            <p className="text-lg md:text-xl opacity-90">{gallery.description}</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.url}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-serif mb-2">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-accent"
              >
                <X size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-serif mb-2">{images[selectedImage].title}</h3>
                <p className="text-sm opacity-80">{images[selectedImage].description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryView;