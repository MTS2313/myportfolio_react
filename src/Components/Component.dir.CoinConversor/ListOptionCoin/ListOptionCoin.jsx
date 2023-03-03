import React from "react";
import orderCoins from "../../../assets/db/CoinConv/CoinsName";
import "./style.listoption.coin.scss"
function ListOptionCoin({IdSelect}) {
  
  return (
      <select name="CoinBase" id={IdSelect} className="ListOption">
        {
          orderCoins.map((i,index)=>{
             return <option className="OptionCoin" value={i} label={i} key={index}/>
          })
        }
      </select>
  );
}

export default ListOptionCoin;
