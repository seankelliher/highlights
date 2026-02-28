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
        <div class="projects">
            <div class="project-card-first">
                <hgroup>
                    <h2 class="noto-sans eight italic">{{ greeting }}</h2>
                    <p class="noto-sans four">I created these projects to develop UI/UX design and storytelling skills. For process, I researched topics that interested me such as fertility rates in nations around the globe. I then designed wireframes, selected typography and planned color schemes. I built the interfaces with a JavaScript framework, ensuring they were responsive and accessible. Some projects use maps and open source APIs.</p>
                </hgroup>
            </div>
            <div class="project-card" v-for="content in contents" :key="content.id">
                <RouterLink :to="`/projects/${content.id}`" aria-label="project thumbnail, leads to project page">
                    <figure class="project-image">
                        <img
                            :src="`/images/scenes/${content.src}-thumb.jpg`"
                            :alt="`${content.alt}`"
                            class="rounded"
                        >
                        <figcaption class="project-card-caption noto-sans four">
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