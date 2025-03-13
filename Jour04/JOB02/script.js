const jsonString = '{"name": "Esteban", "age": 17, "city": "Marseille"}';
const key = "city";

function jsonValueKey(string, key){

    // Transforme la string en objet
    const jsonObj = JSON.parse(string);

    if (jsonObj.hasOwnProperty(key)) {

        return jsonObj[key];

    }else{
        console.log('Cette clé n\'existe pas');
    }

}

jsonValueKey(jsonString, key);
console.log(jsonValueKey(jsonString, key))