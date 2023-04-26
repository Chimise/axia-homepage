<script setup lang="ts">
import CustomLink from '../ui/CustomLink.vue';
import ArrowLeft from '../icons/ArrowLeft.vue';
import useModal from '../hooks/useModal';
import CardLink from './CardLink.vue';

const {handleOpen} = useModal();

</script>


<template>
    <section class="pt-[60px] lg:pt-[90px] pb-6 relative">
        <div class="axia-container axia-gutter">
            <div class="text-center lg:text-left space-y-8 mb-10">
                <h1 class="text-primary text-3xl lg:text-[2.8rem] font-semibold lg:max-w-xl tracking-tight leading-normal">Accelerate your
                    career
                    with <span
                        class="bg-[linear-gradient(65deg,#ab2638,#f0b73f)] bg-clip-text [-webkit-text-fill-color:transparent]">Job-ready</span>
                    tech skills.</h1>
                <p class="text-[1.1rem] text-grey-50 leading-8 lg:max-w-[420px]">Begin your tech journey and expand your
                    career
                    opportunities in the tech space by learning tech skills in demand.</p>
                <div class="flex space-y-6 flex-col items-center lg:flex-row lg:space-x-10 lg:space-y-0">
                    <CustomLink href="/">
                        Apply Now
                    </CustomLink>
                    <CardLink href="" @click.prevent="handleOpen">
                        Speak with an Advisor
                    </CardLink>
                </div>
            </div>
            <div
                class="static py-3 px-4 lg:inline-block lg:absolute lg:right-0 lg:w-[700px] lg:top-[100px] lg:pr-7 lg:pl-3 lg:py-0">
                <img class="block w-full h-full lg:object-contain" src="/hero.svg" alt="Hero image" />
            </div>
        </div>
        <div class="hidden lg:block relative w-1/3 pl-10 pt-6">
            <img class="block image-mover aspect-[4/2]" src="/doddle.svg" alt="Doddle Image" />
        </div>
    </section>
</template>