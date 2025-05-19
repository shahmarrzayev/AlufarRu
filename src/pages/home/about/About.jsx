import React from 'react'
import "./About.scss"
import HomeAboutSvg from '../../../assets/svg/HomeAboutSvg'
const About = () => {
  return (
    <section id='homeAbout'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="aboutContent">
              <h1>О НАС</h1>
              <div className="border"></div>
              <p>Компания «Alufar» была создана в Азербайджане в 2018 году</p>
              <p>Мы специализируемся на производстве и продаже алюминиевых промышленных и мебельных профилей, мебельной фурнитуры и алюминиевых фасадных систем.</p>
              <p>Наша компания — это команда профессионалов, работающих над тем, чтобы сделать процесс строительства проще и удобнее.</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="aboutImage">
              <HomeAboutSvg/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About