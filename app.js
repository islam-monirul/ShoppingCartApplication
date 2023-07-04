const allProducts = [
  {
    id: 1,
    name: "Nike Air Zoom",
    price: 234.95,
    image: "./assets/images/one.jpg",
  },
  {
    id: 2,
    name: "Adidas Speedportal",
    price: 81.95,
    image: "./assets/images/two.jpg",
  },
  {
    id: 3,
    name: "Nike Mercurial Superfly",
    price: 220.95,
    image: "./assets/images/three.jpg",
  },
  {
    id: 4,
    name: "Nike Air Zoom Mercurial",
    price: 238.95,
    image: "./assets/images/four.jpg",
  },
];

let shoppingCart = [];
const cartContainer = document.getElementById("shoppingCart");
let totalAmount = 0;
const total = document.getElementById("totalAmount");
total.textContent = `Total = $ ${totalAmount.toFixed(2)}`;

const showAllProducts = () => {
  const allProductsContainer = document.getElementById("allproducts");
  allProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-md",
      "shadow-md",
      "w-full",
      "sm:w-full",
      "md:w-full",
      "lg:w-1/3",
      "xl:w-1/4",
      "px-6",
      "py-4"
    );

    const productImage = document.createElement("img");
    productImage.src = product.image;
    card.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.classList.add("mt-2");
    card.appendChild(productName);

    const productPrice = document.createElement("h1");
    productPrice.textContent = `$ ${product.price.toFixed(2)}`;
    productPrice.classList.add("mt-2", "text-xl", "font-bold", "text-red-600");
    card.appendChild(productPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add(
      "bg-black",
      "text-white",
      "rounded",
      "py-2",
      "px-4",
      "mt-4"
    );
    addToCartButton.addEventListener("click", () => {
      const existingProduct = shoppingCart.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        addToCart({ ...product, quantity: 1 });
      }

      showCartItems();
    });
    card.appendChild(addToCartButton);

    allProductsContainer.appendChild(card);
  });
};
showAllProducts();

const addToCart = (product) => {
  shoppingCart.push(product);
  showCartItems();
};

const showCartItems = () => {
  //   console.log(shoppingCart);
  cartContainer.innerHTML = "";
  totalAmount = 0;

  if (shoppingCart.length > 0) {
    shoppingCart.forEach((item) => {
      totalAmount += item.price * item.quantity;

      const cartItem = document.createElement("div");
      cartItem.classList.add(
        "bg-white",
        "rounded-md",
        "py-2",
        "px-4",
        "m-1",
        "flex",
        "justify-between",
        "items-center",
        "gap-4"
      );

      const image = document.createElement("img");
      image.src = item.image;
      image.classList.add("w-14");
      cartItem.appendChild(image);

      const h1 = document.createElement("h1");
      h1.textContent = item.name;
      cartItem.appendChild(h1);

      const qtyBox = document.createElement("div");
      qtyBox.classList.add("w-14", "flex", "justify-between", "items-center");

      const decreaseBtn = document.createElement("h1");
      decreaseBtn.textContent = "-";
      decreaseBtn.classList.add("cursor-pointer", "font-bold");
      decreaseBtn.addEventListener("click", () => {
        decreaseQty(item);
      });
      qtyBox.appendChild(decreaseBtn);

      const qty = document.createElement("h1");
      qty.textContent = item.quantity;
      qty.classList.add("shadow-md", "rounded-md", "p-2");
      qtyBox.appendChild(qty);

      const increaseBtn = document.createElement("h1");
      increaseBtn.textContent = "+";
      increaseBtn.classList.add("cursor-pointer", "font-bold");
      increaseBtn.addEventListener("click", () => {
        increaseQty(item);
      });
      qtyBox.appendChild(increaseBtn);

      cartItem.appendChild(qtyBox);

      const price = document.createElement("h1");
      price.textContent = ` $ ${(item.price * item.quantity).toFixed(2)}`;
      cartItem.appendChild(price);

      const deleteIcon = document.createElement("span");
      deleteIcon.innerHTML = "&times;";
      deleteIcon.classList.add(
        "text-red-600",
        "font-bold",
        "text-xl",
        "cursor-pointer"
      );
      deleteIcon.addEventListener("click", () => {
        deleteItemFromCart(item);
      });
      cartItem.appendChild(deleteIcon);

      cartContainer.appendChild(cartItem);
    });
  }

  total.textContent = `Total = $ ${totalAmount.toFixed(2)}`;
};

const clearCart = () => {
  shoppingCart = [];
  totalAmount = 0;

  cartContainer.innerHTML = "";
  total.textContent = `Total = $ ${totalAmount.toFixed(2)}`;

  const p = document.createElement("p");
  p.textContent = "Cart is empty";

  cartContainer.appendChild(p);
};

const increaseQty = (product) => {
  const existingProduct = shoppingCart.find((item) => item.id === product.id);
  existingProduct.quantity += 1;

  showCartItems();
};

const decreaseQty = (product) => {
  const existingProduct = shoppingCart.find((item) => item.id === product.id);
  existingProduct.quantity -= 1;

  if (existingProduct.quantity < 0) {
    existingProduct.quantity = 0;
  }

  showCartItems();
};

const deleteItemFromCart = (product) => {
  const newList = shoppingCart.filter((item) => item.id != product.id);
  shoppingCart = newList;
  showCartItems();
};
