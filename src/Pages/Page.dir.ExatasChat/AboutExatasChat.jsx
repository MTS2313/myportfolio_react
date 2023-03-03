import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./style.aboutexataschat.scss";
import ExImagesV from "../../assets/images/screns_exataschat/exchat_control";
import Footer from "../../Components/Footer/Footer";
function AboutExatasChat() {
  const [imageOpen, setimageOpen] = useState();
  const [HandleImage, setHandleImage] = useState(false);
  function ExitImageFunc(i) {
    if (i.target.id == "ImageOpenConteiner") {
      document.getElementById("ImageOpenConteiner").classList.toggle("true");
      setimageOpen();
    }
  }
  function OpenImageFunc(id) {
    document.getElementById("ImageOpenConteiner").classList.toggle("true");
    setimageOpen(ExImagesV[id.target.id].image);
  }
  return (
    <div className="AboutExatasChat" id="IdBodyAboutExChat">
      <Header TitleHeader="Exatas Chat" />
      <div className="Body">
        <div className="AboutContent">
          <h3 id="Objetivo">Objetivo</h3>
          <p>
            Este projeto tem como objetivo melhorar a eficiência e o controle
            das empresas que oferecem serviços de assistência técnica,
            fornecendo uma interface rápida e simples. O projeto permitirá
            redirecionar todas as chamadas do WhatsApp para um ou vários
            funcionários e também permitirá dividir em setores para fornecer um
            atendimento de excelência.
            <br />
            <br />
            Com esta plataforma, as empresas poderão gerenciar facilmente as
            chamadas de seus clientes, respondendo prontamente a todas as suas
            necessidades de assistência técnica. Além disso, a divisão por
            setores pode ajudar a direcionar o cliente para o funcionário mais
            adequado para solucionar seu problema.
            <br />
            <br />
            A plataforma é fácil de usar e garante que as chamadas dos clientes
            sejam gerenciadas de forma eficiente e organizada, tornando o
            atendimento ao cliente mais rápido e eficaz. Acreditamos que essa
            solução trará inúmeros benefícios para empresas que desejam oferecer
            um atendimento de qualidade e melhorar a satisfação de seus
            clientes.
            <br />
            <br />
          </p>
          <div className="line"></div>
          <h3 id="Wchat">Porque um chat</h3>
          <p>
            Os chats se tornaram uma ferramenta cada vez mais importante no
            mundo empresarial. Com a crescente demanda por um atendimento rápido
            e eficiente, muitas empresas estão investindo em chats para melhorar
            a comunicação com seus clientes e oferecer um serviço de qualidade.
            <br />
            <br />
            Um chat pode ser uma excelente ferramenta para fornecer suporte ao
            cliente em tempo real, fornecer informações importantes sobre
            produtos ou serviços e até mesmo para vender produtos diretamente
            aos clientes. Além disso, um chat pode melhorar a eficiência do
            atendimento ao cliente, reduzir o tempo de espera e aumentar a
            satisfação do cliente.
            <br />
            <br />
            Uma das principais vantagens de um chat é a possibilidade de
            oferecer um atendimento personalizado e direcionado. Os chats
            permitem que as empresas gerenciem várias conversas ao mesmo tempo e
            forneçam soluções personalizadas para cada cliente. Dessa forma, as
            empresas podem se concentrar nas necessidades individuais de cada
            cliente, o que pode aumentar a lealdade e a satisfação do cliente.
            <br />
            <br />
            Além disso, os chats podem ser integrados a sistemas de
            gerenciamento de relacionamento com o cliente (CRM) ou sistemas de
            gerenciamento de suporte (helpdesk). Essa integração permite que as
            empresas gerenciem facilmente as interações com os clientes e
            forneçam uma experiência de suporte ao cliente ainda mais
            personalizada.
            <br />
            <br />
            Em resumo, a implementação de um chat pode ser uma excelente maneira
            de melhorar o atendimento ao cliente, fornecer suporte em tempo real
            e fornecer informações importantes aos clientes. Com a crescente
            demanda por um atendimento mais eficiente, é importante que as
            empresas invistam em ferramentas como o chat para melhorar sua
            comunicação com seus clientes e manter sua competitividade no
            mercado.
          </p>
          <div className="line"></div>
          <h3 id="Screenshot">Screenshot</h3>
          <div className="ScreenshotsConteiner">
            {ExImagesV.map((e, index) => {
              return <div key={index}>
                <h4>{e.name}</h4>
                <img
                  src={e.image}
                  id={index}
                  onClick={(index) => {
                    OpenImageFunc(index);
                  }}
                />
              </div>;
            })}
          </div>
        </div>
        <div className="NotesContent">
          <div className="Title"></div>
        </div>
      </div>
      <div
        className="ImageOpen"
        id="ImageOpenConteiner"
        onClick={ExitImageFunc}
      >
        <img src={imageOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default AboutExatasChat;
