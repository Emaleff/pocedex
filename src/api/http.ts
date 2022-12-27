import axios from 'axios'
import { TCurrentPocemon } from "@/types/Tpocemons";

export async function load(id: number): Promise<TCurrentPocemon> {
    const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    )
    return data
}