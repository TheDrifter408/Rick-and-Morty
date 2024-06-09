"use client"
import Loading from "@/app/loading";
import CharacterDetails from "@/components/CharacterDetailed";
import { GetCharacter } from "@/lib/GetCharacter";
import { useParams } from "next/navigation";
import {  Suspense } from "react";


export default async function Page(){
    const params = useParams<{id:string}>();

    const character = await GetCharacter(params)
    
    return(
        <div className="grid gap-2">
            <Suspense fallback={<Loading type="Character"/>}>
                <CharacterDetails id={character?.id} name={character?.name} gender={character?.gender} status={character?.status} species={character?.species} origin={character?.origin} />
            </Suspense> 
        </div>
    )
}