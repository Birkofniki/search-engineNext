import { neon } from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"
const connector= neon(process.env.DATABASE_URL!) //to help us connect to the db
// @ts-expect-error 
export const db= drizzle(connector)