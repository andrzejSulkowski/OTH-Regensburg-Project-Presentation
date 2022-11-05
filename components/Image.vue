<script setup lang="ts">
import { defineProps, computed, ref} from 'vue'
import { useFigureStore } from './../stores/figures/figuresStore'

const props = defineProps({
    src: {type: String, default: (() => '')},
    caption: {type: String, default: (() => '')}
})
const figureStore = useFigureStore()

const index = figureStore.getIndex()


</script>
<template>
    <div> 
        <img :src="props.src" alt="">
        <span>{{ index + props.caption}}</span>
    </div>
</template>

<style scoped>

    div{
        width: 200px;
        display: flex;
        flex-direction: column;
    }
    div span{
        text-align: center;
        font-size: var(--caption-font-size);
        color: rgb(185, 185, 185)
    }
</style>
