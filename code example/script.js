let cartCount = 0;

const countText = document.getElementById("count");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    cartCount += 1;
    countText.textContent = `Items: ${cartCount}`;
});