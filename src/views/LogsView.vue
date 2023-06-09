<template>
  <div class="about">
    <h1>This is a logs viewer page</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  logId: {
    type: String,
    required: false
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
