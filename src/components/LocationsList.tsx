import { Location,Maybe } from "@/graphql/graphql";
import LocationComponent from "./Location";
import { AllLocations } from "@/lib/GetLocations";
import { getAllLocations } from "@/types";

export default async function LocationsList({ dimension }:getAllLocations){

    let results:Maybe<Array<Maybe<Location>>> | undefined;
    let query = {
        dimension:dimension
    }
    results = await AllLocations(query);
    return(
        <>
            {
                results?.map((location:Maybe<Location>) => (
                    <LocationComponent key={location?.id} name={location?.name} dimension={location?.dimension} residents={location?.residents}/>
                ))
            }
        </>  
        )
}