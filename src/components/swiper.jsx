
import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

import foto1 from "../assets/avocado.jpg";
import foto2 from "../assets/gin.jpg";
import foto3 from "../assets/crudo.jpg";
import foto4 from "../assets/cerdo.jpg";
import foto5 from "../assets/lemon.jpg";
import foto6 from "../assets/cheese.jpg";
import foto7 from "../assets/cafe.jpg";
import foto8 from "../assets/tallarines.jpg";
import foto9 from "../assets/medialuna.jpg";

function Carousel () {
    return (
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        navigation={true}
        className="w-1/2 h-80"
      >
        <SwiperSlide>
          <img
            src={foto1}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto8}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto3}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto4}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto5}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto6}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto7}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={foto9}
            alt="slide_image "
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={foto2}
            alt="slide_image"
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    )
}

export default Carousel;