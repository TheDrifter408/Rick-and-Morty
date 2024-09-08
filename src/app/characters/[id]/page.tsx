import Loading from "@/app/loading";
import CharacterDetails from "@/components/CharacterDetailed";
import { GetCharacter } from "@/lib/GetCharacter";
import {  Suspense } from "react";


export default async function Page({ params }:{ params : { id:string }}){
    const query = {
        id:params.id
    }
    const character = await GetCharacter(query);
    return(
        <div className="grid gap-2">
            <Suspense fallback={<Loading type="Character"/>}>
                <CharacterDetails id={character?.id} name={character?.name} gender={character?.gender} status={character?.status} species={character?.species} origin={character?.origin} />
            </Suspense> 
        </div>
    )
}