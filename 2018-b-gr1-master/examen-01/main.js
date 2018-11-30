var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
//const bdd = require('rxjs/operators')
class People {
    constructor() {
        this.films = [];
        this.species = [];
        this.vehicles = [];
        this.starships = [];
    }
}

const preguntasRegistroPokemon = [
    {
        type: 'input',
        name: 'abilities',
        message: "Cuál es el abilidad",
    }, {
        type: 'input',
        name: 'base_experience',
        message: "Cuál es el experiencia",
    }, {
        type: 'input',
        name: 'game_indices',
        message: "Cuál es el tu indice de juego",
    }, {
        type: 'input',
        name: 'height',
        message: "Cuál es el tu altura",
    }, {
        type: 'input',
        name: 'id',
        message: "Cuál es tu id",
    }, {
        type: 'input',
        name: 'is_default',
        message: "Cuál es el estado",
    }, {
        type: 'input',
        name: 'location_area_encounters',
        message: "Cuál es tu location area enconunter",
    }, {
        type: 'input',
        name: 'moves',
        message: "Cuál son tus movimientos",
    }, {
        type: 'input',
        name: 'name',
        message: "Cuál es tu nombre",
    }, {
        type: 'input',
        name: 'order',
        message: "Cuál es tu orden",
    }, {
        type: 'input',
        name: 'stats',
        message: "Cuál es el tu stats",
    }, {
        type: 'input',
        name: 'types',
        message: "Cuál es el tu stats",
    }, {
        type: 'input',
        name: 'weight',
        message: "Cuál es el tu peso",
    }
];
// @ts-ignore
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield leerBDD();
            const leerArchivo$ = rxjs.from(leerBDD());
            // ## 1) Busque los tipos de "types" en el arreglo `data.json`
            leerArchivo$
                .subscribe(respuesta => {
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((tipos) => tipos.types);
                console.log(JSON.stringify(types, null, 2));
            });
            //console.log(leerArchivo$);
            //## 2) Busque los tipos de "abilities" en el arreglo `data.json`
            leerArchivo$
                .subscribe(respuesta => {
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((habilidades) => habilidades.abilities);
                console.log(JSON.stringify(types, null, 2));
            });
            // ## 3) Busque los tipos de "move" en el arreglo `data.json`
            leerArchivo$
                .subscribe(respuesta => {
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                console.log(JSON.stringify(types, null, 2));
            });
            // ## 4) Clasifique a los pokemon por `types`


            // ## 5) Clasifique a los pokemon por `abilities`


            // ## 6) Clasifique a los pokemon por `move`


            // ## 7) Cree un arreglo del abecedario, revisar si existe al menos un pokemon con cada letra del abecedario.



            // ## 8) Calcular la sumatoria de las propiedades de "stats".
            leerArchivo$
                .subscribe(respuesta => {
                const respuestaSuma = {
                    speedTotal: 0,
                    specialdefenseTotal: 0
                };
                const jsonObjParsed = JSON.parse(respuesta);
                const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                console.log(JSON.stringify(types, null, 2));
                respuestaSuma.speedTotal = jsonObjParsed
                    .reduce((acumulado, actual) => {
                    if (actual.speed === "unknown") {
                        return acumulado + 0;
                    }
                    else {
                        let strMasaActual = actual.mass;
                        let numeroActual = strMasaActual.replace(/,/g, ".");
                        return acumulado + Number(numeroActual);
                    }z
                }, 0);
                respuestaSuma.specialdefenseTotal = jsonObjParsed
                    .reduce((acumulado, actual) => {
                    if (actual.speed === "unknown") {
                        return acumulado + 0;
                    }
                    else {
                        let strMasaActual = actual.height;
                        let numeroActual = strMasaActual.replace(/,/g, ".");
                        return acumulado + Number(numeroActual);
                    }
                }, 0);
                console.log('Speed Total:', respuesta.massTotal);
                console.log('SpecialDefense Total:', respuesta.heightTotal);
            });
            // ## 9) Revisar si todos los personajes guardan items **held_items**.


            // ## 10) Calcular cuantos pokemon usan cada habilidad:

            leerArchivo$
                .subscribe(respuesta => {
                    const jsonObjParsed = JSON.parse(respuesta);
                    const types = jsonObjParsed.map((movimiento) => movimiento.moves);
                    console.log(JSON.stringify(types, null, 2)

            const respuestaPok = []
            let personajeFilms:{
                nombre:string
                numeroPokemonUsanHanilidad:number
            }


            jsonObjParsed.forEach(
                (pokemon) => {
                    console.log(pokeon.name);
                    //personajeFilms.nombre = people.name;
                    console.log(pokemon.films.length);
                    //personajeFilms.numFilms = people.films.length;
                    // respuestaFilms.push(personajeFilms)
                }
            );

            console.log(respuestaFilms)
            resolve(jsonObjParsed)
                });

            // ## 11) Realizar la operacion de crear nuevos `pokemons` con la libreria `inquirer.js`
            const respuestaIng = await inquirer.prompt(preguntasRegistroPokemon);
            const respuestaIngresar = await ingresarPokemon(respuestaIng);
            console.log(respuestaPok)
        }
        catch (e) {
            console.log('Hubo un error', e);
        }
    });
}
function leerBDD() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo Base de Datos' });
            }
            else {
                resolve(contenido);
            }
        });
    });
}
;
const ingresarPokemon = (people) => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                bdd.push(people);
                fs.writeFile('pokemon/data.json', JSON.stringify(bdd, null, 2), (err) => {
                    if (err) {
                        console.log('Error ', err);
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'pokemon creado' });
                    }
                });
            }
        });
    });
};
main();
