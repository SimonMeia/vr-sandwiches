<script setup>
import { computed, ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheNavMesh from "./TheNavMesh.vue";
import TheMainRoom from "./TheMainRoom.vue";
import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
import TheKitchen from "./TheKitchen.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/teleport-camera-rig.js";
import "../aframe/grabbable.js";
import "../aframe/clickable.js";

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
            <!-- <a-asset-item id="sound-1" response-type="arraybuffer" src="assets/sound1.mp3" preload="auto"></a-asset-item> -->
            <a-asset-item id="kitchen" src="assets/kitchen.glb"></a-asset-item>
            <a-asset-item id="cuttingboard" src="assets/round_cuttingboard.glb"></a-asset-item>
            <a-asset-item id="pan" src="assets/pan.glb"></a-asset-item>
            <a-asset-item id="plate" src="assets/plate.glb"></a-asset-item>
            <a-asset-item
                id="bread-cuttingboard"
                src="assets/bread_cuttingboard.glb"
            ></a-asset-item>
            <a-asset-item id="bread" src="assets/bread.glb"></a-asset-item>
            <a-asset-item id="steak" src="assets/steak.glb"></a-asset-item>
            <a-asset-item id="egg" src="assets/egg.glb"></a-asset-item>
            <a-asset-item id="salad" src="assets/salad.glb"></a-asset-item>
            <a-asset-item id="tomato" src="assets/tomato.glb"></a-asset-item>
            <a-asset-item id="cheese" src="assets/cheese.glb"></a-asset-item>
            <a-asset-item id="oignon" src="assets/oignon.glb"></a-asset-item>
        </a-assets>

        <template v-if="allAssetsLoaded">
            <!-- Setup 3D Scene -->
            <a-entity
                gltf-model="#kitchen"
                rotation="0 90 0"
                position="0 0 0"
                scale="3 5 3"
            ></a-entity>
            <a-entity
                gltf-model="#cuttingboard"
                rotation="0 90 0"
                position="-0.092 0.43 -1.68"
                scale="0.5 0.5 0.5"
            ></a-entity>
            <a-entity
                gltf-model="#pan"
                rotation="0 65 0"
                position="-1.292 0.948 -0.466"
                scale="0.4 0.4 0.4"
            ></a-entity>
            <a-entity
                gltf-model="#pan"
                rotation="0 -85 0"
                position="-1.312 0.948 -0.125"
                scale="0.4 0.4 0.4"
            ></a-entity>
            <a-entity
                gltf-model="#plate"
                rotation="0 -85 0"
                position="-0.930 0.610 1.010"
                scale="0.3 0.3 0.3"
            ></a-entity>
            <a-entity
                gltf-model="#plate"
                rotation="0 -85 0"
                position="-0.62 0.610 1.010"
                scale="0.3 0.3 0.3"
            ></a-entity>
            <a-entity
                gltf-model="#bread-cuttingboard"
                rotation="0 -80 0"
                position="0.634 0.859 0.868"
                scale="0.45 0.45 0.45"
            ></a-entity>

            <!-- Setup ingredients -->
            <a-entity
                gltf-model="#bread"
                rotation="0 -80 0"
                position="0.74 0.938 0.979"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #bread; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#steak"
                rotation="0 -35 0"
                position="-1.3 0.968 -0.14"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #steak; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#egg"
                rotation="0 -35 0"
                position="-1.3 0.968 -0.48"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #egg; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#salad"
                rotation="0 -35 0"
                position="-0.97 0.920 1"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #salad; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#tomato"
                rotation="0 70 0"
                position="-0.89 0.920 0.95"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #tomato; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#oignon"
                rotation="0 70 0"
                position="-0.56 0.920 0.95"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #oignon; target: #hand-right;"
            ></a-entity>
            <a-entity
                gltf-model="#cheese"
                rotation="0 70 0"
                position="-0.65 0.920 0.99"
                scale="0.5 1 0.5"
                clickable
                grabbable="modelName: #cheese; target: #hand-right;"
            ></a-entity>
            <!-- grabbable="target: #hand-right;" -->
        </template>

        <!-- <TheNavMesh /> -->

        <TheCameraRig />
    </a-scene>
</template>
