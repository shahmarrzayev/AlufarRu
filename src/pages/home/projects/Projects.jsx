import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import {motion, useAnimation, useInView } from "framer-motion";
import { projects } from "../../../myDatas/MyData";
const Projects = () => {
  const controlsTxt = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controlsTxt.start({ height: 0 });
    } else {
      controlsTxt.set({ height: "100%" });
    }
  }, [isInView, controlsTxt]);
  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="projectsHeaders">
              <motion.div
                className="aboutLoadingTxt"
                initial={{ height: "100%" }}
                animate={controlsTxt}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <h2>Более 250 завершенных проектов</h2>
              {/* <div className="border"></div> */}
              {/* <p>
                Проектирование и строительство автосалонов требует особого
                опыта. Наша команда знакома со стандартами и техническими
                требованиями, характерными для данной отрасли.{" "}
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="projectsBoxs">
            {projects?.map((projects,idx)=>(
                <div key={idx} className="projectCard">
                    <div className="cardImage">
                        <img src={projects.image} alt="" />
                    </div>
                    <div className="cardContent">
                        <h4>{projects.name}</h4>
                        <p>{projects.desc}</p>
                        <p>Расположение:{projects.location}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
