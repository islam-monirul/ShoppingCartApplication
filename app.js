const allProducts = [
  {
    id: 1,
    name: "Nike Air Zoom Mercurial Vapor 15",
    price: 234.95,
    image: "./assets/images/one.jpg",
  },
  {
    id: 2,
    name: "adidas X Speedportal + FG",
    price: 81.95,
    image: "./assets/images/two.jpg",
  },
  {
    id: 3,
    name: "Nike Air Zoom Mercurial Superfly",
    price: 220.95,
    image: "./assets/images/three.jpg",
  },
  {
    id: 4,
    name: "Nike Air Zoom Mercurial Vapor 15 Elite",
    price: 238.95,
    image: "./assets/images/four.jpg",
  },
];

showAllProducts();
function showAllProducts() {
  const allProductsContainer = document.getElementById("allproducts");
  allProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-md",
      "shadow-md",
      "w-full",
      "sm:w-1/2",
      "md:w-1/3",
      "lg:w-1/4",
      "xl:w-1/6",
      "px-6",
      "py-4"
    );

    const productImage = document.createElement("img");
    productImage.src = product.image;
    card.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    card.appendChild(productName);

    const productPrice = document.createElement("h1");
    productPrice.textContent = `$ ${product.price.toFixed(2)}`;
    productPrice.classList.add("mt-2", "text-xl", "font-bold");
    card.appendChild(productPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add(
      "bg-black",
      "text-white",
      "rounded",
      "py-2",
      "px-4"
    );
    addToCartButton.addEventListener("click", () => {
      alert(`${product.name}`);
    });
    card.appendChild(addToCartButton);

    allProductsContainer.appendChild(card);
  });
}
