$(document).ready(function () {
  fetch(baseUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      res.products.length > 0 && getElemnetArray(res.products);
    });
});

const rating = (stars) => "★★★★★☆☆☆☆☆".slice(5 - stars, 10 - stars);
function getElemnetArray(array = []) {
  const mainDiv = document.getElementsByClassName("demo-list");
  mainDiv[0].style.paddingTop = "10px";
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      const divProduct = document.createElement("div");
      divProduct.className = "div-product";
      divProduct.style.flexGrow = 1;
      divProduct.style.width = "33.33%";
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
      const brandProduct = document.createElement("p");
      brandProduct.className = "brand-product";
      brandProduct.style.marginBottom = "5px";
      const titleProduct = document.createElement("p");
      titleProduct.className = "title-product";
      titleProduct.style.marginBottom = "5px";
      const categoryProduct = document.createElement("p");
      categoryProduct.className = "category-product";
      categoryProduct.style.marginBottom = "5px";
      const priceProduct = document.createElement("p");
      const ratingProduct = document.createElement("div");
      ratingProduct.className = "rating-product";
      ratingProduct.style.marginBottom = "5px";
      priceProduct.className = "price-product";
      priceProduct.style.marginBottom = "5px";
      titleProduct.style.marginLeft = "10px";
      titleProduct.style.fontSize = "14px";
      brandProduct.style.marginLeft = "10px";
      brandProduct.style.fontSize = "14px";
      categoryProduct.style.marginLeft = "10px";
      categoryProduct.style.fontSize = "14px";
      priceProduct.style.marginLeft = "10px";
      priceProduct.style.fontSize = "14px";
      const albumImage = document.createElement("div");
      albumImage.className = "album-image";
      albumImage.style.display = 'flex';
      albumImage.style.width = '100%'
      divInformationProduct[i].appendChild(brandProduct);
      divInformationProduct[i].appendChild(titleProduct);
      divInformationProduct[i].appendChild(categoryProduct);
      divInformationProduct[i].appendChild(priceProduct);
      divInformationProduct[i].appendChild(ratingProduct);
      divInformationProduct[i].appendChild(albumImage);
    }

    const getImage = document.getElementsByTagName("img");
    const brandProduct = document.getElementsByClassName("brand-product");
    const titleProduct = document.getElementsByClassName("title-product");
    const categoryProduct = document.getElementsByClassName("category-product");
    const priceProduct = document.getElementsByClassName("price-product");
    const ratingProduct = document.getElementsByClassName("rating-product");
    const albumImage = document.getElementsByClassName("album-image");

    for (let j = 0; j < getImage.length; j++) {
      for (let i = 0; i < array.length; i++) {
        if (i === j) {
          getImage[j].setAttribute("src", array[i].thumbnail);
          getImage[j].setAttribute("width", "150px");
          getImage[j].setAttribute("height", "200px");
          brandProduct[j].innerText = `${array[i].brand}`;
          titleProduct[j].innerHTML = `${array[i].title}`;
          categoryProduct[j].innerHTML = `${array[i].category}`;
          priceProduct[j].innerHTML = `${array[i].price}$`;
          const starSelected = document.createElement("span");
          starSelected.className = "star-selected";
          starSelected.style.marginLeft = "10px";
          starSelected.style.color = "#ffce3d";
          starSelected.style.width = "1em";
          starSelected.style.height = "1em";
          starSelected.innerHTML = rating(array[i].rating).split("☆")[0];
          ratingProduct[j].append(starSelected);
          for (let k = 0; k < array[i].images.length; k++) {
            const imageAppend = document.createElement("div");
            imageAppend.className = 'image-detail';
            imageAppend.style.width = '30px';
            imageAppend.style.height = '30px';
            imageAppend.style.backgroundSize = '37px';
            imageAppend.style.marginLeft = '10px'
            imageAppend.style.backgroundRepeat = 'no-repeat';
            imageAppend.style.backgroundPosition = 'center';
            albumImage[j].append(imageAppend);
          }
          const getDetailImageAlbum = document.getElementsByClassName('image-detail');
          for(let m = 0; m < getDetailImageAlbum.length; m++) {
            for (let k = 0; k < array[i].images.length; k++) { 
              if(m === k ) {
                getDetailImageAlbum[i].style.backgroundImage = `url(${array[i].images[k]})`
              }
            }
          }  

          if (rating(array[i].rating).split("☆").length > 1) {
            const arrayStarNotSelected = [];
            for (let m = 0; m < rating(array[i].rating).length; m++) {
              if (rating(array[i].rating)[m] === "☆") {
                arrayStarNotSelected.push(rating(array[i].rating)[m]);
              }
            }

            const getStarStringNotSelected = arrayStarNotSelected.join();
            const resultStringNotSelected = getStarStringNotSelected.replaceAll(
              ",",
              ""
            );
            const starNotSelected = document.createElement("span");
            starNotSelected.className = "star-selected";
            starNotSelected.innerHTML = resultStringNotSelected;
            ratingProduct[j].append(starNotSelected);
          }
        }
      }
    }
  }
}
