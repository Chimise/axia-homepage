<script setup lang="ts">
import Modal from '../ui/Modal.vue';
import XIcon from '../icons/XIcon.vue';
import PhoneIcon from '../icons/Phone.vue';
import CardLink from './CardLink.vue';
interface HelpModalProps {
    isVisible: boolean;
}

interface Emits {
    (event: 'close'): void;
}

const {isVisible} = defineProps<HelpModalProps>()
const emits = defineEmits<Emits>();
</script>


<template>
    <Modal :is-visible="isVisible" @close="emits('close')">
        <div class="w-full p-4 relative z-10">
            <div class="flex items-center justify-end">
                <button @click="emits('close')"><XIcon class="w-6 h-6 text-grey-60" /></button>
            </div>
            <div class="w-full">
                <div class="text-center text-primary w-[85%] md:w-[60%] mx-auto space-y-3">
                    <h6 class="font-medium text-xl">Speak with an Advisor</h6>
                    <p class="text-sm">You can reach out to an Advisor on our platform either via a direct phone call or by booking an appointment.</p>
                </div>
            </div>
            <div class="w-full px-5 mt-6 mb-4 space-y-8">
                <div class="flex items-center bg-supplementary p-4 space-x-5 relative after:absolute after:w-[95%] after:h-[95%] after:-z-10 after:-left-3 after:top-5 after:border-l-2 after:border-b-2 after:border-black">
                    <span class="shrink-0">
                        <PhoneIcon class="w-8 h-8 stroke-[2px]" />
                    </span>
                    <div class="flex flex-col">
                        <span class="text-sm">Call Us directly on</span>
                        <a class="text-xl md:text-2xl font-semibold" href="tel:+2349015558035">09015558035</a>
                    </div>
                </div>
                <div class="bg-supplementary p-4 relative after:absolute after:w-[95%] after:h-[95%] after:-z-10 after:-left-3 after:top-5 after:border-l-2 after:border-b-2 after:border-black">
                    <span class="text-sm mb-2">Book an Appointment</span>
                    <p class="text-xl md:text-2xl font-semibold mb-3">Set a Time & Date to speak with Us</p>
                    <CardLink class="!text-primary" href="#">
                        Book Now
                    </CardLink>
                </div>
            </div>
        </div>
    </Modal>
</template>