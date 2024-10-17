<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">Map Coordinates DMS</h2>
            <p class="magenta">This interface lets users convert map coordinates from the traditional Degrees, Minutes, and Seconds (DMS) format to the Digital Degrees (DD) format used in computer-based mapping like Google Maps and Mapbox. It offers users a "step by step" guided interface to convert coordinates. It also dynamically generates a map of the location. The interface was built with Vue.js and Mapbox.</p>
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
            <figure class="flow-chart">
                <img src="/images/wireframes/map-coordinates-dms-flow.png" alt="flow chart drawing, steps for using interface">
                <figcaption><strong>Flow chart</strong> - Illustrates a user's pathway and options available at each step.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms1.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 1</strong> - step 1, enter your coordinates or choose a sample location.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms2.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 2</strong> - step 2, longitude coordinates.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms3.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 3</strong> - step 3, latitude coordinates.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms4.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 4</strong> - step 4, level of precision.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms5.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 5</strong> - step 5, review the data.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/map-coordinates-dms6.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 6</strong> - step 6, see converted coordinates and map of location.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>