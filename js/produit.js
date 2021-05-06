
//récupération de l'ID de cam de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
const getdata = async function() {
     // récupération des données du camera sélectionné par son id
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' + id);
        if (response.ok) {
            let camera = await response.json();
            console.log(camera);
            const camMain = document.getElementById('product_page');
            const camH2 = document.createElement('h2');
            camMain.appendChild(camH2);
            camH2.textContent = " Camera Seléctionné : " + camera.name;
            const camDiv = document.createElement('div');
            camMain.appendChild(camDiv);
            camDiv.className = 'camera_ref1';
            const camImg = document.createElement('img');
            camDiv.appendChild(camImg);
            camImg.setAttribute('src', camera.imageUrl);
            camImg.setAttribute('alt', 'cam ' + camera.name);
            camImg.setAttribute('title', 'cam1 ' + camera.name);
            camImg.className= 'img';
            const camDivInfo = document.createElement('div');
            camDiv.appendChild(camDivInfo);
            camDivInfo.className = 'cam_info';
            const camH3 = document.createElement('h3');
            camDivInfo.appendChild(camH3);
            camH3.textContent = camera.name;
            const camParagraph = document.createElement('p');
            camDivInfo.appendChild(camParagraph);
            camParagraph.textContent = camera.description;
            const camPrice = document.createElement('p');
            camDivInfo.appendChild(camPrice);
            camPrice.textContent = "Son prix : " + camera.price / 100 + " €";
            camPrice.className = 'camera_price';
            
            const form = document.createElement('form');
            camDivInfo.appendChild(form);
            const formDiv = document.createElement('div');
            form.appendChild(formDiv);
            formDiv.className = 'lenses_choice';
            const label = document.createElement('label');
            formDiv.appendChild(label);
            label.textContent = "Personnalisez ses lentilles : ";
            label.setAttribute('for', "Choix de lentille de " + camera.name);
            const select = document.createElement('select');
            formDiv.appendChild(select);
            select.setAttribute('name', "Choix de lentille de " + camera.name);
            select.setAttribute('id', "select_1 ");
            const lenses = camera.lenses;
            for (i = 0; i < lenses.length; i++) {
                const selectOption = document.createElement('option');
                select.appendChild(selectOption);
                selectOption.textContent = lenses[i];
                selectOption.setAttribute("value", lenses[i]);
            }
            let addcam = document.createElement('button');
            form.appendChild(addcam);
            addcam.type = 'submit';
            addcam.name = 'add';
            addcam.id = 'submit';
            addcam.textContent = "Ajouter au panier"
            addcam.addEventListener("click", function (event) {
                event.preventDefault();
                //nous avons creer lobjet javascript qui contient les données
                let camerachoosen = {
                    cameraName: camera.name,
                    cameraId: camera._id,
                    cameralenses: select.value,
                    quantity: 1,
                    cameraPrice: camera.price / 100,
                };
                console.log(camerachoosen);

                let storedcameras = JSON.parse(localStorage.getItem('newArticle'));
                const cameralenses = select.value;
                if(storedcameras) {
                    
                    storedcameras.push(camerachoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedcameras));
                    console.log(storedcameras);
                    if (window.confirm(camera.name + " " + cameralenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                   
                    storedcameras = [];
                    storedcameras.push(camerachoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedcameras));
                    console.log(storedcameras);
                    if (window.confirm(camera.name + " " + cameralenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
            });
        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        } 
    } catch (error) {
        alert("Erreur : " + error);
    }
};

getdata();


