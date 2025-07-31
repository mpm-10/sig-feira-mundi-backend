import type { IComercio } from "../interface/IComercio.js";



let idComercio : number | null = null;
let nome : string | null = null;
let endereco : string | null = null;
let telefone : string | null = null;
let latitude : number | null = null;
let longitude : number | null = null;
let geometria : string | null = null;



function objectToJSON(comercioObject : IComercio) {
    idComercio = "id_comercio" in comercioObject ? comercioObject["id_comercio"] : null;
    nome = "nome" in comercioObject ? comercioObject["nome"] : null;
    endereco = "endereco" in comercioObject ? comercioObject["endereco"] : null;
    telefone = "telefone" in comercioObject ? comercioObject["telefone"] : null;
    latitude = "latitude" in comercioObject ? comercioObject["latitude"] : null;
    longitude = "longitude" in comercioObject ? comercioObject["longitude"] : null;
    geometria = "geometria" in comercioObject ? comercioObject["geometria"] : null;
    
    const comercio : IComercio = {
        id_comercio : idComercio,
        nome : nome,
        endereco : endereco,
        telefone : telefone,
        latitude : latitude,
        longitude : longitude,
        geometria : geometria
    };

    return comercio;
}

function JSONToObject(comercioJSON : IComercio) {
    idComercio = "id_comercio" in comercioJSON ? comercioJSON["id_comercio"] : null;
    nome = "nome" in comercioJSON ? comercioJSON["nome"] : null;
    endereco = "endereco" in comercioJSON ? comercioJSON["endereco"] : null;
    telefone = "telefone" in comercioJSON ? comercioJSON["telefone"] : null;
    latitude = "latitude" in comercioJSON ? comercioJSON["latitude"] : null;
    longitude = "longitude" in comercioJSON ? comercioJSON["longitude"] : null;
    geometria = "geometria" in comercioJSON ? comercioJSON["geometria"] : null;
    
    const comercio : IComercio = {
        id_comercio : idComercio,
        nome : nome,
        endereco : endereco,
        telefone : telefone,
        latitude : latitude,
        longitude : longitude,
        geometria : geometria
    };

    return comercio;
}



export {
    objectToJSON,
    JSONToObject
}