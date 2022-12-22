<template>
  <current-pocemon-card  :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentPocemonCard from '@/components/CurrentPocemonCard.vue';
import { mapGetters } from "vuex";
export default defineComponent({
  components: { CurrentPocemonCard },
  computed: {
    ...mapGetters(["getCurrentPocemon"]),
  },
  props: {
    id: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped></style>
