<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue';
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';

interface Testimonial {
    testimonial: string;
    image: string;
    name: string;
}
interface TestimonialSliderProps {
    testimonials: Array<Testimonial>;
}

const { testimonials } = defineProps<TestimonialSliderProps>();
</script>

<template>
        <Vue3Marquee :duration="300" :pause-on-hover="true" :pause-on-click="true">
            <div class="px-6" v-for="testimonial in testimonials" :key="testimonial.image" v-bind="testimonial">
                <TestimonialCard v-bind="testimonial"/>
            </div>
        </Vue3Marquee>
</template>