<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import FooterPart from "./components/FooterPart.vue";
</script>

<template>
    <div id="container">
        <HeaderNav />
        <RouterView />
        <FooterPart />
    </div>
</template>

<style scoped>
</style>