let $ = document;
let container = $.querySelector(".container");

let allShoes = [
  { id: 1, name: "sport", imagePath: "./images/1.png", price: 11 },
  { id: 2, name: "buffalo", imagePath: "./images/2.png", price: 37 },
  { id: 3, name: "field", imagePath: "./images/3.png", price: 22 },
];

for (let i of allShoes) {
  container.insertAdjacentHTML(
    "beforeend",
    `<a href="product.html?id=${i.id}" class="card">
      <img src=${i.imagePath} alt="" />
      <div class="popup">
        <h1>${i.name}</h1>
        <p class="price">
          $ <span class="price__number">${i.price}</span>
        </p>
      </div>
    </a>`
  );
}
