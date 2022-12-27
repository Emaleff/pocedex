import axios from "axios"
import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex"
import { initialState } from "../initialState"
import { TCurrentPocemon } from "@/types/Tpocemons"
import { load } from "@/api/http"


/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
    updatePocemons: any
    updateCurrentPocemons: any
    addPocemons: TCurrentPocemon[]
    setCurrentPage: number
    setLoading: boolean
}

export const mutations: MutationTree<State> & Mutations = {
    setLoading(state, setLoading) {
        state.isLoading = setLoading
    },
    setCurrentPage(state, newCurrentPage) {
        state.currentPage = newCurrentPage
    },
    updatePocemons(state, pocemons) {
        state.allPocemons = pocemons
    },
    updateCurrentPocemons(state, pocemon) {
        state.currentPocemon = pocemon
    },
    addPocemons(state, pocemons) {
        if (Array.isArray(state.allPocemons) && Array.isArray(pocemons)) {
            state.allPocemons = pocemons
        }
    },
}
/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
    getPocemons(state: State): any
    getCurrentPocemon(state: State): any
    getCurrentPage(state: State): number
    getTotalPage(state: State): number
    getLoading(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
    getLoading({ isLoading }) {
        return isLoading
    },
    getCurrentPage({ currentPage }) {
        return currentPage
    },
    getTotalPage({ totalPage }) {
        return totalPage
    },
    getPocemons({ allPocemons }) {
        return allPocemons
    },
    getCurrentPocemon({ currentPocemon }) {
        return currentPocemon
    },
}

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {
    loadPocemons: [payload: number, returnVal: void]
    fetchCurrentPocemon: [payload: number, returnVal: void]
    changeCurrentPage: [payload: number, returnVal: void]
}

export const actions: Actions = {
    async loadPocemons({ commit, state }) {
        type responce = {
            data: TCurrentPocemon
        }
        commit("setLoading", true)
        commit("addPocemons", [])
        const arrPocemons: TCurrentPocemon[] = []
        if (state.currentPage < 31) {
            for (
                let i = ((state.currentPage - 1) * state.countPocemonsPage) + 1;
                i <= state.currentPage * state.countPocemonsPage;
                i++
            ) {
                const data: TCurrentPocemon = await load(i)
                arrPocemons.push(data)
            }
            commit("addPocemons", arrPocemons)
            commit("setLoading", false)
        } else {
            for (let i = ((state.currentPage - 1) * state.countPocemonsPage) + 1; i <= state.limit; i++) {
                const data = await load(i)
                arrPocemons.push(data)
            }
            commit("addPocemons", arrPocemons)
        }
    },
    async fetchCurrentPocemon({ commit }, id: number) {
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            )

            commit("updateCurrentPocemons", data)
        } catch (e) {
            console.log(e)
            // throw new Error(e)
        }
    },
    changeCurrentPage({ commit }, newCurrentPage: number) {
        commit("setCurrentPage", newCurrentPage)
    }
}


/*
----------------------Actions no change code-----------------------------
*/

type Actions = {
    [Property in keyof ActionsPayload]: (
        augContext: AugmentedActionContext,
        payload: ActionsPayload[Property][0]
    ) => ActionsPayload[Property][1]
}

type AugmentedActionContext = {
    commit<K extends keyof MutationPayload>(
        key: K,
        payload?: MutationPayload[K],
        options?: CommitOptions
    ): void
} & Omit<ActionContext<State, State>, "commit">

/*
  ---------------------- Mutations - no change code ------------------------
*/

type Mutations = {
    [Property in keyof MutationPayload]: (
        state: State,
        payload: MutationPayload[Property]
    ) => void
}

/*
  ---------------------- Getters - no change code -------------------------------
*/
type State = typeof initialState