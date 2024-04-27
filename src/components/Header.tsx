import Link from "next/link";
type linkType = {
    id: string;
    title:string;
    link:string;
}

type HeaderProps = {
    links:linkType[]
}


export default function Header({links}:HeaderProps){
    return(
        <header className="flex justify-between my-4 p-2 border-b-2 border-slate-300 shadow-sm shadow-slate-300/100">
            <div className="ml-2">
                Logo
            </div>
            <div className="mr-2">
                {
                    links.map((links:linkType) => (
                        <Link key={links.id} className="mx-2 font-semibold" href={links.link}>{links.title}</Link>
                    ))
                }
            </div>
        </header>
    )
}