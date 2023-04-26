<script setup lang="ts">
import CustomLink from '../ui/CustomLink.vue';
</script>

<template>
    <section class="relative pt-5 pb-40 overflow-hidden">
      <div class="axia-container axia-gutter flex flex-col text-center items-center">
        <h3 class="text-3xl font-medium md:text-4xl mb-8">Partner With Us</h3>
        <p class="md:max-w-screen-md mb-20">Do you have a passion for making impact and inspiring to the tech space? Partner with us at Axia Africa and
          share our passion of leading a generation of tech talents waiting to be tapped.</p>
        <CustomLink href="">
          Learn More
        </CustomLink>
      </div>
      <img src="/deco1.svg" alt="Deco1 Image" class="hidden md:inline-block md:absolute md:bottom-20 -z-10 md:left-0" />
      <img src="/deco2.svg" alt="Deco2 Image" class="hidden md:absolute md:inline-block md:bottom-20 -z-10 md:right-0" />
      <img src="/deco3.svg" alt="Deco3 Image" class="absolute top-0 right-[5%] -z-10 md:hidden" />
    </section>
</template>