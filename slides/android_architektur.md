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