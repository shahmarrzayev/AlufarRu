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
                 
                  </p>

                <p>

                 ALUFAR – одни из лучших в производстве и экструзии алюминиевых профилей,
которые сочетают в себе инновации, качество и стиль. На сегодняшний день это динамично развивающаяся компания с высоким производственным и интеллектуальным потенциалом.
                </p>
                <p>
                Наши преимущества </p>
                <p>

Разумная цена
Наша компания предлагает вам высококачественную продукцию и услуги по разумным ценам.
                </p>
<p>

Высокое качество
Продукция компании ALUFAR проходит многократные проверки качества на производстве.
</p>
<p>

Техническая поддержка
Наша компания предоставляет своим покупателям техническое сопровождение, а также предлагает помощь специалистов при сборке профилей.
</p>

              
                <p> Высокое качество
                  Продукция компании ALUFAR проходит многократные проверки качества на производстве.

                  Техническая поддержка
                  Наша компания предоставляет своим покупателям техническое сопровождение, а также предлагает помощь специалистов при сборке профилей.
               
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
