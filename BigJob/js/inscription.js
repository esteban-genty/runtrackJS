function inscription(){

    document.getElementById('inscription').addEventListener('submit', function(event){
        event.preventDefault();

        const prenom = document.querySelector('#inscription #prenom').value;
        const nom = document.querySelector('#inscription #nom').value;
        const email = document.querySelector('#inscription #email').value;
        const password = document.querySelector('#inscription #password').value;


        console.log(prenom);
        console.log(nom);
        console.log(email);
        console.log(password);

    });

}


inscription();