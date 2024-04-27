type EpisodeProps = {
    typename?:string;
    id?:string;
    name?:string | null | undefined;
    air_date?:string | null | undefined;
    characters?: ({ __typename?: "Character" | undefined; name?: string | null | undefined; } | null)[] | undefined;
}
export default function CompEpisode({typename,id,name,air_date,characters}:EpisodeProps){
    return(
        <div className="border border-b-3 border-t-0 shadow shadow-grey-500 rounded-xl p-3 my-1">
            <div className="flex items-center justify-between">
            <h1 className="font-semibold text-green-800">Name: {name}</h1>
            <h3 className="font-semibold text-lime-600">Date: {air_date}</h3>
            </div>
            <div className="flex">
            <p className="mr-1 font-semibold text-purple-500">Characters:</p>
            <ul className="flex flex-wrap">
                {
                    characters?.map((char,idx) => {
                        if(idx === characters.length - 1){
                            return (
                                <li className="italic" key={idx}>{char?.name}</li>
                            )
                        } else {
                            return (
                                <li className="italic" key={idx}>{char?.name},</li>
                            )
                        }
                    } 
                )
                }
            </ul>
            </div>
        </div>
    )
}