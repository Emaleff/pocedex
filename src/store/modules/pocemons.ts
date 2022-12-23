import axios from "axios";
import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex";
import { initialState } from "../initialState";
import { } from "../../types/Tpocemons";


/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
    updatePocemons: any;
    updateCurrentPocemons: any;
    addPocemons: object[];
    updateFullPocemons: void;
    updateCountPocemonPage: void;
    updateSmallLoader: boolean;
    setCurrentPage: number;
    setCurrentListPocemons: number
};

export const mutations: MutationTree<State> & Mutations = {
    setCurrentListPocemons(state, currentPage){
        state.currentListPocemons = state.allPocemons.slice(state.countPocemonsPage * (currentPage -1), state.countPocemonsPage * currentPage)
    },
    setCurrentPage(state, newCurrentPage) {
        state.currentPage = newCurrentPage
    },
    updatePocemons(state, pocemons) {
        state.allPocemons = pocemons;
    },
    updateCurrentPocemons(state, pocemon) {
        state.currentPocemon = pocemon;
    },
    addPocemons(state, pocemons) {
        if (Array.isArray(state.allPocemons) && Array.isArray(pocemons)) {
            if (state.allPocemons.length === 1) {
                state.allPocemons = pocemons
            } else {
                state.allPocemons = [...state.allPocemons, ...pocemons]
            }
        }
    },
    updateFullPocemons({ fullPocemons }) {
        fullPocemons = true;
    },
    updateCountPocemonPage({ startPocemonPage, lastPocemonPage, countPocemonsPage }) {
        startPocemonPage += countPocemonsPage;
        lastPocemonPage += countPocemonsPage;
    },
    updateSmallLoader(state, isSmallLoader) {
        state.smallLoader = isSmallLoader;
    },
};
/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
    getPocemons(state: State): any;
    getCurrentPocemon(state: State): any;
    isFullPocemons(state: State): any;
    isSmallLoader(state: State): boolean;
    getCurrentPage(state: State): number;
    getTotalPage(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
    getCurrentPage({ currentPage }) {
        return currentPage
    },
    getTotalPage({ totalPage }) {
        return totalPage
    },
    getPocemons({ currentListPocemons }) {
        return currentListPocemons;
    },
    getCurrentPocemon({ currentPocemon }) {
        return currentPocemon;
    },
    isFullPocemons({ fullPocemons }) {
        return fullPocemons;
    },
    isSmallLoader({ smallLoader }) {
        return smallLoader;
    },
};

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {
    loadPocemons: [payload: void, returnVal: void],
    fetchCurrentPocemon: [payload: number, returnVal: void];
    changeCurrentPage: [payload: number, returnVal: void];
};
type data = {

}
export const actions: Actions = {
    async loadPocemons({ commit, state }) {
        commit("updateSmallLoader", true);
        const arrPocemons = [];
        if (state.lastPocemonPage < 900) {
            for (
                let i = state.startPocemonPage;
                i <= 45;
                i++
            ) {
                const { data } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                arrPocemons.push(data);
            }
            commit("updateCountPocemonPage");
            commit("addPocemons", arrPocemons);
            commit("setCurrentListPocemons", 1)
        } else {
            for (let i = state.startPocemonPage; i <= state.limit; i++) {
                const { data } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                arrPocemons.push(data);
            }
            commit("addPocemons", arrPocemons);
            commit("updateFullPocemons");
            commit("updateSmallLoader", false);
        }
    },
    async fetchCurrentPocemon({ commit }, id: number) {
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            commit("updateCurrentPocemons", data);
        } catch (e) {
            console.log(e)
            // throw new Error(e);
        }
    },
    changeCurrentPage({ commit }, newCurrentPage: number) {
        commit("setCurrentPage", newCurrentPage)
        commit("setCurrentListPocemons", newCurrentPage )
    }
};


/*
----------------------Actions no change code-----------------------------
*/

type Actions = {
    [Property in keyof ActionsPayload]: (
        augContext: AugmentedActionContext,
        payload: ActionsPayload[Property][0]
    ) => ActionsPayload[Property][1];
};

type AugmentedActionContext = {
    commit<K extends keyof MutationPayload>(
        key: K,
        payload?: MutationPayload[K],
        options?: CommitOptions
    ): void;
} & Omit<ActionContext<State, State>, "commit">;

/*
  ---------------------- Mutations - no change code ------------------------
*/

type Mutations = {
    [Property in keyof MutationPayload]: (
        state: State,
        payload: MutationPayload[Property]
    ) => void;
};

/*
  ---------------------- Getters - no change code -------------------------------
*/
type State = typeof initialState;