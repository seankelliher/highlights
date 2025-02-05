<script setup>
import { ref } from "vue";

const menu = ref(false);

// Opens menu, displays "x" close icon, makes body NOT scrollable.
const showMenu = () => {
    menu.value = true;
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
};

// Closes menu, displays "hamburger" icon, makes body scrollable.
const hideMenu = () => {
    menu.value = false;
    const body = document.querySelector("body");
    body.style.overflow = "scroll";
};
</script>

<template>
    <header>
        <div v-if="menu" class="overlay">
        </div>
        <RouterLink to="/">
            <h1 class="bevan-regular">Sean Kelliher</h1>
        </RouterLink>

        <!-- Menu "hamburger" icon -->
        <figure
            v-if="!menu"
            class="menu-icon"
            @click="showMenu()"
            @keyup.enter="showMenu()"
            role="button"
            tabindex="0"
            aria-haspopup="menu"
        >
            <img src="/images/menu-icon-32.svg" alt="three horizontal lines 'hamburger' menu icon">
            <figcaption hidden>icon for the website's menu</figcaption>
        </figure>

        <!-- Close "x" icon -->
        <figure
            v-if="menu"
            class="menu-icon"
            @click="hideMenu()"
            @keyup.enter="hideMenu()"
            role="button"
            tabindex="0"
            aria-haspopup="menu"
        >
            <img src="/images/close-icon-32.svg" alt="the letter 'x'">
            <figcaption hidden>icon to close an open dialogue</figcaption>
        </figure>

        <!-- Menu - using "nav" tag because "menu" should house <li> -->
        <nav v-if="menu" role="list">
            <RouterLink
                to="/"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Home
            </RouterLink>
            <RouterLink
                to="/projects/us-national-parks-alerts"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                US National Parks
            </RouterLink>
            <RouterLink
                to="/projects/global-fertility-rates"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Global Fertility
            </RouterLink>
            <RouterLink
                to="/projects/us-senate-directory"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                US Senate
            </RouterLink>
            <RouterLink
                to="/projects/california-temps-precip"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Calif. Temps Precip
            </RouterLink>
            <RouterLink
                to="/projects/nyc-shooting-incidents"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Shootings
            </RouterLink>
            <RouterLink
                to="/projects/map-coordinates-dms"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Map Coordinates
            </RouterLink>
            <RouterLink
                to="/projects/nyc-firehouses"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Firehouses
            </RouterLink>
            <RouterLink
                to="/projects/nyc-public-pools"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Public Pools
            </RouterLink>
            <RouterLink
                to="/projects/mt-washington-temps"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Mt. Washington Temps
            </RouterLink>
            <RouterLink
                to="/projects/img-gallery"
                class="menu-item noto-sans-five"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Image Gallery
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped>
</style>