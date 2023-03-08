<script setup>
import "../aframe/emit-when-near.js";
import "../aframe/event-set.js";
import "../aframe/clickable.js";

import{happyClients} from "../stores/sandwiches.js"

</script>

<template>
    <a-entity
        gltf-model="#cork-board"
        rotation="0 -90 0"
        position="1.138 1.585 -0.3"
        scale="0.2 0.2 0.2"
    >
        <a-plane color="#CCC" opacity="0" height="1" width="1" position="0 0 0.82">
            <a-text
                value="Clients satisfaits"
                position="0 1 0"
                align="center"
                color="black"
                width="8"
            />
            <a-text
                :value="happyClients"
                position="0 0 0"
                align="left"
                color="black"
                width="8"
            />
            <!-- :text="`value: ${menu}; align:center; width: 2.5; color: black`" -->
            <!-- <a-entity material="color: black" text="value: MENU"></a-entity> -->
        </a-plane>
    </a-entity>
</template>
