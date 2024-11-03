<script setup>
import { thumbs } from "../data/intro-thumbs.js";
import { ref, onMounted } from "vue";

// const limit = ref(10);
const greeting = ref("");

onMounted(() => {
    const event = new Date();
    const time = event.toLocaleTimeString("it-IT");
    const hours = time.substring(0,2);
    if (hours < 12 ) {
        greeting.value = "Good morning!";
    } else if (hours >= 12 && hours < 18) {
        greeting.value = "Good afternoon!";
    } else if (hours >= 18) {
        greeting.value = "Good evening!";
    } else {
        greeting.value = "Hello there!";
    }
});
</script>

<template>
    <div class="intro">
        <figure class="avatar">
            <img
                src="/images/avatar-design.png"
                alt="illustration, man with scarf"
            >
            <figcaption hidden>avatar of friendly site owner</figcaption>
        </figure>
        <div class="intro-text">
            <p class="navy"><strong>{{ greeting }}</strong> I began these interfaces as simple sketches on paper and research in spreadsheets. Next, I built more detailed wireframes, and then wireframes with (mostly Material Design inspired) styling. Lastly, I wrote the code to transform the designs into fully functioning and accessible interfaces.</p>
        </div>
        <figure class="avatar">
            <img
                src="/images/flower-petals-few.png"
                alt="illustration, flower with colorful petals"
            >
            <figcaption hidden>a pretty flower</figcaption>
        </figure>
    </div>

    <main>
        <div class="heading">
            <h2>User Interfaces</h2>
            <h3>Maps, data visualization, guided work flows, directories</h3>
        </div>
        <div class="projects">
            <div class="project-card" v-for="thumb in thumbs" :key="thumb.id">
                <RouterLink :to="`/${thumb.id}`">
                    <figure class="project">
                        <img
                            :src="`/images/thumbs/${thumb.src}.jpg`"
                            :alt="`${thumb.alt}`"
                            class="rounded"
                        >
                        <figcaption class="project-caption">
                            <strong>{{ thumb.headline }}</strong><br />{{ thumb.caption }}
                        </figcaption>
                    </figure>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>