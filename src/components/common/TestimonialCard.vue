<script setup lang="ts">
interface TestimonialCardProps {
    image: string;
    testimonial: string;
    name: string;
}
const { image, testimonial, name } = defineProps<TestimonialCardProps>();
</script>


<template>
    <div class="h-[330px] w-[400px] md:h-[350px] md:w-[426px] flex flex-col bg-supplementary px-5 py-6 text-grey-50">
        <div class="flex-1">
            <p class="text-grey-50 text-sm leading-5 md:text-base md:leading-6">{{ testimonial }}</p>
        </div>
        <div class="shrink-0 flex items-center space-x-4">
            <img :src="image" :alt="name" class="object-cover" />
            <p class="font-medium text-xl tracking-wide">{{ name }}</p>
        </div>
    </div>
</template>