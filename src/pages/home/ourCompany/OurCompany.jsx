import React, { useState, useEffect, useRef } from "react";
import "./OurCompany.scss";
import OurCompanyVideo from "../../../assets/videos/HomeVideo.mp4";
import { motion, AnimatePresence } from "framer-motion";

const OurCompany = () => {
  const [overlayActive, setOverlayActive] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOverlayActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="OurCompany" ref={sectionRef}>
      <div className="container"></div>
      <video loop autoPlay muted src={OurCompanyVideo}></video>

      <AnimatePresence>
        {overlayActive && (
          <motion.div
            className="overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="overlayText">
              <h3>Наше производство</h3>
              <p>
                Производственное здание:
                10.600 м2
                <br />
                Складская зона:
                3.800 м2
                <br />
                Офисное здание:
                3.100 м2
                <br />
                Шоурум:
                756 м2
                <br />

                Общая площадь:
                35.500 м2
              </p>
              <button onClick={() => setOverlayActive(false)}>см. полностью</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurCompany;
