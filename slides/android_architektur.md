---
level: 1
title: Architektur

---

# Architektur


<div grid="~ cols-2 gap-10" class="container">
  <div>
    <p>You can use Vue components directly inside your slides.</p>

  </div>

  <div class="img-wrapper">
    <Image
        class="myImage"
        :src="`./static/android-platform-architecture.webp`"
        :caption="'Android Architecture'"
    />
  </div>
</div>



<PageNumber/>

<style>
.container, .container *{
    height: 100%;
    position: relative;
}
.img-wrapper{

}
.myImage{

margin-left: auto;
margin-top: 2rem;
width: 26rem;
}
</style>