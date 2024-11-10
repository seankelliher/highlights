<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import FooterPart from "./components/FooterPart.vue";
</script>

<template>
    <div id="container">
        <HeaderNav />
        <!-- <RouterView :key="$route.path" /> -->
        <RouterView :key="$route.path" />
        <FooterPart />
    </div>
</template>

<style scoped>
</style>