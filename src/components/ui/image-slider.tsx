import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Slide {
  image: string;
}

export const ImageSlider = ({ slides }: { slides: Array<Slide> }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={5000}
      infiniteLoop
    >
      {slides.map((slide) => (
        <div key={slide?.image} style={{ height: '50vh', width: '100%' }}>
          <Image
            src={`/assets/carousel/${slide.image}`}
            alt=""
            objectFit="cover"
            height="100%"
            width="100%"
            boxShadow="md"
            rounded="md"
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
};
