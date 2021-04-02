import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../../data/DataContext";

export default function MasonryButtons() {
  const {setView} = useContext(DataContext);
  const [btnView, setBtnView] = useState('1')

  useEffect(() => {
    setView(`row-cols-${btnView}`);
  }, [btnView])

  return (
    <div className="change-view col-1" id="masonryBtns">
      <button
        onClick={() => setBtnView('1')}
        type="button"
        className={"btn-change btn " + (btnView == 1 ? "btn-success": "btn-secondary")}
      >
        <i>
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </i>
      </button>
      <button
        onClick={() => setBtnView('2')}
        type="button"
        className={"btn-change btn " + (btnView == 2 ? "btn-success": "btn-secondary")}
      >
        <i>
          <FontAwesomeIcon icon={["fas", "border-all"]} />
        </i>
      </button>
    </div>
  );
}

function findSiblings(DOMelement) {
  return [...DOMelement.parentElement.children].filter(
    (el) => el !== DOMelement
  );
}
