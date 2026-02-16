import { useState, useEffect } from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

export default function Testimonials() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Current window width:", window.innerWidth);
  }, []);

  if (!mounted) return null;

  // Force initial columns based on current width (since we are fully mounted)
  const isMobile = window.innerWidth < 768; // Safer threshold than 640
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // Explicitly set these based on current state
    slidesToShow: isMobile ? 1 : (isTablet ? 2 : 3),
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-32 bg-gray-900 text-white relative" // Removed overflow-hidden to allow dots to show
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" /> */}
        {/* Giant Quote Mark */}
        <Quote className="absolute top-20 left-10 text-white/5 w-64 h-64 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3 block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of healthcare professionals transforming their
            pharmacy operations.
          </p>
        </div>

        <div className="relative">
          <Slider {...settings} className="testimonial-slider -mx-4 pb-24">
            {(t("testimonials.items", { returnObjects: true }) || []).map(
              (item, index) => (
                <div key={item.id || index} className="px-4 h-full">
                  <div className="bg-gray-800 p-8 rounded-[2rem] border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex space-x-1 text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          ))}
                        </div>
                        <div className="bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-1.5 border border-green-500/20">
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </div>
                          <span className="text-xs font-semibold text-green-400">
                            Verified
                          </span>
                        </div>
                      </div>

                      <p className="text-lg text-gray-300 mb-8 leading-relaxed italic relative z-10 line-clamp-4 min-h-[7rem]">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-gray-700/50 pt-6">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-300 shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-sm font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}
