<template>
  <header class="header">
    <div class="container header__container flex justify-between ">
      <img src="@/assets/logo.png" alt="" class="header__logo" />
      <input type="search" class="outline-white px-3 rounded-xl border-indigo-50" placeholder="В разработке">
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.header {
  background-color: #ef5350;

  &__container {
    padding: 15px 0;
  }

  &__logo {
    width: 100px;
  }
}
</style>
