<script setup></script>

<template>
  <div class="stretch-container">
    <slot />
  </div>
</template>

<style scoped>

.stretch-container :slotted(> *) {
  width: 100% !important;
  height: 100% !important;
}

.stretch-container > img,
.stretch-container > video,
.stretch-container > picture {
  object-fit: scale-down;
}
</style>
