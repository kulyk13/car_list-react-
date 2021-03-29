export default function MesonryButtons() {
  masonryBtnsEl &&
    masonryBtnsEl.addEventListener("click", (event) => {
      const btnEl = event.target.closest(".btn-change");
      if (btnEl) {
        let action = btnEl.dataset.action;
        if (action == "1") {
          cardListEl.classList.add("row-cols-1");
          cardListEl.classList.remove("row-cols-2");
        } else if (action == "2") {
          cardListEl.classList.add("row-cols-2");
          cardListEl.classList.remove("row-cols-1");
        }

        findSiblings(btnEl).forEach((btn) => {
          btn.classList.remove("btn-success");
          btn.classList.add("btn-secondary");
        });
        btnEl.classList.remove("btn-secondary");
        btnEl.classList.add("btn-success");
      }
    });
  return (
    <div class="change-view col-1" id="masonryBtns">
      <button data-action="1" type="button" class="btn-change btn-success btn">
        <i class="fas fa-bars"></i>
      </button>
      <button
        data-action="2"
        type="button"
        class="btn-change btn btn-secondary"
      >
        <i class="fas fa-border-all"></i>
      </button>
    </div>
  );
}

function findSiblings(DOMelement) {
  return [...DOMelement.parentElement.children].filter(
    (el) => el != DOMelement
  );
}
