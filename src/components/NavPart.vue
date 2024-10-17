<script setup>
//import { ref } from "vue";
//const nav = ref(true);
defineEmits(["hideMenu"]);

defineProps({
    menu: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <nav v-if="menu">
        <ul>
            <RouterLink to="/">
                <li @click="$emit('hideMenu', false)">Home</li>
            </RouterLink>
            <RouterLink to="/us-national-parks-alerts">
                <li @click="$emit('hideMenu', false)">National Park Alerts</li>
            </RouterLink>
            <RouterLink to="/global-fertility-rates">
                <li @click="$emit('hideMenu', false)">Global Fertility Rates</li>
            </RouterLink>
            <RouterLink to="/us-senate-directory">
                <li @click="$emit('hideMenu', false)">US Senate Directory</li>
            </RouterLink>
            <RouterLink to="/california-temps-precip">
                <li @click="$emit('hideMenu', false)">California Temps Precip</li>
            </RouterLink>
            <RouterLink to="/nyc-shooting-incidents">
                <li @click="$emit('hideMenu', false)">NYC Shootings</li>
            </RouterLink>
            <RouterLink to="/map-coordinates-dms">
                <li @click="$emit('hideMenu', false)">Map Coordinates</li>
            </RouterLink>
            <RouterLink to="/nyc-firehouses">
                <li @click="$emit('hideMenu', false)">NYC Firehouses</li>
            </RouterLink>
            <RouterLink to="/nyc-public-pools">
                <li @click="$emit('hideMenu', false)">NYC Public Pools</li>
            </RouterLink>
            <RouterLink to="/mt-washington-temperature">
                <li @click="$emit('hideMenu', false)">Mt. Washington Temps</li>
            </RouterLink>
            <RouterLink to="/img-gallery">
                <li @click="$emit('hideMenu', false)">Image Gallery</li>
            </RouterLink>
        </ul>
    </nav>
</template>

<style scoped>
</style>