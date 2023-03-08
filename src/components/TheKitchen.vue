<script setup>
import { ref } from "vue";
</script>

<template>
    <a-entity 
        gltf-model="#kitchen" 
        rotation="0 90 0" 
        position="0 0 0" 
        scale="3 5 3">

        <a-plane
            position="0.096 0.26 -0.515"
            width="1"
            height="0.5"
        ></a-plane>
        <a-plane
            position="0.096 0.26 0.38"
            width="1"
            height="0.6"
            rotation="0 180 0"
        ></a-plane>
        <a-plane
            position="-0.4 0.26 -0.05"
            width="0.86"
            height="0.5"
            rotation="0 90 0"
        ></a-plane>
        <a-plane
            position="1.9 0.531 0.8"
            width="6"
            height="6"
            rotation="90 0 0"
        ></a-plane>
    
    </a-entity>
</template>
