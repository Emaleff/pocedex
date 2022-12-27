<template>
  <div class="stat">
    <span class="stat__name">{{ props.stat.stat.name }}</span>
    <span class="stat__count">{{ props.stat.base_stat }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
  stat: {
    base_stat: number,
    stat: {
      name: string
    }
  }
}>()

</script>

<style lang="scss" scoped>
.stat {
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  margin: 5px 0;

  @media screen and (max-width: 670px) {
    margin: 5px 0 0;
    width: 150px;
    padding: 0;
  }

  @media screen and (max-width: 460px) {
    margin: 0;
  }

  @media screen and (max-width: 460px) {
    line-height: 1.15;
    width: 130px;
  }
  &__name {
  font-size: 18px;
  font-family: Stick-Regular;

  @media screen and (max-width: 670px) {
    font-size: 15x;
  }

  @media screen and (max-width: 460px) {
    font-size: 13px;
  }
}

&__count {
  font-family: BungeeSpice-Regular;
  font-size: 20px;

  @media screen and (max-width: 670px) {
    font-size: 18px;
  }

  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
}
}


</style>
