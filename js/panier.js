//récupération données localStorage
let storedcam = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedcam);

// création de la page du récapitulatif panier
const camMain = document.getElementById('product_page');
const camDiv = document.createElement('div');
camMain.appendChild(camDiv);
camDiv.className = 'camera_ref';
const camDivCart = document.createElement('div');
camDiv.appendChild(camDivCart);
camDivCart.className = 'camera_cart';
const camH3 = document.createElement('h3');
camDivCart.appendChild(camH3);
camH3.textContent = "Vos cameras :";

