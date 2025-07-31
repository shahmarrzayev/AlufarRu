import React, { useRef } from "react";
import "./Banner.scss";
import { motion, useInView } from "framer-motion";
import bannerImg from "../../../assets/bannerImage11.png";
import bannerLogo from "../../../assets/logos/logoGroup.png";
const Banner = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1});

  return (
    <section id="banner" ref={ref}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <motion.div
              
              className="bannerImg"
              initial={{ x: -250, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -250, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={bannerImg} alt="" />
            </motion.div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="bannerContents">
              <div className="logo">
                <img src={bannerLogo} alt="" />
              </div>
              <h4>Формируем пространство.
                <br />
Двигаем границы.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
