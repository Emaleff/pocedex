import {TCurrentPocemon} from "@/types/Tpocemons"

type initialState = {
    currentPocemon: TCurrentPocemon | {}
    allPocemons: TCurrentPocemon[] |[]
    startPocemonPage: number
    lastPocemonPage: number
    limit: number
    countPocemonsPage: number
    currentPage: number
    totalPage: number
    isLoading: boolean
}

export const initialState: initialState = {
    allPocemons: [],
    currentPocemon: {},
    startPocemonPage: 1,
    lastPocemonPage: 15,
    limit: 904,
    countPocemonsPage: 30,
    currentPage: 1,
    totalPage: 31,
    isLoading: true
}
