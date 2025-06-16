import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accardionData } from "../../../myDatas/MyData";
import playIcon from "../../../assets/logos/playIcon.png";
import "./HomeAccardion.scss";

const HomeAccardion = () => {
  const [openId, setOpenId] = useState(1);
  const currentItem = accardionData.find((item) => item.id === openId);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="accardion">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 p-0">
            <AnimatePresence mode="wait">
              {currentItem && (
                <motion.img
                  key={currentItem.id}
                  src={currentItem.img}
                  alt={currentItem.title}
                  className="accordionImage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="col-lg-7 col-12 p-0">
            {accardionData?.map((item) => (
              <div key={item.id} className="accordionItem">
                <div
                  className="accordionHeader"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span><img className="miniLogo" src={playIcon} alt="" /> {item.title}</span>
                  {/* <span>{openId === item.id ? "−" : "+"}</span> */}
                </div>

                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.div
                      className="accordion-content"
                      initial={{ maxHeight: 0 }}
                      animate={{ maxHeight: 500 }}
                      exit={{ maxHeight: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div>{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default HomeAccardion;
