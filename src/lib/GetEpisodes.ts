import { request, gql} from "graphql-request";
import { getAllEpisodes } from "@/types";
import { Episodes } from "@/gql/graphql";

const document = gql`
  query getEpisodes($name:String!) {
    episodes(filter:{ name:$name }) {
      results {
        id
        name 
        air_date
        characters {
          name
        }
      }
    }
  }
`;

export async function AllEpisodes(queryParams:getAllEpisodes){
    const { results } = await request<Episodes>('https://rickandmortyapi.com/graphql',document,queryParams);
    return results;  
  }