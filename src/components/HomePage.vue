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
</script>

<template>
    <main>
        <div class="heading">
            <h2 class="bevan-regular">{{ greeting }}</h2>
            <h3 class="noto-sans-four">View maps, data visualization, guided work flows, directories</h3>
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
                        <figcaption class="project-caption noto-sans-four">
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