import { options } from "./options/mySqlDB.js";
import knex from "knex";

const knexConnection = knex(options);

knexConnection.schema.createTable('cars', table =>{
    table.increments('id')
    table.string('nombre')
    table.integer('price')
})


.then(()=>console.log('tabla creada'))
.catch((error) =>{console.log(error); throw error})
.finally(()=>{
    knexConnection.destroy()
})