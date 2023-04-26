<script setup lang="ts">
import CardLink from './CardLink.vue';
interface SchoolCardProps {
    name: string;
    description: string;
    link: string;
}

const { name, description, link } = defineProps<SchoolCardProps>();
</script>


<template>
    <div
        class="flex flex-col h-[272px] relative bg-supplementary px-5 py-8 md:h-96 lg:h-[344px] md:pt-5 after:absolute after:w-[95%] after:h-[85%] after:-z-10 after:-bottom-5 after:-left-3 after:border-b-[3px] after:border-l-[3px] after:border-primary">
        <div class="flex-1">
            <h2 class="text-lg font-medium text-primary mb-5 md:text-2xl">{{ name }}</h2>
            <p class="text-grey-50 text-sm lg:text-base">{{ description }}</p>
        </div>
        <div class="shrink-0">
            <CardLink :href="link">
                View Courses
            </CardLink>
        </div>
    </div>
</template>