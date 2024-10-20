<script setup>
import { links } from "../composables/repo-links.js";
</script>

<template>
    <div class="summary">
        <div class="summary-text">
            <h2 class="magenta">US National Parks Alerts</h2>
            <p class="magenta">This interface offers users a means to easily access alerts from the National Parks Service on conditions at any of its 471 areas. Alerts are drawn through an API managed by the National Park Service. The interface was built with Vue.js and Express.js. The Express server is used mainly to hide the API's access token in an environmental variable. It follows the design aesthetic of the National Park Service's digital products.</p>
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
                    @click="links.openHerokuComplex($route.fullPath, 'fa601db96052')"
                    @keyup.enter="links.openHerokuComplex($route.fullPath, 'fa601db96052')"
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
        </div>
        <div class="wireframes">
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts1a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 1A</strong> - Initial wireframe with text, search bar, paginated list of parks, and placeholders for the decorative image and logo.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts1b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 1B</strong> - Wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts2a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 2A</strong> - Initial wireframe depicting a search for "Acadia National Park."</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts2b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 2B</strong> - "Search" wireframe with styling and images.</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts3a.png" alt="wireframe drawing of page, without styling">
                <figcaption class="wire-caption"><strong>Wireframe 3A</strong> - Initial wireframe depicting returned alert for "Acadia National Park."</figcaption>
            </figure>
            <figure class="wireframe">
                <img class="rounded" src="/images/wireframes/us-national-parks-alerts3b.png" alt="wireframe drawing of page, with styling">
                <figcaption class="wire-caption"><strong>Wireframe 3B</strong> - "Result" wireframe with styling and images.</figcaption>
            </figure>
        </div>
    </main>
</template>

<style scoped>
</style>