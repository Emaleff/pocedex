<template>
  <div class="loader">
    <div class="loader__heart"></div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.loader {
  margin: 40px auto;
  display: flex;
  justify-content: center;

  &__heart {
    background-color: #f44336;
    width: 50px;
    height: 50px;
    position: relative;
    -webkite-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: pulsate 1s infinite;
    animation: pulsate 1s infinite;

    &:before,
    &:after {
      display: inline-block;
      content: "";
      width: 50px;
      height: 50px;
      background-color: #f44336;
      position: absolute;
      border-radius: 50%;
    }

    &:before {
      top: 0px;
      left: -25px;
    }

    &:after {
      top: -25px;
      left: -0px;
    }
  }
}

@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  5% {
    -webkit-transform: rotate(45deg) scale(0.9);
    transform: rotate(45deg) scale(0.9);
  }

  10% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  15% {
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }

  50% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  100% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }
}

@keyframes pulsate {
  0% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  5% {
    -webkit-transform: rotate(45deg) scale(0.9);
    transform: rotate(45deg) scale(0.9);
  }

  10% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  15% {
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }

  50% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }

  100% {
    -webkit-transform: rotate(45deg) scale(0.8);
    transform: rotate(45deg) scale(0.8);
  }
}
</style>
