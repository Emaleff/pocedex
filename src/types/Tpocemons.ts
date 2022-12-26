export type TPocemonTypes = {
    types: {
        slot?: number,
        type: {
            name: "grass" | "poison" | "fire"
            | "water" | "flying" | "bug" | "normal" | "ground" | "electric"
            | "fairy" | "dragon" | "psychic" | "ice" | "rock" | "fighting" | "ghost" | "steel" | "dark"
        }
    }
}
export type TPocemonStat = {
    base_stat: number,
    stat:{
        name: string
    }
}

export type TCurrentPocemon = {
    id: number
    name: string
    sprites: {
        front_default: string
    }
    types: TPocemonTypes[] 
    stats: TPocemonStat[] 
} 

export type TPocemonStats = TPocemonStat[]