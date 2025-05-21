<script setup lang="ts">
import GeneratorTool from './components/GeneratorTool.vue'
import LinktreeShow from './components/LinktreeShow.vue'
</script>

<template>
  <div class="min-h-screen flex w-full">
    <aside>
      <GeneratorTool />
    </aside>
    <main class="flex-1">
      <div id="linktree-preview">
        <LinktreeShow />
      </div>
    </main>
  </div>
  <!-- <RouterView /> -->
</template>

<style scoped></style>
