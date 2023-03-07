<template>
    <div :class="hasError ? ' alert-modal ' : 'alert-modal sucess'">
        <li> {{ msg }} </li>
    </div>
</template>

<script setup lang="ts">

import { useUserStore } from "@/stores/user"

const userStore = useUserStore()
const { hasError } = userStore

console.log(hasError);



defineProps<{
    msg: string
}>()


</script>

<style lang="scss" scoped>
/* Message Alert Style */

.sucess {
    background-color: green !important;
}
</style>  

