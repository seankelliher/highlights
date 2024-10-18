<script setup>
import { thumbs } from "../data/intro-thumbs.js";
import { ref, onMounted } from "vue";

const limit = ref(10);
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

// For future use. If you wanted to initially display only x number of thumbs.
/* function modifyLimit(x) {
    limit.value = x;
} */
</script>

<template>
    <div class="intro">
        <figure class="avatar">
            <img
                src="/images/avatar-design.png"
                alt="illustration, man with scarf"
            >
        </figure>
        <div class="intro-text">
            <p class="magenta"><strong>{{ greeting }}</strong> Thank you for visiting and I hope you find something of interest within.</p>
        </div>
        <figure class="avatar">
            <img
                src="/images/flower-petals-few.png"
                alt="illustration, flower with colorful petals"
            >
        </figure>
    </div>

    <main>
        <div class="heading">
            <div class="split-text">
                <h2>UI Highlights</h2>
                <!-- For future use, adds "See all" link. -->
                <!-- <p
                    v-if="limit === 5"
                    @click="modifyLimit(10)"
                    class="see-all">
                        See All
                </p> -->
            </div>
            <div class="limit-text">
                <p>I began these user interfaces as simple sketches on paper and research in spreadsheets. Next, I built more detailed wireframes, and then wireframes with (mostly <em>Material Design</em> inspired) styling. Lastly, I wrote the code to transform the designs into fully-functioning and accessible interfaces.</p>
            </div>
        </div>

        <div class="projects">
            <figure v-for="n in limit" :key="thumbs[n-1].id" class="project">
                <RouterLink :to="`/${thumbs[n-1].id}`">
                    <img
                        :src="`/images/thumbs/${thumbs[n-1].src}.jpg`"
                        :alt="`${thumbs[n-1].alt}`"
                        class="rounded"
                    >
                    <figcaption>{{ thumbs[n-1].caption }}</figcaption>
                </RouterLink>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>


