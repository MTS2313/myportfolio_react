import React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./style.header.scss";
function Header({
  TitleHeader,
}) {
  let ToolsList = [
    {
      name: "Em Desenvolvimento",
      link: "#",
    },
    {
      name: "Em Desenvolvimento",
      link: "#",
    },
    {
      name: "Em Desenvolvimento",
      link: "#",
    },
  ];
  const HeaderLinks = [
    {
      name: "Home",
      isGrup: false,
      link: "/",
    },
    {
      name: "Ferramentas",
      isGrup: true,
      links: [
        {
          name: "Em Desenvolvimento",
          link: "#",
        },
        {
          name: "Em Desenvolvimento",
          link: "#",
        },
      ],
    },
  ];
  return (
    <header>
      <div className="TitleContent">
        <h2>{TitleHeader}</h2>
      </div>
      <div className="MobileMenuConteiner">
        <MobileMenu LinksMenu={HeaderLinks}/>
      </div>
      <nav className="PageLinks">
        <ul>
          <li>
            <a href="/">
              <p>Home</p>
            </a>
          </li>
          <li className="DropdawnLi">
            <div className="DropdawnConteiner">
              <button className="DropdawnOpen">Ferramentas</button>
              <ul className="LinkList">
                {HeaderLinks[1].links.map((i,index) => {
                  return (
                    <a href={i.link} className="LinkTool" key={index}>
                      <li className="ToolItem">{i.name}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
