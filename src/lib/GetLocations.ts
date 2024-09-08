import { Query } from "@/graphql/graphql";
import { getAllLocations } from "@/types";
import { request,gql } from "graphql-request";
const document = gql`
  query getLocations($dimension:String) {
    locations (filter:{ dimension:$dimension }) {
        results {
        id
        name 
        dimension
        residents {
            id
            name
            image
        }
      }
    }
  }
`;

export async function AllLocations(queryParams:getAllLocations){
    const  { locations } = await request<Query>('https://rickandmortyapi.com/graphql',document,queryParams);
    return locations?.results;
}
