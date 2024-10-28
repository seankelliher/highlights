<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">Mt. Washington Temperatures</h2>
            <p class="magenta">This interface lets users explore data from the Mt. Washington Observatory. Specifically, it dynamically creates an interactive chart that displays average monthly temperatures over several decades. The Observatory is located on the summit of Mt. Washington in North Conway, New Hampshire and is the highest point in the Northeastern United States. The interface was built with Vue.js and Chart.js. Data was downloaded from the Observatory and stored locally.</p>
        </div>

        <div class="links">
            <div class="link">
                <dl
                    @click="links.openGitHub($route.fullPath)"
                    @keyup.enter="links.openGitHub($route.fullPath)"
                    tabindex="0"
                    role="link"
                >
                    <dt>GitHub</dt>
                    <dd>See code for project on GitHub</dd>
                </dl>
            </div>
            <div class="link">
                <dl
                    @click="links.openNetlify($route.fullPath)"
                    @keyup.enter="links.openNetlify($route.fullPath)"
                    tabindex="0"
                    role="link"
                >
                    <dt>Live Version</dt>
                    <dd>See live version on Netlify</dd>
                </dl>
            </div>
        </div>
    </div>
    <main>
        <div class="heading">
            <h2>Wireframes</h2>
        </div>
        <div class="wireframes">
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/mt-washington-temps1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholders for the decorative image and interactive chart.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/mt-washington-temps1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>