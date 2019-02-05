export interface IBeer{

    id: number;
    name: string;
    abv: number;
    ibu: number;
    brewery: string;
    location: string;
    sizes: {
        "8oz",
        "12oz",
        "24oz"
    }
    prices: {
        "$4",
        "$6",
        "$8"

    }

    mainTag: string;

    tags: Array<string>;

    images: any[];
    
}