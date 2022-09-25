<template>
  <div class="container pocemon__container">
    <router-link :to="{ name: 'main' }" class="back">
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
        />
      </svg>
      <span> Back</span>
    </router-link>
    <transition appear name="card" v-if="pocemon">
      <div class="pocemon__wrapper">
        <div class="pocemon__img-wrapper">
          <img
            :src="pocemon.sprites.front_default"
            alt=""
            v-if="pocemon.sprites"
          />
        </div>
        <div class="pocemon__id-and-name">
          <span class="pocemon__id"> #{{ pocemon.id }}</span>
          <span class="pocemon__name">{{ pocemon.name }}</span>
        </div>
        <div class="pocemon__types-wrapper">
          <pocemon-type
            v-for="types in pocemon.types"
            :types="types"
            :key="types.slot"
          />
        </div>
        <div class="pocemon__stats-wrapp">
          <pocemon-stats
            v-for="stat in pocemon.stats"
            :stat="stat"
            :key="stat.stat.name"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PocemonStats from "./PocemonStats.vue";
import PocemonType from "./PocemonType.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { PocemonType, PocemonStats },
  methods: {
    ...mapActions(["fetchCurrentPocemon"]),
  },
  computed: {
    ...mapGetters({ pocemon: "getCurrentPocemon" }),
  },
  created() {
    this.fetchCurrentPocemon(this.id);
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-enter-active,
.card-leave-active {
  transition: all 1.3s ease;
}
.card-enter-from,
.card-leave-to {
  opacity: 0.2;
  transform: translateY(130px);
}
.pocemon__container {
  position: relative;
}
.back {
  width: 120px;
  height: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 30px;
  right: 50px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    top: 5px;
    right: 15px;
  }
  @media screen and (max-width: 550px) {
    width: 90px;
    top: -15px;
    right: 0;
  }
  span {
    color: #444;
  }
}
.back svg path {
  fill: #444;
}
.back svg {
  margin-right: 10px;
  transition: 0.3s;
}
.back:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.293139);
}
.back:hover svg {
  transform: scale(1.5);
  transition: 0.3s;
}
.pocemon__wrapper {
  margin: 30px auto 50px;
  width: 800px;
  height: 800px;
  border: 1px solid gray;
  border-radius: 50%;
  background: linear-gradient(to bottom, #ef5350 50%, #fff 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 600px;
    height: 600px;
  }
  @media screen and (max-width: 670px) {
    width: 425px;
    height: 425px;
    margin: 50px auto;
  }
  @media screen and (max-width: 460px) {
    width: 307px;
    height: 307px;
  }
}
.pocemon__id {
  font-size: 12px;
}
.pocemon__name {
  font-family: Stick-Regular;
  margin-top: 20px;
  margin-left: 5px;
  font-size: 25px;
}
.pocemon__img-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  @media screen and (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 670px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 460px) {
    width: 60px;
    height: 60px;
  }
  img {
    width: 100%;
  }
}
.pocemon__types-wrapper {
  margin-top: 20px;
  @media screen and (max-width: 670px) {
    margin-top: 5px;
  }
  @media screen and (max-width: 460px) {
    display: flex;
    margin-top: 14px;
  }
}
.pocemon__stats-wrapp {
  margin-top: 125px;
  @media screen and (max-width: 900px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 670px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 460px) {
    margin-top: 0;
  }
}
</style>
