<script setup lang="ts">
import CustomLink from '../ui/CustomLink.vue';
</script>

<template>
    <section class="bg-primary py-20 md:py-32">
        <div class="axia-container axia-gutter">
            <h3 class="text-[26px] leading-[2.3rem] text-supplementary font-semibold md:text-4xl mb-16">Foster your tech <span
                    class="block md:inline-block">knowledge</span></h3>
            <div class="h-[350px] md:h-[400px] mb-16">
                <img src="/foster.png" alt="Foster Growth Image" class="object-cover w-full h-full" />
            </div>
            <p class="mb-14 lg:mb-16 text-grey-10">
                Don&apos;t just wait around, Register and join our students ready to enroll<span class="lg:block"> and kick
                    start their tech career</span>.
            </p>
            <CustomLink href="" foreground-class="border-white text-white shadow-white"
                hover-class="hover:bg-white hover:text-primary hover:shadow-secondary">
                Apply Now
            </CustomLink>
        </div>
    </section>
</template>