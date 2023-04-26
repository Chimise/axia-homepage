<script setup lang="ts">
import TestimonialSlider from './TestimonialSlider.vue';
import { testimonials } from '@/index';
</script>

<template>
    <section class="py-20 md:py-32">
      <div class="axia-container axia-gutter space-y-5">
        <h3 class="text-primary font-medium text-3xl md:text-4xl">Our success story</h3>
        <p class="text-grey-50 text-base tracking-wide">What our students are saying about their learning experience.</p>
      </div>
      <div class="pt-20 pb-10">
        <TestimonialSlider :testimonials="testimonials" />
      </div>
    </section>
</template>