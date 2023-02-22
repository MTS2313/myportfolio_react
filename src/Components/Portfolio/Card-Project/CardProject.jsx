import React from "react";
import "./style.CardProject.scss";
import { MdNavigateNext } from "react-icons/md";
import { FaGithub, FaLink, FaPlus } from "react-icons/fa";
function CardProject({ Name, ProjectsArr, id, GitLink, AboutLink }) {
  function GetCard(e) {
    let CardState = false;
    document.getElementById(`IdBtnOpenCard${id}`).classList.toggle("CardTrue");
    document.getElementById(`MainCardID${id}`).classList.toggle("CardTrue");
  }
  return (
    <div className="CardProject">
      <div className="InitialCardContentSmall" id={`MainCardID${id}`}>
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
        <div className="CardDesc">
          <div className="BodyCard">Em Desenvolvimento...</div>
        </div>
        <button className="MoreContent" onClick={() => GetCard(id)}>
          <MdNavigateNext fontSize={30} />
        </button>
      </div>
      <div className="MobileIconsContent">
        {GitLink ? (
          <a href={GitLink} target="_blank">
            <FaGithub fontSize={30}/>
          </a>
        ) : (
          ""
        )}
        {AboutLink ? (
          <a href={AboutLink} target="_blank">
            <FaPlus fontSize={30}/>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardProject;
