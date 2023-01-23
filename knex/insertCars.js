import { options } from "./options/mySqlDB.js";
import knex from "knex";

const knexConnection = knex(options);

const cars = [
    { nombre: 'Audi', price: 123123 },
    { nombre: 'Mercedes', price: 234234234 },
    { nombre: 'Volkswagen', price: 2344 },
    { nombre: 'Mazda', price: 23424324 },
    { nombre: 'Ferrari', price: 234234243 },
];

knexConnection('cars').insert(cars)
    .then(() => console.log('datos cargados'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexConnection.destroy()
    })