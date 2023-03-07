import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('counter', () => {
  const quanity = ref(0)

  function increment() {
    quanity.value++
  }

  function decrement() {
    quanity.value--
  }

  return { quanity, decrement, increment }
})
