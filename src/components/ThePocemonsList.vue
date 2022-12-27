<template>
  <the-big-loader v-if="isLoading" />
  <div class="container pocemon-list">
    <pocemon-card v-for="pocemon in getPocemons" :key="pocemon.id" :pocemon="pocemon" />
  </div>
  <the-pagination />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import PocemonCard from "./PocemonCard.vue";
import TheBigLoader from "./TheBigLoader.vue";
import ThePagination from "@/components/ThePagination.vue";

const store = useStore();
const getPocemons = computed(() => store.getters.getPocemons)
const isLoading = computed(() => store.getters.getLoading)



</script>

<style lang="scss" scoped>
.pocemon-list {
  padding: 50px 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-between;
  gap: 20px;
  min-height: 80vh;

  @media screen and (max-width: 975px) {
    justify-content: center;
  }
}
</style>
