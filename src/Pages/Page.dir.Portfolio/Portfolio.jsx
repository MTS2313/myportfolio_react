import React from "react";
import "./style.portfolio.scss";
import { MdOutlineLink } from "react-icons/md";
import Projects from "../../assets/db/Portfolio/Card";
import CardProject from "../../Components/Portfolio/Card-Project/CardProject";
import Header from "../../Components/Header/Header";
function Portfolio() {
  const SkillsArr = [
    {
      skill: "NodeJs",
    },
    {
      skill: "Python",
    },
    {
      skill: "Express Js",
    },
    {
      skill: "ReactJs",
    },
    {
      skill: "Sass",
    },
  ];
  return (
    <div className="PortfolioPageContent">
      <Header TitleHeader="Desenvolvedor Front-End" />
      <div className="AboutMeContent">
        <div className="ListContent">
          <ul>
            <li>Whatsapp : (38) 9 9927 7360</li>
            <li>
              <a
                href="mailto:dev.mailsystem.com@gmail.com"
                className="LinkaContent"
              >
                <MdOutlineLink fontSize={20} />
                dev.mailsystem.com@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mateus-pereira-santana-da-silva-742730210/"
                className="LinkaContent"
              >
                <MdOutlineLink fontSize={20} />
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MTS2313"
                target="_blank"
                rel="noopener noreferrer"
                className="LinkaContent"
              >
                <MdOutlineLink fontSize={20} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="TableContent">
          <table>
            <tbody>
              <tr className="StyleHeadTab">
                <td>Habilidade</td>
              </tr>
              {SkillsArr.map((i, index) => {
                return (
                  <tr className="SkillCel" key={index}>
                    <td>{i.skill}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="DescContent">
          <p className="aboutMeDesc">
            Sou apaixonado por tecnologia e extremamente curioso sobre tudo
            relacionado a essa área. Desde que entrei no ensino médio, comecei a
            me interessar pelo mundo da programação, onde aprendi os fundamentos
            do desenvolvimento web e comecei a praticar. Agora estou cursando
            Análise e Desenvolvimento de Sistemas e continuo desenvolvendo
            projetos pessoais, bem como contribuindo para projetos de código
            aberto no GitHub.
            <br />
            <br />
            Com meu amplo conhecimento em programação em geral e especialização
            em desenvolvimento web, estou me esforçando para estar entre os
            melhores desenvolvedores do mercado. Meu sonho é trabalhar com
            desenvolvimento de jogos, mas reconheço que este é um caminho
            desafiador que requer um estudo aprofundado. Por isso, dedico meu
            tempo diariamente para estudar e me aprimorar, e tenho certeza de
            que alcançarei meus objetivos profissionais.
          </p>
        </div>
      </div>
      <div className="ProjectsContent" id="Projects">
        {Projects.map((e, Cardindex) => {
          return (
            <CardProject
              Name={e.Name}
              Skills={e.SkillsIcons}
              key={`Card${Cardindex}`}
              id={Cardindex}
              RepoLink={e.Link}
              AboutLink={e.AboutPage}
              Description={e.Description}
              TypeProject={e.Stack}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
