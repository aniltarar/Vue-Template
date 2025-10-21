<template>
  <h1>Login Page</h1>
  <button @click="loginService">Login</button>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore();
const loginService = () => {
  authStore.loginUser({ email: 'test@example.com', password: 'password' });
};

</script>

<style></style>
