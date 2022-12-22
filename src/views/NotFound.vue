<template>
  <div class="container not-found__container">
    <h2 class="not-found__title">Страница не найдена</h2>
    <img src="@/assets/404.jpg" alt="" class="not-found__image" />
    <router-link :to="{ name: 'main' }" class="not-found__back">На главную</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({})
</script>

<style lang="scss" scoped>
.not-found__container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 40px;

  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
}

.not-found__title {
  font-family: BungeeSpice-Regular;
  font-size: 25px;
}

.not-found__back {
  font-size: 24px;
  text-decoration: none;
  font-family: Stick-Regular;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background: rgb(173, 165, 165);
    transition: 0.3s;
  }
}

.not-found__image {
  width: 300px;
}
</style>
