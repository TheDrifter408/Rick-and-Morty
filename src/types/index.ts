// Query Types

export type AllCharacters = {
    name:string;
    gender:string;
    species:string;
    status:string;
}

export type Character = {
    id:string
}

export type AllEpisodes = {
    name:string;
}

export type AllLocations = {
    dimension:string
}

export type LoadingProps = {
    type:string
}