import { graphql } from "@/gql";
import request from "graphql-request";
import { Episode, GetEpisodesQuery, Maybe } from "@/gql/graphql";
import { AllEpisodes } from "@/types";

const document = graphql(`
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
`);

export async function getAllEpisodes(queryParams:AllEpisodes){
    const { episodes } = await request<GetEpisodesQuery>('https://rickandmortyapi.com/graphql',document,queryParams);
    return episodes?.results;  
  }