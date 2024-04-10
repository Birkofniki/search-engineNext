"use client" //since this is a server component, without this use client it won't work on clinet side.
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import {Input} from "./ui/input"
import { useRef, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external"
const SearchBar = () => {
const inputRef= useRef<HTMLInputElement>(null)

//creating the search functionality starts below, tells what exactly happens on clicking enter
const [isSearching, startTransition] = useTransition() //hooks into the page switching cycle
const router= useRouter ()
const [query,setQuery]=useState<string>()

const search = () => {
    startTransition(() => {
        router.push("/search?=${query}")

    })

} //this an arrow function

    return (
        <div className="relative w-full h-14 flex flex-col bg-white">
            <div className="relative h-14 z-10 rounded-md">
                <Input
                disabled={isSearching}
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                onKeyDown={(e) =>{
                    if(e.key==="Enter") {
                        search()
                    }

                    if(e.key === "Escape") {
                        inputRef?.current?.blur()
                    }

                }}
                 ref={inputRef} className="absolute inset-0 h-full" />

<Button
    disabled={isSearching}
    size="lg"
    onClick={search}
    className="absolute right-0 inset-y-0 h-full rounded-1-none">
        {isSearching ? <Loader2 className="h-6 w-6 animate-spin" /> : <Search className="h-6 w-6" /> }
</Button>
            </div>

        </div>
    )
}

export default SearchBar