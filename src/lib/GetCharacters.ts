import { graphql } from "@/gql/gql";
import { GetCharactersQuery } from "@/gql/graphql";
import { AllCharacters } from "@/types";
import { request } from 'graphql-request';

const graphdoc = graphql(`
    query getCharacters($name: String!, $gender: String!, $species: String!, $status: String!) {
        characters(
    filter: {name: $name, gender: $gender, species: $species, status: $status}
  ) {
            results {
                id
                name
                species
                gender
                status
            }
        }
    }
`);


export async function getAllCharacters(queryParams:AllCharacters){
    const { characters } = await request<GetCharactersQuery>('https://rickandmortyapi.com/graphql',graphdoc,queryParams);
    return characters?.results;    
}
