<script setup>
import NavPart from "./NavPart.vue";
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
        <figure class="menu-icon" @click="toggleMenu()">
            <img src="/images/menu-icon-32.svg" alt="icon for website's menu">
        </figure>
        <NavPart :menu="menu" @hide-menu="hideMenu" />
    </header>
</template>

<style scoped>
</style>