
<script setup lang="ts">
import { defineProps, computed, ref, onMounted} from 'vue'
import { useFigureStore } from './../stores/figures/figuresStore'
import { IFigure } from './../stores/figures/figure.model'
import { NullLiteral } from '@babel/types';
import { watch } from 'vue'
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
let index = ref<Number|null>(0)
const slidev = ref($slidev)
let onMountedFunction = props.onMountedFunction()
onMounted(() => {
    const figure : IFigure = {src: props.src, caption: props.caption, id: props.id, counter: null}

    index.value = figureStore.addFigure(figure)
    let onMountedFunction = props.onMountedFunction()

    setTimeout(() => {
        //onMountedFunction.run()
    }, 1000)
   
    
    //watch(props.onMountedFunction.watch, )

})
function temp(){
    console.log("run pulse effect")
    onMountedFunction.run()
}

</script>
<template>
    <div> 
        <object type="image/svg+xml" :data="getSrc" :id="props.cssId"></object>
        <span @click="temp()"> Fig.{{index}} {{props.caption}}</span>
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
