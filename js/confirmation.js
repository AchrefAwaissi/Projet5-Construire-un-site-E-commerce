// récupération de l'id de la commande
let order_Id = localStorage.getItem('response-Order');
console.log(order_Id);

// récupération du prix total de la commande
let totalPrice = localStorage.getItem('totalPrice');
console.log(totalPrice);

// page de confirmation 
const cameraMain = document.getElementById('product_page');
const cameraDiv = document.createElement('div');
cameraMain.appendChild(cameraDiv);
cameraDiv.className = 'camera_confirm';



const cameraPar = document.createElement('p');
cameraDiv.appendChild(cameraPar);
cameraPar.textContent = "votre commande a bien été enregistrée.";

const cameraPARA2 = document.createElement('p');
cameraDiv.appendChild(cameraPARA2);
cameraPARA2.innerHTML = "Vos Cameras arriverons bientôt chez vous.<br />Vous trouverez ci-dessous le récapitulatif de votre commande."
const cameraPar4 = document.createElement('p');
cameraDiv.appendChild(cameraPar4);
cameraPar4.textContent = " l'équipe d'Orinoco";

// récapitulatif de la commande
const cameraDivConfirm = document.createElement('div');
cameraDiv.appendChild(cameraDivConfirm);
cameraDivConfirm.className = 'confirm';

const camH3Bis = document.createElement('h3');
cameraDivConfirm.appendChild(camH3Bis);
camH3Bis.textContent = "Récapitulatif de votre commande : ";

const cameraPar5 = document.createElement('p');
cameraDivConfirm.appendChild(cameraPar5);
cameraPar5.textContent = "Numéro de commande : " + order_Id;
cameraPar5.className = "confirmation1";

const cameraPar6 = document.createElement('p');
cameraDivConfirm.appendChild(cameraPar6);
cameraPar6.textContent = "Montant total de votre commande : " + totalPrice + " €";
cameraPar6.className = "confirmation";

// Efface localStorage
localStorage.clear();