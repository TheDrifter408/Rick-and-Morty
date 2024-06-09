import { Episode, Maybe } from "@/gql/graphql";
import EpisodeComponent from "./Episode";
import { getAllEpisodes } from "@/lib/GetEpisodes";
import { AllEpisodes } from "@/types";

export default async function EpisodesList({ name }:AllEpisodes){

  const query = {
    name:name
  };

  let results:Maybe<Array<Maybe<Episode>>> | undefined; 
  results = await getAllEpisodes(query); 
  
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