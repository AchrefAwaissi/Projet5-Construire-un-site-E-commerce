//récupération données localStorage
let storedcameras = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedcameras);
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

if(storedcameras == null || storedcameras.length === 0){
    // si le panier est vide 
    const emptyCart = document.createElement('p');
    camDivCart.appendChild(emptyCart);
    emptyCart.className = "empty_cart";
    emptyCart.textContent = "Votre panier est  vide !"
} else {
    // si des éléments sont présents dans le panier : récupération des éléments du panier
    let i = 0;
    for (storedCamera of storedcameras) {
        const eachcam = document.createElement('div');
        camDivCart.appendChild(eachcam);
        eachcam.className = 'each_camera';
        const camerasCart = document.createElement('p');
        eachcam.appendChild(camerasCart);
        camerasCart.textContent = storedCamera.quantity + " " + storedCamera.cameraName + " , " + storedCamera.cameralenses;

        const cameraPrice = document.createElement('div');
        eachcam.appendChild(cameraPrice);
        cameraPrice.className = 'camera_price';
        cameraPrice.id = i++;

        const price = document.createElement('p');
        cameraPrice.appendChild(price);
        price.textContent = storedCamera.cameraPrice + " €"

        // création bouton suppression d'un camera
        const trashbutton = document.createElement('button');
        cameraPrice.appendChild(trashbutton);
        trashbutton.className = 'trash_button';
        trashbutton.title = 'Supprimer cet article ?';

        const iconButton = document.createElement('i');
        trashbutton.appendChild(iconButton);
        iconButton.className = 'fas fa-trash-alt';

    };
    // on récupére l'article associé au bouton trash
    let trashbutton = document.getElementsByClassName('trash_button');
    for (let i = 0 ; i < trashbutton.length; i++) {
        trashbutton[i].addEventListener('click' , function (event) { 
            event.preventDefault();
            let id = this.closest('camera_price').id;

            //on supprime l'article du localStorage
            storedcameras.splice(id, 1);

            //on enregistre le nouveau localStorage
            localStorage.setItem('newArticle', JSON.stringify(storedcameras));
            JSON.parse(localStorage.getItem('newArticle'));

            alert('Cet article a bien été supprimé !');
            window.location.href = "panier.html";   
        }); 
    };

    //calcul du montant total
    let TotalPrice = []
    for (storedCamera of storedcameras) {
        let article = storedCamera.cameraPrice;
        TotalPrice.push(article);
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = TotalPrice.reduce(reducer, 0);
    console.log(totalPrice);

    const total = document.createElement('p');
    camDivCart.appendChild(total);
    total.className = 'total';
    total.textContent = "Montant total = " + totalPrice + " €";

    //création d'un bouton pour vider le panier
    const trash = document.createElement('button');
    camDivCart.appendChild(trash);
    trash.className = 'icon_trash';

    const cartLink = document.createElement('a');
    trash.appendChild(cartLink);
    cartLink.href = "panier.html";
    cartLink.id = "cart_link"
    cartLink.title = 'Vider le panier';
    cartLink.textContent = "Vider le panier ";

    const icon = document.createElement('i');
    cartLink.appendChild(icon);
    icon.className = 'fas fa-trash-alt'

    trash.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem('newArticle');
        alert('Votre panier a bien été vidé !')
        window.location.href = "panier.html";
    });
    //création du formulaire de commande
    const form = document.createElement('form');
    form.className = 'contact_form';
    camDivCart.appendChild(form);
    const cam2H3 = document.createElement('h3');
    form.appendChild(cam2H3);
    cam2H3.textContent = "merci de remplir ce formulaire Pour valider votre commande : ";

  

   
};