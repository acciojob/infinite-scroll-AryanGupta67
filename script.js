const list = document.getElementById("infi-list");

let itemCount = 0;

// Add list items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initially add 2 items as per the test case
addItems(2);

// Detect when user scrolls to the bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2); // Add 2 more items
  }
});



