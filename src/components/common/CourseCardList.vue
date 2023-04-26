<script setup lang="ts">
    import CourseCard from './CourseCard.vue';

    type CourseList = Array<{
        id: number;
        image: string;
        title: string;
        description: string;
        link: string;
    }>

    interface CourseCardListProps {
        courses: CourseList
    }

    const {courses} = defineProps<CourseCardListProps>()
</script>

<template>
    <div class="flex mx-0 flex-wrap w-full md:-mx-4">
        <div class="w-full py-5 relative md:w-1/2 md:px-4 md:py-5 lg:w-1/3" v-for="course in courses" :key="course.id">
            <CourseCard class="w-full" :image="course.image" :title="course.title" :description="course.description" :link="course.link" />
        </div>
    </div>
</template>