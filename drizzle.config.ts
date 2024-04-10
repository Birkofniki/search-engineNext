import type {Config} from "drizzle-kit"
export default {
    driver: "pg", //postgres is pg
    schema: "./src/db/schema.ts",
    dbCredentials:{
      connectionString: process.env.DATABASE_URL!,  
    },
    out: "./drizzle",
} satisfies Config