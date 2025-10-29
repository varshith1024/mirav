import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // {
    //   id: 1,
    //   title: "Welcome  ",
    //   description: "Empowering communities through farmer assistance, student sponsorships, and healthcare initiatives.",
    //   // buttonText: "Register for Programs",
    //   // buttonText2: "Learn More",
    //   // buttonColor: "bg-green-500 hover:bg-green-600",
    //   // buttonColor2: "bg-white text-blue-600 hover:bg-gray-100",
    //   // link: "/register",
    //   // link2: "/programs",
    //   image: "https://serudsindia.org/wp-content/uploads/2019/11/R_83911-cropped-1-1920x1080.jpg"
    // },
    {
      id: 2,
      title: "Supporting Farmers",
      description: "Empowering agricultural communities with resources, subsidies, and healthcare benefits.",
      // buttonText: "Farmer Programs",
      // buttonText2: "View Benefits",
      // buttonColor: "bg-green-500 hover:bg-green-600",
      // buttonColor2: "bg-white text-blue-600 hover:bg-gray-100",
      // link: "/programs",
      // link2: "/programs",
      image: "https://woolpert.com/wp-content/uploads/2017/06/Agriculture.jpg"
    },
    {
      id: 3,
      title: "Student Sponsorships",
      description: "Investing in education for a brighter future with financial aid and mentorship programs.",
      // buttonText: "Education Programs",
      // buttonText2: "Apply Now",
      // buttonColor: "bg-green-500 hover:bg-green-600",
      // buttonColor2: "bg-white text-blue-600 hover:bg-gray-100",
      // link: "/programs",
      // link2: "/register",
      image: "https://media.gettyimages.com/id/553825939/photo/students-at-a-primary-school-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=PL1JimTqHtU512IgUUvYQTSIjiv0kwTzPuYKlUf1A24=",
    },
    {
      id: 4,
      title: "Healthcare Access",
      description: "Quality medical care and concessions through our network of partner hospitals.",
      // buttonText: "Find Hospitals",
      // buttonText2: "Healthcare Programs",
      // buttonColor: "bg-green-500 hover:bg-green-600",
      // buttonColor2: "bg-white text-blue-600 hover:bg-gray-100",
      // link: "/hospitals",
      // link2: "/programs",
      image: "https://media.gettyimages.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY="
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every  seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className=" relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-3/4 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to={slide.link} 
                    className={`${slide.buttonColor} px-6 py-3 rounded-lg text-lg font-semibold transition inline-block`}
                  >
                    {slide.buttonText}
                  </Link>
                  <Link 
                    to={slide.link2} 
                    className={`${slide.buttonColor2} px-6 py-3 rounded-lg text-lg font-semibold transition inline-block`}
                  >
                    {slide.buttonText2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls - Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Progress Bar */}
      <div className="absolute top-0  left-0 w-full h-1 bg-white bg-opacity-30">
        <div 
          className="h-full bg-white transition-all duration-6000"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;