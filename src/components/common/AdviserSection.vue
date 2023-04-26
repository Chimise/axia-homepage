<script setup lang="ts">
import {ref} from 'vue';
import CustomLink from '../ui/CustomLink.vue';
import HelpModal from './HelpModal.vue';

const isVisible = ref(false);

const handleModalOpen = () => {
  isVisible.value = true;
}

const handleModalClose = () => {
  isVisible.value = false;
}

</script>


<template>
    <section class="bg-primary-1 py-10 md:py-32">
      <div class="axia-container axia-gutter">
        <div class="flex flex-wrap items-center md:-mx-4">
          <div class="w-full py-8 text-white space-y-7 md:p-4 md:w-1/2">
            <h3 class="font-medium text-2xl md:text-4xl !leading-[1.4]">Confused about what to learn?</h3>
            <p class="text-base md:text-lg leading-7 tracking-wide">
              Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an
              expert in your desired field.
            </p>
            <CustomLink href="/" @click.prevent="handleModalOpen" foreground-class="border-white text-white shadow-white"
              hover-class="hover:bg-white hover:text-primary-1 hover:shadow-secondary">
              Speak with an adviser
            </CustomLink>
            <HelpModal :is-visible="isVisible" @close="handleModalClose"/>
          </div>
          <div class="w-full py-8 md:p-4 md:w-1/2">
            <img src="/advisor.svg" alt="Course Advisor" />
          </div>
        </div>
      </div>
    </section>
</template>