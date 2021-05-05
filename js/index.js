const getdata =  async function() {
    //récupération des données de l'API 
    try {
        let response = await fetch('http://localhost:3000/api/cameras/');
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);

            for (let camera of cameras) {
                const camerasDiv = document.getElementById('cameras-bloc');
        
                const cameraSection = document.createElement('section');
                camerasDiv.appendChild(cameraSection);
                cameraSection.className = 'camera';
        
                const productLink = document.createElement("a");
                productLink.href = "produit.html?id=" + camera._id;
                cameraSection.appendChild(productLink);
                productLink.className = 'section_zoom';
                productLink.setAttribute('title', "camera " + camera.name + " vous attend !");
        
                const camImg = document.createElement('img');
                productLink.appendChild(camImg);
                camImg.setAttribute('src', camera.imageUrl);
                camImg.setAttribute('alt', 'cam ' + camera.name);
                camImg.setAttribute('title', 'cam1 ' + camera.name);
                camImg.className = 'img';

        
                const camRef = document.createElement('div');
                productLink.appendChild(camRef);
                camRef.className = 'camera_ref';
        
                
                const h3camRef = document.createElement('h3');
                camRef.appendChild(h3camRef);
                h3camRef.textContent = camera.name;
        
                const pcamRef = document.createElement('p');
                camRef.appendChild(pcamRef);
                pcamRef.textContent = camera.price / 100 + " €";
            }
         } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
         } 
     } catch (error) {
        alert("Erreur : " + error);
     }
}

getdata();


