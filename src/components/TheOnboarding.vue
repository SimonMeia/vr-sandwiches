<script setup>
import { ref } from "vue";

defineProps({
    loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
        document.querySelector("a-scene").enterVR();
    }
}
</script>

<template>
    <div id="onboarding" v-if="showOnboarding">
        <div>
            <h1>VR Sandwiches</h1>
            <p style="text-align: left;">
                Bienvenue dans notre jeu de cuisine en réalité virtuelle ! Dans ce jeu, vous êtes le
                chef et votre objectif est de préparer des sandwiches délicieux en suivant les
                instructions de la recette affichée sur le bar. Pour assembler le sandwich, vous
                devrez prendre les ingrédients nécessaires dans la cuisine et les placer
                correctement sur l'assiette présente sur le bar.
            </p>
            <p style="text-align: left;">
                Une fois que vous avez terminé, cliquez sur la sonnette pour soumettre votre
                création pour vérification. Si vous avez commis une erreur, ne vous inquiétez pas,
                vous pouvez jeter le sandwich dans la poubelle et recommencer. Faites preuve de
                précision et de rapidité pour réussir chaque niveau et devenir le meilleur chef de
                sandwich !
            </p>
            <p v-if="!loaded">loading...</p>
            <button v-if="loaded" @click="enterScene()">Jouer</button>
            <div class="licences">
                <dl>
                    <dt>
                        <i>Included</i>
                    </dt>
                    <dt>
                        <a href="https://github.com/jure/aframe-blink-controls/" target="_blank"
                            >aframe-blink-controls</a
                        >
                    </dt>
                    <dd>
                        <a
                            href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
                            target="_blank"
                            >MIT License</a
                        >
                    </dd>

                    <dt>
                        <a
                            href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
                            target="_blank"
                            >simple-navmesh-constraint</a
                        >
                    </dt>
                    <dd>By Ada Rose Cannon under MIT License</dd>
                    <dt>
                        <a href="https://skfb.ly/ozHET" target="_blank">Furniture collection</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/charalamboscharalambous8" target="_blank"
                            >Harry Charalambous</a
                        >
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/ozG7Q" target="_blank">Sandwich assembly</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/charalamboscharalambous8" target="_blank"
                            >Harry Charalambous</a
                        >
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/opy8I" target="_blank"
                            >Food Equipment .Blend FREE Low Poly</a
                        >
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/LadyLionStudios" target="_blank"
                            >LordSamueliSolo</a
                        >
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/onIzV" target="_blank">Desk Bell</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/clintonabbott.art" target="_blank"
                            >ClintonAbbott.Art</a
                        >
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/6WRxV" target="_blank">Menu & Stand</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/libbycox" target="_blank">libbycox</a> under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/6XQI7" target="_blank">Waste Bin</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/GreenLineStudio" target="_blank"
                            >Lasse Harm</a
                        >
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/6RKF8" target="_blank">Restaurant</a>
                    </dt>
                    <dd>
                        by <a href="https://sketchfab.com/uouoamy" target="_blank">Amy</a> under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a href="https://skfb.ly/Nqwy" target="_blank">Cork Board</a>
                    </dt>
                    <dd>
                        by
                        <a href="https://sketchfab.com/lianhaggis" target="_blank">lianhaggis</a>
                        under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                    <dt>
                        <a
                            href="https://freesound.org/people/InspectorJ/sounds/415510/"
                            target="_blank"
                            >Bell, Counter, A.wav</a
                        >
                    </dt>
                    <dd>
                        by <a href="http://www.jshaw.co.uk/" target="_blank">Inspector</a> under
                        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                            >CC BY 4.0</a
                        >
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
}
a {
    color: #eee;
    text-decoration: none;
}
.licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
}
.licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
}
.licences dd {
    margin-left: 0;
    font-size: 0.8rem;
}

#onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
}
#onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
}
#onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
}
</style>
