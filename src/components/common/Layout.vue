<script setup lang="ts">
import { ref, inject } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import MobileMenu from './MobileMenu.vue';
import HelpModal from './HelpModal.vue';
import useModal from '../hooks/useModal';

const isMenuVisible = ref(false);

const handleToggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
}

const {modalIsVisible, handleClose} = useModal();

</script>

<template>
    <HelpModal :is-visible="modalIsVisible" @close="handleClose" />
    <MobileMenu :menu-is-visble="isMenuVisible" @toggle-menu="handleToggleMenu" />
    <Header @toggle-menu="handleToggleMenu" />
    <div class="h-[var(--navbar-height)]"></div>
    <!-- Add relative positioning to main to create a stack context -->
    <main class="bg-secondary-1 relative z-10">
        <slot></slot>
    </main>
    <Footer />
</template>