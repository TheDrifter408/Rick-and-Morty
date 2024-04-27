
import Image from "next/image";
import { Suspense } from "react";

type CharacterProps = {
    __typename?: "Character" | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    image?: string | null | undefined;
    status?: string | null | undefined;
}

export default function CompCharacter({id,name,image,status}:CharacterProps){
    return(
        <div className="grid justify-left my-1 p-3 border border-b-3 border-t-0 shadow shadow-grey-500 rounded-xl">
            <div className="w-400">
              {
                <Image className="border rounded-xl mb-1" src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width={350} height={350} alt={name+"-image"} priority  /> 
              }
            </div>
            <h1 className="font-semibold text-green-800">Name: {name}</h1>
            <h2 className="font-semibold text-lime-600">Status: {status}</h2>
        </div>
    )
}