import React from "react";
import "./Teammate.scss";
import { teamData } from "../../../myDatas/MyData";
const Teammate = () => {
  return (
    <section id="teamMate">
      <div className="container">

        <div className="box">
          {teamData?.map((person) => (
            <div className="teamCard" key={person.id}>
              <div className="cardImage">
                <img src={person.image} alt="" />
              </div>
              <div className="cardContent">
                <span>{person.name}</span>
                <span>{person.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="teamInfo pt-5">
            <h3 className="teamHeader">
              Команда и лидерство
            </h3>
            <p className="teamParagraph">
              Нас более 120 человек со всего мира, движимых смелыми идеями и разнообразными перспективами. Мастерство, сервис и эффективность движут нас вперед, и мы рассматриваем наше агентство как место, где сталкиваются наши общие ценности.
            </p>
        </div>
        
      </div>
    </section>
  );
};

export default Teammate;
