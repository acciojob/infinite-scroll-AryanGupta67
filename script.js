const list = document.getElementById("infinite-list");

let itemCount = 0;

// Function to create and append list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  // Check if the user is near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2); // Add 2 more items
  }
});



