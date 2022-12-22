import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

import { initialState } from "./initialState";


import * as modulePocemons from "./modules/pocemons";

export type State = typeof initialState;

export const store = createStore({
  state: initialState,
  mutations: { ...modulePocemons.mutations },
  getters: { ...modulePocemons.getters },
  actions: { ...modulePocemons.actions },
});

type MutationPayload = any;

type ActionsPayload = any;

type Getters = any;

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload: ActionsPayload[K][0],
    options?: DispatchOptions
  ): ActionsPayload[K][1];
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export function useStore(): Store {
  return store as Store;
}