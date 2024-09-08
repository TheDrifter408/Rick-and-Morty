import { Query } from "@/graphql/graphql";
import { getCharacter } from "@/types";
import { request,gql } from "graphql-request";

const graphdoc = gql`
    query getCharacter($id:ID!) {
        character(id:$id) {
            id
            name
            gender
            status
            species
        }
    }
`;

export async function GetCharacter(params:getCharacter){
    const { character } = await request<Query>('https://rickandmortyapi.com/graphql',graphdoc,params)
    return character;
}