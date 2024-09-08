// Query Types
type Information = {
    count:string;
    pages:string
}

export type AllCharacters = {
    name:string;
    gender:string;
    species:string;
    status:string;
    page:number | 1;
}

export type getCharacter = {
    id:string
}

export type getAllEpisodes = {
    name:string;
}

export type getAllLocations = {
    dimension:string
}

export type LoadingProps = {
    type:string
}