import { Episode, Maybe } from "@/gql/graphql";
import EpisodeComponent from "./Episode";
import { AllEpisodes } from "@/lib/GetEpisodes";
import { getAllEpisodes } from "@/types";

export default async function EpisodesList({ name }:getAllEpisodes){

  const query = {
    name:name
  };

  let results:Maybe<Array<Maybe<Episode>>> | undefined; 
  results = await AllEpisodes(query); 
  
  return(
      <>
        {
          results?.map((episode:Maybe<Episode>) => (
          <EpisodeComponent key={episode?.id} name={episode?.name} air_date={episode?.air_date} characters={episode?.characters}  />
          ))
        }
      </>
  )
    

    
}