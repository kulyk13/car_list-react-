import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MasonryButtons() {
  const [view, setView] = useState("row-cols-1");
  useEffect(() => {
    console.log(view);
  }, [view]);
  function changeView(e) {
    setView("row-cols-1");
    const btnEl = e.target.closest(".btn-change");
    if (btnEl) {
      let action = btnEl.dataset.action;
      if (action === "1") {
        setView("row-cols-1");
      } else if (action === "2") {
        setView("row-cols-2");
      }
      findSiblings(btnEl).forEach((btn) => {
        btn.classList.remove("btn-success");
        btn.classList.add("btn-secondary");
      });
      btnEl.classList.remove("btn-secondary");
      btnEl.classList.add("btn-success");
    }
  }

  return (
    <div className="change-view col-1" id="masonryBtns">
      <button
        onClick={changeView}
        data-action="1"
        type="button"
        className="btn-change btn-success btn"
      >
        <i>
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </i>
      </button>
      <button
        onClick={changeView}
        data-action="2"
        type="button"
        className="btn-change btn btn-secondary"
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
