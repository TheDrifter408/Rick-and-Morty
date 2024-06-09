import { graphql } from "@/gql";
import { GetLocationsQuery } from "@/gql/graphql";
import { AllLocations } from "@/types";
import request from "graphql-request";

const document = graphql(`
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
`);

export async function getAllLocations(queryParams:AllLocations){
    const { locations } = await request<GetLocationsQuery>('https://rickandmortyapi.com/graphql',document,queryParams);
    return locations?.results;
}
