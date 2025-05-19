import React from "react";
import "./Banner.scss";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/bannerImage1.png";
import bannerLogo from "../../../assets/logos/logoGroup.png";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
          <motion.div
          className="bannerImg"
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
       <img src={bannerImg} alt="" />
    </motion.div>
          </div>
          <div className="col-lg-5">
            <div className="bannerContents">
              <div className="logo">
                <img src={bannerLogo} alt="" />
              </div>
              <h4>Мы поможем вам внедрить</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
