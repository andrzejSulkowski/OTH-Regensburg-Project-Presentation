<script setup lang="ts">
import { defineProps, computed, ref, onMounted} from 'vue'
import { useFigureStore } from './../stores/figures/figuresStore'
import { IFigure } from './../stores/figures/figure.model'

const props = defineProps({
    localSrc: {type: String, default: (() => null)},
    src: {type: String, default: (() => '')},
    caption: {type: String, default: (() => '')},
    id: {type: Number, default: (() => null)}
})
const figureStore = useFigureStore()

const getSrc = computed(() => props.localSrc ? props.localSrc : props.src)
let index = ref(0)
onMounted(() => {
    const figure : IFigure = {src: props.src, caption: props.caption, id: props.id, counter: null}

    index.value = figureStore.addFigure(figure)
})

</script>
<template>
    <div> 
        <img :src="getSrc" alt="">
        <span>Fig.{{index}} {{props.caption}}</span>
    </div>
</template>

<style scoped>

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    div span{
        text-align: center;
        font-size: var(--caption-font-size);
        color: rgb(185, 185, 185)
    }
</style>
