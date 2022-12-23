<template>
    <div class="mx-auto mb-20 flex justify-center text-gray-100">
        <button class="rounded-xl block bg-orange-500 px-3 py-1 mx-2 hover:bg-orange-900 hover:text-gray-100"
            v-for="page, index in totalPage" :key="`page-${page}`"
            :class="[index + 1 == currentPage ? 'bg-red-50 text-orange-900' : '']" @click="changePage(index)">
            {{ index + 1 }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const currentPage: number = computed(() => store.getters.getCurrentPage) as unknown as number
const totalPage = computed(() => store.getters.getTotalPage)

const changePage = (index: number) => {    
    if (index + 1 !== store.getters.getCurrentPage) {
        store.dispatch('changeCurrentPage', index + 1)
    }
}

</script>

<style scoped>

</style>