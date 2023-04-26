<script setup lang="ts">
import MobileIcon from '../icons/MobileIcon.vue';
import CustomLink from '../ui/CustomLink.vue';
import Menu from '../ui/Menu.vue';

interface Emits {
    (event: 'toggle-menu'): void;
}

const emit = defineEmits<Emits>();


</script>

<template>
    <div class="relative z-20 overflow-hidden">
        <header class="fixed shadow-md z-20 bg-secondary-1 inset-x-0 top-0 h-[var(--navbar-height)] md:shadow-none">
        <div class="flex items-center justify-between h-full axia-gutter py-4 md:py-6 axia-container">
            <a class="block w-[78px] h-auto md:w-auto" href="/">
                <img src="/logo.svg" class="w-full h-full" alt="Axia Logo Image" />
            </a>
            <div class="hidden md:items-center md:flex lg:flex-1">
                <nav class="hidden lg:space-x-8 lg:flex lg:flex-1 lg:items-center lg:justify-center">
                    <a href="/">About</a>
                    <Menu title="Schools">
                        <ul class="w-full p-1 space-y-3">
                            <li><a href="#">School of Product</a></li>
                            <li><a href="#">School of Engineering</a></li>
                            <li><a href="#">School of Data</a></li>
                        </ul>
                    </Menu>
                    <a>Join Our Community</a>
                    <Menu title="Help">
                        <ul class="w-full p-1 space-y-3">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </Menu>
                </nav>
                <CustomLink href="/">Apply Now</CustomLink>
            </div>
            <button @click="emit('toggle-menu')" class="block focus:outline-none md:hidden">
                <MobileIcon class="w-6 h-6" />
            </button>
        </div>
    </header>
    </div>
</template>