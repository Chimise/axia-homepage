<script setup lang="ts">
import ArrowLeft from '../icons/ArrowLeft.vue';
interface CardLinkProps {
    href?: string;
}

const { href } = withDefaults(defineProps<CardLinkProps>(), {
    href: ''
});

</script>

<template>
    <a :href="href" class="group inline-flex items-center space-x-2 stroke-[2px] font-semibold text-base text-primary-1 cursor-pointer">
        <span class="underline"><slot /></span>
        <ArrowLeft class="w-8 h-6 translate-x-0 transition-transform duration-150 ease-linear group-hover:translate-x-2" />
    </a>
</template>