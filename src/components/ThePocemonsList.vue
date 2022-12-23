<template>
  <the-big-loader v-if="!isLoading" />
  <div class="container pocemon-list__container" v-else>
    <pocemon-card v-for="pocemon in getPocemons" :key="pocemon.id" :pocemon="pocemon" />
  </div>
  <the-pagination />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import PocemonCard from "./PocemonCard.vue";
import TheBigLoader from "./TheBigLoader.vue";
import ThePagination from "@/components/ThePagination.vue";

export default defineComponent({
  name: "ThePocemonsList",
  components: {
    PocemonCard,
    TheBigLoader,
    ThePagination
  },
  setup() {
    const store = useStore();
    const getPocemons = computed(() => store.getters.getPocemons)
    const isFullPocemons = computed(() => store.getters.isFullPocemons)
    const isSmallLoader = computed(() => store.getters.isSmallLoader)
    const isLoading = computed(() => {
      if (getPocemons.value.length > 0) {
        return true;
      }
      return false;
    })
    

    return {
      getPocemons, isFullPocemons, isSmallLoader, isLoading
    }
  },
})
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.pocemon-list__container {
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
