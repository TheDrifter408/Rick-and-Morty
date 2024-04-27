import Image from "next/image";
import Header from "../components/Header";
import { randomUUID } from "crypto";
import {request} from 'graphql-request';
import { EpisodesQuery } from "@/gql/graphql";
import { graphql } from "../gql/gql";
import CompEpisode from "../components/CompEpisode";

const document = graphql(`
  query Episodes {
    episodes {
      results {
        id
        name 
        air_date
        characters {
          name
        }
      }
    }
  }
`);
async function getEpisodes() {
  const { episodes } = await request<EpisodesQuery>('https://rickandmortyapi.com/graphql',document);
  return episodes?.results;
}

const links = [
  {
  id: randomUUID(),
  title:'Characters',
  link:'/characters'
  },
  {
    id:randomUUID(),
    title:'Locations',
    link:'/locations'
  },
  {
    id:randomUUID(),
    title:'Episodes',
    link:'/episodes'
  }
]

export default async function Home() {

 const episodes = await getEpisodes();

  return (
    <>
      <Header links={links} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-5/6 md:w-2/3 sm:w-full">
          <Image className="mx-auto" src="/Rick_and_Morty.svg" width={700} height={700} alt="Rick_and_Morty_title" />
          <h1 className="text-3xl text-center my-2">Episodes</h1>
        </div>
        <section className="w-5/6 mx-auto">
            {
              episodes && episodes.map((episode) => (
                  <CompEpisode key={episode?.id} name={episode?.name} air_date={episode?.air_date} characters={episode?.characters}  />
              ))
            }
        </section>
      </main>
    </>
  );
}
