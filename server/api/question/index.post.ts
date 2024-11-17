import { useRuntimeConfig } from "#imports";
import { questionSchema, type ResSchemaType } from "@/schema";

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const { question } = await readValidatedBody(event, questionSchema.parse);
  const res = await $fetch<ResSchemaType>(`${config.llmSrcUrl}/question`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question,
    }),
  });
  return res;
});
