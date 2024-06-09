import Image from "next/image";
import { Character } from "@/gql/graphql";
import Link from "next/link";


export default function CharacterComponent({id,name,status}:Character)
{ 
  return(
    <Link href={`/characters/${id}`}>
    <div className="grid justify-left my-1 p-3 border border-b-3 border-t-0 shadow shadow-grey-500 rounded-xl w-fit mx-auto transition duration-50 ease-in-out hover:scale-125 hover:bg-white">
          <div>
            { 
              <Image className="rounded-xl mb-1" src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width={300} height={300} alt={name+"-image"}  /> 
            }
          </div>
          <h1 className="font-semibold">Name: {name}</h1>
          <h2 className="font-semibold">Status: <span className={status === "Alive" ? 'text-green-700' : 'text-red-600' }>{status}</span></h2>
      </div>
    </Link>
      
  )
}
