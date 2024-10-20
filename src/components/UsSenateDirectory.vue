<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">US Senate Directory</h2>
            <p class="magenta">This interface lets users explore current United States Senators. Using data from the US Senate, users can filter senators by state, gender, party, re-election date, or any combination of these. There is also a search bar so users can search for a senator by first, last, or full name. Since some senators have less formal and more formal names, the search was built to try to accommodate these variables. For example, people can search for Bob or Robert Casey, Dick or Richard Durbin. The interface was built with Vue.js, with data stored locally.</p>
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
                <img class="rounded" src="/images/wireframes/us-senate-directory1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text and placeholders for seal and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-senate-directory1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-senate-directory1c.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1C</strong> - Independent senators selected.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>