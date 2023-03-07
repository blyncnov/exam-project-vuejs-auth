<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  const Token: string | null = localStorage.getItem("Token")

  if (Token === null || Token === "") {
    console.log("You be thief, you dont have a Token");
    // Redirect to Sign In Page
    router.push({ name: "sign-in" })
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
