<script setup lang="ts">
interface CustomLinkProps {
    href: string;
    foregroundClass?: string
    hoverClass?: string;
}

const { href, foregroundClass, hoverClass } = withDefaults(defineProps<CustomLinkProps>(), {
    foregroundClass: 'text-primary border-primary shadow-primary-1',
    hoverClass: 'hover:text-white hover:bg-primary-1 hover:shadow-secondary'
})
</script>

<template>
    <a :href="href"
        class="inline-block py-3 px-6 font-semibold text-base border-[3px] shadow-[7px_7px_0px_rgb(32,32,84)] bg-transparent transition-colors ease-out focus:outline-none" :class="[foregroundClass, hoverClass]">
        <slot></slot>
    </a>
</template>