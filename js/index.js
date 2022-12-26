$(document).ready(function () {
  fetch(baseUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      res.products.length > 0 && getElemnetArray(res.products);
    });
});

const rating = stars => '★★★★★☆☆☆☆☆'.slice(5 - stars, 10 - stars);

function getElemnetArray(array = []) {
  const mainDiv = document.getElementsByClassName("demo-list");
  mainDiv[0].style.paddingTop = "10px";
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      const divProduct = document.createElement("div");
      divProduct.className = "div-product";
      divProduct.style.flexGrow = 1;
      divProduct.style.width = "20%";
      divProduct.style.display = "flex";
      divProduct.style.alignItems = "center";
      mainDiv[0].appendChild(divProduct);
    }
    const divProduct = document.getElementsByClassName("div-product");
    for (let i = 0; i < divProduct.length; i++) {
      const image = document.createElement("img");
      const divInformationProduct = document.createElement("div");
      divInformationProduct.className = "information-product";
      divProduct[i].appendChild(image);
      divProduct[i].appendChild(divInformationProduct);
      if (i !== 0) {
        divProduct[i].style.marginTop = "10px";
      }
    }

    const divInformationProduct = document.getElementsByClassName(
      "information-product"
    );
    for (let i = 0; i < divInformationProduct.length; i++) {
      const brandProduct = document.createElement("h5");
      brandProduct.className = "brand-product";
      const titleProduct = document.createElement("h5");
      titleProduct.className = "title-product";
      const categoryProduct = document.createElement("h5");
      categoryProduct.className = "category-product";
      const priceProduct = document.createElement("h5");
      const ratingProduct = document.createElement("span");
      ratingProduct.className = "rating-product";
      priceProduct.className = "price-product";
      titleProduct.style.marginLeft = "10px";
      titleProduct.style.fontSize = "14px";
      brandProduct.style.marginLeft = "10px";
      brandProduct.style.fontSize = "14px";
      categoryProduct.style.marginLeft = "10px";
      categoryProduct.style.fontSize = "14px";
      priceProduct.style.marginLeft = "10px";
      priceProduct.style.fontSize = "14px";
      ratingProduct.style.marginLeft = '10px'
      divInformationProduct[i].appendChild(brandProduct);
      divInformationProduct[i].appendChild(titleProduct);
      divInformationProduct[i].appendChild(categoryProduct);
      divInformationProduct[i].appendChild(priceProduct);
      divInformationProduct[i].appendChild(ratingProduct);
    }

    const getImage = document.getElementsByTagName("img");
    const brandProduct = document.getElementsByClassName("brand-product");
    const titleProduct = document.getElementsByClassName("title-product");
    const categoryProduct = document.getElementsByClassName("category-product");
    const priceProduct = document.getElementsByClassName("price-product");
    const ratingProduct = document.getElementsByClassName("rating-product");
    for (let j = 0; j < getImage.length; j++) {
      for (let i = 0; i < array.length; i++) {
        if (i === j) {
          getImage[j].setAttribute("src", array[i].thumbnail);
          getImage[j].setAttribute("width", "200px");
          getImage[j].setAttribute("height", "200px");
          brandProduct[j].innerText = `${array[i].brand}`;
          titleProduct[j].innerHTML = `${array[i].title}`;
          categoryProduct[j].innerHTML = `${array[i].category}`;
          priceProduct[j].innerHTML = `${array[i].price}$`;
          console.log(rating(array[i].rating).split('☆'), 'array[i].rating')
          ratingProduct[j].innerHTML = rating(array[i].rating)
        }
      }
    }
  }
}
