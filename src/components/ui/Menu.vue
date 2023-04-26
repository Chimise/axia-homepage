<script setup lang="ts">
import { ref } from 'vue';
import ChevronDown from '../icons/ChevronDown.vue';

const isVisible = ref(false);

const handleMouseEnter = () => {
    if (!isVisible.value) {
        isVisible.value = true;
    }
}

const handleMouseLeave = () => {
    if (isVisible.value) {
        isVisible.value = false;
    }
}

interface MenuProps {
    title: string;
}

const { title } = defineProps<MenuProps>();

</script>


<template>
    <div class="inline-flex items-center cursor-pointer">
        <div class="relative" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="flex items-center space-x-1.5 text-black">
                <span>{{ title }}</span>
                <ChevronDown class="w-3 h-3 stroke-[3px]" />
            </div>
            <Transition enter-active-class="transition-opacity duration-200 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150 ease-in"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isVisible" class="origin-left min-w-[200px] absolute z-30 pt-2">
                    <div class="shadow-lg w-full bg-secondary-1 p-2">
                        <slot>
                        </slot>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

