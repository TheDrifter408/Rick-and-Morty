import EpisodeSearch from "@/components/EpisodeSearch";
import EpisodesList from "../../components/EpisodesList";
import Loading from "../loading";
import { Suspense } from "react";

export default async function Page({searchParams}:{
  searchParams?:{ [key: string]: string | string[] | undefined } //To intercepts requests 
  // sent from client pages i.e 'EpisodeQueries'
}){
  const query = {
    name: typeof searchParams?.name === 'string' ? searchParams?.name: "",
  }
  return (
        <>
          <EpisodeSearch>
            <Suspense fallback={<Loading type="Episodes" />}>
              <EpisodesList name={query.name} />
            </Suspense>
          </EpisodeSearch>
        </>
  );
}