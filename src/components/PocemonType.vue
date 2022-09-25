<template>
  <div class="pocemon__type" :class="types.type.name">
    {{ types.type.name }}
  </div>
</template>

<script>
export default {
  props: {
    types: {
      type: Object,
      reqired: true,
    },
  },
};
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

.grass {
  background: greenyellow;
}
.poison {
  background: blueviolet;
}
.fire {
  background: orangered;
}
.water {
  background: rgba(39, 73, 223, 0.801);
}
.flying {
  background: linear-gradient(
    to bottom,
    rgba(69, 149, 223, 0.801) 50%,
    gray 50%
  );
}
.bug {
  background: green;
}
.normal {
  background: gray;
}
.ground {
  background: rgb(8, 95, 8);
}
.electric {
  background: rgba(38, 0, 253, 0.863);
}
.fairy {
  background: #fdc200;
}
.dragon {
  background: rgba(255, 0, 0, 0.856);
}
.psychic {
  background: rgb(255, 0, 221);
}
.ice {
  background: rgb(0, 157, 248);
}
.rock {
  background: rgb(207, 12, 54);
}
.fighting {
  background: #faa249;
}
.ghost {
  background: #ddd;
}
.steel {
  background: #cc7473;
}
.dark {
  background: darkred;
}
</style>
