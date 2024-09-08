import { Query } from "@/gql/graphql";
import { AllCharacters } from "@/types";
import { request,gql } from 'graphql-request';

const queryDoc = gql`
    query getCharacters($name: String!, $gender: String!, $species: String!, $status: String!,$page:Int!) {
        characters(page:$page,
    filter: {name: $name, gender: $gender, species: $species, status: $status}
  ) {
            info {
                count
                pages
            },
            results {
                id
                name
                species
                gender
                status
            }
        }
    }
`;


export async function getAllCharacters(queryParams:AllCharacters){
    const { characters } = await request<Query>('https://rickandmortyapi.com/graphql',queryDoc,queryParams);
    const result = {
        characters: characters?.results,
        info:characters?.info
    }
    return result;
}
