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
// modal
const modalWindow = document.getElementById("modal-window");
const openModal = document.getElementById("open-modal");


openModal.addEventListener("click", () => {
	modalWindow.classList.add("active");
});


modalWindow.addEventListener("click", (e) => {
	if (e.target === modalWindow) {
		modalWindow.classList.remove("active");
	}
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
  // ================= КРУАССАН-СЭНДВИЧИ =================
  {
    id: 73,
    name: "Круассан с семгой 5шт",
    price: 2950,
    weight: 1,
    category: "croissants",
  },
  {
    id: 74,
    name: "Круассан с итальянской начинкой",
    price: 2750,
    weight: 1,
    category: "croissants",
  },
  {
    id: 75,
    name: "Круассан с пастрами",
    price: 2750,
    weight: 1,
    category: "croissants",
  },
  {
    id: 76,
    name: "Круассан с лимонным кремом",
    price: 1750,
    weight: 1,
    category: "croissants",
  },
  {
    id: 77,
    name: "Круассан с шоколадом",
    price: 1750,
    weight: 1,
    category: "croissants",
  },

  // ================= ПИРОЖКИ И КАРАВАЙ =================
  {
    id: 78,
    name: "Набор пирожков 30 шт",
    price: 4900,
    weight: 1.5,
    category: "pastry",
  },
  {
    id: 79,
    name: "Свадебный каравай 1.5 кг",
    price: 3000,
    weight: 1.5,
    category: "pastry",
  },

  // ================= БЛИНЫ =================
  {
    id: 80,
    name: "Блины с ветчиной и сыром 9 шт",
    price: 1290,
    weight: 1,
    category: "pancakes",
  },
  {
    id: 81,
    name: "Блины с творогом 9 шт",
    price: 1090,
    weight: 1,
    category: "pancakes",
  },
  {
    id: 82,
    name: "Блины с говядиной 9 шт",
    price: 1490,
    weight: 1,
    category: "pancakes",
  },
  { id: 83, name: "Блины 8 шт", price: 520, weight: 0.8, category: "pancakes" },
  {
    id: 84,
    name: "Блины с яблоком 9 шт",
    price: 1090,
    weight: 1,
    category: "pancakes",
  },

  // ================= ПРАЗДНИЧНОЕ МЕНЮ =================
  {
    id: 85,
    name: "Комбо Лайт",
    price: 8060,
    weight: 2,
    category: "festive-menu",
  },
  {
    id: 86,
    name: "Комбо Оптимум",
    price: 13850,
    weight: 3,
    category: "festive-menu",
  },
  {
    id: 87,
    name: "Комбо Максимум",
    price: 19640,
    weight: 4,
    category: "festive-menu",
  },
  {
    id: 88,
    name: "Апельсиновый кекс 800г",
    price: 1360,
    weight: 0.8,
    category: "festive-menu",
  },
  {
    id: 89,
    name: "Сельдь под шубой 900г",
    price: 1190,
    weight: 0.9,
    category: "festive-menu",
  },
  {
    id: 90,
    name: "Оливье с ветчиной",
    price: 1250,
    weight: 0.9,
    category: "festive-menu",
  },
  {
    id: 91,
    name: "Канапе сальчичон 10шт",
    price: 1190,
    weight: 0.5,
    category: "festive-menu",
  },
  {
    id: 92,
    name: "Канапе с мини моцареллой",
    price: 1290,
    weight: 0.5,
    category: "festive-menu",
  },
  {
    id: 93,
    name: "Салат Снежный краб 900г",
    price: 1290,
    weight: 0.9,
    category: "festive-menu",
  },
  {
    id: 94,
    name: "Шашлычки из курицы",
    price: 2200,
    weight: 1,
    category: "festive-menu",
  },
  {
    id: 95,
    name: "Шашлычки из семги",
    price: 4800,
    weight: 1,
    category: "festive-menu",
  },
  {
    id: 96,
    name: "Рулетики из баклажанов",
    price: 1290,
    weight: 0.8,
    category: "festive-menu",
  },
  {
    id: 97,
    name: "Киш с грибами 120г 5шт",
    price: 1250,
    weight: 0.6,
    category: "festive-menu",
  },
  {
    id: 98,
    name: "Пирог Донской с икрой",
    price: 2700,
    weight: 1,
    category: "festive-menu",
  },
  {
    id: 99,
    name: "Пирог с уткой по-пекински",
    price: 2160,
    weight: 1,
    category: "festive-menu",
  },
];

// render menu
function renderList(listEl, items) {
  listEl.innerHTML = items
    .map((p) => {
      return `
        <li class="menu-item" data-id="${p.id}">
        <span>
        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="20px" height="13px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<path fill="#fff" d="M60,10H49.656l-6.828-6.828C42.078,2.422,41.062,2,40,2H24c-1.062,0-2.078,0.422-2.828,1.172L14.344,10H4
		c-2.211,0-4,1.789-4,4v44c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V14C64,11.789,62.211,10,60,10z M32,50
		c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S40.836,50,32,50z"/>
	<circle fill="#fff" cx="32" cy="34" r="8"/>
</g>
</svg>
        <span class="product-name">${p.name}</span></span>
          
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

// const drinksContainer = document.getElementById("drinks").querySelector("ul");
// const drinks = products.filter((p) => p.category === "drinks");

// const dumplingsContainer = document
//   .getElementById("dumplings")
//   .querySelector("ul");
// const dumplings = products.filter((p) => p.category === "dumplings");

// const pizzaContainer = document.getElementById("pizza").querySelector("ul");
// const pizza = products.filter((p) => p.category === "pizza");

const croissantsContainer = document
  .getElementById("croissants")
  .querySelector("ul");
const croissants = products.filter((p) => p.category === "croissants");

const pastryContainer = document.getElementById("pastry").querySelector("ul");
const pastry = products.filter((p) => p.category === "pastry");

const festiveMenuContainer = document
  .getElementById("festive-menu")
  .querySelector("ul");
const festiveMenu = products.filter((p) => p.category === "festive-menu");

const pancakesContainer = document
  .getElementById("pancakes")
  .querySelector("ul");
const pancakes = products.filter((p) => p.category === "pancakes");

renderList(savoryContainer, savoryPies);
renderList(sweetPiesContainer, sweetPies);
renderList(assortedContainer, assortedPies);
// renderList(drinksContainer, drinks);
// renderList(pizzaContainer, pizza);
// renderList(dumplingsContainer, dumplings);
renderList(croissantsContainer, croissants);
renderList(pastryContainer, pastry);
renderList(festiveMenuContainer, festiveMenu);
renderList(pancakesContainer, pancakes);

//basket
let cart = {};
function renderCartItems() {
  const cartList = document.querySelector(".cart-items");
  if (!cartList) return;

  const items = Object.values(cart);

  cartList.innerHTML = items
    .map(
      (item) => `
      <li class="cart-item" data-id="${item.id}">
        <span class="cart-item-name">${item.name}</span>

       <span class="flex-side">
        <div class="cart-controls">
          <button class="cart-btn minus" data-action="minus" data-id="${item.id}">−</button>
          <span class="cart-qty">${item.quantity}</span>
          <button class="cart-btn plus" data-action="plus" data-id="${item.id}">+</button>
        </div>

        <span class="cart-item-sum">${item.price * item.quantity} р.</span></span>
      </li>
    `,
    )
    .join("");
}

function updateCart() {
  let total = 0;
  let weight = 0;
  let count = 0;

  for (const id in cart) {
    total += cart[id].price * cart[id].quantity;
    weight += cart[id].weight * cart[id].quantity;
    count += cart[id].quantity;
  }

  document.querySelector(".basket-total").textContent = `${total} р.`;
  document.querySelector(".basket-weight").textContent =
    `${weight.toFixed(2)} кг`;

  document.querySelector(".basket-count").textContent = `Всего: ${count} шт.`;
  renderCartItems();
}

updateCart();

savoryContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
assortedContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
sweetPiesContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
croissantsContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
pastryContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
festiveMenuContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
pancakesContainer.addEventListener("click", function (e) {
  const li = e.target.closest(".menu-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  addToCart(id);
});
function addToCart(id) {
  const product = products.find((p) => p.id === id);

  if (!cart[id]) {
    cart[id] = {
      ...product,
      quantity: 1,
    };
  } else {
    cart[id].quantity++;
  }

  updateCart();
}
const cartListEl = document.querySelector(".cart-items");

cartListEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".cart-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const action = btn.dataset.action;

  if (action === "plus") addToCart(id);
  if (action === "minus") decreaseFromCart(id);
});
function decreaseFromCart(id) {
  if (!cart[id]) return;

  cart[id].quantity--;

  if (cart[id].quantity <= 0) {
    delete cart[id];
  }

  updateCart();
}

