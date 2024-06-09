import LocationSearch from "@/components/LocationSearch";
import LocationsList from "@/components/LocationsList";
import { Suspense } from "react";
import Loading from "../loading";

export const revalidate = 0;

export default function Page({searchParams}:{
    searchParams?:{ [key: string]: string | string[] | undefined } //To intercepts requests 
    // sent from client component i.e 'EpisodeSearch'
  }){
    let query = {
        dimension: typeof searchParams?.dimension === 'string' ? searchParams?.dimension: "",
    }
    console.log(query)
    return(
        <>
        <LocationSearch>
            <Suspense fallback={<Loading loadingType="Locations" />}>
                <LocationsList dimension={query.dimension} />
            </Suspense> 
        </LocationSearch>
        </>

    )
}