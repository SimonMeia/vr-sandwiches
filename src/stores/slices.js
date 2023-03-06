import { computed, ref } from "vue";

export const slices = ref(0);
export const nextSliceHeight = computed(() => {
    return 0.93 + 0.015 * slices.value;
});
