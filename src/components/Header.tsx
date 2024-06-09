import Link from "next/link";
import Image from "next/image";
import Box from "./Box";
type linkType = {
    id: number;
    title:string;
    link:string;
}

const links:linkType[] = [
    {   
        id: 1,
        title:"Characters",
        link:'/characters'
    },
    {   
        id:2,
        title:"Locations",
        link:'/locations'
    },
    {
        id:3,
        title:"Episodes",
        link:'/episodes'
    },
    {
        id:4,
        title:"Home",
        link:'/'
    }
  ]

export default function Header(){
    return(
        <Box styles="-translate-y-full opacity-0">
            <header className="sticky w-full top-0 bg-white flex justify-between my-2 py-2 px-4 h-[3rem] border-b-2 border-slate-300 shadow-sm shadow-slate-300/100">
            <div className="ml-2">
                <Image src="/logo.svg" width={32} height={32} alt="logo-rick-and-morty"  />
            </div>
            <div className="mr-2">
                {
                    links.map((links:linkType) => (
                        <Link key={links.id} className="mx-2 font-semibold" href={links.link}>{links.title}</Link>
                    ))
                }
            </div>
        </header>
        </Box>
        
    )
}