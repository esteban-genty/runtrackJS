function filtrePokemon() {

    // Récupérer les données depuis le Form
    document.getElementById('pokemon-filtre').addEventListener('submit', function(event) {
        event.preventDefault();


        const idForm = parseInt(document.querySelector('#pokemon-filtre #id').value);
        const nomForm = document.querySelector('#pokemon-filtre #nom').value;
        const typeForm = document.querySelector('#pokemon-filtre #type').value;

        const index = idForm - 1;


        if (typeForm === 'type') {
            console.log('Veuillez selectionner un type');
            return;
        }


        console.log(idForm);
        console.log(nomForm);
        console.log(typeForm);

        // Récupérer les données depuis le fichier JSON
        fetch('pokemon.json')
            .then(r => {
                if (r.ok) {
                    return r.json();
                } else {
                    throw new Error('Le fichier n\'a pas pu être récupéré');
                }
            })
            .then(pokemons => {
                comparerPokemon(pokemons[index].id, idForm, pokemons[index].name.french, nomForm, pokemons[index].type, typeForm);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    });
    


    // Compare les données du form avec le json
    function comparerPokemon(idJson, idForm, nomJson, nomForm, typeJson, typeForm){

        const afficher = document.getElementById('afficher');

        console.log('------------------');
        console.log(idJson);
        console.log(nomJson);
        console.log(typeJson[0]);

        if (idJson == idForm && nomJson == nomForm && typeJson[0] == typeForm || nomForm == typeJson[1]) {
            console.log('Pokémon trouvé ID: ', idJson, 'Nom : ', nomJson, 'Type : ', typeJson);
            afficher.textContent = `Pokémon trouvé: ID ${idJson}, Nom: ${nomJson}, Type: ${typeJson[0]}`;
        } else {
            console.log('Aucun pokémon trouvé.');
            afficher.textContent = 'Aucun Pokémon trouvé avec ces critères.';
        }
    }
}

filtrePokemon();
