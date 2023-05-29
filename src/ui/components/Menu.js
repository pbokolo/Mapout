import React from "react";

export default function Menu() {
  return (
    <div className="menu">
      <input type="checkbox" className="menu__chk" id="menu__chk" />
      <label labelfor="menu__chk" className="menu__chk-lbl">
        <span className="menu__icon"></span>
      </label>
      <div className="menu__content"></div>
    </div>
  );
}
