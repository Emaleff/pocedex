<template>
  <the-big-loader v-if="!isLoading" />
  <div class="container pocemon-list__container" v-else>
      <pocemon-card
        v-for="pocemon in getPocemons"
        :key="pocemon.id"
        :pocemon="pocemon"
      />
  </div>
  <SmallLoader v-if="isSmallLoader"/>
  <div ref="observer" class="observer"></div>
</template>

<script>
import PocemonCard from "./PocemonCard.vue";
import { mapGetters, mapActions } from "vuex";
import TheBigLoader from "./TheBigLoader.vue";
import SmallLoader from "./SmallLoader.vue";

export default {
  name: "ThePocemonsList",
  components: {
    PocemonCard,
    TheBigLoader,
    SmallLoader
},
  computed: {
    ...mapGetters(["getPocemons", "isFullPocemons", "isSmallLoader"]),
    isLoading() {
      let isLoading = false;
      if (this.getPocemons.length > 0) {
        isLoading = true;
      }
      return isLoading;
    },
  },
  methods: {
    ...mapActions(["fetchPocemons", "loadMorePocemons", "loadPocemons"]),
  },
  mounted() {
    let options = {
      rootMargin: "5px",
      threshold: 0.5,
    };

    let callback = (entries) => {
      if (entries[0].isIntersecting && !this.isFullPocemons) {
        this.loadPocemons();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss" scoped>
.observer {
  height:20px;
}
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
  // grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 975px) {
    justify-content: center;
  }
}
</style>
