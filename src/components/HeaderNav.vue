<script setup>
//import NavPart from "./NavPart.vue";
import { ref } from "vue";

const menu = ref(false);

// If user, toggles menu on/off.
const toggleMenu = () => menu.value ? menu.value = false : menu.value = true;

// Automatically hides menu after user click item within it.
const hideMenu = () => menu.value = false;
</script>

<template>
    <header>
        <RouterLink to="/">
            <h1>Sean Kelliher</h1>
        </RouterLink>
        <figure
            class="menu-icon"
            @click="toggleMenu()"
            @keyup.enter="toggleMenu()"
            role="button"
            tabindex="0"
            aria-haspopup="listbox"
        >
            <img src="/images/menu-icon-32.svg" alt="three horizontal lines 'hamburger' menu icon">
            <figcaption hidden>icon for the website's menu</figcaption>
        </figure>
        <nav v-if="menu" role="listbox">
            <RouterLink
                to="/"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Home
            </RouterLink>
            <RouterLink
                to="/us-national-parks-alerts"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                 National Park Alerts
            </RouterLink>
            <RouterLink
                to="/global-fertility-rates"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Global Fertility Rates
            </RouterLink>
            <RouterLink
                to="/us-senate-directory"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                US Senate Directory
            </RouterLink>
            <RouterLink
                to="/california-temps-precip"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                California Temps Precip
            </RouterLink>
            <RouterLink
                to="/nyc-shooting-incidents"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Shootings
            </RouterLink>
            <RouterLink
                to="/map-coordinates-dms"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Map Coordinates
            </RouterLink>
            <RouterLink
                to="/nyc-firehouses"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Firehouses
            </RouterLink>
            <RouterLink
                to="/nyc-public-pools"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                NYC Public Pools
            </RouterLink>
            <RouterLink
                to="/mt-washington-temps"
                class="nav-item"
                @click="hideMenu()"
                @keyup.enter="hideMenu()"
                role="listitem"
            >
                Mt. Washington Temps
            </RouterLink>
            <RouterLink
                to="/img-gallery"
                class="nav-item"
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