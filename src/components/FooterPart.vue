<script setup>
import { ref, onMounted } from "vue";

const address = ref("");

onMounted(() => {
    address.value = ("foxryyvure@vpybhq.pbz".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
});
</script>

<template>
    <footer>
        <button class="noto-sans-four">
            <a :href="`mailto:${address}`">Email</a>
        </button>
        <button class="noto-sans-four">
            <a href="https://github.com/seankelliher" target="_blank">GitHub</a>
        </button>
    </footer>
</template>

<style scoped>
    a {
        display: block;
    }
</style>