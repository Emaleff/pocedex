<template>
  <current-pocemon-card  :id="id" />
</template>

<script>
import CurrentPocemonCard from '@/components/CurrentPocemonCard.vue';
import { mapGetters } from "vuex";
export default {
  components: { CurrentPocemonCard },
  computed: {
    ...mapGetters(["getCurrentPocemon"]),
  },
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
