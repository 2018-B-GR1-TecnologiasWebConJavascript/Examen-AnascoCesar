

const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
//const bdd = require('rxjs/operators')

class People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[] = [];
    species: string[] = [];
    vehicles: string[] = [];
    starships: string[] = [];
    created: string;
    edited: string;
    url: string
}

const pokemon = [
        {
            "abilities": ['comer','dormir'],
            "base_experience": 64,
            "game_indices": 124,
            "height": 12,
            "held_items": ['manzanas','peras'],
            "id": 1,
            "is_default": true,
            "location_area_encounters": 'Quito',
            "moves": ['cut','jump'],
            "name": 'pikachu',
            "order": 233,
            "stats": [12,23,34,25,22,25],
            "types": ['grass','water'],
            "weight": 64
        }]

const preguntasRegistroPokemon = [
    {
        type: 'input',
        name: 'abilities',
        message: "Cuál es el abilidad",
    },{
        type: 'input',
        name: 'base_experience',
        message: "Cuál es el experiencia",
    },{
        type: 'input',
        name: 'game_indices',
        message: "Cuál es el tu indice de juego",
    },{
        type: 'input',
        name: 'height',
        message: "Cuál es el tu altura",
    },{
        type: 'input',
        name: 'id',
        message: "Cuál es tu id",
    },{
        type: 'input',
        name: 'is_default',
        message: "Cuál es el estado",
    },{
        type: 'input',
        name: 'location_area_encounters',
        message: "Cuál es tu location area enconunter",
    },{
        type: 'input',
        name: 'moves',
        message: "Cuál son tus movimientos",
    },{
        type: 'input',
        name: 'name',
        message: "Cuál es tu nombre",
    },{
        type: 'input',
        name: 'order',
        message: "Cuál es tu orden",
    },{
        type: 'input',
        name: 'stats',
        message: "Cuál es el tu stats",
    },{
        type: 'input',
        name: 'types',
        message: "Cuál es el tu stats",
    },{
        type: 'input',
        name: 'weight',
        message: "Cuál es el tu peso",
    }
];



// @ts-ignore
async function main() {
    try {
        await leerBDD()
        const leerArchivo$ = rxjs.from(leerBDD());


        // ## 1) Busque los tipos de "types" en el arreglo `data.json`

        leerArchivo$
            .subscribe(respuesta=>{
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((tipos) => tipos.types);
                console.log(JSON.stringify(types,null,2))
            });

        //console.log(leerArchivo$);

        //## 2) Busque los tipos de "abilities" en el arreglo `data.json`

        leerArchivo$
            .subscribe(respuesta=>{
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((habilidades) => habilidades.abilities);
                console.log(JSON.stringify(types,null,2))
            });

        // ## 3) Busque los tipos de "move" en el arreglo `data.json`

        leerArchivo$
            .subscribe(respuesta=>{
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                console.log(JSON.stringify(types,null,2))
            });

        // ## 4) Clasifique a los pokemon por `types`

        // ## 5) Clasifique a los pokemon por `abilities`

        // ## 6) Clasifique a los pokemon por `move`

        // ## 7) Cree un arreglo del abecedario, revisar si existe al menos un pokemon con cada letra del abecedario.

        // ## 8) Calcular la sumatoria de las propiedades de "stats".

        leerArchivo$
            .subscribe(respuesta=>{

                const respuestaSuma = {
                    speedTotal:0,
                    specialdefenseTotal:0
            }
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                console.log(JSON.stringify(types,null,2))


        respuestaSuma.speedTotal = jsonObjParsed
            .reduce(
                (acumulado, actual) => {
                    if(actual.speed === "unknown"){
                        return acumulado + 0
                    }else{
                        let strMasaActual = actual.mass;
                        let numeroActual = strMasaActual.replace(/,/g, ".");
                        return acumulado + Number(numeroActual)
                    }
                },0
            );
        respuestaSuma.specialdefenseTotal = jsonObjParsed
            .reduce(
                (acumulado, actual) => {
                    if(actual.speed === "unknown"){
                        return acumulado + 0
                    }else{
                        let strMasaActual = actual.height;
                        let numeroActual = strMasaActual.replace(/,/g, ".");
                        return acumulado + Number(numeroActual)
                    }
                },0
            );

        console.log('Speed Total:', respuesta.massTotal);
        console.log('SpecialDefense Total:', respuesta.heightTotal);


            });


        // ## 9) Revisar si todos los personajes guardan items **held_items**.

        // ## 10) Calcular cuantos pokemon usan cada habilidad:

        leerArchivo$
            .subscribe(respuesta=>{
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                console.log(JSON.stringify(types,null,2))


                console.log('\nPersonajes por film:\n')

                const respuestaHabilidad = []
                let pokemon:{
                    nombre:string
                    nombrePokemonUsanHabilidad:number
                }

                jsonObjParsed.forEach(
                    (pokemon) => {
                        console.log(pokemon.name);
                        //personajeFilms.nombre = people.name;
                        console.log(pokemon.films.length);
                        //personajeFilms.numFilms = people.films.length;
                        // respuestaFilms.push(personajeFilms)
                    }
                );
                console.log(respuestaHabilidad);



            });

        // ## 11) Realizar la operacion de crear nuevos `pokemons` con la libreria `inquirer.js`

        const respuestaIng = await inquirer.prompt(pokemon);
        const respuestaIngresar = await ingresarPokemon(respuestaIng);
        console.log(respuestaIngresar);
    }
    catch (e) {
        console.log('Hubo un error', e);
    }

}

