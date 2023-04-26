<script setup lang="ts">
import Facebook from '../icons/Facebook.vue';
import Instagram from '../icons/Instagram.vue';
import Twitter from '../icons/Twitter.vue';
import { schools, links } from '../..';

const year = new Date().getFullYear();

</script>

<template>
    <footer class="pt-12 pb-10 md:pt-20 bg-primary-1 space-y-16">
        <div
            class="axia-container axia-gutter grid grid-cols-2 text-grey-10 text-base tracking-wider md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div class="col-span-2 order-1">
                <div class="w-20 h-10 mb-3">
                    <img src="/logo-white.svg" alt="White Logo" class="w-full h-full object-fill" />
                </div>
                <p class="leading-7 mb-7">An organization that is focused on equipping African youths with the knowledge and
                    skills needed in the tech space.</p>
                <div class="space-x-4 flex items-center">
                    <a href="#">
                        <Facebook class="w-6 h-6" />
                    </a>
                    <a href="#">
                        <Twitter class="w-6 h-6" />
                    </a>
                    <a href="#">
                        <Instagram class="w-6 h-6" />
                    </a>
                </div>
            </div>
            <div class="space-y-6 order-2 lg:order-3">
                <h6 class="uppercase font-medium text-lg text-white">Schools</h6>
                <ul class="space-y-5">
                    <li v-for="({ link, name }, index) in schools" :key="index">
                        <a :href="link">{{ name }}</a>
                    </li>
                </ul>
            </div>
            <div class="space-y-6 order-3 lg:order-2">
                <h6 class="uppercase font-medium text-lg text-white">Company</h6>
                <ul class="space-y-5">
                    <li v-for="({ link, name }, index) in links" :key="index">
                        <a :href="link">{{ name }}</a>
                    </li>
                </ul>
            </div>
            <div class="space-y-6 order-4">
                <h6 class="uppercase font-medium text-lg text-white">Contact</h6>
                <ul class="space-y-5">
                    <li>
                        <a href="mailto:axiaafrica@gmail.com">
                            axiaafrica@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+2349015558035">09015558035</a>
                    </li>
                </ul>
            </div>
            <div class="md:hidden order-5">
                <ul class="flex items-center space-x-4">
                    <li>
                        <a>
                            <Facebook class="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Twitter class="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Instagram class="w-6 h-6" />
                        </a>
                </li>

            </ul>
        </div>
    </div>
    <div class="py-3 axia-container axia-gutter text-center">
        <p class="text-grey-10 text-base tracking-wider">&copy; {{ year}} Axia Africa. All rights reserved.</p>
    </div>
</footer></template> 

