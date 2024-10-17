<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">New York City Public Pools</h2>
            <p class="magenta">This interface lets users explore public, city-owned swimming pools in New York City. Using data from NYC's Parks Department, it creates lists that can be filtered by borough or pool type, or a combination of the two. There is also a search bar to search for a pool by name. Returned pools appear as boxes with basic information (name, address, telephone). When clicked or tapped, the boxes "pop up" and expand to reveal more information such a pool dimensions and depth. The interface was built with Vue.js, with data stored locally. It follows the design aesthetic of NYC government's digital products.</p>
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
                <img src="/images/wireframes/nyc-public-pools1a.png" alt="wireframe drawing of page, without styling">
                <figcaption><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholder for logo.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/nyc-public-pools1b.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 1B</strong> - Wireframe with styling and image.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/nyc-public-pools2a.png" alt="wireframe drawing of page, without styling">
                <figcaption><strong>Wireframe 2A</strong> - Initial wireframe depicting indoor pools in Queens.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/nyc-public-pools2b.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 2B</strong> - "Indoor Queens" wireframe with styling and image.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/nyc-public-pools3a.png" alt="wireframe drawing of page, without styling">
                <figcaption><strong>Wireframe 3A</strong> - Initial wireframe with "pop up" details on pool displayed.</figcaption>
            </figure>
            <figure class="wireframe">
                <img src="/images/wireframes/nyc-public-pools3b.png" alt="wireframe drawing of page, with styling">
                <figcaption><strong>Wireframe 3B</strong> - "Pop up" wireframe with styling and image.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>