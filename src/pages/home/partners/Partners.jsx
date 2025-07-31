import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Partners.scss"
import partnerLogo2 from "../../../assets/logos/partnersLogo2.png"
import partnerLogo3 from "../../../assets/logos/partnersLogo3.png"
import partnerLogo1 from "../../../assets/logos/partnersLogo1.png"
import partnerLogo4 from "../../../assets/logos/partnersLogo4.png"
import partnerLogo5 from "../../../assets/logos/AGC_Logo.svg"

const logos = [
  { src: partnerLogo1, alt: "Hans Visser" },
  { src: partnerLogo2, alt: "Scheurich" },
  { src: partnerLogo3, alt: "Nieuwkoop" },
  { src: partnerLogo4, alt: "Dames Plants" }, 
  { src: partnerLogo5, alt: "Mark Flowers BV" },
//   { src: partnerLogo2, alt: "Scheurich" },
//   { src: partnerLogo3, alt: "Nieuwkoop" }
];
const Partners = () => {
  return (
    <section id='partners'>
         <div className="text-white py-1 my-5">
      <div className="container">
        <div className="partnersFlexDiv">

        <div className='sectionTexts'>
          {/* <h6 className="mb-0 partnersText">Некоторые из наших</h6> */}
          <strong className='partnersText'>Ключевые партнеры</strong>
        </div>
        <div className="swiperBoxs">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            speed={2000}
            breakpoints={{
                425: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo.src} alt={logo.alt} className="partLogo"  />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Partners