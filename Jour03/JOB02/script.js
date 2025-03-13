function ordreDesordre() {
    const melanger = $('#melanger');
    const verifier = $('#verifier');
    const perdu = $('#perdu');
    const gagne = $('#gagne');
    const imagesVerifier = $('#image img');
    

    let imagesArray = $('#image img').toArray();
    // console.log(imagesArray);


    // Mélanger les images
    melanger.on("click", function() {
        imagesArray.sort(() => Math.random() - 0.5);

        $('#image').empty();
        $.each(imagesArray, function(index, img) {
            $('#image').append(img);
        });

        gagne.hide();
        perdu.hide();

        // console.log(imagesArray);
    });

    // Ajout des variables pour stocker les clicks
    let premierClickImage = null;
    let deuxiemeClickImage = null;


    // Fonction qui stock les clicks et les envoie à echangerImages
    $(document).on("click", "#image img", function() {
        if (premierClickImage == null) {
            premierClickImage = $(this);
        } else if (deuxiemeClickImage == null) {
            deuxiemeClickImage = $(this);

            echangerImages(premierClickImage, deuxiemeClickImage);

            premierClickImage = null;
            deuxiemeClickImage = null;
        }
    });

    // Fonction pour échanger les images
    function echangerImages(image1, image2) {
        let index1 = imagesArray.indexOf(image1[0]);
        let index2 = imagesArray.indexOf(image2[0]);

        // console.log(image1[0]);

        // Échanger les éléments dans le tableau imagesArray
        [imagesArray[index1], imagesArray[index2]] = [imagesArray[index2], imagesArray[index1]];


        // Affichage on vide et on remplis avec le nouveau tableau modifier
        $('#image').empty();
        $.each(imagesArray, function(index, img) {
            $('#image').append(img);
        });

        console.log(imagesArray);
    }


    // Vérification de l'ordre des images
    const verifierOrdre = () => {
        //console.log(imagesArray);
        //console.log(imagesVerifier);
        
        for (let i = 0; i < imagesArray.length; i++) {
            if (imagesArray[i] !== imagesVerifier[i]) {
                return false;
            }
        }
        return true;
    };


    // Masque les <p>
    gagne.hide();
    perdu.hide();

    // Si c'est dans le bon ordre verifierOrdre renvoie true et affiche le message
    verifier.on("click", function() {

        if (verifierOrdre()) {
            // console.log('gagne');
            gagne.show();
            perdu.hide();
        } else {
            // console.log('perdu');
            perdu.show();
            gagne.hide();
        }
    });
}

$(document).ready(function() {
    ordreDesordre();
});
