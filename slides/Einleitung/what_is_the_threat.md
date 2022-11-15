
---
layout: center
title: Angriff
---
# Angriff
<div class="img relative">
    <Object
    :id="3"
    caption="Market Share Mobile OS"
    src="./static/Attacker_OS_App.svg"
    :onMountedFunction="init"/>
    <div v-click class='circle absolute rounded-full w-[150px] h-[130px] border-solid border-4 border-color-red bottom-44.5% left-52.5%'></div>
</div>

<script setup lang="ts">
function init($slidev){
  return {
    watch: ($slidev) => {
      return $slidev
    },
    run: async () => {
      let myObject = document.querySelector("object")
      const newDoc = myObject.contentDocument
      const appField = newDoc.querySelector("#app-field")
      const companyField = newDoc.querySelector("#company-field")
      const line1 = newDoc.querySelector('#line-1')
      const line2 = newDoc.querySelector('#line-2')
      let alpha = 1;
      let up = false
      setStrokeColor(`red`)
      pulse(alpha)
      function pulse(a){
          setTimeout((a) => {
            setStrokeColor(`rgba(255, 0, 0, ${alpha})`)
            if(up){
              alpha = alpha + 0.1
              if(alpha >= 1){
                up = false
              }
              pulse()
            }else{
              alpha = alpha - 0.1
              if(alpha <= 0.1){
                up = true
              }
              pulse()
            }
        }, 100)
      }
      function setStrokeColor (val){
        appField.setAttribute('stroke', val)
        companyField.setAttribute('stroke', val)
        line1.setAttribute('stroke', val)
        line2.setAttribute('stroke', val)
      }
    }
  }
}
</script>
