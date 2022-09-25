<template>
  <div>
    <the-header />
    <router-view />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: "BungeeSpice-Regular";
  src: url("@/assets/fonts/BungeeSpice-Regular.ttf");
}
@font-face {
  font-family: "Stick-Regular";
  src: url("@/assets/fonts/Stick-Regular.ttf");
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  min-height: 100%;
}
.container {
  max-width: 1110px;
  margin: 0 auto;
  @media screen and (max-width: 1150px) {
    max-width: 96%;
  }
}
</style>
