function drawDropdown() {
  const buttons = document.querySelectorAll(".drop-btn");

  buttons.forEach((button) => {
    const items = button.nextElementSibling;
    button.addEventListener("click", (e) => {
      console.log(e.currentTarget);
      transform(button, items); //use this and maybe a class
    });
  });
}

function transform(button, items) {
  button.classList.toggle("change");
  items.classList.toggle("invisible");
  items.classList.toggle("visible");
}

export default drawDropdown;
