import {  Maybe,Character } from "@/gql/graphql";
import { getCharacter } from "@/types";
import { request, gql} from "graphql-request";


const graphdoc = gql`
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
`;

export async function GetCharacter(params:getCharacter){
    const character = await request<Maybe<Character>>('https://rickandmortyapi.com/graphql',graphdoc,params)
    return character;
}