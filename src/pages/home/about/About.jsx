import React, { useEffect } from "react";
import "./About.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import HomeAboutSvg from "../../../assets/svg/HomeAboutSvg";
import { useRef } from "react";

const About = () => {
  const controlsSvg = useAnimation();
  const controlsTxt = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controlsSvg.start({ width: 0 });
      controlsTxt.start({ height: 0 });
    } else {
      controlsSvg.set({ width: "100%" });
      controlsTxt.set({ height: "100%" });
    }
  }, [isInView, controlsSvg, controlsTxt]);

  return (
    <section id="homeAbout" ref={ref}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="aboutContent">
              <h1>О НАС</h1>
              <div className="border"></div>
              <div className="texts">
                <motion.div
                  className="aboutLoadingTxt"
                  initial={{ height: "100%" }}
                  animate={controlsTxt}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <p>
                  Добро пожаловать в ALUFAR — лидера в производстве и экструзии
                  алюминиевых конструкций, который объединяет инновации,
                  качество и стиль.
                </p>
                <p>
                  Мы специализируемся на создании высокотехнологичных
                  алюминиевых профилей и конструкций, которые находят применение
                  в самых разных сферах: от архитектуры и строительства до
                  промышленного производства и дизайна интерьеров. Благодаря
                  современному оборудованию и отлаженным технологическим
                  процессам, мы обеспечиваем точность, прочность и долговечность
                  каждой детали.
                </p>
                <p>
                  В основе нашей работы лежит стремление создавать не просто
                  конструкции, а решения, которые помогают нашим клиентам
                  реализовывать самые смелые проекты. Мы внимательно следим за
                  трендами и внедряем инновационные материалы и технологии,
                  чтобы каждый профиль соответствовал самым высоким стандартам
                  качества и экологичности.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="aboutImage">
              <motion.div
                className="aboutLoadingImage"
                initial={{ width: "100%" }}
                animate={controlsSvg}
                transition={{ duration: 1 }}
              />
              <HomeAboutSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
