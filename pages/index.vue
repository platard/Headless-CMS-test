<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<template>
  <div class="container mx-auto px-8 md:w-8/12 sm:w-full">
    <h1 class="text-center font-bold my-10">Clothes Reviews</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
