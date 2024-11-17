<script setup lang="ts">
const props = defineProps<{
  convId: string;
  question: string;
  answer: string;
}>();
</script>

<template>
  <div>
    <div class="flex justify-end pl-md mb-md">
      <div class="bg-light-2 rounded-md p-xs font-bold">
        {{ question }}
      </div>
    </div>
    <div class="flex justify-start pr-md mb-md">
      <div class="bg-dark-3 rounded-md p-xs text-light-1">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
