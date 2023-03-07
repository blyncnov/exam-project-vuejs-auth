<script setup lang="ts">
import ProductCard from '@/components/card/ProductCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const LogOut = () => {
  // Clear Token in Local Storage
  localStorage.clear()

  setTimeout(() => {
    // Redirect to Sign in Page After 1 sec
    router.push("/auth/sign-in")
  }, 1000)
}

</script>

<template>
  <header>
    <div class="nav-links">
      <h2> Auth.vue</h2>
      <button :onclick="LogOut">logout</button>
    </div>
  </header>
  <section class="product__grid">
    <ProductCard msg="Garri & Plaintain" />
    <ProductCard msg="Garri & Plaintain" />
    <ProductCard msg="Garri & Plaintain" />
    <ProductCard msg="Garri & Plaintain" />
    <ProductCard msg="Garri & Plaintain" />
    <ProductCard msg="Garri & Plaintain" />
  </section>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  color: white;
  background-color: #11402F;

  .nav-links {
    max-width: 90%;
    margin: 0 auto;
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: auto !important;
      background-color: white;
      color: #11402F;
      border-radius: 2px;
      padding: .8em 2em !important;
    }
  }
}

.product__grid {
  max-width: 90%;
  margin: 0 auto;
  padding: 2em 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media (max-width: 600px) {
    max-width: 85%;
    grid-template-columns: repeat(1, 1fr)
  }
}
</style>

