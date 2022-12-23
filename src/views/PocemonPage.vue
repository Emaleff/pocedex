<template>
  <current-pocemon-card :id="props.id" />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import CurrentPocemonCard from '@/components/CurrentPocemonCard.vue';
const props = defineProps<{
  id: number
}>()
</script>

<style lang="scss" scoped>

</style>
