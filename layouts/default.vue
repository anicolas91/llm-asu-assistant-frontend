<script setup lang="ts">
import { HeaderHorizontal } from "@bobbykim/manguito-theme";
</script>

<template>
  <div>
    <HeaderHorizontal
      bg-color="dark-3"
      mobile-menu-bg-color="dark-2"
      :scroll-distance="100"
    >
      <template #content>
        <div class="py-2xs">
          <NuxtLink to="/">
            <h2 class="h2-md text-warning">ASU LLM ASSISTANT</h2>
          </NuxtLink>
        </div>
      </template>
      <template #content-right>
        <div class="flex items-center gap-4 text-lg text-light-1 font-bold">
          <div class="border-r-2 border-light-3 pr-4">
            <NuxtLink
              to="/"
              class="hover:text-light-4 focus:text-light-4 transition-colors duration-150 ease-linear"
              >MAIN</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/about"
              class="hover:text-light-4 focus:text-light-4 transition-colors duration-150 ease-linear"
              >ABOUT</NuxtLink
            >
          </div>
        </div>
      </template>
      <template #mobile-content="{ headerClose }">
        <div
          class="flex flex-col justify-center items-center gap-2 text-lg text-light-1 font-bold py-2xs"
        >
          <div>
            <NuxtLink
              to="/"
              class="hover:text-light-4 focus:text-light-4 transition-colors duration-150 ease-linear"
              @click="headerClose"
              >MAIN</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/about"
              class="hover:text-light-4 focus:text-light-4 transition-colors duration-150 ease-linear"
              @click="headerClose"
              >ABOUT</NuxtLink
            >
          </div>
        </div>
      </template>
    </HeaderHorizontal>
    <div class="bg-dark-2">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-effect::before {
  content: "";
  left: 0;
  bottom: 0;
  width: 0;
  position: absolute;
  transition: width 300ms linear;
  &:hover {
    width: 100%;
  }
}
</style>
