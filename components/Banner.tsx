// src/components/Banner.tsx

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

const Banner: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Banner Paisagem Planos De Saúde Clínica Popular Moderno Verde E Branco.jpg",
    "/Banner Paisagem Planos De Saúde Clínica Popular Moderno Verde E Branco(1).jpg",
    "/Banner Paisagem Planos De Saúde Clínica Popular Moderno Verde E Branco(2).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <Image
          src={images[currentImageIndex]} 
          alt={`Banner ${currentImageIndex + 1}`}
          width={1200}
          height={500}
          className="w-full object-cover rounded-md transition-all"
        />
      </div>
    </div>
  );
};

export default Banner;
