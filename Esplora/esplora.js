//funzioni importanti

function searchProduct(e) {
  e.preventDefault();
  mainEl.innerHTML = "";
  products.forEach((prod) => {
    if (prod.title.toLowerCase().includes(barraRicerca.value.toLowerCase())) {
      createCard(prod);
    }
  });
}

function createCard(obj) {
  const cardEl = document.createElement("div");
  const cardImageContainerEl = document.createElement("div");
  const cardImageEl = document.createElement("img");
  const cardTitleEl = document.createElement("h3");
  const cardPriceEl = document.createElement("h2");
  const cardDescriptionEl = document.createElement("p");
  const addToCart = document.createElement("button");

  addToCart.textContent = "Aggiungi al carrello";
  cardEl.className = "card";
  cardTitleEl.classname = "cardTitle";
  cardDescriptionEl.classname = "descrizioneprodotto";
  cardImageContainerEl.className = "immagineCard";
  cardImageEl.className = "cardImage";

  mainEl.appendChild(cardEl);
  cardImageContainerEl.appendChild(cardImageEl);
  cardEl.append(
    cardImageContainerEl,
    cardTitleEl,
    cardPriceEl,
    cardDescriptionEl,
    addToCart
  );

  cardTitleEl.textContent = obj.title.slice(0, 20) + "...";
  cardDescriptionEl.textContent = obj.description.slice(0, 90) + "...";
  cardPriceEl.textContent = obj.price + "$";
  cardImageEl.setAttribute("src", obj.image);

  addToCart.addEventListener("click", () => {
    beforeCart(obj);
  });
}

const beforeCart = (obj) => {
  const newObj = {
    id: obj.id,
    title: obj.title,
    price: obj.price,
    image: obj.image,
    qty: 1,
  };

  const repliants = cart.filter((product) => {
    if (newObj.id == product.id) {
      product.qty++;
      return product;
    }
  });
  if (repliants.length == 0) {
    cart.push(newObj);
  }

  cartCreator();
};

const cartCreator = () => {
  cartList.innerHTML = "";
  cartTotPrice = 0;

  cart.forEach((item) => {
    function deleteCartProduct() {
      cartList.removeChild(cartEl);
      cart.splice(item);
      if (item.qty > 1) {
        cartTotQ = cartTotQ - parseInt(item.qty);
      } else {
        cartTotQ--;
      }
      if (cartTotQ >= 100) {
        cartQ.style.width = "16px";
      }
      cartQ.textContent = cartTotQ;
      if (cartTotQ === 0) {
        cartQ.style.display = "none";
      } else {
        cartQ.style.display = "flex";
      }
      if (item.qty > 1) {
        cartTotPrice = cartTotPrice - item.price * parseInt(item.qty);
      } else {
        cartTotPrice = cartTotPrice - item.price;
      }
      tot.textContent = `Tot: ${cartTotPrice.toFixed(2)}$`;
    }

    const cartEl = document.createElement("div");
    const cartProductImgContainer = document.createElement("div");
    const cartProductImg = document.createElement("img");
    const cartProductH5 = document.createElement("h5");
    const cartProductPrice = document.createElement("h3");
    const qty = document.createElement("div");
    const qtyPop = document.createElement("p");
    const qtyTot = document.createElement("p");
    const qtyAdd = document.createElement("p");
    const cartDelete = document.createElement("button");

    cartEl.className = "cartProduct";
    cartDelete.className = "cartDelete";
    cartDelete.textContent = "Elimina dal carrello";
    cartProductPrice.className = "cartPrice";
    cartProductPrice.textContent = item.price + "$";
    cartProductImg.setAttribute("src", item.image);
    cartProductH5.textContent = item.title.slice(0, 17) + "...";
    cartProductImgContainer.className = "cartImgContainer";
    if (item.qty > 1) {
      cartTotPrice = cartTotPrice + item.price * parseInt(item.qty);
    } else {
      cartTotPrice = cartTotPrice + item.price;
    }
    tot.textContent = `Tot: ${cartTotPrice.toFixed(2)}$`;
    qty.className = "qtt";
    qtyPop.textContent = "-";
    qtyPop.className = "qtyPop";
    qtyTot.textContent = `X${item.qty}`;
    qtyAdd.textContent = "+";
    qtyAdd.className = "qtyAdd";

    cartDelete.addEventListener("click", deleteCartProduct);
    qtyPop.addEventListener("click", () => {
      item.qty--;
      if (item.qty < 1) {
        deleteCartProduct();
        return;
      }
      qtyTot.textContent = `X${item.qty}`;
      cartTotQ--;
      if (cartTotQ >= 100) {
        cartQ.style.width = "16px";
      }
      cartQ.textContent = cartTotQ;
      if (cartTotQ === 0) {
        cartQ.style.display = "none";
      } else {
        cartQ.style.display = "flex";
      }

      cartTotPrice = cartTotPrice - item.price;
      tot.textContent = `Tot: ${cartTotPrice.toFixed(2)}$`;
    });

    qtyAdd.addEventListener("click", () => {
      item.qty++;
      qtyTot.textContent = `X${item.qty}`;
      cartTotQ++;
      if (cartTotQ >= 100) {
        cartQ.style.width = "16px";
      }
      cartQ.textContent = cartTotQ;

      cartTotPrice = cartTotPrice + item.price;
      tot.textContent = `Tot: ${cartTotPrice.toFixed(2)}$`;
    });

    qty.append(qtyPop, qtyTot, qtyAdd);
    cartProductImgContainer.appendChild(cartProductImg);
    cartEl.append(
      cartProductImgContainer,
      cartProductH5,
      cartProductPrice,
      cartDelete,
      qty
    );
    cartList.append(cartEl);
  });

  cartTotQ++;
  if (cartTotQ >= 100) {
    cartQ.style.width = "16px";
  }
  cartQ.textContent = cartTotQ;
  if (cartTotQ === 0) {
    cartQ.style.display = "none";
  } else {
    cartQ.style.display = "flex";
  }
  alert("Prodotto aggiunto correttamente al carrello");
};

