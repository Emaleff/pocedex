<template>
  <the-header />
  <router-view />
</template>
<script lang="ts" setup>
import { useStore } from "@/store";
import TheHeader from "@/components/TheHeader.vue";

const store = useStore();
store.dispatch('loadPocemons', 1)

</script>
<style lang="scss">
</style>
