import { redirect } from "next/dist/server/api-utils"

interface PageProps{
    searchParams:{
         [key:string]: string | string[] | undefined
    }
}
const Page = ({searchParams}: PageProps) => {
    const query= searchParams.query
    if(Array.isArray(query) || !query){
        return redirect("/")
    }
    //querying Logic to et data from our Postgres Database

    return <p>Augastino</p>
}

export default Page