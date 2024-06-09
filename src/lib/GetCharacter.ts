import { graphql } from "@/gql";
import { GetCharacterQuery } from "@/gql/graphql";
import { Character } from "@/types";
import request from "graphql-request";


const graphdoc = graphql(`
    query getCharacter($id:ID!) {
        character(id:$id) {
            id
            name
            image
            gender
            status
            species
            origin{
                name
            }
        }
    }
`);

export async function GetCharacter(params:Character){
    const { character } = await request<GetCharacterQuery>('https://rickandmortyapi.com/graphql',graphdoc,params)
    return character;
}