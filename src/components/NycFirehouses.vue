<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">New York City Firehouses</h2>
            <p class="magenta">This interface lets users explore firehouses in NYC. Using data from the FDNY, it dynamically creates an interactive map with pins (and info pop-ups) of firehouses within the five boroughs. The interface was built with Vue.js and Mapbox, with data stored remotely at Mapbox. It follows the design aesthetic of FDNY digital products.</p>
        </div>

        <div class="links">
            <div class="link">
                <dl @click="links.openGitHub($route.fullPath)">
                    <dt>GitHub</dt>
                    <dd>See code for project on GitHub</dd>
                </dl>
            </div>
            <div class="link">
                <dl @click="links.openNetlify($route.fullPath)">
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
                <img class="rounded" src="/images/wireframes/nyc-firehouses1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholders for logos and chart.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/nyc-firehouses1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/nyc-firehouses1c.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1C</strong> - "Pop up" with information on a specific firehouse.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>