
<script setup lang="ts">
import { defineProps, computed, ref, onMounted} from 'vue'
import { useFigureStore } from './../stores/figures/figuresStore'
import { IFigure } from './../stores/figures/figure.model'

const props = defineProps({
    localSrc: {type: String, default: (() => null)},
    cssId: {type: String, default: (() => '1')},
    src: {type: String, default: (() => '')},
    caption: {type: String, default: (() => '')},
    id: {type: Number, default: (() => null)},
    onMountedFunction: {type: Function, default: (() => null)}
})
const figureStore = useFigureStore()

const getSrc = computed(() => props.localSrc ? props.localSrc : props.src)
let index = ref(0)
onMounted(() => {
    const figure : IFigure = {src: props.src, caption: props.caption, id: props.id, counter: null}

    index.value = figureStore.addFigure(figure)

    setTimeout(() => {
        if(props.onMountedFunction){
            props.onMountedFunction()
        }
    }, 2000)

})

</script>
<template>
    <div> 
        <object type="image/svg+xml" :data="getSrc" :id="props.cssId"></object>
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
