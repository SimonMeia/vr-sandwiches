<script setup>
import "../aframe/clickable.js";

import { checkSandwich } from "../stores/sandwiches.js";

</script>

<template>
    <a-entity
        gltf-model="#bell"
        rotation="0 0 0"
        position="0.4 0.908 -1.623"
        scale="0.05 0.05 0.05"
        clickable
        @click="checkSandwich()"
        sound="src: #bell-ring; autoplay: false; loop: false; on: click;"
    >
    </a-entity>

</template>
