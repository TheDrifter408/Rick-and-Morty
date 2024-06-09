"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactElement,ChangeEvent, useState, FormEvent} from "react";
import Box from "./Box";

function LocationSearch({children}:{children:ReactElement}){

    const [queryParams,setQueryParams] = useState({
        dimension:""
    })

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function handleSelect(e:ChangeEvent<HTMLSelectElement>){
        const { name,value } = e.target;
        setQueryParams({...queryParams,[name]:value})
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        const current = new URLSearchParams(searchParams);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }
    

    return(
        <section className="w-5/6 flex flex-col gap-2 mx-auto h-screen">
            <form className="h-fit flex gap-2 justify-between px-2 py-1">
                <select id="location-select" onChange={handleSelect} className="w-full px-4 py-2 bg-slate-50" name="dimension">
                <option value="">All Dimensions</option>
                <option value="Dimension C-137">
                    Dimension C-137
                </option>
                <option value="unknown">
                    unknown
                </option>
                <option value="Post-Apocalyptic Dimension">
                    Post-Apocalyptic Dimension
                </option>
                <option value="Replacement Dimension">
                    Replacement Dimension
                </option>
                <option value="Cronenberg Dimension">
                    Cronenberg Dimension
                </option>
                <option value="Fantasy Dimension">
                    Fantasy Dimension
                </option>
                <option value="Dimension 5-126">
                    Dimension 5-126
                </option>
            </select>
            <button type="submit" onSubmit={handleSubmit} >
                Search
            </button>
            </form>
            <h1 className="text-3xl text-center my-2">Locations</h1>
            <Box styles="grid -translate-x-full opacity-0">
                {children}
            </Box> 
        </section>
    )
}

export default LocationSearch;