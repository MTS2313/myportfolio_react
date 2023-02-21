import React from "react";
import "./style.CardProject.scss";
import { MdNavigateNext } from "react-icons/md";
function CardProject({ Name, ProjectsArr, id }) {
  function GetCard(e) {
    let CardState = false
    document.getElementById(`IdBtnOpenCard${id}`).classList.toggle("CardTrue");
    document.getElementById(`MainCardID${id}`).classList.toggle("CardTrue");
  }
  return (
    <div className="CardProject">
      <div className='InitialCardContentSmall' id={`MainCardID${id}`}>
        <div className="TitleContent">
          <p>{Name}</p>
        </div>
        <div className="SkillsIcons">
          {ProjectsArr.map((e, indexSkil) => {
            return <img src={e} key={indexSkil} />;
          })}
        </div>
      </div>
      <div className="HoverEffectContent" id={`IdBtnOpenCard${id}`}>
        <div className="CardDesc" >
          <div className="BodyCard">
            sad
          </div>
        </div>
        <button className="MoreContent" onClick={() => GetCard(id)}>
          <MdNavigateNext fontSize={30}/>
        </button>
      </div>
    </div>
  );
}

export default CardProject;
