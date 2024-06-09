"use client";
import { ChangeEvent, FormEvent, ReactElement, Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter,usePathname } from 'next/navigation';
import { animate } from 'motion';
import Box from './Box';


export default function CharacterSearch({ children }:{ children:ReactElement }){
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [queryParams,setParams] = useState({
        name:"",
        species:"",
        gender:"",
        status:""
    })

    function handleInput(e:ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        setParams({...queryParams,[name]:value});
    }

    function handleSelect(e:ChangeEvent<HTMLSelectElement>){
        const { name, value } = e.target;
        setParams({...queryParams,[name]:value})
    }
    
    function handleSubmit(e:FormEvent){
        e.preventDefault();
        const current = new URLSearchParams(searchParams);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }
    
    //animations
    const box = useRef(null);

    useEffect(() => {
        if(box.current){
            animate(box.current,
                { opacity: 1, transform: "none" },
                { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            )
        }
    },[]);

    return(
        <>
        <h1 className="text-3xl text-center my-2">Characters</h1>
        <section id="section" className="w-2/3 mx-auto grid gap-2">
            <form className="w-full py-2 px-1 grid gap-1 sm:grid-cols-1 sm:col-span-1 md:grid-cols-1 md:col-span-1 lg:grid-cols-1 lg:col-span-1
            xl:grid-cols-4 xl:col-span-4" id="FilterForm">
                <input value={queryParams.name} onChange={handleInput} className="w-full py-4 pl-4 pr-10 border border-slate-400 rounded-xl" placeholder="Filter by name.." type="search" name="name" id="name" />
                <select className="w-full p-4 border border-slate-400 rounded-xl" onChange={handleSelect} name="species" form="FilterForm" id="species">
                    <option className="text-slate-200" value="">Species</option>
                    <option value="Human">Human</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Animal">Animal</option>
                    <option value="Alien">Alien</option>
                    <option value="Mythological Creature">Mythological Creature</option>
                    <option value="Disease">Disease</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Robot">Robot</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="unknown">unknown</option>
                </select>
                <select className="w-full p-4 border border-slate-400 rounded-xl" onChange={handleSelect} name="gender" id="gender">
                    <option className="text-slate-200" value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>    
                <select className="w-full p-4 border border-slate-400 rounded-xl" onChange={handleSelect} name="status" id="status">
                    <option className="text-slate-200" value="">Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <button className="border border-slate-400 rounded-xl py-1  xl:col-span-4 hover:bg-black hover:text-white" type="submit" onSubmit={handleSubmit}>
                    Search    
                </button>  
            </form>
                <Box styles="grid gap-2 -translate-x-full opacity-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {children}
                </Box> 
        </section>
        </>
    )
}

