const list = document.getElementById("infinite-list");
let itemCount = 0;

// Function to add list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addListItems(10);

// Scroll Event Listener
window.addEventListener("scroll", () => {
  // Check if scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addListItems(2); // Add 2 more items
  }
});


