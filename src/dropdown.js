function drawDropdown() {
  const button = document.querySelector(".container");
  const items = document.querySelector(".items");
  button.addEventListener("click", () => {
    transform(button, items);
  });
}

function transform(button, items) {
  button.classList.toggle("change");
  items.classList.toggle("invisible");
}

export default drawDropdown;
