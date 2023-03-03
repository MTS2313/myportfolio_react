import expressjs from "../../svg/expressjs.svg";
import mysql from "../../svg/mysql.svg";
import nodejs from "../../svg/node-js.svg";
import reactjs from "../../svg/react.svg";
import sass from "../../svg/sass.svg";
import javascript from "../../svg/javascript.svg";
import jwt from "../../svg/jwt.svg";
import html from "../../svg/html.svg";
import mui from "../../svg/mui-icon.svg";
const Projects = [
  {
    Name: "To-Do Api",
    Stack: "Back-End",
    SkillsIcons: [expressjs, nodejs, jwt],
    Link: "https://github.com/MTS2313/BlockNote_api",
    Description:
      "O objetivo deste projeto foi criar uma API REST para controlar um bloco de notas pessoal, utilizando o framework Express.js. Para o banco de dados, utilizei um banco de dados relacional (MySQL) e segui o modelo MVC comum em WEB APIs. Durante o desenvolvimento, adquiri conhecimento sobre o sistema de autenticação usando JWT e a importância de uma configuração adequada do CORS. Essa foi a minha primeira API.",
  },
  {
    Name: "Exatas-Chat",
    Stack: "Front-End",
    SkillsIcons: [reactjs, sass, mui],
    AboutPage: "#/exataschat",
    Description:
      "Este projeto tem como objetivo melhorar a eficiência e o controle das empresas que oferecem serviços de assistência técnica, fornecendo uma interface rápida e simples. O projeto permitirá redirecionar todas as conversas do WhatsApp para um ou vários funcionários e também permitirá dividir em setores para fornecer um atendimento de excelência.",
  },
];

export default Projects;
