import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../../assets/images/homepage.png";
import image2 from "../../assets/images/school1.jpeg";
import image3 from "../../assets/images/school2.jpeg";
import image4 from "../../assets/images/academy.png";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mx-auto h-64 w-full sm:h-80 lg:h-96"
      
    >
      <SwiperSlide>
        <img
          src={image1}
          className="w-full h-full object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={image2}
          className="w-full h-full object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={image3}
          className="w-full h-full object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={image4}
          className="w-full h-full object-cover"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;