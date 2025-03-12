function afficherMasquerTexte(){

    const afficher = $('#afficher');
    const masquer = $('#masquer');
    const p = $('p');

    p.hide();

    afficher.on("click", function() {

        p.show();

    });

    masquer.on("click", function() {

        p.hide();

    });



}

afficherMasquerTexte();