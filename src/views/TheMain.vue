<template>
  <the-pocemons-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThePocemonsList from "@/components/ThePocemonsList.vue";
export default defineComponent({
  name: "TheMain",
  components: {
    ThePocemonsList,
  },
})
</script>

<style lang="scss" scoped>

</style>
