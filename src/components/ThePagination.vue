<template>
    <div class="mx-auto mb-20 flex justify-center text-gray-100">
        <button class="rounded-xl block bg-orange-500 px-3 py-1 mx-2 hover:bg-orange-900 hover:text-gray-100"
            v-for="page, index in totalPage" :key="`page-${page}`" :class="[index + 1 == currentPage ? 'bg-red-50 text-orange-900' : '',
index == 0 || (index >= currentPage - 2 && index <= currentPage) || index == 30 ? 'block' : 'hidden',
index == currentPage - 2 && index != 0 ? 'ml-8 dotted-left' : '',
index == currentPage && index != 30 ? 'mr-8 dotted-right' : '',
]" @click="changePage(index)">
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
        store.dispatch("loadPocemons", 1)
    }
}

</script>

<style scoped lang="scss">
.dotted {
    &-left {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            display: block;
            bottom: 0;
            left: -30px;
            background: url('../assets/pikachu.png');
            background-size: cover;
        }
    }

    &-right {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            bottom: 0;
            right: -30px;
            background: url('../assets/pikachu1.png');
            background-size: cover;
        }
    }
}
</style>