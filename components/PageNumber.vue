<script setup lang="ts">
import { defineProps, computed, ref} from 'vue'

const nav = ref($slidev.nav)
console.log("$slidev.nav", $slidev.nav)

</script>
<template>
    <div> {{nav.currentPage}} </div>
</template>

<style scoped>
a {
  border-color: transparent;
}
div {
    position:fixed;
    right: 20px;
    bottom: 5px;
    color: rgba(251, 251, 251, 0.363);
}
</style>
