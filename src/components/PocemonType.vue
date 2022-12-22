<template>
  <div class="pocemon__type" :class="`pocemon__type--${props.types.type.name}`">
    {{ props.types.type.name }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
  types: {
    type: {
      name: "grass" | "poison" | "fire"
      | "water" | "flying" | "bug" | "normal" | "ground" | "electric"
      | "fairy" | "dragon" | "psychic" | "ice" | "rock" | "fighting" | "ghost" | "steel" | "dark"
    }
  }
}>()
</script>

<style lang="scss" scoped>
.pocemon__type {
  text-align: center;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
  border: 1px solid transparent;
  box-sizing: border-box;
  width: 156px;
  height: 31px;

  @media screen and (max-width: 670px) {
    width: 120px;
    height: 27px;
  }

  @media screen and (max-width: 460px) {
    font-size: 16px;
    height: 22px;
    width: 100px;
  }
}

$colors: (
  psychic:  rgb(255, 0, 221),
  grass:greenyellow,
  poison:blueviolet,
  fire:orangered,
  water:rgba(39, 73, 223, 0.801),
  flying:linear-gradient(to bottom,
    rgba(69, 149, 223, 0.801) 50%,
    gray 50%),
  bug:green,
  normal:gray,
  ground:rgb(8, 95, 8),
  electric:rgba(38, 0, 253, 0.863),
  fairy:rgba(255, 0, 0, 0.856),
  ice:greenyellow,
  fighting:#faa249,
  ghost:#ddd,
  steel:#cc7473,
  dark:darkred,
);

@each $class,
$color in $colors {
  .pocemon__type--#{$class} {
    background: $color;
  }
}
</style>
