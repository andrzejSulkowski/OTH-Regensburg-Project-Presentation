<template>
    <div class="wrapper">
        <div id="mobile_os_combined-ww-monthly-202110-202210" width="600" height="400" style="width:600px; height: 400px;"></div>
        <span>Fig.{{index}} {{props.caption}}</span>
    </div>

</template>

<script setup lang="ts">
import { IFigure } from './../stores/figures/figure.model'
import { defineProps, computed, ref, onMounted} from 'vue'
import { useFigureStore } from './../stores/figures/figuresStore'

const props = defineProps({
    localSrc: {type: String, default: (() => null)},
    src: {type: String, default: (() => '')},
    caption: {type: String, default: (() => '')},
    id: {type: Number, default: (() => null)}
})

const getSrc = computed(() => props.localSrc ? props.localSrc : props.src)
let index = ref(0)
const figureStore = useFigureStore()

    onMounted(() => {
        const figure : IFigure = {src: props.src, caption: props.caption, id: props.id, counter: null}
        index.value = figureStore.addFigure(figure)

        const sources = ['https://www.statcounter.com/js/fusioncharts.js', 'https://gs.statcounter.com/chart.php?mobile_os_combined-ww-monthly-202110-202210&chartWidth=600']

        for (let i = 0; i < sources.length; i++) {
            const src = sources[i];
            const recaptchaScript = document.createElement("script");
            recaptchaScript.setAttribute(
            "src",
            src
            );
            document.head.appendChild(recaptchaScript);
        }
        removeBackground(0)
    })
    function removeBackground(counter: number){
        setTimeout(() => {
            let success = tryToRemoveBackground(counter)
            if(!success){
                removeBackground(counter++)
            }
        }, 100)
    }

    function tryToRemoveBackground(counter:number){
        let background = document.querySelector('#mobile_os_combined-ww-monthly-202110-202210 g')
        if(background){
            background?.parentNode?.removeChild(background)
            return true
        }else if(counter > 100){
            return true
        }else{
            return false
        }
        
    }
</script>

<style scoped>
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    span{
        width: 100%;
        margin-top: 10px;
        text-align: center;
        font-size: var(--caption-font-size);
        color: rgb(185, 185, 185);
        z-index: 10;
        font-size: 14px;
    }
    #mobile_os_combined-ww-monthly-202110-202210 svg{
        width: 700px;
        height: 600px;
    }
</style>
