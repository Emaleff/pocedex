<template>
  <div class="circle">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.circle {
  position: relative;
  margin: 0px auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgb(199, 2, 135);
  background: linear-gradient(
    90deg,
    rgba(199, 2, 135, 1) 0%,
    rgba(179, 107, 4, 1) 20%,
    rgba(193, 224, 3, 1) 40%,
    rgba(3, 247, 162, 1) 60%,
    rgba(90, 8, 254, 1) 80%,
    rgba(174, 253, 11, 1) 100%,
    rgba(20, 71, 250, 1) 100%
  );
  animation: spinTheCircle 300ms linear infinite;
  z-index: 1;
}
.circle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  height: 75%;
  display: block;
  margin: auto;
  border-radius: 50%;
  background-color: #000;
  z-index: 2;
}
.circle::after {
  content: "\f253";
  font-family: fontawesome;
  color: #fff;
  text-align: center;
  font-size: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  z-index: 5;
  animation: rotateTheTimer 200ms linear infinite;
}
.circle div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  z-index: 1;
}
.circle div:nth-child(1) {
  filter: blur(10px);
}
.circle div:nth-child(2) {
  filter: blur(20px);
}
.circle div:nth-child(3) {
  filter: blur(40px);
}
.circle div:nth-child(4) {
  filter: blur(60px);
}
.circle div:nth-child(5) {
  filter: blur(90px);
}
.circle div:nth-child(1) {
  filter: blur(10px);
}
@keyframes spinTheCircle {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotateTheTimer {
  from {
    transform: translateY(-50%) rotate(0);
  }
  to {
    transform: translateY(-50%) rotate(-180deg);
  }
}
</style>
