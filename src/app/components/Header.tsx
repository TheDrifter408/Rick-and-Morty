import Link from "next/link";
type LinkProps = {
    title:string;
    link:string;
}
export default function Header(links:LinkProps[]){
    return(
        <header>
            <div>
                Logo
            </div>
            <div>
                {
                    links.map((links:LinkProps) => (
                        <Link href={links.link}>{links.title}</Link>
                    ))
                }
            </div>
        </header>
    )
}