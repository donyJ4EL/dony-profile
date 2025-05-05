import React from 'react';
import Slider from 'react-slick';

const slides = [
  {
    image: '/img/music1.png',
    title: 'Engineer • Creator • Dreamer',
    subtitle: 'Build systems. Code the future.',
  },
  {
    image: '/img/cover2.jpg',
    title: 'Rap & Code',
    subtitle: 'I write bars and write code.',
  },
  {
    image: '/img/cover3.jpg',
    title: 'Explore My Journey',
    subtitle: 'From backend to frontend creation.',
  },
];

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Slider {...settings}>
        {slides.map((slide, index) => (
            <div key={index} className="relative h-[85vh]">
            <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{slide.title}</h1>
                <p className="text-lg md:text-2xl text-gray-200 mt-4 drop-shadow-md">{slide.subtitle}</p>
            </div>
            </div>
        ))}
        </Slider>
    </div>
  );
}

export default HeroCarousel;
