<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="navy">New York City Shooting Incidents</h2>
            <p class="navy">This interface lets users explore a dashboard and interactive map of year-to-date shooting incidents in New York City. The interface utilizes Open Data NYC's API to gather a list of individual shootings compiled by the NYPD. From there, it dynamically creates an interactive map with pins (and info pop-ups) for each shooting. It then sorts and compiles the data into statistics and populates a chart with them. The interface was built with Vue.js, Express.js, and Mapbox. The Express server is used mainly to hide the API's access token in an environmental variable. It follows the design aesthetic of NYC government's digital products.</p>
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
                    @click="links.openHerokuSimple($route.fullPath)"
                    @keyup.enter="links.openHerokuSimple($route.fullPath)"
                    tabindex="0"
                    role="link"
                >
                    <dt>Live Version</dt>
                    <dd>See live version on Heroku (opens slowly)</dd>
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
                <img class="rounded" src="/images/wireframes/nyc-shooting-incidents1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholders for logos and map.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/nyc-shooting-incidents1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/nyc-shooting-incidents2a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 2A</strong> - Initial wireframe depicting data for shooting victims.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/nyc-shooting-incidents2b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 2B</strong> - "Victims" wireframe with styling and images. "Pop up" depicted on map.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>