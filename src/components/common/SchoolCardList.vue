<script setup lang="ts">
import SchoolCard from './SchoolCard.vue';
interface School {
    name: string;
    description: string;
    link: string;
}

interface SchoolCardListProps {
    schools: Array<School>
}

const {schools} = defineProps<SchoolCardListProps>();
</script>


<template>
    <div class="flex flex-wrap justify-center">
        <div class="w-full py-10 md:w-1/2 md:p-12" v-for="(data, index) in schools" :key="index">
            <SchoolCard v-bind="data" />
        </div>
    </div>
</template>