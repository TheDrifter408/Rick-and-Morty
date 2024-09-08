import { Location } from "@/gql/graphql";
import Image from "next/image";

export default function LocationComponent({name,dimension,residents}:Location){
    return(
            <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-2xl text-center">
                    {name}
                </h3>
                <h3 className="font-semibold text-xl text-center">
                    {dimension}
                </h3>
                <h2 className="font-semibold">Residents:</h2>
                <div className="grid gap-4 py-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 ">
                    {
                       residents && residents.length > 0 ?
                        residents.map((resident) => (
                        <div key={resident?.id} className="w-full rounded-xl mx-auto transition duration-50 ease-in-out hover:scale-125">
                            <div className="rounded-xl mx-auto">
                            <Image loading="lazy" className="rounded-xl mx-auto py-1" src={`https://rickandmortyapi.com/api/character/avatar/${resident?.id}.jpeg`} alt={`${resident?.name} + image`} width={150} height={150} />
                            </div>      
                            <p className="text-center font-semibold">{resident?.name}</p>
                        </div>
                       )) : <div className="sm:col-span-2 md:col-span-3 xl:col-span-5">
                                <p className="text-center">How strange,there&apos;s nobody here....</p>
                            </div>
                    }
                </div>
            </div>
    )
}