<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheNavMesh from "./TheNavMesh.vue";
import TheMainRoom from "./TheMainRoom.vue";
import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
import TheKitchen from "./TheKitchen.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/teleport-camera-rig.js";

defineProps({
    scale: Number,
    overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
    <a-scene
        background="color: black;"
        renderer="colorManagement: true;"
        :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    >
        <a-assets @loaded="allAssetsLoaded = true">
            <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
            <!-- <a-asset-item id="room" src="assets/vr_gallery.glb"></a-asset-item> -->
            <!-- <a-asset-item id="sound-1" response-type="arraybuffer" src="assets/sound1.mp3" preload="auto"></a-asset-item> -->
            <a-asset-item id="kitchen" src="assets/kitchen_2.glb"></a-asset-item>
            <a-asset-item id="cuttingboard" src="assets/cutting_board.glb"></a-asset-item>
        </a-assets>

        <template v-if="allAssetsLoaded">
            <!-- <TheMainRoom :scale="scale" />
      <TheLifeCubeRoom /> -->

            <a-entity gltf-model="#kitchen" rotation="0 90 0" position="0 0 0" scale="3 5 3"></a-entity>
            <a-entity gltf-model="#cuttingboard" rotation="0 90 0" position="-0.6 0.28 -1" scale="8 8 8"></a-entity>
        </template>

        <!-- <TheNavMesh /> -->

        <TheCameraRig />
    </a-scene>
</template>
