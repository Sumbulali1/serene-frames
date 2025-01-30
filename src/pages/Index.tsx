import ImageSlider from '../components/ImageSlider';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ImageSlider />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/portfolio"
          className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
        >
          <span>View Portfolio</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Index;