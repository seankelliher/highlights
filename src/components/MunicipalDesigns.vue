<script setup>

// Add title tag, meta description
document.title = "Sean Kelliher - Municipal Templates";
document.querySelector("meta[name='description']").setAttribute("content", "Wireframes for templates based on an existing design system.");
</script>

<template>
    <main>
        <div class="intro">
            <!-- Primary headlines -->
            <div class="intro-headline">
                <hgroup>
                    <h2>Municipal Templates</h2>
                    <p>While at the Municipal Art Society of New York, I designed these templates based on an existing design system.</p>
                </hgroup>
            </div>
        </div>
        <!-- Wireframes -->
        <div class="design">
            <div class="wireframes">
                <figure class="wireframe">
                    <img src="/images/wireframes/mas-video-page.png" alt="High fidelity wireframe of video gallery template">
                    <figcaption class="wire-caption">Wireframe: High fidelity video gallery</figcaption>
                </figure>
                <figure class="wireframe">
                    <img src="/images/wireframes/mas-tours-events.png" alt="High fidelity wireframe of tours template">
                    <figcaption class="wire-caption">Wireframe: High fidelity tours and events</figcaption>
                </figure>
                <figure class="wireframe">
                    <img src="/images/wireframes/mas-general-page.png" alt="High fidelity wireframe of initiatives template">
                    <figcaption class="wire-caption">Wireframe: High fidelity initiatives</figcaption>
                </figure>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>