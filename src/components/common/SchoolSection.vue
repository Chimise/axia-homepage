<script setup lang="ts">
import SchoolCardList from './SchoolCardList.vue';
import {schoolList} from '@/index';
</script>

<template>
<section class="py-28 md:py-32 relative">
      <div class="absolute right-0 top-14 w-[320px] -z-10 md:top-16 px-7">
        <img src="/doddle2.svg" lazy class="object-cover image-mover w-full h-full" />
      </div>
      <div class="axia-container axia-gutter">
        <div class="text-primary space-y-6">
          <h3 class="font-semibold text-3xl tracking-tight">Discover the right school for your journey</h3>
          <p class="leading-7">Axia Africa offers you the chance to explore schools which has variety of courses to learn
            from, like product
            design, Front end,</p>
          <div>
            <SchoolCardList :schools="schoolList" />
          </div>
        </div>
      </div>
    </section>
</template>