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
              <h3>Наша компания</h3>
              <p>
                Наша компания — это команда профессионалов, работающих над тем,
                чтобы сделать процесс строительства проще и удобнее.
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
