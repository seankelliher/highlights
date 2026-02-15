<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { contents } from "../data/contents-data.js";

// Routes
const route = useRoute();
const routeId = ref("");
routeId.value = route.params.id;

// When route changes, get content from contents-data.js where content.id matches route. 
let projectContent = computed(() => {
    return contents.find(content => content.id === routeId.value);
});

// Add title tag, meta description
document.title = `Sean Kelliher - ${projectContent.value.headline}`;
document.querySelector("meta[name='description']").setAttribute("content", projectContent.value.subHeadline);
</script>

<template>
    <div class="intro">
        <!-- Primary headlines -->
        <hgroup>
            <h2 class="noto-sans eight">{{ projectContent.headline }}</h2>
            <h3 class="noto-sans four">{{ projectContent.subHeadline }}</h3>
        </hgroup>

        <!-- Primary content -->
        <div class="intro-card">
            <figure class="intro-image">
                <img
                    :src="`/images/scenes/${projectContent.src}-full.jpg`"
                    :alt="`${projectContent.alt}`"
                    class="rounded"
                >
                <figcaption class="intro-card-caption noto-sans four">
                    {{ projectContent.caption }}
                </figcaption>
            </figure>
            <div class="intro-text">
                <h2 class="noto-sans eight">What this does</h2>
                <p class="noto-sans four">{{ projectContent.summary }}</p>
            </div>
        </div>
        <!-- Supporting sidebar -->
        <div class="intro-sidebar">
            <!-- Platform card (Netlify, Heroku) -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt class="noto-sans eight">Working version</dt>
                        <dd class="noto-sans four">
                            <a
                                :href="`https://${projectContent.platformUrl}`"
                                target="_blank"
                                class="blue"
                            >
                                View on {{ projectContent.platform }}
                            </a> <span v-if="projectContent.platformWarn">{{ projectContent.platformWarn }}</span>
                        </dd>
                    </dl>
                </div>
            </div>

            <!-- GitHub card -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt class="noto-sans eight">Source code</dt>
                        <dd class="noto-sans four">
                            <a
                                :href="`https://github.com/seankelliher/${projectContent.id}`"
                                target="_blank"
                                class="blue"
                            >
                                View on GitHub
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
            <!-- Technologies card -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt class="noto-sans eight">Technologies</dt>
                        <dd class="noto-sans four">{{ projectContent.techs }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    <!-- Wireframes -->
    <main>
        <hgroup>
            <h2 class="noto-sans eight">Wireframes</h2>
            <h3 class="noto-sans four">The interface was built based on these initial drawings</h3>
        </hgroup>
        <div class="wireframes">
            <figure
                v-for="wireframe in projectContent.wireframes"
                :key="wireframe.src"
                class="wireframe">
                <img class="rounded" :src="`/images/wireframes/${wireframe.src}.png`" alt="{{ wireframe.alt }}">
                <figcaption class="wire-caption noto-sans four">{{ wireframe.caption }}</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>