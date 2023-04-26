<script setup lang="ts">
import XIcon from '../icons/XIcon.vue';
import { schools, links } from '../..';
interface MobileMenuProps {
    menuIsVisble: boolean;
}

interface Emits {
    (event: 'toggle-menu'): void;
}

const { menuIsVisble } = defineProps<MobileMenuProps>();
const emit = defineEmits<Emits>();

</script>


<template>
    <Transition enter-active-class="transition-opacity duration-150 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-1" leave-active-class="transition-opacity duration-100 ease-out"
        leave-from-class="opacity-1" leave-to-class="opacity-0">
        <div v-if="menuIsVisble" class="relative inset-0 overflow-hidden z-30 md:hidden">
            <div class="fixed inset-0 overflow-hidden">
                <div class="w-full h-full bg-white">
                    <div class="h-[var(--navbar-height)] axia-container axia-gutter flex justify-end items-center ">
                        <button @click="emit('toggle-menu')">
                            <XIcon class="w-6 h-6" />
                        </button>
                    </div>
                    <div class="axia-container axia-gutter pt-20 text-primary text-sm">
                        <div class="grid grid-cols-2 gap-10">
                            <div class="space-y-6">
                                <h6 class="uppercase font-medium text-base">Schools</h6>
                                <ul class="space-y-6">
                                    <li v-for="({ link, name }, index) in schools" :key="index">
                                        <a :href="link">{{ name }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="space-y-6">
                                <h6 class="uppercase font-medium text-base">Company</h6>
                                <ul class="space-y-6">
                                    <li v-for="({ link, name }, index) in links" :key="index">
                                        <a :href="link">{{ name }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="space-y-6">
                                <h6 class="uppercase font-medium text-base">Help</h6>
                                <ul class="space-y-6">
                                    <li>
                                        <a href="mailto:axiaafrica@gmail.com">
                                            axiaafrica@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+2349015558035">09015558035</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition></template>