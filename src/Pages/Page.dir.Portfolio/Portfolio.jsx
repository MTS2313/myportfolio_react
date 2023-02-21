import React from "react";
import "./style.portfolio.scss";
import { MdOutlineLink } from "react-icons/md";
import Projects from "../../assets/db/Portfolio/Card";
import CardProject from "../../Components/Portfolio/Card-Project/CardProject";
function Portfolio() {
  const SkillsArr = [
    {
      skill: "NodeJs",
      level: "1",
      Attime: 1.5,
    },
    {
      skill: "Python",
      level: "1",
      Attime: "1.5",
    },
    {
      skill: "Express Js",
      level: "2",
      Attime: "1",
    },
    {
      skill: "ReactJs",
      level: "3",
      Attime: "1.5",
    },
  ];
  return (
    <div className="PortfolioPageContent">
      <div className="HeaderContent">
        <h2 className="TitleH3">Programador - Front-End</h2>
      </div>
      <div className="AboutMeContent">
        <div className="ListContent">
          <ul>
            <li>Whatsapp : (38) 9 9927 7360</li>
            <li>
              <a
                href="mailto:dev.mailsystem.com@gmail.com"
                class="LinkaContent"
              >
                <MdOutlineLink fontSize={20} />
                dev.mailsystem.com@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mateus-pereira-santana-da-silva-742730210/"
                class="LinkaContent"
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
                class="LinkaContent"
              >
                <MdOutlineLink fontSize={20} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="TableContent">
          <table>
            <tr className="StyleHeadTab">
              <td>Habilidade</td>
              <td>Nivel</td>
              <td>Tempo de Uso/Estudo(Em Anos)</td>
            </tr>
            {SkillsArr.map((i) => {
              return (
                <tr className="SkillCel">
                  <td>{i.skill}</td>
                  <td>{i.level}</td>
                  <td>{i.Attime}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="DescContent">
          <p class="aboutMeDesc">
            Apaixonado por tecnologia sempre fui muito curioso sobre tudo
            relacionado a área. Quando adentrei ao ensino médio tive de fato um
            início no mundo da programação aonde iniciei os fundamentos para o
            desenvolvimento web e comecei a praticar hoje fazendo faculdade de
            análise e desenvolvimento de sistemas e praticando em meus projetos
            e também em projetos (open-source) presentes no GitHub por exemplo,
            já tenho um conhecimento avançado em programação em geral e estou me
            especializando no desenvolvimento web sonho em um dia trabalhar com
            desenvolvimento de games porem esse caminho e grande e devo me
            aprofundar bem em tudo com isso venho diariamente estudando para
            estar entre os melhores desenvolvedores do mercado.
          </p>
        </div>
      </div>
      <div className="ProjectsContent">
        {
          Projects.map((e,Cardindex)=>{
            return <CardProject Name={e.Name} ProjectsArr={e.SkillsIcons}  key={`Card${Cardindex}`} id={Cardindex}/>
          })
        }
      </div>
    </div>
  );
}

export default Portfolio;
