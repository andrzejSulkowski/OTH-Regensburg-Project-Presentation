<script setup>
import { defineProps, computed, onMounted } from 'vue'
import {useFigureStore} from './../stores/figures/figuresStore' 

const figureStore = useFigureStore()


const props = defineProps({
})

onMounted(() => {
    figureStore.reset()
})

</script>
<template>
    
</template>

<style scoped>

</style>
