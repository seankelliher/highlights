<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import FooterPart from "./components/FooterPart.vue";
</script>

<template>
    <div id="container">
        <HeaderPart />
        <RouterView />
        <FooterPart />
    </div>
</template>

<style scoped>
</style>