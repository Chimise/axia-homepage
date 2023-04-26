<script setup lang="ts">
import {provide, ref} from 'vue';
import { menuKey } from '.';
import Layout from './components/common/Layout.vue';
import HeroSection from './components/common/HeroSection.vue';
import CoursesSection from './components/common/CoursesSection.vue';
import AdviserSection from './components/common/AdviserSection.vue';
import BoardingSection from './components/common/BoardingSection.vue';
import SchoolSection from './components/common/SchoolSection.vue';
import BannerSection from './components/common/BannerSection.vue';
import TestimonialSection from './components/common/TestimonialSection.vue';
import PartnerSection from './components/common/PartnerSection.vue';

const modalIsVisible = ref(false);

const handleOpen = () => {
  modalIsVisible.value = true;
}

const handleClose = () => {
  modalIsVisible.value = false;
}

provide(menuKey, {
  handleClose,
  handleOpen,
  modalIsVisible
});

</script>

<template>
  <Layout>
    <HeroSection />
    <CoursesSection />
    <AdviserSection />
    <BoardingSection />
    <SchoolSection />
    <BannerSection />
    <TestimonialSection />
    <PartnerSection />
  </Layout>
</template>

