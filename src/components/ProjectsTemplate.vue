<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { contents } from "../data/contents-data.js";
import { links } from "../composables/repo-links.js";

// Routes
const route = useRoute();
const routeId = ref(""); //CHECK THIS, const v let
routeId.value = route.params.id;

// When route changes, get content from contents-data.js where content.id matches route. 
let projectContent = computed(() => {
    return contents.find(content => content.id === routeId.value);
});

watch(projectContent, () => {
    // console.log("route changed");
});

</script>

<template>
    <div class="summary">
        <!-- Primary content -->
        <div class="summary-card">
            <div class="summary-text">
                <h2 class="bevan-regular">{{ projectContent.headline }}</h2>
                <h3 class="noto-sans-four">{{ projectContent.subHeadline }}</h3>
            </div>
            <figure class="summary-image">
                <img
                    :src="`/images/scenes/${projectContent.src}-full.jpg`"
                    :alt="`${projectContent.alt}`"
                    class="rounded"
                >
                <figcaption class="project-caption noto-sans-four">
                    {{ projectContent.caption }}
                </figcaption>
            </figure>
            <div class="summary-text">
                <p class="noto-sans-four">{{ projectContent.summary }}</p>
            </div>
        </div>
        <!-- Supporting sidebar -->
        <div class="summary-supporting">
            <!-- Platform card (Netlify, Heroku) -->
            <div class="summary-supporting-card">
                <figure class="summary-supporting-image">
                    <img
                        src="/images/avatars/avatar-gears.jpg"
                        alt="cute colorful gear"
                    >
                    <figcaption hidden>avatar, machinery working</figcaption>
                </figure>
                <div class="summary-supporting-text">
                    <dl>
                        <dt class="noto-sans-seven">Working version</dt>
                        <dd class="noto-sans-four">
                            <a
                                :href="`https://${projectContent.platformUrl}`"
                                target="_blank"
                                class="blue"
                            >
                                View working version on {{ projectContent.platform }}
                            </a> <span v-if="projectContent.platformWarn">{{ projectContent.platformWarn }}</span>
                        </dd>
                    </dl>
                </div>
            </div>

            <!-- GitHub card -->
            <div class="summary-supporting-card">
                <figure class="summary-supporting-image">
                    <img
                        src="/images/avatars/avatar-discs.jpg"
                        alt="cute colorful discs"
                    >
                    <figcaption hidden>avatar, discs for storage</figcaption>
                </figure>
                <div class="summary-supporting-text">
                    <dl>
                        <dt class="noto-sans-seven">Source code</dt>
                        <dd class="noto-sans-four">
                            <a
                                :href="`https://github.com/seankelliher/${projectContent.id}`"
                                target="_blank"
                                class="blue"
                            >
                                View source code on GitHub
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
            <!-- Technologies card -->
            <div class="summary-supporting-card">
                <figure class="summary-supporting-image">
                    <img
                        src="/images/avatars/avatar-dials.jpg"
                        alt="cute colorful dials and buttons"
                    >
                    <figcaption hidden>avatar, dials and buttons for technology</figcaption>
                </figure>
                <div class="summary-supporting-text">
                    <dl>
                        <dt class="noto-sans-seven">Technologies</dt>
                        <dd class="noto-sans-four">{{ projectContent.techs }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    <!-- Wireframes -->
    <main>
        <div class="heading">
            <h2 class="bevan-regular">Wireframes</h2>
            <h3 class="noto-sans-four">The interface was built based on these initial drawings</h3>
        </div>
        <div class="wireframes">
            <figure
                v-for="wireframe in projectContent.wireframes"
                :key="wireframe.src"
                class="wireframe">
                <img class="rounded" :src="`/images/wireframes/${wireframe.src}.png`" alt="{{ wireframe.alt }}">
                <figcaption class="wire-caption noto-sans-four">{{ wireframe.caption }}</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>