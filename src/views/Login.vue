<template>
  <div class="views login">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <form class="form__login" @submit.prevent="login">
            <h1 class="h3 mb-3 fw-normal">Login here</h1>

            <div class="form-floating">
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="username"
                name="username"
                placeholder="e.g. username"
              />
              <label for="username">Username</label>
            </div>
            <div class="form-floating">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                name="password"
                autocomplete="on"
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const username = ref("");
const password = ref("");

function login() {
  // auth user against API

  // TEST
  // window.user = this.username;
  // this.$router.push({ name: "Protected" });

  window.user = username;

  const redirectPath = route.query.redirect || "/protected";
  router.push(redirectPath);
}
</script>