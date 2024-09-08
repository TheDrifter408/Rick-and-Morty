import {Character, Maybe } from "@/gql/graphql";
import CharacterComponent from "./Character";
import { getAllCharacters } from "@/lib/GetCharacters";
import { AllCharacters } from "@/types";


export default async function CharactersList({name,species,gender,status, page}:AllCharacters){
        const query = {
        name: name,
        species: species,
        gender: gender,
        status: status,
        page:page
        }
        const { characters, info } = await getAllCharacters(query);
    return(
        <>
        { 
            characters?.map((char:Maybe<Character>) => (
                <CharacterComponent  key={char?.id} id={char?.id} name={char?.name} status={char?.status} />
            )) 
        }
        </>    
    )
}