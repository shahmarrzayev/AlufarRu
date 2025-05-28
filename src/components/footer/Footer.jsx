import { footerLogosData } from "../../myDatas/MyData";
import "./Footer.scss";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";
const Footer = () => {
      const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  return (
    <footer ref={ref}>
      <div className="container-fluid container-xxl">
        <div className="formContactInfo">
          <div className="infoDiv">
            <span className="boldtext">info@alufar.az</span>
            <span className="text">АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">info@alufar.az</span>
            <span className="text">СОЦИАЛЬНЫЕ СЕТИ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">
              129090, г Москва, вн.тер.г муниципальный округ Мещанский, ул
              Гиляровского, 4 / строение 5
            </span>
            <span className="text">РАСПОЛОЖЕНИЕ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">
              +90 216 504 31 43 <br />
              +90 533 708 35 55
            </span>
            <span className="text">КОНТАКТНЫЙ НОМЕР</span>
          </div>
        </div>
        <div className="footerLogo">
          {footerLogosData.map((item, index) => {
            return (
              <motion.div
                key={item.id + isInView} // burda `key` dəyişir hər görünəndə
                className="logoDiv"
                initial={{ y: -250, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <img className={`logoLetters ${item.id === 7 ? "miniImage" :""}`} src={item.logo} alt="" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
