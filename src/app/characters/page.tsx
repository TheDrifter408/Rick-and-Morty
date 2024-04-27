import Header from "@/components/Header"
import Image from "next/image"
import { randomUUID } from "crypto"
import { graphql } from "@/gql/gql";
import {request} from 'graphql-request';
import { CharactersQuery } from "@/gql/graphql";
import CompCharacter from "@/components/CompCharacter";

const links = [
    {   
        id: randomUUID(),
        title:"Characters",
        link:'/characters'
    },
    {   
        id:randomUUID(),
        title:"Locations",
        link:'/locations'
    },
    {
        id:randomUUID(),
        title:"Episodes",
        link:'/'
    }
]

const document = graphql(`
    query Characters {
        characters {
            results {
                id
                name
                status
            }
        }
    }
`);

async function getCharacters(){
    const { characters } = await request<CharactersQuery>('https://rickandmortyapi.com/graphql', document);
    return characters?.results;
}

export default async function characters(){
    const characters = await getCharacters();
    return(
        <>
        <Header links={links} />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-5/6 md:w-2/3 sm:w-full">
          <Image className="mx-auto" src="/Rick_and_Morty.svg" width={700} height={700} alt="Rick_and_Morty_title" />
          <h1 className="text-3xl text-center my-2">Characters</h1>
        </div>
            <section className="w-5/6 mx-auto grid grid-cols-3 gap-2">
                {
                    characters?.map((char) => (
                        <CompCharacter id={char?.id} key={char?.id} name={char?.name} status={char?.status} />
                    ))
                }
            </section>
        </main>
        </>
        
    )
}