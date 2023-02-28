import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./style.mobilemenu.scss";
function MobileMenu({ LinksMenu }) {
  const [MenuState, setMenuState] = useState(false);
  function HandleMenu() {
    let MenuStateSc = MenuState;
    console.log(MenuStateSc);
    setMenuState(!MenuStateSc);
  }
  return (
    <>
      <button className="OpenMenuContent" onClick={HandleMenu}>
        <MdMenu size={25} />
      </button>
      <div className={`MenuConteinerMobile ${MenuState ? "true" : "false  "}`}>
        <div className="CloseContent" onClick={HandleMenu}></div>
        <div className="Menu">
          {LinksMenu.map((e) => {
            return e.isGrup ? (
              <optgroup label={e.name}>
                {e.links.map((e) => {
                  return (
                    <option>
                      <option>
                        <a href={e.link}>{e.name}</a>
                      </option>
                    </option>
                  );
                })}
              </optgroup>
            ) : (
              <a href={e.link}>{e.name}</a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
