import React from "react";
import "./style.CardProject.scss";
import { FaExternalLinkAlt, FaGithub, FaPlus } from "react-icons/fa";
function CardProject({
  Name: ProjectName,
  Skills: SkillsList,
  id: Id,
  RepoLink: GitHubLink,
  AboutLink: AboutProject,
  TypeProject: StackUse,
  Description:Desc,
}) {
  return (
    <div className="CardProject">
      <div className="InitialCardContentSmall">
        <div className="HeaderMobileProjectCard">
          <div className="Info">
            <p className="Title">{ProjectName}</p>
            <p className="Stack">{StackUse}</p>
          </div>
          <div className="IconContent">
          {GitHubLink ? (
          <a href={GitHubLink} target="_blank">
            <FaGithub fontSize={25} color="#000"/>
          </a>
        ) : (
          ""
        )}
        {AboutProject ? (
          <a href={AboutProject} target="_blank">
            <FaExternalLinkAlt fontSize={25} color="#000" />
          </a>
        ) : (
          ""
        )}
          </div>
        </div>
        <div className="SkillsIcons">
          {SkillsList.map((e, indexSkil) => {
            return <img src={e} key={indexSkil} />;
          })}
        </div>
      </div>
      <div className="MoreInfoProject">
        <div className="HeaderProject">
          <div>
          <p className="Name">{ProjectName}</p>
          <p className="Type">{StackUse}</p>
          </div>
          <div className="LinksConteiner">
          {GitHubLink ? (
          <a href={GitHubLink} target="_blank">
            <FaGithub fontSize={25} color="#000"/>
          </a>
        ) : (
          ""
        )}
        {AboutProject ? (
          <a href={AboutProject} target="_blank">
            <FaExternalLinkAlt fontSize={25} color="#000" />
          </a>
        ) : (
          ""
        )}
          </div>
        </div>
        <p className="AboutProject">{Desc}</p>
      </div>
    </div>
  );
}

export default CardProject;
