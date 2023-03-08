<script setup>
import "../aframe/clickable.js";

import { deleteSandwich } from "../stores/sandwiches.js";


</script>

<template>
    <a-entity
        gltf-model="#bin"
        rotation="0 90 0"
        position="0.9 0 0.47"
        scale="0.25 0.25 0.25"
        clickable
        @click="deleteSandwich()"
    >
    </a-entity>

</template>
