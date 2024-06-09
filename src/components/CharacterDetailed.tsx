import Image from "next/image";
import Container from "./Box";
import { Character } from "@/gql/graphql";

function CharacterDetails({id,name,gender,status,species,origin}:Character){
    return(
        <Container styles="-translate-x-full opacity-0">
        <>
        <h1 className="text-xl font-bold text-center">Character Information</h1>
            <div className="rounded-xl">
                <Image className="mx-auto rounded-xl" width={300} height={300} src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name+"-image"} />
            </div>
        <div>
            <h2 className="font-bold">Name: 
                <span className="px-1 italic font-semibold">
                    {name}
                </span> 
            </h2>
            <h2 className="font-bold">Gender:
                    <span className="px-1 italic font-semibold">   
                        {gender}
                    </span>
            </h2>
            <h2 className="font-bold">Status: 
                    <span className={`px-1 italic font-semibold + ${status === "Alive" ? "text-green-700" : "text-red-700"}`}>
                        {status}
                    </span>
            </h2>
            <h2 className="font-bold">Species: 
                <span className="px-1 italic font-semibold">    
                    {species}
                </span>
            </h2>
            <h2 className="font-bold">Origin: 
                <span className="px-1 italic font-semibold">
                    {origin?.name}
                </span>
            </h2>
        </div>
        </>
        </Container> 
    )
}

export default CharacterDetails;