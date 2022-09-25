<template>
  <div class="pocemon__card">
    <router-link :to="{ name: 'pocemonPage', params: { id: pocemon.id } }" >
      <div class="pocemon__img-wrapp">
        <img :src="pocemon.sprites.front_default" alt="" class="pocemon__img" />
      </div>
    </router-link>
    <div class="pocemon__number"># {{ pocemon.id }}</div>
    <div class="pocemon__name">{{ pocemon.name }}</div>
    <div class="pocemon__types">
    <pocemon-type
      v-for="types in pocemon.types"
      :types="types"
      :key="types.slot"
    />
    </div>
  </div>
</template>

<script>
import PocemonType from "@/components/PocemonType.vue";
export default {
  name: "PocemonCard",
  components: {
    PocemonType,
  },
  props: {
    pocemon: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pocemon__card {
  justify-self: center;
  width: 200px;
  height: 300px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid gray;
  padding: 15px;
  transition: 0.2s;
  &:hover {
    border: 2px solid black;
    transition: 0.2s;
  }
}
.pocemon__img-wrapp {
  background: linear-gradient(to bottom, #ef5350 50%, #fff 50%);
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 50%;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.5s;
  }
}
.pocemon__img {
  width: 100%;
}
.pocemon__name {
  font-size: 22px;
  font-family: BungeeSpice-Regular;
}
.pocemon__types{
  display: flex;flex-direction: column;align-items: center;
}
</style>
