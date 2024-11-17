<script setup lang="ts">
import { type ResSchemaType } from "@/schema";
import { MclFormGroup, MclInputText } from "@bobbykim/mcl-forms";
import { useStorage } from "@vueuse/core";
import ResponseBlock from "~/components/ResponseBlock.vue";

const questionRef = ref<string>("");
const resStorage = useStorage<ResSchemaType[]>("res-storage", []);

useHead({
  title: "MAIN | ASU LLM Assistant",
  meta: [
    {
      property: "og:title",
      content: "MAIN | ASU LLM Assistant",
    },
  ],
});

const handleSubmit = async () => {
  if (questionRef.value === "") return;
  const res = await $fetch("/api/question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      question: questionRef.value,
    },
  });
  if (res) {
    resStorage.value.push(res);
    questionRef.value = "";
  }
};
const handleClear = () => {
  questionRef.value = "";
  resStorage.value = [];
};
</script>

<template>
  <div class="relative bg-dark-2">
    <div
      class="min-h-[calc(100vh-193px)] lg:min-h-[calc(100vh-199px)] px-xs py-sm lg:px-md lg:py-lg"
    >
      <ResponseBlock
        v-for="item in resStorage"
        :key="item.conversation_id"
        :conv-id="item.conversation_id"
        :question="item.question"
        :answer="item.answer"
      />
    </div>
    <div class="sticky bottom-0 w-full px-xs lg:px-md pb-2xs lg:pb-xs">
      <div class="relative bg-dark-3 p-xs rounded-lg w-full">
        <form @submit.prevent="handleSubmit">
          <MclFormGroup
            label-for="input-text"
            label="Ask Question:"
            text-color="light-1"
          >
            <div class="flex gap-2xs">
              <MclInputText
                id="input-text"
                rounded
                class="w-full"
                highlight-color="warning"
                v-model="questionRef"
              />
              <button
                type="submit"
                role="button"
                aria-label="submit"
                class="bg-warning rounded-full h-[40px] aspect-square flex justify-center items-center hover:bg-opacity-75 transition-colors duration-300 ease-linear text-light-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="w-sm aspect-square"
                  fill="currentColor"
                >
                  <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  />
                </svg>
              </button>
              <button
                title="Clear Conversation"
                aria-label="clear conversation"
                type="reset"
                @click="handleClear"
                class="bg-danger rounded-full h-[40px] aspect-square flex justify-center items-center hover:bg-opacity-75 transition-colors duration-300 ease-linear text-light-3 font-bold text-lg"
              >
                C
              </button>
            </div>
          </MclFormGroup>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
