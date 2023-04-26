<script setup lang="ts">
import {courses} from '@/index';
import CourseCardList from './CourseCardList.vue';
</script>

<template>
    <section class="pt-20 pb-10 lg:pb-16 lg:odd:mt-[500px]">
      <div class="axia-container axia-gutter">
        <h3 class="font-semibold tracking-tight text-xl text-primary mb-4 md:text-4xl">Courses for you</h3>
        <div class="text-grey-40 text-sm tracking-wide leading-7 lg:text-base">
          <p>Here are some courses from our schools that we offer.</p>
          <p>Enroll and kickstart your tech career.</p>
        </div>
        <div class="pt-8 lg:pb-12">
          <CourseCardList :courses="courses" />
        </div>
      </div>
    </section>
</template>