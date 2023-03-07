<template>
    <div class="login_container_section">
        <div class="auth-container-box auth-main">
            <div class="auth-inner-container">
                <section>
                    <div class="auth-profile-section-register">
                        <section>
                            <div class="auth-profile-section-register">
                                <h3 className="auth-greet-text">Welcome Back!</h3>
                                <p>Sign in to continue</p>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div class="auth-form-section">
                        <div v-if="modalState">
                            <MessageAlert :msg="alert_message" />
                        </div>
                        <br>
                        <form :onsubmit="OnSubmitHandler">
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Email Address </label>
                                <input type="email" placeholder="" v-model="email" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Password </label>
                                <input type="password" v-model="password" />
                            </div>
                            <div class="auth-form-container">
                                <button>Sign In</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import MessageAlert from "@/components/alert/MessageAlert.vue"
import { useUserStore } from "@/stores/user"
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore()

const { modalState, alert_message } = storeToRefs(userStore)
const { change_message, closeModal, user, success, failed } = userStore

const email = ref("")
const password = ref("")

// If user is already Signed in, Redirect to Home -> Product Page
onMounted(() => {
    const Token: string | null = localStorage.getItem("Token")

    if (Token) {
        // Redirect to Home Page
        router.push({ name: "home" })
    }
});

const OnSubmitHandler = async (e: any) => {
    e.preventDefault()

    // Input cannot be empty
    if (!email.value || !password.value) {
        return;
    }

    // Check if user exist in Mocked Database Array
    const UserExist = user.filter((data: any) => data.email === email.value)

    // If a user exists
    if (UserExist.length !== 0) {

        // check their password and log them in if it is correct
        if (UserExist[0].password === password.value) {

            success() // Sucess Alert Logging In
            change_message("Awwn, Logging you in 😊 ");

            // save Token to Local Storage
            localStorage.setItem("Token", UserExist[0].first_name + "%%secured&25")

            // Redirect to Product Page after 3sec
            setTimeout(() => {
                closeModal()

                // Redirect to Product Page
                router.push({ name: "home" })
            }, 500)

        } else {
            failed() // Failed Alert 
            change_message("Invalid Email or Password");
            // Rediresct
            setTimeout(() => {
                closeModal()
            }, 500)
        }
    } else {
        failed()  // Failed Alert 

        change_message("Yo!!! you dont have an account -->  Create an account");

        // Redirect to Sign up Page after 3sec
        setTimeout(() => {
            closeModal()
        }, 1000)
    }
}

</script>

<style lang="scss" scoped>
.login_container_sectinon {
    width: auto;
}
</style>
