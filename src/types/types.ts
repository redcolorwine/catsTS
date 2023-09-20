export type BreedsType = {
    adaptability?: number,
    affection_level?: number,
    alt_names?: string,
    description?: string,
    dog_friendly?: number,
    energy_level?: number,
    grooming?: number,
    hairless?: number,
    health_issues?: number,
    id?: string,
    name?: string,
    origin?: string,
    temperament?: string,
    wikipedia_url?: string,
}
export type CatTags = {
    id: number,
    name: string,
}
export type CatItemType = {
    breeds: BreedsType[],
    height: number,
    width: number,
    id: string,
    url?: string,
    categories?: CatTags[],
}

export type GetCatsType = {
    data: CatItemType[];
}