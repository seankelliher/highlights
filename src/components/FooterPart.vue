<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const address = ("<n uers=\"znvygb:foxryyvure@vpybhq.pbz\" ery=\"absbyybj\">Rznvy zr</n>".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
    const place = document.getElementById("place");
    place.innerHTML = address;
});
</script>

<template>
    <footer>
        <figure class="git-icon">
            <img src="/images/git-icon.png" alt="icon for Github">
            <figcaption hidden>Octocat icon for GitHub.</figcaption>
        </figure>
        <div class="footer-text">
            <p><a href="https://github.com/seankelliher" target="_blank">GitHub</a> | <span id="place"></span></p> 
        </div>
    </footer>
</template>

<style scoped>
</style>