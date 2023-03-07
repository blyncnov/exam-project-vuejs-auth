import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({
    modalState: false,
    hasError: false,
    alert_message: 'Check login details again !',
    user: ref([
      {
        id: 1,
        first_name: 'Blyncnov',
        last_name: 'Jerry',
        email: 'blyncnov@altschool.com',
        password: 'taiwo@altschool'
      },
      {
        id: 2,
        first_name: 'admin',
        last_name: 'admin',
        email: 'admin@altschool.com',
        password: 'admin'
      },
      {
        id: 3,
        first_name: 'user',
        last_name: 'user',
        email: 'user@altschool.com',
        password: 'user'
      }
    ])
  }),

  actions: {
    change_message(message: any) {
      this.alert_message = message
    },

    success() {
      this.hasError = false
    },

    failed() {
      this.hasError = true
    },

    closeModal() {
      this.modalState = true

      // redirect after message logs
      setTimeout(() => {
        this.modalState = false
      }, 1500)
    }
  }
})
