<template>
  <header class="header">
    <div class="container header__container">
      <img src="@/assets/logo.png" alt="" class="logo header__logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "the-header",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #ef5350;
}
.header__container {
  padding: 15px 0;
}
.header__logo{
    width: 100px;
}
</style>
