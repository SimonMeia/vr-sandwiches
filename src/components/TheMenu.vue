<script setup>

import { computed } from "vue";
import{sandwichToCook, newRecipe} from "../stores/sandwiches.js"

newRecipe()

const menu = computed(() => {
    let itemList = ''
    let sandwichSize = sandwichToCook.value.length
    sandwichToCook.value.forEach((item, i) => {
        itemList += sandwichSize-i + '.\t' + item.displayName + "\n"
    });
    return itemList
});
</script>

<template>
    <a-entity
        gltf-model="#menu"
        rotation="-90 0 0"
        position="-0.675 0.908 -1.623"
        scale="0.2 0.2 0.2"
    >
        <a-plane color="#CCC" height="1" width="1" scale="0.9 1.590 1.5" position="0 -0.033 0.028">
            <a-text
                value="MENU"
                position="0 0.36 0"
                align="center"
                color="black"
                width="3.28"
            />
            <a-text
                :value="menu"
                position="-0.388 -0.078 0"
                align="left"
                color="black"
                width="2.5"
            />
        </a-plane>
    </a-entity>
</template>
