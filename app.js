// slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    navText: ["", ""],
  });
});

// menu

const products = [
  // ================= ПИРОГИ СЫТНЫЕ =================
  {
    id: 1,
    name: "С ветчиной и сыром",
    price: 1720,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 2,
    name: "С капустой",
    price: 1160,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 3,
    name: "Деревенский с мясом",
    price: 1760,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 4,
    name: "Пирог с тунцом",
    price: 1840,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 5,
    name: "Пирог Хачапури 1кг",
    price: 1880,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 6,
    name: "Пирог со щечками и овощами",
    price: 2480,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 7,
    name: "Пирог 4 сыра HIT",
    price: 1960,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 8,
    name: "Пирог Жюльен с грибами",
    price: 2160,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 9,
    name: "Пирог Филадельфия",
    price: 2360,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 10,
    name: "Мясная кулебяка",
    price: 2240,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 11,
    name: "Со шпинатом и брынзой",
    price: 1680,
    weight: 1,
    category: "savory-pies",
  },
  { id: 12, name: "С семгой", price: 2960, weight: 1, category: "savory-pies" },
  {
    id: 13,
    name: "Курник с грибами",
    price: 1920,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 14,
    name: "С индейкой и грибами",
    price: 2040,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 15,
    name: "С курицей и картофелем",
    price: 1640,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 16,
    name: "С картофелем и грибами",
    price: 1480,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 17,
    name: "С курицей и овощами",
    price: 1920,
    weight: 1,
    category: "savory-pies",
  },
  {
    id: 18,
    name: "С мясом и шпинатом",
    price: 1920,
    weight: 1,
    category: "savory-pies",
  },

  // ================= АССОРТИ =================
  {
    id: 19,
    name: "Домашний сет Хит 1.5кг",
    price: 2880,
    weight: 1.5,
    category: "assorted",
  },
  {
    id: 20,
    name: "Офисный сет на 12 чел",
    price: 12380,
    weight: 3,
    category: "assorted",
  },
  {
    id: 21,
    name: "Офисный сет на 20 чел",
    price: 19640,
    weight: 5,
    category: "assorted",
  },

  // ================= СЛАДКИЕ ПИРОГИ =================
  { id: 22, name: "С вишней", price: 1640, weight: 1, category: "sweet-pies" },
  {
    id: 23,
    name: "С яблоком и корицей",
    price: 1160,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 24,
    name: "С брусникой",
    price: 1640,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 25,
    name: "С яблоком и брусникой",
    price: 1480,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 26,
    name: "Ягодное ассорти",
    price: 1640,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 27,
    name: "Маковый рулет",
    price: 1640,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 28,
    name: "С апельсином и лимоном",
    price: 1480,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 29,
    name: "С творогом",
    price: 1480,
    weight: 1,
    category: "sweet-pies",
  },
  { id: 30, name: "С малиной", price: 1720, weight: 1, category: "sweet-pies" },
  {
    id: 31,
    name: "С черной смородиной",
    price: 1640,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 32,
    name: "С клубникой",
    price: 1360,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 33,
    name: "С черникой",
    price: 1640,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 34,
    name: "С черникой и маскарпоне",
    price: 1760,
    weight: 1,
    category: "sweet-pies",
  },
  {
    id: 35,
    name: "Пирог Сердце 1.5кг",
    price: 2960,
    weight: 1.5,
    category: "sweet-pies",
  },
  { id: 36, name: "Со сливой", price: 1440, weight: 1, category: "sweet-pies" },

  // ================= МОРСЫ =================
  {
    id: 60,
    name: "Облепиховый морс",
    price: 690,
    weight: 1,
    category: "drinks",
  },
  { id: 61, name: "Черничный морс", price: 690, weight: 1, category: "drinks" },
  {
    id: 62,
    name: "Клюквенный морс",
    price: 590,
    weight: 1,
    category: "drinks",
  },
  { id: 63, name: "Ягодный морс", price: 590, weight: 1, category: "drinks" },
  // ================= ВАРЕНИКИ & ПЕЛЬМЕНИ 0.5 КГ =================
  {
    id: 64,
    name: "Пельмени с мясом",
    price: 690,
    weight: 0.5,
    category: "dumplings",
  },
  {
    id: 65,
    name: "Пельмени со шпинатом",
    price: 640,
    weight: 0.5,
    category: "dumplings",
  },
  {
    id: 66,
    name: "Вареники с картофелем",
    price: 590,
    weight: 0.5,
    category: "dumplings",
  },
  {
    id: 67,
    name: "Вареники с творогом",
    price: 590,
    weight: 0.5,
    category: "dumplings",
  },
  {
    id: 68,
    name: "Вареники с вишней",
    price: 790,
    weight: 0.5,
    category: "dumplings",
  },

  // ================= РИМСКАЯ ПИЦЦА =================
  {
    id: 69,
    name: "С ветчиной и грибами",
    price: 790,
    weight: 0.8,
    category: "pizza",
  },
  { id: 70, name: "Греческая", price: 790, weight: 0.8, category: "pizza" },
  { id: 71, name: "Маргарита", price: 690, weight: 0.8, category: "pizza" },
  { id: 72, name: "Мясная", price: 890, weight: 0.8, category: "pizza" },
];

// render menu
function renderList(listEl, items) {
  listEl.innerHTML = items
    .map((p) => {
      return `
        <li class="menu-item" data-id="${p.id}">
          <span class="product-name">${p.name}</span>
          <span class="product-price">${p.price} р.</span>
          <button class="add-btn" data-id="${p.id}">В корзину</button>
        </li>
      `;
    })
    .join("");
}

const savoryContainer = document
  .getElementById("savory-pies")
  .querySelector("ul");

const savoryPies = products.filter((p) => p.category === "savory-pies");

const assortedContainer = document
  .getElementById("assorted")
  .querySelector("ul");

const assortedPies = products.filter((p) => p.category === "assorted");
const sweetPiesContainer = document
  .getElementById("sweet-pies")
  .querySelector("ul");

const sweetPies = products.filter((p) => p.category === "sweet-pies");
const drinksContainer = document.getElementById("drinks").querySelector("ul");

const drinks = products.filter((p) => p.category === "drinks");
const dumplingsContainer = document
  .getElementById("dumplings")
  .querySelector("ul");

const dumplings = products.filter((p) => p.category === "dumplings");
const pizzaContainer = document.getElementById("pizza").querySelector("ul");

const pizza = products.filter((p) => p.category === "pizza");

renderList(savoryContainer, savoryPies);
renderList(sweetPiesContainer, sweetPies);
renderList(assortedContainer, assortedPies);
renderList(drinksContainer, drinks);
renderList(pizzaContainer, pizza);
renderList(dumplingsContainer, dumplings);
