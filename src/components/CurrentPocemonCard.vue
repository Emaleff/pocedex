<template>
  <div class="container pocemon">
    <router-link :to="{ name: 'main' }" class="back">
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="back__svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" />
      </svg>
      <span class="back__text"> Back</span>
    </router-link>
    <transition appear name="card" v-if="pocemon">
      <div class="pocemon__wrapper">
        <div class="pocemon__img-wrapper">
          <img :src="pocemon.sprites.front_default" alt="" v-if="pocemon.sprites" class="pocemon__img" />
        </div>
        <div class="pocemon__info">
          <span class="pocemon__id"> #{{ pocemon.id }}</span>
          <span class="pocemon__name">{{ pocemon.name }}</span>
        </div>
        <div class="pocemon__types-wrapper">
          <pocemon-type v-for="types in pocemon.types" :types="types" :key="types.slot" />
        </div>
        <div class="pocemon__stats-wrapp">
          <pocemon-stats v-for="stat in pocemon.stats" :stat="stat" :key="stat.stat.name" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { useStore } from "@/store";
import PocemonStats from "./PocemonStats.vue";
import PocemonType from "./PocemonType.vue";
// import { mapActions, mapGetters } from "vuex";
const props = defineProps<{
  id: number | string
}>()

const store = useStore()
store.dispatch('fetchCurrentPocemon', props.id)
const pocemon = computed(() => store.getters.getCurrentPocemon)
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

  &__text {
    color: #444;
  }

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.293139);

    svg {
      transform: scale(1.5);
      transition: 0.3s;
    }
  }

  &__svg {
    margin-right: 10px;
    transition: 0.3s;

    path {
      fill: #444;
    }
  }
}

 .pocemon {
  position: relative;
  min-height: 80vh;

  &__wrapper {
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

  &__id {
    font-size: 12px;
  }

  &__name {
    font-family: Stick-Regular;
    margin-top: 20px;
    margin-left: 5px;
    font-size: 25px;
  }

  &__img-wrapper {
    width: 160px;
    height: 160px;
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

  &__types-wrapper {
    margin-top: 20px;

    @media screen and (max-width: 670px) {
      margin-top: 5px;
    }

    @media screen and (max-width: 460px) {
      display: flex;
      margin-top: 14px;
    }
  }

  &__stats-wrapp {
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
}
</style>
