---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
layout: intro
hideInToc: true
title: Mobile App Schwachstellenanalyse – Demo Android
---

<Initializer/>
# Mobile App Schwachstellenanalyse – Demo Android
<span><simple-icons-android mr-1/> </span> Andrzej Kazimierz Sulkowski - WiSe 22/23


---
theme: ./
colorSchema: 'auto'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
css: unocss
hideInToc: true
---
# Gliederung
<div class="px-10"> 
  <Toc
    :columns="1"
    :maxDepth="5"/>
</div>

<!-- Einleitung -->

---
src: ./slides/Einleitung/background_android.md
title: Was ist Android
---


---
src: ./slides/Einleitung/android_architektur.md
---

---
src: ./slides/Einleitung/why_is_android_important.md
---

---
src: ./slides/Einleitung/what_is_the_threat.md
---

<!-- Hauptteil -->

---
src: ./slides/Hauptteil/static analysis/reverse_engineering.md
---

---
src: ./slides/Hauptteil/static analysis/code_analyse.md
---

---
src: ./slides/Hauptteil/static analysis/root.md
---

---
src: ./slides/Hauptteil/static analysis/obfuscation_techniques.md
---

---
src: ./slides/Hauptteil/dynamic analysis/temp.md
---
---
src: ./slides/Hauptteil/tools.md
---

<!-- Schluss -->
---
src: ./slides/Schluss/milage-learn+.md
---

---
src: ./slides/Schluss/reflektion.md
---
