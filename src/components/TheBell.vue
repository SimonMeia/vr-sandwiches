<script setup>
import "../aframe/emit-when-near.js";
import "../aframe/event-set.js";
import "../aframe/clickable.js";

import { randomHsl } from "../utils/color.js";
import { computed, ref } from "vue";
import { checkSandwich } from "../stores/sandwiches.js";

function ring(){
    console.log(checkSandwich())
}

</script>

<template>
    <a-entity
        gltf-model="#bell"
        rotation="0 0 0"
        position="0.4 0.908 -1.623"
        scale="0.05 0.05 0.05"
        clickable
        @click="ring()"
        sound="src: #bell-ring; autoplay: false; loop: false; on: click;"
    >
    </a-entity>


    <!-- <a-box
    :scale="`${scale} ${scale} ${scale}`"
    :material="`color: ${color}`"
    clickable
    emit-when-near="event: change-color; eventFar: reset-color; distance: 2.5"
    event-set__near="event: change-color; attribute: material.color; value: blue;"
    :event-set__click="`event: click; attribute: material.color; value: ${randomColor};`"
    :event-set__far="`event: reset-color; attribute: material.color; value: ${color};`"
    @click="randomColor = randomHsl()"
  ></a-box> -->
</template>
