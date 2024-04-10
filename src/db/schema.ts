//defines what kind of data structures live in the database
//doing it below:
import {pgTable, text} from "drizzle-orm/pg-core";

export const productsTable=pgTable("products",{
    id: text ("id").products
})