import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./style.mobilemenu.scss";
function MobileMenu({ LinksMenu }) {
  const [MenuState, setMenuState] = useState(false);
  function HandleMenu() {
    let MenuStateSc = MenuState;
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
            const key = e.id; 
            return e.isGrup ? (
              <div key={key}>
                <span>{e.name}</span>
                {e.links && (
                  <ul>
                    {e.links.map((link) => {
                      const linkKey = link.id;
                      return (
                        <li  value={link.name}>
                          <a key={linkKey} href={link.link}>{link.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ) : (
              <a href={e.link} key={key}>
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
