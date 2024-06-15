// Query Types

export type AllCharacters = {
    name:string;
    gender:string;
    species:string;
    status:string;
    page:number
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