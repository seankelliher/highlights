<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="navy">Global Fertility Rates</h2>
            <p class="navy">This interface lets users explore fertility rates around the world. Using data from the Central Intelligence Agency (CIA), it dynamically creates an interactive world map where users can toggle on/off specific rates and highlight/unhighlight the matching nations. Users can also toggle a pop-up info box for each nation which reveals its exact fertility rate. The interface also contains a list of fertility rates for all nations, a list of regional averages, and a search bar to look up a specific nation's rate. It was built with Vue.js and Mapbox, with data stored locally.</p>
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
            <h3>Created with Figma and Material Theme Builder</h3>
        </div>
        <div class="wireframes">
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/global-fertility-rates1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text, map controls, paginated list of nations, list of regional averages, search bar, and placeholder for the map.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/global-fertility-rates1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/global-fertility-rates1c.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1C</strong> - Some rates selected (note shading on map) and result of user entering "Spain" in search bar.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>