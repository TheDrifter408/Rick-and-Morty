import { Location,Maybe } from "@/gql/graphql";
import LocationComponent from "./Location";
import { getAllLocations } from "@/lib/GetLocations";
import { AllLocations } from "@/types";

export default async function LocationsList({ dimension }:AllLocations){

    let items:Maybe<Array<Maybe<Location>>> | undefined;
    let query = {
        dimension:dimension
    }
    items = await getAllLocations(query);
        
    return(
        <>
            {
                items && items.map((location) => (
                    <LocationComponent key={location?.id} name={location?.name} dimension={location?.dimension} residents={location?.residents}/>
                ))
            }
        </>  
        )
}