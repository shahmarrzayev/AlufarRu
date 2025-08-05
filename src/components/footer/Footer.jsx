import { footerLogosData } from "../../myDatas/MyData";
import "./Footer.scss";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";
const Footer = () => {
      const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  return (
    <footer >
      <div className="container-fluid container-xxl">
        <div className="formContactInfo">
          <div className="infoDiv">
            <span className="boldtext">info@alufar.ru</span>
            <span className="text">АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">@alufar.aluminum</span>
            <span className="text">СОЦИАЛЬНЫЕ СЕТИ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">
             129090, г. Москва, вн. тер. г. Муниципальный округ Мещанский, ул. Гиляровского, д. 4, строение 5. 
            </span>
            <span className="text">РАСПОЛОЖЕНИЕ</span>
          </div>
          <div className="infoDiv">
            <span className="boldtext">
             +7 (499) 321-52-09 
            </span>
            <span className="text">КОНТАКТНЫЙ НОМЕР</span>
          </div>
        </div>
        <div className="footerLogo" ref={ref}>
          {footerLogosData.map((item, index) => {
            return (
              <motion.div
                key={item.id + isInView} 
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
