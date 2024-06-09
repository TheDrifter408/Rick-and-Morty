import CharacterSearch from "@/components/CharacterSearch";
import CharactersList from "@/components/CharactersList";
import Loading from "../loading";
import { Suspense } from "react";

export const revalidate = 0;

export default async function Page({searchParams}:{
  searchParams?:{ [key: string]: string | string[] | undefined } //To intercepts requests 
  // sent from client pages i.e 'CharacterQueries'
}){
  
  const query = {
    name: typeof searchParams?.name === 'string' ? searchParams?.name: "",
    gender: typeof searchParams?.gender === 'string' ? searchParams?.gender: "",
    species: typeof searchParams?.species === 'string' ? searchParams?.species: "",
    status: typeof searchParams?.status === 'string' ? searchParams?.status: "",
  }
  return(
      <>
        <CharacterSearch>
          <Suspense fallback={<Loading type="Characters" />}>
          <CharactersList name={query.name} gender={query.gender} species={query.species} status={query.status} />
          </Suspense>
        </CharacterSearch>
      </>
      
  )
}