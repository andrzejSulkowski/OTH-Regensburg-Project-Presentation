<script setup lang="ts">
import { defineProps, computed, ref} from 'vue'

const nav = ref($slidev.nav)

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
    color: var(--prism-foreground);
}
</style>
