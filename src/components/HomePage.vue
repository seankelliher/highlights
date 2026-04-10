<script setup>
import { contents } from "../data/contents-data.js";
import { ref, onMounted } from "vue";

const greeting = ref("");

onMounted(() => {
    const event = new Date();
    const time = event.toLocaleTimeString("it-IT");
    const hours = time.substring(0,2);
    if (hours < 12 ) {
        greeting.value = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greeting.value = "Good afternoon";
    } else if (hours >= 18) {
        greeting.value = "Good evening";
    } else {
        greeting.value = "Hello there";
    }
});

// Add title tag, meta description
document.title = " Sean Kelliher - Highlights";
document.querySelector("meta[name='description']").setAttribute("content", "I'm Sean Kelliher. I like building interfaces, maps, and data visualizations like the ones you see here.");
</script>

<template>
    <main>
        <div class="home-grid">
            <div class="home-grid-intro">
                <hgroup>
                    <h2 class="noto-sans eight">Graphics &amp; Maps</h2>
                    <p class="noto-sans four">{{ greeting }}. These  graphics and maps began as simple paper drawings. I then formalized the ideas into wireframes, selected typography, and planned their color schemes, before building with a JavaScript framework. Some projects also utilize open source APIs.</p>
                </hgroup>
            </div>
            <div class="home-grid-card" v-for="content in contents" :key="content.id">
                <RouterLink :to="`/projects/${content.id}`" aria-label="project thumbnail, leads to project page">
                    <figure class="home-grid-img">
                        <img
                            :src="`/images/scenes/${content.src}-thumb.jpg`"
                            :alt="`${content.alt}`"
                            class="rounded"
                        >
                        <figcaption class="home-grid-img-caption noto-sans four">
                            <span class="fig-heading noto-sans seven">{{ content.thumbHead }}</span>
                            {{ content.thumbSub }}
                        </figcaption>
                    </figure>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>