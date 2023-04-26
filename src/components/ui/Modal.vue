<script setup lang="ts">
interface ModalProps {
    isVisible: boolean;
}

interface Emits {
    (event: 'close'): void;
}
const { isVisible } = defineProps<ModalProps>();
const emits = defineEmits<Emits>()
</script>


<template>
    <!-- Render the modal in the div container with the id modal -->
    <Teleport to="#modal" v-if="isVisible">
        <div class="relative z-40 overflow-hidden">
            <div class="fixed inset-0 flex items-center justify-center">
                <Transition enter-active-class="transition-all duration-300 delay-150 linear"
                    enter-from-class="opacity-0 scale-50" enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition-all duration-300 ease-in-out" leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-50">
                    <div @click="emits('close')" class="fixed inset-0 origin-center bg-black/10">
                    </div>
                </Transition>
                <Transition enter-active-class="transition-all duration-150 ease-out" enter-from-class="opacity-0 scale-90"
                    enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in-out"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-95 scale-100">
                    <div
                        class="absolute top-0 left-0 min-h-full w-full flex items-center p-9 justify-center bg-black/10 pointer-events-none">
                        <div class="bg-white w-full shadow-md max-w-[580px] md:w-7/12 pointer-events-auto">
                            <slot></slot>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </Teleport>
</template>