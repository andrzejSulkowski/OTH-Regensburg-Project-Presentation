---
level: 1
title: Einleitung
preload: false
---

# <img src="static/android-svgrepo-com.svg" alt="" srcset="" style="width: 38px; display: inline"/> Android 
Android Operating System History, Numbers and Facts

- Andy Rubin founded Android Inc. in 2003, which was acquired by Google in 2005
- In late 2008, many critics thought Android would fail miserablytheir knowledge
- Currently, more than 2 billion smart devices use Google Android OS as their operating system.
- Android’s Google Store has more than 48 billion apps installed in it, and most of them are free of cost.
- Open Source
- Multiple App Stores
- Written in many languages like Java, C, C++, XML, Assembly language, Python, Shell script, Go, Make, D.



<PageNumber/>
<!--
Comment
-->

---
level: 1
title: Architektur
preload: false
---

# Architektur


<div grid="~ cols-2 gap-10" class="my-container">
  <div>
    <p>You can use Vue components directly inside your slides.</p>

  </div>

  <div class="img-wrapper">
    <Image
        class="myImage"
        src="./static/android-platform-architecture.webp"
        caption="Android Architecture"
        :id="2"
    />
  </div>
</div>



<PageNumber/>

<style>
.my-container, .my-container *{
    height: 100%;
    position: relative;
}
.img-wrapper{
  float: right;

}
.myImage{

margin-left: auto;
margin-top: 2rem;
width: 26rem;
}
</style>
 
---
layout: center
---
<div class="img">
    <MarketShareFigure
    :id="1"
    caption="Market Share Mobile OS"
    src="https://gs.statcounter.com/os-market-share/mobile/worldwide"/>
</div>



<PageNumber/>

<!--

-->

<style scoped>
.img{
    width: 600px;
    height: auto;
    
}
.img img{
    width: 100%;
}

</style>

---
layout: center
---
# Angriff auf ein Android Smartphone
<div class="img">
    <Object
    :id="3"
    caption="Market Share Mobile OS"
    src="./static/Attacker_OS_App.svg"
    :onMountedFunction="print"/>
</div>
<div v-click class='circle absolute rounded-full w-[150px] h-[130px] border-solid border-4 border-color-red bottom-44.5% left-52.5%'></div>
<script setup lang="ts">
function print(){
    let myObject = document.querySelector("object")
    const newDoc = myObject.contentDocument
    const appField = newDoc.querySelector("#app-field")
    const companyField = newDoc.querySelector("#company-field")
    const line1 = newDoc.querySelector('#line-1')
    const line2 = newDoc.querySelector('#line-2')   
}
</script>
---
# Malware

Malicious software (Malware)

- ☠️ **Malware** - any software build for unauthorized purposes
- 💳 **Threat** - malware can steal, cipher sensitive data, show undesirable advertising, disrupt normal functions, or control the user's revice without their knowledge
- 🪱 **Types** - worms, botnet, rootkits, ransomware, trojans
- 📊 **4 Main Groups** - static-based, dynamic-based, vision-based, hybrid-based detection algorithms

