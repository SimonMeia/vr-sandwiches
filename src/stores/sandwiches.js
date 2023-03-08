import { computed, ref } from "vue";
import { getRandomInt } from "../utils/math.js";

const ingredients = [
    { modelName: "bread", displayName: "Pain" },
    { modelName: "steak", displayName: "Steak" },
    { modelName: "egg", displayName: "Oeuf au plat" },
    { modelName: "salad", displayName: "Salade" },
    { modelName: "tomato", displayName: "Tomate" },
    { modelName: "oignon", displayName: "Oignon" },
    { modelName: "cheese", displayName: "Fromage" },
];


export const happyClients = ref(0)
export const slices = ref(0);
export const nextSliceHeight = computed(() => {
    return 0.93 + 0.015 * sandwich.value.length;
});
export const sandwich = ref([]);
export const sandwichToCook = ref([
    { modelName: "bread", displayName: "Pain" },
    { modelName: "steak", displayName: "Steak" },
    { modelName: "egg", displayName: "Oeuf au plat" },
    { modelName: "steak", displayName: "Steak" },
    { modelName: "egg", displayName: "Oeuf au plat" },
    { modelName: "bread", displayName: "Pain" },
]);

export function newRecipe() {
    let bread = ingredients.filter((ingredient) => {
        return ingredient.modelName === "bread";
    })[0];

    let newSandwich = [];
    newSandwich.push(bread);
    for (let i = 0; i < 4; i++) {
        let ingredient = ingredients[getRandomInt(ingredients.length)];
        if (ingredient.modelName == "bread") {
            i--;
        } else {
            newSandwich.push(ingredient);
        }
    }
    newSandwich.push(bread);

    sandwichToCook.value = newSandwich;
}

export function checkSandwich() {
    if (sandwich.value.length === 0 || sandwich.value.length != sandwichToCook.value.length)
        return false;
    for (let i = 0; i < sandwich.value.length; i++) {
        if (
            sandwich.value[i].substring(1) !==
            sandwichToCook.value[sandwichToCook.value.length - 1 - i].modelName
        )
            return false;
    }
    deleteSandwich();
    newRecipe();
    happyClients.value++
    return true;
}

export function deleteSandwich() {
    console.log('delete sandwich')
    sandwich.value = [];
    document.querySelectorAll(".sandwich").forEach((slice) => {
        slice.remove();
    });
}
