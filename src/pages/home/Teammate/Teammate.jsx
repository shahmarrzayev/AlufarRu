import React from 'react'
import "./Teammate.scss"
import { teamData } from '../../../myDatas/MyData'
const Teammate = () => {
  return (
    <section id='teamMate'>
      <div className="container">
        <div className="d-flex gap-2 justify-content-between">
        {teamData?.map((person)=>(
            
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
      </div>
    </section>
  )
}

export default Teammate
