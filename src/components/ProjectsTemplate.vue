<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { contents } from "../data/contents-data.js";
import { links } from "../composables/repo-links.js";

// Routes
const route = useRoute();
const routeId = ref(""); //CHECK THIS, const v let
routeId.value = route.params.id;

// Platform buttons
const netlify = ref();
const herokuSimple = ref();
const herokuComplex = ref();

let projectContent = computed(() => {
    return contents.find(content => content.id === routeId.value);
});

watch(projectContent, () => {
    // console.log("route changed");
});

// Assign value to platform buttons
netlify.value = projectContent.value.buttons.netlify;
herokuSimple.value = projectContent.value.buttons.herokuSimple;
herokuComplex.value = projectContent.value.buttons.herokuComplex;
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
            <!-- Netlify card -->
            <div
                v-if="netlify"
                @click="links.openNetlify($route.fullPath)"
                @keyup.enter="links.openNetlify($route.fullPath)"
                class="summary-supporting-card"
            >
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
                        <dd class="noto-sans-four"><u>View on {{ projectContent.platform }}</u></dd>
                    </dl>
                </div>
            </div>

            <!-- Heroku card for simple URLs -->
            <div
                v-if="herokuSimple"
                @click="links.openHerokuSimple($route.fullPath)"
                @keyup.enter="links.openHerokuSimple($route.fullPath)"
                class="summary-supporting-card"
            >
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
                        <dd class="noto-sans-four"><u>View on {{ projectContent.platform }}</u> (opens slowly)</dd>
                    </dl>
                </div>
            </div>

            <!-- Heroku card for complex URLs -->
            <div
                v-if="herokuComplex"
                @click="links.openHerokuComplex($route.fullPath, `${projectContent.buttons.herokuComplexId}`)"
                @keyup.enter="links.openHerokuComplex($route.fullPath, `${projectContent.buttons.herokuComplexId}`)"
                class="summary-supporting-card"
            >
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
                        <dd class="noto-sans-four"><u>View on {{ projectContent.platform }}</u> (opens slowly)</dd>
                    </dl>
                </div>
            </div>
            <!-- GitHub card -->
            <div
                @click="links.openGitHub($route.fullPath)"
                @keyup.enter="links.openGitHub($route.fullPath)"
                class="summary-supporting-card"
            >
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
                        <dd class="noto-sans-four"><u>View on GitHub</u></dd>
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
                    <!--<ul>
                        <li
                            v-for="(tech, index) in projectContent.techs"
                            :key="index"
                            class="noto-sans-four"
                        >{{ tech }}</li>
                    </ul>-->
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