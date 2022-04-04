const menu = [
  {
    id: 1,
    title: "Buttermilk Pancacks",
    category: "Breakfast",
    price: 15.88,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 2,
    title: "Buttermilk Pancacks",
    category: "Lunch",
    price: 10.22,
    img: "images/b.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 3,
    title: "Buttermilk Pancacks",
    category: "Breakfast",
    price: 6.88,
    img: "images/c.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 4,
    title: "Buttermilk Pancacks",
    category: "Lunch",
    price: 34.5,
    img: "images/d.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 5,
    title: "Buttermilk Pancacks",
    category: "Shakes",
    price: 25.5,
    img: "images/e.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 6,
    title: "Buttermilk Pancacks",
    category: "Breakfast",
    price: 10.4,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 7,
    title: "Buttermilk Pancacks",
    category: "Breakfast",
    price: 11.6,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 8,
    title: "Buttermilk Pancacks",
    category: "Dinner",
    price: 23.88,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 9,
    title: "Buttermilk Pancacks",
    category: "Shakes",
    price: 12.7,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
  {
    id: 10,
    title: "Buttermilk Pancacks",
    category: "Dinner",
    price: 15.88,
    img: "images/a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem facere quis.",
  },
];

// ********buttons********

let category = menu.reduce(
  (catg, item) => {
    if (!catg.includes(item.category)) {
      catg.push(item.category);
    }
    return catg;
  },
  ["All"]
);

let buttons = category
  .map((item) => {
    return `
      <button class="btn" data-id=${item}>${item}</button>
      `;
  })
  .join("");
const btnContainer = document.querySelector(".btn_container");
btnContainer.innerHTML = buttons;

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menuFiltered = menu.filter((menuItem) => {
      return menuItem.category == category;
    });
    if (category == "All") {
      displayMenu(menu);
    } else {
      displayMenu(menuFiltered);
    }
  });
});

// *******MENU********

const menuFoods = document.querySelector(".menu_foods");

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
});

function displayMenu(menu) {
  const menu_items = menu
    .map((item) => {
      return `
      <div class="menu_item">
            <img src=${item.img} />
            <div class="item_des">
              <div class="item_title">
                <div class="title">${item.title}</div>
                <div class="price">$${item.price}</div>
              </div>
              <div class="item_text">
                <p>${item.desc}</p>
              </div>
            </div>
          </div>
      `;
    })
    .join("");

  menuFoods.innerHTML = menu_items;
}
