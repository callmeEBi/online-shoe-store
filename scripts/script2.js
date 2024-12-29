let $ = document;
let allShoes = [
  { id: 1, name: "sport", imagePath: "./images/1.png", price: 11 },
  { id: 2, name: "buffalo", imagePath: "./images/2.png", price: 37 },
  { id: 3, name: "field", imagePath: "./images/3.png", price: 22 },
];
let productName = $.querySelector(".name");
let productImage = $.querySelector(".special_container__right img");
let priceNumber = $.querySelector(".price_box__number");

let takenParams = new URLSearchParams(location.search).get("id");

if (takenParams) {
  let currentProduct = allShoes.find(function (item) {
    return item.id == takenParams;
  });
  if (currentProduct) {
    productName.innerHTML = currentProduct.name;
    productImage.src = currentProduct.imagePath;
    priceNumber.innerHTML = currentProduct.price;
  } else {
    window.location.href = "./index.html";
  }
} else {
  window.location.href = "./index.html";
}
