<script setup lang="ts">
import CardLink from './CardLink.vue';
    interface CourseCardProps {
        image: string;
        title: string;
        description: string;
        link: string;
    }

    const {image, title, description, link} = defineProps<CourseCardProps>();

</script>

<template>
<div class="h-[360px] relative md:h-[408px] flex flex-col after:absolute after:w-[95%] after:h-[85%] after:-z-10 after:-bottom-5 after:-left-3 after:border-y-[3px] after:border-l-[3px] after:border-primary">
    <div class="w-full h-[150px] shrink-0 md:h-44">
        <img class="object-cover w-full h-full" :src="image" :alt="title" />
    </div>
    <div class="flex-1 p-6 bg-supplementary">
        <h6 class="text-base md:text-xl text-primary font-bold tracking-normal">{{ title }}</h6>
        <p class="text-grey-50 text-sm font-normal mt-3.5">{{ description }}</p>
        <CardLink class="mt-5" :href="link">Enroll Now</CardLink>
    </div>
</div>
</template>