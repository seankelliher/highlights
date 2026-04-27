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
        <div class="intro-headline">
            <hgroup>
                <h2>{{ projectContent.headline }}</h2>
                <p>{{ projectContent.subHeadline }}</p>
            </hgroup>
        </div>
        <!-- Primary content -->
        <div class="intro-card">
            <figure class="intro-image">
                <img
                    :src="`/images/scenes/${projectContent.src}-full.jpg`"
                    :alt="`${projectContent.alt}`"
                    class="rounded"
                >
                <figcaption class="intro-card-caption">
                    {{ projectContent.caption }}
                </figcaption>
            </figure>
            <div class="intro-text">
                <h3>About the Interface</h3>
                <p>{{ projectContent.summary }}</p>
            </div>
        </div>
        <!-- Supporting sidebar -->
        <div class="intro-sidebar">
            <!-- Platform card (Netlify, Heroku) -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt>Working Version</dt>
                        <dd>Available on {{ projectContent.platform }} <span v-if="projectContent.platformWarn">{{ projectContent.platformWarn }}</span>
                        </dd>
                    </dl>
                </div>
                <button class="btn-sm">
                    <a
                        :href="`https://${projectContent.platformUrl}`"
                        target="_blank"
                    >
                        View
                    </a>
                </button>
            </div>

            <!-- GitHub card -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt>Source Code</dt>
                        <dd>Available on GitHub</dd>
                    </dl>
                </div>
                <button class="btn-sm">
                    <a
                        :href="`https://github.com/seankelliher/${projectContent.id}`"
                        target="_blank"
                    >
                        View
                    </a>
                </button>
            </div>
            <!-- Technologies card -->
            <div class="intro-sidebar-card">
                <div class="intro-sidebar-text">
                    <dl>
                        <dt>Acknowledgment</dt>
                        <dd>Interface created with {{ projectContent.techs }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    <!-- Wireframes -->
    <div class="design">
        <hgroup>
            <h3>Wireframes</h3>
            <p>The interface was built based on these initial drawings</p>
        </hgroup>
        <div class="wireframes">
            <figure
                v-for="wireframe in projectContent.wireframes"
                :key="wireframe.src"
                class="wireframe">
                <img class="rounded" :src="`/images/wireframes/${wireframe.src}.png`" alt="{{ wireframe.alt }}">
                <figcaption class="wire-caption">{{ wireframe.caption }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<style scoped>
</style>