//dichiarazioni particolari

const mainEl = document.body.querySelector("main");
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.33,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
];
const mens = products.filter((obj) => obj.category === "men's clothing");
const women = products.filter((obj) => obj.category === "women's clothing");
const jewelery = products.filter((obj) => obj.category === "jewelery");
const electronics = products.filter((obj) => obj.category === "electronics");
const minoreDi20 = products.filter((obj) => parseInt(obj.price) < 20);
const minoreDi50 = products.filter((obj) => parseInt(obj.price) < 50);
const minoreDi100 = products.filter((obj) => parseInt(obj.price) < 100);
const minoreDi1000 = products.filter((obj) => parseInt(obj.price) < 1000);

//dichiarazioni della pagina

let cart = [];
const cartList = document.querySelector(".carrello");
const cartAccess = document.querySelector("#carrelloBtn");
const overflow = document.querySelector("#overflow");
const overflowBtn = document.querySelector("#overflowButton");
const cartH1 = document.querySelector(".cartH1");
const cartQ = document.querySelector("#circleCart");
const tot = document.querySelector(".tot");
const ricerca = document.querySelector(".ricerca");
const barraRicerca = document.querySelector("#barra");
const ricercaBtn = document.querySelector("#cerca");
let cartTotQ = 0;
let cartTotPrice;
let prezzi = [20, 50, 100, 1000];
const tutteCategorieEl = document.querySelector("#tutteCategorie");
const uominiEl = document.querySelector("#uomini");
const donneEl = document.querySelector("#donne");
const gioielleriaEl = document.querySelector("#gioielleria");
const elettronicaEl = document.querySelector("#elettronica");
const mainTitle = document.querySelector("#mainTitle");
const filtriPrezzi = document.querySelector(".filtroPrezzi");
const prezziFiltrati = document.querySelector("#prezziFiltrati");
const meno20 = document.querySelector("#meno20");
const meno50 = document.querySelector("#meno50");
const meno100 = document.querySelector("#meno100");
const meno1000 = document.querySelector("#meno1000");

//condizioni, cicli e eventi della pagina

if (cartTotQ === 0) {
  cartQ.style.display = "none";
} else {
  cartQ.style.display = "flex";
  cartQ.textContent = cartTotQ;
  if (cartTotQ >= 100) {
    cartQ.style.width = "16px";
  }
}

products.forEach((prod) => {
  createCard(prod);
});

cartAccess.addEventListener("click", () => {
  overflow.classList.toggle("show");
  cartList.style.zIndex = "8";
  overflowBtn.style.zIndex = "8";
  cartH1.style.zIndex = "8";
});

overflowBtn.addEventListener("click", () => {
  overflow.classList.toggle("show");
  cartList.style.zIndex = "-8";
  overflowBtn.style.zIndex = "-8";
  cartH1.style.zIndex = "-8";
});

ricerca.addEventListener("submit", searchProduct);
ricercaBtn.addEventListener("click", searchProduct);

//filtri categorie

tutteCategorieEl.addEventListener("click", () => {
  mainEl.innerHTML = "";
  products.forEach((prod) => {
    createCard(prod);
  });
  mainTitle.textContent = "Tutte le categorie";
});

uominiEl.addEventListener("click", () => {
  mainEl.innerHTML = "";
  mens.forEach((prod) => {
    createCard(prod);
  });
  mainTitle.textContent = "Abbigliamento per uomo";
});

donneEl.addEventListener("click", () => {
  mainEl.innerHTML = "";
  women.forEach((prod) => {
    createCard(prod);
  });
  mainTitle.textContent = "Abbigliamento per donna";
});

gioielleriaEl.addEventListener("click", () => {
  mainEl.innerHTML = "";
  jewelery.forEach((prod) => {
    createCard(prod);
  });
  mainTitle.textContent = "Gioielleria";
});

elettronicaEl.addEventListener("click", () => {
  mainEl.innerHTML = "";
  electronics.forEach((prod) => {
    createCard(prod);
  });
  mainTitle.textContent = "Elettronica";
});

//filtri per i prezzi

meno20.addEventListener("click", () => {
  mainEl.innerHTML = "";
  minoreDi20.forEach((minore) => createCard(minore));
  mainTitle.textContent = "Tutte le categorie";
});

meno50.addEventListener("click", () => {
  mainEl.innerHTML = "";
  minoreDi50.forEach((minore) => createCard(minore));
  mainTitle.textContent = "Tutte le categorie";
});

meno100.addEventListener("click", () => {
  mainEl.innerHTML = "";
  minoreDi100.forEach((minore) => createCard(minore));
  mainTitle.textContent = "Tutte le categorie";
});

meno1000.addEventListener("click", () => {
  mainEl.innerHTML = "";
  minoreDi1000.forEach((minore) => createCard(minore));
  mainTitle.textContent = "Tutte le categorie";
});