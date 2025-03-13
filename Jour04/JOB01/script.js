document.addEventListener('DOMContentLoaded', () => {
    function afficherExpression() {
        const button = document.getElementById("button");
        const afficher = document.getElementById("afficher-p");

        button.addEventListener('click', () => {
            // fetch pour récupérer le fichier expression.txt
            fetch('expression.txt')
                .then(r => {
                    if (r.ok) { 
                        return r.text(); 
                    } else {
                        throw new Error('Le fichier n\'a pas pu être récupéré');
                    }
                })
                .then(expression => {
                    // console.log(expression)
                    afficher.textContent = expression;
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
        });
    }

    afficherExpression();
});
