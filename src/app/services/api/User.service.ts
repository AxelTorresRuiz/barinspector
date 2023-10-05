import { User } from "./User.model";
import { db, useDB } from "./DBLocal";
import { Url } from "./const.api";

var URLCompleta = Url + "/User";
export async function userGet(parametros: string = "?$filter=DeleteAt eq null") {
    let user = {};
    await fetch(URLCompleta + parametros)
        .then(response => response.json())
        .then(data => {
            // Aquí convertirás la respuesta a una instancia de la interfaz "BarBottle"
            user = data["value"] as User[];
            console.info(user);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
    return user;
}

export async function userPost(user: User, params: string = "") {
    console.log(user)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    };

    console.info(JSON.stringify(user))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.info(user);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

export async function userPut(user: User, params: string = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(user)
    };

    console.info(JSON.stringify(user))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.info(user);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

export async function limpiraYGuardarBarraActiva(value:User){
    await db.table("userActivo").clear();
    db.table("userActivo").add(value);
    obtenerBarraActiva()
}

export async function obtenerBarraActiva() {
    return (await db.table("userActivo").toArray())[0];
}