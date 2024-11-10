<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const address = ("<n uers=\"znvygb:foxryyvure@vpybhq.pbz\" ery=\"absbyybj\">Rznvy</n>".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
    const place = document.getElementById("place");
    place.innerHTML = address;
});
</script>

<template>
    <footer>
        <button
            id="place"
            class="roboto-serif-four"
        >
            Email
        </button>
        <button class="roboto-serif-four">
            <a href="https://github.com/seankelliher" target="_blank">GitHub</a>
        </button>
    </footer>
</template>

<style scoped>
</style>