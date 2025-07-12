const list = document.getElementById("infi-list"); // fixed id
let itemCount = 0;

function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addListItems(10);

// Scroll Event
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addListItems(2);
  }
});



