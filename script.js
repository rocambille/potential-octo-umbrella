function getValue() {
  let random = Math.floor(Math.random() * 2);
  console.log(random);
  if (random === 0) {
    alert("Vrai ! 	✅");
  } else alert("Faux ! ❌");
}

if (window.matchMedia("(min-width: 1024px)").matches) {
  document.querySelectorAll(".courses-details").forEach((coursesDetail) => {
    coursesDetail.setAttribute("open", "");
  });
}

let keyDownListener = null;

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("toggle", (event) => {
    if (event.target.open) {
      keyDownListener = ({ key }) => {
        if (key === "Escape") {
          event.target.open = false;
        }
      };

      window.addEventListener("keydown", keyDownListener);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", keyDownListener);
      keyDownListener = null;
      document.body.style.overflow = "initial";
    }
  });
});
