<template>
  <div class="pocemon__card">
    <!-- <router-link :to="{ name: 'pocemonPage', params: { id: pocemon.id } }" > -->
    <div class="pocemon__img-wrapp">
      <img :src="props.pocemon.sprites.front_default" alt="" class="pocemon__img" />
    </div>
    <!-- </router-link> -->
    <div class="pocemon__number"># {{ props.pocemon.id }}</div>
    <div class="pocemon__name">{{ props.pocemon.name }}</div>
    <div class="pocemon__types">
      <pocemon-type v-for="types in props.pocemon.types" :types="types" :key="types.slot" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {TPocemonTypes} from "../types/Tpocemons"
import PocemonType from "@/components/PocemonType.vue";
const props = defineProps<{
  pocemon: {
    id: number,
    name :string, 
    types: TPocemonTypes,
    sprites: {
      front_default: string
    }
  }
}>()
</script>

<style lang="scss" scoped>
.pocemon__card {
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
}

.pocemon__img-wrapp {
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

.pocemon__img {
  width: 100%;
}

.pocemon__name {
  font-size: 22px;
  font-family: BungeeSpice-Regular;
}

.pocemon__types {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
