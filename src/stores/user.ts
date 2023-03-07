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
        first_name: 'Boluwatife',
        last_name: 'Taiwo',
        email: 'bholuwatife05@gmail.com',
        password: 'taiwo@altschool'
      },
      {
        id: 1,
        first_name: 'admin',
        last_name: 'admin',
        email: 'admin@gmail.com',
        password: 'admin'
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
