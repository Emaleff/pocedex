<template>
  <div class="card" v-if="props.pocemon.id">
    <router-link :to="{ name: 'pocemonPage', params: { id: props.pocemon.id } }">
      <div class="card__img-wrapp">
        <img :src="props.pocemon.sprites.front_default" alt="" class="pocemon__img" />
      </div>
      <!-- </router-link> -->
      <div class="card__number"># {{ props.pocemon.id }}</div>
      <div class="card__name">{{ props.pocemon.name }}</div>
      <div class="card__types">
        <pocemon-type v-for="types in props.pocemon.types" :types="types" :key="types.slot" />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { TPocemonTypes } from "../types/Tpocemons"
import PocemonType from "@/components/PocemonType.vue";
const props = defineProps<{
  pocemon: {
    id: number,
    name: string,
    types: TPocemonTypes,
    sprites: {
      front_default: string
    }
  }
}>()
</script>

<style lang="scss" scoped>
.card {
  justify-self: center;
  width: 200px;
  height: 300px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid gray;
  padding: 15px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 16px rgb(0 0 0 / 10%);
    transition: 0.2s;
  }

  &__img-wrapp {
    background: linear-gradient(to bottom, #ef5350 50%, #fff 50%);
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 50%;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transition: 0.5s;
    }
  }

  &__img {
    width: 100%;
  }

  &__name {
    font-size: 22px;
    font-family: BungeeSpice-Regular;
  }

  &__types {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
