<template>
    <div class="login_container_section">
        <div class="auth-container-box auth-main">
            <div class="auth-inner-container">
                <section>
                    <div class="auth-profile-section-register">
                        <section>
                            <div class="auth-profile-section-register">
                                <h3 className="auth-greet-text">Create an account!</h3>
                                <p>Please Fill the form below to see products. </p>
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
                        <form action="POST" :onsubmit="OnRegisterHandler">
                            <div class="auth-form-container">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" placeholder="" id="first_name" v-model="first_name" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" placeholder="" v-model="last_name" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Email Address </label>
                                <input type="email" placeholder="" v-model="email" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Password </label>
                                <input type="password" v-model="password" />
                            </div>
                            <div class="auth-form-container">
                                <button>Create Account</button>
                            </div>
                        </form>
                        <li id="links">
                            <RouterLink to="/auth/sign-in">
                                Already have an account ? Sign in
                            </RouterLink>
                        </li>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MessageAlert from "@/components/alert/MessageAlert.vue"
import { useUserStore } from "@/stores/user"
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

const userStore = useUserStore()

const { modalState, alert_message } = storeToRefs(userStore)
const { change_message, failed, success, closeModal } = userStore

const { user } = useUserStore()

const first_name = ref("")
const last_name = ref("")
const email = ref("")
const password = ref("")

// If user is already Signed in, Redirect to Home -> Product Page
onMounted(() => {
    const Token: string | null = localStorage.getItem("Token")

    if (Token) {
        // Redirect to Sign In Page
        router.push({ name: "home" })
    }
});


function OnRegisterHandler(e: any) {
    e.preventDefault()

    // if (!email.value || !password.value || !first_name.value || !last_name.value) {
    //     return;
    // }

    const UserExist: any = user.find((data) => {
        return data.email
    });

    if (UserExist.email !== email.value) {
        success() // successful

        // Alert Message
        change_message("Account Created Sucessfully")

        // Add to Mocked Database
        user.push({
            id: 1,
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value
        })

        // Redirect to Sign In Page after 3sec
        setTimeout(() => {
            closeModal()

            // Redirect to Sign In Page
            router.push({ name: "sign-in" })
        }, 500)


        // Log New users To Console
        console.log(user);
    } else {
        failed() // Failed Alert 
        change_message("You already Have an Account")
        // Rediresct
        setTimeout(() => {
            closeModal()
        }, 500)
    }
}




</script>

<style lang="scss" scoped>
.var {
    width: 100%;
}
</style>
