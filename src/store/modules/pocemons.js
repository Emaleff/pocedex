import axios from "axios";

const pocemons = {
  state() {
    return {
      allPocemons: [],
      currentPocemon: {},
      fullPocemons: false,
      startPocemonPage: 1,
      lastPocemonPage: 20,
      limit: 904,
      countPocemonsPage: 20,
      smallLoader: false,
    };
  },
  getters: {
    getPocemons(state) {
      return state.allPocemons;
    },
    getCurrentPocemon(state) {
      return state.currentPocemon;
    },
    isFullPocemons(state) {
      return state.fullPocemons;
    },
    isSmallLoader(state) {
      return state.smallLoader;
    },
  },
  actions: {
    async loadPocemons(ctx) {
      ctx.commit("updateSmallLoader", true);
      let arrPocemons = [];
      if (ctx.state.lastPocemonPage < 900) {
        for (
          let i = ctx.state.startPocemonPage;
          i <= ctx.state.lastPocemonPage;
          i++
        ) {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          arrPocemons.push(data);
        }
        ctx.commit("updateCountPocemonPage");
        ctx.commit("addPocemons", arrPocemons);
      } else {
        for (let i = ctx.state.startPocemonPage; i <= ctx.state.limit; i++) {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          arrPocemons.push(data);
        }
        ctx.commit("addPocemons", arrPocemons);
        ctx.commit("updateFullPocemons");
        ctx.commit("updateSmallLoader", false);
      }
    },

    async fetchCurrentPocemon(ctx, id) {
      if (parseInt(id) && id > 0 && id <= 904) {
        try {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

          ctx.commit("updateCurrentPocemons", data);
        } catch (e) {
          throw new Error(e);
        }
      }
    },
  },
  mutations: {
    updatePocemons(state, pocemons) {
      state.allPocemons = pocemons;
    },
    updateCurrentPocemons(state, pocemon) {
      state.currentPocemon = pocemon;
    },
    addPocemons(state, pocemons) {
      state.allPocemons = [...state.allPocemons, ...pocemons];
    },
    updateFullPocemons(state) {
      state.fullPocemons = true;
    },
    updateCountPocemonPage(state) {
      state.startPocemonPage += state.countPocemonsPage;
      state.lastPocemonPage += state.countPocemonsPage;
    },
    updateSmallLoader(state, isSmallLoader) {
      state.smallLoader = isSmallLoader;
    },
  },
};
export default pocemons;