function leerBDD (){
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({mensaje: 'Error leyendo Base de Datos'});
            }
            else {
                resolve (contenido)
                /*

                console.log('\nGender:');
                const gender = bdd.map((v) => v.gender);
                console.log(gender);

                console.log('\neye_color:')
                const eye_color = bdd.map((v) => v.eye_color);
                console.log(eye_color)

                console.log('\nskin_color:\n')
                const skin_color = bdd.map((v) => v.skin_color);
                console.log(skin_color)

                console.log('\nhair_color:\n')
                const hair_color = bdd.map((v) => v.hair_color);
                console.log(hair_color)

                const respuesta = {
                    massTotal: 0,
                    heightTotal: 0
                }

                console.log('\nSumatoria:\n')
                respuesta.massTotal = bdd
                    .reduce(
                        (acumulado, actual) => {
                            if(actual.mass === "unknown"){
                                return acumulado + 0
                            }else{
                                let strMasaActual = actual.mass;
                                let numeroActual = strMasaActual.replace(/,/g, ".");
                                return acumulado + Number(numeroActual)
                            }
                        },0
                    );
                respuesta.heightTotal = bdd
                    .reduce(
                        (acumulado, actual) => {
                            if(actual.height === "unknown"){
                                return acumulado + 0
                            }else{
                                let strMasaActual = actual.height;
                                let numeroActual = strMasaActual.replace(/,/g, ".");
                                return acumulado + Number(numeroActual)
                            }
                        },0
                    );

                console.log('Mass Total:', respuesta.massTotal)
                console.log('Height Total:', respuesta.heightTotal)

                console.log('\nTodos los personajes usan vehículo:\n')

                const respuestaEvery = bdd
                    .every(
                        (valorActual) => {
                            return valorActual.vehicles.length > 0
                        }
                    );

                console.log(respuestaEvery);

                console.log('\nTodos los personajes usan starships:\n')

                const respuestaStarship = bdd
                    .every(
                        (valorActual) => {
                            return valorActual.starships.length > 0
                        }
                    );

                console.log(respuestaStarship);

                console.log('\nPersonajes por film:\n')

                const respuestaFilms = []
                let personajeFilms:{
                    nombre:string
                    numFilms:number
                }

                bdd.forEach(
                    (people) => {
                        console.log(people.name);
                        //personajeFilms.nombre = people.name;
                        console.log(people.films.length);
                        //personajeFilms.numFilms = people.films.length;
                        // respuestaFilms.push(personajeFilms)
                    }
                );

                console.log(respuestaFilms)
                resolve(bdd)


                */

            }
        });
    });
};



const ingresarPokemon = (people) => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({mensaje: 'Error leyendo'});
            }
            else {
                const bdd = JSON.parse(contenido);
                bdd.push(people);
                fs.writeFile('pokemon/data.json', JSON.stringify(bdd,null,2), (err) => {
                    if (err) {
                        console.log('Error ', err);
                        reject(err);
                    }
                    else {
                        resolve({mensaje: 'pokemon creado'});
                    }
                });
            }
        });
    });
};


main();

