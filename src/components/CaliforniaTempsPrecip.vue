<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">California Temperatures &amp; Precipitation</h2>
            <p class="magenta">This interface lets users explore California's changing climate. It looks at NOAA data over a 50-year period. Specifically, it dynamically creates interactive charts that display (1) the number of days each year with temperature over 90 degrees F, and (2) the annual precipitation in inches. The interface was built with Vue.js, Chart.js, and Mapbox. Data is stored locally, which proved more reliable and efficient than continually fetching historical data from NOAA. Research was one of the most difficult aspects. NOAA has numerous weather stations. But very few had continuous records for a 50-year period.</p>
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
                <img src="/images/wireframes/california-temps-precip1a.png" alt="wireframe drawing of page, without styling">
                <figcaption><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholders for the decorative image, map of California with pins for weather stations, and interactive charts.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/california-temps-precip1b.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>