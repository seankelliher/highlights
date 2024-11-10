<script setup>
import { contents } from "../data/contents-data.js";
import { ref, onMounted } from "vue";

const greeting = ref("");

onMounted(() => {
    const event = new Date();
    const time = event.toLocaleTimeString("it-IT");
    const hours = time.substring(0,2);
    if (hours < 12 ) {
        greeting.value = "Good morning,";
    } else if (hours >= 12 && hours < 18) {
        greeting.value = "Good afternoon,";
    } else if (hours >= 18) {
        greeting.value = "Good evening,";
    } else {
        greeting.value = "Hello there,";
    }
});
</script>

<template>
    <div class="intro">
        <figure class="intro-image">
            <img
                src="/images/avatars/avatar-persona.png"
                alt="illustration, man with scarf"
            >
            <figcaption hidden>avatar of friendly site owner</figcaption>
        </figure>
        <div class="intro-text">
            <p class="roboto-serif-four"><span class="greeting-msg roboto-serif-seven">{{ greeting }}</span> These projects below started with research and sketches on paper. From there, I built wireframes with Figma, using mostly Material Design as a handbook for colors, layout, and typography. Next, I selected technology, coded, and tested the interfaces across viewports and for accessibility.</p>
        </div>
        <figure class="intro-image">
            <img
                src="/images/avatars/avatar-target.png"
                alt="cute colorful colored circles"
            >
            <figcaption hidden>avatar, playful on target</figcaption>
        </figure>
    </div>

    <main>
        <div class="heading">
            <h2 class="bevan-regular">User Interfaces</h2>
            <h3 class="roboto-serif-four">Maps, data visualization, guided work flows, directories</h3>
        </div>
        <div class="projects">
            <div class="project-card" v-for="content in contents" :key="content.id">
                <RouterLink :to="`/projects/${content.id}`" aria-label="project thumbnail, leads to project page">
                    <figure class="project-image">
                        <img
                            :src="`/images/scenes/${content.src}-thumb.jpg`"
                            :alt="`${content.alt}`"
                            class="rounded"
                        >
                        <figcaption class="project-caption roboto-serif-four">
                            <strong>{{ content.thumbHead }}</strong>: {{ content.thumbSub }}
                        </figcaption>
                    </figure>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>