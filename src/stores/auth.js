import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    status: "idle",
    user: JSON.parse(localStorage.getItem("user")) || null,
    message: "",
  }),
  getters: {},
  actions: {
    async loginUser(userData) {
      this.status = "loading";
      try {
        // Simulate API call
        this.status = "loading";
        console.log("Logging in user:", userData);
        // Simulate successful login
        this.user = {
          id: 1,
          name: "John Doe",
          email: userData.email,
        };
        localStorage.setItem("user", JSON.stringify(this.user));
        this.status = "success";
        this.message = "Login başarılı!";
      } catch (error) {
        console.log(error);
        this.status = "error";
        this.message =
          error.response.data.message ||
          "Login işlemi sırasında bir hata oluştu.";
      }
    },
  },
});
