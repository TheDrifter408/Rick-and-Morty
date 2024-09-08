import { request, gql} from "graphql-request";
import { getAllEpisodes } from "@/types";
import { Query } from "@/graphql/graphql";

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
    const { episodes } = await request<Query>('https://rickandmortyapi.com/graphql',document,queryParams);
    return episodes?.results;  
  }