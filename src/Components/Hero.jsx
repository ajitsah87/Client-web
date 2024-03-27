import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {

  const slides = [
    {
      href: "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336669.jpg",
      category: "Audio",
    },
    {
      href: "https://img.freepik.com/premium-psd/gaming-laptop-sale-promotion-banner_252779-743.jpg",
      category: "Laptop",
    },
    {
      href: "https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-2158.jpg",
      category: "Appliances",
    },
    {
      href: "https://img.freepik.com/premium-psd/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.jpg",
      category: "Mobile",
    },
  ];

  return (
    <div className=" w-full h-[80vh] max-lg:h-[60vh] max-md:h-[52vh] max-sm:h-[40vh] mb-20 ">
      <Swiper
        className=" w-full h-full "
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        // pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <span
              // to="product_list"
              // smooth
              // duration={300}
              // offset={-90}
              // onClick={() => setSelectedCategory(item.category)}
            >
              <img
                src={item.href}
                alt="404"
                className="selection:bg-none w-full h-full object-cover bg-gray-300 cursor-pointer"
              />
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
};

export default Carousel;