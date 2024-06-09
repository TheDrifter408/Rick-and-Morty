"use client"
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Box from "./Box";

export default function EpisodeSearch({ children }:{
    children:ReactElement
}){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter(); 

    const [queryParams,setQueryParams] = useState({
        name:''
    });

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        setQueryParams({...queryParams,name:e.target.value})
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        const current = new URLSearchParams(searchParams);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }

    return(
        <>
        <h1 className="text-3xl text-center my-2">Episodes</h1>
        <section className="w-5/6 mx-auto grid">
            <form className="w-full flex justify-evenly gap-2 p-2">
            <input value={queryParams.name} onChange={handleChange} className="w-1/2 px-4 py-1 bg-slate-100 rounded-xl" placeholder="Episode Name..." type="text" name="episode_name" id="episode_name" />
                <button type="submit" onSubmit={handleSubmit}>Search</button>
            </form>
            <Box styles="grid items-start -translate-x-full opacity-0">
                {children}
            </Box>
        </section>
        </>
    )
}