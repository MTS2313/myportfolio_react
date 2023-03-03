import React, { useState } from "react";
import ListOptionCoin from "../../Components/Component.dir.CoinConversor/ListOptionCoin/ListOptionCoin";
import Header from "../../Components/Header/Header";
import "./style.coinconversor.scss";
import { BiTransfer } from "react-icons/bi"
function CoinConversor() {
  const [ResultConversion, setResultConversion] = useState();
  function StartConversion(e) {
    e.preventDefault();
    const CoinsSelect =
    document.getElementById("IdCoinsSelect").selectedOptions[0].value;
    const ResultGetCoin = GetResult(CoinsSelect);
  
  }
async  function GetResult(CoinSelect) {
    let GetData;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
let ObjetoGETConv
await fetch(
      `https://economia.awesomeapi.com.br/json/${CoinSelect}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result)).then((objConv)=> ObjetoGETConv = objConv)
      .catch((error) => console.log("error", error));
    setResult(ObjetoGETConv)
  }
  function setResult(data){
    let CoinValue = data[0].low
    const InputQntConv = document.getElementById("qntPrimaryCoin").value;
    let parsedInput = parseFloat(InputQntConv.replace(",", "."));
    const isNumeric = /^[\d.,]+$/.test(InputQntConv);
    const isPositive = parsedInput > -1; 
    if (!isNumeric) {
      alert("Apenas numeros")
      document.getElementById("qntPrimaryCoin").value = "";
    } else if (!isPositive) {
      alert("Apenas Numeros Positivos")
      document.getElementById("qntPrimaryCoin").value = "";
    } else if(parsedInput == 0) {
      setResultConversion(0)
    }else{
      setResultConversion((CoinValue * parsedInput).toFixed(2));
    }
  }  
  return (
    <div className="CoinConversorBody">
      <Header TitleHeader="Conversor de Moedas" />
      <div className="ToolArea">
        <form id="IdFormConversorCoin" className="FormConversor">
          <ListOptionCoin IdSelect="IdCoinsSelect" />
          <input type="text" id="qntPrimaryCoin" className="InputValueCoinN" />
          <input id="IdResult" value={ResultConversion} disabled className="ResultContent"/>
          <button type="submit" className="ButtonConversionStart" onClick={(e) => StartConversion(e)}>
            <BiTransfer size={26}/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CoinConversor;
